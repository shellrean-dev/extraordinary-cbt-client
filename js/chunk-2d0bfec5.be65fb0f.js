(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bfec5"],{"401d":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[a("router-link",{staticClass:"btn btn-light btn-sm",attrs:{to:{name:"peserta.data"}}},[e._v("Kembali ")])],1),a("div",{staticClass:"card-body"},[a("peserta-form"),a("div",{staticClass:"form-group"},[a("b-button",{attrs:{size:"sm",variant:"primary",disabled:e.isLoading},on:{click:e.submit}},[a("b-spinner",{directives:[{name:"show",rawName:"v-show",value:e.isLoading,expression:"isLoading"}],attrs:{small:"",type:"grow"}}),e._v(" Simpan ")],1)],1)],1),a("div",{staticClass:"card-footer"})])])])},s=[],n=(a("96cf"),a("1da1")),c=a("5530"),i=a("2f62"),o=a("cecb"),u=a("43cb"),d={name:"EditPeserta",computed:Object(c["a"])({},Object(i["c"])(["isLoading"])),methods:Object(c["a"])(Object(c["a"])({},Object(i["b"])("peserta",["updatePeserta","getPesertaById"])),{},{submit:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.updatePeserta(e.$route.params.id);case 3:e.$bvToast.toast("Data peserta berhasil disimpan",Object(o["c"])()),e.$router.push({name:"peserta.data"}),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),e.$bvToast.toast(t.t0.message,Object(o["b"])());case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()}}),components:{"peserta-form":u["a"]},created:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.getPesertaById(e.$route.params.id);case 3:t.next=7;break;case 5:t.prev=5,t.t0=t["catch"](0);case 7:case"end":return t.stop()}}),t,null,[[0,5]])})))()}},p=d,b=a("2877"),l=Object(b["a"])(p,r,s,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d0bfec5.be65fb0f.js.map