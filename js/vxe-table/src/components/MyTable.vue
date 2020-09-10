<template>
  <div style="width: 100%;">
    <vxe-table
      ref="table"
      :data="tableData"
      size="medium"
      show-header-overflow
      stripe
      border
      :span-method="colspanMethod"
      max-height="1000px"
    >
      <vxe-table-column v-for="(prop, ix) in props" :key="prop.title + ix" v-bind="prop">
        <template v-if="prop.children && prop.children.length">
          <vxe-table-column
            v-for="(childProp, ix2) in prop.children"
            :key="childProp.title + ix2"
            v-bind="childProp"
          ></vxe-table-column>
        </template>
      </vxe-table-column>
    </vxe-table>
  </div>
</template>

<script lang="ts">
import { TableProp } from "@/typings";
import { ColumnCellRenderParams, Table } from "vxe-table";

const props: TableProp[] = [
  {
    title: "Info",
    align: "center",
    children: [
      {
        title: "Name",
        field: "name",
        sortable: true,
        width: "300px",
        fixed: "left",
      },
      {
        title: "Address",
        field: "address",
        width: "500px",
        sortable: true,
      },
    ],
  },
  {
    title: "Sex",
    field: "sex",
    width: "200px",
  },
  {
    title: "Age",
    field: "age",
    width: "300px"
  },
];

export default {
  data() {
    return {
      props,
      tableData: [],
    };
  },
  created() {
    let data: any[] = [];
    Array(1000)
      .fill(1)
      .forEach((v, ix) => {
        data = data.concat([
          {
            id: 10001 + "_" + ix,
            name: "Test_" + Math.floor(ix / 10),
            role: "Develop" + ix,
            sex: "Man" + ix,
            age: ix,
            address: "Shenzhen" + ix,
          },
        ]);
      });

    // @ts-ignore
    this.tableData = data;
  },

  methods: {
    colspanMethod({
      rowIndex,
      columnIndex,
      $rowIndex,
      $columnIndex,
      row,
      column,
    }: ColumnCellRenderParams) {
      if (columnIndex === 0) {
        let data = (this.$refs.table as Table).getTableData().tableData
        // @ts-ignore
        let sameNameData = data.filter(v => v.name === row.name)
        // @ts-ignore
        let curIndex = sameNameData.findIndex(v => v.id === row.id)

        return {
          rowspan: curIndex === 0 ? sameNameData.length : 0,
          colspan: 1,
        };
      } else {
        return {
          rowspan: 1,
          colspan: 1,
        };
      }
    },
  },
};
</script>

<style lang="scss">
body {
  .vxe-table.border--default .vxe-table--header-wrapper,
  .vxe-table.border--full .vxe-table--header-wrapper,
  .vxe-table.border--outer .vxe-table--header-wrapper {
    background-color: #eff2f7;
  }

  .vxe-table .vxe-body--row.row--stripe {
    background-color: #f9fafc;
  }
}
</style>