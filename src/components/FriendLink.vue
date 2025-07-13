<template>
  <div class="friend-link" @click="goTo">
    <div v-if="img" class="link-img large">
      <img :src="img" alt="友链图片" />
    </div>
    <div v-else class="link-img small"></div>
    <div class="link-content">
      <a class="link-url" :href="link" target="_blank">{{ link }}</a>
      <p class="link-desc">{{ desc }}</p>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  link: { type: String, required: true },
  desc: { type: String, required: true },
  img: { type: String, default: '' }
});
function goTo() {
  if (props.link) {
    window.open(props.link, '_blank');
  }
}
</script>

<style scoped>
.friend-link {
  display: flex;
  align-items: center;
  background: var(--card-bg);
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(25,118,210,0.08);
  padding: 20px 32px;
  margin-bottom: 24px;
  cursor: pointer;
  transition: box-shadow 0.2s, background 0.2s;
}
.friend-link:hover {
  background: var(--card-hover-bg);
  box-shadow: 0 4px 16px rgba(25,118,210,0.16);
}
.friend-link:hover .link-img img {
  filter: brightness(0.8) grayscale(40%);
  transition: filter 0.2s;
}
.link-img.large img {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 12px;
  margin-right: 24px;
}
.link-img.small {
  width: 48px;
  height: 48px;
  margin-right: 16px;
}
.link-content {
  display: flex;
  flex-direction: column;
}
.link-url {
  color: var(--primary);
  font-size: 1.1rem;
  font-weight: bold;
  text-decoration: none;
  margin-bottom: 8px;
}
.link-desc {
  color: var(--text-sub);
  font-size: 1rem;
}
</style>
