<template>
<div class="content">

    <div class="md-layout-item">
        <md-card>
            <md-card-content>
                <button @click="NextImg">Next Image</button>
                <ul>
                    <li>{{url}}</li>
                    <li>{{index}}</li>
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
</template>

<script>
import {

} from "@/components";

export default {
    components: {

    },
    data() {
        return {
            url: "",
            images: [
                require("@/assets/img/Step1_graphs/Final/CFI/1.5070.MA_esti_overal.png"),
                require("@/assets/img/Step1_graphs/Final/CFI/2.5071.MA_esti_overal.png"),
                require("@/assets/img/Step1_graphs/Final/CFI/3.5072.MA_esti_overal.png"),
                require("@/assets/img/Step1_graphs/Final/CFI/4.5073.MA_esti_overal.png"),
                require("@/assets/img/Step1_graphs/Final/CFI/5.5144.MA_esti_overal.png"),
                require("@/assets/img/Step1_graphs/Final/CFI/6.5146.MA_esti_overal.png"),
                require("@/assets/img/Step1_graphs/Final/CFI/7.5147.MA_esti_overal.png"),
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
