(this.webpackJsonpblogilista_front=this.webpackJsonpblogilista_front||[]).push([[0],{40:function(t,e,n){},41:function(t,e,n){"use strict";n.r(e);var c=n(16),r=n.n(c),l=n(3),o=n(2),i=n(4),u=n.n(i),a="http://localhost:3001/api/blogs",s={getAll:function(){return u.a.get(a).then((function(t){return t.data}))},create:function(t){return u.a.post(a,t).then((function(t){return t.data}))},update:function(t,e){return u.a.put("".concat(a,"/").concat(t),e).then((function(t){return t.data}))},del:function(t){return u.a.delete("".concat(a,"/").concat(t)).then((function(t){return t.data}))}},d=n(0),b=function(t){var e=t.formSubmit,n=t.newAuthor,c=t.newTitle,r=t.newUrl,l=t.authorHandler,o=t.titleHandler,i=t.urlHandler;return Object(d.jsxs)("div",{className:"new-blog-form-div",children:[Object(d.jsx)("h2",{children:"Add a New blog"}),Object(d.jsx)("div",{className:"new-blog-form",children:Object(d.jsxs)("form",{onSubmit:e,children:[Object(d.jsx)("div",{children:Object(d.jsx)("input",{value:n,onChange:l,placeholder:"Author"})}),Object(d.jsx)("div",{children:Object(d.jsx)("input",{value:c,onChange:o,placeholder:"Title"})}),Object(d.jsx)("div",{children:Object(d.jsx)("input",{value:r,onChange:i,placeholder:"Url"})}),Object(d.jsxs)("div",{children:[n," ",c," ",r]}),Object(d.jsx)("button",{type:"submit",children:"add"})]})})]})},j=function(t){var e=t.blog,n=t.onPostLike;return Object(d.jsxs)("div",{className:"blog-item",children:[Object(d.jsxs)("p",{children:[e.title," by ",e.author]}),Object(d.jsxs)("p",{children:["Link to blog ",e.url]}),Object(d.jsxs)("p",{children:["Likes: ",e.likes]}),Object(d.jsx)("button",{onClick:function(){return n(e.id)},children:"Like this blog post"})]})},h=function(t){var e=t.blogs,n=t.onPostLike;return Object(d.jsxs)("div",{className:"blog-list",children:[Object(d.jsx)("h2",{children:"List of blogs"}),e.map((function(t){return Object(d.jsx)(j,{blog:t,onPostLike:n},t.id)}))]})},f=function(t){var e=t.errorObject;if(null===e)return null;var n={color:e.color,border:"2px solid ".concat(e.color)};return Object(d.jsx)("div",{className:"errorMessage",style:n,children:e.text})},O=function(){var t=Object(o.useState)([]),e=Object(l.a)(t,2),n=e[0],c=e[1],r=Object(o.useState)(""),i=Object(l.a)(r,2),u=i[0],a=i[1],j=Object(o.useState)(""),O=Object(l.a)(j,2),g=O[0],x=O[1],v=Object(o.useState)(""),p=Object(l.a)(v,2),m=p[0],k=p[1],w=Object(o.useState)(null),y=Object(l.a)(w,2),L=y[0],S=y[1];Object(o.useEffect)((function(){s.getAll().then((function(t){console.log(t),c(t)}))}),[]);var A=function(t,e){S({text:t,color:e}),setTimeout((function(){S(null)}),5e3)};return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Blogs"}),Object(d.jsx)(f,{errorObject:L}),Object(d.jsx)(b,{formSubmit:function(t){if(t.preventDefault(),n.filter((function(t){return t.url===m})).length>0)console.log("Current blog already added.");else{var e={author:u,title:g,url:m};s.create(e).then((function(t){A("".concat(e.title," by ").concat(e.author," added successfully"),"green"),c(n.concat(t)),a(""),x(""),k("")})).catch((function(t){console.log(t.message),A(t.message,"red")}))}},newAuthor:u,newTitle:g,newUrl:m,authorHandler:function(t){return a(t.target.value)},titleHandler:function(t){return x(t.target.value)},urlHandler:function(t){return k(t.target.value)}}),Object(d.jsx)(h,{blogs:n,onPostLike:function(t){var e=n.find((function(e){return e.id===t})),r={author:e.author,title:e.title,url:e.url,likes:e.likes+1};s.update(t,r).then((function(r){A("".concat(e.title," liked successfully"),"green");var l=n.map((function(e){return e.id===t?r:e}));c(l)})).catch((function(){A("".concat(e.title," like failed"),"red")}))}})]})};n(40);r.a.render(Object(d.jsx)(O,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.5f433a1c.chunk.js.map