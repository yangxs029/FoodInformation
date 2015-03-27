var map = null;

function initMap() {
	map = new Dituhui.Map(
		"myMap",
		"http://dev.dituhui.com/sdk/1.0.0/swfs/",
		"100000",
		Dituhui.MapType.RANGE,
		"setMapData",
		"onMapError"
	);
}

var mapData = [{
	name: '浙江',
	foodrate: '0',
	tooltip: "<b><font size='20' color='#238B45'>浙江西湖龙井</font></b><br><img src='images/美食地图/浙江西湖龙井2.jpg' width='250'/>"
}, {
	name: '广东',
	foodrate: '0',
	tooltip: "<b><font size='20' color='#238B45'>广东广州鸡仔饼</font></b><br><img src='images/美食地图/广东广州鸡仔饼.jpg' width='250'/>"
}, {
	name: '江苏',
	foodrate: '0',
	tooltip: "<b><font size='20' color='#238B45'>江苏苏式糕点</font></b><br><img src='images/美食地图/江苏苏式糕点1.jpg' width='250'/>"
}, {
	name: '上海',
	foodrate: '0',
	tooltip: "<b><font size='20' color='#238B45'>上海高桥松饼</font></b><br><img src='images/美食地图/上海高桥松饼.jpg' width='250'/>"
}, {
	name: '北京',
	foodrate: '0',
	tooltip: "<b><font size='20' color='#238B45'>北京烤鸭</font></b><br><img src='images/美食地图/北京烤鸭1.jpg' width='250'/>"
}, {
	name: '福建',
	foodrate: '0',
	tooltip: "<b><font size='20' color='#238B45'>福建佛跳墙</font></b><br><img src='images/美食地图/福建佛跳墙.jpg' width='250'/>"
}, {
	name: '山东',
	foodrate: '0',
	tooltip: "<b><font size='20' color='#238B45'>山东煎饼</font></b><br><img src='images/美食地图/山东煎饼.jpg' width='250'/>"
}, {
	name: '四川',
	foodrate: '0',
	tooltip: "<b><font size='20' color='#238B45'>四川茂县花椒</font></b><br><img src='images/美食地图/四川茂县花椒.jpg' width='250'/>"
}, {
	name: '湖北',
	foodrate: '0',
	tooltip: "<b><font size='20' color='#238B45'>湖北武汉热干面</font></b><br><img src='images/美食地图/湖北武汉热干面.jpg' width='250'/>"
}, {
	name: '湖南',
	foodrate: '0',
	tooltip: "<b><font size='20' color='#238B45'>湖南长沙臭豆腐</font></b><br><img src='images/美食地图/湖南长沙臭豆腐.jpg' width='250'/>"
}, {
	name: '辽宁',
	foodrate: '0',
	tooltip: "<b><font size='20' color='#238B45'>辽宁红参</font></b><br><img src='images/美食地图/辽宁红参.jpg' width='250'/>"
}, {
	name: '天津',
	foodrate: '0',
	tooltip: "<b><font size='20' color='#238B45'>天津麻花</font></b><br><img src='images/美食地图/天津麻花4.jpg' width='250'/>"
}, {
	name: '河南',
	foodrate: '0',
	tooltip: "<b><font size='20' color='#238B45'>河南烩面</font></b><br><img src='images/美食地图/河南烩面.jpg' width='250'/>"
}, {
	name: '黑龙江',
	foodrate: '0',
	tooltip: "<b><font size='20' color='#238B45'>黑龙江长白山木耳</font></b><br><img src='images/美食地图/黑龙江长白山木耳.jpg' width='250'/>"
}, {
	name: '吉林',
	foodrate: '0',
	tooltip: "<b><font size='20' color='#238B45'>吉林延边冷面</font></b><br><img src='images/美食地图/吉林延边冷面.jpg' width='250'/>"
}, {
	name: '内蒙古',
	foodrate: '0',
	tooltip: "<b><font size='20' color='#238B45'>内蒙古奶豆腐</font></b><br><img src='images/美食地图/蒙古奶豆腐.jpg' width='250'/>"
}, {
	name: '河北',
	foodrate: '0',
	tooltip: "<b><font size='20' color='#238B45'>河北唐山麻糖</font></b><br><img src='images/美食地图/河北唐山麻糖.jpg' width='250'/>"
}, {
	name: '山西',
	foodrate: '0',
	tooltip: "<b><font size='20' color='#238B45'>山西平遥牛肉</font></b><br><img src='images/美食地图/山西平遥牛肉1.jpg' width='250'/>"
}, {
	name: '陕西',
	foodrate: '0',
	tooltip: "<b><font size='20' color='#238B45'>陕西西安肉夹馍</font></b><br><img src='images/美食地图/陕西西安肉夹馍.jpg' width='250'/>"
}, {
	name: '宁夏',
	foodrate: '0',
	tooltip: "<b><font size='20' color='#238B45'>宁夏枸杞子</font></b><br><img src='images/美食地图/宁夏枸杞子.jpg' width='250'/>"
}, {
	name: '甘肃',
	foodrate: '0',
	tooltip: "<b><font size='20' color='#238B45'>甘肃兰州拉面</font></b><br><img src='images/美食地图/甘肃兰州拉面.jpg' width='250'/>"
}, {
	name: '青海',
	foodrate: '0',
	tooltip: "<b><font size='20' color='#238B45'>青海老酸奶</font></b><br><img src='images/美食地图/青海老酸奶2.jpg' width='250'/>"
}, {
	name: '新疆',
	foodrate: '0',
	tooltip: "<b><font size='20' color='#238B45'>新疆奶疙瘩</font></b><br><img src='images/美食地图/新疆奶疙瘩.jpg' width='250'/>"
}, {
	name: '西藏',
	foodrate: '0',
	tooltip: "<b><font size='20' color='#238B45'>新疆风干牦牛肉干</font></b><br><img src='images/美食地图/新疆风干牦牛肉干.jpg' width='250'/>"
}, {
	name: '安徽',
	foodrate: '0',
	tooltip: "<b><font size='20' color='#238B45'>安徽太和贡椿</font></b><br><img src='images/美食地图/安徽太和贡椿.jpg' width='250'/>"
}, {
	name: '江西',
	foodrate: '0',
	tooltip: "<b><font size='20' color='#238B45'>江西瓦罐汤</font></b><br><img src='images/美食地图/江西瓦罐汤.jpg' width='250'/>"
}, {
	name: '重庆',
	foodrate: '0',
	tooltip: "<b><font size='20' color='#238B45'>重庆小面</font></b><br><img src='images/美食地图/重庆小面1.jpg' width='250'/>"
}, {
	name: '贵州',
	foodrate: '0',
	tooltip: "<b><font size='20' color='#238B45'>贵州茅台</font></b><br><img src='images/美食地图/贵州茅台.jpg' width='250'/>"
}, {
	name: '云南',
	foodrate: '0',
	tooltip: "<b><font size='20' color='#238B45'>云南普洱</font></b><br><img src='images/美食地图/云南普洱.jpg' width='250'/>"
}, {
	name: '广西',
	foodrate: '0',
	tooltip: "<b><font size='20' color='#238B45'>广西刘三姐壮家牛肉干</font></b><br><img src='images/美食地图/广西刘三姐壮家牛肉干.jpg' width='250'/>"
}, {
	name: '海南',
	foodrate: '0',
	tooltip: "<b><font size='20' color='#238B45'>海南椰子</font></b><br><img src='images/美食地图/海南椰子.jpg' width='250'/>"
}, {
	name: '香港',
	foodrate: '0',
	tooltip: "<b><font size='20' color='#238B45'>香港早茶</font></b><br><img src='images/美食地图/香港早茶.jpg' width='250'/>"
}, {
	name: '台湾',
	foodrate: '0',
	tooltip: "<b><font size='20' color='#238B45'>台湾凤梨酥</font></b><br><img src='images/美食地图/台湾凤梨酥.jpg' width='250'/>"
}];

