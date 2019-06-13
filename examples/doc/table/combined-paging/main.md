:::demo
```html
<template>
         <div class="mt30">
            <h3>페이징 넣기</h3>

            <div class="mt30">
                <anchor id="combined-paging" label="페이징 넣기" h4 ></anchor>
                <combined-paging></combined-paging>
            </div>
        </div>
</template>
<script>

    import combinedPaging from './combined-paging.md'

    export default{
        name: "combined-paging-main",
        components: {
            combinedPaging,
        }
    }
</script>
```
:::