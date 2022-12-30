<template>
  <div class="header">

    <el-menu class="el-menu" mode="horizontal" :ellipsis="false" @select="handleSelect">
      <div class="logo">
        <img class="logo-img" src="@/assets/img/favicon.ico" alt="" />
        <h3 class="title">Willlee</h3>
      </div>
      <template v-if="width > 600 ? true : false">
        <div class="nav">
          <el-menu-item index="home">Home</el-menu-item>
          <el-menu-item index="project">Project</el-menu-item>
          <el-menu-item index="about">About</el-menu-item>
          <!-- <el-menu-item index="3">Photograph</el-menu-item> -->
          <el-switch @change="handleToggle" v-model="isDarkValue" class="mt-2" style="margin-left: 24px" inline-prompt
            :active-icon="Moon" :inactive-icon="Sunny" />
        </div>
      </template>
      <template v-else>
        <el-button @click="drawer = true">
          <el-icon>
            <Menu />
          </el-icon>
        </el-button>
      </template>


      <el-drawer size="100%" v-model="drawer" title="I am the title" :with-header="false">
        <div class="center">
          <el-menu-item index="/">Home</el-menu-item>
          <el-menu-item index="/project">Project</el-menu-item>
          <el-menu-item index="/about">About</el-menu-item>
          <el-button @click="drawer = false">
            <el-icon>
              <Close />
            </el-icon>
          </el-button>
        </div>
      </el-drawer>
    </el-menu>

  </div>
</template>

<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";
import { onMounted, ref } from "vue";
import { Sunny, Moon } from "@element-plus/icons-vue";

import { useWindowSize } from '@vueuse/core'
import gsap from "gsap";



onMounted(() => {
  gsap.fromTo('.logo-img', { rotate: 0 }, { rotate: 360, duration: 36, ease: "sine.out", repeat: -1 })
})

const { width, height } = useWindowSize()
const drawer = ref(false)


const handleSelect = (item) => {
  console.log(item);


  // 滚动到
  document.getElementById(item)?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });


  console.log(item);
  drawer.value = false
}



const isDark = useDark();
const toggleDark = useToggle(isDark);
const isDarkValue = ref(true);

console.log(isDarkValue.value);

function handleToggle() {
  toggleDark();
}
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  padding: 0 !important;

  // background-color: var(--bg-color);

  .el-menu {
    padding: 0 32px;
    height: 58px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    display: flex;
    align-items: center;

    img {
      width: 36px;
    }

    .title {
      margin-left: 16px;
    }
  }

  .el-main {
    height: 100%;
    // background-color: rgba(145, 145, 145, 0.227);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
    user-select: none;
  }


  .center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    // background-color: red;

    .el-button {
      margin-top: 50px;
    }
  }

  .nav {
    display: flex;
    align-items: center;
  }
}
</style>
