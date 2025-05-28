<template>
  <div class="page-container">
    <!-- Power BI iframe 區塊 -->
    <div class="iframe-container">
      <iframe
        title="Power BI Report"
        src="https://app.powerbi.com/view?r=eyJrIjoiMzQ4ZmU4ZDItNDljMi00MTA4LWIzNzMtYzA4ZTQ2NjkyNWZkIiwidCI6IjFlZjg1NDQ4LTIwYzItNDQwYS04NzFkLTRmM2RlZjExMDQyZiIsImMiOjEwfQ%3D%3D"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>

    <!-- 頁尾 -->
    <CFooter />
  </div>
</template>

<script>
import CFooter from '../../components/isp/CFooter.vue'

export default {
  name: 'PowerBIReport',
  components: {
    CFooter
  }
}
</script>

<style scoped>
.page-container {
  padding: 1.5rem;
}

/* 16:9 iframe 顯示 */
.iframe-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  height: 0;
  margin-bottom: 2rem;
  overflow: hidden;
}

.iframe-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}
</style>
