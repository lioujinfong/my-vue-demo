<!-- layouts/DefaultLayout.vue -->
<template>
  <div>
    <CNavbar class="mb-3" />
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-md-3 col-lg-2">
          <CSidebar />
        </div>
        <div class="col-12 col-md-9 col-lg-10">
          <slot /> <!-- 重點！ -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CNavbar from '@/components/isp/CNavbar.vue'
import CSidebar from '@/components/isp/CSidebar.vue'

export default {
  name: 'DefaultLayout',
  components: {
    CNavbar,
    CSidebar
  }
}
</script>


