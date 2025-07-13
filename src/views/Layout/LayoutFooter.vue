<template>
  <footer class="layout-footer">
    <div class="footer-left">
      <a class="blog-author">Ivan的个人网站</a>
    </div>
    <div class="footer-right">
      <span class="copyright">Copyright © 2025 Ivan. All Rights Reserved.</span>
      <a class="beian" href="https://beian.miit.gov.cn/" target="_blank">陕ICP备2025071798号</a>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>

@import '../../assets/theme.css';

.layout-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
  height: 60px;
  background: var(--footer-bg);
  color: var(--footer-text);
  border-top: 1px solid var(--border-color);
}

.footer-left .blog-author {
  font-size: 1.1rem;
  font-weight: bold;
  color: #333;
}

.footer-right {
  display: flex;
  gap: 24px;
}

.copyright,
.beian {
  color: #555;
  font-size: 1rem;
}
</style>