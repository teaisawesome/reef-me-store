<template>
  <!--<div class="bg-gradient-to-bl from-indigo-900 to-blue-800 h-screen"> -->
  <div class="bg-main-img h-screen bg-cover">
    <navbar-header></navbar-header>
    <router-view></router-view>
  </div>
  <carousel></carousel>
</template>
<script>
import NavbarHeader from './components/header/NavbarHeader.vue'
import Carousel from './components/widgets/Carousel.vue'

export default {
  components: {
    NavbarHeader,
    Carousel
  }
}
</script>
<style>
body  {
  background-color: #2c3e50;
}
</style>