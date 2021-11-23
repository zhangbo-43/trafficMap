<template>
  <div class="whole-Screen">
    <svg id="traffice" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g class="topolog">
        <skill-chart></skill-chart>
      </g>
    </svg>

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
  #traffice {
    display: block;
    width: 800px;
    height: 80vh;
    margin: auto;
  }
}
</style>
