<template>
  <div id="mainSelect">
    <el-select :popper-append-to-body="false" popper-class="now-select-style" v-model="operator" placeholder="10086" style="width:88px">
      <el-option
        v-for="item in options1"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-select :popper-append-to-body="false" popper-class="now-select-style" v-model="panorama" placeholder="全景图" style="width:120px;margin-left:23px">
      <el-option
        v-for="item in options2"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-select :popper-append-to-body="false" popper-class="now-select-style" v-model="cities" placeholder="地市" style="width:80px;margin-left:23px">
      <el-option
        v-for="item in options3"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-select :popper-append-to-body="false" popper-class="now-select-style" v-model="starLevel" placeholder="星级" style="width:80px;margin-left:23px">
      <el-option
        v-for="item in options4"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
   data() {
      return {
        options1: [{
          value: '10086',
          label: '10086'
        }],
        operator: '',
        options2: [{
          value: 'q1',
          label: '全景图'
        },{
          value: 'q2',
          label: '地市星级'
        }],
        panorama: '',
        options3: [{
          value: 'd1',
          label: '昆明'
        },{
          value: 'd2',
          label: '曲靖'
        },{
          value: 'd3',
          label: '丽江'
        },{
          value: 'd4',
          label: '玉溪'
        }],
        cities: '',
        options4: [{
          value: 'x1',
          label: '星级'
        },{
          value: 'x2',
          label: '星级'
        }],
        starLevel: '',
      }
    }
};
</script>

<style lang="scss" class>
$box-height: 100%;
$box-width: 100%;
#mainSelect{
  padding: 29px 23px;
  height: $box-height;
  width: $box-width;
  position: relative;
   .el-select >div>input{
      background-color:transparent;
      border: 1px solid rgba(22, 56, 141, 0.8);
      font-size: 15px;
      color:#FFFFFF;
   }
   .el-select >div>input:focus{
      border: 1px solid #16388D;
   }
   .el-select .now-select-style{
      background-color:#16244D;
      border: 1px solid #16388D;
      padding:0 0;
      font-size: 15px;
      .el-select-dropdown__item{
        color:#FFFFFF;
      }
      .el-select-dropdown__item.hover, .el-select-dropdown__item:hover{
        background-color:#16388D;
        color:#FFFFFF;
        // font-weight: bold;
        // font-size:110%;
      }
       .popper__arrow{
          border-bottom-color:#16388D;
          left:70% !important;
        }
       .popper__arrow::after{
        border-bottom-color:#16244D;
      }
   }
   .el-icon-arrow-up:before {
     color:#41B5F0;
     content: "\e790";
   }
}
  // .now-select-style,input{
  //   background-color:transparent;
  //   border: 1px solid #16388D;
// .el-select-dropdown{
//   background-color:transparent;
// }
</style>