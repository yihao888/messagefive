(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login"],{3340:function(t,e,i){var a=i("c86c");e=a(!1),e.push([t.i,'uni-page-body[data-v-799e3583]{width:100%;height:100%;display:flex;justify-content:center;background-color:#fff}body.?%PAGE?%[data-v-799e3583]{background-color:#fff}.login-box[data-v-799e3583]{position:relative;max-width:350px;flex:1;padding:140px 35px 0;margin:0 auto;overflow:hidden\n\t/* background-color: #F5F5F5; */}.underline[data-v-799e3583]:hover{text-decoration:underline}.uni-tips[data-v-799e3583]{display:flex;justify-content:flex-end;margin-top:15px}.uni-tips-text[data-v-799e3583]{cursor:pointer;text-decoration:underline;font-size:13px;color:#007aff;opacity:.8}.no-padding[data-v-799e3583]{padding:0}.admin-logo[data-v-799e3583]{display:flex;justify-content:center;margin-bottom:30px}.admin-logo uni-image[data-v-799e3583]{height:40px}.admin-captcha-img[data-v-799e3583]{position:absolute;top:1px;right:0;display:flex;justify-content:center;align-items:center;background-color:#fff;width:100px;height:33px;border-left:1px #e5e5e5 solid;border-right:1px #e5e5e5 solid;border-radius:0 5px 5px 0;background-color:#f9f9f9}.admin-captcha-img img[data-v-799e3583]{border-radius:5px}.uni-loading[data-v-799e3583]:before{background:transparent url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTlFOUU5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwKSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iIzk4OTY5NyIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMDUuOTggNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjOUI5OTlBIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0EzQTFBMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NSA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNBQkE5QUEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDU4LjY2IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0IyQjJCMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjQkFCOEI5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDMkMwQzEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE1MCA0NS45OCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDQkNCQ0IiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCA0MS4zNCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNEMkQyRDIiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0RBREFEQSIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgtNjAgMjQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTJFMkUyIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiLz48L3N2Zz4=") no-repeat}.uni-loading[data-v-799e3583]{margin:0 auto;width:20px;height:20px;display:inline-block;vertical-align:middle;-webkit-animation:uni-loading-data-v-799e3583 1s steps(12) infinite;animation:uni-loading-data-v-799e3583 1s steps(12) infinite;background-size:100%}@-webkit-keyframes uni-loading-data-v-799e3583{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes uni-loading-data-v-799e3583{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}',""]),t.exports=e},"3cae":function(t,e,i){"use strict";i.r(e);var a=i("6fd9"),n=i.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},"455f":function(t,e,i){var a=i("3340");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("967d").default;n("4ee3bbfd",a,!0,{sourceMap:!1,shadowMode:!1})},6178:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var a={uniForms:i("839b").default,uniFormsItem:i("7e33").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"login-box"},[i("v-uni-view",{staticClass:"admin-logo"},[i("v-uni-image",{attrs:{src:t.logo,mode:"heightFix"}})],1),i("v-uni-view",{staticClass:"uni-header no-padding"},[i("v-uni-view",{staticClass:"uni-title"},[t._v(t._s(t.$t("login.text.title")))])],1),i("v-uni-view",{staticClass:"uni-container"},[i("uni-forms",{ref:"form",attrs:{rules:t.rules},on:{submit:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}},model:{value:t.formData,callback:function(e){t.formData=e},expression:"formData"}},[i("uni-forms-item",{attrs:{"left-icon":"person-filled",name:"username",labelWidth:"35"}},[i("v-uni-input",{ref:"usernameInput",staticClass:"uni-input-border",attrs:{type:"text",placeholder:t.$t("login.field.username")},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.submitForm.apply(void 0,arguments)}},model:{value:t.formData.username,callback:function(e){t.$set(t.formData,"username",e)},expression:"formData.username"}})],1),i("uni-forms-item",{staticClass:"icon-container",attrs:{"left-icon":"locked-filled",name:"password",labelWidth:"35"}},[i("v-uni-input",{ref:"passwordInput",staticClass:"uni-input-border",attrs:{password:t.showPassword,placeholder:t.$t("login.field.password")},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.submitForm.apply(void 0,arguments)}},model:{value:t.formData.password,callback:function(e){t.$set(t.formData,"password",e)},expression:"formData.password"}}),i("v-uni-text",{staticClass:"uni-icon-password-eye pointer",class:[t.showPassword?"":"uni-eye-active"],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changePassword.apply(void 0,arguments)}}},[t._v("")])],1),t.needCaptcha?i("uni-forms-item",{staticClass:"icon-container",attrs:{"left-icon":"image",name:"captcha",labelWidth:"35"}},[i("v-uni-input",{ref:"captchaInput",staticClass:"uni-input-border",attrs:{type:"text",placeholder:t.$t("login.field.captcha")},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.submitForm.apply(void 0,arguments)}},model:{value:t.formData.captcha,callback:function(e){t.$set(t.formData,"captcha",e)},expression:"formData.captcha"}}),i("v-uni-view",{staticClass:"admin-captcha-img pointer",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.createCaptcha.apply(void 0,arguments)}}},[t.captchaLoading?i("i",{staticClass:"uni-loading"}):i("img",{staticStyle:{width:"120px",height:"32px"},attrs:{src:t.captchaBase64}})])],1):t._e(),i("v-uni-view",{staticClass:"uni-button-group"},[i("v-uni-button",{staticClass:"uni-button uni-button-full",attrs:{type:"primary",loading:t.loading,disabled:t.loading},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submitForm.apply(void 0,arguments)}}},[t._v(t._s(t.$t("login.button.login")))])],1)],1),i("v-uni-view",{staticClass:"uni-tips"})],1)],1)},r=[]},"6fd9":function(t,e,i){"use strict";i("6a54");var a=i("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("fcf3")),r=a(i("2634")),o=a(i("39d8")),s=a(i("2fdc"));i("64aa"),i("aa9c"),i("bf0f"),i("2797"),i("dd2b");var l={name:"uniFormsItem",options:{virtualHost:!0},provide:function(){return{uniFormItem:this}},inject:{form:{from:"uniForm",default:null}},props:{rules:{type:Array,default:function(){return null}},name:{type:[String,Array],default:""},required:{type:Boolean,default:!1},label:{type:String,default:""},labelWidth:{type:[String,Number],default:""},labelAlign:{type:String,default:""},errorMessage:{type:[String,Boolean],default:""},leftIcon:String,iconColor:{type:String,default:"#606266"}},data:function(){return{errMsg:"",userRules:null,localLabelAlign:"left",localLabelWidth:"70px",localLabelPos:"left",border:!1,isFirstBorder:!1}},computed:{msg:function(){return this.errorMessage||this.errMsg}},watch:{"form.formRules":function(t){this.init()},"form.labelWidth":function(t){this.localLabelWidth=this._labelWidthUnit(t)},"form.labelPosition":function(t){this.localLabelPos=this._labelPosition()},"form.labelAlign":function(t){}},created:function(){var t=this;this.init(!0),this.name&&this.form&&this.$watch((function(){var e=t.form._getDataValue(t.name,t.form.localData);return e}),(function(e,i){var a=t.form._isEqual(e,i);if(!a){var n=t.itemSetValue(e);t.onFieldChange(n,!1)}}),{immediate:!1})},destroyed:function(){this.__isUnmounted||this.unInit()},methods:{setRules:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.userRules=t,this.init(!1)},setValue:function(){},onFieldChange:function(t){var e=arguments,i=this;return(0,s.default)((0,r.default)().mark((function a(){var n,s,l,u,c,d,f,m,p,h,g,I;return(0,r.default)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(n=!(e.length>1&&void 0!==e[1])||e[1],s=i.form,l=s.formData,s.localData,u=s.errShowType,c=s.validateCheck,d=s.validateTrigger,f=s._isRequiredField,m=s._realName,p=m(i.name),t||(t=i.form.formData[p]),h=i.itemRules.rules&&i.itemRules.rules.length,i.validator&&h&&0!==h){a.next=7;break}return a.abrupt("return");case 7:if(g=f(i.itemRules.rules||[]),I=null,"bind"!==d&&!n){a.next=18;break}return a.next=12,i.validator.validateUpdate((0,o.default)({},p,t),l);case 12:I=a.sent,g||void 0!==t&&""!==t||(I=null),I&&I.errorMessage?("undertext"===u&&(i.errMsg=I?I.errorMessage:""),"toast"===u&&uni.showToast({title:I.errorMessage||"校验错误",icon:"none"}),"modal"===u&&uni.showModal({title:"提示",content:I.errorMessage||"校验错误"})):i.errMsg="",c(I||null),a.next=19;break;case 18:i.errMsg="";case 19:return a.abrupt("return",I||null);case 20:case"end":return a.stop()}}),a)})))()},init:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this.form||{},i=e.validator,a=e.formRules,r=e.childrens,o=(e.formData,e.localData),s=e._realName,l=e.labelWidth,u=e._getDataValue;e._setDataValue;if(this.localLabelAlign=this._justifyContent(),this.localLabelWidth=this._labelWidthUnit(l),this.localLabelPos=this._labelPosition(),this.form&&t&&r.push(this),i&&a){this.form.isFirstBorder||(this.form.isFirstBorder=!0,this.isFirstBorder=!0),this.group&&(this.group.isFirstBorder||(this.group.isFirstBorder=!0,this.isFirstBorder=!0)),this.border=this.form.border;var c=s(this.name),d=this.userRules||this.rules;"object"===(0,n.default)(a)&&d&&(a[c]={rules:d},i.updateSchema(a));var f=a[c]||{};this.itemRules=f,this.validator=i,this.itemSetValue(u(this.name,o))}},unInit:function(){var t=this;if(this.form){var e=this.form,i=e.childrens,a=e.formData,n=e._realName;i.forEach((function(e,i){e===t&&(t.form.childrens.splice(i,1),delete a[n(e.name)])}))}},itemSetValue:function(t){var e=this.form._realName(this.name),i=this.itemRules.rules||[],a=this.form._getValue(e,t,i);return this.form._setDataValue(e,this.form.formData,a),a},clearValidate:function(){this.errMsg=""},_isRequired:function(){return this.required},_justifyContent:function(){if(this.form){var t=this.form.labelAlign,e=this.labelAlign?this.labelAlign:t;if("left"===e)return"flex-start";if("center"===e)return"center";if("right"===e)return"flex-end"}return"flex-start"},_labelWidthUnit:function(t){return this.num2px(this.labelWidth?this.labelWidth:t||(this.label?70:"auto"))},_labelPosition:function(){return this.form&&this.form.labelPosition||"left"},isTrigger:function(t,e,i){return"submit"!==t&&t?"bind":void 0===t?"bind"!==e?e?"submit":""===i?"bind":"submit":"bind":"submit"},num2px:function(t){return"number"===typeof t?"".concat(t,"px"):t}}};e.default=l},"7e33":function(t,e,i){"use strict";i.r(e);var a=i("f0bb"),n=i("3cae");for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("c29c");var o=i("828b"),s=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"2c18b432",null,!1,a["a"],void 0);e["default"]=s.exports},9196:function(t,e,i){"use strict";i.r(e);var a=i("f474"),n=i.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},a79a:function(t,e,i){"use strict";var a=i("455f"),n=i.n(a);n.a},b736:function(t,e,i){"use strict";i.r(e);var a=i("6178"),n=i("9196");for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("a79a");var o=i("828b"),s=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"799e3583",null,!1,a["a"],void 0);e["default"]=s.exports},c29c:function(t,e,i){"use strict";var a=i("dc9a"),n=i.n(a);n.a},c7a3:function(t,e,i){var a=i("c86c");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-forms-item[data-v-2c18b432]{position:relative;display:flex;margin-bottom:22px;flex-direction:row}.uni-forms-item__label[data-v-2c18b432]{display:flex;flex-direction:row;align-items:center;text-align:left;font-size:14px;color:#606266;height:36px;padding:0 12px 0 0;vertical-align:middle;flex-shrink:0;box-sizing:border-box}.uni-forms-item__label.no-label[data-v-2c18b432]{padding:0}.uni-forms-item__content[data-v-2c18b432]{position:relative;font-size:14px;flex:1;box-sizing:border-box;flex-direction:row}.uni-forms-item .uni-forms-item__nuve-content[data-v-2c18b432]{display:flex;flex-direction:column;flex:1}.uni-forms-item__error[data-v-2c18b432]{color:#f56c6c;font-size:12px;line-height:1;padding-top:4px;position:absolute;top:100%;left:0;transition:transform .3s;transform:translateY(-100%);opacity:0}.uni-forms-item__error .error-text[data-v-2c18b432]{color:#f56c6c;font-size:12px}.uni-forms-item__error.msg--active[data-v-2c18b432]{opacity:1;transform:translateY(0)}.uni-forms-item.is-direction-left[data-v-2c18b432]{flex-direction:row}.uni-forms-item.is-direction-top[data-v-2c18b432]{flex-direction:column}.uni-forms-item.is-direction-top .uni-forms-item__label[data-v-2c18b432]{padding:0 0 8px;line-height:1.5715;text-align:left;white-space:normal}.uni-forms-item .is-required[data-v-2c18b432]{color:#dd524d;font-weight:700}.uni-forms-item--border[data-v-2c18b432]{margin-bottom:0;padding:10px 0;border-top:1px #eee solid}.uni-forms-item--border .uni-forms-item__content[data-v-2c18b432]{flex-direction:column;justify-content:flex-start;align-items:flex-start}.uni-forms-item--border .uni-forms-item__content .uni-forms-item__error[data-v-2c18b432]{position:relative;top:5px;left:0;padding-top:0}.is-first-border[data-v-2c18b432]{border:none}',""]),t.exports=e},dc9a:function(t,e,i){var a=i("c7a3");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("967d").default;n("0f2d2cd3",a,!0,{sourceMap:!1,shadowMode:!1})},f0bb:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-forms-item",class:["is-direction-"+t.localLabelPos,t.border?"uni-forms-item--border":"",t.border&&t.isFirstBorder?"is-first-border":""]},[t._t("label",[i("v-uni-view",{staticClass:"uni-forms-item__label",class:{"no-label":!t.label&&!t.required},style:{width:t.localLabelWidth,justifyContent:t.localLabelAlign}},[t.required?i("v-uni-text",{staticClass:"is-required"},[t._v("*")]):t._e(),i("v-uni-text",[t._v(t._s(t.label))])],1)]),i("v-uni-view",{staticClass:"uni-forms-item__content"},[t._t("default"),i("v-uni-view",{staticClass:"uni-forms-item__error",class:{"msg--active":t.msg}},[i("v-uni-text",[t._v(t._s(t.msg))])],1)],2)],2)},n=[]},f474:function(t,e,i){"use strict";(function(t,a){i("6a54");var n=i("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("bf0f");var r=n(i("2634")),o=n(i("2fdc")),s=n(i("9b1b")),l=i("04c0"),u=i("8f59"),c=n(i("0b0a")),d=i("40b3"),f=t.importObject("uni-id-co",{customUI:!0}),m={deviceId:(0,d.getDeviceUUID)(),scene:"login"},p={data:function(){return(0,s.default)((0,s.default)({},c.default.navBar),{},{indexPage:c.default.index.url,showPassword:!0,loading:!1,formData:{username:"",password:"",captcha:""},captchaLoading:!1,needCaptcha:!1,captchaBase64:"",rules:{username:{rules:[{required:!0,errorMessage:"请输入账户"},{minLength:1,maxLength:30,errorMessage:"账户长度在{minLength}到{maxLength}个字符"}]},password:{rules:[{required:!0,errorMessage:"请输入正确的密码"},{minLength:6,errorMessage:"密码长度大于{minLength}个字符"}]},captcha:{rules:[{required:!0,errorMessage:"请输入验证码"}]}}})},mounted:function(){this.focus();var t=this;uni.getStorage({key:"lastUsername",success:function(e){t.formData.username=e.data}})},methods:(0,s.default)((0,s.default)((0,s.default)({},(0,u.mapActions)({init:"app/init"})),(0,u.mapMutations)({setToken:function(t,e){t("user/SET_TOKEN",e)}})),{},{submit:function(t){var e=this;if(!this.loading){var i=t.detail,n=i.errors,u=i.value;n||(this.$refs.usernameInput.$refs.input.blur(),this.$refs.passwordInput.$refs.input.blur(),this.$refs.captchaInput&&this.$refs.captchaInput.$refs.input.blur(),this.loading=!0,this.$request("login",(0,s.default)((0,s.default)({},u),{},{captchaOptions:m}),{functionName:"uni-id-cf",showModal:!1}).then((function(t){return a.log(t),e.setToken({token:t.token,tokenExpired:t.tokenExpired}),e.init().then((function(){uni.showToast({title:"登录成功",icon:"none"}),uni.getPushClientId({success:function(){var t=(0,o.default)((0,r.default)().mark((function t(e){var i,n;return(0,r.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a.log(e),i=e.cid,t.prev=2,t.next=5,f.setPushCid({pushClientId:i});case 5:n=t.sent,a.log("getPushClientId",n),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](2),a.error("Error in setPushCid:",t.t0);case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}(),fail:function(t){a.error(t)}}),l.mutations.updateUserInfo(),uni.setStorage({key:"lastUsername",data:u.username}),uni.redirectTo({url:e.indexPage})}))})).catch((function(t){t.needCaptcha&&(e.formData.captcha="",e.createCaptcha(),e.needCaptcha=!0);var i=e;uni.showModal({content:t.message||"请求服务失败",showCancel:!1,success:function(){10101===t.code&&i.$refs.usernameInput&&i.$refs.usernameInput.$refs.input.focus(),10102===t.code&&i.$refs.passwordInput&&i.$refs.passwordInput.$refs.input.focus(),10002===t.code&&i.$refs.captchaInput&&i.$refs.captchaInput.$refs.input.focus()}})})).finally((function(t){e.loading=!1})))}},createCaptcha:function(){var t=this;this.captchaLoading=!0,this.$request("createCaptcha",m,{functionName:"uni-id-cf"}).then((function(e){0===e.code&&(t.captchaBase64=e.captchaBase64)})).catch((function(t){})).finally((function(e){t.captchaLoading=!1}))},confirmForm:function(t,e){this.submitForm()},submitForm:function(){this.$refs.form.submit()},initAdmin:function(){uni.redirectTo({url:"/pages/demo/init/init"})},changePassword:function(){this.showPassword=!this.showPassword},focus:function(){this.$refs.usernameInput.$refs.input.focus()}})};e.default=p}).call(this,i("861b")["default"],i("ba7c")["default"])}}]);