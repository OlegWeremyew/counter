(this.webpackJsonpcounter=this.webpackJsonpcounter||[]).push([[0],{10:function(t,e,n){},11:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n(4),r=n.n(c),u=(n(10),n(5)),s=(n(11),n(2)),o=n(0),l=function(t){var e=t.current,n=(Object(s.a)(t,["current"]),5===e?"table tableBlock":"table"),a=5===e?"".concat(e," - \u044d\u0442\u043e \u043c\u043e\u0439 \u043f\u0440\u0435\u0434\u0435\u043b"):e;return Object(o.jsx)("div",{className:n,children:a})},i=function(t){var e=t.ButtonCallBack,n=t.name,a=t.className;Object(s.a)(t,["ButtonCallBack","name","className"]);return Object(o.jsx)("div",{children:Object(o.jsx)("button",{className:a,onClick:e,children:n})})},b=function(t){var e=t.ButtonReset,n=t.changeCurrent,a=t.MaxValue,c=t.startValue,r=t.current,u=(Object(s.a)(t,["ButtonReset","changeCurrent","MaxValue","startValue","current"]),r===a?"buttonCurrentMax":"buttonCurrent"),l=r>=c+1?"buttonResetActive":"buttonReset";return Object(o.jsxs)("div",{className:"current",children:[Object(o.jsx)(i,{ButtonCallBack:n,className:u,name:"\u0423\u0432\u0435\u043b\u0438\u0447\u0438\u0442\u044c"}),Object(o.jsx)(i,{ButtonCallBack:e,className:l,name:"\u0421\u0431\u0440\u043e\u0441"})]})};var j=function(){var t=Object(a.useState)(0),e=Object(u.a)(t,2),n=e[0],c=e[1];return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)("div",{className:"conteiner",children:[Object(o.jsx)(l,{current:n}),Object(o.jsx)(b,{current:n,changeCurrent:function(){if(n<5)return c(n+1)},ButtonReset:function(){c(0)},MaxValue:5,startValue:0,setToLocalStorageHandler:function(){localStorage.setItem("currentValue",JSON.stringify(n))},getFromLocalStorageHandler:function(){var t=localStorage.getItem("currentValue");if(t){var e=JSON.parse(t);c(e)}}})]})})},m=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,u=e.getTTFB;n(t),a(t),c(t),r(t),u(t)}))};r.a.render(Object(o.jsx)(j,{}),document.getElementById("root")),m()}},[[13,1,2]]]);
//# sourceMappingURL=main.c183f6ce.chunk.js.map