(this["webpackJsonpgithub-jobs"]=this["webpackJsonpgithub-jobs"]||[]).push([[0],{157:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(15),l=t.n(r),o=t(19),i=t(7),m=t(11),s=t(12),u=t.n(s),E="FETCH_START",d="FETCH_SUCCESS",p="FETCH_ERROR",b="HAS_NEXT_PAGE",g={jobs:[],isLoading:!0,error:void 0,hasNextPage:!1},h=function(e,a){switch(a.type){case E:return g;case d:return Object(i.a)(Object(i.a)({},e),{},{jobs:a.payload,isLoading:!1,error:void 0});case p:return Object(i.a)(Object(i.a)({},e),{},{error:a.payload,isLoading:!1,jobs:[]});case b:return Object(i.a)(Object(i.a)({},e),{},{hasNextPage:a.payload});default:return e}},f=function(e,a){var t=Object(n.useReducer)(h,g),c=Object(m.a)(t,2),r=c[0],l=c[1];return Object(n.useEffect)((function(){var t=u.a.CancelToken.source(),n=u.a.CancelToken.source();return l({type:E}),u.a.get("/positions.json",{cancelToken:t.token,params:Object(i.a)({markdown:!0,page:a-1},e)}).then((function(e){l({type:d,payload:e.data})})).catch((function(e){u.a.isCancel(e)||l({type:p,payload:e.response.data})})),u.a.get("/positions.json",{cancelToken:n.token,params:Object(i.a)({markdown:!0,page:a},e)}).then((function(e){l({type:b,payload:0!==e.data.length})})).catch((function(e){u.a.isCancel(e)||l({type:p,payload:e.response.data})})),function(){t.cancel(),n.cancel()}}),[e,a]),r},y=t(161),j=t(164),v=t(159),k=t(160),C=t(163),N=t(30),O=t.n(N),x=function(e){var a=e.job,t=Object(n.useState)(!1),r=Object(m.a)(t,2),l=r[0],o=r[1];return c.a.createElement("div",null,c.a.createElement(j.a,{className:"mb-3"},c.a.createElement(j.a.Body,null,c.a.createElement("div",{className:"d-flex justify-content-between"},c.a.createElement("div",null,c.a.createElement(j.a.Title,null,a.title,"-"," ",c.a.createElement("span",{className:"text-muted font-weight-light"},a.company)),c.a.createElement(j.a.Subtitle,{className:"text-muted mb-2"},new Date(a.created_at).toLocaleDateString()),c.a.createElement(v.a,{variant:"primary",className:"mr-2"},a.type),c.a.createElement(v.a,{variant:"dark"},a.location),c.a.createElement("div",{style:{wordBreak:"break-all"}},c.a.createElement(O.a,{source:a.how_to_apply}))),c.a.createElement("img",{className:"d-none d-md-block",height:"50",alt:a.company,src:a.company_logo})),c.a.createElement(j.a.Text,null,c.a.createElement(k.a,{variant:"info",onClick:function(){return o((function(e){return!e}))}},l?"Hide Details":"View Details")),c.a.createElement(C.a,{in:l},c.a.createElement("div",{className:"mt-4"},c.a.createElement(O.a,{source:a.description}))))))},w=t(165),T=function(e){var a=e.page,t=e.setPage,r=e.hasNextPage,l=function(e){t((function(a){return a+e}))};return c.a.createElement(w.a,null,1!==a&&c.a.createElement(w.a.Prev,{onClick:function(){return l(-1)}}),1!==a&&c.a.createElement(w.a.Item,{onClick:function(){return t(1)}},"1"),a>2&&c.a.createElement(w.a.Ellipsis,null),a>2&&c.a.createElement(w.a.Item,{onClick:function(){return l(-1)}},a-1),c.a.createElement(w.a.Item,{active:!0},a),r&&c.a.createElement(n.Fragment,null,c.a.createElement(w.a.Item,{onClick:function(){return l(1)}},a+1),c.a.createElement(w.a.Next,{onClick:function(){return l(1)}})))},P=t(162),S=t(51),_=function(e){var a=e.params,t=e.onParamChange;return c.a.createElement(P.a,{className:"mb-4"},c.a.createElement(P.a.Row,{className:"align-items-end"},c.a.createElement(S.a,{xs:12,sm:5},c.a.createElement(P.a.Label,null,"Description"),c.a.createElement(P.a.Control,{name:"description",type:"text",value:a.description,onChange:t})),c.a.createElement(S.a,{xs:12,sm:5,className:"mt-sm-0 mt-2"},c.a.createElement(P.a.Label,null,"Location"),c.a.createElement(P.a.Control,{name:"location",type:"text",value:a.location,onChange:t})),c.a.createElement(S.a,{xs:"auto",className:"mb-2 mt-sm-0 mt-2"},c.a.createElement(P.a.Check,{onChange:t,value:a.full_time,name:"full_time",id:"full-time",label:"Only Full Time",type:"checkbox",className:"mb-2"}))))},L=function(){var e=Object(n.useState)({}),a=Object(m.a)(e,2),t=a[0],r=a[1],l=Object(n.useState)(1),s=Object(m.a)(l,2),u=s[0],E=s[1],d=f(t,u),p=d.jobs,b=d.isLoading,g=d.error,h=d.hasNextPage;return c.a.createElement("div",null,c.a.createElement(y.a,{className:"my-4"},c.a.createElement("h1",{className:"mb-4"},"GitHub Jobs"),c.a.createElement(_,{params:t,onParamChange:function(e){var a=e.target,t=a.name,n=a.value;"checkbox"===e.target.type&&(n=e.target.checked),E(1),r((function(e){return Object(i.a)(Object(i.a)({},e),{},Object(o.a)({},t,n))}))}}),c.a.createElement(T,{hasNextPage:h,page:u,setPage:E}),b&&c.a.createElement("h1",null,"Loading..."),g&&c.a.createElement("h1",null,"Error...Try Refreshing"),p.map((function(e){return c.a.createElement(x,{key:e.id,job:e})})),c.a.createElement(T,{hasNextPage:h,page:u,setPage:E})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},52:function(e,a,t){e.exports=t(157)}},[[52,1,2]]]);
//# sourceMappingURL=main.477856ee.chunk.js.map