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
	foodrate: '0'
}, {
	name: '广东',
	foodrate: '0'
}, {
	name: '江苏',
	foodrate: '0'
}, {
	name: '上海',
	foodrate: '0'
}, {
	name: '北京',
	foodrate: '0',
	tooltip: "<p>北京烤鸭<p><br><img src='images/美食地图/北京烤鸭1.jpg' width='250px' />"
}, {
	name: '福建',
	foodrate: '0'
}, {
	name: '山东',
	foodrate: '0'
}, {
	name: '四川',
	foodrate: '0'
}, {
	name: '湖北',
	foodrate: '0'
}, {
	name: '湖南',
	foodrate: '0'
}, {
	name: '辽宁',
	foodrate: '0'
}, {
	name: '天津',
	foodrate: '0'
}, {
	name: '河南',
	foodrate: '0'
}, {
	name: '黑龙江',
	foodrate: '0'
}, {
	name: '吉林',
	foodrate: '0'
}, {
	name: '内蒙古',
	foodrate: '0'
}, {
	name: '河北',
	foodrate: '0'
}, {
	name: '山西',
	foodrate: '0'
}, {
	name: '陕西',
	foodrate: '0',
	tooltip: "<p>羊肉泡馍<p><br><img src='http://i1.dpfile.com/2009-01-06/1409343_b.jpg' width='150px' />"
}, {
	name: '宁夏',
	foodrate: '0'
}, {
	name: '甘肃',
	foodrate: '0'
}, {
	name: '青海',
	foodrate: '0'
}, {
	name: '新疆',
	foodrate: '0'
}, {
	name: '西藏',
	foodrate: '0'
}, {
	name: '安徽',
	foodrate: '0'
}, {
	name: '江西',
	foodrate: '0'
}, {
	name: '重庆',
	foodrate: '0'
}, {
	name: '贵州',
	foodrate: '0'
}, {
	name: '云南',
	foodrate: '0'
}, {
	name: '广西',
	foodrate: '0'
}, {
	name: '海南',
	foodrate: '0'
}, {
	name: '香港',
	foodrate: '0'
}, {
	name: '台湾',
	foodrate: '0'
}];

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
		title: "中国美食地图",
		titleStyle: titleStyle,
		isRLabelVisible: true,
		legendTitle: "美食热度",
		legendVisible: false,
		isPanEnable: true,
		isZoomToolsVisible: true,
		logoPosition: "left_top",
		logoImage: "http://www.baidu.com/img/bdlogo.png",
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
				break;
			}
		}
		setMapData(mapData);
	}
	//		else
	//			alert('错误');
}

/*
	function onMapDoubleClick(event)
	{
		alert("fuck");
	}
*/
function onMapError(errorcode) {
	/*errorcode：错误编码，有关错误编码的详细描述可参考:
	"开发指南"-->"API参考"-->"错误编码"*/
	alert(errorcode);
}
window.onload = initMap;