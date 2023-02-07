<template>
  <div class="project-demo">
    <div ref="container" class="container">
      <header class="header">
        <h1 class="title">项目列表</h1>

        <div class="back">
          <el-link :underline="false" @click="$router.back()">
            返回首页
          </el-link>
        </div>
      </header>
      <el-divider />
      <h2 class="title">· 个人项目</h2>
      <!-- 项目列表 -->
      <el-row :gutter="16">
        <template v-for="item in myProjectData" :key="item.url">
          <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="8">
            <el-card>
              <div style="padding: 14px">
                <h3 class="text">
                  {{ item.name }}
                </h3>
                <div class="brief">
                  {{ item.brief }}
                </div>
                <div class="bottom">
                  <a :href="item.url" target="_blank">
                    <el-button type="success" plain class="button">查看项目</el-button>
                  </a>
                </div>
              </div>
            </el-card></el-col>
        </template>

      </el-row>


      <el-divider />
      <h2 class="title">项目练习</h2>
      <!-- 项目列表 -->
      <el-row :gutter="16">
        <template v-for="item in projectData" :key="item.url">
          <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="12">
            <el-card>
              <div style="padding: 14px">
                <h3 class="text">
                  {{ item.name }}
                </h3>
                <div class="brief">
                  {{ item.brief }}
                </div>
                <div class="bottom">
                  <a :href="item.url" target="_blank">
                    <el-button type="success" plain class="button">查看项目</el-button>
                  </a>
                </div>
              </div>
            </el-card></el-col>
        </template>

      </el-row>
    </div>
  </div>


</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const myProjectData = [
  {
    name: '摄影网站',
    brief: '一个摄影作品网站',
    url: 'https://photo.willlee.cn',
    cover: 'https://img1.imgtp.com/2023/02/07/rR8xn7Rt.jpg'
  },
  {
    name: '天气 APP',
    brief: '一个天气查询网站',
    url: 'https://weather.willlee.cn',
    cover: 'https://img1.imgtp.com/2023/02/07/rR8xn7Rt.jpg'
  },
]
const projectData = [
  {
    name: '后台管理系统',
    brief: '后台管理系统网站',
    url: 'http://106.14.205.142:3/',
  },
  {
    name: '可视化大屏',
    brief: '一可视化大屏项目',
    url: 'http://106.14.205.142:3/',
  },
  {
    name: '民宿类移动端',
    brief: '民宿类移动端网站',
    url: 'http://106.14.205.142:3/',
  },
]


const container = ref()
onMounted(() => {
  window.scrollTo(0, 0)
})

</script>

<style lang="less" scoped>
.project-demo {
  padding: 16px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}



.container {
  max-width: 1200px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px;
}

.back {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .el-icon {
    margin-right: 6px;
  }
}

.title {
  margin-bottom: 16px;
}

.el-card {
  width: 100%;
  margin-bottom: 16px;

  .image {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .brief {
    margin: 16px 0;

  }


  .icon {
    margin-right: 15px;
  }
}
</style>
