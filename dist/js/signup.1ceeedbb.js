(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["signup"],{"5c9c":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login fill-height"},[r("base-form",{attrs:{title:"SignUp"},scopedSlots:e._u([{key:"default",fn:function(){return[r("v-form",{ref:"form"},[r("v-text-field",{attrs:{label:"Email",type:"email",placeholder:"Enter your email","prepend-inner-icon":"mdi-email",rules:[e.rules.required,e.rules.email],filled:"",rounded:"",dense:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),r("v-text-field",{attrs:{label:"User name",placeholder:"Enter your user name","prepend-inner-icon":"mdi-account",type:"text",rules:[e.rules.required,e.rules.min,e.rules.max,e.rules.checkText],filled:"",rounded:"",dense:""},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),r("v-text-field",{attrs:{label:"Password","append-icon":e.showPass?"mdi-eye":"mdi-eye-off","prepend-inner-icon":"mdi-key",type:e.showPass?"text":"password",placeholder:"Enter your password",rules:[e.rules.required,e.rules.password],filled:"",rounded:"",dense:""},on:{"click:append":function(t){e.showPass=!e.showPass}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),r("v-text-field",{attrs:{label:"Confirm Password","append-icon":e.showPass2?"mdi-eye":"mdi-eye-off","prepend-inner-icon":"mdi-key",type:e.showPass2?"text":"password",placeholder:"Confirm your password",rules:[e.rules.required,e.rules.matchpassword],filled:"",rounded:"",dense:""},on:{"click:append":function(t){e.showPass2=!e.showPass2}},model:{value:e.conPassWord,callback:function(t){e.conPassWord=t},expression:"conPassWord"}}),r("div",{},[r("p",{staticClass:"text-center"},[e._v(" if you have any account, please "),r("router-link",{attrs:{to:"/login"}},[r("strong",[e._v("click here")])]),e._v(" to login! ")],1)]),r("v-btn",{attrs:{block:"",depressed:"",rounded:"",loading:e.loading,large:"",color:"blue",dark:""},on:{click:e.handleRegister}},[e._v("SignUp")])],1)]},proxy:!0}])})],1)},o=[];r("d3b7");function a(e,t,r,n,o,a,i){try{var s=e[a](i),c=s.value}catch(u){return void r(u)}s.done?t(c):Promise.resolve(c).then(n,o)}function i(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function s(e){a(i,n,o,s,c,"next",e)}function c(e){a(i,n,o,s,c,"throw",e)}s(void 0)}))}}r("96cf"),r("ac1f"),r("5319");var s=r("7d95"),c=r("db65"),u=r("dae1"),l=r("279c"),f={name:"SignUp",data:function(){var e=this;return{showPass:!1,showPass2:!1,username:"",email:"",password:"",conPassWord:"",loading:!1,rules:{required:function(e){return!!e||"Required field."},email:function(e){return u["a"].test(e)||"Email is not valid."},min:function(e){return e.length>=6||"Min 6 caracters."},max:function(e){return e.length<=50||"Max 50 caracters."},checkText:function(e){return u["c"].test(e)||"Invalid format."},password:function(e){return u["b"].test(e)||"8 characters, a number, a lowercase letter, an uppercase letter."},matchpassword:function(t){return t===e.password||"Passwords don't match.."}}}},methods:{handleRegister:function(){var e=this;return i(regeneratorRuntime.mark((function t(){var r,n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.$refs.form.validate()){t.next=15;break}return e.loading=!0,t.next=4,l.genSalt(10);case 4:return r=t.sent,t.next=7,l.hash(e.password,r);case 7:n=t.sent,o={username:e.username,email:e.email,password:n},localStorage.setItem("user",JSON.stringify(o)),e.loading=!1,e.$router.replace("/login"),s["a"].success("Registered success!"),t.next=16;break;case 15:s["a"].error("fill all the blanks!");case 16:case"end":return t.stop()}}),t)})))()}},components:{BaseForm:c["a"]}},h=f,d=r("2877"),p=r("6544"),m=r.n(p),v=r("8336"),y=r("4bd4"),g=r("8654"),w=Object(d["a"])(h,n,o,!1,null,"39070a4f",null);t["default"]=w.exports;m()(w,{VBtn:v["a"],VForm:y["a"],VTextField:g["a"]})},"96cf":function(e,t,r){var n=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(N){c=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var o=t&&t.prototype instanceof v?t:v,a=Object.create(o.prototype),i=new S(n||[]);return a._invoke=P(e,r,i),a}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(N){return{type:"throw",arg:N}}}e.wrap=u;var f="suspendedStart",h="suspendedYield",d="executing",p="completed",m={};function v(){}function y(){}function g(){}var w={};c(w,a,(function(){return this}));var x=Object.getPrototypeOf,b=x&&x(x(T([])));b&&b!==r&&n.call(b,a)&&(w=b);var k=g.prototype=v.prototype=Object.create(w);function E(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function L(e,t){function r(o,a,i,s){var c=l(e[o],e,a);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"===typeof f&&n.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,i,s)}),(function(e){r("throw",e,i,s)})):t.resolve(f).then((function(e){u.value=e,i(u)}),(function(e){return r("throw",e,i,s)}))}s(c.arg)}var o;function a(e,n){function a(){return new t((function(t,o){r(e,n,t,o)}))}return o=o?o.then(a,a):a()}this._invoke=a}function P(e,t,r){var n=f;return function(o,a){if(n===d)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw a;return F()}r.method=o,r.arg=a;while(1){var i=r.delegate;if(i){var s=_(i,r);if(s){if(s===m)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var c=l(e,t,r);if("normal"===c.type){if(n=r.done?p:h,c.arg===m)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=p,r.method="throw",r.arg=c.arg)}}}function _(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator["return"]&&(r.method="return",r.arg=t,_(e,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=l(n,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,m;var a=o.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,m):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function T(e){if(e){var r=e[a];if(r)return r.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){while(++o<e.length)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}return{next:F}}function F(){return{value:t,done:!0}}return y.prototype=g,c(k,"constructor",g),c(g,"constructor",y),y.displayName=c(g,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,c(e,s,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(L.prototype),c(L.prototype,i,(function(){return this})),e.AsyncIterator=L,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new L(u(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},E(k),c(k,s,"Generator"),c(k,a,(function(){return this})),c(k,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){while(t.length){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=T,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return s.type="throw",s.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:T(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),m}},e}(e.exports);try{regeneratorRuntime=n}catch(o){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}}]);
//# sourceMappingURL=signup.1ceeedbb.js.map