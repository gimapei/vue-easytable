:::demo
```html
<template>
         <div class="mt30">
            <h3>숨겨진 테이블</h3>

            <div class="mt30">
               <anchor id="hide-table" label="숨겨진 테이블" h4 ></anchor>
               <hide-table></hide-table>
           </div>
        </div>
</template>
<script>

    import hideTable from './hide-table.md'

    export default{
        name: "hide-table-main",
        components: {
            hideTable
        }
    }
</script>
```
:::