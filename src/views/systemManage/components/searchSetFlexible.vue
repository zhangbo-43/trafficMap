<template>
  <div class="flexible">
    <span class="control-flex">
      <i class="el-icon-arrow-left"></i>
      <i class="el-icon-arrow-right"></i>
    </span>
    <div class="flex-box">
      <div class="select">
        <el-select
          v-model="value"
          multiple
          filterable
          remote
          reserve-keyword
          placeholder="请输入关键词"
          :remote-method="remoteMethod"
          :loading="loading"
          size="mini"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <span>搜索</span>
      </div>
      <span><i class="el-icon-sort"></i></span>
      <span @click="showDialogtable = true">
        <i class="el-icon-setting"></i
      ></span>
    </div>
    <Settable
      :dialogVisible="showDialogtable"
      :data="dialogTableData"
      @closeDialogtable="
        (returnData) => {
          this.showDialogtable = false;
          this.showData = returnData;
        }
      "
    ></Settable>
  </div>
</template>

<script>
import Settable from "./dialogtable.vue";
export default {
  data() {
    return {
      options: [],
      value: [],
      list: [],
      loading: false,
      states: [
        "Alabama",
        "Alaska",
        "Arizona",
        "Arkansas",
        
      ],
      showDialogtable: false,
      dialogTableData: {
        dialongTitle: "大屏技能队列首屏显示设置",
        tableTitle: false,
        defCol: "setTabCol",
        defData: "setTabData",
        tableColumn: {
          setTabCol: {
            name: "技能队列名称",
            ID: "队列ID",
            phoType: "话务类型",
            skillListType: "技能队列类型",
            passageType: "通道类型",
          },
        },
        tableData: {
          setTabData: [
            {
              name: "五星",
              ID: "1632",
              phoType: "应急",
              skillListType: "普通",
              passageType: "语音",
            },
            {
              name: "五星砖",
              ID: "1888",
              phoType: "普通",
              skillListType: "专席",
              passageType: "视频",
            },
            {
              name: "五星金",
              ID: "1555",
              phoType: "应急",
              skillListType: "普通",
              passageType: "视频",
            },
            {
              name: "三星土",
              ID: "6666",
              phoType: "应急",
              skillListType: "专席",
              passageType: "语音",
            },
            {
              name: "五星",
              ID: "1632",
              phoType: "应急",
              skillListType: "普通",
              passageType: "语音",
            },
            {
              name: "五星砖",
              ID: "1888",
              phoType: "普通",
              skillListType: "专席",
              passageType: "视频",
            },
            {
              name: "五星金",
              ID: "1555",
              phoType: "应急",
              skillListType: "普通",
              passageType: "视频",
            },
            {
              name: "三星土",
              ID: "6666",
              phoType: "应急",
              skillListType: "专席",
              passageType: "语音",
            },
            {
              name: "五星",
              ID: "1632",
              phoType: "应急",
              skillListType: "普通",
              passageType: "语音",
            },
            {
              name: "五星砖",
              ID: "1888",
              phoType: "普通",
              skillListType: "专席",
              passageType: "视频",
            },
            {
              name: "五星金",
              ID: "1555",
              phoType: "应急",
              skillListType: "普通",
              passageType: "视频",
            },
            {
              name: "三星土",
              ID: "6666",
              phoType: "应急",
              skillListType: "专席",
              passageType: "语音",
            },
            {
              name: "五星",
              ID: "1632",
              phoType: "应急",
              skillListType: "普通",
              passageType: "语音",
            },
            {
              name: "五星砖",
              ID: "1888",
              phoType: "普通",
              skillListType: "专席",
              passageType: "视频",
            },
            {
              name: "五星金",
              ID: "1555",
              phoType: "应急",
              skillListType: "普通",
              passageType: "视频",
            },
            {
              name: "三星土",
              ID: "6666",
              phoType: "应急",
              skillListType: "专席",
              passageType: "语音",
            },
            {
              name: "五星",
              ID: "1632",
              phoType: "应急",
              skillListType: "普通",
              passageType: "语音",
            },
            {
              name: "五星砖",
              ID: "1888",
              phoType: "普通",
              skillListType: "专席",
              passageType: "视频",
            },
            {
              name: "五星金",
              ID: "1555",
              phoType: "应急",
              skillListType: "普通",
              passageType: "视频",
            },
            {
              name: "三星土",
              ID: "6666",
              phoType: "应急",
              skillListType: "专席",
              passageType: "语音",
            },
            {
              name: "五星",
              ID: "1632",
              phoType: "应急",
              skillListType: "普通",
              passageType: "语音",
            },
            {
              name: "五星砖",
              ID: "1888",
              phoType: "普通",
              skillListType: "专席",
              passageType: "视频",
            },
            {
              name: "五星金",
              ID: "1555",
              phoType: "应急",
              skillListType: "普通",
              passageType: "视频",
            },
            {
              name: "三星土",
              ID: "6666",
              phoType: "应急",
              skillListType: "专席",
              passageType: "语音",
            },
            {
              name: "五星",
              ID: "1632",
              phoType: "应急",
              skillListType: "普通",
              passageType: "语音",
            },
            {
              name: "五星砖",
              ID: "1888",
              phoType: "普通",
              skillListType: "专席",
              passageType: "视频",
            },
            {
              name: "五星金",
              ID: "1555",
              phoType: "应急",
              skillListType: "普通",
              passageType: "视频",
            },
            {
              name: "三星土",
              ID: "6666",
              phoType: "应急",
              skillListType: "专席",
              passageType: "语音",
            },
          ],
        },
      },
      showData: [],
    };
  },
  mounted() {
    this.list = this.states.map((item) => {
      return { value: `value:${item}`, label: `label:${item}` };
    });
  },
  methods: {
    remoteMethod(query) {
      if (query !== "") {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.options = this.list.filter((item) => {
            return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1;
          });
        }, 200);
      } else {
        this.options = [];
      }
    },
  },
  components: {
    Settable,
  },
  watch:{
    // showData(){
    //   console.log(this.showData)
    // }
  }
};
</script>

<style lang="scss" scoped>
.flexible {
  height: 5vh;
  width: 15vw;
  display: flex;
  align-items: center;
  left: 100%;
  top: 30vh;
  position: sticky;

  .control-flex {
    background: #049afb;
    height: 5vh;
    width: 5vh;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .flex-box {
    background-color: #16388d;
    flex: 1;
    height: 100%;
    margin-left: -2vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    .select {
      width: 70%;
      display: flex;
      align-items: center;
      justify-content: center;
      .el-select {
        width: 75%;
      }
      span {
        width: 25%;
        font-size: 12px;
        text-align: center;
      }
    }
    span {
      padding: 1px 3px;
      background-color: rgb(78, 158, 197);
      :active {
        color: #16388d;
      }
    }
  }
}
</style>>
