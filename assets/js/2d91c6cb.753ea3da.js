"use strict";(self.webpackChunktransloco_docs=self.webpackChunktransloco_docs||[]).push([[88],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3993:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={title:"Comments for Translators",description:"Tools - Comments for Translators | Transloco Angular i18n"},s=void 0,l={unversionedId:"tools/comments",id:"tools/comments",title:"Comments for Translators",description:"Tools - Comments for Translators | Transloco Angular i18n",source:"@site/docs/tools/comments.mdx",sourceDirName:"tools",slug:"/tools/comments",permalink:"/transloco/docs/tools/comments",draft:!1,editUrl:"https://github.com/jsverse/transloco/edit/master/docs/docs/tools/comments.mdx",tags:[],version:"current",frontMatter:{title:"Comments for Translators",description:"Tools - Comments for Translators | Transloco Angular i18n"},sidebar:"docs",previous:{title:"Optimize",permalink:"/transloco/docs/tools/optimize"},next:{title:"Scoped Library Extractor",permalink:"/transloco/docs/tools/scope-lib-extractor"}},i={},c=[],p={toc:c};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Help the translator with a description and meaning")),(0,o.kt)("p",null,"There are times where we need to help the translator with a description and meaning. To translate a text message accurately, the translator may need additional information or context."),(0,o.kt)("p",null,"For each translation key that requires a description, we can add a companion key post-fixed with ",(0,o.kt)("inlineCode",{parentName:"p"},".comment"),", as shown in the example below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="en.json"',title:'"en.json"'},'{\n  "hello": "",\n  "hello.comment": "Write a comment for the translator"\n}\n')),(0,o.kt)("p",null,"We don't want these keys to get into our final bundle, so we can remove them using the ",(0,o.kt)("a",{parentName:"p",href:"optimize"},"optimize")," library when building the production environment."),(0,o.kt)("p",null,"The library will take care of removing these keys from the translation files specified in the path."))}m.isMDXComponent=!0}}]);