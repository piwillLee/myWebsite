<template>
  <div id="loading">
    <div class="flash flash1">
      <div class="text text1L ">L</div>
      <div class="text text1E1 ">E</div>
      <div class="text text1E2 ">E</div>
      <div class="text text1Dot ">·</div>
    </div>
    <div class="flash flash2">
      <div class="text text2W ">W</div>
      <div class="text text2I ">I</div>
      <div class="text text2L1 ">L</div>
      <div class="text text2L2 ">L</div>
    </div>
    <div class="flash flash3">
      <div class="text text3W ">W</div>
      <div class="text text3I ">I</div>
      <div class="text text3L1 ">L</div>
      <div class="text text3L2 ">L</div>
      <div class="text text3L3 ">L</div>
      <div class="text text3E1 ">E</div>
      <div class="text text3E2 ">E</div>
      <div class="text text3Dot ">·</div>
    </div>
    <div class="flash flash4">
      <div class="text text4W ">W</div>
      <div class="text text4I ">I</div>
      <div class="text text4L1 ">L</div>
      <div class="text text4L2 ">L</div>
      <div class="text text4L3 ">L</div>
      <div class="text text4E1 ">E</div>
      <div class="text text4E2 ">E</div>
      <div class="text text4Dot ">.</div>
    </div>
    <!-- <div class="flash flash2">
      <div class="text text1 ">Willlee.</div>
    </div> -->
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, defineEmits } from 'vue'
import gsap from 'gsap'
import { useWindowSize } from '@vueuse/core'

const emit = defineEmits(['isEnd'])

