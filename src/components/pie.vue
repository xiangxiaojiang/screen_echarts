<template>
  <div id="pieEcharts"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as echarts from "echarts";

onMounted(() => {
  init();
});

//初始化函数
function init() {
  // 基于准备好的dom，初始化echarts实例
  let Chart = echarts.init(document.getElementById("pieEcharts"));
  // 绘制图表
  let options = {
    title: {
      text: "",
    },
    tooltip: {},

    series: [
      {
        name: "各大洲面积",
        type: "pie",
        color: [
          "rgb(199,111,111,0.4)",
          "rgb(202,112,222,0.4)",
          "rgb(90,90,111,0.4)",
          "rgb(255,212,0,0.4)",
          "rgb(88,111,2,0.4)",
          "rgb(33,155,155,0.4)",
          "rgb(255,255,255,0.4)",
        ],
        data: [
          { name: "亚洲", value: 4400 },
          { name: "欧洲", value: 1000 },
          { name: "非洲", value: 3000 },
          { name: "北美洲", value: 2400 },
          { name: "南美洲", value: 1400 },
          { name: "大洋洲", value: 900 },
          { name: "南极洲", value: 1400 },
        ],
      },
    ],
  };

  // 渲染图表
  Chart.setOption(options);
  // 配置屏幕自适应
  window.addEventListener("resize", function () {
    Chart.resize();
  });
}
</script>

<style lang="scss" scoped>
#pieEcharts {
  width: 30vw;
  height: 50vh;
}
</style>