(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-system-tag-list"],{2452:function(e,t,a){"use strict";a("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={name:"UniTag",emits:["click"],props:{type:{type:String,default:"default"},size:{type:String,default:"normal"},text:{type:String,default:""},disabled:{type:[Boolean,String],default:!1},inverted:{type:[Boolean,String],default:!1},circle:{type:[Boolean,String],default:!1},mark:{type:[Boolean,String],default:!1},customStyle:{type:String,default:""}},computed:{classes:function(){var e=this.type,t=this.disabled,a=this.inverted,n=this.circle,i=this.mark,r=this.size,o=this.isTrue,d=["uni-tag--"+e,o(t)?"uni-tag--disabled":"",o(a)?e+"-uni-tag--inverted":"",o(n)?"uni-tag--circle":"",o(i)?"uni-tag--mark":"","uni-tag--"+r,o(a)?"uni-tag-text--"+e:"","small"===r?"uni-tag-text--small":""];return d.join(" ")}},methods:{isTrue:function(e){return!0===e||"true"===e},onClick:function(){this.isTrue(this.disabled)||this.$emit("click")}}};t.default=n},"27f3":function(e,t,a){"use strict";a.r(t);var n=a("2452"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(r);t["default"]=i.a},"2fbe":function(e,t,a){"use strict";a("6a54");var n=a("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.enumConverter=void 0,t.filterToWhere=function(e,t){var a={};for(var n in e){var o=e[n],d=o.type,c=o.value;switch(d){case"search":"string"===typeof c&&c.length&&(a[n]=new RegExp(c));break;case"select":if(c.length){var s,l=[],u=(0,r.default)(c);try{for(u.s();!(s=u.n()).done;){var f=s.value;l.push(t.eq(f))}}catch(k){u.e(k)}finally{u.f()}a[n]=t.or(l)}break;case"range":if(c.length){var v=c[0],g=c[1];a[n]=t.and([t.gte(v),t.lte(g)])}break;case"date":if(c.length){var p=(0,i.default)(c,2),h=p[0],b=p[1],y=new Date(h),m=new Date(b);a[n]=t.and([t.gte(y),t.lte(m)])}break;case"timestamp":if(c.length){var x=(0,i.default)(c,2),w=x[0],_=x[1];a[n]=t.and([t.gte(w),t.lte(_)])}break}}return a},t.validator=void 0;var i=n(a("5de6")),r=n(a("3471"));a("23f4"),a("7d2f"),a("5c47"),a("9c4e"),a("ab80"),a("aa9c");t.validator={tagid:{rules:[{required:!0},{format:"string"}],label:"标签的tagid"},name:{rules:[{required:!0},{format:"string"}],label:"标签名称"},description:{rules:[{format:"string"}],label:"标签描述"}};t.enumConverter={}},8708:function(e,t,a){var n=a("f7a4");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=a("967d").default;i("243eb2e1",n,!0,{sourceMap:!1,shadowMode:!1})},"92b7":function(e,t,a){"use strict";var n=a("8708"),i=a.n(n);i.a},a6c2:function(e,t,a){"use strict";a.r(t);var n=a("fe69"),i=a("c91b3");for(var r in i)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(r);var o=a("828b"),d=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"65043d8c",null,!1,n["a"],void 0);t["default"]=d.exports},bc78:function(e,t,a){"use strict";(function(e){a("6a54");var n=a("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("0c26"),a("23f4"),a("7d2f"),a("5c47"),a("9c4e"),a("ab80"),a("fd3c"),a("8f71"),a("bf0f"),a("dc8a");var i=n(a("9b1b")),r=a("2fbe"),o=e.database(),d=[],c={ascending:"asc",descending:"desc"},s={data:function(){return{query:"",where:"",orderby:"",orderByFieldName:"",selectedIndexs:[],pageSizeIndex:0,pageSizeOption:[20,50,100,500],options:(0,i.default)({pageSize:20,pageCurrent:1,filterData:{}},r.enumConverter),imageStyles:{width:64,height:64},exportExcel:{filename:"uni-id-tag.xls",type:"xls",fields:{"标签的tagid":"tagid","标签名称":"name","标签描述":"description"}},exportExcelData:[]}},onLoad:function(){this._filter={}},onReady:function(){this.$refs.udb.loadData()},watch:{pageSizeIndex:{immediate:!0,handler:function(e,t){var a=this;this.options.pageSize=this.pageSizeOption[e],this.options.pageCurrent=1,this.$nextTick((function(){a.loadData()}))}}},methods:{onqueryload:function(e){this.exportExcelData=e},changeSize:function(e){this.pageSizeIndex=e.detail.value},getWhere:function(){var e=this.query.trim();if(!e)return"";var t=new RegExp(e,"i");return d.map((function(e){return t+".test("+e+")"})).join(" || ")},search:function(){var e=this,t=this.getWhere();this.where=t,this.$nextTick((function(){e.loadData()}))},loadData:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.$refs.udb.loadData({clear:e})},onPageChanged:function(e){this.selectedIndexs.length=0,this.$refs.table.clearSelection(),this.$refs.udb.loadData({current:e.current})},navigateTo:function(e,t){var a=this;uni.navigateTo({url:e,events:{refreshData:function(){a.loadData(t)}}})},selectedItems:function(){var e=this.$refs.udb.dataList;return this.selectedIndexs.map((function(t){return e[t]._id}))},delTable:function(){var e=this;this.$refs.udb.remove(this.selectedItems(),{success:function(t){e.$refs.table.clearSelection()}})},selectionChange:function(e){this.selectedIndexs=e.detail.index},confirmDelete:function(e){var t=this;this.$refs.udb.remove(e,{success:function(e){t.$refs.table.clearSelection()}})},sortChange:function(e,t){var a=this;this.orderByFieldName=t,e.order?this.orderby=t+" "+c[e.order]:this.orderby="",this.$refs.table.clearSelection(),this.$nextTick((function(){a.$refs.udb.loadData()}))},filterChange:function(e,t){var a=this;this._filter[t]={type:e.filterType,value:e.filter};var n=(0,r.filterToWhere)(this._filter,o.command);Object.keys(n).length?this.where=n:this.where="",this.$nextTick((function(){a.$refs.udb.loadData()}))}}};t.default=s}).call(this,a("861b")["default"])},c91b3:function(e,t,a){"use strict";a.r(t);var n=a("bc78"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(r);t["default"]=i.a},d1b9:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){}));var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.text?a("v-uni-text",{staticClass:"uni-tag",class:e.classes,style:e.customStyle,on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClick.apply(void 0,arguments)}}},[e._t("default"),e._v(e._s(e.text)),e._t("right")],2):e._e()},i=[]},f7a4:function(e,t,a){var n=a("c86c");t=n(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-tag[data-v-5a2dd64c]{display:inline-block;padding:0 16px;line-height:30px;color:#333;border-radius:5px;background-color:#f8f8f8;border-width:%?1?%;border-style:solid;border-color:#f8f8f8;cursor:pointer}.uni-tag--circle[data-v-5a2dd64c]{border-radius:15px}.uni-tag--mark[data-v-5a2dd64c]{border-top-left-radius:0;border-bottom-left-radius:0;border-top-right-radius:15px;border-bottom-right-radius:15px}.uni-tag--disabled[data-v-5a2dd64c]{opacity:.5;cursor:not-allowed}.uni-tag--small[data-v-5a2dd64c]{height:20px;padding:0 8px;line-height:20px;font-size:1.5vw}.uni-tag--default[data-v-5a2dd64c]{color:#333;font-size:14px}.uni-tag--royal[data-v-5a2dd64c]{color:#333;font-size:14px}.uni-tag-text--small[data-v-5a2dd64c]{font-size:1.5vw}.uni-tag-text[data-v-5a2dd64c]{color:#fff;font-size:14px}.uni-tag-text--primary[data-v-5a2dd64c]{color:#409eff}.uni-tag-text--success[data-v-5a2dd64c]{color:#4cd964}.uni-tag-text--warning[data-v-5a2dd64c]{color:#f0ad4e}.uni-tag-text--error[data-v-5a2dd64c]{color:#dd524d}.uni-tag-text--royal[data-v-5a2dd64c]{color:#4335d6}.uni-tag--primary[data-v-5a2dd64c]{color:#fff;background-color:#409eff;border-width:%?1?%;border-style:solid;border-color:#409eff}.primary-uni-tag--inverted[data-v-5a2dd64c]{color:#409eff;background-color:#fff;border-width:%?1?%;border-style:solid;border-color:#409eff}.uni-tag--success[data-v-5a2dd64c]{color:#fff;background-color:#4cd964;border-width:%?1?%;border-style:solid;border-color:#4cd964}.success-uni-tag--inverted[data-v-5a2dd64c]{color:#4cd964;background-color:#fff;border-width:%?1?%;border-style:solid;border-color:#4cd964}.uni-tag--warning[data-v-5a2dd64c]{color:#fff;background-color:#f0ad4e;border-width:%?1?%;border-style:solid;border-color:#f0ad4e}.warning-uni-tag--inverted[data-v-5a2dd64c]{color:#f0ad4e;background-color:#fff;border-width:%?1?%;border-style:solid;border-color:#f0ad4e}.uni-tag--error[data-v-5a2dd64c]{color:#fff;background-color:#dd524d;border-width:%?1?%;border-style:solid;border-color:#dd524d}.error-uni-tag--inverted[data-v-5a2dd64c]{color:#dd524d;background-color:#fff;border-width:%?1?%;border-style:solid;border-color:#dd524d}.uni-tag--royal[data-v-5a2dd64c]{color:#fff;background-color:#4335d6;border-width:%?1?%;border-style:solid;border-color:#4335d6}.royal-uni-tag--inverted[data-v-5a2dd64c]{color:#4335d6;background-color:#fff;border-width:%?1?%;border-style:solid;border-color:#4335d6}.uni-tag--inverted[data-v-5a2dd64c]{color:#333;background-color:#fff;border-width:%?1?%;border-style:solid;border-color:#f8f8f8}',""]),e.exports=t},fa44:function(e,t,a){"use strict";a.r(t);var n=a("d1b9"),i=a("27f3");for(var r in i)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(r);a("92b7");var o=a("828b"),d=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"5a2dd64c",null,!1,n["a"],void 0);t["default"]=d.exports},fe69:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return n}));var n={downloadExcel:a("8ef3").default,unicloudDb:a("3220").default,uniTable:a("a9fb").default,uniTr:a("fc4b").default,uniTh:a("9e01").default,uniTd:a("14fc").default,uniTag:a("fa44").default,uniDateformat:a("c9e0").default,uniIcons:a("701f").default,uniPagination:a("cb64").default},i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"fix-top-window"},[a("v-uni-view",{staticClass:"uni-header"},[a("v-uni-view",{staticClass:"uni-group hide-on-phone"},[a("v-uni-view",{staticClass:"uni-title"},[e._v("标签管理")]),a("v-uni-view",{staticClass:"uni-sub-title"})],1),a("v-uni-view",{staticClass:"uni-group"},[a("v-uni-input",{staticClass:"uni-search",attrs:{type:"text",placeholder:"请输入搜索内容"},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)}},model:{value:e.query,callback:function(t){e.query=t},expression:"query"}}),a("v-uni-button",{staticClass:"uni-button",attrs:{type:"default",size:"mini"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)}}},[e._v("搜索")]),a("v-uni-button",{staticClass:"uni-button",attrs:{type:"primary",size:"mini"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.navigateTo("./add")}}},[e._v("新增")]),a("v-uni-button",{staticClass:"uni-button",attrs:{type:"warn",size:"mini",disabled:!e.selectedIndexs.length},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.delTable.apply(void 0,arguments)}}},[e._v("批量删除")]),a("download-excel",{staticClass:"hide-on-phone",attrs:{fields:e.exportExcel.fields,data:e.exportExcelData,type:e.exportExcel.type,name:e.exportExcel.filename}},[a("v-uni-button",{staticClass:"uni-button",attrs:{type:"primary",size:"mini"}},[e._v("导出 Excel")])],1)],1)],1),a("v-uni-view",{staticClass:"uni-container"},[a("unicloud-db",{ref:"udb",attrs:{collection:"uni-id-tag",field:"tagid,name,description,create_date",where:e.where,"page-data":"replace",orderby:e.orderby,getcount:!0,"page-size":e.options.pageSize,"page-current":e.options.pageCurrent,options:e.options,loadtime:"manual"},on:{load:function(t){arguments[0]=t=e.$handleEvent(t),e.onqueryload.apply(void 0,arguments)}},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.data,i=t.pagination,r=t.loading,o=t.error;t.options;return[a("uni-table",{ref:"table",attrs:{loading:r,emptyText:o.message||"没有更多数据",border:!0,stripe:!0,type:"selection"},on:{"selection-change":function(t){arguments[0]=t=e.$handleEvent(t),e.selectionChange.apply(void 0,arguments)}}},[a("uni-tr",[a("uni-th",{attrs:{align:"center","filter-type":"search",sortable:!0},on:{"filter-change":function(t){arguments[0]=t=e.$handleEvent(t),e.filterChange(t,"tagid")},"sort-change":function(t){arguments[0]=t=e.$handleEvent(t),e.sortChange(t,"tagid")}}},[e._v("标签的tagid")]),a("uni-th",{attrs:{align:"center","filter-type":"search",sortable:!0},on:{"filter-change":function(t){arguments[0]=t=e.$handleEvent(t),e.filterChange(t,"name")},"sort-change":function(t){arguments[0]=t=e.$handleEvent(t),e.sortChange(t,"name")}}},[e._v("标签名称")]),a("uni-th",{attrs:{align:"center","filter-type":"search",sortable:!0},on:{"filter-change":function(t){arguments[0]=t=e.$handleEvent(t),e.filterChange(t,"description")},"sort-change":function(t){arguments[0]=t=e.$handleEvent(t),e.sortChange(t,"description")}}},[e._v("标签描述")]),a("uni-th",{attrs:{align:"center","filter-type":"timestamp",sortable:!0},on:{"filter-change":function(t){arguments[0]=t=e.$handleEvent(t),e.filterChange(t,"create_date")},"sort-change":function(t){arguments[0]=t=e.$handleEvent(t),e.sortChange(t,"create_date")}}},[e._v("创建时间")]),a("uni-th",{attrs:{align:"center"}},[e._v("操作")])],1),e._l(n,(function(t,n){return a("uni-tr",{key:n},[a("uni-td",{attrs:{align:"center"}},[e._v(e._s(t.tagid))]),a("uni-td",{attrs:{align:"center"}},[a("uni-tag",{attrs:{type:"primary",inverted:!0,size:"small",text:t.name}})],1),a("uni-td",{attrs:{align:"center"}},[e._v(e._s(t.description))]),a("uni-td",{attrs:{align:"center"}},[a("uni-dateformat",{attrs:{threshold:[0,0],date:t.create_date}})],1),a("uni-td",{attrs:{align:"center"}},[a("v-uni-view",{staticClass:"uni-group"},[a("v-uni-button",{staticClass:"uni-button",attrs:{size:"mini",type:"primary"},on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.navigateTo("../user/list?tagid="+t.tagid,!1)}}},[e._v("成员")]),a("v-uni-button",{staticClass:"uni-button",attrs:{size:"mini",type:"primary"},on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.navigateTo("./edit?id="+t._id,!1)}}},[e._v("修改")]),a("v-uni-button",{staticClass:"uni-button",attrs:{size:"mini",type:"warn"},on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.confirmDelete(t._id)}}},[e._v("删除")])],1)],1)],1)}))],2),a("v-uni-view",{staticClass:"uni-pagination-box"},[a("v-uni-picker",{staticClass:"select-picker",attrs:{mode:"selector",value:e.pageSizeIndex,range:e.pageSizeOption},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.changeSize.apply(void 0,arguments)}}},[a("v-uni-button",{attrs:{type:"default",size:"mini",plain:!0}},[a("v-uni-text",[e._v(e._s(e.pageSizeOption[e.pageSizeIndex])+" "+e._s(e.$t("common.piecePerPage")))]),a("uni-icons",{staticClass:"select-picker-icon",attrs:{type:"arrowdown",size:"12",color:"#999"}})],1)],1),a("uni-pagination",{attrs:{"show-icon":!0,"page-size":i.size,total:i.count},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.onPageChanged.apply(void 0,arguments)}},model:{value:i.current,callback:function(t){e.$set(i,"current",t)},expression:"pagination.current"}})],1)]}}])})],1)],1)},r=[]}}]);