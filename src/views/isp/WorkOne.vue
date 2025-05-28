<template>
  <div class="section-title">
    <div class="title-box"></div>
    <h2>工作職業類型1</h2>
  </div>
  <div class="iframe-container">
    <iframe title="rich_20240826HomeWork1" 
    src="https://app.powerbi.com/view?r=eyJrIjoiNjZiNjcxNTUtYjhhYi00MDYxLTg1YWUtZjIzYjBjZDVhNWM0IiwidCI6IjFlZjg1NDQ4LTIwYzItNDQwYS04NzFkLTRmM2RlZjExMDQyZiIsImMiOjEwfQ%3D%3D" 
    frameborder="0" 
    allowFullScreen="true">
    </iframe>
  </div>
  <div>
    <CFooter/>
  </div>
</template>

<script>
import CFooter from '../../components/isp/CFooter.vue'

export default {
  name: 'WorkOne',
  components: {
    CFooter
  },
  data() {
    return {
    }
  }
}
</script>

<style scoped>
.section-title {
  display: flex;
  align-items: center;
  margin-bottom: 20px; /* 標題區塊的底部間距 */
  align-items: stretch;
  margin: 20px;
}

.title-box {
  width: 15px;
  height: 40px;
  background-color: black;
  border-radius: 5px;
  margin-right: 10px; /* 讓標題與長方形之間有間距 */
}

.iframe-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
}

.iframe-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

@media (max-width: 768px) {
  .section-title {
    flex-direction: column;
    align-items: flex-start;
  }

  .title-box {
    margin-bottom: 10px;
  }
}
</style>