<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import EmptyLayout from '@/layouts/EmptyLayout.vue'
import SepLayout from '@/layouts/SepLayout.vue' 

export default {
  computed: {
    layout() {
      const type = this.$route.meta.layout
      if (type === 'none') return EmptyLayout
      if (type === 'sep') return SepLayout       
      return DefaultLayout
    }
  }
}
</script>
