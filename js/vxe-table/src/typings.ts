import { ColumnOptions } from 'vxe-table'

export interface TableProp extends ColumnOptions {
    children?: ColumnOptions[]
}