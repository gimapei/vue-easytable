
:::demo 함으로써 `columns`데이터의 항목이 제공되는 `filters`, 또, 검사를 할 수 `filters`있는 배열을받는
이 옵션을 지정 `filterMultiple: true`하면 다중 선택이 사용되며 기본값은 단일입니다.
필터 함수 지정 `filterMethod`데이터 필터링 기능을 수행하기 위해 `filterMethod`스크리닝, 필터 파라미터에 의해 원래의 데이터를 변경하는 목적 한 결과를 파라미터로서 수신한다.
참고 : 필터링은 구성 요소 내부의 데이터를 처리하지 않습니다.


```html
<template>
    <div>
        <v-table
                is-horizontal-resize
                style="width:100%"
                :columns="columns"
                :table-data="tableData"
                :filter-method="filterMethod"
        ></v-table>
    </div>
</template>

<script>

    export default{
        name: 'filters',
        data(){
            return {
                tableData: [],
                columns: [
                    {field: 'name', title: '이름', width: 80, titleAlign: 'center',columnAlign:'center',isResize:true,
                        filterMultiple: true,
                        filters: [{
                            label: '홍길동',
                            value: '홍길동',
                        }, {
                            label: '아이유',
                            value: '아이유',
                        }, {
                            label: '조커',
                            value: '조커',
                        }],
                        isFrozen:true
                    },
                    {field: 'gender', title: '성별', width: 50, titleAlign: 'center',columnAlign:'center',isResize:true,
                        filterMultiple: false,
                        filters: [{
                            label: '남자',
                            value: '남',
                        }, {
                            label: '여자',
                            value: '여',
                        }]
                    },
                    {field: 'hobby', title: '취미', width: 150, titleAlign: 'center',columnAlign:'center',isResize:true},
                    {field: 'address', title: '주소',width: 280, titleAlign: 'center',columnAlign:'left',isResize:true}
                ]
            }
        },
        methods: {

            filterMethod(filters){

                let tableData = this.getTableData();

                // filter gender
                if (Array.isArray(filters.gender)){

                    tableData = tableData.filter(item => item.gender === filters.gender[0])
                }

                // filter name
                if (Array.isArray(filters.name)){

                    tableData = tableData.filter(item => filters.name.indexOf(item.name) > -1);
                }

                this.tableData = tableData;
            },

            getTableData(){

                return [
                    {"name":"홍길동","gender":"남","hobby":"서예, 수묵화","address":"경기도 화성기 기안동 신일해피트리 110동"},
                    {"name":"강남길","gender":"남","hobby":"서예, 수묵화","address":"경기도 화성기 기안동 신일해피트리 101동"},
                    {"name":"아이유","gender":"여","hobby":"서예, 수묵화","address":"경기도 화성기 기안동 신일해피트리 106동"},
                    {"name":"조커",  "gender":"남","hobby":"서예, 수묵화","address":"경기도 화성기 기안동 신일해피트리 207동"},
                    {"name":"변사또","gender":"여","hobby":"서예, 수묵화","address":"경기도 화성기 기안동 신일해피트리 307동"}
                ]
            }
        },

        created(){

            this.tableData = this.getTableData();
        }
    }
</script>
```
:::

