<template>
  <div class="whole-Screen">全网监控大屏</div>
</template>

<script>
import drawMixin from "../../utils/drawMixin";
export default {
  name: "wholeNetworkScreen",
  mixins: [drawMixin],
  data() {
    return {};
  },
  components: {},
  mounted() {},
  unMounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.whole-Screen {
  width: 100%;
  height: 100%;
  background-image: url("../../assets/images/pageBg.png");
  background-size: cover;
  background-position: center center;
}
</style>
