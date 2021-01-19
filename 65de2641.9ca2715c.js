(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{109:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(r),b=n,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return r?a.a.createElement(m,s(s({ref:t},l),{},{components:r})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},79:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(6),o=(r(0),r(109)),i={title:"Reset Stores"},s={unversionedId:"additional/reset",id:"additional/reset",isDocsHomePage:!1,title:"Reset Stores",description:"Akita's provides resetStores() method that reset all the stores back to their initial state. It can be useful when you want to clean the store's data upon user logout.",source:"@site/docs/additional/reset.mdx",slug:"/additional/reset",permalink:"/akita/docs/additional/reset",editUrl:"https://github.com/datorama/akita/edit/master/docs/docs/additional/reset.mdx",version:"current",sidebar:"docs",previous:{title:"Store Middleware",permalink:"/akita/docs/additional/middleware"},next:{title:"Event-based APIs",permalink:"/akita/docs/additional/events"}},c=[],l={rightToc:c};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Akita's provides ",Object(o.b)("inlineCode",{parentName:"p"},"resetStores()")," method that reset all the stores back to their initial state. It can be useful when you want to clean the store's data upon user logout."),Object(o.b)("p",null," In order to enable it globally, you should set the ",Object(o.b)("inlineCode",{parentName:"p"},"resettable")," option to ",Object(o.b)("inlineCode",{parentName:"p"},"true"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"import { akitaConfig } from '@datorama/akita';\n\nakitaConfig({ resettable: true });\n")),Object(o.b)("p",null,"Now you can call the global ",Object(o.b)("inlineCode",{parentName:"p"},"resetStores()")," method:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"import { resetStores } from \"@datorama/akita\";\n\nclass AuthService {\n  logout() {\n    resetStores(); \n\n    // Optionally exclude stores\n    resetStores({ exclude: ['storeName'] }) \n  }\n}\n")),Object(o.b)("p",null,"In addition to that, you can set a specific store to be ",Object(o.b)("inlineCode",{parentName:"p"},"resettable"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts",metastring:'title="todos.store.ts"',title:'"todos.store.ts"'}),"@StoreConfig({ name: 'todos', resettable: true })\nexport class TodosStore extends EntityStore<TodosState> {\n  constructor() {\n    super();\n  }\n}\n")),Object(o.b)("p",null,"Now, you can call the store's ",Object(o.b)("inlineCode",{parentName:"p"},"reset()")," method."))}u.isMDXComponent=!0}}]);