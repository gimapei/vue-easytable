:::demo 복소 필터 결과에 나타난 헤더 것을 제외 간단한 헤더 유사한 방법을 사용하여 테이블 `filters`뿐만 아니라 `filterMultiple`하여 구성 `titleRows`상세한 데모로서 설정
 ```html

<template>
    <div>
        <v-table
                is-horizontal-resize
                style="width:100%"
                :columns="columns"
                :title-rows="titleRows"
                :table-data="tableData"
                :filter-method="filterMethod"
        ></v-table>
    </div>
</template>

<script>

    export default{
        name: 'complex-header-filters',
        data(){
            return {
                tableData: [],
                columns: [
                    {field: 'name', title: '이름', width: 80, columnAlign:'center',isResize:true},
                    {field: 'gender', title: '성별', width: 50,columnAlign:'center',isResize:true},
                    {field: 'hobby', title: '취미', width: 150,columnAlign:'center',isResize:true},
                    {field: 'address', title: '주소',width: 280,isResize:true}
                ],
                titleRows:[
                    [
                        {fields:["name","gender"],title:"기본정보", titleAlign: 'center', colspan: 2},
                        {fields: ['hobby'], title: '취미', titleAlign: 'center',rowspan: 2},
                        {fields: ['address'], title: '주소', titleAlign: 'center',rowspan: 2}
                    ],
                    [
                        {fields: ['name'], title: '이름', titleAlign: 'center',
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
                            }]},
                        {fields: ['gender'], title: '성별', titleAlign: 'center',
                            filterMultiple: false,
                            filters: [{
                                label: '남',
                                value: '남',
                            }, {
                                label: '여',
                                value: '여',
                            }]}
                    ]
                ]
            }
        },
        methods: {

            // 数据筛选
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
                    {"name":"조커",  "gender":"여","hobby":"서예, 수묵화","address":"경기도 화성기 기안동 신일해피트리 207동"},
                    {"name":"변사또","gender":"남","hobby":"서예, 수묵화","address":"경기도 화성기 기안동 신일해피트리 307동"}
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