<template>
    <div class="content">
        <div class="md-layout">
            <div class="md-layout-item">
                <md-card>
    
                    <md-card-content>
                        <button @click="toggleImage">Show Image</button>
                        <img v-if="showImage" :src="imageSrc" alt="Image" />
                    </md-card-content>
                </md-card>
            </div>
        </div>
    </div>
    </template>
    
    <script>
    export default {
        data() {
            return {
                showImage: false,
                imageSrc: require("@/assets/img/hinhanh/1 (1).png"),
            };
        },
        methods: {
            toggleImage() {
                this.showImage = !this.showImage;
            }
        }
    
    };
    </script>
    