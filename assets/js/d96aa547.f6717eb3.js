"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9270],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>c,MDXProvider:()=>u,mdx:()=>f,useMDXComponents:()=>m,withMDXComponents:()=>p});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),p=function(e){return function(t){var n=m(t.components);return o.createElement(e,a({},t,{components:n}))}},m=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=m(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=m(n),u=r,h=p["".concat(i,".").concat(u)]||p[u]||d[u]||a;return n?o.createElement(h,s(s({ref:t},c),{},{components:n})):o.createElement(h,s({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},27436:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(67294),r=n(86010),a=n(86668);const i="expoSnack_M4rn";function s(e){let{snackPreview:t=!0,snackId:n,snackStyle:s}=e;const{isDarkTheme:l}=(0,a.L)(),c=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const e=c.current;null!==e&&null!=window.ExpoSnack&&(window.ExpoSnack.remove(e),window.ExpoSnack.append(e))}),[l]),o.createElement("div",{ref:c,className:(0,r.default)([i,s]),"data-snack-id":n,"data-snack-loading":"lazy","data-snack-platform":"mydevice","data-snack-preview":t,"data-snack-supported-platforms":"mydevice","data-snack-theme":l?"dark":"light"})}},72787:(e,t,n)=>{n.d(t,{Z:()=>o});const o={APP_STORE:"https://testflight.apple.com/join/WNvsHBwd",DISCORD:"https://discord.gg/sQkXTqEt33",GITHUB:"https://github.com/facebookresearch/playtorch",GOOGLE_PLAY_STORE:"https://play.google.com/store/apps/details?id=dev.playtorch",TWITTER:"https://twitter.com/playtorch",PRIVACY_POLICY:"https://www.facebook.com/privacy/policy",TERMS_OF_SERVICE:"https://www.facebook.com/legal/terms"}},71033:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>m});var o=n(83117),r=(n(67294),n(3905)),a=n(27436),i=n(72787);const s={id:"anime-gan-jsi",title:"AnimeGAN"},l=void 0,c={unversionedId:"tutorials/jsi-tutorials/anime-gan-jsi",id:"version-0.2.0/tutorials/jsi-tutorials/anime-gan-jsi",title:"AnimeGAN",description:"The AnimeGAN demo let's you take a picture and then uses AI to transform the picture to stylistically look like anime.",source:"@site/versioned_docs/version-0.2.0/tutorials/jsi-tutorials/anime-gan.mdx",sourceDirName:"tutorials/jsi-tutorials",slug:"/tutorials/jsi-tutorials/anime-gan-jsi",permalink:"/docs/tutorials/jsi-tutorials/anime-gan-jsi",draft:!1,editUrl:"https://github.com/facebookresearch/playtorch/edit/main/website/versioned_docs/version-0.2.0/tutorials/jsi-tutorials/anime-gan.mdx",tags:[],version:"0.2.0",frontMatter:{id:"anime-gan-jsi",title:"AnimeGAN"},sidebar:"docs",previous:{title:"Object Detection",permalink:"/docs/tutorials/jsi-tutorials/object-detection-jsi"},next:{title:"ML Powered French Translator",permalink:"/docs/tutorials/jsi-tutorials/seq2seq-nmt-jsi"}},p={},m=[{value:"Viewing this Demo",id:"viewing-this-demo",level:2},{value:"Coming Soon: Step-by-step Tutorial",id:"coming-soon-step-by-step-tutorial",level:2},{value:"Attribution",id:"attribution",level:2}],u={toc:m};function d(e){let{components:t,...n}=e;return(0,r.mdx)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("div",{className:"tutorial-page"},(0,r.mdx)("p",null,"The AnimeGAN demo let's you take a picture and then uses AI to transform the picture to stylistically look like anime."),(0,r.mdx)("h2",{id:"viewing-this-demo"},"Viewing this Demo"),(0,r.mdx)("p",null,"In order to view this demo ",(0,r.mdx)("a",{parentName:"p",href:"/docs/next/tutorials/get-started#download-the-playtorch-app"},"download the PlayTorch app"),"."),(0,r.mdx)("div",{className:"margin-bottom--lg"},(0,r.mdx)(a.Z,{snackId:"@playtorch/animeganv2",mdxType:"ExpoSnack"})),(0,r.mdx)("h2",{id:"coming-soon-step-by-step-tutorial"},"Coming Soon: Step-by-step Tutorial"),(0,r.mdx)("p",null,"We will be adding a step-by-step tutorial for building this example yourself soon."),(0,r.mdx)("p",null,"In the meantime, we encourage you to open the example Expo Snack and explore the code."),(0,r.mdx)("p",null,"Have questions? Reach out to us on ",(0,r.mdx)("a",{href:i.Z.DISCORD},"Discord")),(0,r.mdx)("h2",{id:"attribution"},"Attribution"),(0,r.mdx)("p",null,"We want to acknowledge the creators of the model that make this demo possible. Find the source code, documentation, and contributors below:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://github.com/TachibanaYoshino/AnimeGANv2"},"https://github.com/TachibanaYoshino/AnimeGANv2")," (",(0,r.mdx)("a",{parentName:"li",href:"https://github.com/TachibanaYoshino/AnimeGANv2#author"},"contributors"),")"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://github.com/bryandlee/animegan2-pytorch"},"https://github.com/bryandlee/animegan2-pytorch")," (",(0,r.mdx)("a",{parentName:"li",href:"https://github.com/bryandlee/animegan2-pytorch/graphs/contributors"},"contributors"),")"))))}d.isMDXComponent=!0}}]);