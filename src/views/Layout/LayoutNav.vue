<template>
    <nav class="layout-nav">
        <div class="nav-left">
            <router-link to="/" class="blog-name">Ivan的个人网站</router-link>
        </div>
        <div class="nav-right">
            <router-link to="/about" class="nav-link"><i class="iconfont icon-about"></i>关于</router-link>
            <router-link to="/friends" class="nav-link"><i class="iconfont icon-link"></i>友链</router-link>
        </div>
    </nav>
</template>

<script setup>

</script>

<style scoped> 

@import '../../assets/theme.css';

.layout-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 32px;
    height: 60px;
    background: var(--primary);
    border-bottom: 1px solid var(--border-color);
}
.nav-left {
    margin-left: 5%;
}
.nav-left .blog-name {
    font-size: 1.75rem;
    font-weight: bold;
    color: #333;
    text-decoration: none;
}

.nav-left .blog-name :hover {
    color: var(--primary-dark);
}

.nav-right {
    display: flex;
    gap: 24px;
    margin-right: 5%;
}

.nav-link {
    color: #555;
    text-decoration: none;
    font-size: 1rem;
    transition: color 0.2s;
}

.nav-link:hover {
    color: #0078d4;
}
</style>