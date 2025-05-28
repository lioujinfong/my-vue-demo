<template>
  <div>
    <CCarousel class="m-3"/>
  </div>
  <div class="mt-5">
    <CItem3 />
  </div>
  <div>
    <CFooter/>
  </div>
</template>

<script>
import CCarousel from '../../components/isp/CCarousel.vue'
import CCarousel2 from '../../components/isp/CCarousel2.vue'
import CItem2 from '../../components/isp/CItem2.vue'
import CItem3 from '../../components/isp/CItem3.vue'
import CFooter from '../../components/isp/CFooter.vue'

export default {
  name: 'PartOne',
  components: {
    CCarousel,
    CCarousel2,
    CItem2,
    CItem3,
    CFooter
  },
  data() {
    return {
    }
  }
}
</script>

<style scoped>

</style>
