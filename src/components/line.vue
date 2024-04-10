<template>
  <div id="lineEcharts"></div>
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
  let Chart = echarts.init(document.getElementById("lineEcharts"));
  // 绘制图表
  let options = {
    title: {
      text: "发展趋势",
    },
    tooltip: {},
    xAxis: {
      data: [
        "1750年",
        "1800年",
        "1850年",
        "1900年",
        "1950年",
        "2000年",
        "2050年",
      ],
    },
    yAxis: {
      // 隐藏刻度线
      splitLine: {
        show: false,
      },
    },
    series: [
      {
        name: "中国",
        type: "line",
        data: [90, 90, 49, 34, 50, 60, 88],
      },
      {
        name: "美国",
        type: "line",
        data: [0, 28, 51, 66, 85, 90, 90],
      },
      {
        name: "俄国",
        type: "line",
        data: [50, 55, 60, 70, 85, 80, 80],
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
#lineEcharts {
  width: 30vw;
  height: 50vh;
}
</style>