<template>
    <div>
        <Carousel title-color="text-slate-50" :slide-data="carouselData"/>
    </div>
</template>
<script>
import Carousel from '../components/widgets/Carousel.vue'

export default {
    components: {
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