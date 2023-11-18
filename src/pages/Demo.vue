<template>
<div class="content">
    <div class="md-layout">
        <div class="md-layout-item">
            <md-card>

                <md-card-content>
                    <button @click="NextImg">next image</button>
                    <ul>
                        <li>{{url}}</li>
                        <li>{{images[index]}}</li>
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
                require("@/assets/img/Step1_graphs/Missing row/CFI/1.5070.ki=1.CFI_MA_esti.png"),
                require("@/assets/img/Step1_graphs/Missing row/CFI/15.5252.ki=1.CFI_MA_esti.png"),
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

