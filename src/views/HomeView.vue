<template>
    <div>
        <Carousel title-color="text-slate-50" :slide-data="carouselData"/>
        <info-section></info-section>
    </div>
</template>
<script>
import Carousel from '../components/widgets/Carousel.vue'
import InfoSection from '../components/widgets/InfoSection.vue'

export default {
    components: {
        Carousel,
        InfoSection
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
                    url: 'https://images.pexels.com/photos/2577659/pexels-photo-2577659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    title: 'Csipeszhal'
                }, 
                {
                    url: 'https://images.pexels.com/photos/262416/pexels-photo-262416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    title: 'Magnificient Coral',
                    subText: 'What Exactly Is Coral?'
                }
            ]
        }
    }
}
</script>