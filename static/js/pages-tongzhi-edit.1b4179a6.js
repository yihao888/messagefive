(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-tongzhi-edit"],{"0400":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return n}));var n={uniForms:a("839b").default,uniFormsItem:a("7e33").default,uniEasyinput:a("f304").default,uniDataCheckbox:a("674a").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"uni-container"},[a("uni-forms",{ref:"form",attrs:{value:t.formData,"validate-trigger":"submit","err-show-type":"toast"}},[a("uni-forms-item",{attrs:{name:"notice",label:"通知内容:"}},[a("uni-easyinput",{attrs:{placeholder:"通知"},model:{value:t.formData.notice,callback:function(e){t.$set(t.formData,"notice",e)},expression:"formData.notice"}})],1),a("uni-forms-item",{attrs:{name:"noticeto",label:"通知对象"}},[a("uni-easyinput",{attrs:{placeholder:"通知对象"},model:{value:t.formData.noticeto,callback:function(e){t.$set(t.formData,"noticeto",e)},expression:"formData.noticeto"}})],1),a("uni-forms-item",{attrs:{name:"toticexianshi",label:"显示"}},[a("v-uni-switch",{attrs:{checked:t.formData.toticexianshi},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.binddata("toticexianshi",e.detail.value)}}})],1),a("uni-forms-item",{attrs:{name:"noticeshuzu",label:"用户组"}},[a("uni-data-checkbox",{attrs:{multiple:!0,pageSize:100,collection:"uni-id-users",field:"mobile as value,username as text"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changes.apply(void 0,arguments)}},model:{value:t.formData.noticeshuzu,callback:function(e){t.$set(t.formData,"noticeshuzu",e)},expression:"formData.noticeshuzu"}}),a("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.quanxuan.apply(void 0,arguments)}}},[t._v("全选")]),a("v-uni-button",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.quxiao.apply(void 0,arguments)}}},[t._v("取消")])],1),a("v-uni-view",{staticClass:"uni-button-group"},[a("v-uni-button",{staticClass:"uni-button",attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("提交")])],1)],1)],1)},o=[]},"33ad":function(t,e,a){"use strict";(function(t,n){a("6a54");var i=a("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(a("9b1b"));a("5ef2"),a("dc8a"),a("fd3c"),a("bf0f");var r=a("59ad"),u=t.database();function s(t){var e={};for(var a in r.validator)t.indexOf(a)>-1&&(e[a]=r.validator[a]);return e}var c={data:function(){var t={notice:"",noticeto:"",toticexianshi:null,noticeshuzu:[]};return{formData:t,formOptions:{},rules:(0,o.default)({},s(Object.keys(t)))}},onLoad:function(t){if(t.id){var e=t.id;this.formDataId=e,this.getDetail(e)}},onReady:function(){this.$refs.form.setRules(this.rules)},methods:{quxiao:function(){this.formData.noticeshuzu=[],this.changes()},quanxuan:function(){var e=this,a=t.database();a.collection("uni-id-users").get().then((function(t){var a=t.result.data.map((function(t){if(t.mobile)return t.mobile}));e.formData.noticeshuzu=a,e.changes(),n.log(t.result.data.map((function(t){if(t.mobile)return t.mobile})))}))},changes:function(t){n.log(this.formData.noticeshuzu),this.formData.noticeto=this.formData.noticeshuzu.join(" ")},submit:function(){var t=this;uni.showLoading({mask:!0}),this.$refs.form.validate().then((function(e){return t.submitForm(e)})).catch((function(){})).finally((function(){uni.hideLoading()}))},submitForm:function(t){var e=this;return u.collection("tongzhi").doc(this.formDataId).update(t).then((function(t){uni.showToast({icon:"none",title:"修改成功"}),e.getOpenerEventChannel().emit("refreshData"),setTimeout((function(){return uni.navigateBack()}),500)})).catch((function(t){uni.showModal({content:t.message||"请求服务失败",showCancel:!1})}))},getDetail:function(t){var e=this;uni.showLoading({mask:!0}),u.collection("tongzhi").doc(t).field("notice,noticeto,toticexianshi,noticeshuzu").get().then((function(t){var a=t.result.data[0];a&&(e.formData=a,n.log(e.formData.noticeshuzu))})).catch((function(t){uni.showModal({content:t.message||"请求服务失败",showCancel:!1})})).finally((function(){uni.hideLoading()}))}}};e.default=c}).call(this,a("861b")["default"],a("ba7c")["default"])},"3c0b":function(t,e,a){"use strict";var n=a("db08"),i=a.n(n);i.a},"446d":function(t,e,a){var n=a("c86c");e=n(!1),e.push([t.i,".uni-container[data-v-87ed936a]{padding:15px}.uni-input-border[data-v-87ed936a],\n.uni-textarea-border[data-v-87ed936a]{width:100%;font-size:14px;color:#666;border:1px #e5e5e5 solid;border-radius:5px;box-sizing:border-box}.uni-input-border[data-v-87ed936a]{padding:0 10px;height:35px}.uni-textarea-border[data-v-87ed936a]{padding:10px;height:80px}.uni-button-group[data-v-87ed936a]{margin-top:50px;\ndisplay:flex;\njustify-content:center}.uni-button[data-v-87ed936a]{width:184px;padding:12px 20px;font-size:14px;border-radius:4px;line-height:1;margin:0}",""]),t.exports=e},"59ad":function(t,e,a){"use strict";a("6a54");var n=a("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.enumConverter=void 0,e.filterToWhere=function(t,e){var a={};for(var n in t){var r=t[n],u=r.type,s=r.value;switch(u){case"search":"string"===typeof s&&s.length&&(a[n]=new RegExp(s));break;case"select":if(s.length){var c,d=[],l=(0,o.default)(s);try{for(l.s();!(c=l.n()).done;){var f=c.value;d.push(e.eq(f))}}catch(k){l.e(k)}finally{l.f()}a[n]=e.or(d)}break;case"range":if(s.length){var h=s[0],v=s[1];a[n]=e.and([e.gte(h),e.lte(v)])}break;case"date":if(s.length){var m=(0,i.default)(s,2),p=m[0],b=m[1],g=new Date(p),x=new Date(b);a[n]=e.and([e.gte(g),e.lte(x)])}break;case"timestamp":if(s.length){var D=(0,i.default)(s,2),y=D[0],w=D[1];a[n]=e.and([e.gte(y),e.lte(w)])}break}}return a},e.validator=void 0;var i=n(a("5de6")),o=n(a("3471"));a("23f4"),a("7d2f"),a("5c47"),a("9c4e"),a("ab80"),a("aa9c");e.validator={notice:{rules:[{format:"string"}]},noticeto:{rules:[{format:"string"}]},toticexianshi:{rules:[{format:"bool"}]},noticeshuzu:{rules:[{format:"array"}],label:"用户标签tagid"}};e.enumConverter={}},"92e3":function(t,e,a){"use strict";a.r(e);var n=a("33ad"),i=a.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},d0bd:function(t,e,a){"use strict";a.r(e);var n=a("0400"),i=a("92e3");for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("3c0b");var r=a("828b"),u=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"87ed936a",null,!1,n["a"],void 0);e["default"]=u.exports},db08:function(t,e,a){var n=a("446d");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("967d").default;i("6512f62a",n,!0,{sourceMap:!1,shadowMode:!1})}}]);