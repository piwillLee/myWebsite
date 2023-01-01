<template>

  <div id="project" ref="projectRef">
    <template v-for="(item, index) in itemConfig" :key="item.id">
      <div class="project-item" @click="handleItemClick(item)">
        <div class="itemLeft">
          <span class="left-index">0{{ index + 1 }}.</span>
          <div class="left-content">
            <div class="content-title">
              <h3>{{ item.name }}</h3>
            </div>
            <div class="content-text">
              {{ item.name }}{{ item.name }}{{ item.name }}
            </div>
          </div>
        </div>
        <div :ref="itemRight" class="itemRight">
          <div class="rightTop">
            <div class="index"> 0{{ index + 1 }}.</div>
            <div class="showcase"> Showcase</div>
          </div>
          <div class="rightBottom">
            <div class="status">
              Project in progress
            </div>
            <div class="arrow">
              <el-icon>
                <TopRight />
              </el-icon>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>

</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref, onMounted, } from 'vue'
import { gsap } from "gsap";
import { useWindowScroll } from '@vueuse/core'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

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

const projectRef = ref<HTMLElement>()
const { x, y } = useWindowScroll()

// 动态获取 itemRight
const arrayRef = ref([]) as any
const itemRight = el => {
  if (el) {
    arrayRef.value.push(el)
  }
}

const ctx = ref();
onMounted(() => {
  // console.log('DOM 已挂载');
  // rightItem 元素的宽度1/2
  const halfRightItemWidth = arrayRef.value[0].offsetWidth / 2

  // gsap scrollTrigger 动画
  ctx.value = gsap.context((self) => {
    if (self) {
      const leftItems = self.selector('.itemLeft');
      const rightItems = self.selector('.itemRight');
      leftItems.forEach((item) => {
        gsap.from(item, {
          width: 20,
          x: 500,
          scrollTrigger: {
            trigger: item,
            start: 'bottom bottom',
            end: 'top 20%',
            scrub: true,
            // markers: true // 显示标记
          },
        });
      });
      rightItems.forEach((item) => {
        gsap.from(item, {
          x: -halfRightItemWidth,
          scrollTrigger: {
            trigger: item,
            start: 'bottom bottom',
            end: 'top 20%',
            scrub: true,
            // markers: true // 显示标记
          },
        });
      });
    }
  }, projectRef.value); // <- Scope!

})


const router = useRouter();
function handleItemClick(item) {
  // console.log(item);
  // router.push(item.url);
}
</script>

<style lang="less" scoped>
.scroll {
  position: fixed;
  bottom: 0;
  right: 0;
  background-color: #fff;
  color: red;
  z-index: 999;
  padding: 20px;
}


#project {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  padding: 16px 20px;

  .box {
    width: 800px;
    height: 800px;
    background-color: rgb(216, 48, 48);
  }

  .box1 {
    width: 200px;
    height: 200px;
    margin-top: 10px;
    background-color: rgb(30, 172, 161);
  }

  .active {
    width: 200px;
    height: 200px;
    margin-top: 10px;
    background-color: rgb(30, 172, 161);
  }


  .project-item {
    width: 100%;
    height: 280px;

    margin-bottom: 32px !important;
    position: relative;

    .itemLeft {
      position: absolute;
      left: 0;
      top: 0;
      border-radius: 64px;
      width: 60%;
      height: 100%;
      background-color: rgb(29, 29, 29);
      z-index: -1;
      white-space: nowrap;


      display: flex;
      align-items: center;


      .left-index {
        margin: 64px;
        font-size: 36px;
        font-weight: 700;
        opacity: 0.2;
      }

      .left-content {
        opacity: 0.6;



        .content-title {
          margin-bottom: 16px;
        }
      }
    }

    .itemRight {

      width: 50%;
      position: absolute;
      right: 0;
      top: 0;
      border-radius: 64px;
      height: 100%;
      background-color: #a6a2ff;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 32px 64px;

      .rightTop {
        width: 100%;
        // height: 100%;
        display: flex;
        // justify-content: flex-end;
        justify-content: space-between;
      }

      .rightBottom {
        width: 100%;
        display: flex;
        justify-content: space-between;

        .arrow {
          font-size: 32px;
        }
      }
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
