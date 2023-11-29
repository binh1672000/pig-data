<template>
<div class="content">
    <div class="md-layout">
        <div class="md-layout-item">
            <md-card>
                <md-card-header data-background-color="green">
                    <h4 class="title">Show final praghs</h4>

                </md-card-header>
                <md-card-content>
                    <button @click="NextImg">Next image</button>
                   
                    <ul>
                        <li>{{url}}</li>
                        <li>{{images[index]}}</li>
                        <li>{{isLoadCFI}}</li>
                    </ul>
                    <div class="img-box">
                        <transition>
                            <img v-show="isLoadCFI" :src="url" @load="loaded">
                        </transition>
                        <div v-show="!isLoadCFI" class="loading">Loading...</div>
                    </div>
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
            url: "",
            images: [
                require("@/assets/img/Step2_graphs/Final_graphs/1.5070.png"),
                require("@/assets/img/Step2_graphs/Final_graphs/2.5071.png"),
                require("@/assets/img/Step2_graphs/Final_graphs/3.5072.png"),
                require("@/assets/img/Step2_graphs/Final_graphs/4.5073.png"),
                require("@/assets/img/Step2_graphs/Final_graphs/5.5144.png"),
                require("@/assets/img/Step2_graphs/Final_graphs/6.5146.png"),
            ],
            index: 0,
            isLoadCFI: false,
        };
    },
    created() {
        this.NextImg();
        this.preImg();
    },
    mounted() {
        this.loadImages();
    },
    methods: {
        NextImg() {
            this.isLoadCFI = false
            this.$nextTick(() => {
                this.url = this.images[this.index];
                this.index = (this.index < this.images.length - 1) ? this.index + 1 : 0
            })
        },
       
        loaded() {
            this.isLoadCFI = true
        }
    },
};
</script>

