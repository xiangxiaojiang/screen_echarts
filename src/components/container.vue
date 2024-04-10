<template>
  <div class="container">
    <div class="topbar">大屏可视化</div>
    <div class="pieEcharts">
      <pieEcharts></pieEcharts>
    </div>
    <div class="radarEcharts">
      <radarEcharts></radarEcharts>
    </div>
    <div class="barEcharts">
      <barEcharts></barEcharts>
    </div>
    <div class="lineEcharts">
      <lineEcharts></lineEcharts>
    </div>
    <div class="earth">
      <earth></earth>
    </div>
  </div>
</template>

<script setup>
import barEcharts from "./bar.vue";
import lineEcharts from "./line.vue";
import pieEcharts from "./pie.vue";
import radarEcharts from "./radar.vue";
import earth from "./earth.vue";
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  //   width: 100%;
  //   height: 100vh;
  //背景图片自适应屏幕
  //   background: url("../assets/img/bj.png") no-repeat top center;
  //   background-size: cover;
  //   .container_top,
  //   .container_bottom {
  //     display: flex;
  //     justify-content: space-between;
  //   }
  .topbar{
    width: 300px;
    height: 50px;
    border-radius:0px 0px 10px 10px;
    background-color: rgba(51, 160, 223, 0.9);
    z-index: 99999;
    position: relative;
    margin: 0 auto;
    color: #fff;
    text-align: center;
    line-height: 50px;
    font-size: 28px;
    letter-spacing: 5px;
  }


  .earth {
    position: absolute;
    top: 0px;
  }
  .pieEcharts {
    position: absolute;
    top: 76px;
    z-index: 99999;
  }
  .radarEcharts {
    position: absolute;
    top: 76px;
    right: 0px;
    z-index: 99999;
  }
  .barEcharts {
    position: absolute;
    top: 50vh;
    z-index: 99999;
  }
  .lineEcharts {
    position: absolute;
    top: 50vh;
    right: 0px;
    z-index: 99999;
  }
}
</style>