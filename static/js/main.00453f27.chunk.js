(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{38:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(17),s=n.n(r),l=(n(38),n(6)),i=n(5),o=n(12),u=n(2),j=n(0);function b(e,t,n,c,a){return console.log("estos son los juegos creados para hacer el concat: ",a),a&&(e=e.concat(a)),"Alfabeticamente"==n&&(e=e.sort((function(e,t){var n=e.name,c=t.name;return n<c?-1:n>c?1:0}))),"Rating"==n&&(e=e.sort((function(e,t){return t.rating-e.rating}))),null!==c&&(e=e.reverse()),e.map((function(e){return t.length>0?(e.genders&&(e.gender=e.genders.map((function(e){return e.name}))),e.gender.find((function(e){return e==t}))&&Object(j.jsx)(l.b,{path:!0,to:"/videogame/".concat(e.id),className:"game",children:Object(j.jsxs)("div",{className:"cont_info_item",children:[Object(j.jsx)("h3",{className:"titleGame",children:e.name}),Object(j.jsx)("img",{src:e.img,className:"img"}),Object(j.jsxs)("ul",{className:"list",children:[Object(j.jsx)("h4",{children:"GENERO:"}),e.genders?e.genders.map((function(e,t){return Object(j.jsx)("li",{children:e.name},t)})):e.gender.map((function(e,t){return Object(j.jsx)("li",{children:e},t)}))]})]})})):Object(j.jsx)(l.b,{path:!0,to:"/videogame/".concat(e.id),className:"game",children:Object(j.jsxs)("div",{className:"cont_info_item",children:[Object(j.jsx)("h3",{className:"titleGame",children:e.name}),Object(j.jsx)("img",{src:e.img,className:"img"}),Object(j.jsxs)("ul",{className:"list",children:[Object(j.jsx)("h4",{children:"GENERO:"}),e.genders?e.genders.map((function(e,t){return Object(j.jsx)("li",{children:e.name},t)})):e.gender.map((function(e,t){return Object(j.jsx)("li",{children:e},t)}))]})]})})}))}function d(){var e=Object(u.c)((function(e){return e.gameFounded})),t=Object(u.c)((function(e){return e.generofiltrado}));return Object(j.jsx)("div",{className:"container",children:e?b(e,t):null})}var O="http://localhost:3001",m=O+"/videogames",h=O+"/videogame/",f="GAME_FOUNDED";var p=n(13),x=n.n(p),g=n(14),v="GET_GENRES";function N(){return function(e){return fetch("http://localhost:3001/genres").then((function(e){return e.json()})).then((function(t){e({type:v,payload:t})}))}}n(50);function _(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(u.b)(),s=Object(u.c)((function(e){return e.genres})),i=(Object(u.c)((function(e){return e.generofiltrado})),Object(c.useRef)(null)),b=Object(c.useRef)(null),d=Object(u.c)((function(e){return e.orden})),O=Object(u.c)((function(e){return e.ascenOdescen}));function m(){return(m=Object(g.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0="null"!==i.current.value,!e.t0){e.next=4;break}return e.next=4,r({type:"GENERO_FILTRADO",payload:i.current.value});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(){return(h=Object(g.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0="null"!==b.current.value,!e.t0){e.next=4;break}return e.next=4,r({type:"GET_ORDEN",payload:b.current.value});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){r(N())}),[]),Object(c.useEffect)((function(){console.log(d)}),[d]),Object(j.jsxs)("div",{className:"contenedor_btn",children:[Object(j.jsxs)("div",{className:"contenedor_filtrado",children:[Object(j.jsx)("p",{children:"Filtrar por:"}),Object(j.jsxs)("select",{className:"filtrado",onClick:function(e){var t=e.target.value;a(t)},children:[Object(j.jsx)("option",{value:"null",children:"Seleccione una opcion:"}),Object(j.jsx)("option",{value:"genero",children:"Genero"}),Object(j.jsx)("option",{value:"juegosCreados",children:"Juegos Creados"})]}),"juegosCreados"==n&&Object(j.jsx)(l.b,{path:!0,to:"/gameCreated",children:Object(j.jsx)("button",{className:"btnGamess",children:"Filtrar"})})||"genero"==n&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("select",{className:"filtrado",ref:i,children:[Object(j.jsx)("option",{value:"null",children:"Seleccion Generos:"}),s.map((function(e){return Object(j.jsx)("option",{value:e.name,children:e.name})}))]}),Object(j.jsx)("button",{className:"btnGamess",onClick:function(){return m.apply(this,arguments)},children:"Filtrar"})]})]}),Object(j.jsx)("p",{children:"Ordenar por:"}),Object(j.jsxs)("select",{className:"filtrado",ref:b,children:[Object(j.jsx)("option",{value:"null",children:"Seleccione una opcion"}),Object(j.jsx)("option",{value:"Alfabeticamente",children:"Alfabeticamente"}),Object(j.jsx)("option",{value:"Rating",children:"Rating"})]}),Object(j.jsx)("button",{className:"btnGamess",onClick:function(){return h.apply(this,arguments)},children:"Ordenar"}),Object(j.jsxs)("button",{className:"btnAscDesc",onClick:function(){return r(null==O||"Descendente"==O||null==O||"Descendente"==O?{type:"SET_ASCEN_DESCEN",payload:"Ascendente"}:{type:"SET_ASCEN_DESCEN",payload:null})},children:["Ascendente",Object(j.jsx)("br",{}),"Descendente"]})]})}n(51);function E(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(u.b)(),s=Object(u.c)((function(e){return e.gameFounded}));function l(e){var t;e.preventDefault(),r((t=n,function(e){return fetch("http://localhost:3001/videogames?name="+t).then((function(e){return e.json()})).then((function(t){e({type:f,payload:t})}))})),console.log(s)}return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"contenedor_navbar",children:[Object(j.jsx)("h2",{className:"title_navbar",children:"VIDEOGAME APP"}),Object(j.jsxs)("form",{className:"form_navbar",onSubmit:function(e){return l(e)},children:[Object(j.jsx)("input",{className:"input",placeholder:"Buscar videojuego....",type:"text",onChange:function(e){a(e.target.value)}}),Object(j.jsx)("button",{className:"btn_enviar",type:"submit",children:"Buscar"})]}),Object(j.jsx)(_,{})]})})}var y="GET_15GAMES",C="GET_15GAMES_NEXT";var A="GET_GAMES_CREATED";n(52);function G(){var e=Object(u.c)((function(e){return e.gamesNext})),t=Object(u.c)((function(e){return e.games})),n=Object(u.c)((function(e){return e.generofiltrado})),a=Object(u.c)((function(e){return e.orden})),r=Object(u.c)((function(e){return e.ascenOdescen})),s=Object(u.c)((function(e){return e.gamesCreated})),l=Object(u.c)((function(e){return e.indicePagina})),i=Object(u.b)();return Object(c.useEffect)((function(){i(function(){var e=Object(g.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3001/gamesCreated").then((function(e){return e.json()})).then((function(e){t({type:A,payload:e})}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),i((function(e){return fetch(m).then((function(e){return e.json()})).then((function(t){e({type:y,payload:t})}))}))}),[]),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"container",children:1==l?b(t,n,a,r,s):b(e,n,a,r)})})}n(53);var D=n(18),R=n.n(D);function S(e){return function(t){R()({url:"http://localhost:3001/videogames",method:"POST",data:e}).then((function(e){return t({type:C,payload:e})}))}}n(72);function I(){var e=Object(c.useState)(10),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(u.b)(),s=Object(u.c)((function(e){return e.gamesNext})),l=Object(u.c)((function(e){return e.indicePagina})),i=Object(c.useState)(l),b=Object(o.a)(i,2),d=b[0],O=b[1];return Object(c.useEffect)((function(){O(l)}),[l]),Object(c.useEffect)((function(){console.log("este es el games next \xe0putrokadsa",s)}),[s]),Object(j.jsxs)("div",{className:"cont_enumeracion",children:[Object(j.jsx)("h1",{className:"title_listg",children:"Lista de juegos"}),Object(j.jsxs)("div",{className:"contenedor_numero",children:[Object(j.jsx)("button",{className:"btn_sig_atras",onClick:function(){10!=n&&a(n-1),1!=l&&(r(S({numero:d-1})),r({type:"INDICE_PAGINA",payload:d-1}),O(d-1))},children:"ANTERIOR"}),Object(j.jsx)("div",{className:"contenedor_btn_numero",children:function(e){for(var t=[],n=function(e){t.push(Object(j.jsx)("button",{onClick:function(){return r({type:"INDICE_PAGINA",payload:t=e}),r(S({numero:t}));var t},className:e==l?"btn_activado":"btn_numero",children:e}))},c=e-9;c<=e;c++)n(c);return t.map((function(e){return e}))}(n)}),Object(j.jsx)("button",{className:"btn_sig_atras",onClick:function(){a(n+1),r(S({numero:d+1})),r({type:"INDICE_PAGINA",payload:d+1}),O(d+1)},children:"SIGUIENTE"})]})]})}function k(){var e=Object(u.b)(),t=Object(c.useState)(""),n=Object(o.a)(t,2),a=n[0],r=n[1],s=Object(u.c)((function(e){return e.gameFounded}));return Object(c.useEffect)((function(){r(s)}),[s]),Object(j.jsxs)("div",{className:"contenedor_rp",children:[Object(j.jsx)(E,{}),Object(j.jsx)("div",{className:"contenedor_post",children:Object(j.jsx)(l.b,{path:!0,to:"/createGame",children:Object(j.jsx)("button",{className:"btn_post",children:"X"})})}),!a.length&&Object(j.jsx)(I,{}),Object(j.jsx)("div",{className:"btn_cont",children:a.length?Object(j.jsx)("button",{className:"btn_atras",onClick:function(){r(!1),e({type:f,payload:0})},children:"Atras"}):void 0}),a.length?Object(j.jsx)(d,{}):Object(j.jsx)(G,{})]})}var F="GAME_DETAILS";function T(e){return function(t){return fetch(h+e).then((function(e){return e.json()})).then((function(e){t({type:F,payload:e})}))}}var P=new RegExp("(<(br|p|div|/div|br /|/p|strong|/strong|br/)>)","gi");function w(e){var t=e.img,n=e.name,c=e.gender,a=e.rating,r=e.released,s=e.description,l=e.platforms;return Object(j.jsxs)("div",{className:"containerDetails",children:[Object(j.jsxs)("div",{className:"faa",children:[Object(j.jsx)("img",{src:t,alt:"img game",className:"imgDetails"}),Object(j.jsx)("h1",{className:"titledetails",children:n})]}),Object(j.jsxs)("div",{className:"description",children:[Object(j.jsxs)("div",{className:"description2",children:[Object(j.jsxs)("div",{className:"genero",children:[Object(j.jsx)("h3",{className:"tituloss",children:"Genero:"}),c.length>0&&c.map((function(e){return Object(j.jsx)("p",{children:e})}))]}),Object(j.jsxs)("p",{className:"valoracion",children:[Object(j.jsx)("h3",{className:"tituloss",children:"Valoraci\xf3n:"}),Object(j.jsx)("p",{children:a})]}),Object(j.jsxs)("p",{className:"lanzamiento",children:[Object(j.jsx)("h3",{className:"tituloss",children:"Lanzamiento:"}),Object(j.jsx)("p",{children:r})]}),Object(j.jsx)("div",{className:"plataformas",children:Object(j.jsxs)("ul",{className:"plat",children:[Object(j.jsx)("h3",{className:"tituloss",children:"Plataformas:"}),l.map((function(e,t){return Object(j.jsx)("span",{children:e},"plat"+t)}))]})})]}),Object(j.jsxs)("div",{className:"descriptiontext",children:[Object(j.jsx)("h2",{className:"titledescription",children:"Description:"}),Object(j.jsx)("p",{children:s.replaceAll(P," ")})]})]})]})}n(73);function M(){var e=Object(i.e)().gameId,t=Object(u.b)(),n=Object(u.c)((function(e){return e.gameDetails}));return Object(c.useEffect)(Object(g.a)(x.a.mark((function c(){return x.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(!(e>0||"D"==e[0])){c.next=4;break}return c.next=3,t(T(e));case 3:console.log("este es el juego",n);case 4:case"end":return c.stop()}}),c)}))),[]),Object(j.jsxs)("div",{className:"cont_gamedetails",children:[Object(j.jsx)("br",{}),Object(j.jsx)(l.b,{path:!0,to:"/home",children:Object(j.jsx)("button",{className:"btn_atras_detailts",children:"Atras"})}),n[0]?w(n[0]):null]})}n(74);function L(){var e=Object(u.b)();return Object(j.jsx)("div",{className:"container_mainP",children:Object(j.jsxs)("div",{className:"container_home",children:[Object(j.jsx)("h1",{className:"title_home",children:"VIDEOGAMES APP"}),Object(j.jsx)(l.b,{to:"/home",children:Object(j.jsx)("button",{className:"btn_home",onClick:function(){e({type:f,payload:""})}})})]})})}n(75);function J(e){return e.map((function(e,t){return Object(j.jsxs)("label",{children:[Object(j.jsx)("input",{className:"input_generos",type:"checkbox",onClick:function(t){var n=t.target.value;t.target.value="on"==n?e.name:"on"}},e.name+t),e.name]})}))}var U="POST_GAME";function V(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.genres})),n=Object(c.useRef)(null),a=(Object(c.useRef)(null),Object(c.useState)("")),r=Object(o.a)(a,2),s=r[0],i=r[1],b=(Object(u.c)((function(e){return e.gameCreado})),Object(c.useRef)(null)),d=Object(c.useRef)(null),O=Object(c.useRef)(null),m=Object(c.useRef)(null),h=Object(c.useRef)(null),f=Object(c.useRef)(null),p=Object(c.useRef)(null),x=Object(c.useRef)(null),g=Object(c.useRef)(null);return Object(c.useEffect)((function(){e(N())}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"btn_cont_form",children:Object(j.jsx)(l.b,{path:!0,to:"/home",children:Object(j.jsx)("button",{onClick:function(){e({type:"GAME_FOUNDED",payload:0})},className:"btn_atras_create",children:"Atras"})})}),Object(j.jsx)("div",{className:"contenedoor",children:Object(j.jsxs)("form",{onSubmit:function(t){console.log("estoy en submitttttttttttttttttttttt"),t.preventDefault();var c=[];if(null==n.current)return alert("Error");for(var a=0;a<=18;a++)"on"!=n.current[a].value&&c.push(n.current[a].value);var r,s=[f.current.value,p.current.value,x.current.value,g.current.value],l={name:b.current.value,description:d.current.value,released:m.current.value,rating:O.current.value,platforms:s+"",genres:c,img:h.current.value},i=!0;for(var o in l)!l[o].length&&(i=!1);return console.log(i),i&&e((r={name:b.current.value,description:d.current.value,released:m.current.value,rating:O.current.value,platforms:s+"",genres:c,img:h.current.value},function(e){R()({url:"http://localhost:3001/videogame/",method:"POST",data:r}).then((function(){return e({type:U,payload:r})}))})),alert("Videojuego Creado Exitosamente !!")},className:"formularioo",children:[Object(j.jsx)("h2",{className:"title_h2",children:"CREAR VIDEOJUEGO"}),Object(j.jsxs)("div",{className:"inputs_header",children:[Object(j.jsxs)("div",{className:"inputs_3",children:[Object(j.jsx)("label",{className:"label",children:"Nombre"}),Object(j.jsx)("input",{ref:b,className:"inputt",type:"text",placeholder:"Nombre del videojuego..."}),Object(j.jsx)("label",{className:"label",children:"Description"}),Object(j.jsx)("input",{ref:d,className:"inputt",placeholder:"Descripcion..."}),Object(j.jsx)("label",{className:"label",children:"Rating:"}),Object(j.jsx)("input",{ref:O,className:"inputt",placeholder:"Rating..."})]}),Object(j.jsxs)("div",{className:"inputs_2",children:[Object(j.jsx)("label",{className:"label",children:"Fecha de lanzamiento:"}),Object(j.jsx)("input",{ref:m,className:"inputt",placeholder:"Lanzamiento..."}),Object(j.jsx)("label",{className:"label",children:"Imagen:"}),Object(j.jsx)("input",{ref:h,className:"inputt",placeholder:"Url..."})]})]}),Object(j.jsx)("label",{className:"label",children:"Plataformas:"}),Object(j.jsxs)("div",{className:"contenedordeinputs",children:[Object(j.jsx)("input",{className:"inputts",ref:f,placeholder:"Opcion 1"}),Object(j.jsx)("input",{className:"inputts",ref:p,placeholder:"Opcion 2"}),Object(j.jsx)("input",{className:"inputts",ref:x,placeholder:"Opcion 3"}),Object(j.jsx)("input",{className:"inputts",ref:g,placeholder:"Opcion 4"})]}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{type:"button",className:"label_btn",onClick:function(){i("true")},children:"Generos"}),function(e){return"true"===e?Object(j.jsx)("form",{ref:n,className:"genres",children:J(t)}):"false"===e?Object(j.jsx)("div",{}):void 0}(s),Object(j.jsx)("button",{type:"submit",className:"btnCreate",children:"Crear!"})]})})]})}n(76);function z(){var e=Object(u.c)((function(e){return e.generofiltrado})),t=Object(u.c)((function(e){return e.orden})),n=Object(u.c)((function(e){return e.ascenOdescen})),a=Object(u.c)((function(e){return e.gamesCreated})),r=Object(u.b)();return Object(c.useEffect)((function(){}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"title_listg",children:Object(j.jsx)("h1",{className:"title_juegoCreado",children:"Juegos Creados"})}),Object(j.jsx)("div",{className:"btn_cont",children:Object(j.jsx)(l.b,{path:!0,to:"/home",children:Object(j.jsx)("button",{onClick:function(){r({type:f,payload:0})},className:"btn_atras",children:"Atras"})})}),Object(j.jsx)("div",{className:"container",children:b(a,e,t,n)})]})}var B=function(){return Object(j.jsxs)(l.a,{children:[Object(j.jsx)(i.a,{exact:!0,path:"/",component:L}),Object(j.jsx)(i.a,{exact:!0,path:"/home",component:k}),Object(j.jsx)(i.a,{exact:!0,path:"/createGame",component:E}),Object(j.jsx)(i.a,{exact:!0,path:"/createGame",component:V}),Object(j.jsx)(i.a,{exact:!0,path:"/gameCreated",component:E}),Object(j.jsx)(i.a,{exact:!0,path:"/gameCreated",component:z}),Object(j.jsx)(i.a,{exact:!0,path:"/videogame/:gameId",component:M})]})},X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,78)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))},q=n(23),H=n(4),K={games:[],gamesNext:[],gameFounded:"",gameDetails:[],genres:[],generofiltrado:[],orden:[],ascenOdescen:null,gameCreado:[],gamesCreated:[],indicePagina:1},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(H.a)(Object(H.a)({},e),{},{games:t.payload});case C:return Object(H.a)(Object(H.a)({},e),{},{gamesNext:t.payload.data});case f:return Object(H.a)(Object(H.a)({},e),{},{gameFounded:t.payload});case F:return Object(H.a)(Object(H.a)({},e),{},{gameDetails:t.payload});case v:return Object(H.a)(Object(H.a)({},e),{},{genres:t.payload});case"GENERO_FILTRADO":return Object(H.a)(Object(H.a)({},e),{},{generofiltrado:t.payload});case"GET_ORDEN":return Object(H.a)(Object(H.a)({},e),{},{orden:t.payload});case"SET_ASCEN_DESCEN":return Object(H.a)(Object(H.a)({},e),{},{ascenOdescen:t.payload});case U:return Object(H.a)(Object(H.a)({},e),{},{gameCreado:e.gameCreado.concat(t.payload)});case A:return Object(H.a)(Object(H.a)({},e),{},{gamesCreated:t.payload});case"INDICE_PAGINA":return Object(H.a)(Object(H.a)({},e),{},{indicePagina:t.payload});default:return Object(H.a)({},e)}},W=n(33),Y=Object(q.b)(Q,Object(q.a)(W.a));s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(u.a,{store:Y,children:Object(j.jsx)(B,{})})}),document.getElementById("root")),X()}},[[77,1,2]]]);
//# sourceMappingURL=main.00453f27.chunk.js.map