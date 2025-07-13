<template>
    <div class="card-list">
        <ArticleCard title="deepseek" link="https://chat.deepseek.com/" subtitle="这不比百度好多了" :img="ds" />
        <ArticleCard title="苍穹外卖" link="https://www.bilibili.com/video/BV1TP411v7v6" subtitle="经典项目，不得不品" />
        <ArticleCard title="Vue-3官方文档" link="https://cn.vuejs.org/guide/introduction.html" subtitle="本网站使用Vue-3，在copilot的协作下完成，本人只是idea的提供者" />
    </div>
</template>

<script setup>
import ArticleCard from '../../components/HomeCard.vue';
import deepsleep from '../../assets/images/Card/deepsleep.jpg';
const ds = deepsleep;
</script>

<style scoped>
.card-list {
    display: flex;
    gap: 48px;
    width: 80vw;
    max-width: 1200px;
    justify-content: center;
    margin-top: 10vh;
    margin-bottom: 10vh;
    margin-left: 5%;
    margin-right: 5%;
}
</style>
