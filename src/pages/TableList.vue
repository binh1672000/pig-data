<template>
<div class="content">
    <div class="md-layout-item">
        <md-card>
            <md-card-header data-background-color="green">
                <h4 class="title">Show CFI missing row</h4>
            </md-card-header>
            <md-card-content>
                <button @click="NextImg">Next CFI</button>
                <div class="img-box">
                    <transition>
                        <img v-show="isLoadCFI" :src="url" @load="loaded" height="20%">
                    </transition>
                </div>
            </md-card-content>
        </md-card>
        <md-card>
            <md-card-header data-background-color="green">
                <h4 class="title">Show DFI missing row</h4>
            </md-card-header>
            <md-card-content>
                <button @click="NextImg">Next DFI</button>
                <div class="img-box">
                    <transition>
                        <img v-show="isLoadDFI" :src="link" @load="loaded" height="20%">
                    </transition>
                </div>
            </md-card-content>
        </md-card>
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
                require("@/assets/img/Step1_graphs/Missing row/CFI/1.5773.ki=1.CFI_MA_esti.png"),
                require("@/assets/img/Step1_graphs/Missing row/CFI/15.5252.ki=1.CFI_MA_esti.png"),
                require("@/assets/img/Step1_graphs/Missing row/CFI/44.5450.ki=1.CFI_MA_esti.png"),
                require("@/assets/img/Step1_graphs/Missing row/CFI/50.5468.ki=1.CFI_MA_esti.png"),
                require("@/assets/img/Step1_graphs/Missing row/CFI/64.5573.ki=1.CFI_MA_esti.png"),
                require("@/assets/img/Step1_graphs/Missing row/CFI/68.5628.ki=1.CFI_MA_esti.png"),
                require("@/assets/img/Step1_graphs/Missing row/CFI/70.5643.ki=1.CFI_MA_esti.png"),
                require("@/assets/img/Step1_graphs/Missing row/CFI/70.5643.ki=2.CFI_MA_esti.png"),
                require("@/assets/img/Step1_graphs/Missing row/CFI/73.5655.ki=1.CFI_MA_esti.png"),
                require("@/assets/img/Step1_graphs/Missing row/CFI/73.5655.ki=2.CFI_MA_esti.png"),
            ],
            link: "",
            images2: [
                require("@/assets/img/Step1_graphs/Missing row/DFI/1.5070.ki=1.DFI_MA_esti.png"),
                require("@/assets/img/Step1_graphs/Missing row/DFI/1.5773.ki=1.DFI_MA_esti.png"),
                require("@/assets/img/Step1_graphs/Missing row/DFI/15.5252.ki=1.DFI_MA_esti.png"),
                require("@/assets/img/Step1_graphs/Missing row/DFI/44.5450.ki=1.DFI_MA_esti.png"),
                require("@/assets/img/Step1_graphs/Missing row/DFI/50.5468.ki=1.DFI_MA_esti.png"),
                require("@/assets/img/Step1_graphs/Missing row/DFI/64.5573.ki=1.DFI_MA_esti.png"),
                require("@/assets/img/Step1_graphs/Missing row/DFI/68.5628.ki=1.DFI_MA_esti.png"),
                require("@/assets/img/Step1_graphs/Missing row/DFI/70.5643.ki=1.DFI_MA_esti.png"),
                require("@/assets/img/Step1_graphs/Missing row/DFI/70.5643.ki=2.DFI_MA_esti.png"),
                require("@/assets/img/Step1_graphs/Missing row/DFI/73.5655.ki=1.DFI_MA_esti.png"),
                require("@/assets/img/Step1_graphs/Missing row/DFI/73.5655.ki=2.DFI_MA_esti.png"),
            ],
            index: 0,
            isLoadCFI: false,
        };
    },
    created() {
        this.NextImg();
    },
    mounted() {
        this.loadImages();
    },
    methods: {
        NextImg() {
            this.isLoadCFI = false
            this.isLoadDFI = false
            this.$nextTick(() => {
                this.url = this.images[this.index];
                this.link = this.images2[this.index];
                this.index = (this.index < this.images.length - 1) ? this.index + 1 : 0
            })
        },
        loaded() {
            this.isLoadCFI = true
            this.isLoadDFI = true
        }
    },
};
</script>
