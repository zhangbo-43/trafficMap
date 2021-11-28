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
		x: 835,
		y: 0,
		id: 1,
		"children": [
			{
				id: "21",
				x: 600,
				y: 50,
				size: "mini",  //default large mini
				value: 1500,
				name: "互联网话务",
			},
			{
				id: "22",
				x: 1210,
				y: 50,
				size: "mini",  //default large mini
				value: 900,
				name: "跨网支撑"
			},
			{
				id: "23",
				x: 710,
				y: 150,
				size: "default",  //default large mini
				value: 2000,
				name: "语音话务",
				"children": [
					{
						"name": "前置流程",
						"value": 1200, //数据量
						"type": 1, //类型
						"isFold": true, //是否展开节点 默认true 展开
						"id": 31,
						"img": "",
						"x": 733,
						"y": 300,
						"imgX": 720, //大图标位移
						"imgY": 300,
						"spreadX": 770,//加号减号坐标
						"spreadY": 320,
						"nameX": 720,//节点名称位移
						"nameY": 395,
						"totalNodeX": 705,//节点总量位移
						"totalNodeY": 415,
						"trendImgX": 800,//趋势图表位移
						"trendImgY": 400,
						'bottomX': 765,
						'bottomY': 430,
						"pathD": "M788 278 L 769 320",//曲线位置
						"totalVal": 700, //节点总量
						"abnormalVal": 300, //异常挂断量
						"interfaceVal": 200, //接口异常量

						"children": [
							{
								"name": "语音IVR",
								"type": 1, //类型
								"isFold": true, //是否展开节点 默认true 展开
								"id": 41,
								"img": "",
								"x": 460,
								"y": 480,
								bottomX: 506,
								bottomY: 584,
								"imgX": 465, //大图标位移
								"imgY": 460,
								"spreadX": 515,//加号减号坐标
								"spreadY": 480,
								"nameX": 485,//节点名称位移
								"nameY": 555,
								"totalNodeX": 465,//节点总量位移
								"totalNodeY": 575,
								"nodeX": 675,//节点量位移
								"nodeY": 500,
								"trendImgX": 555,//趋势图表位移
								"trendImgY": 560,
								"pathD": "M765 440 C 710 470 490 430,515 480",//曲线位置
								"totalVal": 700, //节点总量
								"value": 100, //节点量
								"abnormalVal": 300, //异常挂断量
								"interfaceVal": 200, //接口异常量
								"children": [
									{
										"name": "T0-转人工",
										"type": 1, //类型
										"isFold": true, //是否展开节点 默认true 展开
										"id": 51,
										"img": "",
										"x": 100,
										"y": 700,
										"spreadX": 150,//加号减号坐标
										"spreadY": 700,
										"imgX": 100, //大图标位移
										"imgY": 680,
										"nameX": 100,//按键名称位置
										"nameY": 764,
										"InterfaceImgX": 170, //异常接口位置
										"InterfaceImgY": 766,
										"totalNodeX": 100,//节点总量位置
										"totalNodeY": 800,
										"nodeX": 100,//节点量位移
										"nodeY": 820,
										"trendImgX": 170,//趋势图表位移
										"trendImgY": 808,
										"breakOffX": 200, //异常挂断文字位置
										"breakOffY": 822,
										"breakOffImgX": 230, //异常挂断图标位置
										"breakOffImgY": 810,
										"bottomX": 140,
										"bottomY": 830,
										"pathD": "M512 600 C510 650,140 630,150 700",//曲线位置
										"totalVal": 700, //节点总量
										"value": 100, //节点量
										"abnormalVal": 300, //异常挂断量
										"interfaceVal": 200 //接口异常量
									},
									{
										"name": "T12211-30分钟500M",
										"type": 2, //类型
										"isFold": true, //是否展开节点 默认true 展开
										"id": 52,
										"img": "",
										"x": 300,
										"y": 700,
										"spreadX": 350,//加号减号坐标
										"spreadY": 700,
										"imgX": 300, //大图标位移
										"imgY": 680,
										"nameX": 300,//按键名称位置
										"nameY": 764,
										"InterfaceImgX": 370, //异常接口位置
										"InterfaceImgY": 766,
										"totalNodeX": 300,//节点总量位置
										"totalNodeY": 800,
										"nodeX": 300,//节点量位移
										"nodeY": 820,
										"trendImgX": 370,//趋势图表位移
										"trendImgY": 808,
										"breakOffX": 400, //异常挂断文字位置
										"breakOffY": 822,
										"breakOffImgX": 430, //异常挂断图标位置
										"breakOffImgY": 810,
										"bottomX": 340,
										"bottomY": 830,
										"pathD": "M512 600 C490 670,360 640,350 700",//曲线位置
										"totalVal": 700, //节点总量
										"value": 100, //节点量
										"abnormalVal": 300, //异常挂断量
										"interfaceVal": 200 //接口异常量
									},
									{
										"name": "T2321-4G分享38元",
										"type": 2, //类型
										"isFold": true, //是否展开节点 默认true 展开
										"id": 53,
										"img": "",
										"x": 500,
										"y": 700,
										"spreadX": 550,//加号减号坐标
										"spreadY": 700,
										"imgX": 500, //大图标位移
										"imgY": 680,
										"nameX": 500,//按键名称位置
										"nameY": 764,
										"InterfaceImgX": 570, //异常接口位置
										"InterfaceImgY": 766,
										"totalNodeX": 500,//节点总量位置
										"totalNodeY": 800,
										"nodeX": 500,//节点量位移
										"nodeY": 820,
										"trendImgX": 570,//趋势图表位移
										"trendImgY": 808,
										"breakOffX": 600, //异常挂断文字位置
										"breakOffY": 822,
										"breakOffImgX": 630, //异常挂断图标位置
										"breakOffImgY": 810,
										"bottomX": 540,
										"bottomY": 830,
										"pathD": "M512 600 C510 660,550 660,550 700",//曲线位置
										"totalVal": 700, //节点总量
										"value": 100, //节点量
										"abnormalVal": 300, //异常挂断量
										"interfaceVal": 200 //接口异常量
									},
									{
										"name": "T3221-1G流量换60M",
										"value": 1200, //数据量
										"type": 3, //类型
										"isFold": true, //是否展开节点 默认true 展开
										"id": 54,
										"img": "",
										"x": 700,
										"y": 700,
										"spreadX": 750,//加号减号坐标
										"spreadY": 700,
										"imgX": 700, //大图标位移
										"imgY": 680,
										"nameX": 700,//按键名称位置
										"nameY": 764,
										"InterfaceImgX": 770, //异常接口位置
										"InterfaceImgY": 766,
										"totalNodeX": 700,//节点总量位置
										"totalNodeY": 800,
										"nodeX": 700,//节点量位移
										"nodeY": 820,
										"trendImgX": 770,//趋势图表位移
										"trendImgY": 808,
										"breakOffX": 800, //异常挂断文字位置
										"breakOffY": 822,
										"breakOffImgX": 830, //异常挂断图标位置
										"breakOffImgY": 810,
										"bottomX": 740,
										"bottomY": 830,
										"pathD": "M512 600 C600 730,740 650,750 700",//曲线位置
										"totalVal": 700, //节点总量
										"abnormalVal": 300, //异常挂断量
										"interfaceVal": 200 //接口异常量
									},
									{
										"name": "T43211-流量限时包",
										"type": 2, //类型
										"isFold": true, //是否展开节点 默认true 展开
										"id": 55,
										"img": "",
										"x": 900,
										"y": 700,
										"spreadX": 950,//加号减号坐标
										"spreadY": 700,
										"imgX": 900, //大图标位移
										"imgY": 680,
										"nameX": 900,//按键名称位置
										"nameY": 764,
										"InterfaceImgX": 970, //异常接口位置
										"InterfaceImgY": 766,
										"totalNodeX": 900,//节点总量位置
										"totalNodeY": 800,
										"nodeX": 900,//节点量位移
										"nodeY": 820,
										"trendImgX": 970,//趋势图表位移
										"trendImgY": 808,
										"breakOffX": 1000, //异常挂断文字位置
										"breakOffY": 822,
										"breakOffImgX": 1030, //异常挂断图标位置
										"breakOffImgY": 810,
										"bottomX": 940,
										"bottomY": 830,
										"pathD": "M512 600 C660 700,940 610,950 700",//曲线位置
										"totalVal": 700, //节点总量
										"value": 100, //节点量
										"abnormalVal": 300, //异常挂断量
										"interfaceVal": 200 //接口异常量
									},
									{
										"name": "T52211-60分钟换1GB换",
										"type": 3, //类型
										"isFold": true, //是否展开节点 默认true 展开
										"id": 56,
										"img": "",
										"x": 1100,
										"y": 700,
										"spreadX": 1150,//加号减号坐标
										"spreadY": 700,
										"imgX": 1100, //大图标位移
										"imgY": 680,
										"nameX": 1100,//按键名称位置
										"nameY": 764,
										"InterfaceImgX": 1170, //异常接口位置
										"InterfaceImgY": 766,
										"totalNodeX": 1100,//节点总量位置
										"totalNodeY": 800,
										"nodeX": 1100,//节点量位移
										"nodeY": 820,
										"trendImgX": 1170,//趋势图表位移
										"trendImgY": 808,
										"breakOffX": 1200, //异常挂断文字位置
										"breakOffY": 822,
										"breakOffImgX": 1230, //异常挂断图标位置
										"breakOffImgY": 810,
										"bottomX": 1140,
										"bottomY": 830,
										"pathD": "M512 600 C580 670,1170 610,1150 700",//线位置
										"totalVal": 700, //节点总量M512 600 C510 650,140 630,150 700
										"value": 100, //节点量
										"abnormalVal": 300, //异常挂断量
										"interfaceVal": 200 //接口异常量
									},
									// {
									// 	"name": "T43211-流量限时包",
									// 	"type": 4, //类型
									// 	"isFold": true, //是否展开节点 默认true 展开
									// 	"id": 1,
									// 	"img": "",
									// 	"x": 460,
									// 	"y": 620,
									// 	bottomX: 660,
									// 	bottomY: 350,
									// 	"imgX": 400, //大图标位移
									// 	"imgY": 580,
									// 	"nameX": 420,//节点名称位移
									// 	"nameY": 680,
									// 	"totalNodeX": 420,//节点总量位移
									// 	"totalNodeY": 700,
									// 	"nodeX": 600,//节点量位移
									// 	"nodeY": 500,
									// 	"trendImgX": 510,//趋势图表位移
									// 	"trendImgY": 690,
									// 	"pathD": "M668 554 C 650 596,448 560,448 600",//曲线位置
									// 	"totalVal": 700, //节点总量
									// 	"value": 100, //节点量
									// 	"abnormalVal": 300, //异常挂断量
									// 	"interfaceVal": 200 //接口异常量
									// },
									// {
									// 	"name": "T52211-60分钟换1GB换...",
									// 	"type": 4, //类型
									// 	"isFold": true, //是否展开节点 默认true 展开
									// 	"id": 1,
									// 	"img": "",
									// 	"x": 460,
									// 	"y": 620,
									// 	bottomX: 660,
									// 	bottomY: 350,
									// 	"imgX": 400, //大图标位移
									// 	"imgY": 580,
									// 	"nameX": 420,//节点名称位移
									// 	"nameY": 680,
									// 	"totalNodeX": 420,//节点总量位移
									// 	"totalNodeY": 700,
									// 	"nodeX": 600,//节点量位移
									// 	"nodeY": 500,
									// 	"trendImgX": 510,//趋势图表位移
									// 	"trendImgY": 690,
									// 	"pathD": "M668 554 C 650 596,448 560,448 600",//曲线位置
									// 	"totalVal": 700, //节点总量
									// 	"value": 100, //节点量
									// 	"abnormalVal": 300, //异常挂断量
									// 	"interfaceVal": 200 //接口异常量
									// },
									// {
									// 	"name": "T65321-充值与返还...",
									// 	"type": 4, //类型
									// 	"isFold": true, //是否展开节点 默认true 展开
									// 	"id": 1,
									// 	"img": "",
									// 	"x": 460,
									// 	"y": 620,
									// 	bottomX: 660,
									// 	bottomY: 350,
									// 	"imgX": 400, //大图标位移
									// 	"imgY": 580,
									// 	"nameX": 420,//节点名称位移
									// 	"nameY": 680,
									// 	"totalNodeX": 420,//节点总量位移
									// 	"totalNodeY": 700,
									// 	"nodeX": 600,//节点量位移
									// 	"nodeY": 500,
									// 	"trendImgX": 510,//趋势图表位移
									// 	"trendImgY": 690,
									// 	"pathD": "M668 554 C 650 596,448 560,448 600",//曲线位置
									// 	"totalVal": 700, //节点总量
									// 	"value": 100, //节点量
									// 	"abnormalVal": 300, //异常挂断量
									// 	"interfaceVal": 200 //接口异常量
									// },
									// {
									// 	"name": "T79766-流量限时加...",
									// 	"type": 4, //类型
									// 	"isFold": true, //是否展开节点 默认true 展开
									// 	"id": 1,
									// 	"img": "",
									// 	"x": 460,
									// 	"y": 620,
									// 	bottomX: 660,
									// 	bottomY: 350,
									// 	"imgX": 400, //大图标位移
									// 	"imgY": 580,
									// 	"nameX": 420,//节点名称位移
									// 	"nameY": 680,
									// 	"totalNodeX": 420,//节点总量位移
									// 	"totalNodeY": 700,
									// 	"nodeX": 600,//节点量位移
									// 	"nodeY": 500,
									// 	"trendImgX": 510,//趋势图表位移
									// 	"trendImgY": 690,
									// 	"pathD": "M668 554 C 650 596,448 560,448 600",//曲线位置
									// 	"totalVal": 700, //节点总量
									// 	"value": 100, //节点量
									// 	"abnormalVal": 300, //异常挂断量
									// 	"interfaceVal": 200 //接口异常量
									// },
									// {
									// 	"name": "T3213-9.9元3天流...",
									// 	"type": 4, //类型
									// 	"isFold": true, //是否展开节点 默认true 展开
									// 	"id": 1,
									// 	"img": "",
									// 	"x": 460,
									// 	"y": 620,
									// 	bottomX: 660,
									// 	bottomY: 350,
									// 	"imgX": 400, //大图标位移
									// 	"imgY": 580,
									// 	"nameX": 420,//节点名称位移
									// 	"nameY": 680,
									// 	"totalNodeX": 420,//节点总量位移
									// 	"totalNodeY": 700,
									// 	"nodeX": 600,//节点量位移
									// 	"nodeY": 500,
									// 	"trendImgX": 510,//趋势图表位移
									// 	"trendImgY": 690,
									// 	"pathD": "M668 554 C 650 596,448 560,448 600",//曲线位置
									// 	"totalVal": 700, //节点总量
									// 	"value": 100, //节点量
									// 	"abnormalVal": 300, //异常挂断量
									// 	"interfaceVal": 200 //接口异常量
									// },
									// {
									// 	"name": "T3312-5G158套餐",
									// 	"type": 4, //类型
									// 	"isFold": true, //是否展开节点 默认true 展开
									// 	"id": 1,
									// 	"img": "",
									// 	"x": 460,
									// 	"y": 620,
									// 	bottomX: 660,
									// 	bottomY: 350,
									// 	"imgX": 400, //大图标位移
									// 	"imgY": 580,
									// 	"nameX": 420,//节点名称位移
									// 	"nameY": 680,
									// 	"totalNodeX": 420,//节点总量位移
									// 	"totalNodeY": 700,
									// 	"nodeX": 600,//节点量位移
									// 	"nodeY": 500,
									// 	"trendImgX": 510,//趋势图表位移
									// 	"trendImgY": 690,
									// 	"pathD": "M668 554 C 650 596,448 560,448 600",//曲线位置
									// 	"totalVal": 700, //节点总量
									// 	"value": 100, //节点量
									// 	"abnormalVal": 300, //异常挂断量
									// 	"interfaceVal": 200 //接口异常量
									// },
								]
							},
							{
								"name": "语音导航",
								"type": 2, //类型
								"isFold": false, //是否展开节点 默认true 展开
								"id": 42,
								"x": 725,
								"y": 480,
								"imgX": 728, //大图标位移
								"imgY": 460,
								"spreadX": 773,//加号减号坐标
								"spreadY": 480,
								"nameX": 748,//节点名称位移
								"nameY": 555,
								"totalNodeX": 728,//节点总量位移
								"totalNodeY": 575,
								"nodeX": 748,//节点量位移
								"nodeY": 460,
								"trendImgX": 815,//趋势图表位移
								"trendImgY": 560,
								"pathD": "M772 440 L 773 480",//曲线位置
								"totalVal": 700, //节点总量
								"value": 100, //节点量
								"abnormalVal": 300, //异常挂断量
								"interfaceVal": 200 //接口异常量
							},
							{

								"name": "导航转IVR",
								"value": 1200, //数据量
								"type": 3, //类型
								"isFold": false, //是否展开节点 默认true 展开
								"id": 43,
								"img": "",
								"x": 960,
								"y": 480,
								"imgX": 965, //大图标位移
								"imgY": 460,
								"spreadX": 1010,//加号减号坐标
								"spreadY": 480,
								"nameX": 980,//节点名称位移
								"nameY": 555,
								"totalNodeX": 965,//节点总量位移
								"totalNodeY": 575,
								"nodeX": 965,//节点量位移
								"nodeY": 460,
								"trendImgX": 1055,//趋势图表位移
								"trendImgY": 560,
								"pathD": "M775 440 C 775 460,1000 440,1015 480",//曲线位置
								"totalVal": 700, //节点总量
								"abnormalVal": 300, //异常挂断量
								"interfaceVal": 200 //接口异常量
							}
						]
					},
				]
			},
			{
				id: "24",
				x: 910,
				y: 170,
				size: "large",  //default large mini
				value: 1200,
				name: "溢出流程"
			},
			{
				id: "25",
				x: 1100,
				y: 150,
				size: "default",  //default large mini
				value: 1000,
				name: "视频话务",
				"children": [
					{
						"name": "前置流程",
						"value": 1200, //数据量
						"type": 1, //类型
						"isFold": true, //是否展开节点 默认true 展开
						"id": 32,
						"img": "",
						"x": 1100,
						"y": 300,
						"imgX": 1103, //大图标位移
						"imgY": 300,
						"spreadX": 1154,//加号减号坐标
						"spreadY": 320,
						"nameX": 1105,//节点名称位移
						"nameY": 395,
						"totalNodeX": 1090,//节点总量位移
						"totalNodeY": 415,
						"trendImgX": 1185,//趋势图表位移
						"trendImgY": 400,
						bottomX: 1150,
						bottomY: 430,
						"pathD": "M1153 260 L 1154 320",//曲线位置
						"totalVal": 700, //节点总量
						"abnormalVal": 300, //异常挂断量
						"interfaceVal": 200, //接口异常量
						"children": [
							{
								"name": "视频IVVR",
								"value": 1200, //数据量
								"type": 4, //类型
								"isFold": true, //是否展开节点 默认true 展开
								"id": 44,
								"x": 1360,
								"y": 480,
								"imgX": 1365, //大图标位移
								"imgY": 460,
								"spreadX": 1414,//加号减号坐标
								"spreadY": 476,
								"nameX": 1380,//节点名称位移
								"nameY": 555,
								"totalNodeX": 1365,//节点总量位移
								"totalNodeY": 575,
								"nodeX": 1365,//节点量位移
								"nodeY": 460,
								"trendImgX": 1455,//趋势图表位移
								"trendImgY": 560,
								"pathD": "M1154 440 C 1175 460,1400 440,1414 476",//曲线位置
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
	"quantity": {
		'x': 0,
		'y': 530,

		'data': [

			{
				"name": "三星级用户级技能队",
				"id": 1,
				"totalVal": 1200, //总量
				"value": 700, //数据量
				"checkInVal": 108, //签入坐席
				"inLineVal": 203, //排队中
				"inService": 300 //服务中
			},
			{
				"name": "四星级用户级技能队",
				"id": 2,
				"totalVal": 1200, //总量
				"value": 800, //数据量
				"checkInVal": 333, //签入坐席
				"inLineVal": 555, //排队中
				"inService": 888 //服务中
			},
			{
				"name": "八星级用户级技能队",
				"id": 3,
				"totalVal": 1200, //总量
				"value": 300, //数据量
				"checkInVal": 100, //签入坐席
				"inLineVal": 332, //排队中
				"inService": 355 //服务中
			},
			{
				"name": "十星级用户级技能队",
				"id": 4,
				"totalVal": 1200, //总量
				"value": 488, //数据量
				"checkInVal": 444, //签入坐席
				"inLineVal": 888, //排队中
				"inService": 33 //服务中
			},
			{
				"name": "三星级用户级技能队",
				"id": 5,
				"totalVal": 1200, //总量
				"value": 700, //数据量
				"checkInVal": 108, //签入坐席
				"inLineVal": 203, //排队中
				"inService": 300 //服务中
			},
			{
				"name": "四星级用户级技能队",
				"id": 6,
				"totalVal": 1200, //总量
				"value": 800, //数据量
				"checkInVal": 333, //签入坐席
				"inLineVal": 555, //排队中
				"inService": 888 //服务中
			},
			{
				"name": "八星级用户级技能队",
				"id": 7,
				"totalVal": 1200, //总量
				"value": 300, //数据量
				"checkInVal": 100, //签入坐席
				"inLineVal": 332, //排队中
				"inService": 355 //服务中
			},
			{
				"name": "十星级用户级技能队",
				"id": 8,
				"totalVal": 1200, //总量
				"value": 488, //数据量
				"checkInVal": 444, //签入坐席
				"inLineVal": 888, //排队中
				"inService": 33 //服务中
			},
			{
				"name": "三星级用户级技能队",
				"id": 9,
				"totalVal": 1200, //总量
				"value": 700, //数据量
				"checkInVal": 108, //签入坐席
				"inLineVal": 203, //排队中
				"inService": 300 //服务中
			},
			{
				"name": "四星级用户级技能队",
				"id": 10,
				"totalVal": 1200, //总量
				"value": 800, //数据量
				"checkInVal": 333, //签入坐席
				"inLineVal": 555, //排队中
				"inService": 888 //服务中
			},
			{
				"name": "八星级用户级技能队",
				"id": 11,
				"totalVal": 1200, //总量
				"value": 300, //数据量
				"checkInVal": 100, //签入坐席
				"inLineVal": 332, //排队中
				"inService": 355 //服务中
			},
			{
				"name": "十星级用户级技能队",
				"id": 12,
				"totalVal": 1200, //总量
				"value": 488, //数据量
				"checkInVal": 444, //签入坐席
				"inLineVal": 888, //排队中
				"inService": 33 //服务中
			},
			{
				"name": "三星级用户级技能队",
				"id": 13,
				"totalVal": 1200, //总量
				"value": 700, //数据量
				"checkInVal": 108, //签入坐席
				"inLineVal": 203, //排队中
				"inService": 300 //服务中
			},
			{
				"name": "四星级用户级技能队",
				"id": 14,
				"totalVal": 1200, //总量
				"value": 800, //数据量
				"checkInVal": 333, //签入坐席
				"inLineVal": 555, //排队中
				"inService": 888 //服务中
			},
			{
				"name": "八星级用户级技能队",
				"id": 15,
				"totalVal": 1200, //总量
				"value": 300, //数据量
				"checkInVal": 100, //签入坐席
				"inLineVal": 332, //排队中
				"inService": 355 //服务中
			},
			{
				"name": "十星级用户级技能队",
				"id": 16,
				"totalVal": 1200, //总量
				"value": 488, //数据量
				"checkInVal": 444, //签入坐席
				"inLineVal": 888, //排队中
				"inService": 33 //服务中
			},
			{
				"name": "三星级用户级技能队",
				"id": 17,
				"totalVal": 1200, //总量
				"value": 700, //数据量
				"checkInVal": 108, //签入坐席
				"inLineVal": 203, //排队中
				"inService": 300 //服务中
			},
			{
				"name": "四星级用户级技能队",
				"id": 18,
				"totalVal": 1200, //总量
				"value": 800, //数据量
				"checkInVal": 333, //签入坐席
				"inLineVal": 555, //排队中
				"inService": 888 //服务中
			},
			{
				"name": "八星级用户级技能队",
				"id": 19,
				"totalVal": 1200, //总量
				"value": 300, //数据量
				"checkInVal": 100, //签入坐席
				"inLineVal": 332, //排队中
				"inService": 355 //服务中
			},
			{
				"name": "十星级用户级技能队",
				"id": 20,
				"totalVal": 1200, //总量
				"value": 488, //数据量
				"checkInVal": 444, //签入坐席
				"inLineVal": 888, //排队中
				"inService": 33 //服务中
			},
			// {
			// 	"name": "十星级用户级技能队",
			// 	"id": 21,
			// 	"totalVal": 1200, //总量
			// 	"value": 488, //数据量
			// 	"checkInVal": 444, //签入坐席
			// 	"inLineVal": 888, //排队中
			// 	"inService": 33 //服务中
			// },
			// {
			// 	"name": "十星级用户级技能队",
			// 	"id": 22,
			// 	"totalVal": 1200, //总量
			// 	"value": 488, //数据量
			// 	"checkInVal": 444, //签入坐席
			// 	"inLineVal": 888, //排队中
			// 	"inService": 33 //服务中
			// },
			// {
			// 	"name": "十星级用户级技能队",
			// 	"id": 23,
			// 	"totalVal": 1200, //总量
			// 	"value": 488, //数据量
			// 	"checkInVal": 444, //签入坐席
			// 	"inLineVal": 888, //排队中
			// 	"inService": 33 //服务中
			// },
		],
		'queuingData': [

			{
				"name": "三星级用户级技能队",
				"id": 1,
				"totalVal": 1200, //总量
				"value": 700, //数据量
				"checkInVal": 108, //签入坐席
				"inLineVal": 203, //排队中
				"inService": 300 //服务中
			},
			{
				"name": "四星级用户级技能队",
				"id": 2,
				"totalVal": 1200, //总量
				"value": 800, //数据量
				"checkInVal": 333, //签入坐席
				"inLineVal": 555, //排队中
				"inService": 888 //服务中
			},
			{
				"name": "八星级用户级技能队",
				"id": 3,
				"totalVal": 1200, //总量
				"value": 300, //数据量
				"checkInVal": 100, //签入坐席
				"inLineVal": 332, //排队中
				"inService": 355 //服务中
			},
			{
				"name": "十星级用户级技能队",
				"id": 4,
				"totalVal": 1200, //总量
				"value": 488, //数据量
				"checkInVal": 444, //签入坐席
				"inLineVal": 888, //排队中
				"inService": 33 //服务中
			},
			{
				"name": "三星级用户级技能队",
				"id": 5,
				"totalVal": 1200, //总量
				"value": 700, //数据量
				"checkInVal": 108, //签入坐席
				"inLineVal": 203, //排队中
				"inService": 300 //服务中
			},
			{
				"name": "四星级用户级技能队",
				"id": 6,
				"totalVal": 1200, //总量
				"value": 800, //数据量
				"checkInVal": 333, //签入坐席
				"inLineVal": 555, //排队中
				"inService": 888 //服务中
			},
			{
				"name": "八星级用户级技能队",
				"id": 7,
				"totalVal": 1200, //总量
				"value": 300, //数据量
				"checkInVal": 100, //签入坐席
				"inLineVal": 332, //排队中
				"inService": 355 //服务中
			},
			{
				"name": "十星级用户级技能队",
				"id": 8,
				"totalVal": 1200, //总量
				"value": 488, //数据量
				"checkInVal": 444, //签入坐席
				"inLineVal": 888, //排队中
				"inService": 33 //服务中
			},
			{
				"name": "三星级用户级技能队",
				"id": 9,
				"totalVal": 1200, //总量
				"value": 700, //数据量
				"checkInVal": 108, //签入坐席
				"inLineVal": 203, //排队中
				"inService": 300 //服务中
			},
			{
				"name": "四星级用户级技能队",
				"id": 10,
				"totalVal": 1200, //总量
				"value": 800, //数据量
				"checkInVal": 333, //签入坐席
				"inLineVal": 555, //排队中
				"inService": 888 //服务中
			},
			{
				"name": "八星级用户级技能队",
				"id": 11,
				"totalVal": 1200, //总量
				"value": 300, //数据量
				"checkInVal": 100, //签入坐席
				"inLineVal": 332, //排队中
				"inService": 355 //服务中
			},
			{
				"name": "十星级用户级技能队",
				"id": 12,
				"totalVal": 1200, //总量
				"value": 488, //数据量
				"checkInVal": 444, //签入坐席
				"inLineVal": 888, //排队中
				"inService": 33 //服务中
			},
			{
				"name": "三星级用户级技能队",
				"id": 13,
				"totalVal": 1200, //总量
				"value": 700, //数据量
				"checkInVal": 108, //签入坐席
				"inLineVal": 203, //排队中
				"inService": 300 //服务中
			},
			{
				"name": "四星级用户级技能队",
				"id": 14,
				"totalVal": 1200, //总量
				"value": 800, //数据量
				"checkInVal": 333, //签入坐席
				"inLineVal": 555, //排队中
				"inService": 888 //服务中
			},
			{
				"name": "八星级用户级技能队",
				"id": 15,
				"totalVal": 1200, //总量
				"value": 300, //数据量
				"checkInVal": 100, //签入坐席
				"inLineVal": 332, //排队中
				"inService": 355 //服务中
			},
			{
				"name": "十星级用户级技能队",
				"id": 16,
				"totalVal": 1200, //总量
				"value": 488, //数据量
				"checkInVal": 444, //签入坐席
				"inLineVal": 888, //排队中
				"inService": 33 //服务中
			},
			{
				"name": "三星级用户级技能队",
				"id": 17,
				"totalVal": 1200, //总量
				"value": 700, //数据量
				"checkInVal": 108, //签入坐席
				"inLineVal": 203, //排队中
				"inService": 300 //服务中
			},
			{
				"name": "四星级用户级技能队",
				"id": 18,
				"totalVal": 1200, //总量
				"value": 800, //数据量
				"checkInVal": 333, //签入坐席
				"inLineVal": 555, //排队中
				"inService": 888 //服务中
			},
			{
				"name": "八星级用户级技能队",
				"id": 19,
				"totalVal": 1200, //总量
				"value": 300, //数据量
				"checkInVal": 100, //签入坐席
				"inLineVal": 332, //排队中
				"inService": 355 //服务中
			},
			{
				"name": "十星级用户级技能队",
				"id": 20,
				"totalVal": 1200, //总量
				"value": 488, //数据量
				"checkInVal": 444, //签入坐席
				"inLineVal": 888, //排队中
				"inService": 33 //服务中
			},
			{
				"name": "十星级用户级技能队",
				"id": 21,
				"totalVal": 1200, //总量
				"value": 488, //数据量
				"checkInVal": 444, //签入坐席
				"inLineVal": 888, //排队中
				"inService": 33 //服务中
			},
			{
				"name": "十星级用户级技能队",
				"id": 22,
				"totalVal": 1200, //总量
				"value": 488, //数据量
				"checkInVal": 444, //签入坐席
				"inLineVal": 888, //排队中
				"inService": 33 //服务中
			},
			{
				"name": "十星级用户级技能队",
				"id": 23,
				"totalVal": 1200, //总量
				"value": 488, //数据量
				"checkInVal": 444, //签入坐席
				"inLineVal": 888, //排队中
				"inService": 33 //服务中
			},
		],
		'servicedata': [

			{
				"name": "三星级用户级技能队",
				"id": 1,
				"totalVal": 1200, //总量
				"value": 700, //数据量
				"checkInVal": 108, //签入坐席
				"inLineVal": 203, //排队中
				"inService": 300 //服务中
			},
			{
				"name": "四星级用户级技能队",
				"id": 2,
				"totalVal": 1200, //总量
				"value": 800, //数据量
				"checkInVal": 333, //签入坐席
				"inLineVal": 555, //排队中
				"inService": 888 //服务中
			},
			{
				"name": "八星级用户级技能队",
				"id": 3,
				"totalVal": 1200, //总量
				"value": 300, //数据量
				"checkInVal": 100, //签入坐席
				"inLineVal": 332, //排队中
				"inService": 355 //服务中
			},
			{
				"name": "十星级用户级技能队",
				"id": 4,
				"totalVal": 1200, //总量
				"value": 488, //数据量
				"checkInVal": 444, //签入坐席
				"inLineVal": 888, //排队中
				"inService": 33 //服务中
			},
			{
				"name": "三星级用户级技能队",
				"id": 5,
				"totalVal": 1200, //总量
				"value": 700, //数据量
				"checkInVal": 108, //签入坐席
				"inLineVal": 203, //排队中
				"inService": 300 //服务中
			},
			{
				"name": "四星级用户级技能队",
				"id": 6,
				"totalVal": 1200, //总量
				"value": 800, //数据量
				"checkInVal": 333, //签入坐席
				"inLineVal": 555, //排队中
				"inService": 888 //服务中
			},
			{
				"name": "八星级用户级技能队",
				"id": 7,
				"totalVal": 1200, //总量
				"value": 300, //数据量
				"checkInVal": 100, //签入坐席
				"inLineVal": 332, //排队中
				"inService": 355 //服务中
			},
			{
				"name": "十星级用户级技能队",
				"id": 8,
				"totalVal": 1200, //总量
				"value": 488, //数据量
				"checkInVal": 444, //签入坐席
				"inLineVal": 888, //排队中
				"inService": 33 //服务中
			},
			{
				"name": "三星级用户级技能队",
				"id": 9,
				"totalVal": 1200, //总量
				"value": 700, //数据量
				"checkInVal": 108, //签入坐席
				"inLineVal": 203, //排队中
				"inService": 300 //服务中
			},
			{
				"name": "四星级用户级技能队",
				"id": 10,
				"totalVal": 1200, //总量
				"value": 800, //数据量
				"checkInVal": 333, //签入坐席
				"inLineVal": 555, //排队中
				"inService": 888 //服务中
			},
			{
				"name": "八星级用户级技能队",
				"id": 11,
				"totalVal": 1200, //总量
				"value": 300, //数据量
				"checkInVal": 100, //签入坐席
				"inLineVal": 332, //排队中
				"inService": 355 //服务中
			},
			{
				"name": "十星级用户级技能队",
				"id": 12,
				"totalVal": 1200, //总量
				"value": 488, //数据量
				"checkInVal": 444, //签入坐席
				"inLineVal": 888, //排队中
				"inService": 33 //服务中
			},
			{
				"name": "三星级用户级技能队",
				"id": 13,
				"totalVal": 1200, //总量
				"value": 700, //数据量
				"checkInVal": 108, //签入坐席
				"inLineVal": 203, //排队中
				"inService": 300 //服务中
			},
			{
				"name": "四星级用户级技能队",
				"id": 14,
				"totalVal": 1200, //总量
				"value": 800, //数据量
				"checkInVal": 333, //签入坐席
				"inLineVal": 555, //排队中
				"inService": 888 //服务中
			},
			{
				"name": "八星级用户级技能队",
				"id": 15,
				"totalVal": 1200, //总量
				"value": 300, //数据量
				"checkInVal": 100, //签入坐席
				"inLineVal": 332, //排队中
				"inService": 355 //服务中
			},
			{
				"name": "十星级用户级技能队",
				"id": 16,
				"totalVal": 1200, //总量
				"value": 488, //数据量
				"checkInVal": 444, //签入坐席
				"inLineVal": 888, //排队中
				"inService": 33 //服务中
			},
			{
				"name": "三星级用户级技能队",
				"id": 17,
				"totalVal": 1200, //总量
				"value": 700, //数据量
				"checkInVal": 108, //签入坐席
				"inLineVal": 203, //排队中
				"inService": 300 //服务中
			},
			{
				"name": "四星级用户级技能队",
				"id": 18,
				"totalVal": 1200, //总量
				"value": 800, //数据量
				"checkInVal": 333, //签入坐席
				"inLineVal": 555, //排队中
				"inService": 888 //服务中
			},
			{
				"name": "八星级用户级技能队",
				"id": 19,
				"totalVal": 1200, //总量
				"value": 300, //数据量
				"checkInVal": 100, //签入坐席
				"inLineVal": 332, //排队中
				"inService": 355 //服务中
			},
			{
				"name": "十星级用户级技能队",
				"id": 20,
				"totalVal": 1200, //总量
				"value": 488, //数据量
				"checkInVal": 444, //签入坐席
				"inLineVal": 888, //排队中
				"inService": 33 //服务中
			},
		]
	},
	"lines": [{
		"id": 22,
		"sourceid": 21,
		"targetid": 1,
		"value": 200 //节点数量
	},
	{
		"id": 23,
		"sourceid": 21,
		"targetid": 2,
		"value": 200 //节点数量
	},
	{
		"id": 24,
		"sourceid": 21,
		"targetid": 3,
		"value": 200 //节点数量
	},
	{
		"id": 25,
		"sourceid": 21,
		"targetid": 4,
		"value": 200 //节点数量
	}, {
		"id": 26,
		"sourceid": 21,
		"targetid": 5,
		"value": 200 //节点数量
	}, {
		"id": 27,
		"sourceid": 21,
		"targetid": 6,
		"value": 200 //节点数量
	}, {
		"id": 28,
		"sourceid": 21,
		"targetid": 7,
		"value": 200 //节点数量
	},
		{
		"id": 29,
		"sourceid": 21,
		"targetid": 8,
		"value": 200 //节点数量
	}, {
		"id": 30,
		"sourceid": 21,
		"targetid": 9,
		"value": 200 //节点数量
	}, {
		"id": 31,
		"sourceid": 21,
		"targetid": 10,
		"value": 200 //节点数量
	}, {
		"id": 32,
		"sourceid": 21,
		"targetid": 11,
		"value": 200 //节点数量
	}, {
		"id": 33,
		"sourceid": 21,
		"targetid": 12,
		"value": 200 //节点数量
	}, {
		"id": 34,
		"sourceid": 21,
		"targetid": 13,
		"value": 200 //节点数量
	}, {
		"id": 35,
		"sourceid": 21,
		"targetid": 14,
		"value": 200 //节点数量
	}, {
		"id": 36,
		"sourceid": 21,
		"targetid": 15,
		"value": 200 //节点数量
	}, {
		"id": 37,
		"sourceid": 21,
		"targetid": 16,
		"value": 200 //节点数量
	}, {
		"id": 38,
		"sourceid": 21,
		"targetid": 17,
		"value": 200 //节点数量
	}, {
		"id": 39,
		"sourceid": 21,
		"targetid": 18,
		"value": 200 //节点数量
	}, {
		"id": 40,
		"sourceid": 21,
		"targetid": 19,
		"value": 200 //节点数量
	}, {
		"id": 41,
		"sourceid": 21,
		"targetid": 20,
		"value": 200 //节点数量
	},
		{
			"id": 42,
			"sourceid": 22,
			"targetid": 1,
			"value": 200 //节点数量
		},
		{
			"id": 43,
			"sourceid": 22,
			"targetid": 2,
			"value": 200 //节点数量
		},
		{
			"id": 44,
			"sourceid": 22,
			"targetid": 3,
			"value": 200 //节点数量
		},
		{
			"id": 45,
			"sourceid": 22,
			"targetid": 4,
			"value": 200 //节点数量
		}, {
			"id": 46,
			"sourceid": 22,
			"targetid": 5,
			"value": 200 //节点数量
		}, {
			"id": 47,
			"sourceid": 22,
			"targetid": 6,
			"value": 200 //节点数量
		}, {
			"id": 48,
			"sourceid": 22,
			"targetid": 7,
			"value": 200 //节点数量
		}, {
			"id": 49,
			"sourceid": 22,
			"targetid": 8,
			"value": 200 //节点数量
		}, {
			"id": 50,
			"sourceid": 22,
			"targetid": 9,
			"value": 200 //节点数量
		}, {
			"id": 51,
			"sourceid": 22,
			"targetid": 10,
			"value": 200 //节点数量
		}, {
			"id": 52,
			"sourceid": 22,
			"targetid": 11,
			"value": 200 //节点数量
		}, {
			"id": 53,
			"sourceid": 22,
			"targetid": 12,
			"value": 200 //节点数量
		}, {
			"id": 54,
			"sourceid": 22,
			"targetid": 13,
			"value": 200 //节点数量
		}, {
			"id": 55,
			"sourceid": 22,
			"targetid": 14,
			"value": 200 //节点数量
		}, {
			"id": 56,
			"sourceid": 22,
			"targetid": 15,
			"value": 200 //节点数量
		}, {
			"id": 57,
			"sourceid": 22,
			"targetid": 16,
			"value": 200 //节点数量
		}, {
			"id": 58,
			"sourceid": 22,
			"targetid": 17,
			"value": 200 //节点数量
		}, {
			"id": 59,
			"sourceid": 22,
			"targetid": 18,
			"value": 200 //节点数量
		}, {
			"id": 60,
			"sourceid": 22,
			"targetid": 19,
			"value": 200 //节点数量
		}, {
			"id": 61,
			"sourceid": 22,
			"targetid": 20,
			"value": 200 //节点数量
		},
		{
			"id": 62,
			"sourceid": 21,
			"targetid": 21,
			"value": 200 //节点数量
		},
		{
			"id": 63,
			"sourceid": 22,
			"targetid": 20,
			"value": 200 //节点数量
		},
		{
			"id": 64,
			"sourceid": 23,
			"targetid": 20,
			"value": 200 //节点数量
		},


		//点击柱状图连接节点  模拟数据
		{
			"id": 65,
			"sourceid": 21,
			"targetid": 20,
			x1: 600,
			y1: 50,
			"value": 200 //节点数量
		},{
			"id": 66,
			"sourceid": 22,
			"targetid": 20,
			x1: 1210,
			y1: 50,
			"value": 200 //节点数量
		},
		{
			"id": 67,
			x1: 710,
			y1: 150,
			"sourceid": 23,
			"targetid": 20,
			"value": 200 //节点数量
		},
		{
			"id": 68,
			"sourceid": 24,
			"targetid": 20,
			x1: 910,
			y1: 170,
			"value": 200 //节点数量
		},
		{
			"id": 69,
			"sourceid": 25,
			"targetid": 20,
			x1: 1100,
			y1: 150,
			"value": 200 //节点数量
		},


	]
}
export default {
	dataset
}
