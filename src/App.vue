<template>
  <!--<div class="bg-gradient-to-bl from-indigo-900 to-blue-800 h-screen"> -->
  <div class="">
    <navbar-header></navbar-header>
    <router-view></router-view>
  </div>
</template>
<script>
import NavbarHeader from './components/header/NavbarHeader.vue'

export default {
  components: {
    NavbarHeader
  },
  data() {
    return {}
  }
}
</script>
<style>
body  {
  background-color: #2c3e50;
}
</style>