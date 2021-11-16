<template>
  <div class="mainTable">
    <el-header class="header-title">
      <span>菜单权限管理</span>
    </el-header>
    <!--    服务量趋势图页面-->
    <service-chart :chartVisible="chartVisible" @closeDialog="handleClose" :optionData="optionData"></service-chart>
    <el-row class="table">
      <el-main class="box-card">
        <div>菜单节点信息</div>
        <el-divider></el-divider>
        <div class="title">
          <el-button type="primary">添加顶级节点</el-button>
          <el-button class="el-button--reset">刷新树</el-button>
          <el-button type="primary" @click="chart('nodeTrend')">节点服务量趋势图</el-button>
          <el-button type="primary" @click="chart('skillTrend')">技能队列服务排队趋势图</el-button>
        </div>
        <el-tree
            :data="data"
            node-key="id"
            :expand-on-click-node="false">
      <span class="custom-tree-node" slot-scope="{ node, data }">
        <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        <span>{{ node.label }}</span>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="el-icon-circle-plus-outline">
          <el-button
              type="text"
              size="mini"
              @click="() => append(data)">
            新增
          </el-button>
        </el-dropdown-item>
        <el-dropdown-item icon="el-icon-edit">
          <el-button
              type="text"
              size="mini" style="color: #E6A23C"
              @click="() => edit(data)">
            编辑
          </el-button>
        </el-dropdown-item>
        <el-dropdown-item icon="el-icon-delete">
            <el-button
                type="text"
                size="mini" style="color: #F56C6C"
                @click="() => remove(node, data)">删除
          </el-button>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
      </span>
        </el-tree>
      </el-main>
    </el-row>

<!--    弹出框-->
    <el-dialog
        :title="diaTitle"
        :visible.sync="dialogVisible"
        width="30%">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="上级菜单">
          <el-input v-model="form.parentMenu"></el-input>
        </el-form-item>
        <el-form-item label="菜单名称">
          <el-input v-model="form.menuName" placeholder="请输入菜单名称"></el-input>
        </el-form-item>
        <el-form-item label="打开方式">
          <el-input v-model="form.openWay" placeholder="请选择打开方式"></el-input>
        </el-form-item>
        <el-form-item label="菜单地址">
          <el-input v-model="form.menuPath" placeholder="请输入菜单地址"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
