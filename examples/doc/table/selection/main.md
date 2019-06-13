:::demo
```html
<template>
         <div class="mt30">
            <h3>다중선택</h3>

            <div class="mt30">
               <anchor id="selection" label="단순 다중선택" h4 ></anchor>
               <selection-simple></selection-simple>
           </div>

             <div class="mt30">
                  <anchor id="selection" label="복합 다중선택" h4 ></anchor>
                  <selection-advanced></selection-advanced>
              </div>
        </div>
</template>
<script>

    import selectionSimple from './selection-simple.md'
      import selectionAdvanced from './selection-advanced.md'

    export default{
        name: "selection-main",
        components: {
            selectionSimple,
            selectionAdvanced
        }
    }
</script>
```
:::