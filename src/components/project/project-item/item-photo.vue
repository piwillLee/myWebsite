<template>
  <div class="item">
    <div class="item-img"></div>
    <div class="item-content">
      <div class="title">
        <h1>项目名称</h1>
      </div>
      <div class="brief">项目简介</div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.item {
  display: flex;
  width: 100%;
  height: 100%;
  padding: 32px;

  .item-img {
    width: 600px;
    height: 100%;
    background: url(@/assets/img/bgc.png);

    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
