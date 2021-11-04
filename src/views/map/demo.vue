<template>
  <div class="container"></div>
</template>
<script>
export default {
  name: "vue-line-chart",
  data() {
    return {
      data: [1, 1, 2, 3, 4, 6],
      line: "",
    };
  },
  mounted() {
    this.getConfig();
    this.getProductList();
    this.getAgreement();
  },
  methods: {
    getAgreement() {
      this.request
        .postRequest(this.requestApi.agreement, { artice_id: 1 })
        .then((res) => {
          console.log(res);
        });
    },
    getConfig() {
      console.log(this.request.getRequest);
      console.log(this.requestApi.getConfig);
      this.request.getRequest(this.requestApi.getConfig, {}).then((res) => {
        console.log(res);
      });
    },
    getProductList() {
      this.request.postRequest(this.requestApi.productList, {}).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  background: #fff;
  height: 800px;
}
</style>
