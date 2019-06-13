:::demo 테이블에 숨겨진 스위치를 보여줄 필요가있을 때 호출하여 적응 테이블, 테이블 어셈블리를 강제로 요구되는 `resize`방법 <br>힌트 : 요소가 숨겨진 요소의 너비와 높이를 숨길 수 없으므로 수동으로 모두 적용해야합니다. 더 좋은 방법이 있다면이 방법은 나중에 버려집니다!
```html
<template>
   <div>
         <input type="button" value="tab1" @click="tabClick(1)"/>
         <input type="button" value="tab2" @click="tabClick(2)"/>
         <div v-show="tab==1">
             <v-table
                     ref="table1"
                     is-horizontal-resize
                     style="width:100%"
                     :columns="tables1.columns"
                     :table-data="tables1.tableData"
                     even-bg-color="#f4f4f4"
             ></v-table>
         </div>
         <div v-show="tab==2">
             <v-table
                     ref="table2"
                     is-horizontal-resize
                     style="width:100%"
                     :columns="tables2.columns"
                     :table-data="tables2.tableData"
                     even-bg-color="#f4f4f4"
                     row-hover-color="#eee"
                     row-click-color="#edf7ff"
             ></v-table>
         </div>
   </div>
</template>

<script>

    export default{
        name: 'frozen-title-columns',
        data(){
            return {
                tab:1,

                tables1: {
                    tableData: [
                        {"name":"홍길동","tel":"156*****1987","hobby":"서예, 수묵화","address":"경기도 화성기 기안동 신일해피트리 110동"},
                        {"name":"강남길","tel":"182*****1538","hobby":"서예, 수묵화","address":"경기도 화성기 기안동 신일해피트리 101동"},
                        {"name":"아이유","tel":"161*****0097","hobby":"서예, 수묵화","address":"경기도 화성기 기안동 신일해피트리 106동"},
                        {"name":"조커","tel":"197*****1123","hobby":"서예, 수묵화","address":"경기도 화성기 기안동 신일해피트리 207동"},
                        {"name":"변사또","tel":"183*****6678","hobby":"서예, 수묵화","address":"경기도 화성기 기안동 신일해피트리 307동"}
                    ],
                    columns: [
                        {field: 'name', title: '이름1', width: 180, titleAlign: 'center',columnAlign:'center', isFrozen: true,formatter: function (rowData, index) {
                            return '양식1111111111';
                        }},
                        {field: 'tel', title: '전화번호1', width: 180, titleAlign: 'center',columnAlign:'center', isFrozen: false,isResize:true,formatter: function (rowData, index) {
                            return '양식1111111111';
                        }},
                        {field: 'hobby', title: '취미1', width: 190, titleAlign: 'center',columnAlign:'center', isFrozen: false,isResize:true},
                        {field: 'address', title: '주소1', width: 200, titleAlign: 'center',columnAlign:'left', isFrozen: false,isResize:true},
                    ]
                },

                tables2: {
                    tableData: [
                        {"name":"홍길동","tel":"156*****1987","hobby":"서예, 수묵화","address":"경기도 화성기 기안동 신일해피트리 110동"},
                        {"name":"강남길","tel":"182*****1538","hobby":"서예, 수묵화","address":"경기도 화성기 기안동 신일해피트리 101동"},
                        {"name":"아이유","tel":"161*****0097","hobby":"서예, 수묵화","address":"경기도 화성기 기안동 신일해피트리 106동"},
                        {"name":"조커","tel":"197*****1123","hobby":"서예, 수묵화","address":"경기도 화성기 기안동 신일해피트리 207동"},
                        {"name":"변사또","tel":"183*****6678","hobby":"서예, 수묵화","address":"경기도 화성기 기안동 신일해피트리 307동"}
                    ],
                    columns: [
                        {field: 'name', title: '이름2', width: 180, titleAlign: 'center',columnAlign:'center', isFrozen: true,formatter: function (rowData, index) {
                            return '양식222222222';
                        }},
                        {field: 'tel', title: '전화번호2', width: 180, titleAlign: 'center',columnAlign:'center', isFrozen: false,isResize:true,formatter: function (rowData, index) {
                            return '양식222222222';
                        }},
                        {field: 'hobby', title: '취미2', width: 190, titleAlign: 'center',columnAlign:'center', isFrozen: false,isResize:true},
                        {field: 'address', title: '주소2', width: 200, titleAlign: 'center',columnAlign:'left', isFrozen: false,isResize:true},
                    ]
                }
            }
        },
        methods: {

            tabClick(tabId){
                 this.tab = tabId;
                 this.$refs['table'+tabId].resize();

            }
        }
    }
</script>
```
:::