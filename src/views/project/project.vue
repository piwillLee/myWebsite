<template>
  <div class="project">
    <el-row :gutter="10">
      <template v-for="(item, index) in itemConfig" :key="item.id">
        <el-col :xs="12" :sm="8" :md="8" :lg="6" :xl="6">

          <div ref='container' :class="[width > 600 ? ' project-item-lg' : 'project-item-sm', 'project-item']"
            @click="handleItemClick(item)">
            <span class="item-index">{{ index + 1 }}</span>
            <div class="item-name">{{ item.name }}</div>
          </div>
        </el-col>
      </template>
    </el-row>
  </div>
  <!-- <router-view></router-view> -->
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

import { useWindowSize } from '@vueuse/core'
import { useParallax } from '@vueuse/core'
import { ref, reactive, computed } from 'vue'
const { width, height } = useWindowSize()



const itemConfig = [
  {
    id: "1",
    name: "作品分享",
    url: "photo"
  },
  {
    id: "2",
    name: "后台管理系统",
    url: "/cms"
  },
  {
    id: "3",
    name: "移动端网站",
    url: "/web",
  },
  {
    id: "4",
    name: "大屏项目",
    url: "",
  },
  {
    id: "5",
    name: "天气App",
    url: "/weather",
  },
  {
    id: "6",
    name: "color chief",
    url: "",
  },
  {
    id: "7",
    name: "浏览器主页",
    url: "",
  },
];

const router = useRouter();
function handleItemClick(item) {
  console.log(item);
  router.push(item.url);
}
</script>

<style lang="less" scoped>
.project {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  padding: 16px 0;

  .el-row {
    margin: 0 !important;
  }

  .el-col {
    margin-bottom: 32px !important;
    display: flex;
    justify-content: center;
    align-items: center;
    perspective: 300px,
  }



  .project-item {

    margin-bottom: 32px !important;
    position: relative;
    padding: 12px;

    background-color: var(--el-bg-color);
    // background-color: rgb(30, 30, 30);
    box-shadow: 0px 0px 12px 1px var(--el-color-primary-light-7);

    border-radius: 16px;

    .item-index {
      position: absolute;
      left: -30px;
      font-size: 72px;
      font-weight: 700;
      // color: rgba(240, 248, 255, 0.469);
      opacity: 0.2;
      z-index: -1;
    }

    .item-name {
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .project-item-sm {
    width: 150px;
    height: 240px;
  }

  .project-item-lg {
    width: 200px;
    height: 300px;
  }
}
</style>
