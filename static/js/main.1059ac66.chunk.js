(this.webpackJsonpreactnew=this.webpackJsonpreactnew||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n(1),d=n.n(o),i=n(4),a=n.n(i),r=(n(14),n(5)),s=n(6),l=n(2),h=n(8),u=n(7);var p=function(e){return console.log(e),Object(c.jsxs)("div",{className:"todo-item",children:[Object(c.jsx)("input",{Type:"checkbox",checked:e.product.completed,onChange:function(){return e.handleChange(e.product.id)}}),Object(c.jsx)("span",{children:e.product.text})]})},m=[{id:1,text:"Pay electricity bill",completed:!0},{id:2,text:"Buy groceries",completed:!1},{id:3,text:"Dentist appointment",completed:!1},{id:4,text:"Take Jimmy to the vet",completed:!0},{id:5,text:"Car Wash",completed:!1},{id:6,text:"Uniforms for next year",completed:!1},{id:7,text:"Watch a movie",completed:!0}],j=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).state={todos:m},e.handleChange=e.handleChange.bind(Object(l.a)(e)),e}return Object(s.a)(n,[{key:"handleChange",value:function(e){this.setState((function(t){return{todos:t.todos.map((function(t){return t.id==e&&(t.completed=!t.completed),t}))}}))}},{key:"render",value:function(){var e=this,t=this.state.todos.map((function(t){return Object(c.jsx)(p,{product:t,handleChange:e.handleChange},t.id)}));return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"todo-list",children:Object(c.jsx)("h1",{children:"To-do list"})}),t]})}}]),n}(d.a.Component);a.a.render(Object(c.jsx)(j,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.1059ac66.chunk.js.map