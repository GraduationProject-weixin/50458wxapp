(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shangpinfenlei/add-or-update"],{"55c3":function(e,t,n){},"67c8":function(e,t,n){"use strict";var r=n("55c3"),i=n.n(r);i.a},"7c35":function(e,t,n){"use strict";n.r(t);var r=n("e915"),i=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);t["default"]=i.a},a06c:function(e,t,n){"use strict";var r,i=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return r}))},bae5:function(e,t,n){"use strict";(function(e){n("6cdc"),n("921b");r(n("66fd"));var t=r(n("d5f8"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},d5f8:function(e,t,n){"use strict";n.r(t);var r=n("a06c"),i=n("7c35");for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);n("67c8");var s,u=n("f0c5"),c=Object(u["a"])(i["default"],r["b"],r["c"],!1,null,"351e8c59",null,!1,r["a"],s);t["default"]=c.exports},e915:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n("a34a"));function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t,n,r,i,a,s){try{var u=e[a](s),c=u.value}catch(o){return void n(o)}u.done?t(c):Promise.resolve(c).then(r,i)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var s=e.apply(t,n);function u(e){a(s,r,i,u,c,"next",e)}function c(e){a(s,r,i,u,c,"throw",e)}u(void 0)}))}}var u=function(){return Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(n.bind(null,"e2b1"))},c=function(){return n.e("components/xia-editor/xia-editor").then(n.bind(null,"064f"))},o=function(){return n.e("components/momo-multipleSelect/momo-multipleSelect").then(n.bind(null,"bd56"))},l={data:function(){return{cross:"",ruleForm:{shangpinfenlei:""},user:{},ro:{shangpinfenlei:!1}}},components:{wPicker:u,xiaEditor:c,multipleSelect:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var t=s(r.default.mark((function t(n){var i,a,s,u;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=e.getStorageSync("nowTable"),t.next=3,this.$api.session(i);case 3:if(a=t.sent,this.user=a.data,this.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(this.ruleForm.refid=n.refid,this.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){t.next=13;break}return this.ruleForm.id=n.id,t.next=11,this.$api.info("shangpinfenlei",this.ruleForm.id);case 11:a=t.sent,this.ruleForm=a.data;case 13:if(this.cross=n.cross,!n.cross){t.next=25;break}s=e.getStorageSync("crossObj"),t.t0=r.default.keys(s);case 17:if((t.t1=t.t0()).done){t.next=25;break}if(u=t.t1.value,"shangpinfenlei"!=u){t.next=23;break}return this.ruleForm.shangpinfenlei=s[u],this.ro.shangpinfenlei=!0,t.abrupt("continue",17);case 23:t.next=17;break;case 25:this.styleChange(),this.$forceUpdate();case 27:case"end":return t.stop()}}),t,this)})));function n(e){return t.apply(this,arguments)}return n}(),methods:{styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var t=s(r.default.mark((function t(){var n,i,a,s,u,c,o,l,f,d;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.ruleForm.shangpinfenlei){t.next=3;break}return this.$utils.msg("商品分类不能为空"),t.abrupt("return");case 3:if(!this.cross){t.next=19;break}if(u=e.getStorageSync("statusColumnName"),c=e.getStorageSync("statusColumnValue"),""==u){t.next=19;break}if(n||(n=e.getStorageSync("crossObj")),u.startsWith("[")){t.next=15;break}for(o in n)o==u&&(n[o]=c);return l=e.getStorageSync("crossTable"),t.next=13,this.$api.update("".concat(l),n);case 13:t.next=19;break;case 15:i=Number(e.getStorageSync("userid")),a=n["id"],s=e.getStorageSync("statusColumnName"),s=s.replace(/\[/,"").replace(/\]/,"");case 19:if(!a||!i){t.next=41;break}return this.ruleForm.crossuserid=i,this.ruleForm.crossrefid=a,f={page:1,limit:10,crossuserid:i,crossrefid:a},t.next=25,this.$api.list("shangpinfenlei",f);case 25:if(d=t.sent,!(d.data.total>=s)){t.next=31;break}return this.$utils.msg(e.getStorageSync("tips")),t.abrupt("return",!1);case 31:if(!this.ruleForm.id){t.next=36;break}return t.next=34,this.$api.update("shangpinfenlei",this.ruleForm);case 34:t.next=38;break;case 36:return t.next=38,this.$api.add("shangpinfenlei",this.ruleForm);case 38:this.$utils.msgBack("提交成功");case 39:t.next=49;break;case 41:if(!this.ruleForm.id){t.next=46;break}return t.next=44,this.$api.update("shangpinfenlei",this.ruleForm);case 44:t.next=48;break;case 46:return t.next=48,this.$api.add("shangpinfenlei",this.ruleForm);case 48:this.$utils.msgBack("提交成功");case 49:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,n=t.getFullYear(),r=t.getMonth()+1,i=t.getDate();return"start"===e?n-=60:"end"===e&&(n+=2),r=r>9?r:"0"+r,i=i>9?i:"0"+i,"".concat(n,"-").concat(r,"-").concat(i)},toggleTab:function(e){this.$refs[e].show()}}};t.default=l}).call(this,n("543d")["default"])}},[["bae5","common/runtime","common/vendor"]]]);