

:::demo 禁用情况下的전체선택

```html
<template>
   <div>
            <div class="mt30">
                   <div class="bold">전체선택</div>

                   <div>
                        <v-checkbox
                            @change="handleCheckAll"
                             :indeterminate="indeterminate"
                             v-model = "checkedAllModel"
                             label="전체선택"

                            ></v-checkbox>
                        <br/><br/>
                   </div>

                   <v-checkbox-group v-model="checkboxGroupDefaultValue" @change="handleCheckGroupChange">
                       <v-checkbox v-for="item in checkboxGroupInitValues" :disabled="item.disabled" :label="item.label"></v-checkbox>
                   </v-checkbox-group>
                   <br>
                   [{{checkboxGroupDefaultValue.join()}}]
            </div>
   </div>
</template>

<script>
export default{
    data(){
        return {

               checkboxGroupInitValues:[
                    {disabled:false,label:'호박'},
                    {disabled:false,label:'토마토'},
                    {disabled:false,label:'멜론'},
                    {disabled:false,label:'복숭아'},
                    {disabled:true,label:'멜론2'},
                    {disabled:false,label:'복숭아2'},
               ],

               checkboxGroupDefaultValue:['호박','멜론','복숭아','멜론2'],

               indeterminate:true,
               checkedAllModel:false
        }
    },

    computed:{

            // 是否全部选中
            hasAllChecked(){
                  return this.checkboxGroupInitValues.every(x=>{

                            return this.checkboxGroupDefaultValue.indexOf(x.label) > -1;
                      })
            },

            // 判断是否有部分选中
            hasPartChecked(){

                return this.checkboxGroupInitValues.some(x=>{

                            return this.checkboxGroupDefaultValue.indexOf(x.label) > -1;
                    })
            },

            // 禁用已选中的复选框
            disabledChecked(){

               let result=[];

               this.checkboxGroupInitValues.filter(x=>{

                    if (x.disabled && this.checkboxGroupDefaultValue.indexOf(x.label) > -1){
                         result.push(x.label);
                    }
               })
               return result;
            },

            // 禁用未选中的复选框集合
            disabledUnChecked(){

               let result=[];

               this.checkboxGroupInitValues.filter(x=>{

                    if (x.disabled && this.checkboxGroupDefaultValue.indexOf(x.label) === -1){
                           result.push(x.label);
                    }
               })
               return result;
            },
    },

    methods:{

        // 전체선택
        checkAll(){

            let all = this.checkboxGroupInitValues.map(item=>{

               return item.label;
            })

            // 排除禁用不选中的
            if (this.disabledUnChecked.length > 0){

                all = all.filter(x=>{

                    return this.disabledUnChecked.indexOf(x) === -1;
                })
                this.indeterminate = true;
                this.checkedAllModel = false;
            }else{

                this.indeterminate = false;
                this.checkedAllModel = true;
            }


            this.checkboxGroupDefaultValue = all;
        },

        unCheckAll(){

            this.checkboxGroupDefaultValue = this.disabledChecked;

            if (this.disabledChecked.length > 0){
                this.indeterminate = true;
            }else{
                this.indeterminate = false;
            }

            this.checkedAllModel = false;
        },

        handleCheckAll(){

            if (this.checkedAllModel){

                 this.checkAll();
            }else{

                 this.unCheckAll();
            }
        },

        // checkbox-group change
        handleCheckGroupChange(){
            console.log(1111)
            if (this.hasAllChecked){

                this.checkedAllModel = true;
                this.indeterminate = false;

            }else if(this.hasPartChecked){

                this.indeterminate = true;

            }else{

                this.indeterminate = false;
                this.checkedAllModel = false;
            }
        }
    }
}
</script>
```
:::



