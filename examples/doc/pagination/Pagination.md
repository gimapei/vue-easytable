
## 기본사용방법
<anchor id="page-simple" label="간단한 인스턴스" h4 ></anchor>
:::demo 간단한 인스턴스
```html
<template>
      <v-pagination :total="600"></v-pagination>
</template>
```
:::

<anchor id="page-set-page-size" label="페이지 크기 설정" h4 ></anchor>
:::demo 페이지 크기 설정
```html
<template>
         <v-pagination :total="600" :page-size="30"></v-pagination>
</template>
```
:::

:::demo 페이지 번호가 변경되거나 페이지 수가 변경되면 페이지 매김 콜백이 트리거됩니다.
<anchor id="page-callback" label="페이지 매김 콜백" h4 ></anchor>
```html
<template>
          <v-pagination :total="600" @page-change="pageChange1" @page-size-change="pageSizeChange1"></v-pagination>
</template>
<script>

    export default{

        methods: {

            pageChange1(pageIndex){
                console.log(pageIndex)
            },

            pageSizeChange1(pageSize){
                console.log(pageSize)
            }
        }
    }
</script>
```
:::


## 크기 구성
<anchor id="page-set-size" label="페이징 크기 구성" h4 ></anchor>
:::demo 인스턴스
```html
<template>
       <div>
            <div>
                <v-pagination :total="600" size="small"></v-pagination>

            </div>

            <div class="mt20">
                <v-pagination :total="600" size="middle"></v-pagination>
            </div>

             <div class="mt20">
                 <v-pagination :total="600" size="large"></v-pagination>
             </div>
       </div>
</template>

```
:::



## 레이아웃 설정
<anchor id="page-set-layout" label="layout 설정" h4 ></anchor>
:::demo Layout 속성을 설정하여 Layout을 변경하십시오
```html
<template>
    <div>
        <div>
            <div class="mb20 bold">페이지번호 표시 안함</div>
             <v-pagination
                    :total="600"
                    :layout="['total', 'prev', 'next', 'sizer', 'jumper']">
             </v-pagination>
        </div>
        <div>
             <div class="mt30 mb20 bold">표시 순서 조정</div>
                 <v-pagination
                         :total="600"
                         :layout="['total', 'sizer', 'prev', 'pager', 'next', 'jumper']">
                 </v-pagination>
         </div>

          <div>
             <div class="mt30 mb20 bold">레이아웃 완료</div>
                 <v-pagination :total="600" :layout="['total', 'prev', 'pager', 'next', 'sizer', 'jumper']"></v-pagination>
             </div>
    </div>
</template>
```
:::

<anchor id="page-api" label="API" h3 ></anchor>
### Pagination props
| 매개변수      | 설명          | 종류      | 선택값                           | 기본값  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| layout | 레이아웃 설정, 자신의 비즈니스 시나리오와 일치시킬 수 있습니다 | Array | — | ['total', 'prev', 'pager', 'next', 'sizer', 'jumper'] |
| size | 페이징 구성 요소의 크기 설정 | string | small/middle/large | middle |
| total | 총데이타 수 | number | — | — |
| pageIndex | 현재 페이지 번호 | number | — | 1 |
| showPagingCount | 페이징 버튼 수 표시 | number | — | 5 |
| pageSize | 페이지당 크기 | number | — | 10 |
| pageSizeOption | 페이지 크기 당 드롭다운 구성 | Array | — | [10, 20, 30] |


### Pagination Event
| 이벤트 이름 | 설명 | 콜백 매개변수 |
|---------- |-------- |---------- |
| page-change | 페이지 번호 변경 콜백 | pageIndex |
| page-size-change|  각 페이지 크기 드롭 다운 상자는 콜백을 변경합니다.| newPageSize |

