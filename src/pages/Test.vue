<template>
<div class="content">
    <div class="md-layout">
        <div class="md-layout-item">
            <md-card>
                <md-card-header data-background-color="green">
                    <h4 class="title">Show Image</h4>

                </md-card-header>
                <md-card-content>
                    <div class="md-layout">
                        <div class="md-layout-item md-medium-size-100">
                            <p>
                                <img :src="imgLogo" alt="" />
                            </p>
                        </div>
                        
                    </div>
                    <simple-table table-header-color="green">
                                <vueper-slides>
                                    <vueper-slide v-for="(slide, i) in slides" :key="i" :title="slide.title" :image="slide.image">
                                    </vueper-slide>
                                </vueper-slides>
                     </simple-table>
                </md-card-content>
            </md-card>
        </div>
    </div>
</div>
</template>

<script>
import {
    SimpleTable
} from "@/components";
import {
    VueperSlides,
    VueperSlide
} from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
export default {
    components: {

        SimpleTable,
        VueperSlides,
        VueperSlide
    },
    data() {
        return {
            imgLogo: require("@/assets/img/hinhanh/1 (1).png"),

            slides: [{
                    title: 'Ngay 1',
                    image: require("@/assets/img/hinhanh/1 (1).png"),
                },
                {
                    title: 'Ngay 2',
                    image: require("@/assets/img/hinhanh/1 (2).png"),
                },
                {
                    title: 'Ngay 3',
                    image: require("@/assets/img/hinhanh/1 (3).png"),
                }
            ]
        };

    },

};
</script>
<style>
image{
    height: 20px;
}

</style>
