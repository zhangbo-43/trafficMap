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
		x: 720,
		y: 0,
		id: 1,
		"children": [
			//  第一层左侧
			{
				x: 580,
				y: 160,
				x2: 580,
				y2: 190,
				value: 1500,
				bottomX: 60,
				bottomY: 180,
				width: 50,
				height: 50,
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
				bottomX: 470,
				bottomY: 180,
				width: 50,
				height: 50,
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
				bottomX: 130,
				bottomY: 240,
				width: 60,
				height: 60,
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
						"imgX": 640, //大图标位移
						"imgY": 420,
						"nameX": 660,//节点名称位移
						"nameY": 520,
						"totalNodeX": 660,//节点总量位移
						"totalNodeY": 540,
						"trendImgX": 736,//趋势图表位移
						"trendImgY": 526,
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
								"x": 600,
								"y": 640,
								"imgX": 500, //大图标位移
								"imgY": 540,
								"nameX": 520,//节点名称位移
								"nameY": 640,
								"totalNodeX": 520,//节点总量位移
								"totalNodeY": 660,
								"nodeX": 700,//节点量位移
								"nodeY": 460,
								"trendImgX": 736,//趋势图表位移
								"trendImgY": 526,
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
										"x": 0,
										"y": 52,
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
										"x": 25,
										"y": 52,
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
										"x": 25,
										"y": 52,
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
										"x": 25,
										"y": 52,
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
										"x": 25,
										"y": 52,
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
										"x": 25,
										"y": 52,
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
										"x": 25,
										"y": 52,
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
										"x": 25,
										"y": 52,
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
										"x": 25,
										"y": 52,
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
										"x": 25,
										"y": 52,
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
										"x": 25,
										"y": 52,
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
										"x": 25,
										"y": 52,
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
								"img": "",
								"x": 700,
								"y": 540,
								"imgX": 700, //大图标位移
								"imgY": 540,
								"nameX": 720,//节点名称位移
								"nameY": 640,
								"totalNodeX": 720,//节点总量位移
								"totalNodeY": 660,
								"nodeX": 900,//节点量位移
								"nodeY": 460,
								"trendImgX": 936,//趋势图表位移
								"trendImgY": 526,
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
								"x": 800,
								"y": 540,
								"imgX": 800, //大图标位移
								"imgY": 540,
								"nameX": 820,//节点名称位移
								"nameY": 640,
								"totalNodeX": 820,//节点总量位移
								"totalNodeY": 660,
								"nodeX": 1000,//节点量位移
								"nodeY": 460,
								"trendImgX": 1036,//趋势图表位移
								"trendImgY": 526,
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
				// imgUrl: require("../../assets/images/little.svg"),
				// arrowUrl: require("../../assets/images/arrow.svg"),
				value: 1200,
				bottomX: 270,
				bottomY: 270,
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
				bottomX: 405,
				bottomY: 240,
				width: 60,
				height: 60,
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
	markList: [
		//  第一层左右两个点
		{
			x: 730,
			y: 195,
			id: 12
		}, {
			x: 760,
			y: 280,
			id: 13
		},
		//  第二层左右两个点
		{
			x: 920,
			y: 320,
			id: 14
		}, {
			x: 1080,
			y: 280,
			id: 15
		}, {
			x: 1140,
			y: 195,
			id: 16
		},
	]
}
export default {
	dataset
}
