
## 설치

### CDN 방식

[https://unpkg.com/vue-easytable/](https://unpkg.com/vue-easytable/) 

```css
<!-- 스타일 -->
<link rel="stylesheet" href="https://unpkg.com/vue-easytable/umd/css/index.css">
<!-- Vue -->
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<!-- 컴포넌트 -->
<script src="https://unpkg.com/vue-easytable/umd/js/index.js"></script>
```

### 예제
``` html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <!-- 스타일 -->
    <link rel="stylesheet" href="https://unpkg.com/vue-easytable/umd/css/index.css">
</head>
<body>
<div id="app">
    <v-table
            :width="1000"
            :columns="columns"
            :table-data="tableData"
            :show-vertical-border="false"
    ></v-table>
</div>
</body>
<!-- Vue -->
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<!-- 컴포넌트 -->
<script src="https://unpkg.com/vue-easytable/umd/js/index.js"></script>
<script>
    new Vue({
        el: '#app',
        data: function() {
            return {
                tableData: [
                    {"name":"홍길동","tel":"156*****1987","hobby":"서예, 수묵화","address":"경기도 화성기 기안동 신일해피트리 110동"},
                    {"name":"강남길","tel":"182*****1538","hobby":"서예, 수묵화","address":"경기도 화성기 기안동 신일해피트리 101동"},
                    {"name":"아이유","tel":"161*****0097","hobby":"서예, 수묵화","address":"경기도 화성기 기안동 신일해피트리 106동"},
                    {"name":"조커","tel":"197*****1123","hobby":"서예, 수묵화","address":"경기도 화성기 기안동 신일해피트리 207동"},
                    {"name":"변사또","tel":"183*****6678","hobby":"서예, 수묵화","address":"경기도 화성기 기안동 신일해피트리 307동"}
                ],
                columns: [
                    {field: 'name', title:'이름', width: 150, titleAlign: 'center',columnAlign:'center', isFrozen: true},
                    {field: 'tel', title: '전화번호', width: 280, titleAlign: 'center',columnAlign:'center', isFrozen: true},
                    {field: 'hobby', title: '취미', width: 380, titleAlign: 'center',columnAlign:'center'},
                    {field: 'address', title: '주소', width: 430, titleAlign: 'center',columnAlign:'left'}
                ]
            }
        }
    })
</script>
</html>
```

### NPM 방식

```javascript
npm install vue-easytable --save-dev
```

```javascript
// 스타일
import 'vue-easytable/libs/themes-base/index.css'
// 컴포넌트
import {VTable,VPagination} from 'vue-easytable'

// vue에  등록
Vue.component(VTable.name, VTable)
Vue.component(VPagination.name, VPagination)
```
