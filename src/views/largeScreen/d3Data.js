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
				id: "2232",
				x: 600,
				y: 50,
				size: "mini",  //default large mini
				value: 1500,
				name: "互联网话务"
			},
			{
				id: "2323",
				x: 1210,
				y: 50,
				size: "mini",  //default large mini
				value: 900,
				name: "跨网支撑"
			},
			{
				id: "2845",
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
						"id": 666,
						"img": "",
						"x": 690,
						"y": 550,
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
						bottomX: 765,
						bottomY: 430,
						"pathD": "M767 250 L 769 320",//曲线位置
						"totalVal": 700, //节点总量
						"abnormalVal": 300, //异常挂断量
						"interfaceVal": 200, //接口异常量

						"children": [
							{
								"name": "语音IVR",
								"type": 1, //类型
								"isFold": true, //是否展开节点 默认true 展开
								"id": 888,
								"img": "",
								"x": 460,
								"y": 620,
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
										"id": 999,
										"img": "",
										"x": 460,
										"y": 620,
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
										"id": 2,
										"img": "",
										"x": 460,
										"y": 620,
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
										"id": 3,
										"img": "",
										"x": 460,
										"y": 620,
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
										"id": 4,
										"img": "",
										"x": 460,
										"y": 620,
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
										"id": 5,
										"img": "",
										"x": 460,
										"y": 620,
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
										"id": 123,
										"img": "",
										"x": 460,
										"y": 620,
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
								"id":134,
								"x": 700,
								"y": 540,
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
								"id": 256,
								"img": "",
								"x": 840,
								"y": 580,
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
				id: "5254",
				x: 910,
				y: 170,
				size: "large",  //default large mini
				value: 1200,
				name: "溢出流程"
			},
			{
				id: "8745",
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
						"id": 388,
						"img": "",
						"x": 1290,
						"y": 550,
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
								"id": 367,
								"x": 840,
								"y": 580,
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
	"quantity": [
		{
			"name": "三星级用户级技能队",
			"id":455,
			"x": 1500,
			"y": 520,
			"totalVal": 1200, //总量
			"value": 700, //数据量
			"checkInVal": 108, //签入坐席
			"inLineVal": 203, //排队中
			"inService": 300 //服务中
		},
		{
			"name": "四星级用户级技能队",
			"id": 457,
			"x": 1600,
			"y": 520,
			"totalVal": 1200, //总量
			"value": 800, //数据量
			"checkInVal": 333, //签入坐席
			"inLineVal": 555, //排队中
			"inService": 888 //服务中
		},
		{
			"name": "八星级用户级技能队",
			"id": 327,
			"x": 1700,
			"y": 520,
			"totalVal": 1200, //总量
			"value": 300, //数据量
			"checkInVal": 100, //签入坐席
			"inLineVal": 332, //排队中
			"inService": 355 //服务中
		},
		{
			"name": "十星级用户级技能队",
			"id": 568,
			"x": 1800,
			"y": 520,
			"totalVal": 1200, //总量
			"value": 488, //数据量
			"checkInVal": 444, //签入坐席
			"inLineVal": 888, //排队中
			"inService": 33 //服务中
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
