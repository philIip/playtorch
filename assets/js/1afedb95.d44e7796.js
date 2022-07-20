"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4574],{3905:(e,a,n)=>{n.r(a),n.d(a,{MDXContext:()=>o,MDXProvider:()=>c,mdx:()=>x,useMDXComponents:()=>s,withMDXComponents:()=>p});var t=n(67294);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(){return r=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},r.apply(this,arguments)}function d(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?d(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function m(e,a){if(null==e)return{};var n,t,i=function(e,a){if(null==e)return{};var n,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=t.createContext({}),p=function(e){return function(a){var n=s(a.components);return t.createElement(e,r({},a,{components:n}))}},s=function(e){var a=t.useContext(o),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},c=function(e){var a=s(e.components);return t.createElement(o.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},h=t.forwardRef((function(e,a){var n=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,o=m(e,["components","mdxType","originalType","parentName"]),p=s(n),c=i,h=p["".concat(d,".").concat(c)]||p[c]||u[c]||r;return n?t.createElement(h,l(l({ref:a},o),{},{components:n})):t.createElement(h,l({ref:a},o))}));function x(e,a){var n=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=n.length,d=new Array(r);d[0]=h;var l={};for(var m in a)hasOwnProperty.call(a,m)&&(l[m]=a[m]);l.originalType=e,l.mdxType="string"==typeof e?e:i,d[1]=l;for(var o=2;o<r;o++)d[o]=n[o];return t.createElement.apply(null,d)}return t.createElement.apply(null,n)}h.displayName="MDXCreateElement"},83466:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>m,contentTitle:()=>d,default:()=>s,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var t=n(83117),i=(n(67294),n(3905));const r={id:"imagemodule.image",title:"Interface: Image",sidebar_label:"Image",custom_edit_url:null},d=void 0,l={unversionedId:"api/core/interfaces/imagemodule.image",id:"api/core/interfaces/imagemodule.image",title:"Interface: Image",description:"ImageModule.Image",source:"@site/docs/api/core/interfaces/imagemodule.image.md",sourceDirName:"api/core/interfaces",slug:"/api/core/interfaces/imagemodule.image",permalink:"/docs/next/api/core/interfaces/imagemodule.image",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"imagemodule.image",title:"Interface: Image",sidebar_label:"Image",custom_edit_url:null},sidebar:"api",previous:{title:"ImageData",permalink:"/docs/next/api/core/interfaces/canvasview.imagedata"},next:{title:"MobileModel",permalink:"/docs/next/api/core/interfaces/mobilemodelmodule.mobilemodel"}},m={},o=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"ID",id:"id",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Methods",id:"methods",level:2},{value:"getHeight",id:"getheight",level:3},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"getNaturalHeight",id:"getnaturalheight",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"getNaturalWidth",id:"getnaturalwidth",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"getPixelDensity",id:"getpixeldensity",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"getWidth",id:"getwidth",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"release",id:"release",level:3},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"scale",id:"scale",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-7",level:4}],p={toc:o};function s(e){let{components:a,...n}=e;return(0,i.mdx)("wrapper",(0,t.Z)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"/docs/next/api/core/modules/imagemodule"},"ImageModule"),".Image"),(0,i.mdx)("p",null,"An image is a high-level data type, which can be used for model inference\nwith ",(0,i.mdx)("a",{parentName:"p",href:"/docs/next/api/core/interfaces/mobilemodelmodule.mobilemodel#execute"},"MobileModel.execute")," or it can be drawn on a [","[Canvas.drawImage]","]."),(0,i.mdx)("p",null,"An ",(0,i.mdx)("a",{parentName:"p",href:"/docs/next/api/core/interfaces/imagemodule.image"},"Image")," object in JavaScript is a reference to a native image object\nwrapped in ",(0,i.mdx)("a",{parentName:"p",href:"/docs/next/api/core/modules/nativejsref"},"NativeJSRef"),". The image data is not transferred over the React\nNative Bridge, but it offers functions to manipulate the image. All\nfunctions are executed ",(0,i.mdx)("inlineCode",{parentName:"p"},"async")," in native."),(0,i.mdx)("div",{className:"admonition admonition-info alert alert--info"},(0,i.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,i.mdx)("h5",{parentName:"div"},(0,i.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.mdx)("div",{parentName:"div",className:"admonition-content"},(0,i.mdx)("p",{parentName:"div"},"Eventually, this will change with the introduction of the new React Native\narchitecture including JSI, Fabric, and TurboModules."))),(0,i.mdx)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("a",{parentName:"p",href:"/docs/next/api/core/interfaces/nativejsref.nativejsref-1"},"NativeJSRef")),(0,i.mdx)("p",{parentName:"li"},"\u21b3 ",(0,i.mdx)("strong",{parentName:"p"},"Image")))),(0,i.mdx)("h2",{id:"properties"},"Properties"),(0,i.mdx)("h3",{id:"id"},"ID"),(0,i.mdx)("p",null,"\u2022 ",(0,i.mdx)("strong",{parentName:"p"},"ID"),": ",(0,i.mdx)("inlineCode",{parentName:"p"},"string")),(0,i.mdx)("p",null,"The internal ID for the object instance in native. Instead of serializing\nthe object in native and sending it via the React Native Bridge, each\nnative object will be assigned an ID which is sent to JavaScript instead.\nThe ID will be used to reference the native object instance when calling\nfunctions on the JavaScript object."),(0,i.mdx)("h4",{id:"inherited-from"},"Inherited from"),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"/docs/next/api/core/interfaces/nativejsref.nativejsref-1"},"NativeJSRef"),".",(0,i.mdx)("a",{parentName:"p",href:"/docs/next/api/core/interfaces/nativejsref.nativejsref-1#id"},"ID")),(0,i.mdx)("h4",{id:"defined-in"},"Defined in"),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"https://github.com/facebookresearch/playtorch/blob/d8eb616/react-native-pytorch-core/src/NativeJSRef.ts#L64"},"NativeJSRef.ts:64")),(0,i.mdx)("h2",{id:"methods"},"Methods"),(0,i.mdx)("h3",{id:"getheight"},"getHeight"),(0,i.mdx)("p",null,"\u25b8 ",(0,i.mdx)("strong",{parentName:"p"},"getHeight"),"(): ",(0,i.mdx)("inlineCode",{parentName:"p"},"number")),(0,i.mdx)("p",null,"Get the height of an image (in pixel)."),(0,i.mdx)("h4",{id:"returns"},"Returns"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"number")),(0,i.mdx)("h4",{id:"defined-in-1"},"Defined in"),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"https://github.com/facebookresearch/playtorch/blob/d8eb616/react-native-pytorch-core/src/ImageModule.ts#L43"},"ImageModule.ts:43")),(0,i.mdx)("hr",null),(0,i.mdx)("h3",{id:"getnaturalheight"},"getNaturalHeight"),(0,i.mdx)("p",null,"\u25b8 ",(0,i.mdx)("strong",{parentName:"p"},"getNaturalHeight"),"(): ",(0,i.mdx)("inlineCode",{parentName:"p"},"number")),(0,i.mdx)("p",null,"Get the natural height of an image (in pixel)."),(0,i.mdx)("h4",{id:"returns-1"},"Returns"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"number")),(0,i.mdx)("h4",{id:"defined-in-2"},"Defined in"),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"https://github.com/facebookresearch/playtorch/blob/d8eb616/react-native-pytorch-core/src/ImageModule.ts#L53"},"ImageModule.ts:53")),(0,i.mdx)("hr",null),(0,i.mdx)("h3",{id:"getnaturalwidth"},"getNaturalWidth"),(0,i.mdx)("p",null,"\u25b8 ",(0,i.mdx)("strong",{parentName:"p"},"getNaturalWidth"),"(): ",(0,i.mdx)("inlineCode",{parentName:"p"},"number")),(0,i.mdx)("p",null,"Get the natural width of an image (in pixel)."),(0,i.mdx)("h4",{id:"returns-2"},"Returns"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"number")),(0,i.mdx)("h4",{id:"defined-in-3"},"Defined in"),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"https://github.com/facebookresearch/playtorch/blob/d8eb616/react-native-pytorch-core/src/ImageModule.ts#L58"},"ImageModule.ts:58")),(0,i.mdx)("hr",null),(0,i.mdx)("h3",{id:"getpixeldensity"},"getPixelDensity"),(0,i.mdx)("p",null,"\u25b8 ",(0,i.mdx)("strong",{parentName:"p"},"getPixelDensity"),"(): ",(0,i.mdx)("inlineCode",{parentName:"p"},"number")),(0,i.mdx)("p",null,"Get the pixel density for this image. The ",(0,i.mdx)("inlineCode",{parentName:"p"},"width")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"height")," multiplied\nby the ",(0,i.mdx)("inlineCode",{parentName:"p"},"pixelDensity")," is ",(0,i.mdx)("inlineCode",{parentName:"p"},"naturalWidth")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"naturalHeight"),"."),(0,i.mdx)("h4",{id:"returns-3"},"Returns"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"number")),(0,i.mdx)("h4",{id:"defined-in-4"},"Defined in"),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"https://github.com/facebookresearch/playtorch/blob/d8eb616/react-native-pytorch-core/src/ImageModule.ts#L64"},"ImageModule.ts:64")),(0,i.mdx)("hr",null),(0,i.mdx)("h3",{id:"getwidth"},"getWidth"),(0,i.mdx)("p",null,"\u25b8 ",(0,i.mdx)("strong",{parentName:"p"},"getWidth"),"(): ",(0,i.mdx)("inlineCode",{parentName:"p"},"number")),(0,i.mdx)("p",null,"Get the width of an image (in pixel)."),(0,i.mdx)("h4",{id:"returns-4"},"Returns"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"number")),(0,i.mdx)("h4",{id:"defined-in-5"},"Defined in"),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"https://github.com/facebookresearch/playtorch/blob/d8eb616/react-native-pytorch-core/src/ImageModule.ts#L48"},"ImageModule.ts:48")),(0,i.mdx)("hr",null),(0,i.mdx)("h3",{id:"release"},"release"),(0,i.mdx)("p",null,"\u25b8 ",(0,i.mdx)("strong",{parentName:"p"},"release"),"(): ",(0,i.mdx)("inlineCode",{parentName:"p"},"Promise"),"<void",">"),(0,i.mdx)("p",null,"Until explicitly released, an ",(0,i.mdx)("a",{parentName:"p",href:"/docs/next/api/core/interfaces/imagemodule.image"},"Image")," will have a reference in memory.\nNot calling ",(0,i.mdx)("a",{parentName:"p",href:"/docs/next/api/core/interfaces/imagemodule.image#release"},"Image.release")," can eventually result in an\n",(0,i.mdx)("inlineCode",{parentName:"p"},"OutOfMemoryException"),"."),(0,i.mdx)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,i.mdx)("h5",{parentName:"div"},(0,i.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,i.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.mdx)("div",{parentName:"div",className:"admonition-content"},(0,i.mdx)("p",{parentName:"div"},"While this is an ",(0,i.mdx)("inlineCode",{parentName:"p"},"async")," function, it does not need to be ",(0,i.mdx)("inlineCode",{parentName:"p"},"await"),"ed. For\nexample, the ",(0,i.mdx)("inlineCode",{parentName:"p"},"GC")," on Android will eventually free the allocated memory."))),(0,i.mdx)("h4",{id:"returns-5"},"Returns"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"Promise"),"<void",">"),(0,i.mdx)("h4",{id:"defined-in-6"},"Defined in"),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"https://github.com/facebookresearch/playtorch/blob/d8eb616/react-native-pytorch-core/src/ImageModule.ts#L78"},"ImageModule.ts:78")),(0,i.mdx)("hr",null),(0,i.mdx)("h3",{id:"scale"},"scale"),(0,i.mdx)("p",null,"\u25b8 ",(0,i.mdx)("strong",{parentName:"p"},"scale"),"(",(0,i.mdx)("inlineCode",{parentName:"p"},"sx"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"sy"),"): ",(0,i.mdx)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.mdx)("a",{parentName:"p",href:"/docs/next/api/core/interfaces/imagemodule.image"},"Image"),">"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("a",{parentName:"p",href:"/docs/next/api/core/interfaces/imagemodule.image#scale"},"Image.scale")," method of the ",(0,i.mdx)("a",{parentName:"p",href:"/docs/next/api/core/interfaces/imagemodule.image"},"Image")," API adds a scaling\ntransformation horizontally and/or vertically. For instance, a scaling\nfactor of ",(0,i.mdx)("inlineCode",{parentName:"p"},"0.5")," results in a unit size of ",(0,i.mdx)("inlineCode",{parentName:"p"},"0.5")," pixels; the image is thus\nat half the normal size. Similarly, a scaling factor of ",(0,i.mdx)("inlineCode",{parentName:"p"},"2.0")," increases\nthe unit size so that one unit becomes two pixels; images are thus at\ntwice the normal size."),(0,i.mdx)("p",null,"The method will apply the scaling on a copy of the ",(0,i.mdx)("a",{parentName:"p",href:"/docs/next/api/core/interfaces/imagemodule.image"},"Image")," and return\nthe scaled ",(0,i.mdx)("a",{parentName:"p",href:"/docs/next/api/core/interfaces/imagemodule.image"},"Image")," asynchronously."),(0,i.mdx)("h4",{id:"parameters"},"Parameters"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:"left"},"Name"),(0,i.mdx)("th",{parentName:"tr",align:"left"},"Type"),(0,i.mdx)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:"left"},(0,i.mdx)("inlineCode",{parentName:"td"},"sx")),(0,i.mdx)("td",{parentName:"tr",align:"left"},(0,i.mdx)("inlineCode",{parentName:"td"},"number")),(0,i.mdx)("td",{parentName:"tr",align:"left"},"Scaling factor in the horizontal direction. A negative value flips pixels across the vertical axis. A value of ",(0,i.mdx)("inlineCode",{parentName:"td"},"1")," results in no horizontal scaling.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:"left"},(0,i.mdx)("inlineCode",{parentName:"td"},"sy")),(0,i.mdx)("td",{parentName:"tr",align:"left"},(0,i.mdx)("inlineCode",{parentName:"td"},"number")),(0,i.mdx)("td",{parentName:"tr",align:"left"},"Scaling factor in the vertical direction. A negative value flips pixels across the horizontal axis. A value of ",(0,i.mdx)("inlineCode",{parentName:"td"},"1")," results in no vertical scaling.")))),(0,i.mdx)("h4",{id:"returns-6"},"Returns"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.mdx)("a",{parentName:"p",href:"/docs/next/api/core/interfaces/imagemodule.image"},"Image"),">"),(0,i.mdx)("h4",{id:"defined-in-7"},"Defined in"),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"https://github.com/facebookresearch/playtorch/blob/d8eb616/react-native-pytorch-core/src/ImageModule.ts#L94"},"ImageModule.ts:94")))}s.isMDXComponent=!0}}]);