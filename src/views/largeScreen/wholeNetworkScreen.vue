<template>
  <div class="whole-Screen">
    <skill-chart></skill-chart>
  </div>
</template>

<script>
import skillChart from '../../components/skillQueue/skillChart.vue'
import drawMixin from "../../utils/drawMixin";
export default {
  name: "wholeNetworkScreen",
  mixins: [drawMixin],
  data() {
    return {};
  },
  components: {
    skillChart
  },
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
