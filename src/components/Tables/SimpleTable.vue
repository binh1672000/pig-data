<template>
    <div>
      <md-table v-model="users" :table-header-color="tableHeaderColor">
        <md-table-row slot="md-table-row" slot-scope="{ item }">
          <md-table-cell md-label="ID">{{ item.ID }}</md-table-cell>
          <md-table-cell md-label="CFI">{{ item.ID }}.MA_esti_overal</md-table-cell>
          <md-table-cell md-label="Final_graphs">{{ item.ID }}</md-table-cell>
          <md-table-cell md-label="Difference between CFI and TTC">{{ item.ID }}</md-table-cell>
        </md-table-row>
      </md-table>
    </div>
  </template>
  
  <script>
  export default {
    name: "simple-table",
    props: {
      tableHeaderColor: {
        type: String,
        default: "",
      },
    },
    data() {
      return {
        selected: [],
        users: [
          {
            ID: "5070",
          },
          {
            ID: "5071",
          },
          {
            ID: "5072",
          },
          {
            ID: "5073",
          },
          {
            ID: "5144",
          },
          {
            ID: "5146",
          },
        
        ],
      };
    },
  };
  </script>