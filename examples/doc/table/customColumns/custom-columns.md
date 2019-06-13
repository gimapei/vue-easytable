:::demo **맞춤 열의 일반적인 사용** :작성자 formatter의 현재 데이터의 함수 간단한 가공이 방법은 수신 `rowData`, `rowIndex`, `pagingIndex`, `field`보정 데이터로서 **사용자 지정 열 고급 사용** :함으로써 `componentName` VUE 성분을 전달하는 컴포넌트는 사용자 수신처 `rowData`, `field`, `index`콜백 데이터로하는 단계; 들어오는 이벤트를 통해 `on-custom-comp`하위 구성 요소와 상위 구성 요소 를 통신하는 목적입니다.
```html
<template>
    <v-table
            is-horizontal-resize
            style="width:100%"
            :columns="columns"
            :table-data="tableData"
            row-hover-color="#eee"
            row-click-color="#edf7ff"
            @on-custom-comp="customCompFunc"
    ></v-table>
</template>

<script>

    import Vue from 'vue'

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
                        {
                            field: 'custome', title:'번호', width: 50, titleAlign: 'center', columnAlign: 'center',
                            formatter: function (rowData,rowIndex,pagingIndex,field) {
                                return rowIndex < 3 ? '<span style="color:red;font-weight: bold;">' + (rowIndex + 1) + '</span>' : rowIndex + 1
                            }, isFrozen: true,isResize:true
                        },
                        {field: 'name', title:'이름', width: 80, titleAlign: 'center',columnAlign:'center',isResize:true},
                        {field: 'tel', title: '전화번호', width: 150, titleAlign: 'center',columnAlign:'center',isResize:true},
                        {field: 'hobby', title: '취미', width: 150, titleAlign: 'center',columnAlign:'center',isResize:true},
                        {field: 'address', title: '주소', width: 230, titleAlign: 'center',columnAlign:'left',isResize:true},
                        {field: 'custome-adv', title: '수술',width: 200, titleAlign: 'center',columnAlign:'center',componentName:'table-operation',isResize:true}
                    ]

            }
        },
        methods:{
            customCompFunc(params){

                console.log(params);

                if (params.type === 'delete'){ // do delete operation

                    this.$delete(this.tableData,params.index);

                }else if (params.type === 'edit'){ // do edit operation

                    alert(`行号：${params.index} 姓名：${params.rowData['name']}`)
                }

            }
        }
    }

    // 사용자 정의 열 구성요소
    Vue.component('table-operation',{
        template:`<span>
        <a href="" @click.stop.prevent="update(rowData,index)">수정</a>&nbsp;
        <a href="" @click.stop.prevent="deleteRow(rowData,index)">삭제</a>
        </span>`,
        props:{
            rowData:{
                type:Object
            },
            field:{
                type:String
            },
            index:{
                type:Number
            }
        },
        methods:{
            update(){

               // 매개변수는 비즈니스 요구에 따라 임의로 구성합니다. 
               let params = {type:'edit',index:this.index,rowData:this.rowData};
               this.$emit('on-custom-comp',params);
            },

            deleteRow(){

               // 매개변수는 비즈니스 요구에 따라 임의로 구성합니다. 
                let params = {type:'delete',index:this.index};
                this.$emit('on-custom-comp',params);

            }
        }
    })
</script>
```
:::