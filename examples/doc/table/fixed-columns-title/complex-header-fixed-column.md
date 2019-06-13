:::demo `titleRows` 가아닌 `fields`에 설정을 해야 합니다. 

```html
<template>
   <v-table
            :width="1100"
            :height="280"
            even-bg-color="#f2f2f2"
            :title-rows="titleRows"
            :columns="columns"
            :table-data="tableData"
            row-hover-color="#eee"
            row-click-color="#edf7ff"
    ></v-table>
</template>

<style>
    .title-cell-class-name-test1 {
        background-color: #2db7f5;
    }
    .title-cell-class-name-test2 {
        background-color: #f60;
    }
</style>

<script>

    export default{
        data(){
            return {
                multipleSort: false,
                tableData: [
                        {"name":"홍길동","gender":"남","height":"183","email":"zhao@gmail.com","tel":"156*****1987","hobby":"수영", "address":"수원시 권선구 고색동 "},
                        {"name":"주윤발","gender":"남","height":"166","email":"li@gmail.com","tel":"182*****1538","hobby":"수영",   "address":"수원시 권선구 고색동 "},
                        {"name":"주성치","gender":"여","height":"186","email":"sun@gmail.com","tel":"161*****0097","hobby":"수영",  "address":"수원시 권선구 고색동 "},
                        {"name":"정우성","gender":"여","height":"188","email":"zhou@gmail.com","tel":"197*****1123","hobby":"수영", "address":"수원시 권선구 고색동 "},
                        {"name":"아이유","gender":"남","height":"160","email":"wu@gmail.com","tel":"183*****6678","hobby":"수영",   "address":"수원시 권선구 고색동 "},
                        {"name":"별",    "gender":"여","height":"168","email":"feng@gmail.com","tel":"133*****3793","hobby":"수영",     "address":"수원시 권선구 고색동 "}
                ],
                columns: [
                     {
                        field: 'custome', width: 50, titleAlign: 'center', columnAlign: 'center',
                        formatter: function (rowData, index) {
                            return index < 3 ? '<span style="color:red;font-weight: bold;">' + (index + 1) + '</span>' : index + 1
                        }, isFrozen: true
                    },
                    {field: 'name', width: 100, columnAlign: 'center', isFrozen: true},
                    {field: 'gender', width: 150, columnAlign: 'center', isFrozen: true},
                    {field: 'height', width: 150, columnAlign: 'center', isFrozen: true},
                    {field: 'tel', width: 190, columnAlign: 'center'},
                    {field: 'email', width: 230, columnAlign: 'center'},
                    {field: 'hobby', width: 230, columnAlign: 'center'},
                    {field: 'address', width: 330, columnAlign: 'left'}
                ],

                titleRows: [
                             [{fields: ['custome'], title: '정렬', titleAlign: 'center', rowspan: 2},
                              {fields: ['name', 'gender', 'height'], title: '기본정보', titleAlign: 'center', colspan: 3},
                              {fields: ['tel', 'email'], title: '연락처', titleAlign: 'center', colspan: 2},
                              {fields: ['hobby','address'], title: '취미 및 주소', titleAlign: 'center', rowspan: 2,colspan: 2}],

                             [{fields: ['name'], title: '이름', titleAlign: 'center'},
                              {fields: ['gender'], title: '성별', titleAlign: 'center', orderBy: 'asc'},
                              {fields: ['height'], title: '키', titleAlign: 'center', orderBy: 'desc'},
                              {fields: ['tel'], title: '전화번호', titleAlign: 'center'},
                              {fields: ['email'], title: '이메일', titleAlign: 'center'}],

                             [{fields: ['custome','name','gender','height'], title: '평균', titleAlign: 'center', colspan: 4,titleCellClassName:'title-cell-class-name-test1'},
                              {fields: ['tel'], title: '000', titleAlign: 'center',titleCellClassName:'title-cell-class-name-test2'},
                              {fields: ['email'], title: '111', titleAlign: 'center',titleCellClassName:'title-cell-class-name-test2'},
                              {fields: ['hobby'], title: '222', titleAlign: 'center',titleCellClassName:'title-cell-class-name-test2'},
                              {fields: ['address'], title: '333', titleAlign: 'center',titleCellClassName:'title-cell-class-name-test2'}]
                           ]
            }
        }
    }
</script>
```
:::