/*var data = [{name:'东北', foodrate:'0'},{name:'华北', foodrate:'0'}，
{name:'华中', foodrate:'0'},
{name:'华东', foodrate:'0'},
{name:'华南', foodrate:'0'},
{name:'西北', foodrate:'0'},
{name:'西南', foodrate:'0'},
{name:'港澳台', foodrate:'0'}
];*/

function setMapData() {
	var mapStyles = [{
		min: 0,
		max: 1
	}, {
		min: 1,
		max: 2
	}, {
		min: 2,
		max: 3
	}, {
		min: 3,
		max: 4
	}, {
		min: 4,
		max: 5
	}, {
		min: 5,
		max: 6
	}, {
		min: 6,
		max: 7
	}, {
		min: 7,
		max: 8
	}];
	var titleStyle = {
		fontSize: 25,
		fontColor: '#079B1B'
	};
	var option = {
		data: mapData,
		valueField: 'foodrate',
		styles: mapStyles,
		fillColorType: 'green',
		backgroundColor: "#ffffff",
		//backgroundColor:'#0',
		//backgroundImage:"http://www.baidu.com/img/bdlogo.png",
		//backgroundImageMode:"scale",
		title: "中国美食地图",
		titleStyle: titleStyle,
		isRLabelVisible: true,
		legendTitle: "美食热度",
		legendVisible: false,
		isPanEnable: true,
		isZoomToolsVisible: true,
		//logoPosition: "right_bottom",
		//logoUrl:"http://www.baidu.com",
		//logoImage: "http://www.baidu.com/img/bdlogo.png",
		events: [{
			eventName: "mousemove",
			isShowTooltip: true
		}, {
			eventName: "click",
			eventHandler: "onMapClick"
		}, {
			eventName: "dbclick",
			eventHandler: "onMapDoubleClick"
		}]
	};
	map.setMapOptions(option);
}

//鼠标单击时的监听函数
function onMapClick(event) {
	if (event.name) {
		//event.data.foodrate ++;
		for (var prop in mapData) {
			if (event.name === mapData[prop].name) {
				mapData[prop].foodrate++;
				//alert(event.name + " : " + event.data.foodrate);
				//break;
			}
		}
		setMapData(mapData);
		//setMapOptions(option);
	}
	//		else
	//			alert('错误');
}



	function onMapDoubleClick(event)
	{
		alert("DoubleClick");
		return;
	}

function onMapError(errorcode) {
	/*errorcode：错误编码，有关错误编码的详细描述可参考:
	"开发指南"-->"API参考"-->"错误编码"*/
	alert(errorcode);
}
window.onload = initMap;