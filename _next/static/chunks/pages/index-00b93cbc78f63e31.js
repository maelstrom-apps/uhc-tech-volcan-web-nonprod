(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4233:function(e){var a={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"CreateRepository"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"name"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"organization"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"aideId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"description"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"homepage"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"has_issues"}},type:{kind:"NamedType",name:{kind:"Name",value:"Boolean"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"has_wiki"}},type:{kind:"NamedType",name:{kind:"Name",value:"Boolean"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"auto_init"}},type:{kind:"NamedType",name:{kind:"Name",value:"Boolean"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"gitignore_template"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"license_template"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"allow_auto_merge"}},type:{kind:"NamedType",name:{kind:"Name",value:"Boolean"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"delete_branch_on_merge"}},type:{kind:"NamedType",name:{kind:"Name",value:"Boolean"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"createRepository"},arguments:[{kind:"Argument",name:{kind:"Name",value:"name"},value:{kind:"Variable",name:{kind:"Name",value:"name"}}},{kind:"Argument",name:{kind:"Name",value:"organization"},value:{kind:"Variable",name:{kind:"Name",value:"organization"}}},{kind:"Argument",name:{kind:"Name",value:"aideId"},value:{kind:"Variable",name:{kind:"Name",value:"aideId"}}},{kind:"Argument",name:{kind:"Name",value:"description"},value:{kind:"Variable",name:{kind:"Name",value:"description"}}},{kind:"Argument",name:{kind:"Name",value:"homepage"},value:{kind:"Variable",name:{kind:"Name",value:"homepage"}}},{kind:"Argument",name:{kind:"Name",value:"has_issues"},value:{kind:"Variable",name:{kind:"Name",value:"has_issues"}}},{kind:"Argument",name:{kind:"Name",value:"has_wiki"},value:{kind:"Variable",name:{kind:"Name",value:"has_wiki"}}},{kind:"Argument",name:{kind:"Name",value:"auto_init"},value:{kind:"Variable",name:{kind:"Name",value:"auto_init"}}},{kind:"Argument",name:{kind:"Name",value:"gitignore_template"},value:{kind:"Variable",name:{kind:"Name",value:"gitignore_template"}}},{kind:"Argument",name:{kind:"Name",value:"license_template"},value:{kind:"Variable",name:{kind:"Name",value:"license_template"}}},{kind:"Argument",name:{kind:"Name",value:"allow_auto_merge"},value:{kind:"Variable",name:{kind:"Name",value:"allow_auto_merge"}}},{kind:"Argument",name:{kind:"Name",value:"delete_branch_on_merge"},value:{kind:"Variable",name:{kind:"Name",value:"delete_branch_on_merge"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"data"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"fullName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"organization"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:787}};a.loc.source={body:"mutation CreateRepository(\n  $name: String!\n  $organization: String!\n  $aideId: String!\n  $description: String\n  $homepage: String\n  $has_issues: Boolean\n  $has_wiki: Boolean\n  $auto_init: Boolean\n  $gitignore_template: String\n  $license_template: String\n  $allow_auto_merge: Boolean\n  $delete_branch_on_merge: Boolean\n) {\n  createRepository(\n    name: $name\n    organization: $organization\n    aideId: $aideId\n    description: $description\n    homepage: $homepage\n    has_issues: $has_issues\n    has_wiki: $has_wiki\n    auto_init: $auto_init\n    gitignore_template: $gitignore_template\n    license_template: $license_template\n    allow_auto_merge: $allow_auto_merge\n    delete_branch_on_merge: $delete_branch_on_merge\n  ) {\n    name\n    data\n    fullName\n    organization\n    url\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var n={};function i(e,a){for(var n=0;n<e.definitions.length;n++){var i=e.definitions[n];if(i.name&&i.name.value==a)return i}}a.definitions.forEach(function(e){if(e.name){var a=new Set;(function e(a,n){if("FragmentSpread"===a.kind)n.add(a.name.value);else if("VariableDefinition"===a.kind){var i=a.type;"NamedType"===i.kind&&n.add(i.name.value)}a.selectionSet&&a.selectionSet.selections.forEach(function(a){e(a,n)}),a.variableDefinitions&&a.variableDefinitions.forEach(function(a){e(a,n)}),a.definitions&&a.definitions.forEach(function(a){e(a,n)})})(e,a),n[e.name.value]=a}}),e.exports=a,e.exports.CreateRepository=function(e,a){var t={kind:e.kind,definitions:[i(e,a)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var l=n[a]||new Set,o=new Set,r=new Set;for(l.forEach(function(e){r.add(e)});r.size>0;){var d=r;r=new Set,d.forEach(function(e){o.has(e)||(o.add(e),(n[e]||new Set).forEach(function(e){r.add(e)}))})}return o.forEach(function(a){var n=i(e,a);n&&t.definitions.push(n)}),t}(a,"CreateRepository")},4517:function(e){var a={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"Query"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"orgs"},arguments:[],directives:[]}]}}],loc:{start:0,end:23}};a.loc.source={body:"query Query {\n  orgs\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var n={};function i(e,a){for(var n=0;n<e.definitions.length;n++){var i=e.definitions[n];if(i.name&&i.name.value==a)return i}}a.definitions.forEach(function(e){if(e.name){var a=new Set;(function e(a,n){if("FragmentSpread"===a.kind)n.add(a.name.value);else if("VariableDefinition"===a.kind){var i=a.type;"NamedType"===i.kind&&n.add(i.name.value)}a.selectionSet&&a.selectionSet.selections.forEach(function(a){e(a,n)}),a.variableDefinitions&&a.variableDefinitions.forEach(function(a){e(a,n)}),a.definitions&&a.definitions.forEach(function(a){e(a,n)})})(e,a),n[e.name.value]=a}}),e.exports=a,e.exports.Query=function(e,a){var t={kind:e.kind,definitions:[i(e,a)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var l=n[a]||new Set,o=new Set,r=new Set;for(l.forEach(function(e){r.add(e)});r.size>0;){var d=r;r=new Set,d.forEach(function(e){o.has(e)||(o.add(e),(n[e]||new Set).forEach(function(e){r.add(e)}))})}return o.forEach(function(a){var n=i(e,a);n&&t.definitions.push(n)}),t}(a,"Query")},5356:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4099)}])},4099:function(e,a,n){e.exports=n(3281).client},3281:function(e,a,n){"use strict";let i;n.d(a,{client:function(){return R}});var t=n(2322),l=n(2784),o=n(5416),r=n(8497),d=n(8009),s=n(1317),u=n(3168),m=n(5436),c=n(2277),v=n(2737),k=n(9619),g=n(3065),p=n(5981),f=n(6449),h=n(4517),b=n.n(h);let N=e=>(0,p.a)(b(),{...e,url:(0,f.v)("GRAPHQL_API_PATH"),accessor:"orgs",initialState:{orgs:[]}});var _=n(4233),S=n.n(_);let y=e=>(0,p.a)(S(),{...e,url:(0,f.v)("GRAPHQL_API_PATH"),accessor:"repo",initialState:{createRepository:{data:{},name:"",fullName:"",organization:"",url:""}}});var w=n(6242),V=n(2605),x=n(8552),C=n(1370);let D=(0,u.styled)("div",{textAlign:"center"}),E=()=>{let e=(0,V.c)(),[a,n]=(0,l.useState)(""),[i,o]=(0,l.useState)(""),[r,d]=(0,l.useState)(""),[s,u]=(0,l.useState)(""),[p,f]=(0,l.useState)(""),[h,b]=(0,l.useState)(!0),[_,S]=(0,l.useState)(!1),[E,j]=(0,l.useState)(!0),[A,T]=(0,l.useState)(!0),[$,R]=(0,l.useState)(!1),[P,L]=(0,l.useState)(""),[z,B]=(0,l.useState)(""),[F,I]=(0,l.useState)([]),[O,H]=N(),[Q,X]=y(),[q,G]=(0,l.useState)(!1),[M,U]=(0,l.useState)(""),[W,Z]=(0,l.useState)(""),[J,K]=(0,l.useState)("Repository Created Successfully"),[Y,ee]=(0,l.useState)("success"),ea=e=>{var a;let{data:n}=e;if((null==n?void 0:null===(a=n.orgs)||void 0===a?void 0:a.length)>0)return n.orgs.map(e=>({value:e,label:e})).sort((e,a)=>e.label>a.label?1:-1)};(0,l.useEffect)(()=>{H()},[]),(0,l.useEffect)(()=>{I(ea(O))},[O]),(0,l.useEffect)(()=>{console.log(Q),!Q.isLoading&&Q.data.createRepository.name?(window.open(Q.data.createRepository.url),ee("success"),K("Repository Created Successfully:"),Z(Q.data.createRepository.url),U(Q.data.createRepository.url),G(!0)):!Q.isLoading&&Q.error&&(G(!1),U(""),ee("error"),K("Error:"),Z(Q.error.message),G(!0))},[Q]);let en=()=>{X({variables:{name:i,organization:a,aideId:r,description:s,homepage:p,has_issues:h,has_wiki:_,auto_init:E,gitignore_template:P,license_template:z,allow_auto_merge:A,delete_branch_on_merge:$}}),ee("info"),Z("Please Wait..."),K("Creating repository"),U(""),G(!0)};return(0,t.jsxs)(D,{children:[(0,t.jsx)(m.X,{color:"$interactive1",children:"Create Repository"}),(0,t.jsx)(w.b,{title:J,isVisible:q,variant:Y,actionHref:M,actionText:"Link",inlineText:W,onClose(){G(!1)}}),(0,t.jsxs)(x.FormProvider,{state:e,onSubmit:en,children:[(0,t.jsx)(k.l,{label:"Owner",model:"owner",placeholder:"Select an Owner",validators:{required:!0},isSearchable:!0,highlighted:!1,value:a,onChange:n,options:F}),(0,t.jsx)(v.o,{label:"Repository name",validators:{required:!0},value:i,model:"repository-name",onChange(e){o(e.target.value)}}),(0,t.jsx)(v.o,{label:"AIDE ID",model:"aide",validators:{required:!0},value:r,onChange(e){d(e.target.value)}}),(0,t.jsx)(v.o,{label:"Description",model:"description",value:s,onChange(e){u(e.target.value)}}),(0,t.jsx)(v.o,{label:"Homepage",model:"homepage",value:p,onChange(e){f(e.target.value)}}),(0,t.jsx)(g.X,{label:"Has Issues",model:"has-issues",isChecked:h,onChange:e=>b(e.target.checked)}),(0,t.jsx)(g.X,{label:"Has Wiki",model:"has-wiki",isChecked:_,onChange:e=>S(e.target.checked)}),(0,t.jsx)(g.X,{label:"Auto Init",model:"auto-init",isChecked:E,onChange:e=>j(e.target.checked)}),(0,t.jsx)(g.X,{label:"Allow Auto Merge",model:"auto-merge",isChecked:A,onChange:e=>T(e.target.checked)}),(0,t.jsx)(g.X,{label:"Delete Branch on Merge",model:"delete-branch-on-merge",isChecked:$,onChange:e=>R(e.target.checked)}),(0,t.jsx)(k.l,{label:"Add gitignore",model:"gitignore",placeholder:"gitignore template: none",isSearchable:!0,value:P,onChange:L,options:[{value:"",label:"None"},{value:"Node",label:"Node"},{value:"Python",label:"Python"}]}),(0,t.jsx)(k.l,{label:"Choose a license",model:"license",placeholder:"License: none",isSearchable:!0,value:z,onChange:B,options:[{value:"",label:"None"},{value:"apache",label:"Apache License 2.0"},{value:"gnu",label:"GNU General Public License v3.0"},{value:"mit",label:"MIT License"},{value:"bsd",label:'BSD 2-Clause "Simplified" License'},{value:"mozilla",label:"Mozilla Public License 2.0"},{value:"eclipse",label:"Eclipse Public License 2.0"},{value:"cc",label:"Creative Commons Zero v1.0 Universal"}]}),(0,t.jsx)(C.Layout.Space,{}),(0,t.jsx)(c.z,{type:"submit",children:"Create Repository"})]})]})},j=()=>(0,t.jsx)(s.x,{children:(0,t.jsxs)(d.F.Routes,{children:[(0,t.jsx)(d.F.Route,{path:"/home",element:(0,t.jsx)(E,{})}),(0,t.jsx)(d.F.Route,{path:"/",element:(0,t.jsx)(E,{})})]})});var A=n(6591);let T=(0,o.createTheme)("uhg"),$=(i=(0,A.createBrowserRouter)([{path:"*",element:l.createElement(j)}]),window.router=i,i),R=()=>(0,t.jsx)(r.n,{theme:T,router:$})}},function(e){e.O(0,[774,609,888,179],function(){return e(e.s=5356)}),_N_E=e.O()}]);