<template>
<div class="content">
    <div class="md-layout">
        <p class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
            <md-card>
                <md-card-header data-background-color="orange">
                    <h4 class="title">Miss Data</h4>
                    
                </md-card-header>
                <md-card-content>
                    <simple-table table-header-color="orange">
                        <vueper-slides>
                            <vueper-slide v-for="(slide, i) in slides" :key="i" :title="slide.title" :content="slide.content">
                            </vueper-slide>
                        </vueper-slides>
                    </simple-table>
                </md-card-content>
               
            </md-card>
        </p>

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
    data: () => ({
        slides: [{
                title: 'Slide #1',
                content: 'Slide 1 content.'
            },
            {
                title: 'Slide #2',
                content: 'Slide 2 content.'
            },
            {
                title: 'Slide #3',
                content: 'Slide 3 content.'
            },
            {
                title: 'Slide #4',
                content: 'Slide 4 content.'
            },
            {
                title: 'Slide #5',
                content: 'Slide 5 content.'
            },
            {
                title: 'Slide #6',
                content: 'Slide 6 content.'
            },
            {
                title: 'Slide #1',
                content: 'Slide 1 content.'
            }, {
                title: 'Slide #1',
                content: 'Slide 1 content.'
            },
            {
                title: 'Slide #1',
                content: 'Slide 1 content.'
            },
            {
                title: 'Slide #1',
                content: 'Slide 1 content.'
            }, {
                title: 'Slide #1',
                content: 'Slide 1 content.'
            },

        ]
    })
};
</script>



