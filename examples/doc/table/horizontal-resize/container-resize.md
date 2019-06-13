:::demo 때로는 동일한 행 에 둘 이상의 **적응 형 테이블**을 넣을 수도 있습니다 . 각 테이블의 컨테이너에 대한 표시 크기를 설정하기 만하면됩니다.
```html
<template>
    <div>
        <div style="border:10px dotted orange;width:49%;float:left;">
            <v-table
                    is-horizontal-resize
                    style="width:100%;"
                    :columns="columns"
                    :table-data="tableData"
                    row-hover-color="#eee"
                    row-click-color="#edf7ff"
            ></v-table>
        </div>

        <div style="border:10px dotted orange;width:49%;float:right;">
            <v-table
                    is-horizontal-resize
                    style="width:100%;"
                    :columns="columns"
                    :table-data="tableData"
                    row-hover-color="#eee"
                    row-click-color="#edf7ff"
            ></v-table>
        </div>
        <div style="clear:both;"></div>
    </div>
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
                        {field: 'name', title: '이름', width: 80, titleAlign: 'center', columnAlign: 'center',isResize:true},
                        {field: 'tel', title: '전화번호', width: 80, titleAlign: 'center', columnAlign: 'center',isResize:true},
                        {field: 'hobby', title: '취미', width: 80, titleAlign: 'center', columnAlign: 'center',isResize:true},
                        {field: 'address', title: '주소', width: 160, titleAlign: 'center', columnAlign: 'center',isResize:true},
                ]
            }
        }
    }
</script>
```
:::