<template>
  <div class="flexible">
    <span class="control-flex" @click="showSetSearch = !showSetSearch">
      <i class="el-icon-arrow-left" v-show="!showSetSearch"></i>
      <i class="el-icon-arrow-right" v-show="showSetSearch"></i>
    </span>
    <div class="flex-box" v-show="showSetSearch">
      <div class="select">
        <el-autocomplete
          class="inline-input"
          v-model="state1"
          :fetch-suggestions="querySearch"
          placeholder="请输入技能名称或ID"
          @select="handleSelect"
          size="mini"
          :popper-append-to-body="false"
          clearable
        >
          <el-button slot="append" v-on:click="setSearch">搜索</el-button>
        </el-autocomplete>
        <!-- <span>搜索</span> -->
      </div>
      <span v-on:click="setSort"><i class="el-icon-sort"></i></span>
      <span @click="showDialogtable = true">
        <i class="el-icon-setting"></i
      ></span>
    </div>
    <Settable
      :dialogVisible="showDialogtable"
      :data="dialogTableData"
      @closeDialogtable="closeDialogtable"
    ></Settable>
  </div>
</template>

<script>
import d3Data from "../views/largeScreen/d3Data";
import Settable from "./dialogtable.vue";
export default {
  data() {
    return {
      showDialogtable: false,
      showSetSearch: false,
      searchValue: "",
      dialogTableData: {
        dialongTitle: "大屏技能队列首屏显示设置",
        tableTitle: false,
        defCol: "setTabCol",
        defData: "setTabData",
        tableColumn: {
          setTabCol: {
            name: "技能队列名称",
            id: "队列ID",
            phoType: "话务类型",
            skillListType: "技能队列类型",
            passageType: "通道类型",
          },
        },
        tableData: {
          setTabData: [
            {
              name: "五星",
              id: "1000",
              phoType: "应急",
              skillListType: "普通",
              passageType: "语音",
            },
            {
              name: "五星砖",
              id: "1001",
              phoType: "普通",
              skillListType: "专席",
              passageType: "视频",
            },
            {
              name: "五星金",
              id: "1002",
              phoType: "应急",
              skillListType: "普通",
              passageType: "视频",
            },
            {
              name: "五星",
              id: "1003",
              phoType: "应急",
              skillListType: "普通",
              passageType: "语音",
            },
            {
              name: "五星砖",
              id: "1004",
              phoType: "普通",
              skillListType: "专席",
              passageType: "视频",
            },
            {
              name: "五星金",
              id: "1005",
              phoType: "应急",
              skillListType: "普通",
              passageType: "视频",
            },
            {
              name: "五星",
              id: "1006",
              phoType: "应急",
              skillListType: "普通",
              passageType: "语音",
            },
            {
              name: "五星砖",
              id: "1007",
              phoType: "普通",
              skillListType: "专席",
              passageType: "视频",
            },
            {
              name: "五星金",
              id: "1008",
              phoType: "应急",
              skillListType: "普通",
              passageType: "视频",
            },
            {
              name: "五星",
              id: "1009",
              phoType: "应急",
              skillListType: "普通",
              passageType: "语音",
            },
            {
              name: "五星砖",
              id: "1010",
              phoType: "普通",
              skillListType: "专席",
              passageType: "视频",
            },
            {
              name: "五星金",
              id: "1012",
              phoType: "应急",
              skillListType: "普通",
              passageType: "视频",
            },
            {
              name: "五星",
              id: "1013",
              phoType: "应急",
              skillListType: "普通",
              passageType: "语音",
            },
            {
              name: "五星砖",
              id: "1014",
              phoType: "普通",
              skillListType: "专席",
              passageType: "视频",
            },
            {
              name: "五星金",
              id: "1015",
              phoType: "应急",
              skillListType: "普通",
              passageType: "视频",
            },
            {
              name: "五星",
              id: "1017",
              phoType: "应急",
              skillListType: "普通",
              passageType: "语音",
            },
            {
              name: "五星砖",
              id: "1018",
              phoType: "普通",
              skillListType: "专席",
              passageType: "视频",
            },
            {
              name: "五星金",
              id: "1019",
              phoType: "应急",
              skillListType: "普通",
              passageType: "视频",
            },
            {
              name: "五星",
              id: "1020",
              phoType: "应急",
              skillListType: "普通",
              passageType: "语音",
            },
            {
              name: "五星砖",
              id: "1021",
              phoType: "普通",
              skillListType: "专席",
              passageType: "视频",
            },
            {
              name: "五星金",
              id: "1022",
              phoType: "应急",
              skillListType: "普通",
              passageType: "视频",
            },
          ],
        },
      },
      restaurants: [],
      state1: "",
      multipleSelection: [],
    };
  },
  methods: {
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return (restaurant) => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    },
    loadAll() {
      return [
        { value: "1三全鲜食（北新泾店）", address: "长宁区新渔路144号" },
        {
          value: "1Hot honey 首尔炸鸡（仙霞路）",
          address: "上海市长宁区淞虹路661号",
        },
        {
          value: "2新旺角茶餐厅",
          address: "上海市普陀区真北路988号创邑金沙谷6号楼113",
        },
        { value: "3泷千家(天山西路店)", address: "天山西路438号" },
        {
          value: "3胖仙女纸杯蛋糕（上海凌空店）",
          address: "上海市长宁区金钟路968号1幢18号楼一层商铺18-101",
        },
        { value: "3贡茶", address: "上海市长宁区金钟路633号" },
        {
          value: "3豪大大香鸡排超级奶爸",
          address: "上海市嘉定区曹安公路曹安路1685号",
        },
        {
          value: "3茶芝兰（奶茶，手抓饼）",
          address: "上海市普陀区同普路1435号",
        },
        { value: "3十二泷町", address: "上海市北翟路1444弄81号B幢-107" },
        { value: "1星移浓缩咖啡", address: "上海市嘉定区新郁路817号" },
        { value: "1阿姨奶茶/豪大大", address: "嘉定区曹安路1611号" },
        { value: "1新麦甜四季甜品炸鸡", address: "嘉定区曹安公路2383弄55号" },
        {
          value: "1南拳妈妈龙虾盖浇饭",
          address: "普陀区金沙江路1699号鑫乐惠美食广场A13",
        },
        {
          value: "2新旺角茶餐厅",
          address: "上海市普陀区真北路988号创邑金沙谷6号楼113",
        },
      ];
    },
    handleSelect(item) {
      this.searchValue = item.value;
      console.log(this.searchValue);
    },
    //搜索
    setSearch() {
      let arr1 = this.restaurants;
      let arr2 = [];
      let searchValue = this.searchValue;
      arr1.forEach((v) => {
        if (v.value == searchValue) {
          console.log("包含该元素", searchValue);
          arr2.push(v);
        }
      });
      console.log(arr2);
    },
    //排序
    setSort() {
      this.$message({
        message: "排序了",
        type: "success",
      });
      let arr1 = [3, 7, 9, 2, 5, 1];
      let arr2 = [];
      console.log(arr1);
      console.log("排序了");
      for (var i = 0; i < arr1.length; i++) {
        arr2.unshift(arr1[i]);
      }
      console.log(arr2);
    },
    //关闭设置弹窗
    closeDialogtable(data) {
      this.multipleSelection = data;
      this.showDialogtable = false;
      console.log(data);
    },

    initTableData() {
      let target = d3Data.dataset.quantity.showData.target;
      this.dialogTableData.tableData.setTabData =
        d3Data.dataset.quantity[target];
    },
  },
  components: {
    Settable,
  },
  beforeMount() {
    this.initTableData();
  },
  mounted() {
    this.restaurants = this.loadAll();
  },
  watch: {
    multipleSelection() {
      if(this.multipleSelection.length>20){this.multipleSelection.splice(0,19)}
      d3Data.dataset.quantity.showData.data = this.multipleSelection;
    },
  },
};
</script>
<style>
dialong-table .el-dialog__body .table .el-table td.el-table__cell,
.dialong-table .el-dialog__body .table .el-table th.el-table__cell.is-leaf {
  border: 0;
  border: none;
  height: 60px;
}
.el-dialog__headerbtn .el-dialog__close {
  color: #3eb6f5;
}
.flexible .flex-box .select input {
  padding: 1px;
  padding-left: 3px;
  padding-right: 30px;
  color: #fefefe;
  border: none;
  background-color: unset;
}
.flexible .flex-box .select .el-input-group__append {
  padding: 0 3px;
  background-color: rgb(78, 158, 197);
  color: #ffffff;
  border: none;
  border-radius: unset;
}
.flexible .flex-box .select .el-input-group__append button.el-button {
  margin: -10px -10px;
}
.flexible .flex-box .select .el-autocomplete-suggestion {
  background-color: #16388d;
  border: 1px solid #4e9ec5;
}
.flexible .flex-box .el-autocomplete-suggestion li {
  color: #fefefe;
  padding-left: 3px;
}
.flexible .flex-box .el-autocomplete-suggestion li:hover {
  background-color: #486c8c;
  color: #37dc94;
}
.flexible
  .flex-box
  .el-autocomplete-suggestion
  .el-autocomplete-suggestion__wrap {
  max-height: 240px;
}
</style>
<style lang="scss" scoped>
.flexible {
  height: 5vh;
  // width: 15vw;
  display: flex;
  align-items: center;
  left: 100%;
  top: 30vh;
  position: sticky;

  .control-flex {
    background: #049afb;
    height: 5vh;
    width: 2.5vh;
    border-radius: 2.5vh 0 0 2.5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    i {
      color: #fff;
    }
  }
  .flex-box {
    background-color: #16388d;
    flex: 1;
    height: 100%;
    // margin-left: -2vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    .select {
      width: 70%;
      display: flex;
      align-items: center;
      justify-content: center;
      .el-autocomplete {
        width: 100%;
        border: 1px solid #4e9ec5;
        border-radius: 3px;
      }
      // span {
      //   width: 25%;
      //   font-size: 12px;
      //   text-align: center;
      // }
    }
    span {
      padding: 5px 3px;
      background-color: rgb(78, 158, 197);
      :active {
        color: #16388d;
      }
    }
  }
}
</style>>
