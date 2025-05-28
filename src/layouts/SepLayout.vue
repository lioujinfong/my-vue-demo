<template>
  <div class="sep-layout">
    <SepHeader />
    <div class="main-body">
      <div class="sidebar">
        <SepSidebar />
      </div>
      <div class="content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import SepHeader from '@/components/sep/SepHeader.vue'
import SepSidebar from '@/components/sep/SepSidebar.vue'

export default {
  components: { SepSidebar, SepHeader },
  name: 'SepLayout'
}
</script>

<style scoped>
.sep-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-body {
  display: flex;
  flex: 1;
}

.sidebar {
  width: 220px;
  background-color: #f5f5f5;
  padding: 1rem;
}

.content {
  flex: 1;
  padding: 1.5rem;
  background-color: #fff;
}
</style>
