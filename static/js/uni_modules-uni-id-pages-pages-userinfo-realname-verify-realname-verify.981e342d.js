(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["uni_modules-uni-id-pages-pages-userinfo-realname-verify-realname-verify"],{"12e0":function(e,t,i){"use strict";i("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("64aa"),i("c9b5"),i("bf0f"),i("ab80");var n=function(e){if(!e||"string"!==typeof e||18!==e.length)return!1;for(var t=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],i=e.substring(17),n=0,r=0;r<17;r++)n+=Number(e.charAt(r))*t[r];return[1,0,"x",9,8,7,6,5,4,3,2][n%11].toString()===i.toLowerCase()};t.default=n},"187f":function(e,t,i){"use strict";i.r(t);var n=i("eb78"),r=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t["default"]=r.a},"1c57":function(e,t,i){"use strict";i.r(t);var n=i("9ec5"),r=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t["default"]=r.a},"1cb2":function(e){e.exports=JSON.parse('{"uni-popup.cancel":"取消","uni-popup.ok":"确定","uni-popup.placeholder":"请输入","uni-popup.title":"提示","uni-popup.shareTitle":"分享到"}')},2387:function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){}));var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"uni-popup-dialog"},[i("v-uni-view",{staticClass:"uni-dialog-title"},[i("v-uni-text",{staticClass:"uni-dialog-title-text",class:["uni-popup__"+e.dialogType]},[e._v(e._s(e.titleText))])],1),"base"===e.mode?i("v-uni-view",{staticClass:"uni-dialog-content"},[e._t("default",[i("v-uni-text",{staticClass:"uni-dialog-content-text"},[e._v(e._s(e.content))])])],2):i("v-uni-view",{staticClass:"uni-dialog-content"},[e._t("default",[i("v-uni-input",{staticClass:"uni-dialog-input",attrs:{type:"text",placeholder:e.placeholderText,focus:e.focus},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.onOk.apply(void 0,arguments)}},model:{value:e.val,callback:function(t){e.val=t},expression:"val"}})])],2),i("v-uni-view",{staticClass:"uni-dialog-button-group"},[i("v-uni-view",{staticClass:"uni-dialog-button",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.closeDialog.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"uni-dialog-button-text"},[e._v(e._s(e.cancelText))])],1),i("v-uni-view",{staticClass:"uni-dialog-button uni-border-left",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onOk.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"uni-dialog-button-text uni-button-color"},[e._v(e._s(e.okText))])],1)],1)],1)},r=[]},3298:function(e,t,i){"use strict";var n=i("513b"),r=i.n(n);r.a},3463:function(e,t,i){var n=i("371e");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=i("967d").default;r("2ecc56d6",n,!0,{sourceMap:!1,shadowMode:!1})},"371e":function(e,t,i){var n=i("c86c");t=n(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-popup-dialog[data-v-2882d99f]{width:300px;border-radius:15px;background-color:#fff}.uni-dialog-title[data-v-2882d99f]{display:flex;flex-direction:row;justify-content:center;padding-top:15px;padding-bottom:5px}.uni-dialog-title-text[data-v-2882d99f]{font-size:16px;font-weight:500}.uni-dialog-content[data-v-2882d99f]{display:flex;flex-direction:row;justify-content:center;align-items:center;padding:5px 15px 15px 15px}.uni-dialog-content-text[data-v-2882d99f]{font-size:14px;color:#6e6e6e}.uni-dialog-button-group[data-v-2882d99f]{display:flex;flex-direction:row;border-top-color:#f5f5f5;border-top-style:solid;border-top-width:1px}.uni-dialog-button[data-v-2882d99f]{display:flex;flex:1;flex-direction:row;justify-content:center;align-items:center;height:45px}.uni-border-left[data-v-2882d99f]{border-left-color:#f0f0f0;border-left-style:solid;border-left-width:1px}.uni-dialog-button-text[data-v-2882d99f]{font-size:14px}.uni-button-color[data-v-2882d99f]{color:#007aff}.uni-dialog-input[data-v-2882d99f]{flex:1;font-size:14px;border:1px #eee solid;height:40px;padding:0 10px;border-radius:5px;color:#555}.uni-popup__success[data-v-2882d99f]{color:#4cd964}.uni-popup__warn[data-v-2882d99f]{color:#f0ad4e}.uni-popup__error[data-v-2882d99f]{color:#dd524d}.uni-popup__info[data-v-2882d99f]{color:#909399}',""]),e.exports=t},"3c46":function(e,t,i){var n=i("c86c");t=n(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-63b69bf0]{display:flex;box-sizing:border-box;flex-direction:column}.root[data-v-63b69bf0]{flex-direction:row;align-items:center;font-size:12px;color:#8a8f8b}.checkbox-box[data-v-63b69bf0], .uni-label-pointer[data-v-63b69bf0]{align-items:center;display:flex;flex-direction:row}.item[data-v-63b69bf0]{flex-direction:row}.text[data-v-63b69bf0]{line-height:26px}.agreement[data-v-63b69bf0]{color:#04498c;cursor:pointer}.checkbox-box[data-v-63b69bf0]  .uni-checkbox-input{border-radius:100%}.checkbox-box[data-v-63b69bf0]  .uni-checkbox-input.uni-checkbox-input-checked{border-color:#409eff;color:#fff!important;background-color:#409eff}.content[data-v-63b69bf0]{flex-wrap:wrap;flex-direction:row}.root[data-v-63b69bf0]  .uni-popup__error{color:#333}',""]),e.exports=t},"3cae":function(e,t,i){"use strict";i.r(t);var n=i("6fd9"),r=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t["default"]=r.a},4010:function(e,t,i){"use strict";i.d(t,"b",(function(){return r})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return n}));var n={uniList:i("5d95").default,uniListItem:i("d54f").default,uniForms:i("839b").default,uniFormsItem:i("7e33").default,uniEasyinput:i("f304").default,uniIdPagesAgreements:i("4173").default},r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[e.isCertify?[n("uni-list",[n("uni-list-item",{staticClass:"item",attrs:{title:"姓名",rightText:e.userInfo.realNameAuth.realName}}),n("uni-list-item",{staticClass:"item",attrs:{title:"身份证号码",rightText:e.userInfo.realNameAuth.identity}})],1)]:[n("v-uni-view",{staticClass:"uni-content"},[e.verifyFail?[n("v-uni-view",{staticClass:"face-icon"},[n("v-uni-image",{staticClass:"face-icon-image",attrs:{src:i("8fb6")}})],1),n("v-uni-view",{staticClass:"error-title"},[e._v(e._s(e.verifyFailTitle))]),n("v-uni-view",{staticClass:"error-description"},[e._v(e._s(e.verifyFailContent))]),10013!==e.verifyFailCode?n("v-uni-button",{attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.retry.apply(void 0,arguments)}}},[e._v("重新开始验证")]):n("v-uni-button",{attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.retry.apply(void 0,arguments)}}},[e._v("返回")]),e.isDev?n("v-uni-view",{staticClass:"dev-tip"},[e._v("请在控制台查看详细错误（此提示仅在开发环境展示）")]):e._e()]:[n("v-uni-text",{staticClass:"title"},[e._v("实名认证")]),n("uni-forms",[n("uni-forms-item",{attrs:{name:"realName"}},[n("uni-easyinput",{staticClass:"input-box",attrs:{placeholder:"姓名",clearable:!1},model:{value:e.realName,callback:function(t){e.realName=t},expression:"realName"}})],1),n("uni-forms-item",{attrs:{name:"idCard"}},[n("uni-easyinput",{staticClass:"input-box",attrs:{placeholder:"身份证号码",clearable:!1},model:{value:e.idCard,callback:function(t){e.idCard=t},expression:"idCard"}})],1)],1),n("uni-id-pages-agreements",{ref:"agreements",staticStyle:{"margin-bottom":"20px"},attrs:{scope:"realNameVerify"}}),n("v-uni-button",{attrs:{type:"primary",disabled:!e.certifyIdNext},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.getCertifyId.apply(void 0,arguments)}}},[e._v("确定")])]],2)]],2)},a=[]},4173:function(e,t,i){"use strict";i.r(t);var n=i("dd86"),r=i("187f");for(var a in r)["default"].indexOf(a)<0&&function(e){i.d(t,e,(function(){return r[e]}))}(a);i("3298");var o=i("828b"),u=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"63b69bf0",null,!1,n["a"],void 0);t["default"]=u.exports},"45f1":function(e,t,i){"use strict";i("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{}},created:function(){this.popup=this.getParent()},methods:{getParent:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"uniPopup",t=this.$parent,i=t.$options.name;while(i!==e){if(t=t.$parent,!t)return!1;i=t.$options.name}return t}}};t.default=n},"513b":function(e,t,i){var n=i("3c46");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=i("967d").default;r("702d2874",n,!0,{sourceMap:!1,shadowMode:!1})},6608:function(e){e.exports=JSON.parse('{"uni-popup.cancel":"取消","uni-popup.ok":"確定","uni-popup.placeholder":"請輸入","uni-popup.title":"提示","uni-popup.shareTitle":"分享到"}')},"6e7c":function(e,t,i){"use strict";var n=i("3463"),r=i.n(n);r.a},"6fd9":function(e,t,i){"use strict";i("6a54");var n=i("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(i("fcf3")),a=n(i("2634")),o=n(i("39d8")),u=n(i("2fdc"));i("64aa"),i("aa9c"),i("bf0f"),i("2797"),i("dd2b");var s={name:"uniFormsItem",options:{virtualHost:!0},provide:function(){return{uniFormItem:this}},inject:{form:{from:"uniForm",default:null}},props:{rules:{type:Array,default:function(){return null}},name:{type:[String,Array],default:""},required:{type:Boolean,default:!1},label:{type:String,default:""},labelWidth:{type:[String,Number],default:""},labelAlign:{type:String,default:""},errorMessage:{type:[String,Boolean],default:""},leftIcon:String,iconColor:{type:String,default:"#606266"}},data:function(){return{errMsg:"",userRules:null,localLabelAlign:"left",localLabelWidth:"70px",localLabelPos:"left",border:!1,isFirstBorder:!1}},computed:{msg:function(){return this.errorMessage||this.errMsg}},watch:{"form.formRules":function(e){this.init()},"form.labelWidth":function(e){this.localLabelWidth=this._labelWidthUnit(e)},"form.labelPosition":function(e){this.localLabelPos=this._labelPosition()},"form.labelAlign":function(e){}},created:function(){var e=this;this.init(!0),this.name&&this.form&&this.$watch((function(){var t=e.form._getDataValue(e.name,e.form.localData);return t}),(function(t,i){var n=e.form._isEqual(t,i);if(!n){var r=e.itemSetValue(t);e.onFieldChange(r,!1)}}),{immediate:!1})},destroyed:function(){this.__isUnmounted||this.unInit()},methods:{setRules:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.userRules=e,this.init(!1)},setValue:function(){},onFieldChange:function(e){var t=arguments,i=this;return(0,u.default)((0,a.default)().mark((function n(){var r,u,s,l,c,d,f,p,v,m,h,b;return(0,a.default)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=!(t.length>1&&void 0!==t[1])||t[1],u=i.form,s=u.formData,u.localData,l=u.errShowType,c=u.validateCheck,d=u.validateTrigger,f=u._isRequiredField,p=u._realName,v=p(i.name),e||(e=i.form.formData[v]),m=i.itemRules.rules&&i.itemRules.rules.length,i.validator&&m&&0!==m){n.next=7;break}return n.abrupt("return");case 7:if(h=f(i.itemRules.rules||[]),b=null,"bind"!==d&&!r){n.next=18;break}return n.next=12,i.validator.validateUpdate((0,o.default)({},v,e),s);case 12:b=n.sent,h||void 0!==e&&""!==e||(b=null),b&&b.errorMessage?("undertext"===l&&(i.errMsg=b?b.errorMessage:""),"toast"===l&&uni.showToast({title:b.errorMessage||"校验错误",icon:"none"}),"modal"===l&&uni.showModal({title:"提示",content:b.errorMessage||"校验错误"})):i.errMsg="",c(b||null),n.next=19;break;case 18:i.errMsg="";case 19:return n.abrupt("return",b||null);case 20:case"end":return n.stop()}}),n)})))()},init:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this.form||{},i=t.validator,n=t.formRules,a=t.childrens,o=(t.formData,t.localData),u=t._realName,s=t.labelWidth,l=t._getDataValue;t._setDataValue;if(this.localLabelAlign=this._justifyContent(),this.localLabelWidth=this._labelWidthUnit(s),this.localLabelPos=this._labelPosition(),this.form&&e&&a.push(this),i&&n){this.form.isFirstBorder||(this.form.isFirstBorder=!0,this.isFirstBorder=!0),this.group&&(this.group.isFirstBorder||(this.group.isFirstBorder=!0,this.isFirstBorder=!0)),this.border=this.form.border;var c=u(this.name),d=this.userRules||this.rules;"object"===(0,r.default)(n)&&d&&(n[c]={rules:d},i.updateSchema(n));var f=n[c]||{};this.itemRules=f,this.validator=i,this.itemSetValue(l(this.name,o))}},unInit:function(){var e=this;if(this.form){var t=this.form,i=t.childrens,n=t.formData,r=t._realName;i.forEach((function(t,i){t===e&&(e.form.childrens.splice(i,1),delete n[r(t.name)])}))}},itemSetValue:function(e){var t=this.form._realName(this.name),i=this.itemRules.rules||[],n=this.form._getValue(t,e,i);return this.form._setDataValue(t,this.form.formData,n),n},clearValidate:function(){this.errMsg=""},_isRequired:function(){return this.required},_justifyContent:function(){if(this.form){var e=this.form.labelAlign,t=this.labelAlign?this.labelAlign:e;if("left"===t)return"flex-start";if("center"===t)return"center";if("right"===t)return"flex-end"}return"flex-start"},_labelWidthUnit:function(e){return this.num2px(this.labelWidth?this.labelWidth:e||(this.label?70:"auto"))},_labelPosition:function(){return this.form&&this.form.labelPosition||"left"},isTrigger:function(e,t,i){return"submit"!==e&&e?"bind":void 0===e?"bind"!==t?t?"submit":""===i?"bind":"submit":"bind":"submit"},num2px:function(e){return"number"===typeof e?"".concat(e,"px"):e}}};t.default=s},"71bf":function(e,t,i){"use strict";i.r(t);var n=i("e45e"),r=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t["default"]=r.a},"77e8":function(e,t,i){"use strict";i.r(t);var n=i("4010"),r=i("1c57");for(var a in r)["default"].indexOf(a)<0&&function(e){i.d(t,e,(function(){return r[e]}))}(a);i("9163");var o=i("828b"),u=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"e6617068",null,!1,n["a"],void 0);t["default"]=u.exports},"7a11":function(e,t,i){"use strict";(function(e){i("6a54");var n=i("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(i("9b1b"));i("4626"),i("5ac7"),i("bf0f"),i("2797");var a=i("04c0"),o=n(i("5c79")),u={data:function(){return{config:o.default,uniIdRedirectUrl:"",isMounted:!1}},onUnload:function(){document.onkeydown=!1},mounted:function(){this.isMounted=!0},onLoad:function(e){var t=this;if(e.is_weixin_redirect){if(uni.showLoading({mask:!0}),window.location.href.includes("#")){var i=window.location.href.split("?")[1].split("&");i.forEach((function(t){var i=t.split("=");"code"==i[0]&&(e.code=i[1])}))}this.$nextTick((function(i){t.$refs.uniFabLogin.login({code:e.code},"weixin")}))}e.uniIdRedirectUrl&&(this.uniIdRedirectUrl=decodeURIComponent(e.uniIdRedirectUrl))},computed:{needAgreements:function(){if(this.isMounted)return!!this.$refs.agreements&&this.$refs.agreements.needAgreements},agree:{get:function(){if(this.isMounted)return!this.$refs.agreements||this.$refs.agreements.isAgree},set:function(t){this.$refs.agreements?this.$refs.agreements.isAgree=t:e.log("不存在 隐私政策协议组件")}}},methods:{loginSuccess:function(e){a.mutations.loginSuccess((0,r.default)((0,r.default)({},e),{},{uniIdRedirectUrl:this.uniIdRedirectUrl}))}}},s=u;t.default=s}).call(this,i("ba7c")["default"])},"7e33":function(e,t,i){"use strict";i.r(t);var n=i("f0bb"),r=i("3cae");for(var a in r)["default"].indexOf(a)<0&&function(e){i.d(t,e,(function(){return r[e]}))}(a);i("c29c");var o=i("828b"),u=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"2c18b432",null,!1,n["a"],void 0);t["default"]=u.exports},"8fb6":function(e,t,i){e.exports=i.p+"static/img/face-verify-icon.ea42b36b.svg"},9163:function(e,t,i){"use strict";var n=i("f342"),r=i.n(n);r.a},9229:function(e){e.exports=JSON.parse('{"uni-popup.cancel":"cancel","uni-popup.ok":"ok","uni-popup.placeholder":"pleace enter","uni-popup.title":"Hint","uni-popup.shareTitle":"Share to"}')},"9ec5":function(e,t,i){"use strict";(function(e,n){i("6a54");var r=i("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(i("a823"));i("5c47"),i("0506"),i("d4b5");var o=r(i("2634")),u=r(i("2fdc")),s=(r(i("12e0")),r(i("7a11"))),l=i("04c0"),c=["errCode"],d=e.importObject("uni-id-co"),f={mixins:[s.default],data:function(){return{realName:"",idCard:"",certifyId:"",verifyFail:!1,verifyFailCode:0,verifyFailTitle:"",verifyFailContent:""}},computed:{userInfo:function(){return l.store.userInfo},certifyIdNext:function(){return Boolean(this.realName)&&Boolean(this.idCard)&&this.needAgreements&&this.agree},isCertify:function(){return this.userInfo.realNameAuth&&2===this.userInfo.realNameAuth.authStatus},isDev:function(){return!1}},onLoad:function(){var e=uni.getStorageSync("uni-id-pages-temp-frv");e&&(this.realName=e.realName,this.idCard=e.idCard)},methods:{getCertifyId:function(){var e=this;return(0,u.default)((0,o.default)().mark((function t(){var i,n;return(0,o.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.certifyIdNext){t.next=2;break}return t.abrupt("return");case 2:return t.abrupt("return",uni.showModal({content:"暂不支持实名认证",showCancel:!1}));case 6:if(!("string"!==typeof e.realName||e.realName.length<2)&&/^[\u4e00-\u9fa5]{1,10}(·?[\u4e00-\u9fa5]{1,10}){0,5}$/.test(e.realName)){t.next=9;break}return uni.showToast({title:"姓名只能是汉字",icon:"none"}),t.abrupt("return");case 9:return uni.setStorage({key:"uni-id-pages-temp-frv",data:{realName:e.realName,idCard:e.idCard}}),i=uni.getFacialRecognitionMetaInfo(),t.next=13,d.getFrvCertifyId({realName:e.realName,idCard:e.idCard,metaInfo:i});case 13:n=t.sent,e.certifyId=n.certifyId,e.startFacialRecognitionVerify();case 16:case"end":return t.stop()}}),t)})))()},startFacialRecognitionVerify:function(){},getFrvAuthResult:function(){var t=this;return(0,u.default)((0,o.default)().mark((function i(){var r,u,s;return(0,o.default)().wrap((function(i){while(1)switch(i.prev=i.next){case 0:return r=e.importObject("uni-id-co",{customUI:!0}),i.prev=1,uni.showLoading({title:"验证中...",mask:!1}),i.next=5,r.getFrvAuthResult({certifyId:t.certifyId});case 5:u=i.sent,u.errCode,s=(0,a.default)(u,c),t.verifyFailContent&&n.log("[frv-debug] 客户端刷脸失败，由实人认证服务查询具体原因，原因：".concat(t.verifyFailContent)),uni.showModal({content:"实名认证成功",showCancel:!1,success:function(){l.mutations.setUserInfo({realNameAuth:s}),t.verifyFail=!1}}),uni.removeStorage({key:"uni-id-pages-temp-frv"}),i.next=17;break;case 12:i.prev=12,i.t0=i["catch"](1),t.verifyFail=!0,t.verifyFailTitle=i.t0.errMsg,n.error(JSON.stringify(i.t0));case 17:return i.prev=17,uni.hideLoading(),i.finish(17);case 20:case"end":return i.stop()}}),i,null,[[1,12,17,20]])})))()},retry:function(){10013!==this.verifyFailCode?this.getCertifyId():this.verifyFail=!1}}};t.default=f}).call(this,i("861b")["default"],i("ba7c")["default"])},a0a5:function(e,t,i){"use strict";i("6a54");var n=i("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(i("9229")),a=n(i("1cb2")),o=n(i("6608")),u={en:r.default,"zh-Hans":a.default,"zh-Hant":o.default};t.default=u},a823:function(e,t,i){"use strict";i("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(null==e)return{};var i,r,a=(0,n.default)(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a},i("01a2"),i("5ef2");var n=function(e){return e&&e.__esModule?e:{default:e}}(i("cfa9"))},b358:function(e,t,i){"use strict";i.r(t);var n=i("2387"),r=i("71bf");for(var a in r)["default"].indexOf(a)<0&&function(e){i.d(t,e,(function(){return r[e]}))}(a);i("6e7c");var o=i("828b"),u=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"2882d99f",null,!1,n["a"],void 0);t["default"]=u.exports},c29c:function(e,t,i){"use strict";var n=i("dc9a"),r=i.n(n);r.a},c7a3:function(e,t,i){var n=i("c86c");t=n(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-forms-item[data-v-2c18b432]{position:relative;display:flex;margin-bottom:22px;flex-direction:row}.uni-forms-item__label[data-v-2c18b432]{display:flex;flex-direction:row;align-items:center;text-align:left;font-size:14px;color:#606266;height:36px;padding:0 12px 0 0;vertical-align:middle;flex-shrink:0;box-sizing:border-box}.uni-forms-item__label.no-label[data-v-2c18b432]{padding:0}.uni-forms-item__content[data-v-2c18b432]{position:relative;font-size:14px;flex:1;box-sizing:border-box;flex-direction:row}.uni-forms-item .uni-forms-item__nuve-content[data-v-2c18b432]{display:flex;flex-direction:column;flex:1}.uni-forms-item__error[data-v-2c18b432]{color:#f56c6c;font-size:12px;line-height:1;padding-top:4px;position:absolute;top:100%;left:0;transition:transform .3s;transform:translateY(-100%);opacity:0}.uni-forms-item__error .error-text[data-v-2c18b432]{color:#f56c6c;font-size:12px}.uni-forms-item__error.msg--active[data-v-2c18b432]{opacity:1;transform:translateY(0)}.uni-forms-item.is-direction-left[data-v-2c18b432]{flex-direction:row}.uni-forms-item.is-direction-top[data-v-2c18b432]{flex-direction:column}.uni-forms-item.is-direction-top .uni-forms-item__label[data-v-2c18b432]{padding:0 0 8px;line-height:1.5715;text-align:left;white-space:normal}.uni-forms-item .is-required[data-v-2c18b432]{color:#dd524d;font-weight:700}.uni-forms-item--border[data-v-2c18b432]{margin-bottom:0;padding:10px 0;border-top:1px #eee solid}.uni-forms-item--border .uni-forms-item__content[data-v-2c18b432]{flex-direction:column;justify-content:flex-start;align-items:flex-start}.uni-forms-item--border .uni-forms-item__content .uni-forms-item__error[data-v-2c18b432]{position:relative;top:5px;left:0;padding-top:0}.is-first-border[data-v-2c18b432]{border:none}',""]),e.exports=t},cfa9:function(e,t,i){"use strict";i("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r},i("dc8a"),i("5ef2")},d8d4:function(e,t,i){var n=i("c86c");t=n(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.input-box[data-v-e6617068]  .uni-input-input[type="password"]::-ms-reveal{display:none}.uni-content[data-v-e6617068]{padding:0 %?60?%}.login-logo[data-v-e6617068]{display:none}@media screen and (min-width:690px){.uni-content[data-v-e6617068]{margin:0 auto;position:relative;top:100px;padding:30px 40px 80px 40px;max-width:450px;max-height:450px;border-radius:10px;box-shadow:0 0 20px #efefef;background-color:#fff}.login-logo[data-v-e6617068]{display:flex;justify-content:center}.login-logo uni-image[data-v-e6617068]{width:60px;height:60px}.register-back[data-v-e6617068]{display:none}uni-button[data-v-e6617068]{padding-bottom:1px}}.uni-content uni-view[data-v-e6617068]{box-sizing:border-box}.title[data-v-e6617068]{display:flex;padding:18px 0;font-weight:800;flex-direction:column}.tip[data-v-e6617068]{display:flex;color:#bdbdc0;font-size:11px;margin:6px 0}.uni-content[data-v-e6617068]  .uni-easyinput__content,\r\n.input-box[data-v-e6617068]{height:44px;background-color:#f8f8f8!important;border-radius:0;font-size:14px;display:flex;flex:1}.link[data-v-e6617068]{color:#04498c;cursor:pointer}.uni-content[data-v-e6617068]  .uni-forms-item__inner{padding-bottom:8px}.uni-btn[data-v-e6617068]{text-align:center;height:40px;line-height:40px;margin:15px 0 10px 0;color:#fff!important;border-radius:5px;font-size:16px}.uni-body.uni_modules-uni-id-pages-pages-login-login-withoutpwd[data-v-e6617068]{height:auto!important}.checkbox-box[data-v-e6617068],\r\n.uni-label-pointer[data-v-e6617068]{align-items:center;display:flex;flex-direction:row}.item[data-v-e6617068]{flex-direction:row}.text[data-v-e6617068]{line-height:26px}.checkbox-box[data-v-e6617068]  .uni-checkbox-input{border-radius:100%}.checkbox-box[data-v-e6617068]  .uni-checkbox-input.uni-checkbox-input-checked{border-color:#409eff;color:#fff!important;background-color:#409eff}.agreements[data-v-e6617068]{margin-bottom:20px}.face-icon[data-v-e6617068]{width:100px;height:100px;margin:50px auto 30px}.face-icon-image[data-v-e6617068]{width:100%;height:100%;display:block}.error-title[data-v-e6617068]{font-size:18px;text-align:center;font-weight:700}.error-description[data-v-e6617068]{font-size:13px;color:#999;margin:10px 0 20px;text-align:center}.dev-tip[data-v-e6617068]{margin-top:20px;font-size:13px;color:#999;text-align:center}',""]),e.exports=t},dc9a:function(e,t,i){var n=i("c7a3");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=i("967d").default;r("0f2d2cd3",n,!0,{sourceMap:!1,shadowMode:!1})},dd86:function(e,t,i){"use strict";i.d(t,"b",(function(){return r})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return n}));var n={uniPopup:i("d718").default,uniPopupDialog:i("b358").default},r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.agreements.length?i("v-uni-view",{staticClass:"root"},[e.needAgreements?[i("v-uni-checkbox-group",{on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.setAgree.apply(void 0,arguments)}}},[i("v-uni-label",{staticClass:"checkbox-box"},[i("v-uni-checkbox",{staticStyle:{transform:"scale(0.5)","margin-right":"-6px"},attrs:{checked:e.isAgree}}),i("v-uni-text",{staticClass:"text"},[e._v("同意")])],1)],1),i("v-uni-view",{staticClass:"content"},e._l(e.agreements,(function(t,n){return i("v-uni-view",{key:n,staticClass:"item"},[i("v-uni-text",{staticClass:"agreement text",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.navigateTo(t)}}},[e._v(e._s(t.title))]),e.hasAnd(e.agreements,n)?i("v-uni-text",{staticClass:"text and",attrs:{space:"nbsp"}},[e._v("和")]):e._e()],1)})),1)]:e._e(),e.needAgreements||e.needPopupAgreements?i("uni-popup",{ref:"popupAgreement",attrs:{type:"center"}},[i("uni-popup-dialog",{attrs:{confirmText:"同意"},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.popupConfirm.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"text"},[e._v("请先阅读并同意")]),e._l(e.agreements,(function(t,n){return i("v-uni-view",{key:n,staticClass:"item"},[i("v-uni-text",{staticClass:"agreement text",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.navigateTo(t)}}},[e._v(e._s(t.title))]),e.hasAnd(e.agreements,n)?i("v-uni-text",{staticClass:"text and",attrs:{space:"nbsp"}},[e._v("和")]):e._e()],1)}))],2)],1)],1):e._e()],2):e._e()},a=[]},e45e:function(e,t,i){"use strict";i("6a54");var n=i("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("64aa");var r=n(i("45f1")),a=i("d3b4"),o=n(i("a0a5")),u=(0,a.initVueI18n)(o.default),s=u.t,l={name:"uniPopupDialog",mixins:[r.default],emits:["confirm","close"],props:{value:{type:[String,Number],default:""},placeholder:{type:[String,Number],default:""},type:{type:String,default:"error"},mode:{type:String,default:"base"},title:{type:String,default:""},content:{type:String,default:""},beforeClose:{type:Boolean,default:!1}},data:function(){return{dialogType:"error",focus:!1,val:""}},computed:{okText:function(){return s("uni-popup.ok")},cancelText:function(){return s("uni-popup.cancel")},placeholderText:function(){return this.placeholder||s("uni-popup.placeholder")},titleText:function(){return this.title||s("uni-popup.title")}},watch:{type:function(e){this.dialogType=e},mode:function(e){"input"===e&&(this.dialogType="info")},value:function(e){this.val=e}},created:function(){this.popup.disableMask(),"input"===this.mode?(this.dialogType="info",this.val=this.value):this.dialogType=this.type},mounted:function(){this.focus=!0},methods:{onOk:function(){"input"===this.mode?this.$emit("confirm",this.val):this.$emit("confirm"),this.beforeClose||this.popup.close()},closeDialog:function(){this.$emit("close"),this.beforeClose||this.popup.close()},close:function(){this.popup.close()}}};t.default=l},eb78:function(e,t,i){"use strict";(function(e){i("6a54");var n=i("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("4626"),i("5ac7");var r=n(i("5c79")),a=function(){return e.log("为定义")},o={name:"uni-agreements",computed:{agreements:function(){if(!r.default.agreements)return[];var e=r.default.agreements,t=e.serviceUrl,i=e.privacyUrl;return[{url:t,title:"用户服务协议"},{url:i,title:"隐私政策条款"}]}},props:{scope:{type:String,default:function(){return"register"}}},methods:{popupConfirm:function(){this.isAgree=!0,a()},popup:function(e){var t=this;this.needPopupAgreements=!0,this.$nextTick((function(){e&&(a=e),t.$refs.popupAgreement.open()}))},navigateTo:function(e){var t=e.url,i=e.title;uni.navigateTo({url:"/uni_modules/uni-id-pages/pages/common/webview/webview?url="+t+"&title="+i,success:function(e){},fail:function(){},complete:function(){}})},hasAnd:function(e,t){return e.length-1>t},setAgree:function(e){this.isAgree=!this.isAgree,this.$emit("setAgree",this.isAgree)}},created:function(){var e;this.needAgreements=((null===r.default||void 0===r.default||null===(e=r.default.agreements)||void 0===e?void 0:e.scope)||[]).includes(this.scope)},data:function(){return{isAgree:!1,needAgreements:!0,needPopupAgreements:!1}}};t.default=o}).call(this,i("ba7c")["default"])},f0bb:function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){}));var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"uni-forms-item",class:["is-direction-"+e.localLabelPos,e.border?"uni-forms-item--border":"",e.border&&e.isFirstBorder?"is-first-border":""]},[e._t("label",[i("v-uni-view",{staticClass:"uni-forms-item__label",class:{"no-label":!e.label&&!e.required},style:{width:e.localLabelWidth,justifyContent:e.localLabelAlign}},[e.required?i("v-uni-text",{staticClass:"is-required"},[e._v("*")]):e._e(),i("v-uni-text",[e._v(e._s(e.label))])],1)]),i("v-uni-view",{staticClass:"uni-forms-item__content"},[e._t("default"),i("v-uni-view",{staticClass:"uni-forms-item__error",class:{"msg--active":e.msg}},[i("v-uni-text",[e._v(e._s(e.msg))])],1)],2)],2)},r=[]},f342:function(e,t,i){var n=i("d8d4");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var r=i("967d").default;r("1eb80c68",n,!0,{sourceMap:!1,shadowMode:!1})}}]);