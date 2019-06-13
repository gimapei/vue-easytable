:::demo
```html
<template>
         <div class="mt30">
            <h3>커스텀 컬럼</h3>

            <div class="mt30">
               <anchor id="custom-columns" label="커스텀 컬럼" h4 ></anchor>
               <custom-columns></custom-columns>
           </div>
        </div>
</template>
<script>

    import customColumns from './custom-columns.md'

    export default{
        name: "custom-columns-main",
        components: {
            customColumns
        }
    }
</script>
```
:::