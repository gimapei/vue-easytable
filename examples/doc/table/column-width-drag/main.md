:::demo
```html
<template>
         <div class="mt30">
            <h3>열 넓이 드래그</h3>

            <div class="mt30">
               <anchor id="column-width-drag" label="열 넓이 드래그" h4 ></anchor>
               <column-width-drag></column-width-drag>
           </div>
        </div>
</template>
<script>

    import columnWidthDrag from './column-width-drag.md'

    export default{
        name: "column-width-drag-main",
        components: {
            columnWidthDrag
        }
    }
</script>
```
:::