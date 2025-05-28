<template>
  <div class="iframe-container">
    <iframe title="demo"
      src="https://app.powerbi.com/view?r=eyJrIjoiMTRiOGUxMTUtMTcxZS00YmI5LWE0M2ItODgwMjg4YWZjYmZmIiwidCI6IjFlZjg1NDQ4LTIwYzItNDQwYS04NzFkLTRmM2RlZjExMDQyZiIsImMiOjEwfQ%3D%3D"
      frameborder="0" allowFullScreen="true"></iframe>
  </div>
</template>

<script>
export default {
  name: 'PartHome',
  components: {
  },
  data() {
    return {
    }
  }
}
</script>

<style scoped>
.iframe-container {
  position: relative;
  width: 100%;
  margin: 1.25rem; /* 20px */
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
</style>
