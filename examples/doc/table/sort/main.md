:::demo
```html
<template>
         <div class="mt30">
            <h3>정렬</h3>

            <div class="mt30">
               <anchor id="single-columns-sort" label="단일필드 정렬" h4 ></anchor>
               <single-columns-sort></single-columns-sort>
           </div>

           <div class="mt30">
              <anchor id="multiple-columns-sort" label="복합필드 정렬" h4 ></anchor>
              <multiple-columns-sort></multiple-columns-sort>
          </div>
        </div>
</template>
<script>

    import singleColumnsSort from './single-columns-sort.md'
    import multipleColumnsSort from './multiple-columns-sort.md'

    export default{
        name: "sort-main",
        components: {
            singleColumnsSort,
            multipleColumnsSort
        }
    }
</script>
```
:::