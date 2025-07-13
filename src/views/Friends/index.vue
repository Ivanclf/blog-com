<template>
  <div class="friend-page" :style="bottomStyle">
    <h1>友链</h1>
    <div style="margin-top: 80px; width: 100%; display: flex; flex-direction: column; align-items: center;">
      <FriendLink link="https://ivanclf.github.io/" desc="我的io博客，主要是技术相关的东西" :img=img1 />
      <FriendLink link="https://github.com/Ivanclf" desc="我的GitHub主页" />
    </div>
  </div>
</template>

<script setup>
import { useCardSlideIn } from '../../composables/CardSlideIn.js';
import FriendLink from '../../components/FriendLink.vue';

import image from '../../assets/images/Friends/image.jpg';
const img1 = image;

const bottomStyle = useCardSlideIn('', 2000, 40);
</script>

<style scoped>
.friend-page {
  width: 60vmin;
  height: 60vmin;
  margin: calc(10vmin) auto;
  background: var(--page-side-bg);
  padding: 4vh 4vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 24px;
  box-shadow: 0 -8px 32px var(--primary-dark), -8px 0 32px var(--primary-dark), 8px 0 32px var(--primary-dark);
}
.friend-page h1 {
  font-size: 2rem;
  margin-top: 32px;
  margin-bottom: 24px;
  align-self: flex-start;
  position: absolute;
  top: 32px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
}
</style>
