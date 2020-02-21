(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{106:function(e,t){},109:function(e,t,a){},143:function(e,t,a){},144:function(e,t,a){},145:function(e,t,a){},146:function(e,t,a){},147:function(e,t,a){},148:function(e,t,a){"use strict";a.r(t);var n,c=a(0),r=a.n(c),s=a(54),l=a.n(s),o=a(15),m=a(7),i=a(5),u=(a(67),function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(""),l=Object(i.a)(s,2),m=l[0],u=l[1];return r.a.createElement("div",{className:"joinOuterContainer"},r.a.createElement("div",{className:"joinInnerContainer"},r.a.createElement("h1",{className:"heading"},"Join"),r.a.createElement("div",null,r.a.createElement("input",{placeholder:"Name",className:"joinInput",type:"text",onChange:function(e){return n(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("input",{placeholder:"Room",className:"joinInput mt-20",type:"text",onChange:function(e){return u(e.target.value)}})),r.a.createElement(o.b,{onClick:function(e){return a&&m?null:e.preventDefault()},to:"/chat?name=".concat(a,"&room=").concat(m)},r.a.createElement("button",{className:"button mt-20",type:"submit"},"Sign In"))))}),A=a(61),E=a(57),f=a.n(E),g=a(58),p=a.n(g),d=a(16),v=a.n(d),N=(a(109),function(e){var t=e.users;return r.a.createElement("div",{className:"textContainer"},t?r.a.createElement("div",null,r.a.createElement("h1",null,"People currently chatting:"),r.a.createElement("div",{className:"activeContainer"},r.a.createElement("h2",null,t.map((function(e){var t=e.name;return r.a.createElement("div",{key:t,className:"activeItem"},t,r.a.createElement("img",{alt:"Online Icon",src:v.a}))}))))):null)}),h=a(59),j=a.n(h),b=(a(143),a(30)),C=a.n(b),O=function(e){var t=e.message,a=t.text,n=t.user,c=!1,s=e.name.trim().toLowerCase();return n===s&&(c=!0),c?r.a.createElement("div",{className:"messageContainer justifyEnd"},r.a.createElement("p",{className:"sentText pr-10"},s),r.a.createElement("div",{className:"messageBox backgroundBlue"},r.a.createElement("p",{className:"messageText colorWhite"},C.a.emojify(a)))):r.a.createElement("div",{className:"messageContainer justifyStart"},r.a.createElement("div",{className:"messageBox backgroundLight"},r.a.createElement("p",{className:"messageText colorDark"},C.a.emojify(a))),r.a.createElement("p",{className:"sentText pl-10 "},n))},I=(a(144),function(e){var t=e.messages,a=e.name;return(r.a.createElement(j.a,{className:"messages"},t.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(O,{message:e,name:a}))}))))}),S=a(60),x=a.n(S),y=(a(145),function(e){var t=e.room;return r.a.createElement("div",{className:"infoBar"},r.a.createElement("div",{className:"leftInnerContainer"},r.a.createElement("img",{className:"onlineIcon",src:v.a,alt:"online icon"}),r.a.createElement("h3",null,t)),r.a.createElement("div",{className:"rightInnerContainer"},r.a.createElement("a",{href:"/"},r.a.createElement("img",{src:x.a,alt:"close icon"}))))}),k=(a(146),function(e){var t=e.setMessage,a=e.sendMessage,n=e.message;return r.a.createElement("form",{className:"form"},r.a.createElement("input",{className:"input",type:"text",placeholder:"Type a message...",value:n,onChange:function(e){var a=e.target.value;return t(a)},onKeyPress:function(e){return"Enter"===e.key?a(e):null}}),r.a.createElement("button",{className:"sendButton",onClick:function(e){return a(e)}},"Send"))}),R=(a(147),function(e){var t=e.location,a=Object(c.useState)(""),s=Object(i.a)(a,2),l=s[0],o=s[1],m=Object(c.useState)(""),u=Object(i.a)(m,2),E=u[0],g=u[1],d=Object(c.useState)(""),v=Object(i.a)(d,2),h=v[0],j=v[1],b=Object(c.useState)(""),C=Object(i.a)(b,2),O=C[0],S=C[1],x=Object(c.useState)([]),R=Object(i.a)(x,2),B=R[0],M=R[1],U="https://project-chat-application.herokuapp.com/";Object(c.useEffect)((function(){var e=f.a.parse(t.search),a=e.name,c=e.room;n=p()(U),g(c),o(a),n.emit("join",{name:a,room:c},(function(e){e&&alert(e)}))}),[U,t.search]),Object(c.useEffect)((function(){return n.on("message",(function(e){M([].concat(Object(A.a)(B),[e]))})),n.on("roomData",(function(e){var t=e.users;j(t)})),function(){n.emit("disconnect"),n.off()}}),[B]);return r.a.createElement("div",{className:"outerContainer"},r.a.createElement("div",{className:"container"},r.a.createElement(y,{room:E}),r.a.createElement(I,{messages:B,name:l}),r.a.createElement(k,{message:O,setMessage:S,sendMessage:function(e){e.preventDefault(),O&&n.emit("sendMessage",O,(function(){return S("")}))}})),r.a.createElement(N,{users:h}))}),B=function(){return r.a.createElement(o.a,null,r.a.createElement(m.a,{path:"/",exact:!0,component:u}),r.a.createElement(m.a,{path:"/chat",component:R}))};l.a.render(r.a.createElement(B,null),document.querySelector("#root"))},16:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAAXNSR0IArs4c6QAAAExJREFUCB1jbPh/le3lx5tNDIwMcQwg8J9hkTi/eh0LWJCBoRwoAAPlQDEGJrhKmDCIBupmQuYjs5lAZiILgNlAMRaQRSAz4UZCLQcAIwYaiAejKoYAAAAASUVORK5CYII="},60:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAHBJREFUGBmNkAEKwCAMA2VfGP2mrx3sOV2us6IymIXQGlNTW9zdhCqcZQm4dmelFUp+CZZa6sYpeUVIFyIixMqjCO51Wy5unQExuYSbSF5JASLqPsqRM21lOoWc89tagr3PSMgOiWlwnUeXWA/E78IfuAX270S3ydAAAAAASUVORK5CYII="},62:function(e,t,a){e.exports=a(148)},67:function(e,t,a){}},[[62,1,2]]]);
//# sourceMappingURL=main.4aac5ee7.chunk.js.map