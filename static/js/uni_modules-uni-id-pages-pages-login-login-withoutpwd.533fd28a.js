(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["uni_modules-uni-id-pages-pages-login-login-withoutpwd"],{"023f":function(t,e,n){var i=n("7b26");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("967d").default;o("0c2e5ae1",i,!0,{sourceMap:!1,shadowMode:!1})},"0f46":function(t,e,n){"use strict";n.r(e);var i=n("ed3d"),o=n("39f8");for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("4f62");var r=n("828b"),u=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"10c08e46",null,!1,i["a"],void 0);e["default"]=u.exports},"187f":function(t,e,n){"use strict";n.r(e);var i=n("eb78"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},"1cb2":function(t){t.exports=JSON.parse('{"uni-popup.cancel":"取消","uni-popup.ok":"确定","uni-popup.placeholder":"请输入","uni-popup.title":"提示","uni-popup.shareTitle":"分享到"}')},2387:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-popup-dialog"},[n("v-uni-view",{staticClass:"uni-dialog-title"},[n("v-uni-text",{staticClass:"uni-dialog-title-text",class:["uni-popup__"+t.dialogType]},[t._v(t._s(t.titleText))])],1),"base"===t.mode?n("v-uni-view",{staticClass:"uni-dialog-content"},[t._t("default",[n("v-uni-text",{staticClass:"uni-dialog-content-text"},[t._v(t._s(t.content))])])],2):n("v-uni-view",{staticClass:"uni-dialog-content"},[t._t("default",[n("v-uni-input",{staticClass:"uni-dialog-input",attrs:{type:"text",placeholder:t.placeholderText,focus:t.focus},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.onOk.apply(void 0,arguments)}},model:{value:t.val,callback:function(e){t.val=e},expression:"val"}})])],2),n("v-uni-view",{staticClass:"uni-dialog-button-group"},[n("v-uni-view",{staticClass:"uni-dialog-button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.closeDialog.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"uni-dialog-button-text"},[t._v(t._s(t.cancelText))])],1),n("v-uni-view",{staticClass:"uni-dialog-button uni-border-left",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onOk.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"uni-dialog-button-text uni-button-color"},[t._v(t._s(t.okText))])],1)],1)],1)},o=[]},3298:function(t,e,n){"use strict";var i=n("513b"),o=n.n(i);o.a},3463:function(t,e,n){var i=n("371e");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("967d").default;o("2ecc56d6",i,!0,{sourceMap:!1,shadowMode:!1})},"371e":function(t,e,n){var i=n("c86c");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-popup-dialog[data-v-2882d99f]{width:300px;border-radius:15px;background-color:#fff}.uni-dialog-title[data-v-2882d99f]{display:flex;flex-direction:row;justify-content:center;padding-top:15px;padding-bottom:5px}.uni-dialog-title-text[data-v-2882d99f]{font-size:16px;font-weight:500}.uni-dialog-content[data-v-2882d99f]{display:flex;flex-direction:row;justify-content:center;align-items:center;padding:5px 15px 15px 15px}.uni-dialog-content-text[data-v-2882d99f]{font-size:14px;color:#6e6e6e}.uni-dialog-button-group[data-v-2882d99f]{display:flex;flex-direction:row;border-top-color:#f5f5f5;border-top-style:solid;border-top-width:1px}.uni-dialog-button[data-v-2882d99f]{display:flex;flex:1;flex-direction:row;justify-content:center;align-items:center;height:45px}.uni-border-left[data-v-2882d99f]{border-left-color:#f0f0f0;border-left-style:solid;border-left-width:1px}.uni-dialog-button-text[data-v-2882d99f]{font-size:14px}.uni-button-color[data-v-2882d99f]{color:#007aff}.uni-dialog-input[data-v-2882d99f]{flex:1;font-size:14px;border:1px #eee solid;height:40px;padding:0 10px;border-radius:5px;color:#555}.uni-popup__success[data-v-2882d99f]{color:#4cd964}.uni-popup__warn[data-v-2882d99f]{color:#f0ad4e}.uni-popup__error[data-v-2882d99f]{color:#dd524d}.uni-popup__info[data-v-2882d99f]{color:#909399}',""]),t.exports=e},"39f8":function(t,e,n){"use strict";n.r(e);var i=n("62a4"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},"3c46":function(t,e,n){var i=n("c86c");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-63b69bf0]{display:flex;box-sizing:border-box;flex-direction:column}.root[data-v-63b69bf0]{flex-direction:row;align-items:center;font-size:12px;color:#8a8f8b}.checkbox-box[data-v-63b69bf0], .uni-label-pointer[data-v-63b69bf0]{align-items:center;display:flex;flex-direction:row}.item[data-v-63b69bf0]{flex-direction:row}.text[data-v-63b69bf0]{line-height:26px}.agreement[data-v-63b69bf0]{color:#04498c;cursor:pointer}.checkbox-box[data-v-63b69bf0]  .uni-checkbox-input{border-radius:100%}.checkbox-box[data-v-63b69bf0]  .uni-checkbox-input.uni-checkbox-input-checked{border-color:#409eff;color:#fff!important;background-color:#409eff}.content[data-v-63b69bf0]{flex-wrap:wrap;flex-direction:row}.root[data-v-63b69bf0]  .uni-popup__error{color:#333}',""]),t.exports=e},4173:function(t,e,n){"use strict";n.r(e);var i=n("dd86"),o=n("187f");for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("3298");var r=n("828b"),u=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"63b69bf0",null,!1,i["a"],void 0);e["default"]=u.exports},"45f1":function(t,e,n){"use strict";n("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{}},created:function(){this.popup=this.getParent()},methods:{getParent:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"uniPopup",e=this.$parent,n=e.$options.name;while(n!==t){if(e=e.$parent,!e)return!1;n=e.$options.name}return e}}};e.default=i},"4f62":function(t,e,n){"use strict";var i=n("a023"),o=n.n(i);o.a},"513b":function(t,e,n){var i=n("3c46");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("967d").default;o("702d2874",i,!0,{sourceMap:!1,shadowMode:!1})},"51ba":function(t,e,n){var i=n("c86c");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.fab-login-box[data-v-10c08e46],\r\n.item[data-v-10c08e46]{display:flex;box-sizing:border-box;flex-direction:column}.fab-login-box[data-v-10c08e46]{flex-direction:row;flex-wrap:wrap;width:%?750?%;justify-content:space-around;position:fixed;left:0}.item[data-v-10c08e46]{flex-direction:column;justify-content:center;align-items:center;height:%?200?%;cursor:pointer}@media screen and (min-width:690px){.fab-login-box[data-v-10c08e46]{max-width:500px;margin-left:calc(50% - 250px)}.item[data-v-10c08e46]{height:%?160?%}}@media screen and (max-width:690px){.fab-login-box[data-v-10c08e46]{bottom:%?10?%}}.logo[data-v-10c08e46]{width:%?60?%;height:%?60?%;max-width:40px;max-height:40px;border-radius:100%;border:solid 1px #f6f6f6}.login-title[data-v-10c08e46]{text-align:center;margin-top:6px;color:#999;font-size:10px;width:70px}',""]),t.exports=e},"54fe":function(t,e,n){"use strict";n("6a54");var i=n("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("5c47"),n("0506"),n("4626"),n("8f71"),n("bf0f");var o=i(n("2634")),a=i(n("2fdc")),r=i(n("5c79")),u=i(n("7a11")),s={mixins:[u.default],data:function(){return{type:"",phone:"",focusPhone:!1,logo:"/static/logo.png"}},computed:{loginTypes:function(){return(0,a.default)((0,o.default)().mark((function t(){return(0,o.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",r.default.loginTypes);case 1:case"end":return t.stop()}}),t)})))()},isPhone:function(){return/^1\d{10}$/.test(this.phone)},imgSrc:function(){return"weixin"==this.type?"/uni_modules/uni-id-pages/static/login/weixin.png":"/uni_modules/uni-id-pages/static/app-plus/apple.png"}},onLoad:function(t){var e=this;return(0,a.default)((0,o.default)().mark((function n(){var i;return(0,o.default)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:i=t.type||r.default.loginTypes[0],e.type=i,"univerify"!=i&&(e.focusPhone=!0),e.$nextTick((function(){["weixin","apple"].includes(i)&&(e.$refs.uniFabLogin.servicesList=e.$refs.uniFabLogin.servicesList.filter((function(t){return t.id!=i})))})),uni.$on("uni-id-pages-setLoginType",(function(t){e.type=t}));case 5:case"end":return n.stop()}}),n)})))()},onShow:function(){var t=this;document.onkeydown=function(e){var n=e||window.event;n&&13==n.keyCode&&t.toSmsPage()}},onUnload:function(){uni.$off("uni-id-pages-setLoginType")},onReady:function(){},methods:{showCurrentWebview:function(){(void 0).setStyle({top:0})},quickLogin:function(t){var e,n,i={};null!==(e=t.detail)&&void 0!==e&&e.code&&(i.phoneNumberCode=t.detail.code),("weixinMobile"!==this.type||null!==(n=t.detail)&&void 0!==n&&n.code)&&this.$refs.uniFabLogin.login_before(this.type,!0,i)},toSmsPage:function(){return this.isPhone?this.needAgreements&&!this.agree?this.$refs.agreements.popup(this.toSmsPage):void uni.navigateTo({url:"/uni_modules/uni-id-pages/pages/login/login-smscode?phoneNumber="+this.phone}):(this.focusPhone=!0,uni.showToast({title:"手机号码格式不正确",icon:"none",duration:3e3}))},toPwdLogin:function(){uni.navigateTo({url:"../login/password"})},chooseArea:function(){uni.showToast({title:"暂不支持其他国家",icon:"none",duration:3e3})}}};e.default=s},"61c7":function(t,e,n){"use strict";n.r(e);var i=n("54fe"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},"62a4":function(t,e,n){"use strict";(function(t,i){n("6a54");var o=n("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("8f71"),n("bf0f"),n("4626"),n("5ac7"),n("2797"),n("aa9c"),n("5c47"),n("a1c1"),n("2c10"),n("c223"),n("0c26"),n("d4b5");var a=o(n("9b1b")),r=o(n("2634")),u=o(n("2fdc")),s=o(n("5c79")),c=n("04c0"),l={computed:{agreements:function(){if(!s.default.agreements)return[];var t=s.default.agreements,e=t.serviceUrl,n=t.privacyUrl;return[{url:e,title:"用户服务协议"},{url:n,title:"隐私政策条款"}]},agree:{get:function(){return this.getParentComponent().agree},set:function(t){return this.getParentComponent().agree=t}}},data:function(){return{servicesList:[{id:"username",text:"账号登录",logo:"/uni_modules/uni-id-pages/static/login/uni-fab-login/user.png",path:"/uni_modules/uni-id-pages/pages/login/login-withpwd"},{id:"smsCode",text:"短信验证码",logo:"/uni_modules/uni-id-pages/static/login/uni-fab-login/sms.png",path:"/uni_modules/uni-id-pages/pages/login/login-withoutpwd?type=smsCode"},{id:"weixin",text:"微信登录",logo:"/uni_modules/uni-id-pages/static/login/uni-fab-login/weixin.png"},{id:"apple",text:"苹果登录",logo:"/uni_modules/uni-id-pages/static/app-plus/uni-fab-login/apple.png"},{id:"univerify",text:"一键登录",logo:"/uni_modules/uni-id-pages/static/app-plus/uni-fab-login/univerify.png"},{id:"taobao",text:"淘宝登录",logo:"/uni_modules/uni-id-pages/static/app-plus/uni-fab-login/taobao.png"},{id:"facebook",text:"脸书登录",logo:"/uni_modules/uni-id-pages/static/app-plus/uni-fab-login/facebook.png"},{id:"alipay",text:"支付宝登录",logo:"/uni_modules/uni-id-pages/static/app-plus/uni-fab-login/alipay.png"},{id:"qq",text:"QQ登录",logo:"/uni_modules/uni-id-pages/static/app-plus/uni-fab-login/qq.png"},{id:"google",text:"谷歌登录",logo:"/uni_modules/uni-id-pages/static/app-plus/uni-fab-login/google.png"},{id:"douyin",text:"抖音登录",logo:"/uni_modules/uni-id-pages/static/app-plus/uni-fab-login/douyin.png"},{id:"sinaweibo",text:"新浪微博",logo:"/uni_modules/uni-id-pages/static/app-plus/uni-fab-login/sinaweibo.png"}],univerifyStyle:{fullScreen:!0,backgroundColor:"#ffffff",buttons:{iconWidth:"45px",list:[]},privacyTerms:{defaultCheckBoxState:!1,textColor:"#BBBBBB",termsColor:"#5496E3",prefix:"我已阅读并同意",suffix:"并使用本机号码登录",privacyItems:[]}}}},watch:{agree:function(t){this.univerifyStyle.privacyTerms.defaultCheckBoxState=t}},created:function(){var t=this;return(0,u.default)((0,r.default)().mark((function e(){var n,i;return(0,r.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.servicesList,i=s.default.loginTypes,n=n.filter((function(t){return"apple"!=t.id&&i.includes(t.id)})),i.includes("univerify")&&(t.univerifyStyle.privacyTerms.privacyItems=t.agreements,n.forEach((function(e){var n=e.id,i=e.logo,o=e.path;"univerify"!=n&&t.univerifyStyle.buttons.list.push({iconPath:i,provider:n,path:o})}))),t.servicesList=n.filter((function(e){var n=e.path?e.path.split("?")[0]:"";return n!=t.getRoute(1)}));case 5:case"end":return e.stop()}}),e)})))()},methods:{getParentComponent:function(){return this.$parent.$parent},setUserInfo:function(e){t.log("setUserInfo",e)},getRoute:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=getCurrentPages();return t>e.length?"":"/"+e[e.length-t].route},toPage:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(this.getRoute(1)==e.split("?")[0]&&"/uni_modules/uni-id-pages/pages/login/login-withoutpwd"==this.getRoute(1)){var i=e.split("?")[1].split("=")[1];uni.$emit("uni-id-pages-setLoginType",i)}else this.getRoute(2)==e?uni.navigateBack():this.getRoute(1)!=e?0===n?uni.navigateTo({url:e,animationType:"slide-in-left",complete:function(t){}}):uni.redirectTo({url:e,animationType:"slide-in-left",complete:function(t){}}):t.log("出乎意料的情况,path："+e)},login_before:function(e){var n=arguments,i=this;return(0,u.default)((0,r.default)().mark((function o(){var a,c,l,d,p,f,g,v,h,b,x;return(0,r.default)().wrap((function(o){while(1)switch(o.prev=o.next){case 0:if(c=!(n.length>1&&void 0!==n[1])||n[1],l=n.length>2&&void 0!==n[2]?n[2]:{},t.log(e),!["qq","xiaomi","sinaweibo","taobao","facebook","google","alipay","douyin"].includes(e)){o.next=5;break}return o.abrupt("return",uni.showToast({title:"该登录方式暂未实现，欢迎提交pr",icon:"none",duration:3e3}));case 5:if(!["univerify","apple"].includes(e)){o.next=7;break}return o.abrupt("return",uni.showToast({title:"当前设备不支持此登录，请选择其他登录方式",icon:"none",duration:3e3}));case 7:if(d=((null===s.default||void 0===s.default||null===(a=s.default.agreements)||void 0===a?void 0:a.scope)||[]).includes("register"),"univerify"==e||!d||i.agree){o.next=11;break}return p=i.getParentComponent().$refs.agreements,o.abrupt("return",p.popup((function(){i.login_before(e,c,l)})));case 11:if("weixin"!=e){o.next=20;break}if("./",f=location.protocol+"//"+location.host+"./".replace(/\/$/,"")+(window.location.href.includes("#")?"/#":"")+"/uni_modules/uni-id-pages/pages/login/login-withoutpwd?is_weixin_redirect=true&type=weixin",g=window.navigator.userAgent.toLowerCase(),"micromessenger"!=g.match(/MicroMessenger/i)){o.next=19;break}return o.abrupt("return",window.open("https://open.weixin.qq.com/connect/oauth2/authorize?\n\t\t\t\t\t\t\t\t\t\tappid=".concat(s.default.appid.weixin.h5,"\n\t\t\t\t\t\t\t\t\t\t&redirect_uri=").concat(encodeURIComponent(f),"\n\t\t\t\t\t\t\t\t\t\t&response_type=code\n\t\t\t\t\t\t\t\t\t\t&scope=snsapi_userinfo\n\t\t\t\t\t\t\t\t\t\t&state=STATE&connect_redirect=1#wechat_redirect")));case 19:return o.abrupt("return",location.href="https://open.weixin.qq.com/connect/qrconnect?appid=".concat(s.default.appid.weixin.web,"\n\t\t\t\t\t\t\t\t\t\t\t&redirect_uri=").concat(encodeURIComponent(f),"\n\t\t\t\t\t\t\t\t\t\t\t&response_type=code&scope=snsapi_login&state=STATE#wechat_redirect"));case 20:if(uni.showLoading({mask:!0}),"univerify"!=e){o.next=28;break}return v=function(){uni.hideLoading(),h.close(),h.offButtonsClick(x)},h=uni.getUniverifyManager(),b=!1,x=function(){var e=(0,u.default)((0,r.default)().mark((function e(n){var o,a;return(0,r.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.log("点击了第三方登录，provider：",n,n.provider,i.univerifyStyle.buttons.list),b=!0,e.next=4,uni.getCheckBoxState();case 4:o=e.sent,i.agree=o[1].state,a=i.univerifyStyle.buttons.list[n.index].path,a?(i.getRoute(1).includes("login-withoutpwd")&&a.includes("login-withoutpwd")&&i.getParentComponent().showCurrentWebview(),i.toPage(a,1),v()):i.agree?(v(),setTimeout((function(){i.login_before(n.provider)}),500)):uni.showToast({title:"你未同意隐私政策协议",icon:"none",duration:3e3});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h.onButtonsClick(x),o.abrupt("return",h.login({univerifyStyle:i.univerifyStyle,success:function(t){i.login(t.authResult,"univerify")},fail:function(e){t.log(e),b||uni.navigateBack()},complete:function(){var t=(0,u.default)((0,r.default)().mark((function t(e){return(0,r.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:uni.hideLoading(),h.offButtonsClick(x);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}));case 28:if("weixinMobile"!==e){o.next=30;break}return o.abrupt("return",i.login({phoneCode:l.phoneNumberCode},e));case 30:uni.login({provider:e,onlyAuthorize:!0,success:function(){var t=(0,u.default)((0,r.default)().mark((function t(n){var o;return(0,r.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("apple"!=e){t.next=6;break}return t.next=3,i.getUserInfo({provider:"apple"});case 3:o=t.sent,Object.assign(n.authResult,o.userInfo),uni.hideLoading();case 6:i.login("weixin"==e?{code:n.code}:n.authResult,e);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),fail:function(){var e=(0,u.default)((0,r.default)().mark((function e(n){return(0,r.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.log(n),uni.hideLoading();case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()});case 31:case"end":return o.stop()}}),o)})))()},login:function(e,n){t.log({params:e,type:n});var o="loginBy"+n.trim().replace(n[0],n[0].toUpperCase()),a=i.importObject("uni-id-co",{customUI:!0});a[o](e).then((function(t){uni.showToast({title:"登录成功",icon:"none",duration:2e3}),t.loginType=n,c.mutations.loginSuccess(t)})).catch((function(t){uni.showModal({content:t.message,confirmText:"知道了",showCancel:!1})})).finally((function(t){"univerify"==n&&uni.closeAuthView(),uni.hideLoading()}))},getUserInfo:function(t){return(0,u.default)((0,r.default)().mark((function e(){return(0,r.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){uni.getUserInfo((0,a.default)((0,a.default)({},t),{},{success:function(t){e(t)},fail:function(t){uni.showModal({content:JSON.stringify(t),showCancel:!1}),n(t)}}))})));case 1:case"end":return e.stop()}}),e)})))()}}};e.default=l}).call(this,n("ba7c")["default"],n("861b")["default"])},6608:function(t){t.exports=JSON.parse('{"uni-popup.cancel":"取消","uni-popup.ok":"確定","uni-popup.placeholder":"請輸入","uni-popup.title":"提示","uni-popup.shareTitle":"分享到"}')},"6e7c":function(t,e,n){"use strict";var i=n("3463"),o=n.n(i);o.a},"71bf":function(t,e,n){"use strict";n.r(e);var i=n("e45e"),o=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},"7a11":function(t,e,n){"use strict";(function(t){n("6a54");var i=n("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("9b1b"));n("4626"),n("5ac7"),n("bf0f"),n("2797");var a=n("04c0"),r=i(n("5c79")),u={data:function(){return{config:r.default,uniIdRedirectUrl:"",isMounted:!1}},onUnload:function(){document.onkeydown=!1},mounted:function(){this.isMounted=!0},onLoad:function(t){var e=this;if(t.is_weixin_redirect){if(uni.showLoading({mask:!0}),window.location.href.includes("#")){var n=window.location.href.split("?")[1].split("&");n.forEach((function(e){var n=e.split("=");"code"==n[0]&&(t.code=n[1])}))}this.$nextTick((function(n){e.$refs.uniFabLogin.login({code:t.code},"weixin")}))}t.uniIdRedirectUrl&&(this.uniIdRedirectUrl=decodeURIComponent(t.uniIdRedirectUrl))},computed:{needAgreements:function(){if(this.isMounted)return!!this.$refs.agreements&&this.$refs.agreements.needAgreements},agree:{get:function(){if(this.isMounted)return!this.$refs.agreements||this.$refs.agreements.isAgree},set:function(e){this.$refs.agreements?this.$refs.agreements.isAgree=e:t.log("不存在 隐私政策协议组件")}}},methods:{loginSuccess:function(t){a.mutations.loginSuccess((0,o.default)((0,o.default)({},t),{},{uniIdRedirectUrl:this.uniIdRedirectUrl}))}}},s=u;e.default=s}).call(this,n("ba7c")["default"])},"7b26":function(t,e,n){var i=n("c86c");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.input-box[data-v-6b31aca0]  .uni-input-input[type="password"]::-ms-reveal{display:none}.uni-content[data-v-6b31aca0]{padding:0 %?60?%}.login-logo[data-v-6b31aca0]{display:none}@media screen and (min-width:690px){.uni-content[data-v-6b31aca0]{margin:0 auto;position:relative;top:100px;padding:30px 40px 80px 40px;max-width:450px;max-height:450px;border-radius:10px;box-shadow:0 0 20px #efefef;background-color:#fff}.login-logo[data-v-6b31aca0]{display:flex;justify-content:center}.login-logo uni-image[data-v-6b31aca0]{width:60px;height:60px}.register-back[data-v-6b31aca0]{display:none}uni-button[data-v-6b31aca0]{padding-bottom:1px}}.uni-content uni-view[data-v-6b31aca0]{box-sizing:border-box}.title[data-v-6b31aca0]{display:flex;padding:18px 0;font-weight:800;flex-direction:column}.tip[data-v-6b31aca0]{display:flex;color:#bdbdc0;font-size:11px;margin:6px 0}.uni-content[data-v-6b31aca0]  .uni-easyinput__content,\r\n.input-box[data-v-6b31aca0]{height:44px;background-color:#f8f8f8!important;border-radius:0;font-size:14px;display:flex;flex:1}.link[data-v-6b31aca0]{color:#04498c;cursor:pointer}.uni-content[data-v-6b31aca0]  .uni-forms-item__inner{padding-bottom:8px}.uni-btn[data-v-6b31aca0]{text-align:center;height:40px;line-height:40px;margin:15px 0 10px 0;color:#fff!important;border-radius:5px;font-size:16px}.uni-body.uni_modules-uni-id-pages-pages-login-login-withoutpwd[data-v-6b31aca0]{height:auto!important}@media screen and (min-width:690px){.uni-content[data-v-6b31aca0]{height:350px}}.uni-content[data-v-6b31aca0],\r\n.quickLogin[data-v-6b31aca0]{display:flex;flex-direction:column}.phone-box[data-v-6b31aca0]{position:relative;display:flex}.area[data-v-6b31aca0]{position:absolute;left:10px;z-index:9;top:12px;font-size:14px}.area[data-v-6b31aca0]::after{content:"";border:3px solid transparent;border-top-color:#000;top:12px;left:3px;position:relative}.input-box[data-v-6b31aca0]{box-sizing:border-box;flex:1;padding-left:45px;margin-bottom:10px;border-radius:0}.quickLogin[data-v-6b31aca0]{height:350px;align-items:center;justify-content:center}.quickLoginBtn[data-v-6b31aca0]{margin:20px 0;width:%?450?%;max-width:230px;height:%?82?%}.tip[data-v-6b31aca0]{margin-top:-15px;margin-bottom:20px}@media screen and (min-width:690px){.quickLogin[data-v-6b31aca0]{height:auto}}',""]),t.exports=e},9229:function(t){t.exports=JSON.parse('{"uni-popup.cancel":"cancel","uni-popup.ok":"ok","uni-popup.placeholder":"pleace enter","uni-popup.title":"Hint","uni-popup.shareTitle":"Share to"}')},a023:function(t,e,n){var i=n("51ba");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("967d").default;o("64229f3e",i,!0,{sourceMap:!1,shadowMode:!1})},a0a5:function(t,e,n){"use strict";n("6a54");var i=n("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("9229")),a=i(n("1cb2")),r=i(n("6608")),u={en:o.default,"zh-Hans":a.default,"zh-Hant":r.default};e.default=u},a4f0:function(t,e,n){"use strict";var i=n("023f"),o=n.n(i);o.a},b358:function(t,e,n){"use strict";n.r(e);var i=n("2387"),o=n("71bf");for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("6e7c");var r=n("828b"),u=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"2882d99f",null,!1,i["a"],void 0);e["default"]=u.exports},c086:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={uniIdPagesAgreements:n("4173").default,uniEasyinput:n("f304").default,uniIdPagesFabLogin:n("0f46").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-content"},[n("v-uni-view",{staticClass:"login-logo"},[n("v-uni-image",{attrs:{src:t.logo}})],1),n("v-uni-text",{staticClass:"title"},[t._v("请选择登录方式")]),["apple","weixin","weixinMobile"].includes(t.type)?[n("v-uni-text",{staticClass:"tip"},[t._v("将根据第三方账号服务平台的授权范围获取你的信息")]),n("v-uni-view",{staticClass:"quickLogin"},["weixinMobile"!==t.type?n("v-uni-image",{staticClass:"quickLoginBtn",attrs:{src:t.imgSrc,mode:"widthFix"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.quickLogin.apply(void 0,arguments)}}}):n("v-uni-button",{staticClass:"uni-btn",attrs:{type:"primary","open-type":"getPhoneNumber"},on:{getphonenumber:function(e){arguments[0]=e=t.$handleEvent(e),t.quickLogin.apply(void 0,arguments)}}},[t._v("微信授权手机号登录")]),n("uni-id-pages-agreements",{ref:"agreements",attrs:{scope:"register"}})],1)]:[n("v-uni-text",{staticClass:"tip"},[t._v("未注册的账号验证通过后将自动注册")]),n("v-uni-view",{staticClass:"phone-box"},[n("v-uni-view",{staticClass:"area",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.chooseArea.apply(void 0,arguments)}}},[t._v("+86")]),n("uni-easyinput",{staticClass:"input-box",attrs:{focus:t.focusPhone,type:"number",inputBorder:!1,maxlength:"11",placeholder:"请输入手机号"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.focusPhone=!1}},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),n("uni-id-pages-agreements",{ref:"agreements",attrs:{scope:"register"}}),n("v-uni-button",{staticClass:"uni-btn",attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toSmsPage.apply(void 0,arguments)}}},[t._v("获取验证码")])],n("uni-id-pages-fab-login",{ref:"uniFabLogin"})],2)},a=[]},dd86:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={uniPopup:n("d718").default,uniPopupDialog:n("b358").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.agreements.length?n("v-uni-view",{staticClass:"root"},[t.needAgreements?[n("v-uni-checkbox-group",{on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.setAgree.apply(void 0,arguments)}}},[n("v-uni-label",{staticClass:"checkbox-box"},[n("v-uni-checkbox",{staticStyle:{transform:"scale(0.5)","margin-right":"-6px"},attrs:{checked:t.isAgree}}),n("v-uni-text",{staticClass:"text"},[t._v("同意")])],1)],1),n("v-uni-view",{staticClass:"content"},t._l(t.agreements,(function(e,i){return n("v-uni-view",{key:i,staticClass:"item"},[n("v-uni-text",{staticClass:"agreement text",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.navigateTo(e)}}},[t._v(t._s(e.title))]),t.hasAnd(t.agreements,i)?n("v-uni-text",{staticClass:"text and",attrs:{space:"nbsp"}},[t._v("和")]):t._e()],1)})),1)]:t._e(),t.needAgreements||t.needPopupAgreements?n("uni-popup",{ref:"popupAgreement",attrs:{type:"center"}},[n("uni-popup-dialog",{attrs:{confirmText:"同意"},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.popupConfirm.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"content"},[n("v-uni-text",{staticClass:"text"},[t._v("请先阅读并同意")]),t._l(t.agreements,(function(e,i){return n("v-uni-view",{key:i,staticClass:"item"},[n("v-uni-text",{staticClass:"agreement text",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.navigateTo(e)}}},[t._v(t._s(e.title))]),t.hasAnd(t.agreements,i)?n("v-uni-text",{staticClass:"text and",attrs:{space:"nbsp"}},[t._v("和")]):t._e()],1)}))],2)],1)],1):t._e()],2):t._e()},a=[]},e45e:function(t,e,n){"use strict";n("6a54");var i=n("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("64aa");var o=i(n("45f1")),a=n("d3b4"),r=i(n("a0a5")),u=(0,a.initVueI18n)(r.default),s=u.t,c={name:"uniPopupDialog",mixins:[o.default],emits:["confirm","close"],props:{value:{type:[String,Number],default:""},placeholder:{type:[String,Number],default:""},type:{type:String,default:"error"},mode:{type:String,default:"base"},title:{type:String,default:""},content:{type:String,default:""},beforeClose:{type:Boolean,default:!1}},data:function(){return{dialogType:"error",focus:!1,val:""}},computed:{okText:function(){return s("uni-popup.ok")},cancelText:function(){return s("uni-popup.cancel")},placeholderText:function(){return this.placeholder||s("uni-popup.placeholder")},titleText:function(){return this.title||s("uni-popup.title")}},watch:{type:function(t){this.dialogType=t},mode:function(t){"input"===t&&(this.dialogType="info")},value:function(t){this.val=t}},created:function(){this.popup.disableMask(),"input"===this.mode?(this.dialogType="info",this.val=this.value):this.dialogType=this.type},mounted:function(){this.focus=!0},methods:{onOk:function(){"input"===this.mode?this.$emit("confirm",this.val):this.$emit("confirm"),this.beforeClose||this.popup.close()},closeDialog:function(){this.$emit("close"),this.beforeClose||this.popup.close()},close:function(){this.popup.close()}}};e.default=c},eb78:function(t,e,n){"use strict";(function(t){n("6a54");var i=n("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("4626"),n("5ac7");var o=i(n("5c79")),a=function(){return t.log("为定义")},r={name:"uni-agreements",computed:{agreements:function(){if(!o.default.agreements)return[];var t=o.default.agreements,e=t.serviceUrl,n=t.privacyUrl;return[{url:e,title:"用户服务协议"},{url:n,title:"隐私政策条款"}]}},props:{scope:{type:String,default:function(){return"register"}}},methods:{popupConfirm:function(){this.isAgree=!0,a()},popup:function(t){var e=this;this.needPopupAgreements=!0,this.$nextTick((function(){t&&(a=t),e.$refs.popupAgreement.open()}))},navigateTo:function(t){var e=t.url,n=t.title;uni.navigateTo({url:"/uni_modules/uni-id-pages/pages/common/webview/webview?url="+e+"&title="+n,success:function(t){},fail:function(){},complete:function(){}})},hasAnd:function(t,e){return t.length-1>e},setAgree:function(t){this.isAgree=!this.isAgree,this.$emit("setAgree",this.isAgree)}},created:function(){var t;this.needAgreements=((null===o.default||void 0===o.default||null===(t=o.default.agreements)||void 0===t?void 0:t.scope)||[]).includes(this.scope)},data:function(){return{isAgree:!1,needAgreements:!0,needPopupAgreements:!1}}};e.default=r}).call(this,n("ba7c")["default"])},ed3d:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"fab-login-box"},t._l(t.servicesList,(function(e,i){return n("v-uni-view",{key:i,staticClass:"item",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),e.path?t.toPage(e.path):t.login_before(e.id,!1)}}},[n("v-uni-image",{staticClass:"logo",attrs:{src:e.logo,mode:"scaleToFill"}}),n("v-uni-text",{staticClass:"login-title"},[t._v(t._s(e.text))])],1)})),1)],1)},o=[]},fc44:function(t,e,n){"use strict";n.r(e);var i=n("c086"),o=n("61c7");for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("a4f0");var r=n("828b"),u=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"6b31aca0",null,!1,i["a"],void 0);e["default"]=u.exports}}]);