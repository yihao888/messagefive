(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["uni_modules-uni-push-admin-pages-log-detail"],{"008f":function(t,a,e){"use strict";e("6a54"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e("64aa"),e("e966");var r=e("30b0"),i={name:"uniDateformat",props:{date:{type:[Object,String,Number],default:function(){return"-"}},locale:{type:String,default:"zh"},threshold:{type:Array,default:function(){return[0,0]}},format:{type:String,default:"yyyy/MM/dd hh:mm:ss"},refreshRate:{type:[Number,String],default:0}},data:function(){return{refreshMark:0}},computed:{dateShow:function(){return this.refreshMark,(0,r.friendlyDate)(this.date,{locale:this.locale,threshold:this.threshold,format:this.format})}},watch:{refreshRate:{handler:function(){this.setAutoRefresh()},immediate:!0}},methods:{refresh:function(){this.refreshMark++},setAutoRefresh:function(){var t=this;clearInterval(this.refreshInterval),this.refreshRate&&(this.refreshInterval=setInterval((function(){t.refresh()}),parseInt(this.refreshRate)))}}};a.default=i},2613:function(t,a,e){"use strict";e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return n})),e.d(a,"a",(function(){return r}));var r={uniTable:e("a9fb").default,uniTr:e("fc4b").default,uniTd:e("14fc").default,uniDateformat:e("c9e0").default,uniIcons:e("701f").default,uniTh:e("9e01").default},i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"root"},[e("v-uni-view",{staticClass:"base-data"},[e("v-uni-text",{staticClass:"title-box"},[t._v("基本信息")]),e("v-uni-view",{staticClass:"base-data-table"},[e("uni-table",{attrs:{border:!0}},[e("uni-tr",[e("uni-td",[t._v("推送标题")]),e("uni-td",[t._v(t._s(t.formData.title))])],1),e("uni-tr",[e("uni-td",[t._v("推送时间")]),e("uni-td",[e("uni-dateformat",{attrs:{threshold:[0,0],date:t.formData.creat_time}})],1)],1),e("uni-tr",[e("uni-td",[t._v("推送操作员")]),e("uni-td",[t._v(t._s(t.formData.operator_id[0]?t.formData.operator_id[0].username:"-"))])],1),e("uni-tr",[e("uni-td",[t._v("任务id")]),e("uni-td",[t._v(t._s(t.formData.taskid))])],1),e("uni-tr",[e("uni-td",[t._v("目标平台")]),e("uni-td",[t._v(t._s(t.base_data_platform))])],1),e("uni-tr",[e("uni-td",[t._v("发送目标")]),e("uni-td",[t._v(t._s(t.base_data_audience_type))])],1)],1)],1)],1),e("v-uni-view",{staticClass:"report"},[e("v-uni-view",{staticClass:"title-box"},[e("v-uni-text",{staticClass:"title"},[t._v("推送数据")]),e("v-uni-view",{staticClass:"help"},[e("uni-icons",{attrs:{type:"help",color:"#"}}),e("v-uni-view",{staticClass:"tips"},[e("v-uni-text",[t._v("成功下发数 ：实际下发到客户端的数量（不包含卸载数）")]),e("v-uni-text",[t._v("到达数 ：实际送达到客户端的数量（不包含卸载数，包含关闭通知）")]),e("v-uni-text",[t._v("展示数 ：透传消息无法统计展示数，可通过自定义事件补全")]),e("v-uni-text",[t._v("点击数 ：透传消息无法统计点击数，可通过自定义事件补全")])],1)],1)],1),e("v-uni-view",{staticClass:"total"},[e("uni-table",{attrs:{border:!0}},[e("uni-tr",[e("uni-th",[t._v("目标设备数")]),e("uni-th",[t._v("成功下发数")]),e("uni-th",[t._v("成功接收数")]),e("uni-th",[t._v("消息展示数")]),e("uni-th",[t._v("消息点击数")])],1),e("uni-tr",[e("uni-td",[t._v(t._s(t.formData.report.total.msg_num))]),e("uni-td",[t._v(t._s(t.formData.report.total.target_num))]),e("uni-td",[t._v(t._s(t.formData.report.total.receive_num))]),e("uni-td",[t._v(t._s(t.formData.report.total.display_num))]),e("uni-td",[t._v(t._s(t.formData.report.total.click_num))])],1)],1)],1),e("v-uni-view",{staticClass:"channel"},[e("uni-table",{attrs:{border:!0}},[e("uni-tr",[e("uni-th",[t._v("下发渠道")]),e("uni-th",[t._v("成功下发数")]),e("uni-th",[t._v("到达数")]),e("uni-th",[t._v("展示数")]),e("uni-th",[t._v("点击数")])],1),e("uni-tr",[e("uni-td",[t._v("个推渠道")]),e("uni-td",[t._v(t._s(t.formData.report.gt.target_num))]),e("uni-td",[t._v(t._s(t.formData.report.gt.receive_num))]),e("uni-td",[t._v(t._s(t.formData.report.gt.display_num))]),e("uni-td",[t._v(t._s(t.formData.report.gt.click_num))])],1),t.formData.report.mz?e("uni-tr",[e("uni-td",[t._v("魅族渠道")]),e("uni-td",[t._v(t._s(t.formData.report.mz.target_num))]),e("uni-td",[t._v(t._s(t.formData.report.mz.receive_num))]),e("uni-td",[t._v(t._s(t.formData.report.mz.display_num))]),e("uni-td",[t._v(t._s(t.formData.report.mz.click_num))])],1):t._e(),t.formData.report.hw?e("uni-tr",[e("uni-td",[t._v("华为渠道")]),e("uni-td",[t._v(t._s(t.formData.report.hw.target_num))]),e("uni-td",[t._v(t._s(t.formData.report.hw.receive_num))]),e("uni-td",[t._v(t._s(t.formData.report.hw.display_num))]),e("uni-td",[t._v(t._s(t.formData.report.hw.click_num))])],1):t._e(),t.formData.report.op?e("uni-tr",[e("uni-td",[t._v("OPPO渠道")]),e("uni-td",[t._v(t._s(t.formData.report.op.target_num))]),e("uni-td",[t._v(t._s(t.formData.report.op.receive_num))]),e("uni-td",[t._v(t._s(t.formData.report.op.display_num))]),e("uni-td",[t._v(t._s(t.formData.report.op.click_num))])],1):t._e(),t.formData.report.vv?e("uni-tr",[e("uni-td",[t._v("VIVO渠道")]),e("uni-td",[t._v(t._s(t.formData.report.vv.target_num))]),e("uni-td",[t._v(t._s(t.formData.report.vv.receive_num))]),e("uni-td",[t._v(t._s(t.formData.report.vv.display_num))]),e("uni-td",[t._v(t._s(t.formData.report.vv.click_num))])],1):t._e(),t.formData.report.xm?e("uni-tr",[e("uni-td",[t._v("小米渠道")]),e("uni-td",[t._v(t._s(t.formData.report.xm.target_num))]),e("uni-td",[t._v(t._s(t.formData.report.xm.receive_num))]),e("uni-td",[t._v(t._s(t.formData.report.xm.display_num))]),e("uni-td",[t._v(t._s(t.formData.report.xm.click_num))])],1):t._e(),t.formData.report.fcm?e("uni-tr",[e("uni-td",[t._v("FCM")]),e("uni-td",[t._v(t._s(t.formData.report.fcm.target_num))]),e("uni-td",[t._v(t._s(t.formData.report.fcm.receive_num))]),e("uni-td",[t._v(t._s(t.formData.report.fcm.display_num))]),e("uni-td",[t._v(t._s(t.formData.report.fcm.click_num))])],1):t._e(),t.formData.report.ups?e("uni-tr",[e("uni-td",[t._v("UPS")]),e("uni-td",[t._v(t._s(t.formData.report.ups.target_num))]),e("uni-td",[t._v(t._s(t.formData.report.ups.receive_num))]),e("uni-td",[t._v(t._s(t.formData.report.ups.display_num))]),e("uni-td",[t._v(t._s(t.formData.report.ups.click_num))])],1):t._e()],1)],1)],1)],1)},n=[]},"2bd2":function(t,a,e){"use strict";e.d(a,"b",(function(){return r})),e.d(a,"c",(function(){return i})),e.d(a,"a",(function(){}));var r=function(){var t=this.$createElement,a=this._self._c||t;return a("v-uni-text",[this._v(this._s(this.dateShow))])},i=[]},"2ed9":function(t,a,e){var r=e("66ef");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=e("967d").default;i("7d50cba2",r,!0,{sourceMap:!1,shadowMode:!1})},"5e63":function(t,a,e){"use strict";e.r(a);var r=e("2613"),i=e("7631");for(var n in i)["default"].indexOf(n)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(n);e("6233");var u=e("828b"),o=Object(u["a"])(i["default"],r["b"],r["c"],!1,null,"a73d0370",null,!1,r["a"],void 0);a["default"]=o.exports},6233:function(t,a,e){"use strict";var r=e("2ed9"),i=e.n(r);i.a},"66ef":function(t,a,e){var r=e("c86c");a=r(!1),a.push([t.i,'.root[data-v-a73d0370]{padding:15px}.base-data[data-v-a73d0370]{margin-bottom:15px}.base-data-table[data-v-a73d0370]{padding:30px}.title-box[data-v-a73d0370]{display:flex;flex-direction:row}.uni-table-scroll[data-v-a73d0370]{min-height:auto}.tips[data-v-a73d0370]{display:none;flex-direction:column;font-size:12px;background-color:rgba(0,0,0,.7);color:#fff;padding:12px;border-radius:5px;position:absolute;left:-10px;width:380px;z-index:999;line-height:30px}.help[data-v-a73d0370]{position:relative}.help[data-v-a73d0370]::after{display:none;content:" ";position:absolute;left:4px;top:18px;width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:5px solid rgba(0,0,0,.7)}.help:hover .help[data-v-a73d0370]::after,\n.help:hover .tips[data-v-a73d0370]{display:flex}.total[data-v-a73d0370]{padding:30px;max-width:800px}.channel[data-v-a73d0370]{padding:0 30px;max-width:800px}',""]),t.exports=a},7631:function(t,a,e){"use strict";e.r(a);var r=e("d9a8"),i=e.n(r);for(var n in r)["default"].indexOf(n)<0&&function(t){e.d(a,t,(function(){return r[t]}))}(n);a["default"]=i.a},7921:function(t,a,e){"use strict";e.r(a);var r=e("008f"),i=e.n(r);for(var n in r)["default"].indexOf(n)<0&&function(t){e.d(a,t,(function(){return r[t]}))}(n);a["default"]=i.a},c9e0:function(t,a,e){"use strict";e.r(a);var r=e("2bd2"),i=e("7921");for(var n in i)["default"].indexOf(n)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(n);var u=e("828b"),o=Object(u["a"])(i["default"],r["b"],r["c"],!1,null,"690ab064",null,!1,r["a"],void 0);a["default"]=o.exports},d9a8:function(t,a,e){"use strict";(function(t){e("6a54"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e("8f71"),e("bf0f");var r={computed:{base_data_audience_type:function(){var t=this;return this.options.audience_type_localdata.filter((function(a){return a.value==t.formData.audience_type}))[0].text},base_data_platform:function(){var t=this;return this.options.platform_localdata.filter((function(a){return a.value==t.formData.platform}))[0].text}},data:function(){return{formData:{},options:{audience_type_localdata:[{text:"所有用户",value:"ALL"},{text:"用户id",value:"user_id"},{text:"用户标签",value:"user_tag"},{text:"设备id",value:"device_id"},{text:"个推客户端id",value:"push_clientid"},{text:"个推自定义客户端标签",value:"getui_custom_tag"}],platform_localdata:[{text:"全部",value:"ALL"},{text:"网页端",value:"web"},{text:"App-iOS",value:"app-ios"},{text:"App-Android",value:"app-android"},{text:"微信小程序",value:"mp-weixin"},{text:"360小程序",value:"mp-360"},{text:"百度小程序",value:"mp-baidu"},{text:"支付宝小程序",value:"mp-alipay"},{text:"字节跳动小程序",value:"mp-toutiao"},{text:"QQ小程序",value:"mp-qq"},{text:"快应用联盟",value:"quickapp-webview-union"},{text:"快应用华为",value:"quickapp-webview-huawei"},{text:"快手小程序",value:"mp-kuaishou"},{text:"飞书小程序",value:"mp-lark"},{text:"京东小程序",value:"mp-jd"}]}}},onLoad:function(a){var e=a.data;this.formData=JSON.parse(decodeURIComponent(e)),t.log(this.formData)},onReady:function(){},methods:{}};a.default=r}).call(this,e("ba7c")["default"])}}]);