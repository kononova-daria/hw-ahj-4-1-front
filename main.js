(()=>{var r={9662:(r,t,e)=>{var n=e(614),o=e(6330);r.exports=function(r){if(n(r))return r;throw TypeError(o(r)+" is not a function")}},9670:(r,t,e)=>{var n=e(111);r.exports=function(r){if(n(r))return r;throw TypeError(String(r)+" is not an object")}},1318:(r,t,e)=>{var n=e(5656),o=e(1400),i=e(6244),a=function(r){return function(t,e,a){var u,c=n(t),s=i(c),l=o(a,s);if(r&&e!=e){for(;s>l;)if((u=c[l++])!=u)return!0}else for(;s>l;l++)if((r||l in c)&&c[l]===e)return r||l||0;return!r&&-1}};r.exports={includes:a(!0),indexOf:a(!1)}},1194:(r,t,e)=>{var n=e(7293),o=e(5112),i=e(7392),a=o("species");r.exports=function(r){return i>=51||!n((function(){var t=[];return(t.constructor={})[a]=function(){return{foo:1}},1!==t[r](Boolean).foo}))}},7475:(r,t,e)=>{var n=e(3157),o=e(4411),i=e(111),a=e(5112)("species");r.exports=function(r){var t;return n(r)&&(t=r.constructor,(o(t)&&(t===Array||n(t.prototype))||i(t)&&null===(t=t[a]))&&(t=void 0)),void 0===t?Array:t}},5417:(r,t,e)=>{var n=e(7475);r.exports=function(r,t){return new(n(r))(0===t?0:t)}},4326:r=>{var t={}.toString;r.exports=function(r){return t.call(r).slice(8,-1)}},648:(r,t,e)=>{var n=e(1694),o=e(614),i=e(4326),a=e(5112)("toStringTag"),u="Arguments"==i(function(){return arguments}());r.exports=n?i:function(r){var t,e,n;return void 0===r?"Undefined":null===r?"Null":"string"==typeof(e=function(r,t){try{return r[t]}catch(r){}}(t=Object(r),a))?e:u?i(t):"Object"==(n=i(t))&&o(t.callee)?"Arguments":n}},9920:(r,t,e)=>{var n=e(2597),o=e(3887),i=e(1236),a=e(3070);r.exports=function(r,t){for(var e=o(t),u=a.f,c=i.f,s=0;s<e.length;s++){var l=e[s];n(r,l)||u(r,l,c(t,l))}}},8880:(r,t,e)=>{var n=e(9781),o=e(3070),i=e(9114);r.exports=n?function(r,t,e){return o.f(r,t,i(1,e))}:function(r,t,e){return r[t]=e,r}},9114:r=>{r.exports=function(r,t){return{enumerable:!(1&r),configurable:!(2&r),writable:!(4&r),value:t}}},6135:(r,t,e)=>{"use strict";var n=e(4948),o=e(3070),i=e(9114);r.exports=function(r,t,e){var a=n(t);a in r?o.f(r,a,i(0,e)):r[a]=e}},9781:(r,t,e)=>{var n=e(7293);r.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:(r,t,e)=>{var n=e(7854),o=e(111),i=n.document,a=o(i)&&o(i.createElement);r.exports=function(r){return a?i.createElement(r):{}}},8113:(r,t,e)=>{var n=e(5005);r.exports=n("navigator","userAgent")||""},7392:(r,t,e)=>{var n,o,i=e(7854),a=e(8113),u=i.process,c=i.Deno,s=u&&u.versions||c&&c.version,l=s&&s.v8;l?o=(n=l.split("."))[0]<4?1:n[0]+n[1]:a&&(!(n=a.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=a.match(/Chrome\/(\d+)/))&&(o=n[1]),r.exports=o&&+o},748:r=>{r.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:(r,t,e)=>{var n=e(7854),o=e(1236).f,i=e(8880),a=e(1320),u=e(3505),c=e(9920),s=e(4705);r.exports=function(r,t){var e,l,f,p,v,d=r.target,h=r.global,y=r.stat;if(e=h?n:y?n[d]||u(d,{}):(n[d]||{}).prototype)for(l in t){if(p=t[l],f=r.noTargetGet?(v=o(e,l))&&v.value:e[l],!s(h?l:d+(y?".":"#")+l,r.forced)&&void 0!==f){if(typeof p==typeof f)continue;c(p,f)}(r.sham||f&&f.sham)&&i(p,"sham",!0),a(e,l,p,r)}}},7293:r=>{r.exports=function(r){try{return!!r()}catch(r){return!0}}},6530:(r,t,e)=>{var n=e(9781),o=e(2597),i=Function.prototype,a=n&&Object.getOwnPropertyDescriptor,u=o(i,"name"),c=u&&"something"===function(){}.name,s=u&&(!n||n&&a(i,"name").configurable);r.exports={EXISTS:u,PROPER:c,CONFIGURABLE:s}},5005:(r,t,e)=>{var n=e(7854),o=e(614),i=function(r){return o(r)?r:void 0};r.exports=function(r,t){return arguments.length<2?i(n[r]):n[r]&&n[r][t]}},8173:(r,t,e)=>{var n=e(9662);r.exports=function(r,t){var e=r[t];return null==e?void 0:n(e)}},7854:(r,t,e)=>{var n=function(r){return r&&r.Math==Math&&r};r.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e.g&&e.g)||function(){return this}()||Function("return this")()},2597:(r,t,e)=>{var n=e(7908),o={}.hasOwnProperty;r.exports=Object.hasOwn||function(r,t){return o.call(n(r),t)}},3501:r=>{r.exports={}},4664:(r,t,e)=>{var n=e(9781),o=e(7293),i=e(317);r.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:(r,t,e)=>{var n=e(7293),o=e(4326),i="".split;r.exports=n((function(){return!Object("z").propertyIsEnumerable(0)}))?function(r){return"String"==o(r)?i.call(r,""):Object(r)}:Object},2788:(r,t,e)=>{var n=e(614),o=e(5465),i=Function.toString;n(o.inspectSource)||(o.inspectSource=function(r){return i.call(r)}),r.exports=o.inspectSource},9909:(r,t,e)=>{var n,o,i,a=e(8536),u=e(7854),c=e(111),s=e(8880),l=e(2597),f=e(5465),p=e(6200),v=e(3501),d="Object already initialized",h=u.WeakMap;if(a||f.state){var y=f.state||(f.state=new h),b=y.get,m=y.has,g=y.set;n=function(r,t){if(m.call(y,r))throw new TypeError(d);return t.facade=r,g.call(y,r,t),t},o=function(r){return b.call(y,r)||{}},i=function(r){return m.call(y,r)}}else{var w=p("state");v[w]=!0,n=function(r,t){if(l(r,w))throw new TypeError(d);return t.facade=r,s(r,w,t),t},o=function(r){return l(r,w)?r[w]:{}},i=function(r){return l(r,w)}}r.exports={set:n,get:o,has:i,enforce:function(r){return i(r)?o(r):n(r,{})},getterFor:function(r){return function(t){var e;if(!c(t)||(e=o(t)).type!==r)throw TypeError("Incompatible receiver, "+r+" required");return e}}}},3157:(r,t,e)=>{var n=e(4326);r.exports=Array.isArray||function(r){return"Array"==n(r)}},614:r=>{r.exports=function(r){return"function"==typeof r}},4411:(r,t,e)=>{var n=e(7293),o=e(614),i=e(648),a=e(5005),u=e(2788),c=[],s=a("Reflect","construct"),l=/^\s*(?:class|function)\b/,f=l.exec,p=!l.exec((function(){})),v=function(r){if(!o(r))return!1;try{return s(Object,c,r),!0}catch(r){return!1}};r.exports=!s||n((function(){var r;return v(v.call)||!v(Object)||!v((function(){r=!0}))||r}))?function(r){if(!o(r))return!1;switch(i(r)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}return p||!!f.call(l,u(r))}:v},4705:(r,t,e)=>{var n=e(7293),o=e(614),i=/#|\.prototype\./,a=function(r,t){var e=c[u(r)];return e==l||e!=s&&(o(t)?n(t):!!t)},u=a.normalize=function(r){return String(r).replace(i,".").toLowerCase()},c=a.data={},s=a.NATIVE="N",l=a.POLYFILL="P";r.exports=a},111:(r,t,e)=>{var n=e(614);r.exports=function(r){return"object"==typeof r?null!==r:n(r)}},1913:r=>{r.exports=!1},2190:(r,t,e)=>{var n=e(614),o=e(5005),i=e(3307);r.exports=i?function(r){return"symbol"==typeof r}:function(r){var t=o("Symbol");return n(t)&&Object(r)instanceof t}},6244:(r,t,e)=>{var n=e(7466);r.exports=function(r){return n(r.length)}},133:(r,t,e)=>{var n=e(7392),o=e(7293);r.exports=!!Object.getOwnPropertySymbols&&!o((function(){var r=Symbol();return!String(r)||!(Object(r)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},8536:(r,t,e)=>{var n=e(7854),o=e(614),i=e(2788),a=n.WeakMap;r.exports=o(a)&&/native code/.test(i(a))},3070:(r,t,e)=>{var n=e(9781),o=e(4664),i=e(9670),a=e(4948),u=Object.defineProperty;t.f=n?u:function(r,t,e){if(i(r),t=a(t),i(e),o)try{return u(r,t,e)}catch(r){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(r[t]=e.value),r}},1236:(r,t,e)=>{var n=e(9781),o=e(5296),i=e(9114),a=e(5656),u=e(4948),c=e(2597),s=e(4664),l=Object.getOwnPropertyDescriptor;t.f=n?l:function(r,t){if(r=a(r),t=u(t),s)try{return l(r,t)}catch(r){}if(c(r,t))return i(!o.f.call(r,t),r[t])}},8006:(r,t,e)=>{var n=e(6324),o=e(748).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(r){return n(r,o)}},5181:(r,t)=>{t.f=Object.getOwnPropertySymbols},6324:(r,t,e)=>{var n=e(2597),o=e(5656),i=e(1318).indexOf,a=e(3501);r.exports=function(r,t){var e,u=o(r),c=0,s=[];for(e in u)!n(a,e)&&n(u,e)&&s.push(e);for(;t.length>c;)n(u,e=t[c++])&&(~i(s,e)||s.push(e));return s}},5296:(r,t)=>{"use strict";var e={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!e.call({1:2},1);t.f=o?function(r){var t=n(this,r);return!!t&&t.enumerable}:e},2140:(r,t,e)=>{var n=e(614),o=e(111);r.exports=function(r,t){var e,i;if("string"===t&&n(e=r.toString)&&!o(i=e.call(r)))return i;if(n(e=r.valueOf)&&!o(i=e.call(r)))return i;if("string"!==t&&n(e=r.toString)&&!o(i=e.call(r)))return i;throw TypeError("Can't convert object to primitive value")}},3887:(r,t,e)=>{var n=e(5005),o=e(8006),i=e(5181),a=e(9670);r.exports=n("Reflect","ownKeys")||function(r){var t=o.f(a(r)),e=i.f;return e?t.concat(e(r)):t}},1320:(r,t,e)=>{var n=e(7854),o=e(614),i=e(2597),a=e(8880),u=e(3505),c=e(2788),s=e(9909),l=e(6530).CONFIGURABLE,f=s.get,p=s.enforce,v=String(String).split("String");(r.exports=function(r,t,e,c){var s,f=!!c&&!!c.unsafe,d=!!c&&!!c.enumerable,h=!!c&&!!c.noTargetGet,y=c&&void 0!==c.name?c.name:t;o(e)&&("Symbol("===String(y).slice(0,7)&&(y="["+String(y).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!i(e,"name")||l&&e.name!==y)&&a(e,"name",y),(s=p(e)).source||(s.source=v.join("string"==typeof y?y:""))),r!==n?(f?!h&&r[t]&&(d=!0):delete r[t],d?r[t]=e:a(r,t,e)):d?r[t]=e:u(t,e)})(Function.prototype,"toString",(function(){return o(this)&&f(this).source||c(this)}))},4488:r=>{r.exports=function(r){if(null==r)throw TypeError("Can't call method on "+r);return r}},3505:(r,t,e)=>{var n=e(7854);r.exports=function(r,t){try{Object.defineProperty(n,r,{value:t,configurable:!0,writable:!0})}catch(e){n[r]=t}return t}},6200:(r,t,e)=>{var n=e(2309),o=e(9711),i=n("keys");r.exports=function(r){return i[r]||(i[r]=o(r))}},5465:(r,t,e)=>{var n=e(7854),o=e(3505),i="__core-js_shared__",a=n[i]||o(i,{});r.exports=a},2309:(r,t,e)=>{var n=e(1913),o=e(5465);(r.exports=function(r,t){return o[r]||(o[r]=void 0!==t?t:{})})("versions",[]).push({version:"3.18.2",mode:n?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},1400:(r,t,e)=>{var n=e(9303),o=Math.max,i=Math.min;r.exports=function(r,t){var e=n(r);return e<0?o(e+t,0):i(e,t)}},5656:(r,t,e)=>{var n=e(8361),o=e(4488);r.exports=function(r){return n(o(r))}},9303:r=>{var t=Math.ceil,e=Math.floor;r.exports=function(r){var n=+r;return n!=n||0===n?0:(n>0?e:t)(n)}},7466:(r,t,e)=>{var n=e(9303),o=Math.min;r.exports=function(r){return r>0?o(n(r),9007199254740991):0}},7908:(r,t,e)=>{var n=e(4488);r.exports=function(r){return Object(n(r))}},7593:(r,t,e)=>{var n=e(111),o=e(2190),i=e(8173),a=e(2140),u=e(5112)("toPrimitive");r.exports=function(r,t){if(!n(r)||o(r))return r;var e,c=i(r,u);if(c){if(void 0===t&&(t="default"),e=c.call(r,t),!n(e)||o(e))return e;throw TypeError("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(r,t)}},4948:(r,t,e)=>{var n=e(7593),o=e(2190);r.exports=function(r){var t=n(r,"string");return o(t)?t:String(t)}},1694:(r,t,e)=>{var n={};n[e(5112)("toStringTag")]="z",r.exports="[object z]"===String(n)},6330:r=>{r.exports=function(r){try{return String(r)}catch(r){return"Object"}}},9711:r=>{var t=0,e=Math.random();r.exports=function(r){return"Symbol("+String(void 0===r?"":r)+")_"+(++t+e).toString(36)}},3307:(r,t,e)=>{var n=e(133);r.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5112:(r,t,e)=>{var n=e(7854),o=e(2309),i=e(2597),a=e(9711),u=e(133),c=e(3307),s=o("wks"),l=n.Symbol,f=c?l:l&&l.withoutSetter||a;r.exports=function(r){return i(s,r)&&(u||"string"==typeof s[r])||(u&&i(l,r)?s[r]=l[r]:s[r]=f("Symbol."+r)),s[r]}},2222:(r,t,e)=>{"use strict";var n=e(2109),o=e(7293),i=e(3157),a=e(111),u=e(7908),c=e(6244),s=e(6135),l=e(5417),f=e(1194),p=e(5112),v=e(7392),d=p("isConcatSpreadable"),h=9007199254740991,y="Maximum allowed index exceeded",b=v>=51||!o((function(){var r=[];return r[d]=!1,r.concat()[0]!==r})),m=f("concat"),g=function(r){if(!a(r))return!1;var t=r[d];return void 0!==t?!!t:i(r)};n({target:"Array",proto:!0,forced:!b||!m},{concat:function(r){var t,e,n,o,i,a=u(this),f=l(a,0),p=0;for(t=-1,n=arguments.length;t<n;t++)if(g(i=-1===t?a:arguments[t])){if(p+(o=c(i))>h)throw TypeError(y);for(e=0;e<o;e++,p++)e in i&&s(f,p,i[e])}else{if(p>=h)throw TypeError(y);s(f,p++,i)}return f.length=p,f}})},7042:(r,t,e)=>{"use strict";var n=e(2109),o=e(3157),i=e(4411),a=e(111),u=e(1400),c=e(6244),s=e(5656),l=e(6135),f=e(5112),p=e(1194)("slice"),v=f("species"),d=[].slice,h=Math.max;n({target:"Array",proto:!0,forced:!p},{slice:function(r,t){var e,n,f,p=s(this),y=c(p),b=u(r,y),m=u(void 0===t?y:t,y);if(o(p)&&(e=p.constructor,(i(e)&&(e===Array||o(e.prototype))||a(e)&&null===(e=e[v]))&&(e=void 0),e===Array||void 0===e))return d.call(p,b,m);for(n=new(void 0===e?Array:e)(h(m-b,0)),f=0;b<m;b++,f++)b in p&&l(n,f,p[b]);return n.length=f,n}})}},t={};function e(n){if(t[n])return t[n].exports;var o=t[n]={exports:{}};return r[n](o,o.exports,e),o.exports}e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(r){if("object"==typeof window)return window}}(),(()=>{"use strict";e(2222),e(7042);function r(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}var t=function(){function t(){!function(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.container=null,this.msgs=null}var e,n,o;return e=t,(n=[{key:"bindToDOM",value:function(r){if(!(r instanceof HTMLElement))throw new Error("Container is not HTMLElement");this.container=r,this.tickets=[]}},{key:"checkBinding",value:function(){if(null===this.container)throw new Error("Board not bind to DOM")}},{key:"draw",value:function(){this.checkBinding();var r=document.createElement("div");r.classList.add("msgs-container"),this.container.appendChild(r),this.msgs=r}},{key:"addMsg",value:function(r){for(var t=0;t<r.length;t+=1){var e=document.createElement("div");e.classList.add("msg"),this.msgs.prepend(e);var n=document.createElement("div");e.appendChild(n);var o=document.createElement("span");o.classList.add("mail"),o.textContent="".concat(r[t].from),n.appendChild(o);var i=document.createElement("span");if(i.classList.add("text"),r[t].subject.length<15)i.textContent="".concat(r[t].subject);else{var a=r[t].subject.slice(0,15);i.textContent="".concat(a,"...")}n.appendChild(i);var u=document.createElement("div");u.classList.add("date-container");var c=new Date(r[t].received),s=c.getFullYear();s=String(s).slice(2);var l=c.getMonth()+1;l<10&&(l="0".concat(l));var f=c.getDate();f<10&&(f="0".concat(f));var p=c.getHours();p<10&&(p="0".concat(p));var v=c.getMinutes();v<10&&(v="0".concat(v)),u.textContent="".concat(p,":").concat(v," ").concat(f,".").concat(l,".").concat(s),e.appendChild(u)}}}])&&r(e.prototype,n),o&&r(e,o),t}(),n=function(r,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,t){r.__proto__=t}||function(r,t){for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(r[e]=t[e])})(r,t)};function o(r,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function e(){this.constructor=r}n(r,t),r.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)}var i=function(){return(i=Object.assign||function(r){for(var t,e=1,n=arguments.length;e<n;e++)for(var o in t=arguments[e])Object.prototype.hasOwnProperty.call(t,o)&&(r[o]=t[o]);return r}).apply(this,arguments)};Object.create;function a(r){var t="function"==typeof Symbol&&Symbol.iterator,e=t&&r[t],n=0;if(e)return e.call(r);if(r&&"number"==typeof r.length)return{next:function(){return r&&n>=r.length&&(r=void 0),{value:r&&r[n++],done:!r}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function u(r,t){var e="function"==typeof Symbol&&r[Symbol.iterator];if(!e)return r;var n,o,i=e.call(r),a=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)a.push(n.value)}catch(r){o={error:r}}finally{try{n&&!n.done&&(e=i.return)&&e.call(i)}finally{if(o)throw o.error}}return a}function c(r,t){for(var e=0,n=t.length,o=r.length;e<n;e++,o++)r[o]=t[e];return r}Object.create;function s(r){return"function"==typeof r}function l(r){return function(t){if(function(r){return s(null==r?void 0:r.lift)}(t))return t.lift((function(t){try{return r(t,this)}catch(r){this.error(r)}}));throw new TypeError("Unable to lift unknown Observable type")}}function f(r){var t=r((function(r){Error.call(r),r.stack=(new Error).stack}));return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var p=f((function(r){return function(t){r(this),this.message=t?t.length+" errors occurred during unsubscription:\n"+t.map((function(r,t){return t+1+") "+r.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=t}}));function v(r,t){if(r){var e=r.indexOf(t);0<=e&&r.splice(e,1)}}var d=function(){function r(r){this.initialTeardown=r,this.closed=!1,this._parentage=null,this._teardowns=null}var t;return r.prototype.unsubscribe=function(){var r,t,e,n,o;if(!this.closed){this.closed=!0;var i=this._parentage;if(i)if(this._parentage=null,Array.isArray(i))try{for(var l=a(i),f=l.next();!f.done;f=l.next()){f.value.remove(this)}}catch(t){r={error:t}}finally{try{f&&!f.done&&(t=l.return)&&t.call(l)}finally{if(r)throw r.error}}else i.remove(this);var v=this.initialTeardown;if(s(v))try{v()}catch(r){o=r instanceof p?r.errors:[r]}var d=this._teardowns;if(d){this._teardowns=null;try{for(var h=a(d),b=h.next();!b.done;b=h.next()){var m=b.value;try{y(m)}catch(r){o=null!=o?o:[],r instanceof p?o=c(c([],u(o)),u(r.errors)):o.push(r)}}}catch(r){e={error:r}}finally{try{b&&!b.done&&(n=h.return)&&n.call(h)}finally{if(e)throw e.error}}}if(o)throw new p(o)}},r.prototype.add=function(t){var e;if(t&&t!==this)if(this.closed)y(t);else{if(t instanceof r){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._teardowns=null!==(e=this._teardowns)&&void 0!==e?e:[]).push(t)}},r.prototype._hasParent=function(r){var t=this._parentage;return t===r||Array.isArray(t)&&t.includes(r)},r.prototype._addParent=function(r){var t=this._parentage;this._parentage=Array.isArray(t)?(t.push(r),t):t?[t,r]:r},r.prototype._removeParent=function(r){var t=this._parentage;t===r?this._parentage=null:Array.isArray(t)&&v(t,r)},r.prototype.remove=function(t){var e=this._teardowns;e&&v(e,t),t instanceof r&&t._removeParent(this)},r.EMPTY=((t=new r).closed=!0,t),r}();d.EMPTY;function h(r){return r instanceof d||r&&"closed"in r&&s(r.remove)&&s(r.add)&&s(r.unsubscribe)}function y(r){s(r)?r():r.unsubscribe()}var b={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},m={setTimeout:function(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];var e=m.delegate;return((null==e?void 0:e.setTimeout)||setTimeout).apply(void 0,c([],u(r)))},clearTimeout:function(r){var t=m.delegate;return((null==t?void 0:t.clearTimeout)||clearTimeout)(r)},delegate:void 0};function g(){}var w=x("C",void 0,void 0);function x(r,t,e){return{kind:r,value:t,error:e}}var S=null;var O=function(r){function t(t){var e=r.call(this)||this;return e.isStopped=!1,t?(e.destination=t,h(t)&&t.add(e)):e.destination=C,e}return o(t,r),t.create=function(r,t,e){return new _(r,t,e)},t.prototype.next=function(r){this.isStopped?A(function(r){return x("N",r,void 0)}(r),this):this._next(r)},t.prototype.error=function(r){this.isStopped?A(x("E",void 0,r),this):(this.isStopped=!0,this._error(r))},t.prototype.complete=function(){this.isStopped?A(w,this):(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,r.prototype.unsubscribe.call(this),this.destination=null)},t.prototype._next=function(r){this.destination.next(r)},t.prototype._error=function(r){try{this.destination.error(r)}finally{this.unsubscribe()}},t.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},t}(d),E=Function.prototype.bind;function T(r,t){return E.call(r,t)}var j=function(){function r(r){this.partialObserver=r}return r.prototype.next=function(r){var t=this.partialObserver;if(t.next)try{t.next(r)}catch(r){P(r)}},r.prototype.error=function(r){var t=this.partialObserver;if(t.error)try{t.error(r)}catch(r){P(r)}else P(r)},r.prototype.complete=function(){var r=this.partialObserver;if(r.complete)try{r.complete()}catch(r){P(r)}},r}(),_=function(r){function t(t,e,n){var o,i,a=r.call(this)||this;s(t)||!t?o={next:null!=t?t:void 0,error:null!=e?e:void 0,complete:null!=n?n:void 0}:a&&b.useDeprecatedNextContext?((i=Object.create(t)).unsubscribe=function(){return a.unsubscribe()},o={next:t.next&&T(t.next,i),error:t.error&&T(t.error,i),complete:t.complete&&T(t.complete,i)}):o=t;return a.destination=new j(o),a}return o(t,r),t}(O);function P(r){var t;b.useDeprecatedSynchronousErrorHandling?(t=r,b.useDeprecatedSynchronousErrorHandling&&S&&(S.errorThrown=!0,S.error=t)):function(r){m.setTimeout((function(){var t=b.onUnhandledError;if(!t)throw r;t(r)}))}(r)}function A(r,t){var e=b.onStoppedNotification;e&&m.setTimeout((function(){return e(r,t)}))}var C={closed:!0,next:g,error:function(r){throw r},complete:g};var L=function(r){function t(t,e,n,o,i,a){var u=r.call(this,t)||this;return u.onFinalize=i,u.shouldUnsubscribe=a,u._next=e?function(r){try{e(r)}catch(r){t.error(r)}}:r.prototype._next,u._error=o?function(r){try{o(r)}catch(r){t.error(r)}finally{this.unsubscribe()}}:r.prototype._error,u._complete=n?function(){try{n()}catch(r){t.error(r)}finally{this.unsubscribe()}}:r.prototype._complete,u}return o(t,r),t.prototype.unsubscribe=function(){var t;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var e=this.closed;r.prototype.unsubscribe.call(this),!e&&(null===(t=this.onFinalize)||void 0===t||t.call(this))}},t}(O);var M="function"==typeof Symbol&&Symbol.observable||"@@observable";function k(r){return r}function D(r){return 0===r.length?k:1===r.length?r[0]:function(t){return r.reduce((function(r,t){return t(r)}),t)}}var R=function(){function r(r){r&&(this._subscribe=r)}return r.prototype.lift=function(t){var e=new r;return e.source=this,e.operator=t,e},r.prototype.subscribe=function(r,t,e){var n,o=this,i=(n=r)&&n instanceof O||function(r){return r&&s(r.next)&&s(r.error)&&s(r.complete)}(n)&&h(n)?r:new _(r,t,e);return function(r){if(b.useDeprecatedSynchronousErrorHandling){var t=!S;if(t&&(S={errorThrown:!1,error:null}),r(),t){var e=S,n=e.errorThrown,o=e.error;if(S=null,n)throw o}}else r()}((function(){var r=o,t=r.operator,e=r.source;i.add(t?t.call(i,e):e?o._subscribe(i):o._trySubscribe(i))})),i},r.prototype._trySubscribe=function(r){try{return this._subscribe(r)}catch(t){r.error(t)}},r.prototype.forEach=function(r,t){var e=this;return new(t=F(t))((function(t,n){var o=new _({next:function(t){try{r(t)}catch(r){n(r),o.unsubscribe()}},error:n,complete:t});e.subscribe(o)}))},r.prototype._subscribe=function(r){var t;return null===(t=this.source)||void 0===t?void 0:t.subscribe(r)},r.prototype[M]=function(){return this},r.prototype.pipe=function(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];return D(r)(this)},r.prototype.toPromise=function(r){var t=this;return new(r=F(r))((function(r,e){var n;t.subscribe((function(r){return n=r}),(function(r){return e(r)}),(function(){return r(n)}))}))},r.create=function(t){return new r(t)},r}();function F(r){var t;return null!==(t=null!=r?r:b.Promise)&&void 0!==t?t:Promise}function U(r){switch(r.responseType){case"json":if("response"in r)return r.response;var t=r;return JSON.parse(t.responseText);case"document":return r.responseXML;case"text":default:return"response"in r?r.response:(t=r).responseText}}var N=function(r,t,e,n){void 0===n&&(n="download_load"),this.originalEvent=r,this.xhr=t,this.request=e,this.type=n;var o=t.status,i=t.responseType;this.status=null!=o?o:0,this.responseType=null!=i?i:"";var a=t.getAllResponseHeaders();this.responseHeaders=a?a.split("\n").reduce((function(r,t){var e=t.indexOf(": ");return r[t.slice(0,e)]=t.slice(e+2),r}),{}):{},this.response=U(t);var u=r.loaded,c=r.total;this.loaded=u,this.total=c},H=f((function(r){return function(r,t,e){var n;this.message=r,this.name="AjaxError",this.xhr=t,this.request=e,this.status=t.status,this.responseType=t.responseType;try{n=U(t)}catch(r){n=t.responseText}this.response=n}})),q=function(){function r(r,t){return H.call(this,"ajax timeout",r,t),this.name="AjaxTimeoutError",this}return r.prototype=Object.create(H.prototype),r}();function B(r,t){return $({method:"GET",url:r,headers:t})}function I(r,t,e){return $({method:"POST",url:r,body:t,headers:e})}function G(r,t){return $({method:"DELETE",url:r,headers:t})}function z(r,t,e){return $({method:"PUT",url:r,body:t,headers:e})}function X(r,t,e){return $({method:"PATCH",url:r,body:t,headers:e})}var J,Y,V=(J=function(r){return r.response},l((function(r,t){var e,n,o,i=0;r.subscribe(new L(t,(function(r){t.next(J.call(Y,r,i++))}),e,n,o))})));function W(r,t){return V($({method:"GET",url:r,headers:t}))}var K,$=((K=function(r){var t;return t="string"==typeof r?{url:r}:r,new R((function(r){var e,n,o,a=i({async:!0,crossDomain:!1,withCredentials:!1,method:"GET",timeout:0,responseType:"json"},t),u=a.queryParams,c=a.body,s=a.headers,l=a.url;if(!l)throw new TypeError("url is required");if(u)if(l.includes("?")){var f=l.split("?");if(2<f.length)throw new TypeError("invalid url");o=new URLSearchParams(f[1]),new URLSearchParams(u).forEach((function(r,t){return o.set(t,r)})),l=f[0]+"?"+o}else l=l+"?"+(o=new URLSearchParams(u));var p={};if(s)for(var v in s)s.hasOwnProperty(v)&&(p[v.toLowerCase()]=s[v]);var d=a.crossDomain;d||"x-requested-with"in p||(p["x-requested-with"]="XMLHttpRequest");var h=a.withCredentials,y=a.xsrfCookieName,b=a.xsrfHeaderName;if((h||!d)&&y&&b){var m=null!==(n=null===(e=null===document||void 0===document?void 0:document.cookie.match(new RegExp("(^|;\\s*)("+y+")=([^;]*)")))||void 0===e?void 0:e.pop())&&void 0!==n?n:"";m&&(p[b]=m)}var g,w=function(r,t){var e;if(!r||"string"==typeof r||function(r){return"undefined"!=typeof FormData&&r instanceof FormData}(r)||function(r){return"undefined"!=typeof URLSearchParams&&r instanceof URLSearchParams}(r)||function(r){return or(r,"ArrayBuffer")}(r)||function(r){return or(r,"File")}(r)||function(r){return or(r,"Blob")}(r)||function(r){return"undefined"!=typeof ReadableStream&&r instanceof ReadableStream}(r))return r;if(function(r){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView(r)}(r))return r.buffer;if("object"==typeof r)return t["content-type"]=null!==(e=t["content-type"])&&void 0!==e?e:"application/json;charset=utf-8",JSON.stringify(r);throw new TypeError("Unknown body type")}(c,p),x=i(i({},a),{url:l,headers:p,body:w});g=t.createXHR?t.createXHR():new XMLHttpRequest;var S=t.progressSubscriber,O=t.includeDownloadProgress,E=void 0!==O&&O,T=t.includeUploadProgress,j=void 0!==T&&T,_=function(t,e){g.addEventListener(t,(function(){var t,n=e();null===(t=null==S?void 0:S.error)||void 0===t||t.call(S,n),r.error(n)}))};_("timeout",(function(){return new q(g,x)})),_("abort",(function(){return new H("aborted",g,x)}));var P=function(r,t){return new N(t,g,x,r+"_"+t.type)},A=function(t,e,n){t.addEventListener(e,(function(t){r.next(P(n,t))}))};j&&[rr,tr,er].forEach((function(r){return A(g.upload,r,Q)})),S&&[rr,tr].forEach((function(r){return g.upload.addEventListener(r,(function(r){var t;return null===(t=null==S?void 0:S.next)||void 0===t?void 0:t.call(S,r)}))})),E&&[rr,tr].forEach((function(r){return A(g,r,Z)}));var C=function(t){var e="ajax error"+(t?" "+t:"");r.error(new H(e,g,x))};g.addEventListener("error",(function(r){var t;null===(t=null==S?void 0:S.error)||void 0===t||t.call(S,r),C()})),g.addEventListener(er,(function(t){var e,n,o=g.status;if(o<400){null===(e=null==S?void 0:S.complete)||void 0===e||e.call(S);var i=void 0;try{i=P(Z,t)}catch(t){return void r.error(t)}r.next(i),r.complete()}else null===(n=null==S?void 0:S.error)||void 0===n||n.call(S,t),C(o)}));var L=x.user,M=x.method,k=x.async;for(var v in L?g.open(M,l,k,L,x.password):g.open(M,l,k),k&&(g.timeout=x.timeout,g.responseType=x.responseType),"withCredentials"in g&&(g.withCredentials=x.withCredentials),p)p.hasOwnProperty(v)&&g.setRequestHeader(v,p[v]);return w?g.send(w):g.send(),function(){g&&4!==g.readyState&&g.abort()}}))}).get=B,K.post=I,K.delete=G,K.put=z,K.patch=X,K.getJSON=W,K),Q="upload",Z="download",rr="loadstart",tr="progress",er="load";var nr=Object.prototype.toString;function or(r,t){return nr.call(r)==="[object "+t+"]"}function ir(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}var ar=function(){function r(t){!function(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),this.page=t}var t,e,n;return t=r,(e=[{key:"init",value:function(){var r=this;setInterval((function(){$.getJSON("https://hw-ahj-4-1.herokuapp.com/messages/unread").subscribe((function(t){r.page.addMsg(t)}))}),15e3)}}])&&ir(t.prototype,e),n&&ir(t,n),r}(),ur=new t;ur.bindToDOM(document.querySelector("#container")),ur.draw(),new ar(ur).init()})()})();