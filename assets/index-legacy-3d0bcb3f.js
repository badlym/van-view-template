!function(){function n(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function t(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(n){o(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))}))}return t}function e(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var r,o,i,a,c=[],u=!0,l=!1;try{if(i=(e=e.call(n)).next,0===t){if(Object(e)!==e)return;u=!1}else for(;!(u=(r=i.call(e)).done)&&(c.push(r.value),c.length!==t);u=!0);}catch(s){l=!0,o=s}finally{try{if(!u&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(l)throw o}}return c}}(n,t)||function(n,t){if(!n)return;if("string"==typeof n)return r(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(n);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return r(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function o(n,t,e){return(t=function(n){var t=function(n,t){if("object"!==i(n)||null===n)return n;var e=n[Symbol.toPrimitive];if(void 0!==e){var r=e.call(n,t||"default");if("object"!==i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(n)}(n,"string");return"symbol"===i(t)?t:String(t)}(t))in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function i(n){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},i(n)}System.register(["./index-legacy-c8908acd.js"],(function(n,r){"use strict";var a,c,u,l,s,f,d,p,v,g,y,m,b,h,S,w,O,j,x,P;return{setters:[function(n){a=n.r,c=n.a,u=n.g,l=n.d,s=n.c,f=n.b,d=n.w,p=n.o,v=n.e,g=n.f,y=n.p,m=n.h,b=n.i,h=n.m,S=n.j,w=n.k,O=n.l,j=n.n,x=n.t,P=n.u}],execute:function(){var r=function(n){return null!=n},z=function(n){return"function"==typeof n},C=function(n){return null!==n&&"object"===i(n)},k=function(n){return"number"==typeof n||/^\d+(\.\d+)?$/.test(n)},A=Object.assign,E="undefined"!=typeof window;function B(n,t){var e=t.split("."),r=n;return e.forEach((function(n){var t;r=C(r)&&null!=(t=r[n])?t:""})),r}var L,T,D=[Number,String],I={type:Boolean,default:!0},V=function(n){return{type:String,default:n}},N="undefined"!=typeof window;E&&/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase());function $(n){if(r(n))return k(n)?"".concat(n,"px"):String(n)}!function(){if(!L&&(L=a(0),T=a(0),N)){var n=function(){L.value=window.innerWidth,T.value=window.innerHeight};n(),window.addEventListener("resize",n,{passive:!0}),window.addEventListener("orientationchange",n,{passive:!0})}}();var q=/-(\w)/g,Z=function(n){return n.replace(q,(function(n,t){return t.toUpperCase()}))},_=Object.prototype.hasOwnProperty;function U(n,t){return Object.keys(t).forEach((function(e){!function(n,t,e){var o=t[e];r(o)&&(_.call(n,e)&&C(o)?n[e]=U(Object(n[e]),o):n[e]=o)}(n,t,e)})),n}var W=a("zh-CN"),H=c({"zh-CN":{name:"姓名",tel:"电话",save:"保存",clear:"清空",cancel:"取消",confirm:"确认",delete:"删除",loading:"加载中...",noCoupon:"暂无优惠券",nameEmpty:"请填写姓名",addContact:"添加联系人",telInvalid:"请填写正确的电话",vanCalendar:{end:"结束",start:"开始",title:"日期选择",weekdays:["日","一","二","三","四","五","六"],monthTitle:function(n,t){return"".concat(n,"年").concat(t,"月")},rangePrompt:function(n){return"最多选择 ".concat(n," 天")}},vanCascader:{select:"请选择"},vanPagination:{prev:"上一页",next:"下一页"},vanPullRefresh:{pulling:"下拉即可刷新...",loosing:"释放即可刷新..."},vanSubmitBar:{label:"合计:"},vanCoupon:{unlimited:"无门槛",discount:function(n){return"".concat(n,"折")},condition:function(n){return"满".concat(n,"元可用")}},vanCouponCell:{title:"优惠券",count:function(n){return"".concat(n,"张可用")}},vanCouponList:{exchange:"兑换",close:"不使用",enable:"可用",disabled:"不可用",placeholder:"输入优惠码"},vanAddressEdit:{area:"地区",areaEmpty:"请选择地区",addressEmpty:"请填写详细地址",addressDetail:"详细地址",defaultAddress:"设为默认收货地址"},vanAddressList:{add:"新增地址"}}}),M={messages:function(){return H[W.value]},use:function(n,t){W.value=n,this.add(o({},n,t))},add:function(){U(H,arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})}},R=M;function F(n){var t=Z(n)+".";return function(n){for(var e=R.messages(),r=B(e,t+n)||B(e,n),o=arguments.length,i=new Array(o>1?o-1:0),a=1;a<o;a++)i[a-1]=arguments[a];return z(r)?r.apply(void 0,i):r}}function G(n,t){return t?"string"==typeof t?" ".concat(n,"--").concat(t):Array.isArray(t)?t.reduce((function(t,e){return t+G(n,e)}),""):Object.keys(t).reduce((function(e,r){return e+(t[r]?G(n,r):"")}),""):""}function J(n){return function(t,e){return t&&"string"!=typeof t&&(e=t,t=""),t=t?"".concat(n,"__").concat(t):n,"".concat(t).concat(G(t,e))}}function K(n){var t="van-".concat(n);return[t,J(t),F(t)]}var Q="".concat("van-hairline","--surround");function X(n){return n.install=function(t){var e=n.name;e&&(t.component(e,n),t.component(Z("-".concat(e)),n))},n}var Y={to:[String,Object],url:String,replace:Boolean};function nn(){var n=u().proxy;return function(){return e=(t=n).to,r=t.url,o=t.replace,i=t.$router,void(e&&i?i[o?"replace":"push"](e):r&&(o?location.replace(r):location.href=r));var t,e,r,o,i}}var tn=e(K("badge"),2),en=tn[0],rn=tn[1],on={dot:Boolean,max:D,tag:V("div"),color:String,offset:Array,content:D,showZero:I,position:V("top-right")},an=X(l({name:en,props:on,setup:function(n,t){var o=t.slots,i=function(){if(o.content)return!0;var t=n.content,e=n.showZero;return r(t)&&""!==t&&(e||0!==t&&"0"!==t)},a=function(){var t=n.dot,e=n.max,a=n.content;if(!t&&i())return o.content?o.content():r(e)&&k(a)&&+a>+e?"".concat(e,"+"):a},c=function(n){return n.startsWith("-")?n.replace("-",""):"-".concat(n)},u=s((function(){var t={background:n.color};if(n.offset){var r=e(n.offset,2),i=r[0],a=r[1],u=e(n.position.split("-"),2),l=u[0],s=u[1];o.default?(t[l]="number"==typeof a?$("top"===l?a:-a):"top"===l?$(a):c(a),t[s]="number"==typeof i?$("left"===s?i:-i):"left"===s?$(i):c(i)):(t.marginTop=$(a),t.marginLeft=$(i))}return t})),l=function(){if(i()||n.dot)return f("div",{class:rn([n.position,{dot:n.dot,fixed:!!o.default}]),style:u.value},[a()])};return function(){if(o.default){var t=n.tag;return f(t,{class:rn("wrapper")},{default:function(){return[o.default(),l()]}})}return l()}}})),cn=e(K("config-provider"),2),un=cn[0],ln=cn[1],sn=Symbol(un),fn={tag:V("div"),theme:V("light"),zIndex:Number,themeVars:Object,themeVarsDark:Object,themeVarsLight:Object,iconPrefix:String};l({name:un,props:fn,setup:function(n,t){var e=t.slots,r=s((function(){return t=A({},n.themeVars,"dark"===n.theme?n.themeVarsDark:n.themeVarsLight),e={},Object.keys(t).forEach((function(n){var r;e["--van-".concat((r=n,r.replace(/([A-Z])/g,"-$1").toLowerCase().replace(/^-/,"")))]=t[n]})),e;var t,e}));if(E){var o=function(){document.documentElement.classList.add("van-theme-".concat(n.theme))},i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.theme;document.documentElement.classList.remove("van-theme-".concat(t))};d((function(){return n.theme}),(function(n,t){t&&i(t),o()}),{immediate:!0}),p(o),v(i),g(i)}return y(sn,n),m((function(){void 0!==n.zIndex&&n.zIndex})),function(){return f(n.tag,{class:ln(),style:r.value},{default:function(){var n;return[null==(n=e.default)?void 0:n.call(e)]}})}}});var dn=e(K("icon"),2),pn=dn[0],vn=dn[1],gn={dot:Boolean,tag:V("i"),name:String,size:D,badge:D,color:String,badgeProps:Object,classPrefix:String},yn=X(l({name:pn,props:gn,setup:function(n,t){var e=t.slots,r=b(sn,null),o=s((function(){return n.classPrefix||(null==r?void 0:r.iconPrefix)||vn()}));return function(){var t=n.tag,r=n.dot,i=n.name,a=n.size,c=n.badge,u=n.color,l=function(n){return null==n?void 0:n.includes("/")}(i);return f(an,h({dot:r,tag:t,class:[o.value,l?"":"".concat(o.value,"-").concat(i)],style:{color:u,fontSize:$(a)},content:c},n.badgeProps),{default:function(){var n;return[null==(n=e.default)?void 0:n.call(e),l&&f("img",{class:vn("image"),src:i},null)]}})}}})),mn=e(K("loading"),2),bn=mn[0],hn=mn[1],Sn=Array(12).fill(null).map((function(n,t){return f("i",{class:hn("line",String(t+1))},null)})),wn=f("svg",{class:hn("circular"),viewBox:"25 25 50 50"},[f("circle",{cx:"50",cy:"50",r:"20",fill:"none"},null)]),On={size:D,type:V("circular"),color:String,vertical:Boolean,textSize:D,textColor:String},jn=X(l({name:bn,props:On,setup:function(n,t){var e=t.slots,o=s((function(){return A({color:n.color},function(n){if(r(n)){if(Array.isArray(n))return{width:$(n[0]),height:$(n[1])};var t=$(n);return{width:t,height:t}}}(n.size))})),i=function(){var t;if(e.default)return f("span",{class:hn("text"),style:{fontSize:$(n.textSize),color:null!=(t=n.textColor)?t:n.color}},[e.default()])};return function(){var t,r=n.type,a=n.vertical;return f("div",{class:hn([r,{vertical:a}]),"aria-live":"polite","aria-busy":!0},[(t="spinner"===n.type?Sn:wn,f("span",{class:hn("spinner",n.type),style:o.value},[e.icon?e.icon():t])),i()])}}})),xn=e(K("button"),2),Pn=xn[0],zn=xn[1],Cn=A({},Y,{tag:V("button"),text:String,icon:String,type:V("default"),size:V("normal"),color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,iconPrefix:String,nativeType:V("button"),loadingSize:D,loadingText:String,loadingType:String,iconPosition:V("left")}),kn=l({name:Pn,props:Cn,emits:["click"],setup:function(n,t){var e=t.emit,r=t.slots,i=nn(),a=function(){return n.loading?r.loading?r.loading():f(jn,{size:n.loadingSize,type:n.loadingType,class:zn("loading")},null):r.icon?f("div",{class:zn("icon")},[r.icon()]):n.icon?f(yn,{name:n.icon,class:zn("icon"),classPrefix:n.iconPrefix},null):void 0},c=function(){var t;if(t=n.loading?n.loadingText:r.default?r.default():n.text)return f("span",{class:zn("text")},[t])},u=function(){var t=n.color,e=n.plain;if(t){var r={color:e?t:"white"};return e||(r.background=t),t.includes("gradient")?r.border=0:r.borderColor=t,r}},l=function(t){n.loading?function(n,t){("boolean"!=typeof n.cancelable||n.cancelable)&&n.preventDefault(),t&&function(n){n.stopPropagation()}(n)}(t):n.disabled||(e("click",t),i())};return function(){var t=n.tag,e=n.type,r=n.size,i=n.block,s=n.round,d=n.plain,p=n.square,v=n.loading,g=n.disabled,y=n.hairline,m=n.nativeType,b=n.iconPosition,h=[zn([e,r,{plain:d,block:i,round:s,square:p,loading:v,disabled:g,hairline:y}]),o({},Q,y)];return f(t,{type:m,class:h,style:u(),disabled:g,onClick:l},{default:function(){return[f("div",{class:zn("content")},["left"===b&&a(),c(),"right"===b&&a()])]}})}}}),An=X(kn),En=l({name:"demo"});n("default",l(t(t({},En),{},{setup:function(n){var t=a("van-view-template");function e(){alert("欢迎使用")}return function(n,r){var o=An;return S(),w("div",null,[f(o,{type:"primary",onClick:e},{default:O((function(){return[j("主要按钮")]})),_:1}),j(" "+x(P(t)),1)])}}})))}}}))}();
