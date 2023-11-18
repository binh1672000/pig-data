<template>
<div class="content">
    <div class="md-layout">
        <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25">
            <stats-card data-background-color="green">
                <template slot="header">
                    <a href="#/data">
                        <md-icon>store</md-icon>
                    </a>
                </template>

                <template slot="content">
                    <p class="category">Tổng SỐ CON</p>
                    <h3 class="title">20</h3>
                </template>
                <template slot="footer">
                    <div class="stats">
                        <md-icon>date_range</md-icon>
                        Cập nhật ngày 2/11/2023
                    </div>
                </template>

            </stats-card>

        </div>
        <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25">
            <stats-card data-background-color="red">
                <template slot="header">
                    <a href="#/data">
                    <md-icon>info_outline</md-icon>
                </a>
                </template>

                <template slot="content">
                    <p class="category">CON BỊ BỆNH</p>
                    <h3 class="title">5 </h3>
                </template>

                <template slot="footer">
                    <div class="stats">
                        <md-icon class="text-danger">warning</md-icon>
                        <a href="#pablo">Cần được chăm sóc</a>

                    </div>
                </template>
            </stats-card>
        </div>
        <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25">
            <stats-card data-background-color="orange">
                <template slot="header">
                    <a href="#/data">
                    <md-icon>content_copy</md-icon></a>
                </template>

                <template slot="content">
                    <p class="category">CON KHỎE MẠNH</p>
                    <h3 class="title">15
                    </h3>
                </template>

                <template slot="footer">
                    <div class="stats">
                        <md-icon>date_range</md-icon>
                        Cập nhật ngày 2/11/2023
                    </div>
                </template>
            </stats-card>
        </div>
        <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25">
            <stats-card data-background-color="orange">
                <template slot="header">
                    <a href="#/table">
                    <md-icon>content_copy</md-icon></a>
                </template>

                <template slot="content">
                    <p class="category">MISS DATA</p>
                    <h3 class="title">data bi mat
                    </h3>
                </template>

                <template slot="footer">
                    <div class="stats">
                        <md-icon>date_range</md-icon>
                        Cập nhật ngày 2/11/2023
                    </div>
                </template>
            </stats-card>
        </div>
    </div>
</div>
</template>

<script>
import {
    StatsCard,
} from "@/components";

export default {
    components: {
        StatsCard,
    },
    data() {
        return {

        };
    },

};
</script>

