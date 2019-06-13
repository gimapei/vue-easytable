:::demo 제공 `footer`정보 요약 테이블을 추가 오브젝트의 배열을, 꼬리말 요약 정보는 복수의 행이 제공 될 수있다 , <br>각 서브 어레이는 하나의 라인의 개요를 나타내는 으로 `footer-cell-class-name`각 셀 패턴의 속성 바닥 글으로 `footer-row-height`각각의 바닥 글 행 높이의 특성 (기본 40px) 참고 : 요약 정보 형식의 불확실성으로 인해 요약, 평균, 최대, 최소, 제품 등이 있으며 예약 된 자릿수는 고정되어 있지 않습니다. 따라서 요약 정보는 발신자가 제공합니다 !
```html
<template>
    <div>
        <v-table
                is-horizontal-resize
                style="width:100%"
                :height="260"
                :columns="columns"
                :table-data="tableData"
                :footer-cell-class-name="setFooterCellClass"
                :footer="footer"
                :footer-row-height="40"
        ></v-table>
    </div>
</template>

<style>
    .footer-cell-class-name-title {
        background-color: #f60;
        color: #fff;
    }

    .footer-cell-class-name-normal {

        color: red;
    }

</style>

<script>

    export default{
        data() {
            return {
                tableData: [
                    {"name": "홍길동", "amount1": "2", "amount2": "3", "amount3":  "15"},
                    {"name": "주성치", "amount1": "5", "amount2": "4", "amount3":  "15"},
                    {"name": "아이유", "amount1": "3", "amount2": "9", "amount3":  "15"},
                    {"name": "주윤발", "amount1": "6", "amount2": "10", "amount3": "15"},
                    {"name": "성시경", "amount1": "1", "amount2": "12", "amount3": "15"}
                ],
                columns: [
                    {field: 'name',title: '이름',width: 100,titleAlign: 'center',columnAlign: 'center',isFrozen: true},
                    {field: 'amount1',title: '값1',width: 200,titleAlign: 'center',columnAlign: 'center',isResize: true},
                    {field: 'amount2',title: '값2',width: 230,titleAlign: 'center',columnAlign: 'center',isResize: true},
                    {field: 'amount3',title: '값3',width: 208,titleAlign: 'center',columnAlign: 'left',isResize: true}
                ],
                footer: []
                /* footer 데이타 구조
                 footer: [
                    ['최소값',1,3,'-'],
                    ['합계',17,38,'-']
                 ]
                */
            }
        },

        methods: {

            setFooterData(){

                let result = [],
                    amounts1 = this.tableData.map(item => {
                        return item.amount1
                    }),
                    amounts2 = this.tableData.map(item => {
                        return item.amount2
                    });

                let minVal = ['최소값'];
                minVal.push(Math.min.apply(null, amounts1)+' ￥');
                minVal.push(Math.min.apply(null, amounts2)+' ￥');
                minVal.push('-');


                let sumVal = ['합계'];
                sumVal.push(
                    amounts1.reduce((prev, curr) => {

                        return parseInt(prev) + parseInt(curr);
                    }, 0)+' ￥'
                )

                sumVal.push(
                    amounts2.reduce((prev, curr) => {

                        return parseInt(prev) + parseInt(curr);
                    }, 0)+' ￥'
                )

                sumVal.push('-');


                result.push(minVal);
                result.push(sumVal);

                this.footer = result;
            },

            // footer-cell-class 설정
            setFooterCellClass(rowIndex, colIndex, value){

                if (colIndex === 0) {

                    return 'footer-cell-class-name-title'
                } else {

                    return 'footer-cell-class-name-normal'
                }
            }

        },

        created(){

            this.setFooterData();
        }
    }
</script>
```
:::