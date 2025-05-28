<!-- src/sep/SepTax.vue -->
<template>
  <div class="powerbi-wrapper">
    <iframe
      width="100%"
      height="1000"
      :src="reportUrl"
      frameborder="0"
      allowFullScreen="true"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: 'SepTax',
  data() {
    return {
      reportUrl:
        'https://app.powerbi.com/view?r=eyJrIjoiZGY5M2VkYmYtOGFiZC00ZGQxLTk4ZjgtMTczYmE2NmM5NWNjIiwidCI6IjFlZjg1NDQ4LTIwYzItNDQwYS04NzFkLTRmM2RlZjExMDQyZiIsImMiOjEwfQ%3D%3D'
    }
  }
}
</script>

<style scoped>
.powerbi-wrapper {
  width: 100%;
  height: 100%;
}
</style>
