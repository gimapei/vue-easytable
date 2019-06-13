
:::demo 설정 헤더 셀 스타일을 위하여 `titleCellClassName`클래스 속성에 셀 헤더를 설정하는 단계; 설정 열 스타일에서 셀을 다음 `columnCellClassName` 열 셀 클래스를 설정하는 방법;

```html
<template>
    <v-table
            is-horizontal-resize
            style="width:100%"
            :columns="columns"
            :table-data="tableData"
            :row-click="rowClick"
            :column-cell-class-name="columnCellClass"
            row-hover-color="#eee"
            row-click-color="#edf7ff"
    ></v-table>
</template>

<style>
    .title-cell-class-name-test{
        background-color: #f60;
        color:#fff;
    }
    .column-cell-class-name-test{
        background-color: #187;
    }
    .column-cell-class-name-test .v-table-body-cell{
        border-color: #187;
    }
    .column-cell-class-name-test2{
        background-color: #2db7f5;
        font-weight: bold;
    }
    .column-cell-class-name-test2 .v-table-body-cell{
        border-color: #2db7f5;
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
                   columns: [
                      {field: 'name', title:'이름', width: 80, titleAlign: 'center',columnAlign:'center',isResize:true},
                      {field: 'tel', title: '전화번호', width: 150, titleAlign: 'center',columnAlign:'center',isResize:true},
                      {field: 'hobby', title: '취미', width: 150, titleAlign: 'center',columnAlign:'center',titleCellClassName:'title-cell-class-name-test',isResize:true},
                      {field: 'address', title: '주소', width: 280, titleAlign: 'center',columnAlign:'left',isResize:true}
                   ]

            }
        },
        methods:{

            columnCellClass(rowIndex,columnName,rowData){

                // 1번 행의 hobby 컬럼에 대한 새로운 className을 설정합니다. 
                if (rowIndex === 1 && columnName==='hobby'){

                    return 'column-cell-class-name-test';
                }

                // 1번 행 전체에 대해서 새로운 className을 설정합니다. 
                if (rowIndex ===1){

                    return 'column-cell-class-name-test2';
                }

                // name 컬럼의 값이 `조커` 인경우에 className을 설정합니다. 
                if (rowData.name === '조커'){

                    return 'column-cell-class-name-test';
                }
            },

            rowClick(rowIndex,rowData){
               console.log(rowIndex);
               console.log(rowData);
            }
        }
    }
</script>
```
:::