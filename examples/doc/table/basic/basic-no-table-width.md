
:::demo 테이블의 전체 너비를 설정하지 않고 각 열의 너비 만 설정하면 테이블의 전체 너비가 자동으로 계산됩니다.

```html
<template>
    <v-table
            :columns="columns"
            :table-data="tableData"
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
                    {field: 'name', title:'이름', width: 150, titleAlign: 'center',columnAlign:'center', isFrozen: true},
                    {field: 'tel', title: '전화번호', width: 280, titleAlign: 'center',columnAlign:'center', isFrozen: true},
                    {field: 'hobby', title: '취미', width: 380, titleAlign: 'center',columnAlign:'center'},
                    {field: 'address', title: '주소',  titleAlign: 'center',columnAlign:'left'}
                ]
            }
        }
    }
</script>
```
:::

