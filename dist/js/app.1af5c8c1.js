(function(t){function e(e){for(var n,c,s=e[0],a=e[1],d=e[2],l=0,p=[];l<s.length;l++)c=s[l],o[c]&&p.push(o[c][0]),o[c]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,d||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],n=!0,s=1;s<i.length;s++){var a=i[s];0!==o[a]&&(n=!1)}n&&(r.splice(e--,1),t=c(c.s=i[0]))}return t}var n={},o={app:0},r=[];function c(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,c),i.l=!0,i.exports}c.m=t,c.c=n,c.d=function(t,e,i){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(c.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(i,n,function(e){return t[e]}.bind(null,n));return i},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],a=s.push.bind(s);s.push=e,s=s.slice();for(var d=0;d<s.length;d++)e(s[d]);var u=a;r.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"557b":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("f751"),i("097d");var n=i("2b0e"),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"header"},[i("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.show-add",modifiers:{"show-add":!0}}]},[t._v("+ ADD NEW RECORD")])],1),i("table",{staticClass:"table table-hover"},[t._m(0),i("tbody",t._l(t.recordList,function(e){return i("tr",{key:e.id},[i("td",[t._v(t._s(e.name))]),i("td",[t._v("$"+t._s(e.unitPrice))]),i("td",[t._v(t._s(e.unitsInStock))]),i("td",[t._v(t._s(e.Discontinued))]),i("td",{staticClass:"buttons"},[i("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.show-edit",modifiers:{"show-edit":!0}}],staticClass:"btn btn-light",on:{click:function(i){return t.edit(e)}}},[i("span",{staticClass:"oi oi-pencil"}),t._v(" EDIT")]),i("b-button",{staticClass:"btn btn-light",on:{click:function(i){return t.remove(e.id)}}},[i("span",{staticClass:"oi oi-x"}),t._v(" DELETE")])],1)])}),0)]),0===Object.keys(t.records).length?i("div",{staticClass:"no-text"},[t._v("\n        List products is empty:(\n      ")]):t._e()])]),i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"button-group"},t._l(t.pagination.pages,function(e,n){return i("button",{key:n,staticClass:"btn",on:{click:function(i){return i.preventDefault(),t.setPage(e)}}},[t._v("\n          "+t._s(e)+"\n        ")])}),0),Object.keys(this.$store.getters.getRecords).length?i("div",{staticClass:"info-lists"},[t._v("Lists "+t._s(t.pagination.start+1)+" to "+t._s(t.pagination.end+1))]):t._e()]),i("add-modal",{attrs:{page:t.pageNow},on:{setPageUpdate:t.setPage}}),Object.keys(this.$store.getters.getRecords).length?i("edit-modal",{attrs:{name:t.nameProduct,price:t.unitPrice,priceStock:t.unitsInStock,discount:t.discontinued,id:t.idProduct},on:{getRecords:t.getRecords}}):t._e()],1)])},r=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("thead",[i("th",[t._v("Product Name")]),i("th",[t._v("Unit Price")]),i("th",[t._v("Units In Stock")]),i("th",[t._v("Discontinued")]),i("th")])}],c=(i("7f7f"),i("a4bb")),s=i.n(c),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.name?i("b-modal",{attrs:{id:"show-edit",title:"edit record","hide-footer":""},model:{value:t.showModal,callback:function(e){t.showModal=e},expression:"showModal"}},[i("div",{staticClass:"errors"},t._l(t.errors,function(e,n){return i("p",{key:n},[t._v("\n            "+t._s(e)+"\n        ")])}),0),i("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"loading"}),t.name?i("form",[i("label",{attrs:{for:"name_edit"}},[t._v("Product Name\n            "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.nameProduct,expression:"nameProduct"}],attrs:{id:"name_edit",name:"name",type:"text"},domProps:{value:t.nameProduct},on:{input:function(e){e.target.composing||(t.nameProduct=e.target.value)}}})]),i("label",{attrs:{for:"price_edit"}},[t._v("Unit Price\n            "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.priceProduct,expression:"priceProduct"}],attrs:{id:"price_edit",name:"price",type:"number"},domProps:{value:t.priceProduct},on:{input:function(e){e.target.composing||(t.priceProduct=e.target.value)}}})]),i("label",{attrs:{for:"price_stock_edit"}},[t._v("Units In Stock\n            "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.priceStockProduct,expression:"priceStockProduct"}],attrs:{id:"price_stock_edit",name:"price_stock",type:"number"},domProps:{value:t.priceStockProduct},on:{input:function(e){e.target.composing||(t.priceStockProduct=e.target.value)}}})]),i("label",{attrs:{for:"discontinued_edit"}},[t._v("Discontinued\n            "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.discontProduct,expression:"discontProduct"}],attrs:{id:"discontinued_edit",name:"discontinued",type:"checkbox"},domProps:{checked:Array.isArray(t.discontProduct)?t._i(t.discontProduct,null)>-1:t.discontProduct},on:{change:function(e){var i=t.discontProduct,n=e.target,o=!!n.checked;if(Array.isArray(i)){var r=null,c=t._i(i,r);n.checked?c<0&&(t.discontProduct=i.concat([r])):c>-1&&(t.discontProduct=i.slice(0,c).concat(i.slice(c+1)))}else t.discontProduct=o}}})])]):t._e(),i("div",{staticClass:"button-group-form"},[i("b-button",{on:{click:t.closeModal}},[t._v("cancel")]),i("b-button",{on:{click:t.validate}},[t._v("edit")])],1)]):t._e()},d=[],u={props:["id","name","price","priceStock","discount"],data:function(){return{nameProduct:"",priceProduct:0,priceStockProduct:0,discontProduct:!1,showModal:!1,errors:[],loading:!1}},created:function(){this.init()},updated:function(){this.priceProduct<0&&(this.priceProduct=0),this.priceStockProduct<0&&(this.priceStockProduct=0),this.showModal||this.clear()},methods:{init:function(){this.$emit("getRecords"),this.nameProduct=this.name,this.priceProduct=this.price,this.priceStockProduct=this.priceStock,this.discontProduct=this.discount},edit:function(){var t=this;this.loading=!0;var e={id:this.id,name:this.nameProduct,unitPrice:this.priceProduct,unitsInStock:this.priceStockProduct,Discontinued:this.discontProduct};this.$store.dispatch("editRecord",e),setTimeout(function(){t.loading=!1,t.showModal=!1,t.$emit("getRecords")},700)},validate:function(){return this.nameProduct&&this.price>0&&this.priceStock>=0&&this.edit(),this.errors=[],this.nameProduct?this.priceProduct<=0?(this.errors.push("Unit Price sub zero or = 0"),!1):this.priceStockProduct<0?(this.errors.push("Price Stock sub zero or = 0"),!1):void 0:(this.errors.push("Product Name required"),!1)},clear:function(){this.init()},closeModal:function(){this.showModal=!1,this.clear()}},computed:{record:function(){var t=this;return this.$store.getters.getRecords.filter(function(e){return e.id==t.id?e:null})}}},l=u,p=i("2877"),h=Object(p["a"])(l,a,d,!1,null,null,null),m=h.exports,v=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-modal",{attrs:{id:"show-add",title:"add record","hide-footer":""},model:{value:t.showModal,callback:function(e){t.showModal=e},expression:"showModal"}},[i("div",{staticClass:"errors"},t._l(t.errors,function(e,n){return i("p",{key:n},[t._v("\n            "+t._s(e)+"\n        ")])}),0),i("form",[i("label",{attrs:{for:"name"}},[t._v("Product Name\n            "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{id:"name",name:"name",type:"text"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),i("label",{attrs:{for:"price"}},[t._v("Unit Price\n            "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.price,expression:"price"}],attrs:{id:"price",name:"price",type:"number"},domProps:{value:t.price},on:{input:function(e){e.target.composing||(t.price=e.target.value)}}})]),i("label",{attrs:{for:"price_stock"}},[t._v("Units In Stock\n            "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.priceStock,expression:"priceStock"}],attrs:{id:"price_stock",name:"price_stock",type:"number"},domProps:{value:t.priceStock},on:{input:function(e){e.target.composing||(t.priceStock=e.target.value)}}})]),i("label",{attrs:{for:"discontinued"}},[t._v("Discontinued\n            "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.discont,expression:"discont"}],attrs:{id:"discontinued",name:"discontinued",type:"checkbox"},domProps:{checked:Array.isArray(t.discont)?t._i(t.discont,null)>-1:t.discont},on:{change:function(e){var i=t.discont,n=e.target,o=!!n.checked;if(Array.isArray(i)){var r=null,c=t._i(i,r);n.checked?c<0&&(t.discont=i.concat([r])):c>-1&&(t.discont=i.slice(0,c).concat(i.slice(c+1)))}else t.discont=o}}})])]),i("div",{staticClass:"button-group-form"},[i("b-button",{on:{click:t.closeModal}},[t._v("cancel")]),i("b-button",{on:{click:t.validate}},[t._v("add")])],1)])},f=[],g={props:["page"],data:function(){return{name:"",price:"0.00",priceStock:0,discont:!1,record:{},showModal:!1,errors:[]}},updated:function(){this.price<0&&(this.price=0),this.priceStock<0&&(this.priceStock=0),this.showModal||this.clear()},methods:{add:function(){this.record={id:s()(this.$store.getters.getRecords).length+1,name:this.name,unitPrice:this.price,unitsInStock:this.priceStock,Discontinued:this.discont},this.$store.dispatch("addRecord",this.record),this.showModal=!1,this.$emit("setPageUpdate",this.page),this.clear()},clear:function(){this.name="",this.price=0,this.priceStock=0,this.discont=!1},validate:function(){if(this.name&&this.price>0&&this.priceStock>=0){if("0.00"!==this.price&&this.price)while("0"===this.price.charAt(0))this.price=this.price.slice(1);this.add()}return this.errors=[],this.name?this.price<=0?(this.errors.push("Unit Price sub zero or = 0"),!1):this.priceStock<0?(this.errors.push("Price Stock sub zero or = 0"),!1):void 0:(this.errors.push("Product Name required"),!1)},closeModal:function(){this.showModal=!1,this.clear()}}},P=g,k=Object(p["a"])(P,v,f,!1,null,null,null),b=k.exports,_={name:"app",data:function(){return{editModal:!1,perPage:3,pagination:{},idProduct:0,pageNow:1,editIndex:0,recordList:[],nameProduct:"",unitPrice:0,unitsInStock:0,discontinued:!1}},mounted:function(){this.getRecords()},created:function(){this.setPage(1)},methods:{setPage:function(t){this.pageNow=t,this.pagination=this.paginator(s()(this.$store.getters.getRecords).length,t),this.getRecords()},paginate:function(t){return t.slice(this.pagination.start,this.pagination.end+1)},paginator:function(t,e){var i=(e-1)*this.perPage,n=Math.min(i+this.perPage-1,t-1);return{currentPage:e,start:i,end:n,pages:Math.ceil(t/this.perPage)}},remove:function(t){this.$store.dispatch("removeRecord",t),this.setPage(this.pageNow),this.pagination.start>this.pagination.end&&(this.pagination.start=s()(this.$store.getters.getRecords).length-3,this.pagination.end=s()(this.$store.getters.getRecords).length-1,this.getRecords()),this.pagination.start<=0&&(this.getRecords(),this.pagination.start=0)},edit:function(t){this.idProduct=t.id,this.nameProduct=t.name,this.unitPrice=t.unitPrice,this.unitsInStock=t.unitsInStock,this.discontinued=t.Discontinued,this.getRecords()},getRecords:function(){this.recordList=this.paginate(this.$store.getters.getRecords)}},computed:{records:function(){return this.paginate(this.$store.getters.getRecords)}},components:{"edit-modal":m,"add-modal":b}},S=_,w=Object(p["a"])(S,o,r,!1,null,null,null),y=w.exports,R=i("2f62"),D=[{id:0,name:"1",unitPrice:3.34,unitsInStock:0,Discontinued:!0},{id:1,name:"2",unitPrice:18.3,unitsInStock:39,Discontinued:!1},{id:2,name:"3",unitPrice:24.45,unitsInStock:32,Discontinued:!0},{id:3,name:"4",unitPrice:3.43,unitsInStock:0,Discontinued:!0},{id:4,name:"5",unitPrice:18.3,unitsInStock:39,Discontinued:!1},{id:5,name:"6",unitPrice:24.54,unitsInStock:32,Discontinued:!0},{id:6,name:"7",unitPrice:3.43,unitsInStock:0,Discontinued:!0},{id:7,name:"8",unitPrice:18.65,unitsInStock:39,Discontinued:!1},{id:8,name:"9",unitPrice:24.54,unitsInStock:32,Discontinued:!0},{id:9,name:"10",unitPrice:3.23,unitsInStock:0,Discontinued:!0},{id:10,name:"11",unitPrice:18.45,unitsInStock:39,Discontinued:!1},{id:11,name:"12",unitPrice:24.65,unitsInStock:32,Discontinued:!0},{id:12,name:"13",unitPrice:3.35,unitsInStock:0,Discontinued:!0},{id:13,name:"14",unitPrice:18.54,unitsInStock:39,Discontinued:!1},{id:14,name:"15",unitPrice:24.54,unitsInStock:32,Discontinued:!0},{id:15,name:"16",unitPrice:3.45,unitsInStock:0,Discontinued:!0},{id:16,name:"17",unitPrice:18.12,unitsInStock:39,Discontinued:!1},{id:17,name:"18",unitPrice:24.87,unitsInStock:32,Discontinued:!0}],I={state:{records:D},mutations:{addRecord:function(t,e){for(var i in t.records.unshift(e),t.records)t.records[i].id=i},removeRecord:function(t,e){for(var i in t.records=t.records.filter(function(t){return t.id!==e}),t.records)t.records[i].id=i},editRecord:function(t,e){for(var i in t.records[e.id]=e,t.records)t.records[i].id=i}},actions:{addRecord:function(t,e){var i=t.commit;i("addRecord",e)},removeRecord:function(t,e){var i=t.commit;i("removeRecord",e)},editRecord:function(t,e){var i=t.commit;i("editRecord",e)}},getters:{getRecords:function(t){return t.records}}};n["default"].use(R["a"]);var x=new R["a"].Store({modules:{Records:I}}),M=(i("ab8b"),i("557b"),i("8c44"),i("9f7b")),C=i.n(M);n["default"].use(C.a),n["default"].config.productionTip=!1,new n["default"]({store:x,render:function(t){return t(y)}}).$mount("#app")}});
//# sourceMappingURL=app.1af5c8c1.js.map