<template>
  <div class="default-layout">
    <CNavbar />

    <div class="main-body">
      <div class="sidebar">
        <CSidebar />
      </div>
      <div class="content">
        <slot />
      </div>
    </div>
    <footer>
      <CFooter />
    </footer>
  </div>
</template>

<script>
import CNavbar from '@/components/isp/CNavbar.vue'
import CSidebar from '@/components/isp/CSidebar.vue'
import CFooter from '@/components/isp/CFooter.vue'

export default {
  name: 'DefaultLayout',
  components: {
    CNavbar,
    CSidebar,
    CFooter
  }
}
</script>

<style scoped>
.default-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-body {
  display: flex;
  flex-direction: row;
  flex: 1;
  min-height: calc(100vh - 60px); /* 預留 header 高度 */
  overflow: hidden;
}

.sidebar {
  width: 220px;
  flex-shrink: 0;
  background-color: #f8f9fa;
  padding: 1rem;
  overflow-y: auto;
}

/* 手機版 Sidebar 跑到上面 */
@media (max-width: 768px) {
  .main-body {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
  }

  .content {
    flex: none;
    padding: 1rem;
    min-height: auto;
  }
}

.content {
  flex: 1;
  padding: 1.5rem;
  overflow-y: auto;
  min-height: 0;
}
</style>
