$(function() {
	echarts_1();
	echarts_2();
	echarts_3();
	echarts_4();
	echarts_5();
	echarts_6();

	function echarts_1() {
		let barData = [];
		let lineData = [];
		let xData = [];
		data_1.forEach((value) => {
			barData.push(value['网民规模（万人）']);
			lineData.push(value['互联网普及率']);
			xData.push(value['year']);
		})
		// 基于准备好的dom，初始化echarts实例
		var myChart = echarts.init(document.getElementById('echart1'));

		option = {
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'cross',
					crossStyle: {
						color: '#999'
					}
				}
			},
			grid: {
				left: '0%',
				top: '20%',
				right: '10%',
				bottom: '0%',
				containLabel: true
			},
			toolbox: {
				show: true,
				top: '10%',
				right: '0%',
				orient: 'vertical',
				iconStyle: {
					normal: {
						borderColor: '#fff'
					},
					emphasis: {
						borderColor: '#abc'
					}
				},
				feature: {
					dataView: {
						readOnly: false
					},
					magicType: {
						type: ['line', 'bar']
					},
					restore: {show: true},
					saveAsImage: {}
				}
			},
			legend: {
				data: ['网民规模（万人）', '互联网普及率'],
				textStyle:{
					color:'#fff'
				}
			},
			dataZoom: [{
				type: 'slider',
				"height": 17,
				bottom:'0%',
				start: 0,
				end: 50
			}, {
				"height": 17,
				bottom:'0%',
				start: 0,
				end: 50
			}],
			xAxis: [{
				type: 'category',
				data: xData,
				axisLine: {
					show: true,
					lineStyle: {
						color: "rgba(255,255,255,.1)",
						width: 1,
						type: "solid"
					},
				},
				
				axisTick: {
					show: false,
				},
				axisLabel: {
					interval: 0,
					// rotate:50,
					show: true,
					splitNumber: 15,
					textStyle: {
						color: "rgba(255,255,255,.6)",
						fontSize: '12',
					},
				},
			}],
			yAxis: [{
					type: 'value',
					name: '万人',
					nameTextStyle: {
						color: 'rgba(255,255,255,.6)'
					},
					axisLabel: {
						//formatter: '{value} %'
						show: true,
						textStyle: {
							color: "rgba(255,255,255,.6)",
							fontSize: '12',
						},
					},
					axisTick: {
						show: false,
					},
					axisLine: {
						show: true,
						lineStyle: {
							color: "rgba(255,255,255,.1	)",
							width: 1,
							type: "solid"
						},
					},
					splitLine: {
						lineStyle: {
							color: "rgba(255,255,255,.1)",
						}
					}
				},
				{
					type: 'value',
					name: ' % ',
					nameTextStyle: {
						color: 'rgba(255,255,255,.6)'
					},
					axisLabel: {
						//formatter: '{value} %'
						show: true,
						textStyle: {
							color: "rgba(255,255,255,.6)",
							fontSize: '12',
						},
					},
					axisTick: {
						show: false,
					},
					axisLine: {
						show: true,
						lineStyle: {
							color: "rgba(255,255,255,.1	)",
							width: 1,
							type: "solid"
						},
					},
					splitLine: {
						show: false,
						lineStyle: {
							color: "rgba(255,255,255,.1)",
						}
					}
				}
			],
			series: [
				{
					name: '网民规模（万人）',
					type: 'bar',
					itemStyle: {
						normal: {
							color: '#55ff7f',
							opacity: 1,
							barBorderRadius: 5,
						}
					},
					data: barData
				},
				{
					name: '互联网普及率',
					type: 'line',
					yAxisIndex: 1,
					showSymbol: false,
					itemStyle: {
						normal: {
							color: '#0184d5',
							borderColor: 'rgba(221, 220, 107, .1)',
							borderWidth: 12
						}
					},
					lineStyle: {
						normal: {
							color: '#0184d5',
							width: 2
						}
					},
					data: lineData
				}
			]
		};

		// 使用刚指定的配置项和数据显示图表。
		myChart.setOption(option);
		window.addEventListener("resize", function() {
			myChart.resize();
		});
	}

	function echarts_2() {
		// 基于准备好的dom，初始化echarts实例
		var myChart = echarts.init(document.getElementById('echart2'));

		color = ['#CC1CAA', '#8D67FF', '#00FFFF', '#48DE13', '#FFC516', '#DC3E14', '#8E16F8'];
		xData = xList.map((item, index) => {
		    return {
		        value: item,
		        textStyle: {
		            color: color[index]
		        }
		    };
		});
		dom = 800;
		barWidth = dom / 20;
		colors = [{
		        type: 'linear',
		        x: 0,
		        x2: 1,
		        y: 0,
		        y2: 0,
		        colorStops: [{
		            offset: 0,
		            color: '#FF3FDA'
		        }, {
		            offset: 0.5,
		            color: '#FF3FDA'
		        }, {
		            offset: 0.5,
		            color: '#CC1BAA'
		        }, {
		            offset: 1,
		            color: '#CC1BAA'
		        }]
		    },
		    {
		        type: 'linear',
		        x: 0,
		        x2: 1,
		        y: 0,
		        y2: 0,
		        colorStops: [{
		            offset: 0,
		            color: '#602CFF'
		        }, {
		            offset: 0.5,
		            color: '#602CFF'
		        }, {
		            offset: 0.5,
		            color: '#4915E6'
		        }, {
		            offset: 1,
		            color: '#4915E6'
		        }]
		    },
		    {
		        type: 'linear',
		        x: 0,
		        x2: 1,
		        y: 0,
		        y2: 0,
		        colorStops: [{
		            offset: 0,
		            color: '#00FFFF'
		        }, {
		            offset: 0.5,
		            color: '#00FFFF'
		        }, {
		            offset: 0.5,
		            color: '#11A6D0'
		        }, {
		            offset: 1,
		            color: '#11A6D0'
		        }]
		    },
		    {
		        type: 'linear',
		        x: 0,
		        x2: 1,
		        y: 0,
		        y2: 0,
		        colorStops: [{
		            offset: 0,
		            color: '#89FF5E'
		        }, {
		            offset: 0.5,
		            color: '#89FF5E'
		        }, {
		            offset: 0.5,
		            color: '#48DD12'
		        }, {
		            offset: 1,
		            color: '#48DD12'
		        }]
		    },
		    {
		        type: 'linear',
		        x: 0,
		        x2: 1,
		        y: 0,
		        y2: 0,
		        colorStops: [{
		            offset: 0,
		            color: '#FFD05C'
		        }, {
		            offset: 0.5,
		            color: '#FFD05C'
		        }, {
		            offset: 0.5,
		            color: '#DEA821'
		        }, {
		            offset: 1,
		            color: '#DEA821'
		        }]
		    },
		    {
		        type: 'linear',
		        x: 0,
		        x2: 1,
		        y: 0,
		        y2: 0,
		        colorStops: [{
		            offset: 0,
		            color: '#FF7853'
		        }, {
		            offset: 0.5,
		            color: '#FF7853'
		        }, {
		            offset: 0.5,
		            color: '#DB3E13'
		        }, {
		            offset: 1,
		            color: '#DB3E13'
		        }]
		    },
		    {
		        type: 'linear',
		        x: 0,
		        x2: 1,
		        y: 0,
		        y2: 0,
		        colorStops: [{
		            offset: 0,
		            color: '#AA48FF'
		        }, {
		            offset: 0.5,
		            color: '#AA48FF'
		        }, {
		            offset: 0.5,
		            color: '#8E15F8'
		        }, {
		            offset: 1,
		            color: '#8E15F8'
		        }]
		    }
		];
		option = {
		    //提示框
		    tooltip: {
		        trigger: 'axis',
		        formatter: "{b} : {c}",
		        axisPointer: { // 坐标轴指示器，坐标轴触发有效
		            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
		        }
		    },
		    /**区域位置*/
		      grid: {
		      	left: '0%',
		      	top: '20%',
		      	right: '10%',
		      	bottom: '0%',
		      	containLabel: true
		      },
		    //X轴
		    xAxis: {
		        data: xData,
		        show: true,
		        type: 'category',
		        axisLine: {
		            show: true,
		            lineStyle: {
		                color: 'rgba(255,255,255,1)',
		                 shadowColor:'rgba(255,255,255,1)',
		                shadowOffsetX: '20',
		            },
		            symbol: ['none', 'arrow'],
		            symbolOffset: [0, 25]
		        },
		        splitLine: {
		            show: true,
		            lineStyle: {
		                color: 'rgba(255,255,255,0.2)'
		            },
		        },
		        axisLabel: {
		            rotate: 20,
		            fontSize: 12,
		        },
		    },
		    yAxis: {
		        show: true,
				name:"亿人",
				nameTextStyle:{
					color:'#fff'
				},
		        splitNumber: 4,
		        axisLine: {
		            show: true,
		            lineStyle: {
		                color: 'rgba(255,255,255,0.2)'
		            },
		        },
		        splitLine: {
		            show: true,
		            lineStyle: {
		                color: 'rgba(255,255,255,0.2)'
		
		            },
		        },
		        axisLabel: {
		            color: '#FFFFFF',
		        }
		    },
		    series: [{
		            type: 'bar',
		            barWidth: barWidth,
		            itemStyle: {
		                normal: {
		                    color: function(params) {
		                        return colors[params.dataIndex % 7];
		                    }
		                }
		            },
		            label: {
		                show: true,
		                position: [barWidth / 2, -(barWidth + 20)],
		                color: '#ffffff',
		                fontSize: 12,
		                fontStyle: 'bold',
		                align: 'center',
		            },
		            data: yList
		        },
		        {
		            z: 2,
		            type: 'pictorialBar',
		            data: yList,
		            symbol: 'diamond',
		            symbolOffset: [0, '50%'],
		            symbolSize: [barWidth, barWidth * 0.5],
		            itemStyle: {
		                normal: {
		                    color: function(params) {
		                        return colors[params.dataIndex % 7];
		                    },
		                }
		            },
		        },
		        {
		            z: 3,
		            type: 'pictorialBar',
		            symbolPosition: 'end',
		            data: yList,
		            symbol: 'diamond',
		            symbolOffset: [0, '-50%'],
		            symbolSize: [barWidth, barWidth * 0.5],
		            itemStyle: {
		                normal: {
		                    borderWidth: 0,
		                    color: function(params) {
		                        return colors[params.dataIndex % 7].colorStops[0].color;
		                    },
		
		                }
		            },
		        },
		        {
		            z: 4,
		            type: 'pictorialBar',
		            symbolPosition: 'end',
		            data: yList,
		            symbol: 'circle',
		            symbolOffset: [0, -barWidth],
		            symbolSize: [barWidth * 0.5, barWidth * 0.5],
		            itemStyle: {
		                normal: {
		                    borderWidth: 0,
		                    color: function(params) {
		                        return colors[params.dataIndex % 7].colorStops[0].color;
		                    },
		
		                }
		            },
		        },
		    ],
		};

		// 使用刚指定的配置项和数据显示图表。
		myChart.setOption(option);
		window.addEventListener("resize", function() {
			myChart.resize();
		});
	}

	function echarts_3() {
		let xData = [];
		let barData = [];
		data_3.forEach((value) => {
			xData.push(value['场景'])
			barData.push(value['占比'])
		})
		// 基于准备好的dom，初始化echarts实例
		var myChart = echarts.init(document.getElementById('echart3'));
	
		option = {
			//  backgroundColor: '#00265f',
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'shadow'
				},
			},
			grid: {
				left: '0%',
				top: '20%',
				right: '10%',
				bottom: '0%',
				containLabel: true
			},
			dataZoom: [{
			    type: 'inside',
				"height": 17,
				bottom:'0%',
			    start: 0,
			    end: 50
			}, {
				"height": 17,
				bottom:'0%',
			    start: 0,
			    end: 50
			}],
			toolbox: {
				show: true,
				top: '10%',
				right: '0%',
				orient: 'vertical',
				iconStyle: {
					normal: {
						borderColor: '#fff'
					},
					emphasis: {
						borderColor: '#abc'
					}
				},
				feature: {
					dataView: {
						readOnly: false
					},
					magicType: {
						type: ['line', 'bar']
					},
					saveAsImage: {}
				}
			},
			xAxis: [{
				type: 'category',
				data:xData,
				axisLine: {
					show: true,
					lineStyle: {
						color: "rgba(255,255,255,.1)",
						width: 1,
						type: "solid"
					},
				},
	
				axisTick: {
					show: false,
				},
				axisLabel: {
					interval: 0,
					// rotate:45,
					show: true,
					splitNumber: 15,
					textStyle: {
						color: "rgba(255,255,255,.6)",
						fontSize: '12',
					},
				},
			}],
			yAxis: [{
				type: 'value',
				name: '占比',
				nameTextStyle: {
					color: 'rgba(255,255,255,.6)'
				},
				axisLabel: {
					//formatter: '{value} %'
					show: true,
					textStyle: {
						color: "rgba(255,255,255,.6)",
						fontSize: '12',
					},
				},
				axisTick: {
					show: false,
				},
				axisLine: {
					show: true,
					lineStyle: {
						color: "rgba(255,255,255,.1	)",
						width: 1,
						type: "solid"
					},
				},
				splitLine: {
					lineStyle: {
						color: "rgba(255,255,255,.1)",
					}
				}
			}],
			series: [{
	
					type: 'bar',
					data: barData,
					barWidth: '35%', //柱子宽度
					// barGap: 1, //柱子之间间距
					itemStyle: {
						normal: {
							color: '#00ffff',
							opacity: 1,
							barBorderRadius: 5,
						}
					}
				}
	
			]
		};
	
		// 使用刚指定的配置项和数据显示图表。
		myChart.setOption(option);
		window.addEventListener("resize", function() {
			myChart.resize();
		});
	}

	function echarts_4() {
		// 基于准备好的dom，初始化echarts实例
		let pieData = [];
		data_4.forEach((value) => {
			pieData.push({
				name: value['平台'],
				value: value['占比']
			})
		})
		var myChart = echarts.init(document.getElementById('echart4'));
	
		option = {
		   
		    color: ['#37a2da','#32c5e9','#9fe6b8','#ffdb5c','#ff9f7f','#fb7293','#e7bcf3','#8378ea'],
		    tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c}%"
		    },
		   toolbox: {
		   	show: true,
		   	top: '10%',
		   	right: '0%',
		   	orient: 'vertical',
		   	iconStyle: {
		   		normal: {
		   			borderColor: '#fff'
		   		},
		   		emphasis: {
		   			borderColor: '#abc'
		   		}
		   	},
		   	feature: {
		   		dataView: {
		   			readOnly: false
		   		},
		   		saveAsImage: {}
		   	}
		   },
		      legend: {
		        type:"scroll",
		        orient: 'vertical',
		        left:'1%',
		        align:'left',
		        top:'middle',
		        textStyle: {
		            color:'#fcfcfc'
		        },
		        height:150
		    },
		    series : [
		        {
		            name:'平台',
		            type:'pie',
		            radius : [0, '70%'],
					center: ['65%', '50%'],
		            data:pieData
		        }
		    ]
		};

	
		// 使用刚指定的配置项和数据显示图表。
		myChart.setOption(option);
		window.addEventListener("resize", function() {
			myChart.resize();
		});
	}

	function echarts_5() {
		let barData = [];
		let lineData = [];
		let xData = [];
		data_5.forEach((value) => {
			barData.push(value['中国网络视频用户规模（亿人）']);
			lineData.push(value['增长率（%）']);
			xData.push(value['year']);
		})
		// 基于准备好的dom，初始化echarts实例
		var myChart = echarts.init(document.getElementById('echart5'));

		option = {
		    tooltip: {
		        trigger: "axis",
		        axisPointer: {
		            type: "shadow",
		            label: {
		                show: true
		            }
		        }
		    },
			dataZoom: [{
			    type: 'inside',
				"height": 17,
				bottom:'0%',
			    start: 0,
			    end: 50
			}, {
				"height": 17,
				bottom:'0%',
			    start: 0,
			    end: 50
			}],
		    grid: {
		        left: "8%",
		        top: "18%",
		        right: "10%",
		        bottom: "13%"
		    },
		    legend: {
		        data: ["中国网络视频用户规模", "增长率"],
		        top: "4%",
		        textStyle: {
		            color: "#1FC3CE",
		            fontSize: 14
		        }
		    },
		    xAxis: {
		        data: xData,
		        axisLine: {
		            show: true, //隐藏X轴轴线
		            lineStyle: {
		                color: "#3d5269",
		                width: 1
		            }
		        },
		        axisTick: {
		            show: true, //隐藏X轴刻度
		            alignWithLabel: true
		        },
		        axisLabel: {
		            show: true,
		            textStyle: {
		                color: "#ffffff", //X轴文字颜色
		                fontSize: 14
		            },
		            interval: 0,
		            // rotate: 30
		        }
		    },
		    yAxis: [{
		            type: "value",
		            name: "人数(亿人)",
		            nameTextStyle: {
		                color: "#ffffff",
		                fontSize: 14
		            },
		            splitLine: {
		                show: true,
		                lineStyle: {
		                    width: 1,
		                    color: "#3d5269"
		                }
		            },
		            axisTick: {
		                show: false
		            },
		            axisLine: {
		                show: false
		            },
		            axisLabel: {
		                show: true,
		                textStyle: {
		                    color: "#ffffff",
		                    fontSize: 14
		                }
		            }
		        },
		        {
		            type: "value",
		            name: "增长率%",
		            nameTextStyle: {
		                color: "#ffffff",
		                fontSize: 14
		            },
		            position: "right",
		            splitLine: {
		                show: false
		            },
		            axisTick: {
		                show: false
		            },
		            axisLine: {
		                show: false,
		                lineStyle: {
		                    color: "#396A87",
		                    width: 2
		                }
		            },
		            axisLabel: {
		                show: true,
		                formatter: "{value} %", //右侧Y轴文字显示
		                textStyle: {
		                    color: "#ffffff",
		                    fontSize: 14
		                }
		            }
		        }
		    ],
		    series: [
		        {
		            name: "中国网络视频用户规模",
		            type: "bar",
		            barWidth: 18,
		            itemStyle: {
		                normal: {
		                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
		                            offset: 0,
		                            color: "#E29052"
		                        },
		                        {
		                            offset: 1,
		                            color: "#FA5A53"
		                        }
		                    ])
		                }
		            },
		            data: barData
		        },
		        {
		            name: "增长率",
		            type: "line",
		            yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
		            showAllSymbol: true, //显示所有图形。
		            symbol: "circle", //标记的图形为实心圆
		            symbolSize: 6, //标记的大小
		            itemStyle: {
		                //折线拐点标志的样式
		                color: "#26D9FF",
		                borderColor: "#26D9FF",
		                width: 2,
		                shadowColor: "#26D9FF",
		                shadowBlur: 2
		            },
		            lineStyle: {
		                color: "#26D9FF",
		                width: 2,
		                shadowBlur: 2
		            },
		            data: lineData
		        }
		    ]
		}

		// 使用刚指定的配置项和数据显示图表。
		myChart.setOption(option);
		window.addEventListener("resize", function() {
			myChart.resize();
		});
	}

	function echarts_6() {
		// 基于准备好的dom，初始化echarts实例
		var myChart = echarts.init(document.getElementById('echart6'));

		
		let index = 0;
		var colorList = ['#73DDFF', '#73ACFF', '#FDD56A', '#FDB36A', '#FD866A', '#9E87FF', '#58D5FF'];
		
		function fun() {
		    var timer = setInterval(function() {
		        console.log(index)
		        myChart.dispatchAction({
		            type: 'hideTip',
		            seriesIndex: 0,
		            dataIndex: index
		        });
		        // 显示提示框
		        myChart.dispatchAction({
		            type: 'showTip',
		            seriesIndex: 0,
		            dataIndex: index
		        });
		        // 取消高亮指定的数据图形
		        myChart.dispatchAction({
		            type: 'downplay',
		            seriesIndex: 0,
		            dataIndex: index == 0 ? 5 : index - 1
		        });
		        myChart.dispatchAction({
		            type: 'highlight',
		            seriesIndex: 0,
		            dataIndex: index
		        });
		        index++;
		        if (index > 5) {
		            index = 0;
		        }
		    }, 3000)
		}
		fun()
		option = {
		    tooltip: {
		        trigger: 'item'
		    },
		    legend:{
				textStyle:{
					color:'#fff'
				}
			},
		    series: [{
		        type: 'pie',
		        center: ['50%', '65%'],
		        radius: ['30%', '60%'],
		        clockwise: true,
		        avoidLabelOverlap: true,
		        hoverOffset: 10,
		        emphasis:{
		            itemStyle:{
		                borderColor: '#f3f3f3',
		                borderWidth: 2
		            }
		        },
		        itemStyle: {
		            normal: {
		                color: function(params) {
		                    return colorList[params.dataIndex]
		                }
		            }
		        },
		        label: {
		            show: true,
		            position: 'outside',
		            formatter: '{a|{b}：{d}%}\n{hr|}',
		            rich: {
		                hr: {
		                    backgroundColor: 't',
		                    borderRadius: 3,
		                    width: 3,
		                    height: 3,
		                    padding: [3, 3, 0, -12]
		                },
		                a: {
		                    padding: [-30, 15, -20, 15]
		                }
		            }
		        },
		        labelLine: {
		            normal: {
		                length: 7,
		                length2: 10,
		                lineStyle: {
		                    width: 1
		                }
		            }
		        },
		        data: data_6_line,
		    }]
		};

		// 使用刚指定的配置项和数据显示图表。
		myChart.setOption(option);
		window.addEventListener("resize", function() {
			myChart.resize();
		});
	}


})
