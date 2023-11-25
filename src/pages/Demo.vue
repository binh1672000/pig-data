<template>
<div class="content">
    <div class="md-layout-item">
        <md-card>
            <md-card-header data-background-color="green">
                <h4 class="title">Show Legend</h4>
            </md-card-header>
            <md-card-content>
                <button @click="NextImg">Next Legend</button>
                <div class="img-box">
                    <transition>
                        <img v-show="isLoadCFI" :src="url" @load="loaded" height="20%">
                    </transition>
                </div>
            </md-card-content>
        </md-card>
        <md-card>
            <md-card-header data-background-color="green">
                <h4 class="title">Show Pertubation Model</h4>
            </md-card-header>
            <md-card-content>
                <button @click="NextImg">Next Pertubation Model</button>
                <div class="img-box">
                    <transition>
                        <img v-show="isLoadDFI" :src="url2" @load="loaded" height="20%">
                    </transition>
                </div>
            </md-card-content>
        </md-card>
        <md-card>
            <md-card-header data-background-color="green">
                <h4 class="title">Show Ratio DFI</h4>
            </md-card-header>
            <md-card-content>
                <button @click="NextImg">Next Ratio DFI</button>
                <div class="img-box">
                    <transition>
                        <img v-show="isLoadDFI" :src="url3" @load="loaded" height="20%">
                    </transition>
                </div>
            </md-card-content>
        </md-card>
        <md-card>
            <md-card-header data-background-color="green">
                <h4 class="title">Show Simulation CFI</h4>
            </md-card-header>
            <md-card-content>
                <button @click="NextImg">Next Simulation CFI</button>
                <div class="img-box">
                    <transition>
                        <img v-show="isLoadDFI" :src="url4" @load="loaded" height="20%">
                    </transition>
                </div>
            </md-card-content>
        </md-card>
        <md-card>
            <md-card-header data-background-color="green">
                <h4 class="title">Show Simulation DFI</h4>
            </md-card-header>
            <md-card-content>
                <button @click="NextImg">Next Simulation DFI</button>
                <div class="img-box">
                    <transition>
                        <img v-show="isLoadDFI" :src="url5" @load="loaded" height="20%">
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
                require("@/assets/img/Step4_graphs/Legend/5070.LegendP1.png"),
                require("@/assets/img/Step4_graphs/Legend/5070.LegendP2.png"),
                require("@/assets/img/Step4_graphs/Legend/5071.LegendP1.png"),
                require("@/assets/img/Step4_graphs/Legend/5072.LegendP1.png"),
                require("@/assets/img/Step4_graphs/Legend/5073.LegendP1.png"),
                require("@/assets/img/Step4_graphs/Legend/5073.LegendP2.png"),
                require("@/assets/img/Step4_graphs/Legend/5144.LegendP1.png"),
                require("@/assets/img/Step4_graphs/Legend/5144.LegendP2.png"),
                require("@/assets/img/Step4_graphs/Legend/5146.LegendP1.png"),
                require("@/assets/img/Step4_graphs/Legend/5147.LegendP1.png"),
                require("@/assets/img/Step4_graphs/Legend/5147.LegendP2.png"),
            ],
            url2: "",
            images2: [
                require("@/assets/img/Step4_graphs/Pertubation Model/5070.RatioP1.png"),
                require("@/assets/img/Step4_graphs/Pertubation Model/5070.RatioP2.png"),
                require("@/assets/img/Step4_graphs/Pertubation Model/5071.RatioP1.png"),
                require("@/assets/img/Step4_graphs/Pertubation Model/5072.RatioP1.png"),
                require("@/assets/img/Step4_graphs/Pertubation Model/5073.RatioP1.png"),
                require("@/assets/img/Step4_graphs/Pertubation Model/5073.RatioP2.png"),
                require("@/assets/img/Step4_graphs/Pertubation Model/5144.RatioP1.png"),
                require("@/assets/img/Step4_graphs/Pertubation Model/5144.RatioP2.png"),
                require("@/assets/img/Step4_graphs/Pertubation Model/5146.RatioP1.png"),
                require("@/assets/img/Step4_graphs/Pertubation Model/5147.RatioP1.png"),
                require("@/assets/img/Step4_graphs/Pertubation Model/5147.RatioP2.png"),
            ],
            url3: "",
            images3: [
                require("@/assets/img/Step4_graphs/Ratio DFI/5070.Ratio_DFIP1.png"),
                require("@/assets/img/Step4_graphs/Ratio DFI/5070.Ratio_DFIP2.png"),
                require("@/assets/img/Step4_graphs/Ratio DFI/5071.Ratio_DFIP1.png"),
                require("@/assets/img/Step4_graphs/Ratio DFI/5072.Ratio_DFIP1.png"),
                require("@/assets/img/Step4_graphs/Ratio DFI/5073.Ratio_DFIP1.png"),
                require("@/assets/img/Step4_graphs/Ratio DFI/5073.Ratio_DFIP2.png"),
                require("@/assets/img/Step4_graphs/Ratio DFI/5144.Ratio_DFIP1.png"),
                require("@/assets/img/Step4_graphs/Ratio DFI/5144.Ratio_DFIP2.png"),
                require("@/assets/img/Step4_graphs/Ratio DFI/5146.Ratio_DFIP1.png"),
                require("@/assets/img/Step4_graphs/Ratio DFI/5147.Ratio_DFIP1.png"),

            ],
            url4: "",
            images4: [
                require("@/assets/img/Step4_graphs/Simulation CFI/5070.Simu_CFIP2.png"),
                require("@/assets/img/Step4_graphs/Simulation CFI/5071.Simu_CFIP1.png"),
                require("@/assets/img/Step4_graphs/Simulation CFI/5072.Simu_CFIP1.png"),
                require("@/assets/img/Step4_graphs/Simulation CFI/5073.Simu_CFIP2.png"),
                require("@/assets/img/Step4_graphs/Simulation CFI/5144.Simu_CFIP2.png"),
                require("@/assets/img/Step4_graphs/Simulation CFI/5146.Simu_CFIP1.png"),
            ],
            url5: "",
            images5: [
                require("@/assets/img/Step4_graphs/Simulation DFI/5070.Simu_DFIP2.png"),
                require("@/assets/img/Step4_graphs/Simulation DFI/5071.Simu_DFIP1.png"),
                require("@/assets/img/Step4_graphs/Simulation DFI/5072.Simu_DFIP1.png"),
                require("@/assets/img/Step4_graphs/Simulation DFI/5073.Simu_DFIP2.png"),
                require("@/assets/img/Step4_graphs/Simulation DFI/5144.Simu_DFIP2.png"),
                require("@/assets/img/Step4_graphs/Simulation DFI/5146.Simu_DFIP1.png"),
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
                this.url2 = this.images2[this.index];
                this.url3 = this.images3[this.index];
                this.url4 = this.images4[this.index];
                this.url5 = this.images5[this.index];
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
