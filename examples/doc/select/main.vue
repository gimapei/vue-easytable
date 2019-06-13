<template>
    <div>
       <div>
           <h3>기본정보</h3>
           <v-select name="basic"
                     v-model="selectReportTypes1"
                     placeholder="이름"
           >
           </v-select>

           <h3>다중 선택 기능</h3>
           <v-select name="basic"
                     is-multiple
                     v-model="selectReportTypes2"
                     placeholder="이름"
           >
           </v-select>

           <h3>단일 성정 크기</h3>
           <v-select name="basic"
                     v-model="selectReportTypes3"
                     placeholder="이름"
                     size="small"
           >
           </v-select>
           <v-select name="basic"
                     v-model="selectReportTypes3"
                     placeholder="이름"
                     size="middle"
           >
           </v-select>
           <v-select name="basic"
                     v-model="selectReportTypes3"
                     placeholder="이름"
                     size="large"
           >
           </v-select>

           <h3>다중 선택 크기 (드롭다운은 구현되지 않음)</h3>
           <v-select name="basic"
                     v-model="selectReportTypes3"
                     placeholder="이름"
                     is-multiple
                     size="small"
           >
           </v-select>
           <v-select name="basic"
                     v-model="selectReportTypes3"
                     placeholder="이름"
                     is-multiple
                     size="middle"
           >
           </v-select>
           <v-select name="basic"
                     v-model="selectReportTypes3"
                     placeholder="이름"
                     is-multiple
                     size="large"
           >
           </v-select>
       </div>
    </div>
</template>

<script>
    export default{

        data(){

            return {

                selectReportTypes1: [
                    {value: 0, label: '장삼'},
                    {value: 1, label: '이풍'},
                    {value: 2, label: '왕이'}
                ],

                selectReportTypes2: [
                    {value: 0, label: '장삼'},
                    {value: 1, label: '이풍'},
                    {value: 2, label: '왕이'}
                ],

                selectReportTypes3: [
                    {value: 0, label: '장삼'},
                    {value: 1, label: '이풍'},
                    {value: 2, label: '왕이'}
                ],
            }
        }

    }
</script>