<template>
  <div id="radarEcharts"></div>
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
  let Chart = echarts.init(document.getElementById("radarEcharts"));
  // 绘制图表
  let options = {
    title: {
      text: "",
    },
    tooltip: {},
    // 配置雷达图最大值
    radar: {
      // shape: 'circle',
      indicator: [
        { name: "国土面积", max: 100 },
        { name: "人口", max: 100 },
        { name: "GDP", max: 100 },
        { name: "军事", max: 100 },
        { name: "政治影响力", max: 100 },
        { name: "文化影响力", max: 100 },
      ],
    },

    series: [
      {
        name: "五常综合实力",
        type: "radar",
        data: [
          { name: "中国", value: [76, 95, 95, 92, 99, 97] },
          { name: "美国", value: [84, 68, 98, 96, 99, 88] },
          { name: "俄国", value: [98, 56, 50, 89, 81, 42] },
          { name: "英国", value: [44, 32, 79, 77, 62, 75] },
          { name: "法国", value: [38, 27, 53, 71, 56, 54] },
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
#radarEcharts {
  width: 30vw;
  height: 50vh;
}
</style>