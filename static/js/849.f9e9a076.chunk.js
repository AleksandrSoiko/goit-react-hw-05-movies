"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[849],{251:function(n,t,e){e.d(t,{a:function(){return m}});var r,a,o,c,i,u=e(168),s=e(1087),p=e(6444),l=p.ZP.li(r||(r=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  background-color: lightgray;\n  justify-content: center;\n  align-items: center;\n  padding-bottom: 10px;\n  box-shadow: 1px 5px 8px 4px rgba(0, 19, 166, 0.32);\n"]))),d=p.ZP.img(a||(a=(0,u.Z)(["\n  width: 300px;\n  height: 450px;\n"]))),f=p.ZP.span(o||(o=(0,u.Z)(["\n  padding: 5px;\n  font-size: 14px;\n"]))),g=(0,p.ZP)(s.rU)(c||(c=(0,u.Z)(["\n  width: 100px;\n  height: 40px;\n  background-color: orange;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n  text-decoration: none;\n  border-radius: 5px;\n\n  &:visited,\n  &:active {\n    color: black;\n  }\n  &:hover,\n  &:focus {\n    color: wheat;\n  }\n"]))),h=(p.ZP.input(i||(i=(0,u.Z)([""]))),e(8494)),x=e(3891),v=e(184),m=function(n){var t=n.imageLink,e=n.title,r=n.id,a=n.to,o=n.state;return(0,v.jsxs)(l,{children:[(0,v.jsx)(d,{src:(0,x.Z)(t,300)}),(0,v.jsx)(f,{children:e}),(0,v.jsxs)(g,{to:"".concat(a).concat(r),state:o,children:["Details"," ",(0,v.jsx)(h.LN0,{style:{width:"25px",height:"25px"}})]})]})}},1470:function(n,t,e){e.d(t,{a:function(){return i},z:function(){return u}});var r,a,o=e(168),c=e(6444),i=c.ZP.ul(r||(r=(0,o.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0;\n  gap: 50px;\n  margin-left: auto;\n  margin-right: auto;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 20px;\n"]))),u=c.ZP.button(a||(a=(0,o.Z)(["\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 10px;\n  width: 120px;\n  height: 40px;\n  border: none;\n  border-radius: 5px;\n  box-shadow: 1px -2px 4px 3px rgba(34, 60, 80, 0.47);\n  color: wheat;\n  background-color: black;\n  &:hover,\n  &:focus {\n    background-color: darkgoldenrod;\n  }\n"])))},9245:function(n,t,e){e.d(t,{a:function(){return u}});var r,a=e(5243),o=e(168),c=e(6444).ZP.div(r||(r=(0,o.Z)(["\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100vw;\n  height: 100vh;\n"]))),i=e(184),u=function(){return(0,i.jsx)(c,{children:(0,i.jsx)(a.CJ,{color:"#102fdfdd",height:200,width:200})})}},2691:function(n,t,e){e.d(t,{Hx:function(){return l},Xd:function(){return u},w8:function(){return s},wr:function(){return d},yW:function(){return p}});var r=e(5861),a=e(7757),o=e.n(a),c=e(1243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="6a9443e9560321a4e46f64bd6f702be3",u=function(){var n=(0,r.Z)(o().mark((function n(t,e,r){var a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("search/movie?api_key=".concat(i,"&language=en-US&query=").concat(t,"&page=").concat(e,"&include_adult=false"),r);case 3:return a=n.sent,n.abrupt("return",a.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t,e,r){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(o().mark((function n(t,e){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("movie/".concat(t,"?api_key=").concat(i,"&language=en-US"),e);case 3:return r=n.sent,n.abrupt("return",r.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t,e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(t,e){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("\nmovie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"),e);case 3:return r=n.sent,n.abrupt("return",r.data.cast);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t,e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(o().mark((function n(t,e){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"),e);case 3:return r=n.sent,n.abrupt("return",r.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t,e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(o().mark((function n(t,e){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("trending/movie/day?api_key=".concat(i,"&page=").concat(t),e);case 3:return r=n.sent,n.abrupt("return",r.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t,e){return n.apply(this,arguments)}}()},3891:function(n,t,e){function r(n,t){return null===n?"https://media.istockphoto.com/id/1357365823/vector/default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo.jpg?s=612x612&w=0&k=20&c=PM_optEhHBTZkuJQLlCjLz-v3zzxp-1mpNQZsdjrbns=":"https://image.tmdb.org/t/p/w".concat(t,"/").concat(n)}e.d(t,{Z:function(){return r}})},7849:function(n,t,e){e.r(t),e.d(t,{default:function(){return v}});var r=e(3433),a=e(5861),o=e(9439),c=e(7757),i=e.n(c),u=e(251),s=e(5984),p=e(1470),l=e(2791),d=e(9245),f=e(7689),g=e(2691),h=e(184),x=function(){var n=(0,l.useState)([]),t=(0,o.Z)(n,2),e=t[0],c=t[1],x=(0,l.useState)(1),v=(0,o.Z)(x,2),m=v[0],w=v[1],Z=(0,l.useState)("idle"),b=(0,o.Z)(Z,2),k=b[0],y=b[1],j=(0,f.TH)();return(0,l.useEffect)((function(){var n=new AbortController,t=function(){var t=(0,a.Z)(i().mark((function t(){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,g.wr)(m,{signal:n.signal});case 2:(e=t.sent)&&c((function(n){return[].concat((0,r.Z)(n),(0,r.Z)(e))})),y("loaded");case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return t(),function(){n.abort()}}),[m]),(0,h.jsxs)("div",{children:["idle"===k&&(0,h.jsx)(d.a,{}),(0,h.jsx)(p.a,{children:e.map((function(n){return(0,h.jsx)(u.a,{imageLink:n.poster_path,title:n.original_title||n.original_name||n.title,id:n.id,to:"movies/",state:{from:j}},(0,s.x0)())}))}),0!==e.length&&(0,h.jsx)(p.z,{onClick:function(){w((function(n){return n+1}))},children:"Load more"})]})},v=function(){return(0,h.jsx)(x,{})}}}]);
//# sourceMappingURL=849.f9e9a076.chunk.js.map