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
      <span> <i class="el-icon-setting"></i></span>
    </div>
  </div>
</template>

<script>
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
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "Florida",
        "Georgia",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Pennsylvania",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming",
      ],
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
      background-color: rgb(78,158,197);
    }
  }
}
</style>>
