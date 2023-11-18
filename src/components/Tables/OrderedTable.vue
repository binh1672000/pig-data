<template>
<div>
    <md-table v-model="users" :table-header-color="tableHeaderColor">
        <md-table-row slot="md-table-row" slot-scope="{ item }">
            <md-table-cell md-label="ID">{{ item.ID }}</md-table-cell>
            <md-table-cell md-label="Missing row ">{{ item.missrow }}</md-table-cell>
            <md-table-cell md-label="Missing CFI ">{{ item.missrow }}.{{ item.ID }}.ki={{ item.missrow }}.CFI_MA_esti</md-table-cell>
            <md-table-cell md-label="Missing DFI ">{{ item.missrow }}.{{ item.ID }}.ki={{ item.missrow }}.DFI_MA_esti</md-table-cell>
        </md-table-row>
    </md-table>
</div>
</template>

<script>
export default {
    ID: "ordered-table",
    props: {
        tableHeaderColor: {
            type: String,
            default: "",
        },
    },
    data() {
        return {
            selected: [],
            users: [{
                    ID: "5070",
                    missrow: "1",
                },
                {
                    ID: "5773",
                    missrow: "1",
                },
                {
                    ID: "5252",
                    missrow: "15",
                },
                {
                    ID: "5450",
                    missrow: "44",
                },
                {
                    ID: "5468",
                    missrow: "50",
                },
                {
                    ID: "5573",
                    missrow: "64",
                },
                {
                    ID: "5628",
                    missrow: "68",
                },
                {
                    ID: "5643",
                    missrow: "70",
                },
                {
                    ID: "5655",
                    missrow: "73",
                },
            ],
        };
    },
};
</script>
