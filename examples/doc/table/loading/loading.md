:::demo 양식 데이터가 더 느리게 반환되면 로드 효과를 사용할 수 있습니다.사용 방법 :기본 설정은 `is-loading`이다`true`테이블 데이터가 반환 될 때로드 `false` 오프로 설정

```html
<template>
    <div>
        <input type="button" value="다시요청" @click="request()"/>
        <v-table
                is-horizontal-resize
                :is-loading="isLoading"
                style="width:100%"
                :columns="columns"
                :table-data="tableData"
                row-hover-color="#eee"
                row-click-color="#edf7ff"
        ></v-table>
    </div>
</template>

<script>

    export default{
        data() {
            return {
                  isLoading: true,
                  tableData: null,
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
                        this.tableData = null;
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