:::demo 고정 헤더 : `height`속성을 설정하기 만하면 설정의 높이가 실제 표의 높이보다 큰 경우 실제 표 높이가 사용됩니다. `isFrozen: true` 로 열고정을 합니다.

```html
<template>
    <div>
        <v-table
             :width="1100"
             :height="200"
             :columns="columns"
             :table-data="tableData"
             even-bg-color="#f4f4f4"
             row-hover-color="#eee"
             row-click-color="#edf7ff"
        ></v-table>
    </div>
</template>

<script>

    export default{
        name: 'frozen-title-columns',
        data(){
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
                           {field: 'address', title: '주소', width: 430, titleAlign: 'center',columnAlign:'left'}
                    ]
            }
        }
    }
</script>
```
:::