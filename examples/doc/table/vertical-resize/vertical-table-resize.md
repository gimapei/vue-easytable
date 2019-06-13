:::demo 분할 적응 길이 적응 (높은 적응) 및 횡 적응 (넓음 적응).경우 측면 적응는 다음과 같은 조건을 만족해야합니다 저자 `is-horizontal-resize` 속성 횡 적응;함으로써 `isResize` 열 적응을 요구 특성 (모든 컬럼은 컬럼의 모든 적응을 달성하도록 설정 될 수있다);저자 `style="width:100%"` (필요에 따라 백분율 값) 표시를 설정하는 단계;각 열은 적응 형 최소 너비 인 너비를 제공해야합니다.경우 종 적응은 단지 정해야합니다 `is-vertical-resize=true`에 `vertical-resize-offset`수직 오프셋 (예 : 페이징이 포함 된 경우) 을 설정하여 현재 표시된 높이의 맨 아래로부터 거리를 조정할 수 있습니다.

```html
<template>
    <v-table
            is-vertical-resize
            style="width:100%"
            is-horizontal-resize
            :vertical-resize-offset='5'
            :min-height='200'
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
                    {"name":"미남1","tel":"156*****1987","hobby":"수영","address":"경기도 동화리"},
                    {"name":"미남1","tel":"182*****1538","hobby":"수영","address":"충남 당진군"},
                    {"name":"미남1","tel":"161*****0097","hobby":"수영","address":"경남 사천군"},
                    {"name":"미남1","tel":"197*****1123","hobby":"수영","address":"경기 이천시"},
                    {"name":"미남1","tel":"183*****6678","hobby":"수영","address":"부산광역시 남포동"},
                    {"name":"미남2","tel":"156*****1987","hobby":"수영","address":"경기도 동화리"},
                    {"name":"미남2","tel":"182*****1538","hobby":"수영","address":"충남 당진군"},
                    {"name":"미남2","tel":"161*****0097","hobby":"수영","address":"경남 사천군"},
                    {"name":"미남2","tel":"197*****1123","hobby":"수영","address":"경기 이천시"},
                    {"name":"미남2","tel":"183*****6678","hobby":"수영","address":"부산광역시 남포동"},
                    {"name":"미남3","tel":"156*****1987","hobby":"수영","address":"경기도 동화리"},
                    {"name":"미남3","tel":"182*****1538","hobby":"수영","address":"충남 당진군"},
                    {"name":"미남3","tel":"161*****0097","hobby":"수영","address":"경남 사천군"},
                    {"name":"미남3","tel":"197*****1123","hobby":"수영","address":"경기 이천시"},
                    {"name":"미남3","tel":"183*****6678","hobby":"수영","address":"부산광역시 남포동"},
                    {"name":"미남4","tel":"156*****1987","hobby":"수영","address":"경기도 동화리"},
                    {"name":"미남4","tel":"182*****1538","hobby":"수영","address":"충남 당진군"},
                    {"name":"미남4","tel":"161*****0097","hobby":"수영","address":"경남 사천군"},
                    {"name":"미남4","tel":"197*****1123","hobby":"수영","address":"경기 이천시"},
                    {"name":"미남4","tel":"183*****6678","hobby":"수영","address":"부산광역시 남포동"},
                    {"name":"미남5","tel":"156*****1987","hobby":"수영","address":"경기도 동화리"},
                    {"name":"미남5","tel":"182*****1538","hobby":"수영","address":"충남 당진군"},
                    {"name":"미남5","tel":"161*****0097","hobby":"수영","address":"경남 사천군"},
                    {"name":"미남5","tel":"197*****1123","hobby":"수영","address":"경기 이천시"},
                    {"name":"미남5","tel":"183*****6678","hobby":"수영","address":"부산광역시 남포동"}
                 ],
                columns: [
                    {field: 'name', title: '이름', width: 80, titleAlign: 'center', columnAlign: 'center',isResize:true},
                    {field: 'tel', title: '전화번호', width: 150, titleAlign: 'center', columnAlign: 'center',isResize:true},
                    {field: 'hobby', title: '취미', width: 150, titleAlign: 'center', columnAlign: 'center',isResize:true},
                    {field: 'address', title: '주소', width: 280, titleAlign: 'center', columnAlign: 'left',isResize:true}
                ]
            }
        }
    }
</script>
```
:::