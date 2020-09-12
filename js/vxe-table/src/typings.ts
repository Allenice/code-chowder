import { ColumnOptions } from 'vxe-table'

export interface TableProp extends ColumnOptions {
    children?: TableProp[],
    /** 环比 */
    chainRatio?: boolean
}