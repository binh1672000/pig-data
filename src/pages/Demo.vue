<template>
<div class="content">
    <div class="md-layout">
        <div class="md-layout-item">
            <md-card>

                <md-card-content>

                    <vueper-slides ref="vueperslides1" :touchable="false" fade :autoplay="false" :bullets="false" @slide="$refs.vueperslides2.goToSlide($event.currentSlide.index, { emit: false })" fixed-height="780px" >
                        <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.image">
                        </vueper-slide>
                    </vueper-slides>

                    <vueper-slides class="no-shadow thumbnails" ref="vueperslides2" @slide="$refs.vueperslides1.goToSlide($event.currentSlide.index, { emit: false })" :visible-slides="slides.length" fixed-height="75px" :bullets="false" :touchable="false" :gap="2.5" :arrows="false">
                        <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.image" @click.native="$refs.vueperslides2.goToSlide(i)">
                        </vueper-slide>
                    </vueper-slides>
                </md-card-content>
            </md-card>
        </div>
    </div>
</div>
</template>

<script>

import {
    VueperSlides,
    VueperSlide
} from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
export default {
    components: {
        VueperSlides,
        VueperSlide
    },
    data() {
        return {
            slides: [{
                    image: require("@/assets/img/hinhanh/1 (1).png"),
                },
                {
                    image: require("@/assets/img/hinhanh/1 (3).png"),
                },
                {
                    image: require("@/assets/img/hinhanh/1 (3).png"),
                }
            ]
        };

    },

};
</script>

<style>
image {
    height: 20px;
}

.thumbnails {
    margin: auto;
    max-width: 300px;
}

.thumbnails .vueperslide {
    box-sizing: border-box;
    border: 1px solid #fff;
    transition: 0.3s ease-in-out;
    opacity: 0.7;
    cursor: pointer;
}

.thumbnails .vueperslide--active {
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
    opacity: 1;
    border-color: #000;
}
</style>
