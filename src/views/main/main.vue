<template>
  <div class="main">
    <div class="container">
      <div ref="target" class="img" :style="moveImg"></div>


      <div class="down">
        <vue-typed class="typeText" :strings="['NEVER STOP EXPLORE', 'GET MORE']" loop="true" typeSpeed='15'
          backSpeed='5'>

        </vue-typed>

        <el-button @click="handleMoreBtnClick" class="moreBtn">
          <el-icon>
            <ArrowDown />
          </el-icon>
        </el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";
import { computed, reactive, ref, onMounted } from "vue";
import { Sunny, Moon } from "@element-plus/icons-vue";
import MainContent from "./cpns/main-content.vue";

import { useMouseInElement } from '@vueuse/core'

import { useWindowSize } from '@vueuse/core'
import { VueTyped } from "vue3-typed.js"
import gsap from "gsap";
import { useRouter } from "vue-router";


const router = useRouter()

const handleMoreBtnClick = () => {
  router.push('/project')
}

// 动画效果
const btnRef = ref()
onMounted(() => {
  // 图片

  const tl = gsap.timeline()
  tl.fromTo('.img', { scale: 0, }, { scale: 1, duration: 2, ease: "slow(0, 0.2, false)" })
  tl.fromTo('.img', { backgroundSize: 600 }, { backgroundSize: 120, duration: 2, }, "-=2")

  // type text
  tl.fromTo('.typeText', { opacity: 0, x: -100 }, { x: 0, opacity: 1, duration: 0.75, delay: 0.5 })
  // more按钮
  tl.fromTo('.moreBtn', { opacity: 0, y: -20 }, { opacity: 1, y: 0, repeat: -1, yoyo: true, duration: 0.75 })
}
)

const { width, height } = useWindowSize()

const target = ref(null)

const { x, y, isOutside } = useMouseInElement(target)
const moveX = computed(() => {
  if (!isOutside.value) {
    return -x.value * 0.1 + 'px'
  }

})
const moveY = computed(() => {

  if (!isOutside.value && y.value) {
    return -y.value * 1.2 - 350 + 'px'
  }

})
const moveImg = reactive({
  backgroundPositionX: width.value > 600 ? moveX : '',
  backgroundPositionY: width.value > 600 ? moveY : '',
  transition: isOutside.value ? "all 0.3s ease" : "all 10s ease"
})


const isDark = useDark();
const toggleDark = useToggle(isDark);
const isDarkValue = ref(true);

console.log(isDarkValue.value);

function handleToggle() { }
</script>

<style lang="less" scoped>
.main {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  user-select: none;

  .container {
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;

    .img {
      width: 100%;
      height: 300px;
      background: url("@/assets/img/bgc.png");

      background-repeat: no-repeat;
      background-size: 120%;
      background-position: center 70%;

    }

    // .title {
    //   // position: absolute;
    //   right: 400px;
    //   top: 100px;
    //   font-size: 36px;
    //   opacity: 0.2;
    // }

    .down {
      .typeText {
        margin-bottom: 100px;
        font-size: 28px;
        opacity: 0.8;
      }

      height: 100px;
      margin-top: 200px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }
}
</style>
