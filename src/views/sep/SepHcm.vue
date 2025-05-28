<template>
  <div class="powerbi-wrapper">
    <iframe
      :src="powerBIUrl"
      frameborder="0"
      allowFullScreen="true"
      class="powerbi-iframe"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: 'SepHcm',
  data() {
    return {
      powerBIUrl:
        'https://app.powerbi.com/view?r=eyJrIjoiZTFjMzc1YTUtOWEwZS00YjM1LTk0OTUtM2I2YzY4YmEwZThhIiwidCI6IjFlZjg1NDQ4LTIwYzItNDQwYS04NzFkLTRmM2RlZjExMDQyZiIsImMiOjEwfQ%3D%3D'
    };
  }
};
</script>

<style scoped>
.powerbi-wrapper {
  width: 100%;
  height: 100%;
  padding: 1rem;
  box-sizing: border-box;
}

.powerbi-iframe {
  width: 100%;
  height: 85vh;
  border: none;
  border-radius: 8px;
}
</style>
