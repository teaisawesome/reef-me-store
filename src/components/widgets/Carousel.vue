<template>
    <div class="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative bg-purple-400">
        <div :style="{'background-image': `url(${slides[currentIndex]})`}" 
            class="w-full h-full rounded-2xl bg-center bg-cover duration-500">
        </div>
        <font-awesome-icon :icon="['fas', 'chevron-left']"  @click="pageDown" class="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-3xl rounded-full p-2 text-white cursor-pointer"/>
        <font-awesome-icon :icon="['fas', 'chevron-right']" @click="pageUp" class="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-3xl rounded-full p-2 text-white cursor-pointer"/>
        <div class="flex justify-center mt-3">
            <font-awesome-icon :icon="currentIndex === index ? 'fa-solid fa-circle' : 'fa-regular fa-circle'" class="mx-2 w-3 h-3 text-slate-50" v-for="(slide, index) of slides" :key="index"/>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            slides: [
                'https://images.pexels.com/photos/1125979/pexels-photo-1125979.jpeg',
                'https://images.pexels.com/photos/3561924/pexels-photo-3561924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                'https://images.pexels.com/photos/3113229/pexels-photo-3113229.jpeg'
            ],
            currentIndex: 0
        }
    },
    methods: {
        pageUp: function() {
            const nextIndex = this.currentIndex === this.slides.length - 1 ? 0 : this.currentIndex + 1
            this.currentIndex = nextIndex
        },
        pageDown: function() {
            const previousIndex = this.currentIndex === 0 ? this.slides.length - 1 : this.currentIndex - 1
            this.currentIndex = previousIndex
        }
    }
}
</script>