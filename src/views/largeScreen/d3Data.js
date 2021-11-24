const dataset = {
	"nodes":
	{
		"name": "话务",
		"totalVal": 700, //节点总量
		"value": 100, //节点量
		"abnormalVal": 300, //异常挂断量
		"interfaceVal": 200, //接口异常量
		"isFold": true, //是否展开节点 默认true 展开
		"type": 1, //类型
		x: 710,
		y: -35,
		id: 1,
		"children": [
			//  第一层左侧
			{
				x: 580,
				y: 160,
				x2: 580,
				y2: 190,
				value: 1500,
				//箭头坐标
				bottomX: 600,
				bottomY: 240,
				//数值坐标
				valueX: 585,
				valueY: 150,
				width: 50,
				height: 50,
				//标记点
				pointX: 700,
				pointY: 185,
				pointUrl: require("../../assets/images/light1.png"),
				"name": "互联网话务",
				"type": 1, //类型
				"isFold": true, //是否展开节点 默认true 展开
				"id": 1,
				"img": "",
				"totalVal": 700, //节点总量
				"abnormalVal": 300, //异常挂断量
				"interfaceVal": 200 //接口异常量
			},
			{
				x: 1210,
				y: 160,
				x2: 1220,
				y2: 190,
				id: 4,
				value: 900,
				bottomX: 1230,
				bottomY: 240,
				//数值坐标
				valueX: 1215,
				valueY: 150,
				width: 50,
				height: 50,
				pointX: 1120,
				pointY: 183,
				pointUrl: require("../../assets/images/light5.png"),
				"name": "跨网支撑",
				"type": 2, //类型
				"isFold": true, //是否展开节点 默认true 展开
				"img": "",
				"abnormalVal": 300, //异常挂断量
				"interfaceVal": 200 //接口异常量
			},
			{
				x: 640,
				y: 270,
				x2: 700,
				y2: 310,
				id: 5,
				value: 2000,
				bottomX: 660,
				bottomY: 350,
				//数值坐标
				valueX: 650,
				valueY: 260,
				width: 60,
				height: 60,
				pointX: 760,
				pointY: 265,
				pointUrl: require("../../assets/images/light2.png"),
				//贴片
				patchX: 827,
				patchY:226,
				patchUrl: require("../../assets/images/patch1.png"),
				"name": "语音话务",
				"type": 3, //类型
				"isFold": true, //是否展开节点 默认true 展开
				"totalVal": 700, //节点总量
				"abnormalVal": 300, //异常挂断量
				"interfaceVal": 200, //接口异常量
				"children": [
					{
						"name": "前置流程",
						"value": 1200, //数据量
						"type": 1, //类型
						"isFold": true, //是否展开节点 默认true 展开
						"id": 1,
						"img": "",
						"x": 690,
						"y": 550,
						"imgX": 620, //大图标位移
						"imgY": 420,
						"nameX": 620,//节点名称位移
						"nameY": 520,
						"totalNodeX": 620,//节点总量位移
						"totalNodeY": 540,
						"trendImgX": 716,//趋势图表位移
						"trendImgY": 526,
						bottomX: 660,
						bottomY: 546,
						"pathD": "M668 360 L 668 450",
						"totalVal": 700, //节点总量
						"abnormalVal": 300, //异常挂断量
						"interfaceVal": 200, //接口异常量
						"children": [
							{
								"name": "语音IVR",
								"type": 1, //类型
								"isFold": true, //是否展开节点 默认true 展开
								"id": 1,
								"img": "",
								"x": 460,
								"y": 620,
								bottomX: 660,
								bottomY: 350,
								"imgX": 400, //大图标位移
								"imgY": 580,
								"nameX": 420,//节点名称位移
								"nameY": 680,
								"totalNodeX": 420,//节点总量位移
								"totalNodeY": 700,
								"nodeX": 600,//节点量位移
								"nodeY": 500,
								"trendImgX": 510,//趋势图表位移
								"trendImgY": 690,
								"pathD": "M668 554 C 650 596,448 560,448 600",//曲线位置
								"totalVal": 700, //节点总量
								"value": 100, //节点量
								"abnormalVal": 300, //异常挂断量
								"interfaceVal": 200, //接口异常量
								"children": [
									{
										"name": "T0-转人工",
										"type": 1, //类型
										"isFold": true, //是否展开节点 默认true 展开
										"id": 1,
										"img": "",
										"x": 460,
										"y": 620,
										bottomX: 660,
										bottomY: 350,
										"imgX": 100, //大图标位移
										"imgY": 760,
										"nameX": 100,//按键名称位置
										"nameY": 860,
										"totalNodeX": 100,//节点总量位移
										"totalNodeY": 880,
										"nodeX": 600,//节点量位移
										"nodeY": 500,
										"trendImgX": 510,//趋势图表位移
										"trendImgY": 690,
										"pathD": "M668 554 C 650 596,448 560,448 600",//曲线位置
										"totalVal": 700, //节点总量
										"value": 100, //节点量
										"abnormalVal": 300, //异常挂断量
										"interfaceVal": 200 //接口异常量
									},
									{
										"name": "T12211-30分钟500M",
										"type": 2, //类型
										"isFold": true, //是否展开节点 默认true 展开
										"id": 1,
										"img": "",
										"x": 460,
										"y": 620,
										bottomX: 660,
										bottomY: 350,
										"imgX": 400, //大图标位移
										"imgY": 580,
										"nameX": 420,//节点名称位移
										"nameY": 680,
										"totalNodeX": 420,//节点总量位移
										"totalNodeY": 700,
										"nodeX": 600,//节点量位移
										"nodeY": 500,
										"trendImgX": 510,//趋势图表位移
										"trendImgY": 690,
										"pathD": "M668 554 C 650 596,448 560,448 600",//曲线位置
										"totalVal": 700, //节点总量
										"value": 100, //节点量
										"abnormalVal": 300, //异常挂断量
										"interfaceVal": 200 //接口异常量
									},
									{
										"name": "T2321-4G分享38元...",
										"type": 3, //类型
										"isFold": true, //是否展开节点 默认true 展开
										"id": 1,
										"img": "",
										"x": 460,
										"y": 620,
										bottomX: 660,
										bottomY: 350,
										"imgX": 400, //大图标位移
										"imgY": 580,
										"nameX": 420,//节点名称位移
										"nameY": 680,
										"totalNodeX": 420,//节点总量位移
										"totalNodeY": 700,
										"nodeX": 600,//节点量位移
										"nodeY": 500,
										"trendImgX": 510,//趋势图表位移
										"trendImgY": 690,
										"pathD": "M668 554 C 650 596,448 560,448 600",//曲线位置
										"totalVal": 700, //节点总量
										"value": 100, //节点量
										"abnormalVal": 300, //异常挂断量
										"interfaceVal": 200 //接口异常量
									},
									{
										"name": "T3221-1G流量换60M",
										"value": 1200, //数据量
										"type": 4, //类型
										"isFold": true, //是否展开节点 默认true 展开
										"id": 1,
										"img": "",
										"x": 460,
										"y": 620,
										bottomX: 660,
										bottomY: 350,
										"imgX": 400, //大图标位移
										"imgY": 580,
										"nameX": 420,//节点名称位移
										"nameY": 680,
										"totalNodeX": 420,//节点总量位移
										"totalNodeY": 700,
										"nodeX": 600,//节点量位移
										"nodeY": 500,
										"trendImgX": 510,//趋势图表位移
										"trendImgY": 690,
										"pathD": "M668 554 C 650 596,448 560,448 600",//曲线位置
										"totalVal": 700, //节点总量
										"abnormalVal": 300, //异常挂断量
										"interfaceVal": 200 //接口异常量
									},
									{
										"name": "T43211-流量限时包",
										"type": 4, //类型
										"isFold": true, //是否展开节点 默认true 展开
										"id": 1,
										"img": "",
										"x": 460,
										"y": 620,
										bottomX: 660,
										bottomY: 350,
										"imgX": 400, //大图标位移
										"imgY": 580,
										"nameX": 420,//节点名称位移
										"nameY": 680,
										"totalNodeX": 420,//节点总量位移
										"totalNodeY": 700,
										"nodeX": 600,//节点量位移
										"nodeY": 500,
										"trendImgX": 510,//趋势图表位移
										"trendImgY": 690,
										"pathD": "M668 554 C 650 596,448 560,448 600",//曲线位置
										"totalVal": 700, //节点总量
										"value": 100, //节点量
										"abnormalVal": 300, //异常挂断量
										"interfaceVal": 200 //接口异常量
									},
									{
										"name": "T52211-60分钟换1GB换...",
										"type": 4, //类型
										"isFold": true, //是否展开节点 默认true 展开
										"id": 1,
										"img": "",
										"x": 460,
										"y": 620,
										bottomX: 660,
										bottomY: 350,
										"imgX": 400, //大图标位移
										"imgY": 580,
										"nameX": 420,//节点名称位移
										"nameY": 680,
										"totalNodeX": 420,//节点总量位移
										"totalNodeY": 700,
										"nodeX": 600,//节点量位移
										"nodeY": 500,
										"trendImgX": 510,//趋势图表位移
										"trendImgY": 690,
										"pathD": "M668 554 C 650 596,448 560,448 600",//曲线位置
										"totalVal": 700, //节点总量
										"value": 100, //节点量
										"abnormalVal": 300, //异常挂断量
										"interfaceVal": 200 //接口异常量
									},
									{
										"name": "T43211-流量限时包",
										"type": 4, //类型
										"isFold": true, //是否展开节点 默认true 展开
										"id": 1,
										"img": "",
										"x": 460,
										"y": 620,
										bottomX: 660,
										bottomY: 350,
										"imgX": 400, //大图标位移
										"imgY": 580,
										"nameX": 420,//节点名称位移
										"nameY": 680,
										"totalNodeX": 420,//节点总量位移
										"totalNodeY": 700,
										"nodeX": 600,//节点量位移
										"nodeY": 500,
										"trendImgX": 510,//趋势图表位移
										"trendImgY": 690,
										"pathD": "M668 554 C 650 596,448 560,448 600",//曲线位置
										"totalVal": 700, //节点总量
										"value": 100, //节点量
										"abnormalVal": 300, //异常挂断量
										"interfaceVal": 200 //接口异常量
									},
									{
										"name": "T52211-60分钟换1GB换...",
										"type": 4, //类型
										"isFold": true, //是否展开节点 默认true 展开
										"id": 1,
										"img": "",
										"x": 460,
										"y": 620,
										bottomX: 660,
										bottomY: 350,
										"imgX": 400, //大图标位移
										"imgY": 580,
										"nameX": 420,//节点名称位移
										"nameY": 680,
										"totalNodeX": 420,//节点总量位移
										"totalNodeY": 700,
										"nodeX": 600,//节点量位移
										"nodeY": 500,
										"trendImgX": 510,//趋势图表位移
										"trendImgY": 690,
										"pathD": "M668 554 C 650 596,448 560,448 600",//曲线位置
										"totalVal": 700, //节点总量
										"value": 100, //节点量
										"abnormalVal": 300, //异常挂断量
										"interfaceVal": 200 //接口异常量
									},
									{
										"name": "T65321-充值与返还...",
										"type": 4, //类型
										"isFold": true, //是否展开节点 默认true 展开
										"id": 1,
										"img": "",
										"x": 460,
										"y": 620,
										bottomX: 660,
										bottomY: 350,
										"imgX": 400, //大图标位移
										"imgY": 580,
										"nameX": 420,//节点名称位移
										"nameY": 680,
										"totalNodeX": 420,//节点总量位移
										"totalNodeY": 700,
										"nodeX": 600,//节点量位移
										"nodeY": 500,
										"trendImgX": 510,//趋势图表位移
										"trendImgY": 690,
										"pathD": "M668 554 C 650 596,448 560,448 600",//曲线位置
										"totalVal": 700, //节点总量
										"value": 100, //节点量
										"abnormalVal": 300, //异常挂断量
										"interfaceVal": 200 //接口异常量
									},
									{
										"name": "T79766-流量限时加...",
										"type": 4, //类型
										"isFold": true, //是否展开节点 默认true 展开
										"id": 1,
										"img": "",
										"x": 460,
										"y": 620,
										bottomX: 660,
										bottomY: 350,
										"imgX": 400, //大图标位移
										"imgY": 580,
										"nameX": 420,//节点名称位移
										"nameY": 680,
										"totalNodeX": 420,//节点总量位移
										"totalNodeY": 700,
										"nodeX": 600,//节点量位移
										"nodeY": 500,
										"trendImgX": 510,//趋势图表位移
										"trendImgY": 690,
										"pathD": "M668 554 C 650 596,448 560,448 600",//曲线位置
										"totalVal": 700, //节点总量
										"value": 100, //节点量
										"abnormalVal": 300, //异常挂断量
										"interfaceVal": 200 //接口异常量
									},
									{
										"name": "T3213-9.9元3天流...",
										"type": 4, //类型
										"isFold": true, //是否展开节点 默认true 展开
										"id": 1,
										"img": "",
										"x": 460,
										"y": 620,
										bottomX: 660,
										bottomY: 350,
										"imgX": 400, //大图标位移
										"imgY": 580,
										"nameX": 420,//节点名称位移
										"nameY": 680,
										"totalNodeX": 420,//节点总量位移
										"totalNodeY": 700,
										"nodeX": 600,//节点量位移
										"nodeY": 500,
										"trendImgX": 510,//趋势图表位移
										"trendImgY": 690,
										"pathD": "M668 554 C 650 596,448 560,448 600",//曲线位置
										"totalVal": 700, //节点总量
										"value": 100, //节点量
										"abnormalVal": 300, //异常挂断量
										"interfaceVal": 200 //接口异常量
									},
									{
										"name": "T3312-5G158套餐",
										"type": 4, //类型
										"isFold": true, //是否展开节点 默认true 展开
										"id": 1,
										"img": "",
										"x": 460,
										"y": 620,
										bottomX: 660,
										bottomY: 350,
										"imgX": 400, //大图标位移
										"imgY": 580,
										"nameX": 420,//节点名称位移
										"nameY": 680,
										"totalNodeX": 420,//节点总量位移
										"totalNodeY": 700,
										"nodeX": 600,//节点量位移
										"nodeY": 500,
										"trendImgX": 510,//趋势图表位移
										"trendImgY": 690,
										"pathD": "M668 554 C 650 596,448 560,448 600",//曲线位置
										"totalVal": 700, //节点总量
										"value": 100, //节点量
										"abnormalVal": 300, //异常挂断量
										"interfaceVal": 200 //接口异常量
									},
								]
							},
							{
								"name": "语音导航",
								"type": 4, //类型
								"isFold": true, //是否展开节点 默认true 展开
								"id": 1,
								"x": 700,
								"y": 540,
								"imgX": 620, //大图标位移
								"imgY": 580,
								"nameX": 620,//节点名称位移
								"nameY": 680,
								"totalNodeX": 620,//节点总量位移
								"totalNodeY": 700,
								"nodeX": 640,//节点量位移
								"nodeY": 460,
								"trendImgX": 710,//趋势图表位移
								"trendImgY": 690,
								"pathD": "M668 554 V 620 610",//曲线位置
								"totalVal": 700, //节点总量
								"value": 100, //节点量
								"abnormalVal": 300, //异常挂断量
								"interfaceVal": 200 //接口异常量
							},
							{
								"name": "导航转IVR",
								"value": 1200, //数据量
								"type": 4, //类型
								"isFold": true, //是否展开节点 默认true 展开
								"id": 1,
								"img": "",
								"x": 840,
								"y": 580,
								"imgX": 840, //大图标位移
								"imgY": 580,
								"nameX": 840,//节点名称位移
								"nameY": 680,
								"totalNodeX": 840,//节点总量位移
								"totalNodeY": 700,
								"nodeX": 840,//节点量位移
								"nodeY": 460,
								"trendImgX": 930,//趋势图表位移
								"trendImgY": 690,
								"pathD": "M668 554 C 780 606,810 560,890 600",//曲线位置
								"totalVal": 700, //节点总量
								"abnormalVal": 300, //异常挂断量
								"interfaceVal": 200 //接口异常量
							}
						]
					},
				]
			},
			{
				x: 880,
				y: 350,
				x2: 920,
				y2: 360,
				id: 2,
				width: 70,
				height: 70,
				value: 1200,
				bottomX: 910,
				bottomY: 430,
				//数值坐标
				valueX: 930,
				valueY: 345,
				pointX: 910,
				pointY: 300,
				pointUrl: require("../../assets/images/light3.png"),
				//贴片
				patchX: 910,
				patchY:238,
				patchUrl: require("../../assets/images/patch2.png"),
				"name": "溢出流程",
				"type": 4, //类型
				"isFold": true, //是否展开节点 默认true 展开
				"totalVal": 700, //节点总量
				"abnormalVal": 300, //异常挂断量
				"interfaceVal": 200 //接口异常量
			},
			{
				x: 1140,
				y: 270,
				x2: 1160,
				y2: 320,
				id: 6,
				value: 1000,
				bottomX: 1165,
				bottomY: 350,
				width: 60,
				height: 60,
				//数值坐标
				valueX: 1150,
				valueY: 260,
				pointX: 1060,
				pointY: 265,
				pointUrl: require("../../assets/images/light4.png"),
				//贴片
				patchX: 985,
				patchY:220,
				patchUrl: require("../../assets/images/patch3.png"),
				"name": "视频话务",
				"type": 4, //类型
				"isFold": true, //是否展开节点 默认true 展开
				"totalVal": 700, //节点总量
				"abnormalVal": 300, //异常挂断量
				"interfaceVal": 200, //接口异常量
				"children": [
					{
						"name": "前置流程",
						"value": 1200, //数据量
						"type": 4, //类型
						"isFold": true, //是否展开节点 默认true 展开
						"id": 1,
						"img": "",
						"x": 25,
						"y": 52,
						"totalVal": 700, //节点总量
						"abnormalVal": 300, //异常挂断量
						"interfaceVal": 200, //接口异常量
						"children": [
							{
								"name": "视频IVVR",
								"value": 1200, //数据量
								"type": 4, //类型
								"isFold": true, //是否展开节点 默认true 展开
								"id": 1,
								"img": "",
								"x": 25,
								"y": 52,
								"totalVal": 700, //节点总量
								"abnormalVal": 300, //异常挂断量
								"interfaceVal": 200 //接口异常量
							}
						]
					},
				]
			},
		]
	}
	,
	"quantity": [
		{
			"name": "三星级用户级技能队",
			"id": 1,
			"x": 25,
			"y": 52,
			"value": 1200, //数据量
			"totalVal": 700, //总量
			"checkInVal": 100, //签入坐席
			"inLineVal": 200, //排队中
			"inService": 300 //服务中
		},
		{
			"name": "三星级用户级技能队",
			"id": 2,
			"x": 25,
			"y": 52,
			"value": 1200, //数据量
			"totalVal": 700, //总量
			"checkInVal": 100, //签入坐席
			"inLineVal": 200, //排队中
			"inService": 300 //服务中
		},
		{
			"name": "三星级用户级技能队",
			"id": 1,
			"x": 25,
			"y": 52,
			"value": 1200, //数据量
			"totalVal": 700, //总量
			"checkInVal": 100, //签入坐席
			"inLineVal": 200, //排队中
			"inService": 300 //服务中
		},
		{
			"name": "三星级用户级技能队",
			"id": 2,
			"x": 25,
			"y": 52,
			"value": 1200, //数据量
			"totalVal": 700, //总量
			"checkInVal": 100, //签入坐席
			"inLineVal": 200, //排队中
			"inService": 300 //服务中
		}
	],
	"lines": [
		{
			"id": 22,
			"sourceid": 1,
			"targetid": 2,
			"x1": 58,
			"y1": 65,
			"x2": 45,
			"y2": 86,
			"value": 200 //节点数量
		},
		{
			"id": 23,
			"sourceid": 1,
			"targetid": 2,
			"x1": 58,
			"y1": 65,
			"x2": 45,
			"y2": 86,
			"value": 200 //节点数量
		},
		{
			"id": 24,
			"sourceid": 1,
			"targetid": 2,
			"x1": 58,
			"y1": 65,
			"x2": 45,
			"y2": 86,
			"value": 200 //节点数量
		},
		{
			"id": 25,
			"sourceid": 1,
			"targetid": 2,
			"x1": 58,
			"y1": 65,
			"x2": 45,
			"y2": 86,
			"value": 200 //节点数量
		}
	],
}
export default {
	dataset
}
