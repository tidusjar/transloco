"use strict";(self.webpackChunktransloco_docs=self.webpackChunktransloco_docs||[]).push([[6488],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=s(n),h=r,d=u["".concat(p,".").concat(h)]||u[h]||c[h]||o;return n?a.createElement(d,l(l({ref:t},m),{},{components:n})):a.createElement(d,l({ref:t},m))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5796:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=["components"],i={id:"translation-in-the-template",title:"Translation in The Template",description:"Translation in The Template | Transloco Angular i18n"},p=void 0,s={unversionedId:"translation-in-the-template",id:"translation-in-the-template",title:"Translation in The Template",description:"Translation in The Template | Transloco Angular i18n",source:"@site/docs/translation-in-template.mdx",sourceDirName:".",slug:"/translation-in-the-template",permalink:"/transloco/docs/translation-in-the-template",draft:!1,editUrl:"https://github.com/jsverse/transloco/edit/master/docs/docs/translation-in-template.mdx",tags:[],version:"current",frontMatter:{id:"translation-in-the-template",title:"Translation in The Template",description:"Translation in The Template | Transloco Angular i18n"},sidebar:"docs",previous:{title:"Config Options",permalink:"/transloco/docs/getting-started/config-options"},next:{title:"Translation API",permalink:"/transloco/docs/translation-api"}},m={},c=[{value:"Structural Directive",id:"structural-directive",level:2},{value:"Utilizing the <code>prefix</code> input",id:"utilizing-the-prefix-input",level:3},{value:"Pipe",id:"pipe",level:2},{value:"Attribute Directive",id:"attribute-directive",level:2}],u={toc:c};function h(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"structural-directive"},"Structural Directive"),(0,o.kt)("p",null,"Using a structural directive is the ",(0,o.kt)("strong",{parentName:"p"},"recommended")," approach. It's DRY and efficient, as it creates one subscription per template:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="home.component.html"',title:'"home.component.html"'},"<ng-container *transloco=\"let t\">\n  <p>{{ t('title') }}</p>\n\n  <comp [title]=\"t('title')\"></comp>\n</ng-container>\n")),(0,o.kt)("p",null,"Note that the ",(0,o.kt)("inlineCode",{parentName:"p"},"t")," function is ",(0,o.kt)("strong",{parentName:"p"},"memoized"),". It means that given the same key it will return the result directly from the cache."),(0,o.kt)("p",null,"We can pass a ",(0,o.kt)("inlineCode",{parentName:"p"},"params")," object as the second parameter:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="home.component.html"',title:'"home.component.html"'},"<ng-container *transloco=\"let t\">\n  <p>{{ t('name', { name: 'Transloco' }) }}</p>\n</ng-container>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="en.json"',title:'"en.json"'},'{\n  "name": "My name is {{name}}"\n}\n')),(0,o.kt)("p",null,"We can instruct the directive to use a ",(0,o.kt)("inlineCode",{parentName:"p"},"different")," language in our template:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'{1} title="home.component.html"',"{1}":!0,title:'"home.component.html"'},"<ng-container *transloco=\"let t; lang: 'es'\">\n  <p>{{ t('title') }}</p>\n</ng-container>\n")),(0,o.kt)("p",null,"This will translate each key based on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Spanish")," language translation file."),(0,o.kt)("h3",{id:"utilizing-the-prefix-input"},"Utilizing the ",(0,o.kt)("inlineCode",{parentName:"h3"},"prefix")," input"),(0,o.kt)("admonition",{type:"important"},(0,o.kt)("p",{parentName:"admonition"},"This input was previously named ",(0,o.kt)("inlineCode",{parentName:"p"},"read")," and was renamed to ",(0,o.kt)("inlineCode",{parentName:"p"},"prefix")," starting v7.1.0.",(0,o.kt)("br",null),"\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"read")," input is deprecated and will be removed in v8.")),(0,o.kt)("p",null,"We can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"prefix")," input in the structural directive to get translations of a particular nested (including deeply nested) property."),(0,o.kt)("p",null,"Let's say we need to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"dashboard")," scope all over the template. Given this translation file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="en.json"',title:'"en.json"'},'{\n  "foo": "Foo",\n  "bar": "Bar",\n  "dashboard": {\n    "title": "Dashboard Title",\n    "desc": "Dashboard Desc"\n  }\n}\n')),(0,o.kt)("p",null,"we can write:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'{1} title="home.component.html"',"{1}":!0,title:'"home.component.html"'},"<ng-container *transloco=\"let t; prefix: 'dashboard'\">\n  <p>{{ t('title') }}</p>\n</ng-container>\n")),(0,o.kt)("p",null,"without having to repeat the ",(0,o.kt)("inlineCode",{parentName:"p"},"dashboard")," key in each translation. Under the hood, it will do the following for you:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="home.component.html"',title:'"home.component.html"'},"<ng-container *transloco=\"let t;\">\n  <h1>{{ t('dashboard.title') }}</h1>\n  <p>{{ t('dashboard.desc') }}</p>\n</ng-container>\n")),(0,o.kt)("h2",{id:"pipe"},"Pipe"),(0,o.kt)("p",null,"The second option we have is to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"transloco")," pipe:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="home.component.html"',title:'"home.component.html"'},"<span>{{ 'home' | transloco }}</span>\n")),(0,o.kt)("p",null,"Use it with ",(0,o.kt)("inlineCode",{parentName:"p"},"params"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="home.component.html"',title:'"home.component.html"'},"<span>{{ 'alert' | transloco: { value: dynamic } }}</span>\n")),(0,o.kt)("p",null,"Use it with ",(0,o.kt)("inlineCode",{parentName:"p"},"inputs"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="home.component.html"',title:'"home.component.html"'},"<span [attr.alt]=\"'hello' | transloco\">Attribute</span>\n<span [title]=\"'hello' | transloco\">Property</span>\n")),(0,o.kt)("p",null,"Use it with a different ",(0,o.kt)("inlineCode",{parentName:"p"},"language"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="home.component.html"',title:'"home.component.html"'},"<span>{{ 'alert' | transloco:params:'es' }}</span>\n")),(0,o.kt)("h2",{id:"attribute-directive"},"Attribute Directive"),(0,o.kt)("p",null,"The last option we have is to use ",(0,o.kt)("inlineCode",{parentName:"p"},"transloco")," attribute directive:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="home.component.html"',title:'"home.component.html"'},'<span transloco="home"></span>\n')),(0,o.kt)("p",null,"Use it with ",(0,o.kt)("inlineCode",{parentName:"p"},"params"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="home.component.html"',title:'"home.component.html"'},'<span transloco="alert" [translocoParams]="{ value: dynamic }"></span>\n')),(0,o.kt)("p",null,"Use it with a different ",(0,o.kt)("inlineCode",{parentName:"p"},"language"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="home.component.html"',title:'"home.component.html"'},'<span transloco="home" translocoLang="es"></span>\n')))}h.isMDXComponent=!0}}]);