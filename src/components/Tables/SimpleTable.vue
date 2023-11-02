<template>
    <div>
      <md-table v-model="users" :table-header-color="tableHeaderColor">
        <md-table-row slot="md-table-row" slot-scope="{ item }">
          <md-table-cell md-label="ID">{{ item.ID }}</md-table-cell>
          <md-table-cell md-label="Data">{{ item.data }}</md-table-cell>
          <md-table-cell md-label="DFI">{{ item.dfi }}</md-table-cell>
          <md-table-cell md-label="CFI">{{ item.cfi }}</md-table-cell>
          <md-table-cell md-label="Excel">{{ item.excel }}</md-table-cell>
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
            ID: "1",
            data: "60.8kg",
            dfi: "@/",
            cfi: "image",
            excel:"",
          },
          {
            ID: "2",
          },
        
        ],
      };
    },
  };
  </script>