import serviceChart from '../../components/trendChart/serviceChart'
export default {
  name: "menuInfoManage",
  components: {
    serviceChart
  },
  data() {
    return {
      data: [{
        label: '一级 1',
        type: 1,
        children: [{
          label: '二级 1-1',
          type: 2,
          children: [{
            type: 3,
            label: '三级 1-1-1'
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      dialogVisible: false,
      diaTitle: "",
      form: {
        parentMenu: "",
        menuName:"",
        openWay: "",
        menuPath:""
      },
      chartVisible: false,
      optionData: {}
    }
  },
  methods: {
    append(data) {
      console.log(data)
      this.diaTitle = '新增菜单'
      this.dialogVisible = true
    },
    edit() {
      this.diaTitle = '编辑菜单'
      this.dialogVisible = true
    },
    async remove() {
      const confirmResult = await this.$confirm(
          "此操作将永久删除该菜单, 是否继续?",
          "提示",
          {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning",
          }
      ).catch((err) => err);
      if (confirmResult !== "confirm") {
        return this.$message.info("已取消删除");
      }
    },
    handleClose(status) {
      this.chartVisible = status
      console.log(status)
    },
    chart(params) {
      this.chartVisible = true
      if(params == 'nodeTrend') {
        this.optionData = {
          echartTitle : "节点服务量趋势图",
          options: {
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'cross'
              }
            },
            color: ["rgb(101, 158, 178)","rgb(167, 3, 30)"],
            legend: {},
            toolbox: {
              show: true,
            },
            xAxis: {
              type: 'category',
              boundaryGap: false,
              data: ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '24:00', ]
            },
            // xAxis: {
            //   type:"time",
            //   axisLabel: {
            //     formatter: function (val) {
            //       var date= new Date(val)
            //       var texts=[date.getHours(),date.getMinutes()]
            //       return texts.join(":")
            //     }
            //   }
            // },
            yAxis: {
              type: 'value',
              axisLine : {
                show: false,
              },
              splitLine : {
                show: true,
                lineStyle: {
                  type: 'solid',
                  color: '#191D39'
                }
              },
              // axisLabel: {
              //   formatter: '{value} W'
              // },
              axisPointer: {
                snap: true
              }
            },
            // visualMap: {
            //   show: false,
            //   dimension: 0,
            //   pieces: [
            //     {
            //       lte: 6,
            //       color: 'green'
            //     },
            //     {
            //       gt: 6,
            //       lte: 8,
            //       color: 'red'
            //     },
            //     {
            //       gt: 8,
            //       lte: 14,
            //       color: 'green'
            //     },
            //     {
            //       gt: 14,
            //       lte: 17,
            //       color: 'red'
            //     },
            //     {
            //       gt: 17,
            //       color: 'green'
            //     }
            //   ]
            // },
            series: [
              {
                name: '节点服务量',
                type: 'line',
                // lineStyle: {
                //   normal: {
                //     color: "rgb(101, 158, 178)"
                //   }
                // },
                showSymbol: false,
                symbol: "circle",
                smooth: true,
                // prettier-ignore
                data: [300, 280, 250, 260, 270, 300, 550, 500, 400, 390, 380, 390, 400, 500, 600, 750, 800, 700, 600, 400],
                // markArea: {
                //   itemStyle: {
                //     color: 'rgba(255, 173, 177, 0.4)'
                //   },
                //   data: [
                //     [
                //       {
                //         name: 'Morning Peak',
                //         xAxis: '07:30'
                //       },
                //       {
                //         xAxis: '10:00'
                //       }
                //     ],
                //     [
                //       {
                //         name: 'Evening Peak',
                //         xAxis: '17:30'
                //       },
                //       {
                //         xAxis: '21:15'
                //       }
                //     ]
                //   ]
                // }
              },
              {
                name: '节点异常挂断量',
                type: 'line',
                smooth: true,
                showSymbol: false,
                symbol: "circle",
                // itemStyle: {
                //   normal: {
                //     lineStyle: {
                //       type: "dashed",
                //       normal: {
                //         color: "rgb(167, 3, 30)"
                //       }
                //     }
                //   }
                // },
                data: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 350, 390, 400, 500, 600, 750, 800, 389, 290, 500],
              },
            ]
          }
        }
      } else {
        this.optionData = {
          echartTitle : "技能队列服务排队趋势图",
          options: {
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'cross'
              }
            },
            color: ["rgb(101, 158, 178)","rgb(167, 3, 30)"],
            legend: {},
            toolbox: {
              show: true,
            },
            xAxis: {
              type: 'category',
              boundaryGap: false,
              data: ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '24:00', ]
            },
            yAxis: {
              type: 'value',
              axisLine : {
                show: false,
              },
              splitLine : {
                show: true,
                lineStyle: {
                  type: 'solid',
                  color: '#191D39'
                }
              },
              axisPointer: {
                snap: true
              }
            },
            series: [
              {
                name: '排队量趋势图',
                type: 'line',
                smooth: true,
                showSymbol: false,
                symbol: "circle",
                // itemStyle: {
                //   normal: {
                //     lineStyle: {
                //       // type: "dashed",
                //       normal: {
                //         color: "rgb(103, 160, 180)"
                //       }
                //     }
                //   }
                // },
                data: [120,220,320,420,520,620,720,140,160,180,200,220,240,260],
              },
             {
                name: '服务量趋势图',
                type: 'line',
                smooth: true,
               showSymbol: false,
                symbol: "circle",
                itemStyle: {
                  normal: {
                    lineStyle: {
                      type: "dashed",
                      normal: {
                        color: "rgb(103, 160, 180)"
                      }
                    }
                  }
                },
                data: [240,280,320,360,400,440,480,140,160,180,200,220,240,260,180],
              },
            ]
          }
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.mainTable {
  .header-title {
    background-color: #fff;
    display: flex;
    align-items: center;

    span {
      font-size: 22px;
      color: #121212;
      font-weight: bolder;
    }
  }
  .table {
    padding: 20px;

    .box-card {
      height: 83vh;
      background-color: #fff;
      color: #333;

      .title {
        margin-bottom: 10px;
      }

      .optionBtn {
        margin-left: 20px;
      }
    }
  }
}
</style>
