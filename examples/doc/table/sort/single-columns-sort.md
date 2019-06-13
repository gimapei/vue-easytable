
:::demo `multiple-sort` 를 `false`로 설정해서 단일 필드 정렬 `sort-always` 를 설정하면 정렬을 오름차순 및 내림차순으로 만 변경할 수 있습니다.<br> `sort-change` 콜백 함수 를 전달하면 현재 정렬 된 필드가 얻어지고 정렬 `table-data` 는 목적을 달성하기 위해 정렬 결과가 다시 할당 됩니다.
```html
<template>
    <div>
        <v-table
             is-horizontal-resize
             style="width:100%"
             :multiple-sort="multipleSort"
             :columns="columns"
             :table-data="tableData"
             @sort-change="sortChange"
             row-hover-color="#eee"
             row-click-color="#edf7ff"
        ></v-table>
    </div>
</template>

<script>

    export default{
        name: 'sort-by-single-columns',
        data(){
            return {
                 tableData: [
                    {"name":"홍길동","tel":"156*****1987","hobby":"서예, 수묵화","address":"경기도 화성기 기안동 신일해피트리 110동"},
                    {"name":"강남길","tel":"182*****1538","hobby":"서예, 수묵화","address":"경기도 화성기 기안동 신일해피트리 101동"},
                    {"name":"아이유","tel":"161*****0097","hobby":"서예, 수묵화","address":"경기도 화성기 기안동 신일해피트리 106동"},
                    {"name":"조커","tel":"197*****1123","hobby":"서예, 수묵화","address":"경기도 화성기 기안동 신일해피트리 207동"},
                    {"name":"변사또","tel":"183*****6678","hobby":"서예, 수묵화","address":"경기도 화성기 기안동 신일해피트리 307동"}
                 ],
                multipleSort:false,
                columns: [
                    {field: 'name', title: '이름', width: 80, titleAlign: 'center',columnAlign:'center',orderBy:'asc',isResize:true},
                    {field: 'tel', title: '전화번호', width: 150, titleAlign: 'center',columnAlign:'center',orderBy:'asc',isResize:true},
                    {field: 'hobby', title: '취미', width: 150, titleAlign: 'center',columnAlign:'center',isResize:true},
                    {field: 'address', title: '주소',width: 280, titleAlign: 'center',columnAlign:'left',isResize:true}
                ]
            }
        },
        methods: {

            // 각 작업 후에 테이블 구성 요소의 매개 변수 가져 오기 (데이터 다시 요청)
            sortChange(params){
                console.log(params)
            }
        }
    }
</script>
```
:::
