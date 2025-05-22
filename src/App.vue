<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import EmptyLayout from '@/layouts/EmptyLayout.vue'

export default {
  computed: {
    layout() {
      const type = this.$route.meta.layout
      return type === 'none' ? EmptyLayout : DefaultLayout
    }
  }
}
</script>