onMounted(() => {
  const tl = gsap.timeline({ duration: 1, ease: "power3.out" })
  tl.fromTo('.text1L', { scale: 6, x: -650, y: -500, rotate: 55 }, { x: -600, y: -300, rotate: 65, })
  tl.fromTo('.text1E1', { scale: 6, x: 750, y: -500, rotate: -55 }, { x: 800, y: -340, rotate: -65, }, "<")
  tl.fromTo('.text1E2', { scale: 6, x: 250, y: 500, rotate: 55 }, { x: 200, y: 400, rotate: 65, }, "<")
  tl.fromTo('.text1Dot', { scale: 6, x: 50, y: 20, rotate: 55 }, { x: 100, y: -50, rotate: 65, }, "<")
  tl.fromTo('.flash1', { opacity: 1 }, { opacity: 0, duration: 0.1, })
  tl.fromTo('.flash2', { opacity: 1 }, { opacity: 1, color: "#000", background: '#fff', }, "<")
  tl.fromTo('.text2W', { scale: 6, x: -650, y: -500, rotate: -90 }, { x: -600, y: -350, rotate: -120 }, "<")
  tl.fromTo('.text2I', { scaleX: 30, x: 650, y: -500, rotate: -55 }, { x: 600, y: -400, rotate: -65 }, "<")
  tl.fromTo('.text2L1', { scale: 6, x: -650, y: 500, rotate: -55 }, { x: -600, y: 400, rotate: -65 }, "<")
  tl.fromTo('.text2L2', { scale: 6, x: 650, y: 400, rotate: 10 }, { x: 500, y: 300, rotate: 20 }, "<")
  tl.fromTo('.flash2', { opacity: 1 }, { opacity: 0, duration: 0.1, })
  tl.fromTo('.flash3', { opacity: 1 }, { opacity: 1, color: "#fff", background: '#000', }, "<")
  tl.fromTo('.text3W', { scale: 4, x: -650, y: -250, rotate: 30 }, { x: -600, y: -150, rotate: 20 }, "<")
  tl.fromTo('.text3I', { scale: 4, x: -550, y: 300, rotate: -35 }, { x: -400, y: 200, rotate: -25 }, "<")
  tl.fromTo('.text3L1', { scale: 4, x: -350, y: -300, rotate: -55 }, { x: -200, y: -200, rotate: -35 }, "<")
  tl.fromTo('.text3L2', { scale: 4, x: -100, y: 100, rotate: 10 }, { x: 0, y: 50, rotate: 20 }, "<")
  tl.fromTo('.text3L3', { scale: 4, x: 100, y: 100, rotate: -10 }, { x: 150, y: 150, rotate: -20 }, "<")
  tl.fromTo('.text3E1', { scale: 4, x: 430, y: -100, rotate: -10 }, { x: 350, y: -120, rotate: -20 }, "<")
  tl.fromTo('.text3E2', { scale: 4, x: 666, y: -300, rotate: -10 }, { x: 550, y: -230, rotate: 20 }, "<")
  tl.fromTo('.text3E2', { scale: 4, x: 760, y: -300, rotate: -10 }, { x: 650, y: -230, rotate: 20 }, "<")
  tl.fromTo('.text3Dot', { scale: 4, x: 600, y: -300, rotate: -10 }, { x: 450, y: -30, rotate: 20 }, "<")
  tl.fromTo('.flash3', { opacity: 1 }, { opacity: 0, duration: 0.1, })
  tl.fromTo('.flash4', { opacity: 1 }, { opacity: 1, scale: 3, color: "#fff", background: '#000', }, "<")
  tl.fromTo('.text4W', { scale: 1, x: -20, y: -25, rotate: 30 }, { x: 0, y: 0, rotate: 0, duration: 2, ease: "back.out(1.7)" }, "<")
  tl.fromTo('.text4I', { scale: 1, x: -50, y: 20, rotate: -35 }, { x: 0, y: 0, rotate: 0, duration: 2, ease: "back.out(1.7)" }, "<")
  tl.fromTo('.text4L1', { scale: 1, x: -20, y: -20, rotate: -55 }, { x: 0, y: 0, rotate: 0, duration: 2, ease: "back.out(1.7)" }, "<")
  tl.fromTo('.text4L2', { scale: 1, x: -30, y: 10, rotate: 10 }, { x: 0, y: 0, rotate: 0, duration: 2, ease: "back.out(1.7)" }, "<")
  tl.fromTo('.text4L3', { scale: 1, x: 100, y: 10, rotate: -10 }, { x: 0, y: 0, rotate: 0, duration: 2, ease: "back.out(1.7)" }, "<")
  tl.fromTo('.text4E1', { scale: 1, x: 30, y: -10, rotate: 15 }, { x: 0, y: 0, rotate: 0, duration: 2, ease: "back.out(1.7)" }, "<")
  tl.fromTo('.text4E2', { scale: 1, x: 40, y: -23, rotate: -17 }, { x: 0, y: 0, rotate: 0, duration: 2, ease: "back.out(1.7)" }, "<")
  tl.fromTo('.text4E2', { scale: 1, x: 60, y: -13, rotate: 20 }, { x: 0, y: 0, rotate: 0, duration: 2, ease: "back.out(1.7)" }, "<")
  tl.fromTo('.text4Dot', { scale: 1, x: 50, y: -16, rotate: -12 }, { x: 0, y: 0, rotate: 0, duration: 2, ease: "back.out(1.7)" }, "<").then(() => {

    isEnd.value = true
    handleIsEnd()
  })

})

const isEnd = ref(false)

function handleIsEnd() {
  emit('isEnd', isEnd.value)
}



</script>

<style lang="less" scoped>
#loading {

  position: relative;

  .flash {
    //  当宽高设置在 #loading 上时，gsap设置的item动画不生效
    width: 100vw;
    height: 100vh;

    position: fixed;
    z-index: 999;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    display: flex;

    justify-content: center;
    align-items: center;
    background-color: rgb(0, 0, 0);
  }

  .flash1 {
    z-index: 9;
  }

  .flash2 {
    z-index: 8;
  }

  .flash3 {
    z-index: 7;
  }

  .flash4 {
    z-index: 6;
    margin-right: 10px;

  }

  .text {
    font-size: 3vw;
    font-weight: 800;
  }

  .text1 {
    color: #fff;
    background-color: rgb(10, 10, 10);
  }

  .text2 {
    color: rgb(11, 11, 11);
    background-color: rgb(247, 239, 239);
  }
}
</style>
