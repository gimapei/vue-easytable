## 빠른시작



### 전역설정 ( 테이블 글꼴 및 스타일 )

표의 글꼴과 글꼴 크기는 기본적으로 전역 설정에 의존하는 글꼴로 설정되어 있습니다. 설정이 필요한 경우 공개 클래스를 사용할 수 있습니다.

힌트 : 다음 스타일은 전역 구성의 역할을 수행하기 위해 전역에 배치됩니다. 각 구성 요소에 배치되면 현재 구성 요소의 테이블 스타일에만 영향을 미칩니다.

**전체 테이블의 글꼴을 설정하십시오.**
```css
.v-table-class{
   /*font-size: 14px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;*/
}
```

**테이블 해더 설정**
```css
.v-table-title-class {
   /*font-weight: normal;
    color: #333333;
    text-shadow: 0 0 0 #333333;*/
}
```

**테이블 바디 설정**
```css
.v-table-body-class {
  /*font-weight: normal;
    color: #333333;
    text-shadow: 0 0 0 #333333;*/
}
```

**테이블 Footer 설정**
```css
.v-table-footer-class {
  /*font-weight: normal;
    color: #333333;
    text-shadow: 0 0 0 #333333;*/
}
```

### 테이블 내부 스크롤막대 스타일 설정

전역 스크롤 막대 스타일이 설정된 경우 자동으로 전역 스타일에 따라 달라지며 테이블에 대해 내부적으로 .v-scrollbar-wrap설정 해야하는 경우 설정할 수 있습니다 . 예 :

```css
.v-scrollbar-wrap::-webkit-scrollbar-track
    {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        border-radius: 10px;
        background-color: #F5F5F5;
    }

    .v-scrollbar-wrap::-webkit-scrollbar
    {
        height:12px;
        width:10px;
        background-color: #F5F5F5;
    }

    .v-scrollbar-wrap::-webkit-scrollbar-thumb
    {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
        background-color: #666;
    }
```
또한 [예제를 온라인으로 볼수 있습니다.](https://jsfiddle.net/huangsw/nqe3qogv/)





