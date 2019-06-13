
### Table props
| 매개변수      | 설명          | 데이타타입      | 선택 값                           | 기본값  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| width | table 넓이 | number | — | — |
| min-width | table 최소넓이（넓이 자동조정이 설정된 경우만） | number |  —  |  —  |
| height | table 높이 | number | — | — |
| min-height | table 최소높이 （높이 자동조정이 설정된 경우만） | number | — | — |
| title-row-height | 테이블 해더 높이 | number | — | 38px |
| row-height | 열 높이 | string | — | 40px |
| footer-row-height | footer 열 높이 | number | — | 40 |
| is-horizontal-resize | 수평 적용을 가능하게 할 것인지 (창을 변경 한 후 테이블의 너비에 따라 자동으로 채우기), `setstyle="width:100%"`의 필요성에주의하십시오. | boolean | — | false |
| is-vertical-resize | 수직 적응을 활성화할지 여부 (켜기로 변경하면 창이 변경되고 테이블의 높이에 따라 자동으로 채워짐) | boolean | — | false |
| vertical-resize-offset | 수직 적응 옵셋은 테이블 아래에 페이지가있을 때 일반적으로 사용되어 적응의 일부가됩니다. | number | — | - |
| table-bg-color | 테이블 배경색  | string | — | #fff |
| title-bg-color | 테이블 해더 배경색 | string | — | #fff |
| odd-bg-color | 홀수줄 배경색  | string | — |  |
| even-bg-color | 짝수줄 배경색 | string | — |  |
| multiple-sort | 복합 정렬 | boolean | — | true |
| sort-always | 항상 정렬 | boolean | — | false |
| table-data | 테이블 데이타  | - | — | array |
| columns | 컬럼들  | array | — | — |
| title-rows | 해더 줄들  | array | — | — |
| paging-index | 페이징 인덱스  | number | — | — |
| error-content | 데이터가 없을때 표시되는 내용 | html/string | — | ’暂无数据‘ |
| error-content-height | 데이터가 억을때 표시되는 영역의 높이 | number | — | 50px |
| is-loading |  로드 중일 때 비동기 요청은 표시 할 설정을 종료합니다. | boolean | — | false |
| loading-content | 로딩시 컨텐츠 | html/string | — | loading 菊花效果 |
| loading-opacity | 로딩시 투명도 | number | 0~1 | 0.6 |
| row-hover-color | 행에 마우스 올라갈경우 색상 | string | — | - |
| row-click-color | 행 선택시 색상 | string | — | — |
| show-vertical-border | 세로 테두리 보이기  | boolean | — | true |
| show-horizontal-border | 가로 테두리 보이기 | boolean | — | true |
| column-width-drag | 컬럼 드래그 크기 조정여부 | boolean | — | false |
| row-click | 행 클릭이벤트 | Function({rowIndex, rowData, column}) | — | — |
| row-dblclick | 행 더블클릭 이벤트 | Function({rowIndex, rowData, column}) | — | — |
| title-click | 해더 클릭 이벤트 | Function({title,field}) | — | — |
| title-dblclick | 해더 더블클릭 이벤트 | Function({title,field}) | — | — |
| row-mouse-enter|  행 마우스 진입 이벤트 | Function({rowIndex}) | — | — |
| row-mouse-leave|  행 마우스 이탈 이벤트 |  Function({rowIndex}) | — | — |
| filter-method|  필터 함수 |  Function({filters}) | — | — |
| cell-edit-done|  셀 편집완료 이벤트 |  Function({newValue,oldValue,rowIndex,rowData,field})| — | — |
| cell-merge|  셀 병합, rowSpan, colSpan, 반환 값 지원 `{colSpan: 1,rowSpan: 1,content: '',componentName: ''}`, 병합 된 셀의 내용은 content(html) 또는 `componentName`(custom 구성 요소) 설정을 통해 설정할 수 있습니다.| Function({rowIndex,rowData,field})| — | — |
| select-all| 전체선택 이벤트 | Function({selection}) 매개변수 설명: selection 현재 선택된 항목 컬렉션 | — | — |
| select-change| 선택변경 이벤트 | Function({selection,rowData}) 매개변수 설명：selection현재 선택된 항목세트，rowData현재선택된 항목| — | — |
| select-group-change| 그룹선택 변경 |Function({selection}) 매개변수 설명:  selection현재 선택된 항목 컬렉션  | — | — |
| column-cell-class-name| 컬럼 셀 스타일명 | Function({rowIndex,columnName,rowData})  | — | — |





