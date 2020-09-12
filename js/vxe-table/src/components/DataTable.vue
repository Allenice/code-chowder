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
      :sort-config="{trigger: 'cell'}"
    >
      <template #empty>没有更多数据了！</template>

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
import { data, tableHeaderData } from "./data";

export default {
  data() {
    return {
      props: tableHeaderData,
      tableData: data,
    };
  },
  created() {},

  methods: {
    colspanMethod({
      rowIndex,
      columnIndex,
      $rowIndex,
      $columnIndex,
      row,
      column,
    }: ColumnCellRenderParams) {

        let spanFileds = ['salon_name', 'address', 'time']
      if (spanFileds.includes(column.property)) {
        let data = (this.$refs.table as Table).getTableData().tableData;
        // @ts-ignore
        let sameData = data.filter((v) => v[column.property] === row[column.property]);
        // @ts-ignore
        let curIndex = sameData.findIndex((v) => v.id === row.id);

        return {
          rowspan: curIndex === 0 ? sameData.length : 0,
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
</style>