<template>
    <div class="content">
    
        <div class="md-layout-item">
            <vueper-slides fixed-height="750px"> 
                <vueper-slide v-for="(slide, i) in slides" :key="i" :title="slide.title" :image="slide.image" >
                </vueper-slide>
            </vueper-slides>
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
    
        data: () => ({
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
        })
    };
    </script>
    
    <style>
    
    </style>
    