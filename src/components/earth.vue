<template>
  <div id="earth"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import "echarts-gl";
import * as echarts from "echarts";
import baseImg from "../assets/img/world.topo.bathy.200401.jpg";
import environmentImg from "../assets/img/starfield.jpg";
import heightImg from "../assets/img/height.jpg";

onMounted(() => {
  init();
});
function init() {
  let myChart = echarts.init(document.getElementById("earth"));

  let option = {
    backgroundColor: "#000",
    globe: {
      baseTexture: baseImg,
      heightTexture: heightImg,
      displacementScale: 0.04,
      shading: "realistic",
       environment: environmentImg,
      realisticMaterial: {
        roughness: 0.9,
      },
      postEffect: {
        enable: true,
      },
      light: {
        main: {
          intensity: 5,
          shadow: true,
        },
      },
    },
  };
  myChart.setOption(option);
  // 配置屏幕自适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });
}
</script>

<style lang="scss" scoped>
#earth {
  width: 100vw;
  height: 100vh;
}
</style>