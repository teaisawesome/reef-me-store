<template>
  <!--<div class="bg-gradient-to-bl from-indigo-900 to-blue-800 h-screen"> -->
  <div class="bg-main-img h-screen bg-cover">
    <navbar-header></navbar-header>
    <router-view></router-view>
  </div>
  <carousel title-color="text-slate-50" :slide-data="carouselData"></carousel>
</template>
<script>
import NavbarHeader from './components/header/NavbarHeader.vue'
import Carousel from './components/widgets/Carousel.vue'

export default {
  components: {
    NavbarHeader,
    Carousel
  },
  data() {
    return {
      carouselData: [
        {
          url: 'https://images.pexels.com/photos/1125979/pexels-photo-1125979.jpeg',
          title: 'Bohóc halak',
          subText: 'A bohóchalak testhossza fajonként eltérő, és 4,8-17 centiméter között változik.'
        },
        {
          url: 'https://images.pexels.com/photos/3113229/pexels-photo-3113229.jpeg',
          title: 'Kőhal'
        }, 
        {
          url: 'https://images.pexels.com/photos/3204595/pexels-photo-3204595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          title: 'Magnificient Coral',
          subText: 'What Exactly Is Coral?'
        }
      ]
    }
  }
}
</script>
<style>
body  {
  background-color: #2c3e50;
}
</style>