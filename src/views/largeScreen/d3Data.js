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
		x: 800,
		y: 0,
		id: 1,
		"children": [
			{
				x: 580,
				y: 60,
				x2: 590,
				y2: 90,
				value: 1500,
				//文本坐标
				textX:570,
				textY:130,
				//箭头坐标
				bottomX: 600,
				bottomY: 140,
				//数值坐标
				valueX: 585,
				valueY: 50,
				width: 50,
				height: 50,
				//标记点
				pointX: 730,
				pointY: 80,
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
				y: 60,
				x2: 1220,
				y2: 90,
				id: 4,
				value: 900,
				//文本坐标
				textX:1205,
				textY:130,
				bottomX: 1230,
				bottomY: 140,
				//数值坐标
				valueX: 1220,
				valueY: 50,
				width: 50,
				height: 50,
				pointX: 1100,
				pointY: 80,
				pointUrl: require("../../assets/images/light5.png"),
				"name": "跨网支撑",
				"type": 2, //类型
				"isFold": true, //是否展开节点 默认true 展开
				"img": "",
				"abnormalVal": 300, //异常挂断量
				"interfaceVal": 200 //接口异常量
			},
			{
				x: 680,
				y: 160,
				x2: 700,
				y2: 215,
				id: 5,
				value: 2000,
				bottomX: 700,
				bottomY: 250,
				//文本坐标
				textX:675,
				textY:240,
				//数值坐标
				valueX: 690,
				valueY: 150,
				width: 60,
				height: 60,
				pointX: 790,
				pointY: 148,
				pointUrl: require("../../assets/images/light2.png"),
				//贴片
				patchX: 845,
				patchY: 115,
				patchUrl: require("../../assets/images/patch1.png"),
				"name": "语音话务",
				"type": 3, //类型
				"isFold": true, //是否展开节点 默认true 展开
				"totalVal": 700, //节点总量
				"abnormalVal": 300, //异常挂断量

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
						"imgX": 655, //大图标位移
						"imgY": 300,
						"spreadX": 705,//加号减号坐标
						"spreadY": 320,
						"nameX": 655,//节点名称位移
						"nameY": 395,
						"totalNodeX": 640,//节点总量位移
						"totalNodeY": 415,
						"trendImgX": 735,//趋势图表位移
						"trendImgY": 400,
						bottomX: 690,
						bottomY: 430,
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
								bottomX: 446,
								bottomY: 704,
								"imgX": 405, //大图标位移
								"imgY": 460,
								"spreadX": 455,//加号减号坐标
								"spreadY": 480,
								"nameX": 430,//节点名称位移
								"nameY": 555,
								"totalNodeX": 410,//节点总量位移
								"totalNodeY": 575,
								"nodeX": 600,//节点量位移
								"nodeY": 500,
								"trendImgX": 500,//趋势图表位移
								"trendImgY": 560,
								"pathD": "M695 440 C 710 470 490 430,450 480",//曲线位置
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
										"bottomX": 140,
										"bottomY": 890,
										"imgX": 100, //大图标位移
										"imgY": 740,
										"nameX": 100,//按键名称位置
										"nameY": 840,
										"InterfaceImgX": 170, //异常挂断位置
										"InterfaceImgY": 826,
										"totalNodeX": 100,//节点总量位置
										"totalNodeY": 860,
										"nodeX": 100,//节点量位移
										"nodeY": 880,
										"trendImgX": 180,//趋势图表位移
										"trendImgY": 868,
										"breakOffImgX": 200, //异常挂断位置
										"breakOffImgY": 860,
										"pathD": "M448 710 C460 720,160 710,150 760",//曲线位置
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
										bottomX: 340,
										bottomY: 890,
										"imgX": 300, //大图标位移
										"imgY": 740,
										"nameX": 300,//按键名称位置
										"nameY": 840,
										"totalNodeX": 300,//节点总量位置
										"totalNodeY": 860,
										"nodeX": 300,//节点量位移
										"nodeY": 880,
										"trendImgX": 510,//趋势图表位移
										"trendImgY": 690,
										"pathD": "M448 710 C460 720,360 710,350 760",//曲线位置
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
										bottomX: 540,
										bottomY: 890,
										"imgX": 500, //大图标位移
										"imgY": 740,
										"nameX": 500,//按键名称位置
										"nameY": 840,
										"totalNodeX": 500,//节点总量位置
										"totalNodeY": 860,
										"nodeX": 500,//节点量位移
										"nodeY": 880,
										"trendImgX": 710,//趋势图表位移
										"trendImgY": 690,
										"pathD": "M448 710 C460 720,540 710,550 760",//曲线位置
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
										bottomX: 740,
										bottomY: 890,
										"imgX": 700, //大图标位移
										"imgY": 740,
										"nameX": 700,//按键名称位置
										"nameY": 840,
										"totalNodeX": 700,//节点总量位置
										"totalNodeY": 860,
										"nodeX": 700,//节点量位移
										"nodeY": 880,
										"trendImgX": 710,//趋势图表位移
										"trendImgY": 690,
										"pathD": "M448 710 C460 720,740 710,750 760",//曲线位置
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
										bottomX: 940,
										bottomY: 890,
										"imgX": 900, //大图标位移
										"imgY": 740,
										"nameX": 900,//按键名称位置
										"nameY": 840,
										"totalNodeX": 900,//节点总量位置
										"totalNodeY": 860,
										"nodeX": 900,//节点量位移
										"nodeY": 880,
										"trendImgX": 910,//趋势图表位移
										"trendImgY": 690,
										"pathD": "M448 710 C460 720,940 710,950 760",//曲线位置
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
										bottomX: 1140,
										bottomY: 890,
										"imgX": 1100, //大图标位移
										"imgY": 740,
										"nameX": 1100,//按键名称位置
										"nameY": 840,
										"totalNodeX": 1100,//节点总量位置
										"totalNodeY": 860,
										"nodeX": 1100,//节点量位移
										"nodeY": 880,
										"trendImgX": 1110,//趋势图表位移
										"trendImgY": 690,
										"pathD": "M448 710 C460 720,1140 710,1150 760",//线位置
										"totalVal": 700, //节点总量
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
								"type": 4, //类型
								"isFold": false, //是否展开节点 默认true 展开
								"id": 1,
								"x": 700,
								"y": 540,
								"imgX": 650, //大图标位移
								"imgY": 460,
								"spreadX": 697,//加号减号坐标
								"spreadY": 480,
								"nameX": 675,//节点名称位移
								"nameY": 555,
								"totalNodeX": 650,//节点总量位移
								"totalNodeY": 575,
								"nodeX": 640,//节点量位移
								"nodeY": 460,
								"trendImgX": 740,//趋势图表位移
								"trendImgY": 560,
								"pathD": "M697 440 L 697 480",//曲线位置
								"totalVal": 700, //节点总量
								"value": 100, //节点量
								"abnormalVal": 300, //异常挂断量
								"interfaceVal": 200 //接口异常量
							},
							{
								"name": "导航转IVR",
								"value": 1200, //数据量
								"type": 4, //类型
								"isFold": false, //是否展开节点 默认true 展开
								"id": 1,
								"img": "",
								"x": 840,
								"y": 580,
								"imgX": 860, //大图标位移
								"imgY": 460,
								"spreadX": 905,//加号减号坐标
								"spreadY": 480,
								"nameX": 875,//节点名称位移
								"nameY": 555,
								"totalNodeX": 860,//节点总量位移
								"totalNodeY": 575,
								"nodeX": 860,//节点量位移
								"nodeY": 460,
								"trendImgX": 950,//趋势图表位移
								"trendImgY": 560,
								"pathD": "M695 440 C 730 470,900 450,905 480",//曲线位置
								"totalVal": 700, //节点总量
								"abnormalVal": 300, //异常挂断量
								"interfaceVal": 200 //接口异常量
							}
						]
					},
				]
			},
			{
				x: 890,
				y: 190,
				x2: 920,
				y2: 200,
				id: 2,
				width: 70,
				height: 70,
				value: 1200,
				//文本坐标
				textX:895,
				textY:280,
				bottomX: 920,
				bottomY: 290,
				//数值坐标
				valueX: 930,
				valueY: 180,
				pointX: 910,
				pointY: 160,
				pointUrl: require("../../assets/images/light3.png"),
				//贴片
				patchX: 910,
				patchY: 135,
				patchUrl: require("../../assets/images/patch2.png"),
				"name": "溢出流程",
				"type": 4, //类型
				"isFold": true, //是否展开节点 默认true 展开
				"totalVal": 700, //节点总量
				"abnormalVal": 300, //异常挂断量
				"interfaceVal": 200 //接口异常量
			},
			{
				x: 1120,
				y: 160,
				x2: 1150,
				y2: 215,
				id: 6,
				value: 1000,
				bottomX: 1145,
				bottomY: 250,
				width: 60,
				height: 60,
				//文本坐标
				textX:1120,
				textY:240,
				//数值坐标
				valueX: 1130,
				valueY: 150,
				pointX: 1040,
				pointY: 150,
				pointUrl: require("../../assets/images/light4.png"),
				//贴片
				patchX: 975,
				patchY: 116,
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
