<template>
  <CNavbar class="mb-3" />
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-md-3 col-lg-2">
        <CSidebar/>
      </div>
      <div class="col-12 col-md-9 col-lg-10">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import CNavbar from './components/CNavbar.vue'
import CSidebar from './components/CSidebar.vue'

export default {
  name: 'App',
  components: {
    CNavbar,
    CSidebar,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #EFEFEF;
}
</style>