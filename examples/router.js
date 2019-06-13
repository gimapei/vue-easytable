import Vue from "vue";
import VueRouter from "vue-router";

const childRouterTpl = r => require.ensure([], () => r(require('./comp/child-router-tpl.vue')), 'childRouterTpl');

const intro = r => require.ensure([], () => r(require('./doc/intro.md')), 'intro');
const install = r => require.ensure([], () => r(require('./doc/install.md')), 'install');
const start = r => require.ensure([], () => r(require('./doc/strart.md')), 'start');
const pagination = r => require.ensure([], () => r(require('./doc/pagination/Pagination.md')), 'pagination');
/*const table = r => require.ensure([], () => r(require('./doc/table/main.md')), 'table');*/
const checkbox = r => require.ensure([], () => r(require('./doc/checkbox/main.md')), 'checkbox');
const select = r => require.ensure([], () => r(require('./doc/select/main.vue')), 'select');
const dropdown = r => require.ensure([], () => r(require('./doc/dropdown/main.vue')), 'dropdown');

const basic =  r => require.ensure([], () => r(require('./doc/table/basic/main.md')), 'basic');
const horizontalResize =  r => require.ensure([], () => r(require('./doc/table/horizontal-resize/main.md')), 'horizontalResize');
const verticalResize =  r => require.ensure([], () => r(require('./doc/table/vertical-resize/main.md')), 'verticalResize');
const customColumns =  r => require.ensure([], () => r(require('./doc/table/customColumns/main.md')), 'customColumns');
const cellStyle =  r => require.ensure([], () => r(require('./doc/table/cell-style/main.md')), 'cellStyle');
const columnWidthDrag =  r => require.ensure([], () => r(require('./doc/table/column-width-drag/main.md')), 'columnWidthDrag');
const selection =  r => require.ensure([], () => r(require('./doc/table/selection/main.md')), 'selection');
const cellEdit =  r => require.ensure([], () => r(require('./doc/table/cell-edit/main.md')), 'cellEdit');
const cellMerge =  r => require.ensure([], () => r(require('./doc/table/rowspan-colspan/main.md')), 'cellMerge');
const conditionFilters =  r => require.ensure([], () => r(require('./doc/table/condition-filters/main.md')), 'conditionFilters');
const footerSummary =  r => require.ensure([], () => r(require('./doc/table/footer-summary/main.md')), 'footerSummary');
const loading =  r => require.ensure([], () => r(require('./doc/table/loading/main.md')), 'loading');
const sort =  r => require.ensure([], () => r(require('./doc/table/sort/main.md')), 'sort');
const fixedColumnsTitle =  r => require.ensure([], () => r(require('./doc/table/fixed-columns-title/main.md')), 'fixedColumnsTitle');
const hideTable =  r => require.ensure([], () => r(require('./doc/table/hide-table/main.md')), 'hideTable');
const combinedPaging =  r => require.ensure([], () => r(require('./doc/table/combined-paging/main.md')), 'combinedPaging');
const api =  r => require.ensure([], () => r(require('./doc/table/api/main.md')), 'api');



Vue.use(VueRouter)

export default new VueRouter({
    linkActiveClass: 'active',
    routes: [
        { path: '/', redirect: '/intro',name:'소개' }, 
        { path: '/intro', component: intro ,name:'소개'},
        { path: '/install', component: install ,name:'설치'},
        { path: '/start', component: start ,name:'시작'},
        { path: '/pagination', component: pagination ,name:'페이징'},
        { path: '/table',name:'테이블', component: childRouterTpl ,redirect:'/table/basic',
            children : [
                {path : 'basic', component :basic, name : '기본테이블'},
                {path : 'horizontalResize', component :horizontalResize, name : '테이블 가로크기 재조정'},
                {path : 'verticalResize', component :verticalResize, name : '테이블 세로크기 재조정'},
                {path : 'customColumns', component :customColumns, name : '커스텀 컬럼'},
                {path : 'cellStyle', component :cellStyle, name : '셀 스타일'},
                {path : 'columnWidthDrag', component :columnWidthDrag, name : '컬럼 크기 드래그'},
                {path : 'selection', component :selection, name : '복수 선택'},
                {path : 'cellEdit', component :cellEdit, name : '셀 수정'},
                {path : 'cellMerge', component :cellMerge, name : '셀 병합'},
                {path : 'conditionFilters', component :conditionFilters, name : '필터'},
                {path : 'footerSummary', component :footerSummary, name : 'footer 종합'},
                {path : 'loading', component :loading, name : 'loading'},
                {path : 'sort', component :sort, name : '정렬'},
                {path : 'fixedColumnsTitle', component :fixedColumnsTitle, name : '고정컬럼'},
                {path : 'hideTable', component :hideTable, name : '표 숨기기'},
                {path : 'combinedPaging', component :combinedPaging, name : '테이블 페이징'},
                {path : 'api', component :api, name : 'api'}
            ]},
        { path: '/checkbox', component: checkbox,name:'체크박스' },
        { path: '/select', component: select,name:'선택' },
        { path: '/dropdown', component: dropdown,name:'콤보박스' },

        {
            path: '*',
            redirect: '/intro'
        }
        /*  {
         path: '*', component: {
         template: '<div>抱歉，没有您要的页面。</div>'
         }
         }*/
    ]
})