(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{109:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=i,b=d["".concat(o,".").concat(h)]||d[h]||u[h]||r;return n?a.a.createElement(b,c(c({ref:t},l),{},{components:n})):a.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<r;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var i=n(2),a=n(6),r=(n(0),n(109)),o={title:"Dirty Check"},c={unversionedId:"plugins/dirty-check",id:"plugins/dirty-check",isDocsHomePage:!1,title:"Dirty Check",description:"The DirtyCheckPlugin is useful for cases when you want an indication whether the state is dirty (data in the store has been modified). For example, you may want to display a save button only if the user changes something.",source:"@site/docs/plugins/dirty-check.mdx",slug:"/plugins/dirty-check",permalink:"/akita/docs/plugins/dirty-check",editUrl:"https://github.com/datorama/akita/edit/master/docs/docs/plugins/dirty-check.mdx",version:"current",sidebar:"docs",previous:{title:"State History",permalink:"/akita/docs/plugins/state-history"},next:{title:"Server Side Pagination",permalink:"/akita/docs/plugins/pagination"}},s=[{value:"Options",id:"options",children:[{value:"<code>comparator</code>",id:"comparator",children:[]},{value:"<code>watchProperty</code>",id:"watchproperty",children:[]}]},{value:"EntityDirtyCheckPlugin",id:"entitydirtycheckplugin",children:[{value:"Options",id:"options-1",children:[]},{value:"<code>entityIds</code>",id:"entityids",children:[]}]}],l={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"DirtyCheckPlugin")," is useful for cases when you want an indication whether the state is dirty (data in the store has been modified). For example, you may want to display a save button only if the user changes something."),Object(r.b)("p",null,"To activate the plugin you need to create a new instance of ",Object(r.b)("inlineCode",{parentName:"p"},"DirtyCheckPlugin"),", providing it with the ",Object(r.b)("inlineCode",{parentName:"p"},"Query"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-ts",metastring:'title="widgets.component.ts"',title:'"widgets.component.ts"'}),"import { DirtyCheckPlugin } from '@datorama/akita';\n\nexport class WidgetsComponent {\n  widgets$ = this.widgetsQuery.selectAll();\n  private dirtyCheck: DirtyCheckPlugin;\n\n  constructor(private widgetsQuery: WidgetsQuery) {}\n\n  ngOnInit() {\n    this.dirtyCheck = new DirtyCheckPlugin(this.widgetsQuery).setHead();\n  }\n\n  reset() {\n    this.dirtyCheck.reset();\n  }\n  \n  ngOnDestroy() {\n    this.dirtyCheck.destroy();\n  }\n}\n")),Object(r.b)("p",null,"From the moment you call ",Object(r.b)("inlineCode",{parentName:"p"},"setHead()"),", Akita's ",Object(r.b)("inlineCode",{parentName:"p"},"DirtyCheckPlugin")," takes the current store snapshot and saves it as the head (the value that we compare against). With every change to the store the plugin will compare it to the head value and notify you whether the state is dirty."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-html",metastring:'title="widgets.component.html"',title:'"widgets.component.html"'}),'<button\n    [disabled]="!(dirtyCheck.isDirty$| async)" \n    (click)="save()">\n  Save Changes\n</button>\n')),Object(r.b)("p",null,"By calling ",Object(r.b)("inlineCode",{parentName:"p"},"reset()")," you are telling the plugin to update the store with the ",Object(r.b)("inlineCode",{parentName:"p"},"head")," value. The plugin also provides a special method called isPathDirty() that checks whether a given ",Object(r.b)("inlineCode",{parentName:"p"},"path")," is ",Object(r.b)("inlineCode",{parentName:"p"},"dirty"),". For example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-ts"}),"const dirtyCheck = new DirtyCheckPlugin(widgetsQuery).setHead();\ndirtyCheck.isPathDirty('check.this.path');\n")),Object(r.b)("h2",{id:"options"},"Options"),Object(r.b)("h3",{id:"comparator"},Object(r.b)("inlineCode",{parentName:"h3"},"comparator")),Object(r.b)("p",null,"The default ",Object(r.b)("inlineCode",{parentName:"p"},"comparator")," compares the object by using the native ",Object(r.b)("inlineCode",{parentName:"p"},"JSON.stringify()")," method, but you can pass a custom ",Object(r.b)("inlineCode",{parentName:"p"},"comparator"),", for example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-ts"}),"import { isEqual } from 'lodash.isequal';\n\nconst options = { comparator: (a, b) => !isEqual(a, b) };\nconst dirtyCheck = new DirtyCheckPlugin(widgetsQuery, options);\n")),Object(r.b)("h3",{id:"watchproperty"},Object(r.b)("inlineCode",{parentName:"h3"},"watchProperty")),Object(r.b)("p",null,"The dirty check plugin can watch specific properties in your store's state and not just the entire store, this can be achieved by passing the properties keys to ",Object(r.b)("inlineCode",{parentName:"p"},"DirtyCheckPlugin"),", for example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-ts"}),"// Tracks the entire store\nnew DirtyCheckPlugin(widgetsQuery);\n\n// Tracks the store's state name property\nnew DirtyCheckPlugin(widgetsQuery, { watchProperty: 'name' }); \n\n// Tracks a set of properties\nnew DirtyCheckPlugin(widgetsQuery, { watchProperty: ['name', 'color'] });\n\n// In case of an EntityStore we can also track all the entities\nnew DirtyCheckPlugin(widgetsQuery, { watchProperty: 'entities' });\n")),Object(r.b)("p",null,"After the first time you call ",Object(r.b)("inlineCode",{parentName:"p"},"setHead()"),", each subsequent call to this method will re-set the current store value as the ",Object(r.b)("inlineCode",{parentName:"p"},"head")," and update the dirtiness to ",Object(r.b)("inlineCode",{parentName:"p"},"false"),"."),Object(r.b)("h2",{id:"entitydirtycheckplugin"},"EntityDirtyCheckPlugin"),Object(r.b)("p",null,"In addition to the general dirty check functionality,  Akita also provides a powerful API to help keep track of one or many entities, instead of the entire store. "),Object(r.b)("p",null,"A good example is when you have a table or a list of entities that the users can modify, and you want to give them a way to revert it per entity. Here is how you can do it:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-ts",metastring:'title="widgets.component.ts"',title:'"widgets.component.ts"'}),"import { EntityDirtyCheckPlugin } from '@datorama/akita';\n\nexport class WidgetsComponent {\n  widgets$ = this.widgetsQuery.selectAll();\n  private collection: EntityDirtyCheckPlugin;\n\n  constructor(private widgetsQuery: WidgetsQuery) {}\n\n  ngOnInit() {\n    this.collection = new EntityDirtyCheckPlugin(this.widgetsQuery);\n    this.collection.setHead();\n  }\n\n  updateWidget(id: ID, name: string) {\n    this.widgetService.updateWidget(id, name);\n  }\n\n  reset(ids) {\n    this.collection.reset(ids);\n  }\n  \n  ngOnDestroy() {\n    this.collection.destroy();\n  }\n}\n")),Object(r.b)("p",null,"With this setup you can track the dirtiness per entity and revert it. "),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-html",metastring:'title="widgets.component.html"',title:'"widgets.component.html"'}),'<tbody>\n  <tr *ngFor="let widget of widgets$ | async">\n    <td>\n      <input [value]="widget.name" #name>\n    </td>\n    <td>\n      <button (click)="updateWidget(widget.id, name.value)">\n        Save\n      </button>\n    </td>\n    <td>\n      <button (click)="revert(widget.id)"\n              [disabled]="!(collection.isDirty(widget.id) | async)">\n        Revert\n      </button>\n    </td>\n  </tr>\n</tbody>\n')),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},Object(r.b)("inlineCode",{parentName:"p"},"EntityDirtyCheckPlugin")," doesn't track the entities count. It only tracks changes on the entities themselves. If you want to track the addition or removal of entities, you can do so by using the ",Object(r.b)("inlineCode",{parentName:"p"},"DirtyCheckPlugin")," and watch the ",Object(r.b)("inlineCode",{parentName:"p"},"entities")," property."))),Object(r.b)("p",null,"Sometimes it's useful to partially reset the entity value when clicking on revert. The ",Object(r.b)("inlineCode",{parentName:"p"},"revert()")," method can accept a custom ",Object(r.b)("inlineCode",{parentName:"p"},"update")," function which receives as parameters the current ",Object(r.b)("inlineCode",{parentName:"p"},"head")," and the current entity ",Object(r.b)("inlineCode",{parentName:"p"},"value"),", and returns the modified entity. For example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-ts"}),"const updateFn = (head, current) => {\n  return {\n    ...head,\n    title: current.title\n  };\n};\n\ncollection.reset(entityId, { updateFn });\n")),Object(r.b)("p",null,"In the above example we are reverting the whole entity except for the ",Object(r.b)("inlineCode",{parentName:"p"},"title")," (note that this will still mark the entity as dirty)."),Object(r.b)("p",null,"Sometimes it's also useful to check whether at least one of the entities is dirty. For this you can use the ",Object(r.b)("inlineCode",{parentName:"p"},"someDirty()")," method:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-ts"}),"collection.someDirty().subscribe(console.log);\n")),Object(r.b)("h3",{id:"options-1"},"Options"),Object(r.b)("h3",{id:"entityids"},Object(r.b)("inlineCode",{parentName:"h3"},"entityIds")),Object(r.b)("p",null,"A single id or an array of entity ids (default: all)."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-ts"}),"const options = { entityIds: [1, 2] };\nstateHistory = new EntityDirtyCheckPlugin(widgetsQuery, options);\n")))}p.isMDXComponent=!0}}]);