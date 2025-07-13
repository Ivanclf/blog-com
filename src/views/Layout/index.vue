<template>
    <layout-nav />
    <router-view />
    <layout-footer />
</template>

<script setup>
import LayoutNav from './LayoutNav.vue'
import layoutFooter from './LayoutFooter.vue'
</script>