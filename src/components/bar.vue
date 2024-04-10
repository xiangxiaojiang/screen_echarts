<template>
  <div id="barEcharts"></div>
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
  let Chart = echarts.init(document.getElementById("barEcharts"));
  // 绘制图表
  let options = {
    title: {
      text: "面积",
    },
    tooltip: {},
    xAxis: {
      data: ["太平洋", "大西洋", "北冰洋", "印度洋"],
    },
    yAxis: {
      // 隐藏刻度线
      splitLine: {
        show: false,
      },
    },

    series: [
      {
        name: "面积",
        type: "bar",
        color: ['rgb(84, 112, 198, 0.6)'],
        data: [
          // {
          //   value: 17868,
          //   itemStyle: {
          //     color: "rgb(84, 112, 198, 0.4)",
          //   },
          // },
          17868,
          9165.5,
          1478.8,
          7617.4,
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
#barEcharts {
  width: 30vw;
  height: 50vh;
}
</style>