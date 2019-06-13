:::demo
```html
<template>
         <div class="mt30">
            <h3>세로방향 테이블 사이즈 조정</h3>

            <div class="mt30">
                <anchor id="vertical-table-resize" label="세로방향 테이블 사이즈 조정" h4 ></anchor>
                <vertical-table-resize></vertical-table-resize>
            </div>
        </div>
</template>
<script>

    import verticalTableResize from './vertical-table-resize.md'

    export default{
        name: "vertical-resize-main",
        components: {
            verticalTableResize,
        }
    }
</script>
```
:::