### columns（Table props）
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| field | 对应列的字段 | string | — | — |
| title | 列头显示文字 | string | — | — |
| width | 每一列的宽度，列设置横向自适应`is-horizontal-resize:true`时，必须要设置值 |number  | — | — |
| titleAlign | 表头列内容对齐方式 | string | left/center/right | — |
| columnAlign | 标体列内容对齐方式 | string | left/center/right | — |
| formatter | 用来格式化内容 | Function(rowData,rowIndex,pagingIndex,field) | — | — |
| componentName | 自定义列传入组件的名字 | string | — | — |
| titleCellClassName| 表头单元格设置className | string | — | — |
| isFrozen | 此列是否要固定 | boolean | — | false |
| isResize | 此列是否要自适应，前提是设置了`is-horizontal-resize:true` |  boolean| — | false |
| orderBy | 排序规则 | string | asc/desc | — |
| isEdit | 是否启用单元格编辑 | boolean | — | false |
| overflowTitle | 是否内容超出显示title提示 | boolean | — | false |
| filters | 数据过滤条件，具体格式见demo | array | — | - |
| filterMultiple | 是否支持过滤条件多选 | boolean | — | false |


### title-rows（Table props）
只处理复杂表头信息时用到。需要配置 `columns` 一起使用，具体用法参考复杂表头实例
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| fields | 此列跨几个字段 | array | — | — |
| title | 列头显示文字，`columns` 中不用配置 | string | — | — |
| titleAlign | 表头列内容对齐方式，`columns` 中不用配置 | string  | — | — |
| rowspan | 合并行的数目 | number | — | — |
| colspan | 合并列的数目 | number | — | — |
| orderBy | 排序规则，`columns` 中不用配置 | string | asc/desc  | — |

### footer（Table props）
表格footer
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| - | 数组集合，每一个子数组为一行代表当前的汇总信息 | array | — | — |


### table-data（Table props）
table 表格数据，通过设置一些特殊属性实现某些功能，如 checkbox 多选功能
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| _checked | 是否选中（当开启多选时有效） | boolean | — | false |
| _disabled | 是否禁用选中\未选中（当开启多选时有效） | boolean | — | false |


### Table Event（注意传入的‘事件名称’必须和api保持一致）

| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| on-custom-comp | 自定义列为组件时，子组件与父组件通讯的方法 | params （参数为任意类型，根据业务场景随意构造，由自定义组件设置） |
| sort-change    | 点击排序回调| params 参数说明: 参数为排序的列对象信息，形如：```{name: "asc", tel: "desc"}``` | — | — |


### Table Methods
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| resize| 强制自适应（当表格有显示隐藏切换时需要用到） | — |
| clearCurrentRow| 取消当前选中的行 | — |
| resetOrder| 重置还原排序规则，同时会触发`sort-change`事件 | — |
| scrollToTop| 回到顶部的方法（当有垂直滚动条时） | — |


### Table Classes
表格样式订制
| 样式名称 | 说明  |
|---------- |-------- |
| v-table-class| 表格样式名称 |
| v-table-title-class| 表格头样式名称 |
| v-table-body-class| 表格体样式名称 |
| v-table-footer-class| 表格footer样式名称 |
| v-scrollbar-wrap| 表格滚动条样式名称（如果需要对表格滚动条样式进行订制，需要通过这个样式设置） |

