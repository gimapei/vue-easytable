:::demo `cell-merge` 콜백함수를 통해 셀을 병합<br> **사용방법**：<br> - 병합하려는 열을 찾아서 `colspan`을 설정하여 열 병합, <br>병합하려는 행을 찾아서 `rowspan` 을 설정하여 행병합

```html
<template>
    <div>
        <v-table
             :width="1100"
             :height="300"
             :columns="columns"
             :table-data="tableData"
             even-bg-color="#f4f4f4"
             row-hover-color="#eee"
             row-click-color="#edf7ff"
             :cell-merge="cellMerge"
        ></v-table>
    </div>
</template>

<script>
    import Vue from 'vue'

    export default{
        name: 'frozen-title-columns',
        data(){
            return {
                tableData: [
                            {"name":"주성치","gender":"남","birthday":'1963-7-9',"height":"183","email":"zhao@gmail.com","tel":"156*****1987","hobby":"등산", "address":"경기도 화성시 기안동 19"},
                            {"name":"이문열","gender":"남","birthday":'2003-12-7',"height":"166","email":"li@gmail.com","tel":"182*****1538","hobby":"등산",  "address":"경기도 화성시 기안동 19"},
                            {"name":"군단세","gender":"여","birthday":'1993-12-7',"height":"186","email":"sun@gmail.com","tel":"161*****0097","hobby":"등산", "address":"경기도 화성시 기안동 19"},
                            {"name":"조정치","gender":"여","birthday":'1993-12-7',"height":"188","email":"zhou@gmail.com","tel":"197*****1123","hobby":"등산","address":"경기도 화성시 기안동 19"},
                            {"name":"아이유","gender":"남","birthday":'1993-12-7',"height":"160","email":"wu@gmail.com","tel":"183*****6678","hobby":"등산",  "address":"경기도 화성시 기안동 19"},
                            {"name":"고릴라","gender":"여","birthday":'1993-12-7',"height":"168","email":"feng@gmail.com","tel":"133*****3793","hobby":"등산","address":"경기도 화성시 기안동 19"},
                            {"name":"정우성","gender":"남","birthday":'1993-12-7',"height":"170","email":"zhu@gmail.com","tel":"189*****2345","hobby":"등산", "address":"경기도 화성시 기안동 19"}],
                columns:[
                       {field: 'name', title:'이름', width: 150, titleAlign: 'center',columnAlign:'center', isFrozen: true},
                       {field: 'gender', title:'성별', width: 150, titleAlign: 'center',columnAlign:'center', isFrozen: true},
                       {field: 'tel', title: '전화번호', width: 180, titleAlign: 'center',columnAlign:'center', isFrozen: false},
                       {field: 'birthday', title: '생일', width: 180, titleAlign: 'center',columnAlign:'center'},
                       {field: 'hobby', title: '취미', width: 380, titleAlign: 'center',columnAlign:'center'},
                       {field: 'address', title: '주소', width: 430, titleAlign: 'center',columnAlign:'left'}
                     ]
            }
        },
        methods: {

            cellMerge(rowIndex,rowData,field){
                if (rowIndex === 1 && field === 'name') {
                    return {
                        colSpan: 2,
                        rowSpan: 1,
                        content: '<span style="color:red">열 병합</span>',
                        componentName: ''

                    }
                } else if (rowIndex === 3 && field === 'gender') {

                    return {
                        colSpan: 1,
                        rowSpan: 3,
                        content: '<span style="color:red">행 병합</span>',
                        componentName: ''
                    }

                }else if (rowIndex === 2 && field === 'birthday') {

                        return {
                            colSpan: 2,
                            rowSpan: 3,
                            content:'',
                            componentName:'table-cell-merge',
                        }
                }
            }
        }
    }

        // 사용자 정의 열 구성요소
        Vue.component('table-cell-merge',{
            template:`<span style="color:red">
               열 / 행 동시 병합
            </span>`,
            props:{
                rowData:{
                    type:Object
                },
                field:{
                    type:String
                },
                index:{
                    type:Number
                }
            }
        })
</script>
```
:::