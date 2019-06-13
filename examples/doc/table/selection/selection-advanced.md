:::demo 提示：如果存在禁用的 **选中项** 则一直为部分选中状态 <br> - 通过给 `table-data` 设置 `_checked: true` 可以默认选中当前项<br> - 通过给 `table-data` 设置 `_disabled: true` 可以禁止选择当前项
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
                    {"name":"홍길동","tel":"156*****1987","hobby":"마라톤","address":"서울특별시 한남동 14번지" },
                    {"name":"주성치","tel":"182*****1538","hobby":"마라톤","address":"서울특별시 한남동 14번지" ,checked:true,_disabled:true},
                    {"name":"신길동","tel":"161*****0097","hobby":"마라톤","address":"서울특별시 한남동 14번지"  ,_disabled:true},
                    {"name":"둘리","tel":"197*****1123","hobby":"마라톤",  "address":"서울특별시 한남동 14번지"  ,   _checked:true},
                    {"name":"홍성철","tel":"183*****6678","hobby":"마라톤","address":"서울특별시 한남동 14번지" }
                ],
                columns: [
                    {width: 60, titleAlign: 'center',columnAlign:'center',type: 'selection',isFrozen:true},
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