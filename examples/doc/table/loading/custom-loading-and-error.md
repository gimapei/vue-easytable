:::demo `loading-content` 로 사용자 정의 로딩효과를 제공함 `error-content` 로 실패시 사용자 정의 효과를 제공
```html
<template>
    <div>
        <input type="button" value="다시요청" @click="request()"/>

        <v-table
                is-horizontal-resize
                :loading-content="loadingContent"
                :error-content="errorContent"
                :is-loading="isLoading"
                style="width:100%"
                :columns="columns"
                :table-data="tableData"
        ></v-table>
    </div>
</template>

<script>

    export default{
        data() {
            return {
                loadingContent:'<span>읽는중...</span>',
                errorContent:'<a href="javascript:void(0);">새로고침</a>',
                isLoading: true, 
                tableData: [],
                columns: [
                    {field: 'name', title: '이름', width: 80, titleAlign: 'center', columnAlign: 'center',isResize: true},
                    {field: 'tel', title: '전화번호', width: 80, titleAlign: 'center', columnAlign: 'center',isResize: true},
                    {field: 'hobby', title: '취미', width: 80, titleAlign: 'center', columnAlign: 'center',isResize: true},
                    {field: 'address',title: '주소', width: 280,titleAlign: 'center',columnAlign: 'left',isResize: true}
                ]
            }
        },
        methods: {

            request(){
                this.isLoading = true;

                var r = Math.random();

                setTimeout(x => {
                    this.isLoading = false;

                    if (r > 0.5) {
                        this.tableData = [];
                    } else {
                        this.tableData = [
                    {"name":"홍길동","tel":"156*****1987","hobby":"서예, 수묵화","address":"경기도 화성기 기안동 신일해피트리 110동"},
                    {"name":"강남길","tel":"182*****1538","hobby":"서예, 수묵화","address":"경기도 화성기 기안동 신일해피트리 101동"},
                    {"name":"아이유","tel":"161*****0097","hobby":"서예, 수묵화","address":"경기도 화성기 기안동 신일해피트리 106동"},
                    {"name":"조커","tel":"197*****1123","hobby":"서예, 수묵화","address":"경기도 화성기 기안동 신일해피트리 207동"},
                    {"name":"변사또","tel":"183*****6678","hobby":"서예, 수묵화","address":"경기도 화성기 기안동 신일해피트리 307동"}
                        ];
                    }

                }, 3000);
            }
        },

        created(){

            this.request();
        }
    }
</script>
```
:::