(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{djOb:function(e,t,r){var n=r("q1tI");function a(e){return n.createElement("svg",e,n.createElement("path",{d:"M1 1L4 4L7 1",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))}a.defaultProps={viewBox:"0 0 8 5",fill:"none"},e.exports=a,a.default=a},eMrp:function(e,t,r){"use strict";var n=r("zLVn"),a=r("TSYQ"),o=r.n(a),i=r("q1tI"),l=r.n(i);t.a=function(e){e.label,e.invalidText,e.requiredText,e.validate;var t,r=e.theme,a=void 0===r?"blue":r,c=e.className,u=e.onChange,s=Object(n.a)(e,["label","invalidText","requiredText","validate","theme","className","onChange"]),m=Object(i.useRef)(null),d=Object(i.useState)(!1),h=d[0],f=d[1],p=Object(i.useState)(),v=p[0],g=p[1],y=function(){m.current&&(m.current.value.length>0||document.activeElement&&document.activeElement.id===m.current.id)?f(!0):f(!1)},b=!(void 0===v||!v);return l.a.createElement("div",{className:o()(c,"relative w-full mb-6")},l.a.createElement("input",Object.assign({onChange:function(t){return u&&u(t),y(),e.required&&0===t.currentTarget.value.length?e.requiredText?void g(e.requiredText):void g(!0):e.validate&&!e.validate(t.currentTarget.value)?e.invalidText?void g(e.invalidText):void g(!0):void g(!1)},onFocus:y,onBlur:y,ref:m},s,{className:o()("w-full px-6 py-4 placeholder-white bg-transparent rounded border-2 appearance-none focus:outline-none",{"border-green-600":h&&!b&&"blue"===a,"border-white":!h&&!b||"orange"===a,"border-orange-600":b&&"blue"===a})})),l.a.createElement("label",{htmlFor:e.id,className:o()("absolute z-10 transition-all duration-300 ease-linear pointer-events-none left-4 px-2 rounded",{"top-4":!h&&!b,"-top-3":h||b,"text-green-600":h&&!b&&"blue"===a,"text-orange-600":b&&"blue"===a,"text-white":"orange"===a||!h&&!b,"bg-blue-dark-900":"blue"===a,"bg-orange-500":"orange"===a})},null!==(t=e.label)&&void 0!==t?t:e.name," "),"string"==typeof v&&l.a.createElement("div",{className:o()("flex pt-1 text-sm",{"text-orange-600":"blue"===a,"text-white":"orange"===a})},l.a.createElement("div",null,v)))}},ls82:function(e,t,r){var n=function(e){"use strict";var t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function l(e,t,r,n){var a=t&&t.prototype instanceof s?t:s,o=Object.create(a.prototype),i=new w(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return L()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var l=b(i,r);if(l){if(l===u)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=c(e,t,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===u)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(e,r,i),o}function c(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(n){return{type:"throw",arg:n}}}e.wrap=l;var u={};function s(){}function m(){}function d(){}var h={};h[a]=function(){return this};var f=Object.getPrototypeOf,p=f&&f(f(N([])));p&&p!==t&&r.call(p,a)&&(h=p);var v=d.prototype=s.prototype=Object.create(h);function g(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function y(e,t){var n;this._invoke=function(a,o){function i(){return new t((function(n,i){!function n(a,o,i,l){var u=c(e[a],e,o);if("throw"!==u.type){var s=u.arg,m=s.value;return m&&"object"==typeof m&&r.call(m,"__await")?t.resolve(m.__await).then((function(e){n("next",e,i,l)}),(function(e){n("throw",e,i,l)})):t.resolve(m).then((function(e){s.value=e,i(s)}),(function(e){return n("throw",e,i,l)}))}l(u.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}}function b(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=c(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,u;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function w(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function N(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return m.prototype=v.constructor=d,d.constructor=m,d[i]=m.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,i in e||(e[i]="GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},g(y.prototype),y.prototype[o]=function(){return this},e.AsyncIterator=y,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new y(l(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},g(v),v[i]="Generator",v[a]=function(){return this},v.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=N,w.prototype={constructor:w,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var l=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),E(r),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;E(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:N(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},e}(e.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}},o0o1:function(e,t,r){e.exports=r("ls82")},qElY:function(e,t,r){"use strict";r.r(t);var n=r("o0o1"),a=r.n(n);r("ls82");function o(e,t,r,n,a,o,i){try{var l=e[o](i),c=l.value}catch(u){return void r(u)}l.done?t(c):Promise.resolve(c).then(n,a)}var i=r("TSYQ"),l=r.n(i),c=r("q1tI"),u=r.n(c),s=r("djOb"),m=r.n(s),d=r("pBiw"),h=r("eMrp"),f=r("9Dj+"),p=r("SC9r");t.default=function(){var e=Object(c.useState)(!1),t=e[0],r=e[1],n=Object(c.useState)(!1),i=n[0],s=n[1],v=Object(c.useState)("DEFAULT"),g=v[0],y=v[1],b=Object(c.useState)(),x=b[0],E=b[1],w=Object(c.useState)(),N=w[0],L=w[1],T=Object(c.useState)(),j=T[0],O=T[1],S=Object(c.useState)(),k=S[0],F=S[1],C=Object(c.useState)("undecided"),q=C[0],A=C[1],D=Object(c.useState)(!0),G=D[0],_=D[1],I=Object(c.useState)(!1),P=I[0],U=I[1],z=/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,M=function(e){return!(!e||!z.test(e))};Object(c.useEffect)((function(){g&&"DEFAULT"!==g&&N&&N.length>0&&x&&x.length>0&&k&&M(k)?s(!0):s(!1)}),[g,N,x,k]);var B=function(){var e,t=(e=a.a.mark((function e(t){var n,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),i){e.next=3;break}return e.abrupt("return");case 3:return r(!0),n={role:g,"first-name":N,"last-name":""!==j?j:void 0,email:k,company:x,implementing:q,notify:G?"yes":"no"},o=Object(p.a)(n),e.next=8,fetch("https://script.google.com/macros/s/AKfycbyT7zjGQMQKaSrE9ef1NuvAFGKGUc8cnnUGSFo7V5Q6HWeBx-DL/exec?"+o,{mode:"no-cors"}).catch((function(){}));case 8:U(!0),r(!1),"undefined"!=typeof window&&(window.location.href=Object(p.c)());case 11:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,a){var i=e.apply(t,r);function l(e){o(i,n,a,l,c,"next",e)}function c(e){o(i,n,a,l,c,"throw",e)}l(void 0)}))});return function(e){return t.apply(this,arguments)}}();return u.a.createElement(f.a,{path:"give",title:"Charity Giving",description:"Give to charities using PayID"},u.a.createElement("div",{className:"text-white bg-blue-dark-900 faq-bg xl:bg-cover",style:{minHeight:"calc(100vh - 9.25rem)"}},u.a.createElement("div",{className:"flex justify-center px-6 lg:px-18"},u.a.createElement("div",{className:"container lg:px-17 lg:mt-0 mt-18"},u.a.createElement("div",{className:"max-w-4xl pt-16 lg:pt-70"},u.a.createElement("h1",{className:"text-3xl font-bold sm:mb-10 mb-7 sm:text-h1 sm:leading-tighter"},"Give to charities through PayID"),u.a.createElement("div",{className:"mb-13 sm:text-2xl"},"Fill in your information to get funds to donate to a choice of charities.")),!P&&u.a.createElement("form",{onSubmit:B,className:"mx-auto mt-16 mb-20 md:mt-30 md:mb-40 md:max-w-md"},u.a.createElement("div",{className:l()("relative px-6 mb-6 border-2 rounded",{"border-green-600":"DEFAULT"!==g,"border-white":"DEFAULT"===g})},u.a.createElement("select",{defaultValue:"DEFAULT",id:"role",name:"role",onChange:function(e){return y(e.target.value)},className:"w-full py-4 bg-transparent appearance-none focus:outline-none"},[{label:"Role",value:"DEFAULT"},{label:"Project Manager",value:"PM"},{label:"Developer",value:"Engineer"},{label:"Business Development",value:"BD"},{label:"Sales",value:"Sales"},{label:"Operations",value:"Operations"},{label:"Executive",value:"Executive"},{label:"Marketing",value:"Marketing"}].map((function(e){return u.a.createElement("option",{className:"text-blue-dark-900",value:e.value,key:e.label,hidden:"DEFAULT"===e.value},e.label)}))),u.a.createElement(m.a,{className:"absolute h-2 mt-2 text-white right-4 top-4"}),u.a.createElement("label",{htmlFor:"role",className:l()("absolute z-10 transition-all duration-300 ease-linear pointer-events-none left-4 bg-blue-dark-900 px-2 rounded",{"-top-3 text-green-600":"DEFAULT"!==g,"top-4 text-white":"DEFAULT"===g})},"Role")),u.a.createElement(h.a,{id:"company",label:"Company",type:"text",name:"company",required:!0,autoComplete:"organization",requiredText:"Company is required",onChange:function(e){return E(e.currentTarget.value)}}),u.a.createElement("div",{className:"flex"},u.a.createElement(h.a,{id:"firstName",label:"First Name",type:"text",name:"first-name",autoComplete:"given-name",className:"mr-3",required:!0,requiredText:"First name is required",onChange:function(e){return L(e.currentTarget.value)}}),u.a.createElement(h.a,{id:"lastName",label:"Last Name",type:"text",name:"last-name",autoComplete:"family-name",className:"ml-3",onChange:function(e){return O(e.currentTarget.value)}})),u.a.createElement(h.a,{id:"email",label:"Email",type:"email",name:"email",autoComplete:"email",required:!0,requiredText:"Email address is required",validate:M,invalidText:"Invalid email address",onChange:function(e){M(e.currentTarget.value)?F(e.currentTarget.value):F(void 0)}}),u.a.createElement("div",{className:"mb-6 text-sm"},u.a.createElement("div",{className:"mb-2"},"Do you plan to implement PayID within the next 6 months?"),u.a.createElement("div",{className:"flex items-center"},u.a.createElement("input",{id:"implementing",type:"radio",value:"yes",name:"implementSoon",className:"transition duration-150 ease-in-out form-radio",onChange:function(e){return A(e.currentTarget.value)}}),u.a.createElement("label",{htmlFor:"implementing",className:"pl-2"},"Yes"),u.a.createElement("input",{id:"notImplementing",type:"radio",value:"no",name:"implementSoon",className:"ml-3 transition duration-150 ease-in-out form-radio",onChange:function(e){return A(e.currentTarget.value)}}),u.a.createElement("label",{htmlFor:"notImplementing",className:"pl-2"},"No"),u.a.createElement("input",{id:"notSureImplementing",type:"radio",value:"undecided",name:"implementSoon",className:"ml-3 transition duration-150 ease-in-out form-radio",defaultChecked:!0,onChange:function(e){return A(e.currentTarget.value)}}),u.a.createElement("label",{htmlFor:"notSureImplementing",className:"pl-2"},"Undecided"))),u.a.createElement("div",{className:"mb-6 text-sm"},u.a.createElement("div",{className:"flex items-center"},u.a.createElement("input",{id:"notify",type:"checkbox",defaultChecked:!0,className:"transition duration-150 ease-in-out form-checkbox",onChange:function(e){_(e.currentTarget.checked)}}),u.a.createElement("label",{htmlFor:"notify",className:"pl-2"},"Notify me about future developer events. (e.g. Hackathons, panels)"))),u.a.createElement(d.a,{disabled:!i||t,label:t?"Submiting...":"Go to Charity App",className:"mt-8 sm:hidden"}),u.a.createElement(d.a,{disabled:!i||t,label:t?"Submiting...":"Go to Charity App",size:"lg",className:"hidden mx-auto mt-16 sm:block"})),P&&u.a.createElement("div",{className:"w-full mx-auto my-20 text-center md:my-40 md:max-w-lg"},u.a.createElement("h2",{className:"text-2xl font-bold sm:text-4xl"},"Thank you!"),u.a.createElement("a",{href:Object(p.c)(),className:"text-orange-500 focus:underline hover:underline",target:"_blank",rel:"noreferrer"},"Access the charity application"))))))}}}]);
//# sourceMappingURL=component---src-pages-give-tsx-246115fc86d6b12b022a.js.map