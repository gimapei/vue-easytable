
:::demo `columns`의 `isEdit:true`로설정해서 셀편집기능을 사용하도록 합니다. 。<br> **콜백 이벤트**： <br> - `cell-edit-done`의 콜백함수를 작성하세요 `newValue`、`oldValue`、`rowIndex`、`rowData`、`field`의 매개변수가 필요합니다. `table-data`배열에서 현재 편집된 Row를 지정하세요.  <br> **프롬프트**：DOM 응답성능에 직접적으로 영향을 주기때문에 `cell-edit-done` 콜백함수에서 성능을 감안하세요.  `table-data`编辑的列赋值，达到响应式的目的

```html
<template>
    <v-table
            is-horizontal-resize
            style="width:100%"
            :columns="columns"
            :table-data="tableData"
            row-hover-color="#eee"
            row-click-color="#edf7ff"
            :cell-edit-done="cellEditDone"
    ></v-table>
</template>

<style>
    .cell-edit-color{
        color:#2db7f5;
        font-weight: bold;
    }
</style>

<script>

    export default{
        data() {
            return {
                tableData: [
                    {"name":"홍길동","tel":"156*****1987","hobby":"서예, 수묵화","address":"경기도 화성기 기안동 신일해피트리 110동"},
                    {"name":"강남길","tel":"182*****1538","hobby":"서예, 수묵화","address":"경기도 화성기 기안동 신일해피트리 101동"},
                    {"name":"아이유","tel":"161*****0097","hobby":"서예, 수묵화","address":"경기도 화성기 기안동 신일해피트리 106동"},
                    {"name":"조커","tel":"197*****1123","hobby":"서예, 수묵화","address":"경기도 화성기 기안동 신일해피트리 207동"},
                    {"name":"변사또","tel":"183*****6678","hobby":"서예, 수묵화","address":"경기도 화성기 기안동 신일해피트리 307동"}
                ],
                    columns:  [
                             {field: 'name', title:'이름', width: 80, titleAlign: 'center',columnAlign:'center',isEdit:true,
                              formatter: function (rowData,rowIndex,pagingIndex,field) {

                                   return `<span class='cell-edit-color'>${rowData[field]}</span>`;
                               },isResize:true},
                             {field: 'tel', title: '전화번호', width: 150, titleAlign: 'center',columnAlign:'center',isEdit:true,isResize:true},
                             {field: 'hobby', title: '취미', width: 150, titleAlign: 'center',columnAlign:'center',isEdit:true,isResize:true},
                             {field: 'address', title: '주소', width: 280, titleAlign: 'center',columnAlign:'left',isEdit:true,isResize:true}
                     ]
            }
        },
        methods:{

            cellEditDone(newValue,oldValue,rowIndex,rowData,field){

                this.tableData[rowIndex][field] = newValue;

                // 비즈니스 로직, 테이트 처리 등을 작성하세요. 
            }
        }
    }
</script>
```
:::

