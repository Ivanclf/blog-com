<template>
  <div
    class="article-card"
    :class="img ? 'with-img' : 'no-img'"
    @click="goTo"
    >
    <div v-if="img" class="card-img">
      <img :src="img" alt="卡片图片" />
    </div>
    <div class="card-content">
      <h2 class="card-title">{{ title }}</h2>
      <p class="card-subtitle" v-if="subtitle">{{ subtitle }}</p>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  img: { type: String, default: '' },
  link: { type: String, default: '' }
});

function goTo() {
  if (props.link) {
    window.open(props.link, '_blank');
  }
}
</script>

<style scoped>

@import '../assets/theme.css';

.article-card {
  background: var(--card-bg);
  color: var(--primary);
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(25,118,210,0.08);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-bottom: 24px;
  transition: box-shadow 0.2s, background 0.2s;
  cursor: pointer;
  align-items: center;
  justify-content: center;
}
.article-card:hover {
  background: var(--card-hover-bg);
  box-shadow: 0 4px 16px rgba(25,118,210,0.16);
}
.article-card:hover .card-img img {
  filter: brightness(0.8) grayscale(40%);
  transition: filter 0.2s;
}

.article-card.with-img {
  width: 40%;
  height: 60vh;
}
.article-card.no-img {
  width: 40%;
  height: 40vh;
}

.card-img img {
  width: 80%;
  height: auto;
  display: block;
  margin: 0 auto;
  border-radius: 16px;
}

.card-content {
  padding: 32px 24px;
  text-align: center;
}
.card-title {
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  margin: 0 0 12px 0;
}
.card-subtitle {
  font-size: 1.1rem;
  color: #555;
  margin: 0 0 16px 0;
}
</style>