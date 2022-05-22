(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{15:function(e,t,c){},16:function(e,t,c){},17:function(e,t,c){},20:function(e,t,c){},21:function(e,t,c){"use strict";c.r(t);var s=c(8),i=c.n(s),a=(c(14),c(9)),n=c(3),r=c(1),l=(c(15),c(16),c(17),c(0)),o=function(e){var t=e.movie;return Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("div",{className:"card-image",children:Object(l.jsx)("figure",{className:"image is-4by3",children:Object(l.jsx)("img",{src:t.Poster,alt:"Film logo"})})}),Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsxs)("div",{className:"media",children:[Object(l.jsx)("div",{className:"media-left",children:Object(l.jsx)("figure",{className:"image is-48x48",children:Object(l.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(l.jsx)("div",{className:"media-content",children:Object(l.jsx)("p",{className:"title is-8",children:t.Title})})]}),Object(l.jsxs)("div",{className:"content",children:[t.Plot,Object(l.jsx)("br",{})]})]})]})},j=function(e){var t=e.movies;return Object(l.jsx)("ul",{className:"movies",children:t.map((function(e){return Object(l.jsx)(o,{movie:e},e.imdbID)}))})},d=c(6),b=c(2),m=c.n(b),u=function(){var e=Object(d.a)(m.a.mark((function e(t){var c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("http://www.omdbapi.com/?i=tt3896198&apikey=e5addb44&","t=").concat(t));case 2:return c=e.sent,e.abrupt("return",c.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=(c(20),function(e){var t=e.addMovie,c=Object(r.useState)(""),s=Object(n.a)(c,2),i=s[0],a=s[1],j=Object(r.useState)(null),b=Object(n.a)(j,2),v=b[0],O=b[1],h=Object(r.useState)(""),x=Object(n.a)(h,2),f=x[0],p=x[1],N=Object(r.useCallback)((function(){var e=function(){var e=Object(d.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(i);case 2:"True"===(t=e.sent).Response?O(t):p("Can not find a movie with this title");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[i]),g=Object(r.useCallback)((function(e){e.preventDefault(),!f&&v&&(t(v),O(null),a(""))}),[v,f]);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("form",{className:"find-movie",onSubmit:g,children:[Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("input",{type:"text",id:"movie-title",placeholder:"Enter a title to search",value:i,onChange:function(e){a(e.target.value)}})}),f&&Object(l.jsx)("p",{className:"help is-danger",children:f})]}),Object(l.jsxs)("div",{className:"field is-grouped",children:[Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{type:"button",className:"button is-light",onClick:N,children:"Find a movie"})}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{type:"submit",className:"button is-primary",children:"Add to the list"})})]})]}),v&&Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h2",{className:"title",children:"Preview"}),Object(l.jsx)(o,{movie:v})]})]})}),O=function(){var e=Object(r.useState)([]),t=Object(n.a)(e,2),c=t[0],s=t[1],i=Object(r.useCallback)((function(e){c.some((function(t){return t.imdbID===e.imdbID}))?alert("Film is already in the list!"):s([].concat(Object(a.a)(c),[e]))}),[c]);return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("div",{className:"page-content",children:c&&Object(l.jsx)(j,{movies:c})}),Object(l.jsx)("div",{className:"sidebar",children:Object(l.jsx)(v,{addMovie:i})})]})};i.a.render(Object(l.jsx)(O,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.3923513b.chunk.js.map