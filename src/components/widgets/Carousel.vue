<template>
    <div v-show="isVisible" class="custom-carousel h-[720px] w-full m-auto px-4 relative">
        <div :style="{'background-image': `url(${slideData[currentIndex].url})`}"
            :class="{'animate-fade': animateOnChange}"
            class="w-full h-full rounded-2xl bg-center bg-cover duration-1000 flex flex-col justify-center items-center">
            <h1 :class="[titleColor, {'animate-fade-left animate-once animate-duration-[1500ms] animate-delay-500': animateOnChange}]" class=" text-sm-crs-title md:crs-title mb-5">{{ slideData[currentIndex].title }}</h1>
            <p :class="[subTextColor, {'animate-fade-left animate-once animate-duration-[1500ms] animate-delay-1000': animateOnChange}]" class="text-sm-crs-subtext w-2/3 md:w-3/6 md:text-3xl text-center">{{ slideData[currentIndex].subText }}</p>
        </div>
        <font-awesome-icon :icon="['fas', 'chevron-left']"  @click="pageDown" class="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 md:left-10 text-3xl rounded-full p-2 text-white cursor-pointer"/>
        <font-awesome-icon :icon="['fas', 'chevron-right']" @click="pageUp" class="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 md:right-10 text-3xl rounded-full p-2 text-white cursor-pointer"/>
        <div class="flex justify-center mt-3">
            <font-awesome-icon :icon="currentIndex === index ? 'fa-solid fa-circle' : 'fa-regular fa-circle'" class="mx-2 w-3 h-3 text-slate-50" v-for="(slide, index) of slideData" :key="index"/>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        titleColor: {
            type: String,
            default: 'text-slate-50',
            required: false
        },
        subTextColor: {
            type: String,
            default: 'text-slate-50',
            required: false
        },
        slideData: {
            type: Array,
            default: [],
            required: true,
            validator(value) {
                if(value && Array.isArray(value)) {
                    for(const item of value) {
                        if(item.hasOwnProperty('url')) {
                            return true
                        }
                    }
                }

                return false
            }
        }
    },
    data() {
        return {
            slides: [
                'https://images.pexels.com/photos/1125979/pexels-photo-1125979.jpeg',
                'https://images.pexels.com/photos/3561924/pexels-photo-3561924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                'https://images.pexels.com/photos/3113229/pexels-photo-3113229.jpeg'
            ],
            currentIndex: 0,
            isVisible: true,
            animateOnChange: false,
            titleAnimation: {
                duration: 1500,
                delay: 500
            },
            subTextAnimation: {
                duration: 1500,
                delay: 1000
            }
            // intervalId: null TODO: megcsinálni, hogy click slidekor újrainduljon
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll)

        // this.intervalId = setInterval(() => this.pageUp(), 10000) TODO: megcsinálni, hogy click slidekor újrainduljon
    },
    methods: {
        pageUp: function() {
            if (this.animateOnChange) {
                return
            }

            const nextIndex = this.currentIndex === this.slideData.length - 1 ? 0 : this.currentIndex + 1
            this.currentIndex = nextIndex
            this.animateOnChange = true

            setTimeout(() => {
                this.animateOnChange = false
            }, this.maxAnimationDuration)
        },
        pageDown: function() {
            if (this.animateOnChange) {
                return
            }

            const previousIndex = this.currentIndex === 0 ? this.slideData.length - 1 : this.currentIndex - 1
            this.currentIndex = previousIndex
            this.animateOnChange = true

            setTimeout(() => {
                this.animateOnChange = false
            }, this.maxAnimationDuration)
        },
        handleScroll: function() {
            const scrollElement = document.querySelector(".custom-carousel")
            const boundingBox = scrollElement.getBoundingClientRect()

            if (boundingBox.top < window.innerHeight && boundingBox.bottom >= 0) {
                this.isVisible = true
            } else {
                this.isVisible = false
            }
        }
    },
    computed: {
        maxAnimationDuration: function() {
            const titleSumDuration = this.titleAnimation.duration + this.titleAnimation.delay
            const subTextSumDuration = this.subTextAnimation.duration + this.subTextAnimation.delay
            return titleSumDuration > subTextSumDuration ? titleSumDuration : subTextSumDuration
        }
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll)
        // clearInterval(this.intervalId) TODO: megcsinálni, hogy click slidekor újrainduljon
    }
}
</script>