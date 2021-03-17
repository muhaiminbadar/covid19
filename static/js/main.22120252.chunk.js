(this["webpackJsonptest-app"]=this["webpackJsonptest-app"]||[]).push([[0],{45:function(e,t,n){},58:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),c=n(24),r=n.n(c),i=(n(45),n(37)),o=n(29),l=n(6),j=n(18),d=n(19),h=n(22),b=n(20),u=n(67),O=n(66),p=n(1),x=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(u.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:[Object(p.jsx)(u.a.Brand,{href:"#home",children:this.props.siteName}),Object(p.jsx)(u.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(p.jsx)(u.a.Collapse,{id:"responsive-navbar-nav",children:Object(p.jsx)(O.a,{className:"mr-auto",children:this.props.items.map((function(e,t){return Object(p.jsx)(O.a.Link,{as:o.b,to:e.link,children:e.name},t)}))})})]})})}}]),n}(a.a.Component);n(58);var m=function(){return Object(p.jsx)("footer",{className:"footer",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("span",{className:"text-muted",children:"COVID-19 Tracker | Created March 2021"})})})},v=n(68);var f=function(){return Object(p.jsxs)(v.a,{variant:"danger",children:[Object(p.jsx)(v.a.Heading,{children:"Oh snap! You got an error!"}),Object(p.jsx)("p",{children:"Unfortunately this place this does not yet exist."})]})},g=n(30),k=n(62),y=n(63),w=n(64),C=n(69),T=function(e){return e.toLocaleString("en-US",{maximumFractionDigits:2})},N=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(j.a)(this,n),(e=t.call(this)).state={population:0,data:[],time:0},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(t){delete t.countryInfo,console.log(t),e.setState({population:t.population,data:{"Total Cases":t.cases,"Recovered Cases":t.recovered,"Active Cases":t.active,"Total Tests:":t.tests,"Test Per Million":t.testsPerOneMillion,"New Cases Today":t.todayCases,"Deaths Today":t.todayDeaths,"Total Deaths":t.deaths,"Critical Cases":t.critical},time:new Date(t.updated)})}))}},{key:"render",value:function(){return Object(p.jsxs)(k.a,{children:[Object(p.jsxs)(y.a,{style:{background:"purple",color:"white",padding:20,borderRadius:5},children:["Fetched at ",this.state.time.toLocaleString()," | Global Population: ",T(this.state.population)]}),Object(p.jsx)("div",{className:"mt-5",children:Object(p.jsx)(w.a,{children:Object.entries(this.state.data).map((function(e,t){var n=Object(g.a)(e,2),s=n[0],a=n[1];return Object(p.jsx)("div",{children:Object(p.jsxs)(C.a,{bg:"dark",text:"light",className:"mb-2",children:[Object(p.jsx)(C.a.Header,{children:s}),Object(p.jsxs)(C.a.Body,{children:[Object(p.jsx)(C.a.Title,{children:T(a)}),Object(p.jsx)(C.a.Text,{})]})]})},t)}))})})]})}}]),n}(s.Component),D=n(65),R=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(j.a)(this,n),(e=t.call(this)).state={data:[],time:0},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://disease.sh/v3/covid-19/countries/USA").then((function(e){return e.json()})).then((function(t){delete t.countryInfo,console.log(t),e.setState({data:t,time:new Date})}))}},{key:"render",value:function(){return Object(p.jsxs)(D.a,{children:[Object(p.jsx)(y.a,{style:{background:"purple",color:"white",padding:20,borderRadius:5},children:Object(p.jsxs)("p",{children:[" Fetched at ",this.state.time.toLocaleString()," "]})}),Object(p.jsx)("div",{className:"mt-5",children:Object(p.jsx)(w.a,{children:Object.entries(this.state.data).map((function(e,t){var n=Object(g.a)(e,2),s=n[0],a=n[1];return Object(p.jsxs)(C.a,{bg:"dark",text:"light",className:"mb-2",children:[Object(p.jsx)(C.a.Header,{children:s}),Object(p.jsxs)(C.a.Body,{children:[Object(p.jsxs)(C.a.Title,{children:[" ",a," "]}),Object(p.jsx)(C.a.Text,{})]})]},t)}))})})]})}}]),n}(s.Component);var I=function(e){return Object(p.jsx)(k.a,{children:Object(p.jsxs)(C.a,{bg:"dark",text:"light",className:"mb-2",children:[Object(p.jsx)(C.a.Header,{children:"Additional Information Regarding COVID-19"}),Object(p.jsx)(C.a.Body,{children:[{title:"World Health Organization",text:"Coronavirus disease (COVID-19) pandemic",link:"https://www.who.int/emergencies/diseases/novel-coronavirus-2019"},{title:"Benefits.gov",text:"Coronavirus resources",link:"https://www.benefits.gov/help/faq/Coronavirus-resources"},{title:"HRSA",text:"Health Resources & Services Administration",link:"https://www.hrsa.gov/opa/COVID-19-resources"},{title:"Centers for Disease Control & Prevention",text:"Coronavirus resources",link:"https://www.cdc.gov/coronavirus/2019-ncov/index.html"},{title:"National Institutes of Health",text:"COVID-19 Research",link:"https://covid19.nih.gov/"}].map((function(e,t){return Object(p.jsxs)("div",{children:[Object(p.jsx)(C.a.Title,{children:e.title}),Object(p.jsxs)(C.a.Text,{children:[e.text," - ",Object(p.jsx)("a",{href:e.link,children:e.link})]}),Object(p.jsx)("hr",{style:{background:"white"}})]},t)}))})]})})};var S=function(e){return Object(p.jsx)(k.a,{children:Object(p.jsxs)(C.a,{bg:"dark",text:"light",className:"mb-2",children:[Object(p.jsx)(C.a.Header,{children:"Technology Information"}),Object(p.jsxs)(C.a.Body,{children:[Object(p.jsx)("h1",{children:" Technology "}),Object(p.jsx)("hr",{style:{background:"white"}}),[{name:"React",desc:"A JavaScript library for building user interfaces.",link:"https://reactjs.org/"},{name:"React-Bootstrap",desc:"React-Bootstrap replaces the Bootstrap JavaScript. Each component has been built from scratch as a true React component, without unneeded dependencies like jQuery.",link:"https://react-bootstrap.github.io/"}].map((function(e,t){return Object(p.jsxs)("div",{children:[Object(p.jsxs)(C.a.Title,{children:[" ",e.name," "]}),Object(p.jsx)(C.a.Text,{children:e.desc})," ",Object(p.jsxs)(D.a,{className:"text-right",children:[" ",Object(p.jsx)("a",{href:e.link,children:e.link})]})]},t)})),Object(p.jsx)("h1",{children:" Sources "}),Object(p.jsx)("hr",{style:{background:"white"}}),[{name:"Disease.sh",desc:"An open API for disease-related statistics.",link:"https://disease.sh"}].map((function(e,t){return Object(p.jsxs)("div",{children:[Object(p.jsxs)(C.a.Title,{children:[" ",e.name," "]}),Object(p.jsx)(C.a.Text,{children:e.desc})," ",Object(p.jsxs)(D.a,{className:"text-right",children:[" ",Object(p.jsx)("a",{href:e.link,children:e.link})]})]},t)}))]})]})})};var B=function(){var e=[{name:"Home",link:"/",comp:N},{name:"Technology",link:"/tech",comp:S},{name:"Info",link:"/info",comp:I},{name:"Raw",link:"/raw",comp:R}];return Object(p.jsxs)("div",{id:"main",children:[Object(p.jsxs)(o.a,{children:[Object(p.jsx)(x,{siteName:"COVID-19 Tracker",items:e}),Object(p.jsx)(k.a,{fluid:!0,children:Object(p.jsx)("div",{className:"mt-5",children:Object(p.jsxs)(l.c,{children:[e.map((function(e,t){return Object(p.jsx)(l.a,Object(i.a)({exact:!0,path:e.link,component:e.comp},"exact",!0),t)})),Object(p.jsx)(l.a,{component:f})]})})})]}),Object(p.jsx)("div",{style:{margin:"100px"}}),Object(p.jsx)(m,{})]})};n(59);r.a.render(Object(p.jsxs)(a.a.StrictMode,{children:[Object(p.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css",integrity:"sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l",crossOrigin:"anonymous"}),Object(p.jsx)("script",{src:"https://unpkg.com/react/umd/react.production.min.js",crossOrigin:""}),Object(p.jsx)("script",{src:"https://unpkg.com/react-dom/umd/react-dom.production.min.js",crossOrigin:""}),Object(p.jsx)("script",{src:"https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js",crossOrigin:""}),Object(p.jsx)("script",{children:"var Alert = ReactBootstrap.Alert;"}),Object(p.jsx)(B,{})]}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.22120252.chunk.js.map