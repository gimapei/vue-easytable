<template>
    <div class="main">

        <div class="main-banner">
            <div class="main-banner-title">
                <span><i style="font-size:20px" class="icon iconfont icon-table"></i>&nbsp;vue-easytable</span>
                <span class="main-banner-title-items">
                    <a class="main-banner-title-item" href="https://github.com/huangshuwei/vue-easytable">
                        <i class="icon iconfont icon-github"></i>&nbsp;&nbsp;github</a>
                    <a class="main-banner-title-item" href="https://github.com/huangshuwei/vue-easytable/releases">
                        <i class="icon iconfont icon-gengxinrizhi"></i>&nbsp;&nbsp;최종수정일</a>
                </span>
            </div>
        </div>

        <div class="main-wrapper">
            <!--左侧菜单-->
            <div class="main-wrapper-sidebar">
                <ul class="menu-root">
                    <li>
                        <a class="main-wrapper-sidebar-link" href="javascript:javascript:void(0);">시작일</a>
                        <ul class="menu-sub">
                            <li>
                                <router-link to="/intro">소개</router-link>
                            </li>
                            <li>
                                <router-link to="/install">설치</router-link>
                            </li>
                            <li>
                                <router-link to="/start">빠른시작</router-link>
                            </li>
                        </ul>

                        <a class="main-wrapper-sidebar-link" href="javascript:javascript:void(0);">table 컴포넌트</a>
                        <ul class="menu-sub">
                            <li>
                                <router-link to="/table/basic">기본 사용</router-link>
                            </li>
                            <li>
                                <router-link to="/table/horizontalResize">가로크기 재조정</router-link>
                            </li>
                            <li>
                                <router-link to="/table/verticalResize">세로크기 재조정</router-link>
                            </li>
                            <li>
                                <router-link to="/table/customColumns">커스텀 컬럼</router-link>
                            </li>
                            <li>
                                <router-link to="/table/cellStyle">셀 스타일</router-link>
                            </li>
                            <li>
                                <router-link to="/table/columnWidthDrag">컬럼 크기 드래그</router-link>
                            </li>
                            <li>
                                <router-link to="/table/selection">멀티 선택</router-link>
                            </li>
                            <li>
                                <router-link to="/table/cellEdit">셀 수정</router-link>
                            </li>
                            <li>
                                <router-link to="/table/cellMerge">셀 통합</router-link>
                            </li>
                            <li>
                                <router-link to="/table/conditionFilters">필터</router-link>
                            </li>
                            <li>
                                <router-link to="/table/footerSummary">footer 종합</router-link>
                            </li>
                            <li>
                                <router-link to="/table/loading">loading</router-link>
                            </li>
                            <li>
                                <router-link to="/table/sort">정렬</router-link>
                            </li>
                            <li>
                                <router-link to="/table/fixedColumnsTitle">고정 컬럼</router-link>
                            </li>
                            <li>
                                <router-link to="/table/hideTable">숨김 테이블</router-link>
                            </li>
                            <li>
                                <router-link to="/table/combinedPaging">페이징 넣기</router-link>
                            </li>
                            <li>
                                <router-link to="/table/api">API</router-link>
                            </li>
                        </ul>

                        <a class="main-wrapper-sidebar-link" href="javascript:javascript:void(0);">페이징 컴포넌트</a>
                        <ul class="menu-sub">
                            <li>
                                <router-link to="/pagination">페이징</router-link>
                            </li>
                        </ul>

                        <template v-if="showHide">
                            <a class="main-wrapper-sidebar-link" href="javascript:javascript:void(0);">기본탑재 컴포넌트</a>
                            <ul class="menu-sub">
                                <li>
                                    <router-link to="/select">Select</router-link>
                                </li>
                                <li>
                                    <router-link to="/checkbox">Checkbox</router-link>
                                </li>
                                <li>
                                    <router-link to="/dropdown">Dropdown</router-link>
                                </li>
                            </ul>
                        </template>

                    </li>
                </ul>
            </div>

            <!--主体内容 Start-->
            <div class="main-wrapper-container">
                <router-view></router-view>
            </div>
            <!--主体内容 End-->
        </div>

        <div class="main-footer">
            <div>
                <span><i class="iconfont icon-github"></i><a href="https://github.com/huangshuwei/vue-easytable"> GitHub</a></span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span>Created by <a href="https://github.com/huangshuwei">huangsw</a></span>
            </div>
        </div>

        <!--回到顶部-->
        <div>
            <div class="main-back-top" v-show="showBackTop">
                <i @click="goBackTop()" class="icon iconfont icon-huidaodingbu-copy main-back-top-icon"></i>
            </div>

        </div>

        <!--目录-->
        <div>
            <catolog :catalog-data="catalogData"></catolog>
        </div>

    </div>
</template>

<script>

    import catolog from './catalog.vue'

    export default{
        name: "App",
        components: {catolog},
        data(){
            return {
                showBackTop: false,
                catalogData: [],
                showHide:false // 是否显示内置组件
            }
        },
        methods: {
            goBackTop(){

                window.scroll(0,0);
            },

            handleScroll(){

                var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop || window.scrollY;

                this.showBackTop = scrollTop > 600 ? true : false;
            },

            anchorLink(to){

                let query = to.query;

                if (query && query.anchor) {

                    this.$nextTick(x => {
                        let anchor = this.$el.querySelector('#' + query.anchor);

                        if (anchor && anchor.offsetTop) {

                            window.scroll(0, anchor.offsetTop)
                        }
                    })
                }


                this.$nextTick(x => {

                    let anchorLinkArr = this.$el.querySelectorAll(".anchor-link"),
                        catalogData = [];

                    console.log(anchorLinkArr);

                    if (anchorLinkArr && anchorLinkArr.length > 0) {

                        for (var i = 0, len = anchorLinkArr.length; i < len; i++) {

                            catalogData.push({id: anchorLinkArr[i].id, label: anchorLinkArr[i].getAttribute('label')})
                        }
                    }


                    this.catalogData = catalogData;
                })
            },

            // select、checkbox、dropdown 等组件都是内置的，showHide=1 则开启
            enableHideComp(to){

                let query = to.query;

                if (query.showHide && query.showHide == 1){

                    this.showHide = true;
                }
            },

            setFavicon(){

                var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
                link.type = 'image/x-icon';
                link.rel = 'shortcut icon';
                link.href = require('./../images/favicon.ico');
                document.getElementsByTagName('head')[0].appendChild(link);
            }
        },
        mounted(){
            document.addEventListener('scroll', this.handleScroll);

            this.setFavicon();
        },
        beforeDestroy() {
            document.removeEventListener('scroll', this.handleScroll);
        },
        watch:{

            $route(to,from){

                this.anchorLink(to);

                // 显示内置组件
                this.enableHideComp(to);
            }
        }
    }


</script>
