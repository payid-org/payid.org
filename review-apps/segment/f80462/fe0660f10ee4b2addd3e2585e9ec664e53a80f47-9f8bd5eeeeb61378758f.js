(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"3D4S":function(e,t,a){var r=a("q1tI");function n(e){return r.createElement("svg",e,[r.createElement("path",{d:"M32.0567 0.0302734L52.7923 35.9212H11.3211L32.0567 0.0302734Z",fill:"#0087FF",key:0}),r.createElement("path",{d:"M15.5391 6.1394V56.0303",stroke:"#000E33",strokeWidth:"3",strokeLinecap:"square",strokeLinejoin:"round",key:1}),r.createElement("path",{d:"M26.8212 14.5955H9.89767C7.80307 14.5955 5.79427 15.4641 4.31317 17.0103C2.83207 18.5564 2 20.6535 2 22.8401C2 25.0268 2.83207 27.1238 4.31317 28.67C5.79427 30.2162 7.80307 31.0848 9.89767 31.0848H21.18C23.2746 31.0848 25.2834 31.9535 26.7645 33.4996C28.2456 35.0458 29.0777 37.1429 29.0777 39.3295C29.0777 41.5161 28.2456 43.6132 26.7645 45.1594C25.2834 46.7056 23.2746 47.5742 21.18 47.5742H2",stroke:"#000E33",strokeWidth:"3",strokeLinecap:"square",strokeLinejoin:"round",key:2})])}n.defaultProps={viewBox:"0 0 56 58",fill:"none"},e.exports=n,n.default=n},"4VWn":function(e,t,a){"use strict";var r,n=a("TSYQ"),i=a.n(n),l=a("q1tI"),o=a.n(l),s=a("djOb"),c=a.n(s),m=a("GshL"),d=a("pBiw"),u=a("eMrp"),k=a("79Sd");!function(e){e[e.email=0]="email",e[e.role=1]="role",e[e.first_name=2]="first_name",e[e.last_name=3]="last_name"}(r||(r={}));t.a=function(e){var t=e.direction,a=void 0===t?"rtl":t,n=e.title,s=void 0===n?"Join the PayID Community":n,p=e.description,g=void 0===p?"Sign up to access the PayID newsletter and hear about hackathons and speaker events":p,h=e.orangeButton,f=void 0!==h&&h,v=e.enabledFields,b=e.className,E=Object(l.useState)(!1),x=E[0],y=E[1],C=Object(l.useState)("DEFAULT"),w=C[0],L=C[1],N=Object(l.useState)(),j=N[0],M=N[1],S=Object(l.useState)(),q=S[0],P=S[1],I=Object(l.useState)(),W=I[0],D=I[1],H=Object(l.useState)(!1),O=H[0],F=H[1],T=Object(l.useMemo)((function(){if(!v||!Array.isArray(v)||0===v.length){var e=Object.values(r);return e.splice(e.length/2),e.map((function(e){return e.toLowerCase()}))}return v}),[v]),A=/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,V=function(e){return!(!e||!A.test(e))};Object(l.useEffect)((function(){var e=!0;!T.includes("role")||w&&"DEFAULT"!==w||(e=!1),T.includes("first_name")&&(!j||j.length<=0)&&(e=!1),!T.includes("email")||W&&V(W)||(e=!1),y(e)}),[w,j,W,T]);return o.a.createElement(k.a,{background:"orange",direction:a,wave:"blue",spacing:"lg",className:"flex items-center justify-center",waveClassNames:b},!O&&o.a.createElement("div",null,o.a.createElement("div",{className:"text-3xl font-bold text-center sm:text-5xl"},s),o.a.createElement("div",{className:"mt-8 text-xl text-center"},g),o.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),x){var t={role:T.includes("role")?w:void 0,first_name:T.includes("first_name")?j:void 0,last_name:T.includes("last_name")&&""!==q?q:void 0,email:T.includes("email")?W:void 0};"undefined"!=typeof window&&(void 0!==window.heap&&window.heap.track("newsletter",t),void 0!==window.analytics&&void 0!==t.email&&(Object(m.a)(Object.assign({},t,{email:t.email,form_name:"newsletter"})),window.analytics.identify(t))),F(!0)}},className:"mt-16 md:mt-30"},T.includes("role")&&o.a.createElement("div",{className:"relative px-6 mb-6 border-2 border-white rounded"},o.a.createElement("select",{defaultValue:"DEFAULT",id:"role",name:"role",onChange:function(e){return L(e.target.value)},className:"w-full py-4 bg-transparent appearance-none focus:outline-none"},[{label:"Role",value:"DEFAULT"},{label:"Project Manager",value:"PM"},{label:"Developer",value:"Engineer"},{label:"Business Development",value:"BD"},{label:"Sales",value:"Sales"},{label:"Operations",value:"Operations"},{label:"Executive",value:"Executive"},{label:"Marketing",value:"Marketing"}].map((function(e){return o.a.createElement("option",{className:"text-blue-dark-900",value:e.value,key:e.label,hidden:"DEFAULT"===e.value},e.label)}))),o.a.createElement(c.a,{className:"absolute h-2 mt-2 text-white right-4 top-4"}),o.a.createElement("label",{htmlFor:"role",className:i()("absolute z-10 transition-all duration-300 ease-linear pointer-events-none text-white left-4 bg-orange-500 px-2",{"-top-3":"DEFAULT"!==w,"top-4":"DEFAULT"===w})},"Role")),(T.includes("first_name")||T.includes("last_name"))&&o.a.createElement("div",{className:"flex"},T.includes("first_name")&&o.a.createElement(u.a,{theme:"orange",id:"firstName",label:"First Name",type:"text",name:"first-name",autoComplete:"given-name",className:"mr-3",required:!0,requiredText:"First name is required",onChange:function(e){return M(e.currentTarget.value)}}),T.includes("last_name")&&o.a.createElement(u.a,{theme:"orange",id:"lastName",label:"Last Name",type:"text",name:"last-name",autoComplete:"family-name",className:"ml-3",onChange:function(e){return P(e.currentTarget.value)}})),T.includes("email")&&o.a.createElement(u.a,{theme:"orange",id:"email",label:"Email",type:"email",name:"email",autoComplete:"email",required:!0,requiredText:"Email address is required",validate:V,invalidText:"Invalid email address",onChange:function(e){V(e.currentTarget.value)?D(e.currentTarget.value):D(void 0)}}),o.a.createElement(d.a,{disabled:!x,label:"Submit",variant:"secondary",className:"mt-8 bg-white sm:hidden"}),o.a.createElement(d.a,{disabled:!x,variant:"secondary",label:"Submit",size:"lg",className:i()("hidden mx-auto mt-16 sm:block bg-white",{"text-orange-500":!!f})}))),O&&o.a.createElement("div",{className:"text-3xl font-bold text-center sm:text-5xl"},"Thank you for subscribing!"))}},"79Sd":function(e,t,a){"use strict";var r=a("TSYQ"),n=a.n(r),i=a("q1tI"),l=a.n(i),o=a("Kk5M"),s=a.n(o),c=a("bahM"),m=a.n(c),d=function(e){var t=n()("bg-transparent",{"text-white":"white"===e.wave,"text-gray-50":"gray"===e.wave,"text-blue-dark-900":"blue"===e.wave,"text-orange-500":"orange"===e.wave,"text-blue-dark-800":"light-blue"===e.wave});return l.a.createElement("div",{className:n()("wave-vector",e.className)},"ltr"===e.direction&&l.a.createElement(s.a,{className:t}),"rtl"===e.direction&&l.a.createElement(m.a,{className:t}))};t.a=function(e){var t=e.wave,a=void 0===t?"white":t,r=e.background,i=void 0===r?"blue":r,o=e.direction,s=void 0===o?"ltr":o,c=e.spacing,m=void 0===c?"md":c,u="";"sm"===m?u="xl:-mt-20 lg:-mt-18 md:-mt-10 sm:-mt-8":"md"===m?u="xl:-mt-52 lg:-mt-40 md:-mt-14 sm:-mt-10":"lg"===m&&(u="xl:-mt-74 lg:-mt-52 md:-mt-36 sm:-mt-28"),u=n()(u,e.waveVectorClassNames);var k=n()(e.waveClassNames,"wave",{"bg-white text-blue-dark-900":"white"===i,"bg-gray-50 text-blue-dark-900":"gray"===i,"bg-blue-dark-900 text-white":"blue"===i,"bg-orange-500 text-white":"orange"===i,"bg-blue-dark-800 text-white":"light-blue"===i}),p=n()("flex justify-center",{"px-6 lg:px-18":!e["no-spacing"]}),g=n()("wave-content",{"lg:px-17":!e["no-gutter"]},{container:!e["no-spacing"]},{"w-full":e["no-spacing"]},e.className);return l.a.createElement("div",{className:k,style:e.style},l.a.createElement("div",{className:p},l.a.createElement("div",{className:g},e.children)),l.a.createElement(d,{wave:a,direction:s,className:u}))}},Kk5M:function(e,t,a){var r=a("q1tI");function n(e){return r.createElement("svg",e,r.createElement("path",{d:"M119.603 106.85C27.6811 82.8743 3.1337 32.6632 0 0V230H375C375 98.0089 247.198 128.693 151.462 113.105C143.158 111.753 128.221 109.098 119.603 106.85Z",fill:"currentColor"}))}n.defaultProps={viewBox:"0 0 375 230",fill:"none"},e.exports=n,n.default=n},"W+nZ":function(e,t,a){var r=a("q1tI");function n(e){return r.createElement("svg",e,[r.createElement("path",{d:"M62.0078 1V15.9333",stroke:"#000E33",strokeWidth:"2",strokeLinecap:"square",strokeLinejoin:"round",key:0}),r.createElement("path",{d:"M65.3203 3.65479H60.228C59.5977 3.65479 58.9933 3.90827 58.5476 4.35946C58.1019 4.81066 57.8516 5.42262 57.8516 6.06071C57.8516 6.6988 58.1019 7.31076 58.5476 7.76196C58.9933 8.21316 59.5977 8.46664 60.228 8.46664H63.6229C64.2531 8.46664 64.8576 8.72012 65.3033 9.17132C65.7489 9.62252 65.9993 10.2345 65.9993 10.8726C65.9993 11.5107 65.7489 12.1226 65.3033 12.5738C64.8576 13.025 64.2531 13.2785 63.6229 13.2785H57.8516",stroke:"#000E33",strokeWidth:"2",strokeLinecap:"square",strokeLinejoin:"round",key:1}),r.createElement("ellipse",{cx:"17.0568",cy:"17.0204",rx:"17.0568",ry:"17.0204",fill:"#55DF20",key:2}),r.createElement("path",{d:"M44.0089 10.9556H25.5518C24.328 10.9556 23.1543 11.4407 22.289 12.3042C21.4236 13.1677 20.9375 14.3388 20.9375 15.56V52.3956C20.9375 53.6167 21.4236 54.7879 22.289 55.6514C23.1543 56.5149 24.328 57 25.5518 57H53.2375C54.4613 57 55.6349 56.5149 56.5003 55.6514C57.3656 54.7879 57.8518 53.6167 57.8518 52.3956V24.7689L44.0089 10.9556Z",stroke:"#000E33",strokeWidth:"3",strokeLinecap:"round",key:3}),r.createElement("path",{d:"M44.0098 10.9556V24.7689H57.8526",stroke:"#000E33",strokeWidth:"3",strokeLinecap:"round",key:4}),r.createElement("path",{d:"M48.6232 36.28H30.166",stroke:"#000E33",strokeWidth:"3",strokeLinecap:"square",key:5}),r.createElement("path",{d:"M48.6232 45.4888H30.166",stroke:"#000E33",strokeWidth:"3",strokeLinecap:"square",key:6}),r.createElement("path",{d:"M34.7803 27.071H32.4732H30.166",stroke:"#000E33",strokeWidth:"3",strokeLinecap:"square",key:7})])}n.defaultProps={viewBox:"0 0 67 59",fill:"none"},e.exports=n,n.default=n},XZtC:function(e,t,a){"use strict";var r=a("Wbzz"),n=a("q1tI"),i=a.n(n),l=a("SC9r"),o=a("GshL"),s=a("79Sd");t.a=function(e){var t=[{bgStyle:{backgroundImage:"url("+Object(r.withPrefix)("/assets/learn/developers.svg")+")"},title:"Getting Started for Developers",link:Object(l.c)()},{bgStyle:{backgroundImage:"url("+Object(r.withPrefix)("/assets/learn/whitepaper.svg")+")"},title:"PayID Technical White Paper",link:"/whitepaper.pdf"},{bgStyle:{backgroundImage:"url("+Object(r.withPrefix)("/assets/learn/api-reference.svg")+")"},title:"API Reference",link:"https://api.payid.org/?version=latest"},{bgStyle:{backgroundImage:"url("+Object(r.withPrefix)("/assets/learn/standards.svg")+")"},title:"PayID Standards",link:"https://github.com/payid-org/rfcs"},{bgStyle:{backgroundImage:"url("+Object(r.withPrefix)("/assets/learn/security.svg")+")"},title:"Security and Privacy",link:"https://github.com/payid-org/rfcs/blob/master/dist/spec/verifiable-payid-protocol.txt"},{bgStyle:{backgroundImage:"url("+Object(r.withPrefix)("/assets/learn/travel-rule.svg")+")"},title:"Travel Rule and Compliance",link:"https://trisa.io/"},{bgStyle:{backgroundImage:"url("+Object(r.withPrefix)("/assets/learn/checkout.svg")+")"},title:"Checkout",link:"https://ripplex.io/portal/wallet/xrp/testnet"},{bgStyle:{backgroundImage:"url("+Object(r.withPrefix)("/assets/learn/xpring-sdk.svg")+")"},title:"RippleX SDK for PayID",link:Object(l.c)()+"/ripplex-dev-kit-payid"}];return i.a.createElement(s.a,{background:e.background,direction:e.direction,wave:"orange","no-gutter":!0},i.a.createElement("div",{className:"flex flex-col items-center sm:justify-center mb-14 md:mb-25"},i.a.createElement("h2",{className:"text-3xl font-bold sm:text-5xl sm:text-center "},"Learn More"),i.a.createElement("p",{className:"max-w-xl mt-6 text-xl sm:mt-8 sm:text-center"},"Discover everything you need to know about the free, open source PayID protocol")),i.a.createElement("div",{className:"flex justify-center"},i.a.createElement("div",{className:"grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4"},t.map((function(e){return i.a.createElement("a",{href:e.link,target:"_blank",rel:"noreferrer",key:e.title,className:"transition duration-500 ease-in-out transform bg-no-repeat bg-cover rounded-xl bg-blue-dark-900 focus:shadow-2xl hover:shadow-2xl focus:scale-105 hover:scale-105 focus:outline-none learnable",style:e.bgStyle,onClick:function(){return function(e){e.link.startsWith("https://github.com/")&&Object(o.b)({type:e.title,url:e.link,text:e.title})}(e)}},i.a.createElement("h3",{className:"font-bold text-white learnable-title mx-13"},e.title))})))))}},bahM:function(e,t,a){var r=a("q1tI");function n(e){return r.createElement("svg",e,r.createElement("path",{d:"M255.397 106.85C347.319 82.8743 371.866 32.6632 375 0V230H0C0 98.0089 127.802 128.693 223.538 113.105C231.842 111.753 246.779 109.098 255.397 106.85Z",fill:"currentColor"}))}n.defaultProps={viewBox:"0 0 375 230",fill:"none"},e.exports=n,n.default=n},"e/3R":function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),i=a("eS1m"),l=a.n(i),o=a("loLA"),s=a.n(o),c=a("3D4S"),m=a.n(c),d=a("quH+"),u=a.n(d),k=a("W+nZ"),p=a.n(k),g=a("l5SE"),h=a.n(g),f=a("79Sd");t.a=function(){var e="h-12-5 sm:h-14 mb-5 md:mb-10",t=[{icon:n.a.createElement(l.a,{className:e}),title:"Charity",description:"Simpler to donate money to your favorite organizations."},{icon:n.a.createElement(h.a,{className:e}),title:"P2P Payments",description:"Simpler to pay back your friends and family."},{icon:n.a.createElement(u.a,{className:e}),title:"Digital Identity",description:"Simpler to know who you are paying."},{icon:n.a.createElement(m.a,{className:e}),title:"Getting Paid",description:"Simpler to earn a living."},{icon:n.a.createElement(s.a,{className:e}),title:"Commerce",description:"Simpler to get the things you need."},{icon:n.a.createElement(p.a,{className:e}),title:"Invoicing",description:"Simpler for your business to get paid for what it makes."}];return n.a.createElement(f.a,{background:"gray",wave:"white"},n.a.createElement("div",{className:"flex justify-center"},n.a.createElement("h2",{className:"max-w-2xl text-3xl font-bold mb-14 sm:text-5xl sm:text-center md:mb-25"},"Other Extensions for PayID")),n.a.createElement("div",{className:"grid grid-cols-1 gap-15 md:gap-30 md:grid-cols-2 lg:grid-cols-3"},t.map((function(e){return n.a.createElement("div",{key:e.title},e.icon,n.a.createElement("h3",{className:"text-2xl font-bold sm:text-3xl"},e.title),n.a.createElement("p",{className:"mt-4 sm:text-xl"},e.description))}))))}},eS1m:function(e,t,a){var r=a("q1tI");function n(e){return r.createElement("svg",e,[r.createElement("ellipse",{cx:"50.1635",cy:"16.8237",rx:"16.8373",ry:"16.8237",fill:"#A803FC",key:0}),r.createElement("path",{d:"M49.7012 14.9374C48.4383 13.6749 46.9388 12.6734 45.2884 11.9901C43.6379 11.3068 41.869 10.9551 40.0825 10.9551C38.296 10.9551 36.527 11.3068 34.8766 11.9901C33.2262 12.6734 31.7267 13.6749 30.4638 14.9374L27.8427 17.5563L25.2217 14.9374C22.6706 12.3884 19.2107 10.9564 15.6029 10.9564C11.9952 10.9564 8.53525 12.3884 5.98421 14.9374C3.43316 17.4864 2 20.9435 2 24.5483C2 28.1531 3.43316 31.6103 5.98421 34.1593L8.60525 36.7782L27.8427 56.0001L47.0802 36.7782L49.7012 34.1593C50.9647 32.8974 51.9671 31.3991 52.6509 29.75C53.3348 28.1009 53.6867 26.3334 53.6867 24.5483C53.6867 22.7633 53.3348 20.9957 52.6509 19.3467C51.9671 17.6976 50.9647 16.1993 49.7012 14.9374V14.9374Z",stroke:"#000E33",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",key:1})])}n.defaultProps={viewBox:"0 0 67 58",fill:"none"},e.exports=n,n.default=n},l5SE:function(e,t,a){var r=a("q1tI");function n(e){return r.createElement("svg",e,[r.createElement("rect",{width:"33.3296",height:"33.4035",fill:"#55DF20",key:0}),r.createElement("path",{d:"M53.9289 55.9999V50.9784C53.9289 48.3149 52.871 45.7604 50.9879 43.877C49.1048 41.9936 46.5507 40.9355 43.8876 40.9355H23.805C21.1419 40.9355 18.5878 41.9936 16.7047 43.877C14.8216 45.7604 13.7637 48.3149 13.7637 50.9784V55.9999",stroke:"#000E33",strokeWidth:"3",strokeLinecap:"square",strokeLinejoin:"round",key:1}),r.createElement("path",{d:"M33.846 30.8927C39.3917 30.8927 43.8873 26.3963 43.8873 20.8498C43.8873 15.3032 39.3917 10.8069 33.846 10.8069C28.3003 10.8069 23.8047 15.3032 23.8047 20.8498C23.8047 26.3963 28.3003 30.8927 33.846 30.8927Z",stroke:"#000E33",strokeWidth:"3",strokeLinecap:"square",strokeLinejoin:"round",key:2}),r.createElement("path",{d:"M57.0781 1.96484V16.7017",stroke:"#000E33",strokeWidth:"2",strokeLinecap:"square",strokeLinejoin:"round",key:3}),r.createElement("path",{d:"M60.3326 4.58496H55.3291C54.7098 4.58496 54.1159 4.83511 53.678 5.28037C53.2401 5.72563 52.9941 6.32953 52.9941 6.95923C52.9941 7.58893 53.2401 8.19283 53.678 8.63809C54.1159 9.08335 54.7098 9.3335 55.3291 9.3335H58.6648C59.2841 9.3335 59.878 9.58365 60.3159 10.0289C60.7538 10.4742 60.9998 11.0781 60.9998 11.7078C60.9998 12.3375 60.7538 12.9414 60.3159 13.3866C59.878 13.8319 59.2841 14.082 58.6648 14.082H52.9941",stroke:"#000E33",strokeWidth:"2",strokeLinecap:"square",strokeLinejoin:"round",key:4})])}n.defaultProps={viewBox:"0 0 62 58",fill:"none"},e.exports=n,n.default=n},loLA:function(e,t,a){var r=a("q1tI");function n(e){return r.createElement("svg",e,[r.createElement("rect",{x:"26",y:"0.0297852",width:"34",height:"34",fill:"#A803FC",key:0}),r.createElement("path",{d:"M9.05 9.02979L2 18.4298V51.3298C2 52.5763 2.49518 53.7718 3.3766 54.6532C4.25802 55.5346 5.45348 56.0298 6.7 56.0298H39.6C40.8465 56.0298 42.042 55.5346 42.9234 54.6532C43.8048 53.7718 44.3 52.5763 44.3 51.3298V18.4298L37.25 9.02979H9.05Z",stroke:"#000E33",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",key:1}),r.createElement("path",{d:"M2 18.4299H44.3",stroke:"#000E33",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",key:2}),r.createElement("path",{d:"M32.55 27.8298C32.55 30.3229 31.5596 32.7138 29.7968 34.4766C28.034 36.2395 25.643 37.2298 23.15 37.2298C20.657 37.2298 18.266 36.2395 16.5032 34.4766C14.7404 32.7138 13.75 30.3229 13.75 27.8298",stroke:"#000E33",strokeWidth:"3",strokeLinecap:"square",strokeLinejoin:"round",key:3})])}n.defaultProps={viewBox:"0 0 60 58",fill:"none"},e.exports=n,n.default=n},"quH+":function(e,t,a){var r=a("q1tI");function n(e){return r.createElement("svg",e,[r.createElement("path",{d:"M59.3539 0H40.1652L30.5195 16.6504L40.1652 33.4035H59.3539L68.9995 16.6504L59.3539 0Z",fill:"#FF5D00",key:0}),r.createElement("path",{d:"M2 33.2144C2 18.1764 14.1764 6 29.2144 6C44.2525 6 56.4289 18.1764 56.4289 33.2144",stroke:"#000E33",strokeWidth:"3",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round",key:1}),r.createElement("path",{d:"M28.375 15.2583C28.375 15.2583 61.7618 14.9778 39.3169 58.7453",stroke:"#000E33",strokeWidth:"3",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round",key:2}),r.createElement("path",{d:"M21.0809 16.1001C18.1911 17.7554 15.6661 20.2805 13.9827 23.1702C12.2152 26.1442 11.8785 29.7354 11.2613 33.074C10.9246 34.9538 10.3915 37.03 8.96067 38.3766C7.30536 39.9478 5.34143 41.042 3.125 41.6312",stroke:"#000E33",strokeWidth:"3",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round",key:3}),r.createElement("path",{d:"M28.6577 31.8115C29.7799 41.9398 23.2709 51.4227 14.9102 56.5009",stroke:"#000E33",strokeWidth:"3",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round",key:4}),r.createElement("path",{d:"M37.0705 40.7891C35.4994 48.5606 31.1507 55.743 24.7539 60.4564",stroke:"#000E33",strokeWidth:"3",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round",key:5}),r.createElement("path",{d:"M38.4456 32.9339C38.2772 30.6614 37.3233 28.473 35.7241 26.8457C31.2351 22.2165 23.3794 23.2265 20.7422 29.2024C19.2271 32.6253 19.9566 36.4129 18.7502 39.9199C16.9546 45.3066 12.2131 48.7295 7.05078 50.6093",stroke:"#000E33",strokeWidth:"3",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round",key:6})])}n.defaultProps={viewBox:"0 0 69 62",fill:"none"},e.exports=n,n.default=n}}]);
//# sourceMappingURL=fe0660f10ee4b2addd3e2585e9ec664e53a80f47-9f8bd5eeeeb61378758f.js.map