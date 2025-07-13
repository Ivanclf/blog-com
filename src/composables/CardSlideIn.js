// 用于卡片滑入动画的 Vue 插件
import { ref, computed, onMounted } from 'vue';
import { useRafFn } from '@vueuse/core';

export function useCardSlideIn(imgSrc, duration = 2000, offset = 40) {
  const anim = ref(0);
  let rafStop;

  const style = computed(() => {
    const translateY = (1 - anim.value) * offset;
    return `transform: translateY(${translateY}vh); transition: transform 0.8s; background: var(--page-side-bg);`;
  });

  function startAnim() {
    anim.value = 0;
    if (rafStop) rafStop();
    rafStop = useRafFn(({ elapsed }) => {
      const t = Math.min(elapsed / duration, 1);
      anim.value = t;
      if (t === 1 && rafStop) rafStop();
    }).stop;
  }

  onMounted(() => {
    let started = false;
    function runAnim() {
      if (!imgSrc) {
        startAnim();
        started = true;
        return;
      }
      const timer = setTimeout(() => {
        if (!started) {
          startAnim();
          started = true;
        }
      }, 2000);
      const img = new window.Image();
      img.src = imgSrc;
      img.onload = () => {
        if (!started) {
          clearTimeout(timer);
          startAnim();
          started = true;
        }
      };
    }
    if (document.readyState === 'complete') {
      runAnim();
    } else {
      window.addEventListener('load', runAnim);
    }
  });

  return style;
}
