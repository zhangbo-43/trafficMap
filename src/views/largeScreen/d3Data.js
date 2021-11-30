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
						"x": 710,
						"y": 300,
						"totalVal": 700, //节点总量
						"abnormalVal": 300, //异常挂断量
						"interfaceVal": 200, //接口异常量

						"children": [
							{
								"name": "语音IVR",
								"type": 1, //类型
								"isFold": true, //是否展开节点 默认true 展开
								"id": 41,
								"x": 460,
								"y": 480,
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
										"x": 100,
										"y": 700,
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
										"totalVal": 700, //节点总量M512 600 C510 650,140 630,150 700
										"value": 100, //节点量
										"abnormalVal": 300, //异常挂断量
										"interfaceVal": 200 //接口异常量
									},

								]
							},
							{
								"name": "语音导航",
								"type": 2, //类型
								"isFold": true, //是否展开节点 默认true 展开
								"id": 42,
								"x": 725,
								"y": 480,
								"totalVal": 700, //节点总量
								"value": 100, //节点量
								"abnormalVal": 300, //异常挂断量
								"interfaceVal": 200 //接口异常量
							},
							{

								"name": "导航转IVR",
								"value": 1200, //数据量
								"type": 3, //类型
								"isFold": true, //是否展开节点 默认true 展开
								"id": 43,
								"img": "",
								"x": 960,
								"y": 480,
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
		'showData': {
			'leftHaveData': true,
			'rightHaveData': true,
			'target': 'queuingData',
			'data': [],
		},
		'queuingData': [
			{
				"name": "三星级用户级技能队",
				"id": 1,
				"totalVal": 1200, //总量
				"value": 1200, //数据量
				"checkInVal": 108, //签入坐席
				"inLineVal": 203, //排队中
				"inService": 300, //服务中
				'phoType': "应急", //话物类型
				'skillListType': "普通",//技能队列类型
				'passageType': "语音",//通道类型
			},
			{
				"name": "四星级用户级技能队",
				"id": 2,
				"totalVal": 1200, //总量
				"value": 800, //数据量
				"checkInVal": 333, //签入坐席
				"inLineVal": 555, //排队中
				"inService": 300, //服务中
				'phoType': "应急", //话物类型
				'skillListType': "普通",//技能队列类型
				'passageType': "语音",//通道类型
			},
			{
				"name": "八星级用户级技能队",
				"id": 3,
				"totalVal": 1200, //总量
				"value": 300, //数据量
				"checkInVal": 100, //签入坐席
				"inLineVal": 332, //排队中
				"inService": 300, //服务中
				'phoType': "应急", //话物类型
				'skillListType': "普通",//技能队列类型
				'passageType': "语音",//通道类型
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
				"value": 0, //数据量
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
	]
}
export default {
	dataset
}
