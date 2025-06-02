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
    <!-- Footer -->
    <CFooter />
  </div>
</template>

<script>
import SepHeader from '@/components/sep/SepHeader.vue'
import SepSidebar from '@/components/sep/SepSidebar.vue'
import CFooter from '@/components/isp/CFooter.vue'

export default {
  components: { SepSidebar, SepHeader,CFooter },
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
  flex-direction: row; 
  flex: 1;
  min-height: calc(100vh - 60px); 
  overflow: hidden;
}

.sidebar {
  width: 220px;
  flex-shrink: 0; 
  background-color: #f5f5f5;
  padding: 1rem;
  overflow-y: auto;
}

/* 手機上寬度改為 100% */
@media (max-width: 768px) {
  .sidebar {
    width: 100%;
  }
}

.content {
  flex: 1;
  padding: 1.5rem;
  overflow-y: auto;
  min-height: 0; 
}

@media (max-width: 768px) {
  .main-body {
    flex-direction: column; 
  }

  .content {
    padding: 1rem;
    min-height: auto;
    flex: none;
  }
}
</style>
