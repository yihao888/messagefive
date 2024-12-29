(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-system-role-list"],{"679c":function(e,t,n){"use strict";n("6a54");var a=n("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.enumConverter=void 0,t.filterToWhere=function(e,t){var n={};for(var a in e){var o=e[a],s=o.type,l=o.value;switch(s){case"search":"string"===typeof l&&l.length&&(n[a]=new RegExp(l));break;case"select":if(l.length){var c,u=[],d=(0,r.default)(l);try{for(d.s();!(c=d.n()).done;){var f=c.value;u.push(t.eq(f))}}catch(C){d.e(C)}finally{d.f()}n[a]=t.or(u)}break;case"range":if(l.length){var h=l[0],p=l[1];n[a]=t.and([t.gte(h),t.lte(p)])}break;case"date":if(l.length){var v=(0,i.default)(l,2),m=v[0],g=v[1],b=new Date(m),_=new Date(g);n[a]=t.and([t.gte(b),t.lte(_)])}break;case"timestamp":if(l.length){var y=(0,i.default)(l,2),x=y[0],$=y[1];n[a]=t.and([t.gte(x),t.lte($)])}break}}return n},t.validator=void 0;var i=a(n("5de6")),r=a(n("3471"));n("23f4"),n("7d2f"),n("5c47"),n("9c4e"),n("ab80"),n("aa9c");t.validator={role_id:{rules:[{required:!0},{format:"string"}],label:"唯一ID"},role_name:{rules:[{required:!0},{format:"string"}],label:"名称"},permission:{rules:[{format:"array"}],label:"权限"},comment:{rules:[{format:"string"}],label:"备注"},create_date:{rules:[{format:"timestamp"}]}};t.enumConverter={}},"864b":function(e,t,n){"use strict";n.r(t);var a=n("bc01"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=i.a},9821:function(e,t,n){"use strict";n.r(t);var a=n("9e26"),i=n("864b");for(var r in i)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(r);var o=n("828b"),s=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"774dba3c",null,!1,a["a"],void 0);t["default"]=s.exports},"9e26":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a}));var a={downloadExcel:n("8ef3").default,unicloudDb:n("3220").default,uniTable:n("a9fb").default,uniTr:n("fc4b").default,uniTh:n("9e01").default,uniTd:n("14fc").default,uniDateformat:n("c9e0").default,uniIcons:n("701f").default,uniPagination:n("cb64").default},i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"fix-top-window"},[n("v-uni-view",{staticClass:"uni-header"},[n("v-uni-view",{staticClass:"uni-group hide-on-phone"},[n("v-uni-view",{staticClass:"uni-title"},[e._v(e._s(e.$t("role.text.roleManager")))]),n("v-uni-view",{staticClass:"uni-sub-title"})],1),n("v-uni-view",{staticClass:"uni-group"},[n("v-uni-input",{staticClass:"uni-search",attrs:{type:"text",placeholder:e.$t("common.placeholder.query")},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)}},model:{value:e.query,callback:function(t){e.query=t},expression:"query"}}),n("v-uni-button",{staticClass:"uni-button",attrs:{type:"default",size:"mini"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)}}},[e._v(e._s(e.$t("common.button.search")))]),n("v-uni-button",{staticClass:"uni-button",attrs:{type:"primary",size:"mini"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.navigateTo("./add")}}},[e._v(e._s(e.$t("common.button.add")))]),n("v-uni-button",{staticClass:"uni-button",attrs:{type:"warn",size:"mini",disabled:!e.selectedIndexs.length},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.delTable.apply(void 0,arguments)}}},[e._v(e._s(e.$t("common.button.batchDelete")))]),n("download-excel",{staticClass:"hide-on-phone",attrs:{fields:e.exportExcel.fields,data:e.exportExcelData,type:e.exportExcel.type,name:e.exportExcel.filename}},[n("v-uni-button",{staticClass:"uni-button",attrs:{type:"primary",size:"mini"}},[e._v(e._s(e.$t("common.button.exportExcel")))])],1)],1)],1),n("v-uni-view",{staticClass:"uni-container"},[n("unicloud-db",{ref:"udb",attrs:{collection:"uni-id-roles,uni-id-permissions",field:"role_id,role_name,permission{permission_name},comment,create_date",where:e.where,"page-data":"replace",orderby:e.orderby,getcount:!0,"page-size":e.options.pageSize,"page-current":e.options.pageCurrent,options:e.options,loadtime:"manual"},on:{load:function(t){arguments[0]=t=e.$handleEvent(t),e.onqueryload.apply(void 0,arguments)}},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.data,i=t.pagination,r=t.loading,o=t.error;t.options;return[n("uni-table",{ref:"table",attrs:{loading:r,emptyText:o.message||e.$t("common.empty"),border:!0,stripe:!0,type:"selection"},on:{"selection-change":function(t){arguments[0]=t=e.$handleEvent(t),e.selectionChange.apply(void 0,arguments)}}},[n("uni-tr",[n("uni-th",{attrs:{align:"center","filter-type":"search",sortable:!0},on:{"filter-change":function(t){arguments[0]=t=e.$handleEvent(t),e.filterChange(t,"role_id")},"sort-change":function(t){arguments[0]=t=e.$handleEvent(t),e.sortChange(t,"role_id")}}},[e._v("唯一ID")]),n("uni-th",{attrs:{align:"center","filter-type":"search",sortable:!0},on:{"filter-change":function(t){arguments[0]=t=e.$handleEvent(t),e.filterChange(t,"role_name")},"sort-change":function(t){arguments[0]=t=e.$handleEvent(t),e.sortChange(t,"role_name")}}},[e._v("名称")]),n("uni-th",{attrs:{align:"center"}},[e._v("权限")]),n("uni-th",{attrs:{align:"center","filter-type":"search",sortable:!0},on:{"filter-change":function(t){arguments[0]=t=e.$handleEvent(t),e.filterChange(t,"comment")},"sort-change":function(t){arguments[0]=t=e.$handleEvent(t),e.sortChange(t,"comment")}}},[e._v("备注")]),n("uni-th",{attrs:{align:"center","filter-type":"timestamp",sortable:!0},on:{"filter-change":function(t){arguments[0]=t=e.$handleEvent(t),e.filterChange(t,"create_date")},"sort-change":function(t){arguments[0]=t=e.$handleEvent(t),e.sortChange(t,"create_date")}}},[e._v("创建时间")]),n("uni-th",{attrs:{align:"center"}},[e._v("操作")])],1),e._l(a,(function(t,a){return n("uni-tr",{key:a},[n("uni-td",{attrs:{align:"center"}},[e._v(e._s(t.role_id))]),n("uni-td",{attrs:{align:"center"}},[e._v(e._s(t.role_name))]),n("uni-td",{attrs:{align:"center"}},[e._v(e._s(t.permission))]),n("uni-td",{attrs:{align:"center"}},[e._v(e._s(t.comment))]),n("uni-td",{attrs:{align:"center"}},[n("uni-dateformat",{attrs:{threshold:[0,0],date:t.create_date}})],1),n("uni-td",{attrs:{align:"center"}},[n("v-uni-view",{staticClass:"uni-group"},[n("v-uni-button",{staticClass:"uni-button",attrs:{size:"mini",type:"primary"},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.navigateTo("./edit?id="+t._id,!1)}}},[e._v(e._s(e.$t("common.button.edit")))]),n("v-uni-button",{staticClass:"uni-button",attrs:{size:"mini",type:"warn"},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.confirmDelete(t._id)}}},[e._v(e._s(e.$t("common.button.delete")))])],1)],1)],1)}))],2),n("v-uni-view",{staticClass:"uni-pagination-box"},[n("v-uni-picker",{staticClass:"select-picker",attrs:{mode:"selector",value:e.pageSizeIndex,range:e.pageSizeOption},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.changeSize.apply(void 0,arguments)}}},[n("v-uni-button",{attrs:{type:"default",size:"mini",plain:!0}},[n("v-uni-text",[e._v(e._s(e.pageSizeOption[e.pageSizeIndex])+" "+e._s(e.$t("common.piecePerPage")))]),n("uni-icons",{staticClass:"select-picker-icon",attrs:{type:"arrowdown",size:"12",color:"#999"}})],1)],1),n("uni-pagination",{attrs:{"show-icon":!0,"page-size":i.size,total:i.count},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.onPageChanged.apply(void 0,arguments)}},model:{value:i.current,callback:function(t){e.$set(i,"current",t)},expression:"pagination.current"}})],1)]}}])})],1)],1)},r=[]},bc01:function(e,t,n){"use strict";(function(e){n("6a54");var a=n("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("fd3c"),n("0c26"),n("23f4"),n("7d2f"),n("5c47"),n("9c4e"),n("ab80"),n("8f71"),n("bf0f"),n("dc8a");var i=a(n("9b1b")),r=n("679c"),o=e.database(),s=["role_id","role_name","permission.permission_name"],l={ascending:"asc",descending:"desc"},c={data:function(){return{query:"",where:"",orderby:"create_date desc",orderByFieldName:"",selectedIndexs:[],pageSizeIndex:0,pageSizeOption:[20,50,100,500],options:(0,i.default)({pageSize:20,pageCurrent:1,filterData:{}},r.enumConverter),imageStyles:{width:64,height:64},exportExcel:{filename:"uni-id-roles.xls",type:"xls",fields:{"唯一ID":"role_id","名称":"role_name","权限":"permission","备注":"comment",create_date:"create_date"}},exportExcelData:[]}},onLoad:function(){this._filter={}},onReady:function(){this.$refs.udb.loadData()},watch:{pageSizeIndex:{immediate:!0,handler:function(e,t){this.options.pageSize=this.pageSizeOption[e],this.options.pageCurrent=1}}},methods:{onqueryload:function(e){for(var t=0;t<e.length;t++){var n=e[t];n.permission=n.permission.map((function(e){return e.permission_name})).join("、"),n.create_date=this.$formatDate(n.create_date)}this.exportExcelData=e},changeSize:function(e){var t=this;this.pageSizeIndex=e.detail.value,this.$nextTick((function(){t.loadData()}))},getWhere:function(){var e=this.query.trim();if(!e)return"";var t=new RegExp(e,"i");return s.map((function(e){return t+".test("+e+")"})).join(" || ")},search:function(){var e=this,t=this.getWhere();this.where=t,this.$nextTick((function(){e.loadData()}))},loadData:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.$refs.udb.loadData({clear:e})},onPageChanged:function(e){this.selectedIndexs.length=0,this.$refs.table.clearSelection(),this.$refs.udb.loadData({current:e.current})},navigateTo:function(e,t){var n=this;uni.navigateTo({url:e,events:{refreshData:function(){n.loadData(t)}}})},selectedItems:function(){var e=this.$refs.udb.dataList;return this.selectedIndexs.map((function(t){return e[t]._id}))},delTable:function(){var e=this;this.$refs.udb.remove(this.selectedItems(),{success:function(t){e.$refs.table.clearSelection()}})},selectionChange:function(e){this.selectedIndexs=e.detail.index},confirmDelete:function(e){var t=this;this.$refs.udb.remove(e,{success:function(e){t.$refs.table.clearSelection()}})},sortChange:function(e,t){var n=this;this.orderByFieldName=t,e.order?this.orderby=t+" "+l[e.order]:this.orderby="",this.$refs.table.clearSelection(),this.$nextTick((function(){n.$refs.udb.loadData()}))},filterChange:function(e,t){var n=this;this._filter[t]={type:e.filterType,value:e.filter};var a=(0,r.filterToWhere)(this._filter,o.command);Object.keys(a).length?this.where=a:this.where="",this.$nextTick((function(){n.$refs.udb.loadData()}))}}};t.default=c}).call(this,n("861b")["default"])}}]);