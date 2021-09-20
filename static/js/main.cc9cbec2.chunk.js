(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],[,,,,,,,function(e,t,n){},function(e,t,n){var a={"./0.png":19,"./1.png":20,"./2.png":21,"./3.png":22,"./4.png":23};function r(e){var t=c(e);return n(t)}function c(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=c,e.exports=r,r.id=8},,,,,,,function(e,t,n){},,,,function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/0.ea7f4849.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/1.880acf4b.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/2.aaeab9b5.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/3.8f347453.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/4.30b0697b.png"},function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(9),s=n.n(c),i=(n(15),n(3)),o=(n(7),n(5)),l=n(4);var d=n(0);var u=function(){var e=Object(a.useState)({name:"",email:"",message:""}),t=Object(i.a)(e,2),n=t[0],r=t[1],c=n.name,s=n.email,u=n.message,j=Object(a.useState)(""),h=Object(i.a)(j,2),b=h[0],p=h[1];function m(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);console.log(t),p(t?"":"Your email is invalid")}else e.target.value.length?p(""):p("".concat(e.target.name," is required."));b||r(Object(l.a)(Object(l.a)({},n),{},Object(o.a)({},e.target.name,e.target.value)))}return Object(d.jsxs)("section",{children:[Object(d.jsx)("h1",{"data-testid":"h1tag",children:"Contact me"}),Object(d.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),console.log("submit",n)},children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(d.jsx)("input",{type:"text",onBlur:m,name:"name",defaultValue:c})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"email",children:"Email Address:"}),Object(d.jsx)("input",{type:"text",onBlur:m,name:"email",defaultValue:s})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(d.jsx)("textarea",{name:"message",onBlur:m,rows:"5",defaultValue:u}),b&&Object(d.jsx)("div",{children:Object(d.jsx)("p",{className:"error-text",children:b})})]}),Object(d.jsx)("button",{type:"submit","data-testid":"button",children:"Submit"})]})]})},j=n(25);var h=function(e){var t=e.nav,n=void 0===t?[]:t,r=e.currentNav,c=e.setCurrentNav;return Object(a.useEffect)((function(){document.title=r}),[r]),Object(d.jsxs)("div",{className:"flex-row px-1",children:[Object(d.jsxs)("h2",{children:[Object(d.jsx)(j.a,{color:"white",size:40}),"Jiaming Zhou (Clark)"]}),Object(d.jsx)("nav",{children:Object(d.jsx)("ul",{className:"flex-row",children:n.map((function(e){return Object(d.jsx)("li",{className:"mx-2 ".concat(r===e&&"navActive"),children:Object(d.jsx)("span",{onClick:function(){c(e)},children:e})},e)}))})})]})};var b=function(e){var t=e.nav,n=void 0===t?[]:t,a=e.currentNav,r=e.setCurrentNav;return Object(d.jsx)("header",{className:"flex-row px-1",children:Object(d.jsx)(h,{nav:n,currentNav:a,setCurrentNav:r})})};var p=function(){return Object(d.jsxs)("article",{className:"my-5",children:[Object(d.jsx)("h1",{children:"Who am I?"}),Object(d.jsx)("p",{children:"Full stack web developer with quality engineer experience over products and production. Certificate from University of Texas at Austin coding boot camp, and possess strong skills  in full stack web technologies, team-building, and project management that help all companies complete their tasks/goals in a timely manner. Skills in HTML, CSS, JavaScript, Node.js, SQL, Sequelize, REACT, IndexedDB, MongoDB, handlebars, etc. My technical skills, combined with problem solving abilities, optimization,  and determination, make me a strong addition to any engineering team."})]})};var m=function(e){var t=e.onClose,a=e.project,r=a.name,c=a.description,s=a.repoLink,i=a.deployedLink,o=a.index;return Object(d.jsx)("div",{className:"modalBackdrop",children:Object(d.jsxs)("div",{className:"modalContainer",children:[Object(d.jsx)("h2",{className:"modalTitle",children:r}),Object(d.jsx)("img",{src:n(8)("./".concat(o,".png")).default,alt:"project"}),Object(d.jsx)("p",{children:c}),Object(d.jsxs)("ul",{className:"siteLink",children:[Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:s,children:"GitHub Repo"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:i,children:"Deployed Application"})})]}),Object(d.jsx)("button",{onClick:t,type:"button",children:"Close this modal"})]})})};var f=function(){var e=Object(a.useState)([{name:"Shake On It",description:"Shake On It. Bartering for the 21st century! Want a toaster? Paint my mailbox and it's yours.",repoLink:"https://github.com/freezenleo/shake-on-it-2",deployedLink:"https://fast-earth-46141.herokuapp.com/"},{name:"Developer Blog",description:"Developer blog is one of the expert discussion blog for coding. Developers can discuss on the problem they have encouter during coding, or come up with some coding idea for people to discuss, or answering and questioning with other developers.",repoLink:"https://github.com/freezenleo/developer-blog",deployedLink:"https://powerful-anchorage-94267.herokuapp.com/"},{name:"Photo Port",description:"Here is a react app for a photographer to show off their works to clients to bring more clients to them.",repoLink:"https://github.com/freezenleo/photo-port",deployedLink:"https://freezenleo.github.io/photo-port/"},{name:"Budget Tracker",description:"Budget Tracker is a webpage to help people keep track of their daily money transactions. People always forget how much they spend each day or each month without worrying if they are in debt.",repoLink:"https://github.com/freezenleo/budget-tracker",deployedLink:"https://lit-eyrie-15547.herokuapp.com/"},{name:"Note Taker",description:"This is a web page that can help you to keep track of tasks you need to complete. Note Taker web allows the user to create new notes, and then save them. The user can delete it once tasks completed.",repoLink:"https://github.com/freezenleo/note-taker-saver",deployedLink:"https://stark-everglades-13657.herokuapp.com/"}]),t=Object(i.a)(e,1)[0],r=Object(a.useState)(),c=Object(i.a)(r,2),s=c[0],o=c[1],u=Object(a.useState)(!1),j=Object(i.a)(u,2),h=j[0],b=j[1],p=function(e,t){o(Object(l.a)(Object(l.a)({},e),{},{index:t})),b(!h)};return Object(d.jsxs)("div",{className:"flex-row px-1",children:[Object(d.jsx)("h1",{children:"Projects"}),h&&Object(d.jsx)(m,{project:s,onClose:p}),Object(d.jsx)("div",{className:"flex-row px-1",children:t.map((function(e,t){return Object(d.jsx)("img",{src:n(8)("./".concat(t,".png")).default,alt:e.name,className:"img-thumbnail mx-1",onClick:function(){return p(e,t)}},e.name)}))})]})};var x=function(){return Object(d.jsxs)("section",{children:[Object(d.jsx)("h1",{children:Object(d.jsx)("a",{href:"../../assets/file/clark-resume-dl.docx",download:"clark-resume",children:"Link To My Resume"})}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:"Full Stack Skills"}),Object(d.jsx)("p",{children:" Visual Studio Code, GIT, GIT Workflow, Heroku, CLI, JQuery, MySQL, Flexbox, Node.js, Slack, Zoom, HTML, CSS, JavaScript, Node.js, Bootstrap, OOP, TDD, JQuery, DOM, Express.js, SQL, React, ES6, NPM, REST API, IndexedDB, MongoDB, Handlebars"})]})]})},O=n(26),g=n(27);var v=function(){return Object(d.jsxs)("footer",{className:"my-5",children:[Object(d.jsx)("a",{"data-testid":"linkedin",className:"mx-2",href:"https://bit.ly/3zlV3XT",children:Object(d.jsx)(O.a,{color:"white",size:96})}),Object(d.jsx)("a",{"data-testid":"github",className:"mx-2",href:"https://github.com/freezenleo",children:Object(d.jsx)(g.a,{color:"white",size:96})})]})};var k=function(){var e=Object(a.useState)(["About Me","Projects","Contact","Resume"]),t=Object(i.a)(e,1)[0],n=Object(a.useState)(t[0]),r=Object(i.a)(n,2),c=r[0],s=r[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)(b,{nav:t,currentNav:c,setCurrentNav:s}),Object(d.jsx)("main",{children:function(){switch(c){case"About":return Object(d.jsx)(p,{});case"Projects":return Object(d.jsx)(f,{});case"Contact":return Object(d.jsx)(u,{});case"Resume":return Object(d.jsx)(x,{});default:return Object(d.jsx)(p,{})}}()}),Object(d.jsx)(v,{})]})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(k,{})}),document.getElementById("root")),y()}],[[24,1,2]]]);
//# sourceMappingURL=main.cc9cbec2.chunk.js.map