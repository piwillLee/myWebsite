<template>
  <div class="home">

    <!-- loading -->
    <loading v-if="!isStart" @isEnd="handleIsEnd"></loading>

    <div class="content">
      <!-- nav -->
      <header-nav></header-nav>

      <!-- 首页 -->
      <main-page ref="mainRef"></main-page>


      <!-- 项目 -->
      <keep-alive>
        <project></project>
      </keep-alive>

      <!-- 关于 -->
      <about></about>

      <!-- 备案信息 -->
      <bei-an></bei-an>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderNav from "@/components/header.vue";
import MainPage from "@/components/main/main.vue";
import BeiAn from "@/components/beiAn/beiAn.vue";
import Project from "@/components/project/project.vue";
import About from "@/components/about/about.vue";
import Loading from '@/components/loading/loading.vue';
import { ref, watch } from "vue";
import gsap from "gsap";

const isStart = ref(false)

function handleIsEnd(value) {
  // console.log(value);
  isStart.value = value;
}
const mainRef = ref<InstanceType<typeof MainPage>>();

watch(isStart, (newValue) => {
  // console.log(newValue);
  gsap.from('.content', { y: ' 100vh', duration: 1, ease: "sine.out" })

  mainRef.value?.startAnimation()
})

</script>

<style lang="less" scoped>
.home {
  width: 100%;
  overflow-x: hidden;

  .content {
    width: 100%;
  }

}
</style>
