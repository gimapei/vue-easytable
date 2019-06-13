:::demo 테이블과 페이징 컴포넌트 연결
```html
<template>
  <div>
      <v-table
              is-vertical-resize
              :vertical-resize-offset='60'
              is-horizontal-resize
              style="width:100%"
              :multiple-sort="false"
              :min-height="350"
              even-bg-color="#f2f2f2"
              :title-rows="tableConfig.titleRows"
              :columns="tableConfig.columns"
              :table-data="tableConfig.tableData"
              row-hover-color="#eee"
              row-click-color="#edf7ff"
              @sort-change="sortChange"
              :paging-index="(pageIndex-1)*pageSize"
      ></v-table>

       <div class="mt20 mb20 bold"></div>
                       <v-pagination @page-change="pageChange" @page-size-change="pageSizeChange" :total="50" :page-size="pageSize" :layout="['total', 'prev', 'pager', 'next', 'sizer', 'jumper']"></v-pagination>
       </div>
  </div>
</template>

<style>
    .title-cell-class-name-test1 {
        background-color: #2db7f5;
        color:#fff;
    }
    .title-cell-class-name-test2 {
        background-color: #f60;
        color:#fff;
    }
</style>

<script>

    import tableDate from '../../../mock/tableData2.js'

    export default{
        data(){
            return {
                pageIndex:1,
                pageSize:20,
                tableConfig: {
                    multipleSort: false,
                    tableData: [],
                    columns: [
                        {
                            field: 'custome', width: 50, titleAlign: 'center', columnAlign: 'center',
                            formatter: function (rowData, index,pagingIndex) {
                                var currentIndex = index+pagingIndex;
                                return currentIndex < 3 ? '<span style="color:red;font-weight: bold;">' + (currentIndex + 1) + '</span>' : currentIndex + 1
                            }, isFrozen: true
                        },
                        {field: 'name', width: 100, columnAlign: 'center', isFrozen: true},
                        {field: 'height', width: 100, columnAlign: 'center', isFrozen: true},
                        {field: 'gender', width: 90, columnAlign: 'center', isFrozen: false,isResize:true},

                        {field: 'address', width: 280, columnAlign: 'left',isResize:true},
                        {field: 'hobby', width: 180, columnAlign: 'center',isResize:true}

                    ],
                    titleRows: [
                                 [{fields: ['custome'], title: '정렬', titleAlign: 'center', rowspan: 2},
                                  {fields: ['name', 'height'], title: '기본정보', titleAlign: 'center', colspan: 2},
                                  {fields: ['gender','address','hobby'], title: '사용자 및 기타정보', titleAlign: 'center', colspan: 3}],

                                 [{fields: ['name'], title: '이름', titleAlign: 'center'},
                                  {fields: ['height'], title: '높이', titleAlign: 'center', orderBy: ''},
                                  {fields: ['gender'], title: '성별', titleAlign: 'center'},
                                  {fields: ['address'], title: '주소', titleAlign: 'center'},
                                  {fields: ['hobby'], title: '취미', titleAlign: 'center'}
                                  ],

                                 [{fields: ['custome','name','height'], title: '평균', titleAlign: 'center', colspan: 3,titleCellClassName:'title-cell-class-name-test1'},
                                   {fields: ['gender'], title: '111', titleAlign: 'center',titleCellClassName:'title-cell-class-name-test2'},
                                   {fields: ['address'], title: '222', titleAlign: 'center',titleCellClassName:'title-cell-class-name-test2'},
                                  {fields: ['hobby'], title: '333', titleAlign: 'center',titleCellClassName:'title-cell-class-name-test2'},
                                 ]
                               ],
                }
            }
        },
        methods:{
            getTableData(){

                this.tableConfig.tableData = tableDate.slice((this.pageIndex-1)*this.pageSize,(this.pageIndex)*this.pageSize)
            },
            pageChange(pageIndex){

                 this.pageIndex = pageIndex;
                 this.getTableData();
                 console.log(pageIndex)
            },
            pageSizeChange(pageSize){

                this.pageIndex = 1;
                this.pageSize = pageSize;
                this.getTableData();
           },
            sortChange(params){

                if (params.height.length > 0){

                    this.tableConfig.tableData.sort(function (a, b) {

                        if (params.height === 'asc'){

                           return a.height - b.height;
                        }else if(params.height === 'desc'){

                                return b.height - a.height;
                        }else{

                            return 0;
                        }
                    });
                }
            },
        },
        created(){
            this.getTableData();
        }
    }
</script>
```
:::