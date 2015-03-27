var guanxiWidth = 600,
	guanxiHeight = 600,
	gxOuterRadius = Math.min(guanxiWidth, guanxiHeight) / 2 - 10,
	gxInnerRadius = gxOuterRadius - 24;

var formatPercent = d3.format(".1%");

var gxArc = d3.svg.arc()
	.innerRadius(gxInnerRadius)
	.outerRadius(gxOuterRadius);

var gxLayout = d3.layout.chord()
	.padding(.04)
	.sortSubgroups(d3.descending)
	.sortChords(d3.ascending);

var gxPath = d3.svg.chord()
	.radius(gxInnerRadius);

var gxSvg = d3.select("#guanxi").append("svg")
	.attr("width", guanxiWidth)
	.attr("height", guanxiHeight)
	.append("g")
	.attr("id", "circle")
	.attr("transform", "translate(" + guanxiWidth / 2 + "," + guanxiHeight / 2 + ")");

gxSvg.append("circle")
	.attr("r", gxOuterRadius);

d3.csv("data/table.csv", function(cities) {
	d3.json("data/matrix.json", function(matrix) {

		// Compute the chord layout.
		gxLayout.matrix(matrix);

		// Add a group per neighborhood.
		var group = gxSvg.selectAll(".group")
			.data(gxLayout.groups)
			.enter().append("g")
			.attr("class", "group")
			.on("mouseover", mouseover);

		// Add a mouseover title.
		// group.append("title").text(function(d, i) {
		// return cities[i].name + ": " + formatPercent(d.value) + " of origins";
		// });

		// Add the group arc.
		var groupPath = group.append("path")
			.attr("id", function(d, i) {
				return "group" + i;
			})
			.attr("d", gxArc)
			.style("fill", function(d, i) {
				return cities[i].color;
			});

		// Add a text label.
		var groupText = group.append("text")
			.attr("x", 6)
			.attr("dy", 15);

		groupText.append("textPath")
			.attr("xlink:href", function(d, i) {
				return "#group" + i;
			})
			.text(function(d, i) {
				return cities[i].name;
			})
			.attr("font-family", "微软雅黑")
			.attr("font-size", "12px")
			.attr("fill", "#2f2f2f");

		// Remove the labels that don't fit. :(
		groupText.filter(function(d, i) {
				return groupPath[0][i].getTotalLength() / 2 - 16 < this.getComputedTextLength();
			})
			.remove();

		// Add the chords.
		var chord = gxSvg.selectAll(".chord")
			.data(gxLayout.chords)
			.enter().append("path")
			.attr("class", "chord")
			.style("fill", function(d) {
				return cities[d.source.index].color;
			})
			.attr("d", gxPath)
			.style("opacity", 0.8);

		// Add an elaborate mouseover title for each chord.
		chord.append("title").text(function(d) {
			return cities[d.source.index].name + " → " + cities[d.target.index].name + ": " + formatPercent(d.source.value) + "\n" + cities[d.target.index].name + " → " + cities[d.source.index].name + ": " + formatPercent(d.target.value);
		});

		function mouseover(d, i) {
			chord.classed("fade", function(p) {
				return p.source.index != i && p.target.index != i;
			});
		}
	});
});