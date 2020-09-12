<template>
  <div id="app">
    <!-- <my-table></my-table> -->
    <data-table></data-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MyTable from "@/components/MyTable.vue";
import DataTable from "@/components/DataTable.vue";

@Component({
  components: {
    MyTable,
    DataTable,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  .vxe-table.border--default .vxe-table--header-wrapper,
  .vxe-table.border--full .vxe-table--header-wrapper,
  .vxe-table.border--outer .vxe-table--header-wrapper {
    background-color: #eff2f7;
  }

  .vxe-table .vxe-body--row.row--stripe {
    background-color: #f9fafc;
  }

  .vxe-table.border--full .vxe-body--column,
  .vxe-table.border--full .vxe-footer--column,
  .vxe-table.border--full .vxe-header--column {
    background-image: linear-gradient(#e0e6ed, #e0e6ed),
      linear-gradient(#e0e6ed, #e0e6ed);
  }

  .vxe-table.size--medium .vxe-footer--column,
  .vxe-table.size--medium .vxe-header--column {
    height: 39px !important;
  }

  .vxe-table {
    td[rowspan] {
      background-color: #FFF;
    }
  }
}
</style>
