var caixiWidth = 1200,
  caixiHeight = 700,
  caixiRadius = Math.min(caixiWidth, caixiHeight) / 2.5,
  caixiPadding = 5,
  caixiDuration = 1200;

var caixiFlag = false;
var caixiX = d3.scale.linear()
  .range([0, 2 * Math.PI]);

var caixiY = d3.scale.sqrt()
  .range([0, caixiRadius]);

var caixiSvg = d3.select("#caixi").append("svg")
  .attr("width", caixiWidth)
  .attr("height", caixiHeight)
  .append("g")
  .attr("transform", "translate(" + caixiWidth / 2 + "," + (caixiHeight / 2 + 0) + ")");

var caixiPartition = d3.layout.partition()
  .value(function(d) {
    return d.size;
  });

var caixiArc = d3.svg.arc()
  .startAngle(function(d) {
    return Math.max(0, Math.min(2 * Math.PI, caixiX(d.x)));
  })
  .endAngle(function(d) {
    return Math.max(0, Math.min(2 * Math.PI, caixiX(d.x + d.dx)));
  })
  .innerRadius(function(d) {
    return Math.max(0, caixiY(d.y));
  })
  .outerRadius(function(d) {
    return Math.max(0, caixiY(d.y + d.dy));
  });

d3.json("data/caixi.json", function(error, root) {
  var stringwidth;
  var stringheight;
  // var SixColor
  var mycars = new Array()


  mycars[1] = "#FFF64A";
  mycars[2] = "#92F725";
  mycars[3] = "#25BFF7";
  mycars[4] = "#a1afc9";
  mycars[5] = "#ffb3a7";
  mycars[6] = "#BB47F5";
  mycars[7] = "#eedeb0";
  mycars[8] = "#9e9478";
  mycars[9] = "#ebf6f7";



  var path = caixiSvg.selectAll("path")
    .data(caixiPartition.nodes(root))
    .enter().append("path")
    .attr("d", caixiArc)
    //.style("fill", function(d) { return color((d.children ? d : d.parent).name); })
    .style("fill", function(d) {
      return mycars[d.color];
    })
    .style("fill-opacity", 1)
    .on("click", click);

  var text = caixiSvg.selectAll("text").data(caixiPartition.nodes(root));
  var gEnter = text.enter().append("g")
    .style("fill-opacity", 1)
    .style("fill", "#333333") //字体颜色
    .style("font-family", "微软雅黑")
    .style("font-size", "10px")
    .attr("text-anchor", function(d) {
      return caixiX(d.x + d.dx / 2) > Math.PI ? "end" : "start";
    })
    // .attr("dy", ".2em")
    .attr("transform", function(d) {
      var multiline = (d.name || "").split(" ").length > 1,
        angle = caixiX(d.x + d.dx / 2) * 180 / Math.PI - 90,
        rotate = angle + (multiline ? -.5 : 0);
      return "rotate(" + rotate + ")translate(" + (caixiY(d.y) + caixiPadding) + ")rotate(" + (angle > 90 ? -180 : 0) + ")";
    })
    .on("click", click);
  var textEnter = gEnter.append("text");
  textEnter.append("tspan")

  .attr("x", 0)
    .text(function(d) {
      return d.depth ? d.name.split(" ")[0] : "";
    });
  var tspan = textEnter.append("tspan")
    .attr("x", 0)
    .attr("dy", "1em")
    .text(function(d) {
      d.stringx = this.getBBox().x;
      d.stringy = this.getBBox().y;
      d.height = this.getBBox().height;
      d.width = this.getBBox().width;
      return d.depth ? d.name.split(" ")[1] || "" : "";
    });



  var rectEnter = gEnter.append("rect")

  .style("fill", function(d) {
    return mycars[d.color];
  }) //方块颜色
  .attr("x", function(d) {
    return d.stringx;
  })
    .attr("y", function(d) {
      return d.stringy;
    })
    .attr("width", function(d) {
      return d.width;
    })
    .attr("height", function(d) {
      return d.height;
    });


  var textEnter1 = gEnter.append("text");


  textEnter1.append("tspan")

  .attr("x", 0)
    .text(function(d) {
      return d.depth ? d.name.split(" ")[0] : "";
    });

  function click(d) {
    caixiFlag = false;
    path.transition()
      .duration(750)
      .attrTween("d", caixiArcTween(d));
    var i = 0;
    rectEnter.style("fill-opacity", 0); // 方格消失

    text.style("visibility", function(e) {
      return isParentOf(d, e) ? null : d3.select(this).style("visibility");
    })
      .transition()
      .duration(caixiDuration)
      .attrTween("text-anchor", function(d) {
        return function() {
          return caixiX(d.x + d.dx / 2) > Math.PI ? "end" : "start";
        };
      })
      .attrTween("transform", function(d) {
        var multiline = (d.name || "").split(" ").length > 1;
        return function() {


          var angle = caixiX(d.x + d.dx / 2) * 180 / Math.PI - 90,
            rotate = angle + (multiline ? -.5 : 0);
          if (i == 0)
            if (rotate == 90.000000000000 || (-123 < rotate && rotate < -122) || (242 < rotate && rotate < 243)) {
              //rectEnter.style("fill-opacity", 1);// 方块重新出现
            }
          i++;
          return "rotate(" + rotate + ")translate(" + (caixiY(d.y) + caixiPadding) + ")rotate(" + (angle > 90 ? -180 : 0) + ")";

        };

      })
      .style("fill-opacity", function(e) {
        return isParentOf(d, e) ? 1 : 1e-6;
      })
      .each("end", function(e) {
        d3.select(this).style("visibility", isParentOf(d, e) ? null : "hidden");
      });



  }
});

d3.select(self.frameElement).style("height", caixiHeight + "px");

function isParentOf(p, c) {
  if (p === c) return true;
  if (p.children) {
    return p.children.some(function(d) {
      return isParentOf(d, c);
    });
  }
  return false;
}


// Interpolate the scales!
function caixiArcTween(d) {
  var xd = d3.interpolate(caixiX.domain(), [d.x, d.x + d.dx]),
    yd = d3.interpolate(caixiY.domain(), [d.y, 1]),
    yr = d3.interpolate(caixiY.range(), [d.y ? 20 : 0, caixiRadius]);
  return function(d, i) {
    return i ? function(t) {
      return caixiArc(d);
    } : function(t) {
      caixiX.domain(xd(t));
      caixiY.domain(yd(t)).range(yr(t));
      return caixiArc(d);
    };
  };
}