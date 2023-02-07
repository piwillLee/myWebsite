<template>

  <div id="project" ref="projectRef">
    <template v-for="(item, index) in itemConfig" :key="item.id">
      <div :class="!isMobile() ? 'project-item' : 'project-item-mobile'">
        <div class="itemLeft">
          <span class="left-index">0{{ index + 1 }}.</span>
          <div class="left-content">
            <div class="content-title">
              <h3>{{ item.name }}</h3>
            </div>
            <div class="content-text">
              {{ item.status }}
            </div>
          </div>
        </div>
        <div :ref="itemRight" class="itemRight">
          <div class="rightTop">
            <div class="index"> 0{{ index + 1 }}.</div>
            <div class="showcase hover-cursor" @click="handleShowClick(item)"> Showcase</div>
          </div>
          <div class="rightBottom">
            <div class="status">
              Project schedule：
              {{ item.status }}
            </div>
            <div class="arrow hover-cursor" @click="handleShowClick(item)">
              <el-icon>
                <TopRight />
              </el-icon>
            </div>
          </div>
        </div>
      </div>
    </template>
    <el-button size="large" color=" rgb(28, 99, 161)" class="button" @click="getMoreProject">
      查看更多
    </el-button>
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
    name: "我的摄影网站",
    url: "https://photo.willlee.cn",
    status: 'Done',

  },
  {
    id: "2",
    name: "移动端天气App",
    url: "https://weather.willlee.cn",
    status: 'Improving',
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

function isMobile() {
  let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
  return flag;
}

const ctx = ref();
onMounted(() => {

  // rightItem 元素的宽度1/2
  const halfRightItemWidth = arrayRef.value[0].offsetWidth / 2
  if (isMobile()) {
    // 移动端布局适配

    // gsap scrollTrigger 动画
    ctx.value = gsap.context((self) => {
      if (self) {
        const leftItems = self.selector('.itemLeft');
        const rightItems = self.selector('.itemRight');
        leftItems.forEach((item) => {
          gsap.from(item, {
            x: '100%',
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
            x: '100%',
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

  } else {
    // alert("pc端");


    // gsap scrollTrigger 动画
    ctx.value = gsap.context((self) => {
      if (self) {
        const leftItems = self.selector('.itemLeft');
        const rightItems = self.selector('.itemRight');
        leftItems.forEach((item) => {
          gsap.from(item, {
            width: 0,
            x: 500,
            opacity: 0,
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
  }

})


const router = useRouter();
function handleShowClick(item) {
  if (item.url.length > 5) {
    window.open(item.url);
  }
}

function getMoreProject() {
  router.push('/project')
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

  // 移动端适配
  .project-item-mobile {
    width: 100%;
    height: 300px;

    // margin-bottom: 32px !important;
    display: flex;
    flex-direction: column;

    .itemLeft {
      width: 100%;
      height: 200px;
      background-color: rgb(29, 29, 29);
      z-index: -1;
      white-space: nowrap;
      color: rgb(125, 125, 125);
      display: flex;
      align-items: center;

      .left-index {
        margin: 64px;
        font-size: 36px;
        font-weight: 700;
        opacity: 0.2;
      }

      .left-content {
        .content-title {
          margin-bottom: 16px;
        }
      }
    }

    .itemRight {
      width: 100%;
      height: 200px;
      background-color: rgb(28, 99, 161);

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 16px 32px;

      .rightTop {
        width: 100%;
        display: flex;
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

  .project-item {
    width: 100%;
    height: 280px;
    padding: 16px 20px;

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
      color: rgb(125, 125, 125);


      display: flex;
      align-items: center;


      .left-index {
        margin: 64px;
        font-size: 36px;
        font-weight: 700;
        opacity: 0.2;
      }

      .left-content {
        // opacity: 0.6;




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
      background-color: rgb(28, 99, 161);

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

  .button {
    margin-top: 16px;
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
