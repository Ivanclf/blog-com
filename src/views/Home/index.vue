<template>
    <div class="main-page-container main-page">
        <div class="main-top" :style="mainTopBg" @mousemove="handleMouseMove" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
            <div class="main-title">
                <h1 class="center-title">Collection, just a collection</h1>
            </div>
        </div>
        <div class="main-bottom" :style="bottomStyle">
            <CardList />
        </div>
    </div>
</template>

<script setup>
import CardList from './CardList.vue';
import bannerImgSrc from '../../assets/images/banner.jpg';
import { useCardSlideIn } from '../../composables/CardSlideIn.js';
import { ref, computed } from 'vue';

const mouseY = ref(window.innerHeight / 2);
const isHover = ref(false);
const offset = ref(0);
let restoreTimer = null;

function handleMouseMove(e) {
  mouseY.value = e.clientY;
  if (isHover.value) {
    offset.value = Math.max(Math.min((mouseY.value - window.innerHeight / 2) / 10, 50), -50);
  }
}
function handleMouseEnter() {
  isHover.value = true;
  if (restoreTimer) {
    clearInterval(restoreTimer);
    restoreTimer = null;
  }
}
function handleMouseLeave() {
  isHover.value = false;
  restoreTimer = setInterval(() => {
    if (Math.abs(offset.value) < 1) {
      offset.value = 0;
      clearInterval(restoreTimer);
      restoreTimer = null;
      return;
    }
    offset.value += (0 - offset.value) * 0.2;
  }, 16);
}

const mainTopBg = computed(() => {
  return `background: url('${bannerImgSrc}') center calc(50% + ${offset.value}px)/cover no-repeat, #e3f2fd;`;
});
const bottomStyle = useCardSlideIn(bannerImgSrc, 2000, 40);
</script>

<style scoped>
.main-page {
    min-height: 100vh;
    background: #f6faff;
    display: flex;
    flex-direction: column;
}

.main-top {
    position: relative;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #e3f2fd;
}

.main-title {
    position: relative;
    z-index: 2;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0;
    background: transparent;
    border-radius: 16px;
    padding: 16px 0;
}

.center-title {
    font-size: 2.5rem;
    color: #000000de;
    font-weight: bold;
    letter-spacing: 2px;
    text-align: center;
    width: 100%;
}

.main-bottom {
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--page-side-bg);
    margin-left: 10%;
    margin-right: 10%;
    margin-top: -5rem;
    margin-bottom: 0;
    box-shadow: 0 -8px 32px var(--primary-dark), -8px 0 32px var(--primary-dark), 8px 0 32px var(--primary-dark);
    border-radius: 10px;
    min-height: 50vh;
    height: auto;
    z-index: 2;
}

.card-list {
    display: flex;
    gap: 48px;
    width: 80vw;
    max-width: 1200px;
    justify-content: center;
}
</style>
