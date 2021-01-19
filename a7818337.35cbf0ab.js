(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{109:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,d=u["".concat(s,".").concat(m)]||u[m]||b[m]||o;return n?a.a.createElement(d,i(i({ref:t},l),{},{components:n})):a.a.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},89:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(109)),s={title:"Best Practices"},i={unversionedId:"best-practices",id:"best-practices",isDocsHomePage:!1,title:"Best Practices",description:"The Query",source:"@site/docs/best-practices.mdx",slug:"/best-practices",permalink:"/akita/docs/best-practices",editUrl:"https://github.com/datorama/akita/edit/master/docs/docs/best-practices.mdx",version:"current",sidebar:"docs",previous:{title:"Transactions",permalink:"/akita/docs/transactions"},next:{title:"Using Immer",permalink:"/akita/docs/immer"}},c=[{value:"The Query",id:"the-query",children:[]},{value:"Data Storage Types",id:"data-storage-types",children:[]},{value:"UI State",id:"ui-state",children:[]},{value:"Keep It Simple",id:"keep-it-simple",children:[]},{value:"Subscription Management",id:"subscription-management",children:[]}],l={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"the-query"},"The Query"),Object(o.b)("p",null,"Avoid creating selectors in your components:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="nav.component.ts"',title:'"nav.component.ts"'}),"@Component({})\nclass NavComponent {\n  isLoggedIn$ = this.authQuery.select(state => !!state.token);\n  \n  constructor(private authQuery: AuthQuery) {\n  }\n}\n")),Object(o.b)("p",null,"Instead, create them in the query:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="auth.query.ts"',title:'"auth.query.ts"'}),"export class AuthQuery extends Query<AuthState> {\n  isLoggedIn$ = this.select(state => !!state.token);\n  \n  constructor(protected store: AuthStore) {\n    super(store);\n  }\n}\n")),Object(o.b)("p",null,"This makes your components cleaner and the selectors reusable across the application."),Object(o.b)("h3",{id:"data-storage-types"},"Data Storage Types"),Object(o.b)("p",null,"Store only plain objects in the store, avoid storing ",Object(o.b)("inlineCode",{parentName:"p"},"Map")," or ",Object(o.b)("inlineCode",{parentName:"p"},"Set"),". It's more efficient to perform immutable operations (which are required for updating the store) with plain objects rather than with complex ones such as ",Object(o.b)("inlineCode",{parentName:"p"},"Map")," or ",Object(o.b)("inlineCode",{parentName:"p"},"Set"),".\nMoreover, it's harder to serialize this types of objects."),Object(o.b)("h3",{id:"ui-state"},"UI State"),Object(o.b)("p",null,"Keep the UI data separated from the model data. Read more about this topic ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"ui"}),"here"),"."),Object(o.b)("h3",{id:"keep-it-simple"},"Keep It Simple"),Object(o.b)("p",null,"Avoid over-engineering. Don't create a separate store for any entity you may have. For example, you might have a list of articles where each article contains a list of comments:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="articles.store.ts"',title:'"articles.store.ts"'}),"interface Article {\n  id: ID;\n  comments: Comment[];\n  title: string;\n}\n\ninterface ArticlesState extends EntityState<Article> {\n}\n\n@StoreConfig({ name: 'articles' })\nclass ArticlesStore extends EntityStore<ArticlesState> {\n  constructor() {\n    super();\n  }\n}\n")),Object(o.b)("p",null,"In most cases, there is no need to create a separate entity store for the ",Object(o.b)("inlineCode",{parentName:"p"},"comments"),". Instead use Akita's ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/akita/docs/additional/array"}),"Array Utils"),". This will keep your store easier to maintain and use. If you still require a separate store, check out this article for tips on how to combine their data:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://netbasal.com/working-with-normalized-data-in-akita-e626d4c67ca4"}),"Working with Normalized Data in Akita and Angular")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://dev.to/arielgueta/introducing-one-to-many-relationship-in-angular-akita-37me"}),"Introducing One To Many Relationship in Angular & Akita"))),Object(o.b)("h3",{id:"subscription-management"},"Subscription Management"),Object(o.b)("p",null,"A question that often comes up is whether to subscribe at the component or the service. Let's examine the two options:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="todos.service.ts"',title:'"todos.service.ts"'}),"class TodoService {\n  get() {\n    return this.http.get<Todo[]>('/api/todos').pipe(\n      tap(entities => {\n        this.todoStore.set(entities);\n      })\n    );\n  }\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="todos.components.ts"',title:'"todos.components.ts"'}),"class TodosComponent {\n  ngOnInit() {\n   this.todoService.get().subscribe();\n  }\n}\n")),Object(o.b)("p",null,"Prefer this option when you need to show the user a success or error message locally in the component:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="todos.components.ts"',title:'"todos.components.ts"'}),"class TodosComponent {\n  ngOnInit() {\n   this.todoService.get().subscribe({\n     next: () => {\n       this.success = true;\n     }\n     error: (err) => {\n      this.error = err;\n     }\n   });\n  }\n}\n")),Object(o.b)("p",null,"Otherwise, you can subscribe at the service:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="todos.service.ts"',title:'"todos.service.ts"'}),"class TodoService {\n  get() {\n    return this.http.get<Todo[]>('/api/todos').subscribe(entities => {\n      this.todoStore.set(entities);\n    });\n  }\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="todos.components.ts"',title:'"todos.components.ts"'}),"class TodosComponent {\n  ngOnInit() {\n    this.todoService.get();\n  }\n}\n")))}p.isMDXComponent=!0}}]);