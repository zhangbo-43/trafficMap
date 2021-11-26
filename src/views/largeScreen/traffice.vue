<template>
  <g class="traffice">
    <g class="nodes">
     
      <!-- <g class="lines">
        <line
          x1="20"
          y1="20"
          x2="300"
          y2="300"
          style="stroke: rgb(99, 99, 99); stroke-width: 2"
        />
      </g> -->
    </g>
  </g>
</template>    

<script>
export default {
  props: ["datasource"],
  data() {
    return {
      dataList: [],
    };
  },
  methods: {
    filter(targetId) {
      this.dataList = this.datasource.filer(
        (item) => item.targetId == targetId
      );
    },
  },
};
</script>
<style lang="scss" scoped>
</style>
