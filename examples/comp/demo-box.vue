<template>
    <div>
        <!--效果展示-->
        <div class="example-effectHtml">
            <slot name="effectHtml"></slot>
        </div>

        <!--代码描述-->
        <div class="example-codeDescription" v-show="showDemo">
            <div class="example-codeDescription-title">
                <span class="example-codeDescription-title-span">代码描述</span>
            </div>
            <slot name="codeDescription"></slot>
        </div>

        <!--代码展示-->
        <div class="example-codeHighlight" v-show="showDemo">
            <div class="example-codeHighlight-tools" v-if="showCode">
                <i @click.stop="openJSFiddle()" title="JSFiddle로 열기"
                   class="example-codeHighlight-tools-i iconfont icon-bug"></i>
                <span>
                    <i v-show="!copyDone" @click="copyCode" title="코드복사"
                       class="copy-code example-codeHighlight-tools-i iconfont icon-fuzhi1"></i>

                    <i v-show="copyDone" class="copy-code-done iconfont icon-chenggong"
                       @mouseout.stop="copyCodeMouseout($event)"></i>
                </span>
            </div>

            <slot name="codeHighlight" v-if="showCode"></slot>
            <div class="example-codeHighlight-showCode" @click="showCodeToggle()">
                <i :class="[showCode?'v-icon-up-dir':'v-icon-down-dir']"></i>
                <span>{{showCode ? '코드접기' : '코드보기'}}</span>
            </div>

        </div>

    </div>
</template>

<script>
    import Clipboard from 'clipboard'
    export default{
        name: 'demo-box',

        props: {

            showDemo: {
                type: Boolean,
                default: false
            },
            jsfiddle: {
                type: Object,
                default() {
                    return {};
                }
            }
        },

        data(){

            return {

                showCode: false,
                copyDone: false // copy done

            }
        },
        methods: {
            showCodeToggle(){

                this.showCode = !this.showCode;

            },

            copyCode(){

                let {html, style, script} = this.jsfiddle;

                style = style ? '<style>' + style + '<\/style>\n' : '';

                script = script ? '<script>' + script + '<\/script>' : '';

                const code = (html || '') + style + script;

                const clipboard = new Clipboard('.copy-code', {
                    text(trigger) {
                        return code;
                    }
                });


                clipboard.on('success', (e) => {
                    e.clearSelection();
                    clipboard.destroy();

                    this.copyDone = true;
                });

                clipboard.on('error', function (e) {
                    console.error('Action:', e.action);
                    console.error('Trigger:', e.trigger);
                });
            },

            copyCodeMouseout(){

                setTimeout(x=>{
                    this.copyDone = false;
                },2000)
            },

            openJSFiddle(){

                const {script, html, style} = this.jsfiddle;

                const scriptTpl = [
                    '<script src="//unpkg.com/vue/dist/vue.js"><\/script>',
                    '<script src="//unpkg.com/vue-easytable/umd/js/index.js"><\/script>',
                ].join('\n');

                let jsTpl = (script || '').replace(/export default/, 'var Main =').replace(/import Vue from 'vue'/, '').trim();

                jsTpl = jsTpl
                    ? jsTpl + '\nvar Ctor = Vue.extend(Main)\nnew Ctor().$mount(\'#app\')'
                    : 'new Vue().$mount(\'#app\')';

                const data = {
                    js: jsTpl,
                    css: `@import url("//unpkg.com/vue-easytable/umd/css/index.css");\n${(style || '').trim()}\n`,
                    html: `${scriptTpl}\n<div id="app">\n${html.trim()}\n</div>`,
                    panel_js: 3,
                    panel_css: 1
                };

                const form = document.getElementById('fiddle-form') || document.createElement('form');
                form.innerHTML = '';
                const node = document.createElement('textarea');

                form.method = 'post';
                form.action = 'https://jsfiddle.net/api/post/library/pure/';
                form.target = '_blank';

                for (let name in data) {
                    node.name = name;
                    node.value = data[name].toString();
                    form.appendChild(node.cloneNode());
                }
                form.setAttribute('id', 'fiddle-form');
                form.style.display = 'none';
                document.body.appendChild(form);

                form.submit();
            }
        }

    }
</script>