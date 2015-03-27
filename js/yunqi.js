function peitai() 
{
d3.select("#yqBook").remove();
d3.select("#yunqi").style('background-color', '#ffffff');

var yqWidth = 1340;
var yqHeight = 650;
var yqColor = d3.scale.category20();

var yqSvg = d3.select("#yunqi").append("svg")
	.attr("width", yqWidth)
	.attr("height", yqHeight);

var yqCount = 0;

yqSvg.append("image")
	.attr("x", 35)
	.attr("y", 500)
	.attr("width", 219)
	.attr("height", 90)
	.attr("xlink:href", "images/孕期百科/注释.jpg");

var svg_image = yqSvg.append("image")
	.attr("id","ptimg")
	.attr("x", yqWidth / 2 - 131)
	.attr("y", yqHeight / 2 - 120)
	.attr("width", 262)
	.attr("height", 241)
	.attr("xlink:href", "images/孕期百科/胚胎1.png");
// .on("click", function() {
//   switch (yqCount) {
//     case 0:
//       d3.select(this).attr("xlink:href", "1.png");
//       nodes = nodes2;
//       draw();
//       yqCount++;
//       break;
//     case 1:
//       d3.select(this).attr("xlink:href", "2.png");
//       nodes = nodes1;
//       draw();
//       yqCount--;
//       break;
//   }
// });

d3.json("data/yunqi5.json", function(error, root) {
	var nodes = root.nodes1;
	draw();

	function draw() 
	{
		var force = d3.layout.force()
			.gravity(0.01)
			.charge(function(d, i) {
				return i ? 0 : -100;
			})
			.chargeDistance(300)
			.nodes(nodes)
			.size([yqWidth, yqHeight])
			.start();

		var updateNodes = yqSvg.selectAll("circle").data(nodes);
		var enterNodes = updateNodes.enter();
		var exitNodes = updateNodes.exit();

		//update部分的处理方法
		updateNodes.attr("r", function(d) {
			return d.r;
		})
			.style("fill", function(d, i) {
				return d.color;
			})
			.attr("opacity", function(d, i) {
				return i ? 1 : 0;
			})
			.call(force.drag);

		//enter部分的处理方法
		enterNodes.append("circle")
			.attr("r", function(d) {
				return d.r;
			})
			.style("fill", function(d, i) {
				return d.color;
			})
			.attr("opacity", function(d, i) {
				return i ? 1 : 0;
			})
			.call(force.drag);

		//exit部分的处理方法
		exitNodes.remove();


		var updateText = yqSvg.selectAll(".nodetext").data(nodes);
		var enterText = updateText.enter();
		var exitText = updateText.exit();

		updateText.attr("class", "nodetext")
			.text(function(d) {
				return d.name;
			})
			.attr("font-size", "12px");

		enterText.append("text")
			.attr("class", "nodetext")
			.text(function(d) {
				return d.name;
			})
			.attr("font-size", "12px");

		exitText.remove();


		force.on("tick", function(e) {
			var q = d3.geom.quadtree(nodes),
				i = 0;
			while (++i < nodes.length) {
				q.visit(collide(nodes[i]));
			}

			nodes[0].x = yqWidth / 2;
			nodes[0].y = yqHeight / 2;

			yqSvg.selectAll("circle")
				.attr("cx", function(d) {
					return d.x;
				})
				.attr("cy", function(d) {
					return d.y;
				});

			yqSvg.selectAll(".nodetext")
				.attr("x", function(d, i) {
					return d.x - 15;
				});
			yqSvg.selectAll(".nodetext")
				.attr("y", function(d, i) {
					return d.y + 5;
				});
		});

		function collide(node) {
			var r = node.r + 16,
				nx1 = node.x - r,
				nx2 = node.x + r,
				ny1 = node.y - r,
				ny2 = node.y + r;
			return function(quad, x1, y1, x2, y2) {
				if (quad.point && (quad.point !== node)) {
					var x = node.x - quad.point.x,
						y = node.y - quad.point.y,
						l = Math.sqrt(x * x + y * y),
						r = node.r + quad.point.r;
					if (l < r) {
						l = (l - r) / l * .5;
						node.x -= x *= l;
						node.y -= y *= l;
						quad.point.x += x;
						quad.point.y += y;
					}
				}
				return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
			};

		}

		yqSvg.select("circle").on("click", function() {
			switch (yqCount) {
				case 0:
					yqSvg.select("#ptimg").attr("xlink:href", "images/孕期百科/胚胎2.png");
					nodes = root.nodes2;
					draw();
					yqCount++;
					break;
				case 1:
					yqSvg.select("#ptimg").attr("xlink:href", "images/孕期百科/胚胎3.png");
					nodes = root.nodes3;
					draw();
					yqCount++;
					break;
				case 2:
					yqSvg.select("#ptimg").attr("xlink:href", "images/孕期百科/胚胎4.png");
					nodes = root.nodes4;
					draw();
					yqCount++;
					break;
				case 3:
					yqSvg.select("#ptimg").attr("xlink:href", "images/孕期百科/胚胎5.png");
					nodes = root.nodes5;
					draw();
					yqCount++;
					break;
				case 4:
					d3.select("#yunqi").remove();
					$(document).ready(function(){
						siji();
					});
					break;
			}
		});
	}
});


}