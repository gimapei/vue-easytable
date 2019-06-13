:::demo
```html
<template>
         <div class="mt30">
            <h3>기본 사용법</h3>

            <div class="mt30">
                <anchor id="set-table-width" label="기본사용법，마지막열 넓이 미설정" h4 ></anchor>
                <basic-set-table-width></basic-set-table-width>
            </div>
            <div class="mt30">
                <anchor id="no-table-width" label="기본사용법，각열의 너비만 설정" h4 ></anchor>
                <basic-no-table-width></basic-no-table-width>
            </div>
        </div>
</template>
<script>

    import basicSetTableWidth from './basic-set-table-width.md'
    import basicNoTableWidth from './basic-no-table-width.md'



    export default{
        name: "basic-main",
        components: {
            basicSetTableWidth,
            basicNoTableWidth
        }
    }
</script>
```
:::