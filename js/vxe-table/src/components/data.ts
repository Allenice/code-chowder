import { TableProp } from "@/typings";
import mockData from './mockData2'

export const tableHeaderData: TableProp[] = [
  {
    title: "门店名称",
    field: "salon_name",
    minWidth: "150px",
    fixed: "left",
  },
  {
    title: "门店地址",
    field: "address",
    minWidth: "150px",
  },
  {
      title: '日期',
      field: 'time',
      minWidth: '150px',
  },
  {
    title: "劳动业绩",
    field: "i_1",
    minWidth: "100px",
    sortable: true,
    chainRatio: true,
  },
  {
    title: "服务业绩",
    field: "i_2",
    align: "center",
    children: [
      {
        title: "名称",
        minWidth: "100px",
        field: "i_2|item_name",
      },
      {
        title: "业绩",
        minWidth: "100px",
        field: "i_2|i_4",
        sortable: true,
        chainRatio: true,
      },
    ],
  },
  {
    title: "商品业绩",
    field: "i_5",
    minWidth: "100px",
    align: "center",
    children: [
      {
        title: "名称",
        minWidth: "100px",
        field: "i_5|item_name",
      },
      {
        title: "业绩",
        minWidth: "100px",
        field: "i_5|i_4",
        sortable: true,
        chainRatio: true,
      },
      {
        title: "个数",
        minWidth: "100px",
        field: "i_5|i_7",
        sortable: true,
        chainRatio: true,
      },
    ],
  },
  {
    title: "套餐销售业绩",
    minWidth: "100px",
    field: "i_8",
    sortable: true,
  },
  {
    title: "总棵树",
    minWidth: "100px",
    field: "i_9",
    sortable: true,
    chainRatio: true,
  },
];

let orignal: any[] = []
console.time('test')
mockData.forEach((salonItem, salonIndex) => {
    salonItem.items.forEach((dateItem, dateIndex) => {
        let count = 1

        let baseItem = {
            salon_id: salonItem.salon_id,
            salon_name: salonItem.salon.name,
            address: salonItem.salon.address,
            time: dateItem.time
        }

        let items: Record<string, any>[] = []

        Object.keys(dateItem).forEach(key => {
            // @ts-ignore
            let iItem = dateItem[key]
            if (typeof iItem === 'object') {
                count = Math.max(count, iItem.items.length)
                items[0] = items[0] || {}
                items[0][`${key}|item_name`] = '汇总'
                Object.keys(iItem.summary).forEach(sKey => {
                    items[0][`${key}|${sKey}`] = iItem.summary[sKey]
                })
                iItem.items.forEach((iaItem: Record<string, any>, iaIndex: number) => {
                    items[iaIndex + 1] = items[iaIndex + 1] || {}
                    Object.keys(iaItem).forEach(iaKey => {
                        items[iaIndex + 1][`${key}|${iaKey}`] = iaItem[iaKey]
                    })
                })
            } else {
                items[0] = items[0] || {}
                items[0][key] = iItem
            }
        })

        // 包括汇总行
        for (let i = 0; i <= count; i++) {
            let item = items[i]
            orignal.push({
                id: `s${salonIndex}-d${dateIndex}-${i}`,
                ...baseItem,
                ...(item || {})
            })
        }
    })
})
console.timeEnd('test')

export const data = orignal
