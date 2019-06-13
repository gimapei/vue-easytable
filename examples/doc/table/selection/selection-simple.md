:::demo `columns`설정 type: `selection`자동으로 다중 선택 기능을 엽니다.<br>콜백 이벤트 :<br>`select-all`콜백 함수. 콜백 매개 변수가 `selection`이미 선택되어있는 경우 모두 트리거 됩니다.`select-change`콜백 함수는 항목이 콜백 매개 변수를 트리거 선택 `selection`하고 `rowData`, 각각 단지 선택한 항목 및 옵션`select-group-change`선택한 항목이 변경되고 콜백 매개 변수가 선택되면 콜백 함수가 트리거됩니다 
 코드보기
```html
<template>
    <v-table
            is-horizontal-resize
            style="width:100%"
            :columns="columns"
            :table-data="tableData"
            row-hover-color="#eee"
            row-click-color="#edf7ff"
            :select-all="selectALL"
            :select-change="selectChange"
            :select-group-change="selectGroupChange"
    ></v-table>
</template>

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
                        {width: 60, titleAlign: 'center',columnAlign:'center',type: 'selection'},
                        {field: 'name', title: '이름', width: 80, titleAlign: 'center', columnAlign: 'center',isResize:true},
                        {field: 'tel', title: '전화번호', width: 150, titleAlign: 'center', columnAlign: 'center',isResize:true},
                        {field: 'hobby', title: '취미', width: 150, titleAlign: 'center', columnAlign: 'center',isResize:true},
                        {field: 'address', title: '주소', width: 280, titleAlign: 'center', columnAlign: 'left',isResize:true}
                    ]
            }
        },
         methods:{
                 //
                 selectALL(selection){

                     console.log('select-aLL',selection);
                 },

                 selectChange(selection,rowData){
                     console.log('select-change',selection,rowData);
                 },

                 selectGroupChange(selection){
                     console.log('select-group-change',selection);
                 }
         }
    }
</script>
```
:::