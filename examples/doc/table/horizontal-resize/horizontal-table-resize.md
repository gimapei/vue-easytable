:::demo 분할 적응 **수직 적응** (높이 적응) 및 **수평 적응** (넓이 적응)
**측면 적응**는 다음과 같은 조건을 만족해야합니다 :
저자 `is-horizontal-resize`속성 횡 적응;
함으로써 `isResize`열 적응을 요구 특성 (모든 컬럼은 컬럼의 모든 적응을 달성하도록 설정 될 수있다);
저자 `style="width:100%"`(필요에 따라 백분율 값) 표시를 설정하는 단계;
각 열은 적응 형 최소 너비 인 너비를 제공해야합니다.
경우 종 적응은 단지 설정해야합니다 `is-vertical-resize=true`에


```html
<template>
    <v-table
            is-horizontal-resize
            style="width:100%"
            :columns="columns"
            :table-data="tableData"
            row-hover-color="#eee"
            row-click-color="#edf7ff"
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