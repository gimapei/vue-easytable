:::demo

```html
<template>
<div>

    <div class="mt30">
         <h3>단독 체크박스</h3>
         <checkbox-single></checkbox-single>
    </div>
    <div class="mt30">
         <h3>복수 체크박스</h3>
         <checkbox-multiple-simple></checkbox-multiple-simple>
    </div>
    <div class="mt30">
         <h3>복수 체크박스 추가기능</h3>
         <checkbox-multiple-advanced></checkbox-multiple-advanced>
    </div>

</div>
</template>

<script>
import checkboxSingle from './checkbox-single.md'
import checkboxMultipleSimple from './checkbox-multiple-simple.md'
import checkboxMultipleAdvanced from './checkbox-multiple-advanced.md'
export default{
    components:{checkboxSingle,checkboxMultipleAdvanced,checkboxMultipleSimple}
}
</script>
```
:::