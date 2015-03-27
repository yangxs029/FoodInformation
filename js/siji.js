var siji = function()
{
	$("#section2").empty();
	$("#section2").append("<div class='fp-slides'> </div>");
	$("#section2 .fp-slides").after("<div class='fp-controlArrow fp-next'></div>");
	$("#section2 .fp-slides").after("<div class='fp-controlArrow fp-prev'></div>");
	$("#section2 .fp-slides").append("<div class='fp-slidesContainer' style='width: 300%;'></div>");
	$("#section2 .fp-slidesContainer").append("<div class='slide fp-slide fp-table active' id='siji' style='width: 33.3333333333333%;'></div>");
	$("#siji").after("<div class='slide fp-slide fp-table' id='yuansu' style='width: 33.3333333333333%;'></div>");
	$("#yuansu").after("<div class='slide fp-slide fp-table' id='gai' style='width: 33.3333333333333%;'></div>");
	$("#siji").append("<div class='fp-tableCell'></div>");
	$("#yuansu").append("<div class='fp-tableCell'></div>");
	$("#gai").append("<div class='fp-tableCell'></div>");
	
	//$("#siji .fp-tableCell").append("<img src='images/孕期百科/四季背景.png' alt='四季食谱' id='sjBGI'></image>");
	$("#siji .fp-tableCell").append("<div id='sjBox'></div>");
	$("#sjBox").append("<img src='images/孕期百科/四季背景.png' alt='四季食谱' id='sjBgi' />");
	$("#yuansu .fp-tableCell").append("<img src='images/孕期百科/元素周期表.jpg' alt='元素周期表' id='ysbiao' />");
	$("#gai .fp-tableCell").append("<img src='images/孕期百科/钙.jpg' alt='钙' id='gaiImg' />");

	$("#sjBox").append("<img src='images/孕期百科/春.png' alt='春天益吃' class='sjImg' id='sjChun'/>");
	$("#sjBox").append("<img src='images/孕期百科/夏.png' alt='夏天益吃' class='sjImg' id='sjXia'/>");
	$("#sjBox").append("<img src='images/孕期百科/秋.png' alt='秋天益吃' class='sjImg' id='sjQiu'/>");
	$("#sjBox").append("<img src='images/孕期百科/冬.png' alt='冬天益吃' class='sjImg' id='sjDong'/>");
}