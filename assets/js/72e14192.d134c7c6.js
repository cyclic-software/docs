"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[239],{3905:function(M,N,j){j.d(N,{Zo:function(){return i},kt:function(){return n}});var e=j(7294);function I(M,N,j){return N in M?Object.defineProperty(M,N,{value:j,enumerable:!0,configurable:!0,writable:!0}):M[N]=j,M}function D(M,N){var j=Object.keys(M);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(M);N&&(e=e.filter((function(N){return Object.getOwnPropertyDescriptor(M,N).enumerable}))),j.push.apply(j,e)}return j}function T(M){for(var N=1;N<arguments.length;N++){var j=null!=arguments[N]?arguments[N]:{};N%2?D(Object(j),!0).forEach((function(N){I(M,N,j[N])})):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(j)):D(Object(j)).forEach((function(N){Object.defineProperty(M,N,Object.getOwnPropertyDescriptor(j,N))}))}return M}function u(M,N){if(null==M)return{};var j,e,I=function(M,N){if(null==M)return{};var j,e,I={},D=Object.keys(M);for(e=0;e<D.length;e++)j=D[e],N.indexOf(j)>=0||(I[j]=M[j]);return I}(M,N);if(Object.getOwnPropertySymbols){var D=Object.getOwnPropertySymbols(M);for(e=0;e<D.length;e++)j=D[e],N.indexOf(j)>=0||Object.prototype.propertyIsEnumerable.call(M,j)&&(I[j]=M[j])}return I}var t=e.createContext({}),g=function(M){var N=e.useContext(t),j=N;return M&&(j="function"==typeof M?M(N):T(T({},N),M)),j},i=function(M){var N=g(M.components);return e.createElement(t.Provider,{value:N},M.children)},y={inlineCode:"code",wrapper:function(M){var N=M.children;return e.createElement(e.Fragment,{},N)}},r=e.forwardRef((function(M,N){var j=M.components,I=M.mdxType,D=M.originalType,t=M.parentName,i=u(M,["components","mdxType","originalType","parentName"]),r=g(j),n=I,x=r["".concat(t,".").concat(n)]||r[n]||y[n]||D;return j?e.createElement(x,T(T({ref:N},i),{},{components:j})):e.createElement(x,T({ref:N},i))}));function n(M,N){var j=arguments,I=N&&N.mdxType;if("string"==typeof M||I){var D=j.length,T=new Array(D);T[0]=r;var u={};for(var t in N)hasOwnProperty.call(N,t)&&(u[t]=N[t]);u.originalType=M,u.mdxType="string"==typeof M?M:I,T[1]=u;for(var g=2;g<D;g++)T[g]=j[g];return e.createElement.apply(null,T)}return e.createElement.apply(null,j)}r.displayName="MDXCreateElement"},4181:function(M,N,j){j.r(N),j.d(N,{assets:function(){return i},contentTitle:function(){return t},default:function(){return n},frontMatter:function(){return u},metadata:function(){return g},toc:function(){return y}});var e=j(7462),I=j(3366),D=(j(7294),j(3905)),T=["components"],u={sidebar_position:2},t="TLDR",g={unversionedId:"quick-start",id:"quick-start",title:"TLDR",description:"Quick start example",source:"@site/docs/quick-start.md",sourceDirName:".",slug:"/quick-start",permalink:"/docs/quick-start",draft:!1,editUrl:"https://github.com/cyclic-software/docs/edit/main/website/docs/quick-start.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"What's different about cyclic?",permalink:"/docs/intro"},next:{title:"Architecture",permalink:"/docs/overview/architecture"}},i={},y=[{value:"Quick start example",id:"quick-start-example",level:2},{value:"Launching your own app",id:"launching-your-own-app",level:2},{value:"Next steps?",id:"next-steps",level:2}],r={toc:y};function n(M){var N=M.components,u=(0,I.Z)(M,T);return(0,D.kt)("wrapper",(0,e.Z)({},r,u,{components:N,mdxType:"MDXLayout"}),(0,D.kt)("h1",{id:"tldr"},"TLDR"),(0,D.kt)("h2",{id:"quick-start-example"},"Quick start example"),(0,D.kt)("p",null,"Launch a pre-baked expressjs starter:"),(0,D.kt)("p",null,(0,D.kt)("a",{parentName:"p",href:"https://app.cyclic.sh/api/app/deploy/cyclic-software/express-hello-world"},(0,D.kt)("img",{alt:"Deploy Expressjs Starter on Cyclic",src:j(8618).Z,width:"161",height:"35"}))),(0,D.kt)("h2",{id:"launching-your-own-app"},"Launching your own app"),(0,D.kt)("p",null,"Go to the ",(0,D.kt)("inlineCode",{parentName:"p"},"Link Your Own")," tab on the deployment page. This will let you chose a repo from one of your public GitHub repos."),(0,D.kt)("hr",null),(0,D.kt)("p",null,"Here is what you need to know:"),(0,D.kt)("ol",null,(0,D.kt)("li",{parentName:"ol"},(0,D.kt)("p",{parentName:"li"},"Cyclic supports ",(0,D.kt)("strong",{parentName:"p"},"nodejs")," apps that live in ",(0,D.kt)("strong",{parentName:"p"},"github repos"))),(0,D.kt)("li",{parentName:"ol"},(0,D.kt)("p",{parentName:"li"},"A ",(0,D.kt)("inlineCode",{parentName:"p"},"package.json")," must exist at the root of the repo")),(0,D.kt)("li",{parentName:"ol"},(0,D.kt)("p",{parentName:"li"},"On every deployment Cyclic will run ",(0,D.kt)("inlineCode",{parentName:"p"},"npm install")," for production and will prune dev dependencies "),(0,D.kt)("ul",{parentName:"li"},(0,D.kt)("li",{parentName:"ul"},"Cyclic will also run ",(0,D.kt)("inlineCode",{parentName:"li"},"npm run build")," if a build script has been defined in the ",(0,D.kt)("inlineCode",{parentName:"li"},"package.json")))),(0,D.kt)("li",{parentName:"ol"},(0,D.kt)("p",{parentName:"li"},"The ",(0,D.kt)("inlineCode",{parentName:"p"},"package.json")," should have a ",(0,D.kt)("inlineCode",{parentName:"p"},"scripts")," property with a ",(0,D.kt)("inlineCode",{parentName:"p"},"start")," command"),(0,D.kt)("ul",{parentName:"li"},(0,D.kt)("li",{parentName:"ul"},(0,D.kt)("strong",{parentName:"li"},"Cyclic will run your apps by calling")," ",(0,D.kt)("inlineCode",{parentName:"li"},"npm run start")))),(0,D.kt)("li",{parentName:"ol"},(0,D.kt)("p",{parentName:"li"},"The start command must start a server on a port"),(0,D.kt)("ul",{parentName:"li"},(0,D.kt)("li",{parentName:"ul"},(0,D.kt)("strong",{parentName:"li"},"Cyclic will discover the port automatically")," or you can configure it in environment variables"))),(0,D.kt)("li",{parentName:"ol"},(0,D.kt)("p",{parentName:"li"},(0,D.kt)("strong",{parentName:"p"},"All apps are serverless"))),(0,D.kt)("li",{parentName:"ol"},(0,D.kt)("p",{parentName:"li"},"New deployments will be triggered automatically on code changes to the default branch of the repo"))),(0,D.kt)("h2",{id:"next-steps"},"Next steps?"),(0,D.kt)("p",null,"You can try one of our other starters listed on the ",(0,D.kt)("a",{parentName:"p",href:"/docs/overview/starters"},"starters page")))}n.isMDXComponent=!0},8618:function(M,N){N.Z="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYxIiBoZWlnaHQ9IjM1IiB2aWV3Qm94PSIwIDAgMTYxIDM1IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTYxIiBoZWlnaHQ9IjM1IiByeD0iNC44IiBmaWxsPSIjMkU1OUM3Ii8+CjxwYXRoIGQ9Ik0xNiAxNS44ODE1SDIwLjQ0MzNMMjIuNjA5NCAxNy4yODg5SDE4LjIyMTZMMTYgMTUuODgxNVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIG9wYWNpdHk9IjAuODUiIGQ9Ik0xNi40MjE5IDEzLjc3MDRIMjAuNTgxNUwyMi42MDk0IDE3LjI4ODlIMTguNTAxN0wxNi40MjE5IDEzLjc3MDRaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBvcGFjaXR5PSIwLjc1IiBkPSJNMTYuOTg0NCAxMS42NTkzSDIwLjc2NTlMMjIuNjA5NCAxNy4yODg5SDE4Ljg3NTFMMTYuOTg0NCAxMS42NTkzWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggb3BhY2l0eT0iMC41IiBkPSJNMTcuNjg3NSA5LjY4ODg5SDIwLjk5NjNMMjIuNjA5NCAxNy4yODg5SDE5LjM0MTlMMTcuNjg3NSA5LjY4ODg5WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggb3BhY2l0eT0iMC4yNSIgZD0iTTE4LjM5MDYgOEgyMS4yMjY4TDIyLjYwOTQgMTcuMjg4OUgxOS44MDg3TDE4LjM5MDYgOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0yNSAxOS4xMTg1SDIwLjU1NjdMMTguMzkwNiAxNy43MTExSDIyLjc3ODRMMjUgMTkuMTE4NVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIG9wYWNpdHk9IjAuODUiIGQ9Ik0yNC41NzgxIDIxLjIyOTZIMjAuNDE4NUwxOC4zOTA2IDE3LjcxMTFIMjIuNDk4M0wyNC41NzgxIDIxLjIyOTZaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBvcGFjaXR5PSIwLjc1IiBkPSJNMjQuMDE1NiAyMy4zNDA3SDIwLjIzNDFMMTguMzkwNiAxNy43MTExSDIyLjEyNDlMMjQuMDE1NiAyMy4zNDA3WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggb3BhY2l0eT0iMC41IiBkPSJNMjMuMzEyNSAyNS4zMTExSDIwLjAwMzdMMTguMzkwNiAxNy43MTExSDIxLjY1ODFMMjMuMzEyNSAyNS4zMTExWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggb3BhY2l0eT0iMC4yNSIgZD0iTTIyLjYwOTQgMjdIMTkuNzczMkwxOC4zOTA2IDE3LjcxMTFIMjEuMTkxM0wyMi42MDk0IDI3WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTM3LjkwMjUgMjIuNUgzNC41ODQ1VjEyLjkxSDM3LjkwMjVDMzkuMzc3MiAxMi45MSA0MC4zODUyIDEzLjI4MzMgNDAuOTI2NSAxNC4wM0M0MS40Njc4IDE0Ljc3NjcgNDEuNzM4NSAxNS45NDggNDEuNzM4NSAxNy41NDRDNDEuNzM4NSAxOC4zNTYgNDEuNjgyNSAxOS4wNDY3IDQxLjU3MDUgMTkuNjE2QzQxLjQ2NzggMjAuMTc2IDQxLjI4MTIgMjAuNjg0NyA0MS4wMTA1IDIxLjE0MkM0MC40Nzg1IDIyLjA0NzMgMzkuNDQyNSAyMi41IDM3LjkwMjUgMjIuNVpNNDAuMTI4NSAxNy41NDRDNDAuMTI4NSAxNi4zODY3IDM5Ljk4MzggMTUuNTUxMyAzOS42OTQ1IDE1LjAzOEMzOS40MDUyIDE0LjUyNDcgMzguODA3OCAxNC4yNjggMzcuOTAyNSAxNC4yNjhIMzYuMTM4NVYyMS4xMjhIMzcuOTAyNUMzOC44MjY1IDIxLjEyOCAzOS40NDI1IDIwLjc4NzMgMzkuNzUwNSAyMC4xMDZDMzkuODk5OCAxOS43NjA3IDM5Ljk5NzggMTkuMzkyIDQwLjA0NDUgMTlDNDAuMTAwNSAxOC42MDggNDAuMTI4NSAxOC4xMjI3IDQwLjEyODUgMTcuNTQ0Wk00My41NTMzIDIyLjVWMTIuOTFINDkuNjAxM1YxNC4yNjhINDUuMTA3M1YxNi45ODRINDguNzYxM1YxOC4zMjhINDUuMTA3M1YyMS4xMjhINDkuNjAxM1YyMi41SDQzLjU1MzNaTTU0LjgwNTUgMTkuNTE4SDUyLjg0NTVWMjIuNUg1MS4yOTE1VjEyLjkxSDU0LjgwNTVDNTYuOTgwMiAxMi45MSA1OC4wNjc1IDEzLjk4MzMgNTguMDY3NSAxNi4xM0M1OC4wNjc1IDE3LjIzMTMgNTcuNzkyMiAxOC4wNzEzIDU3LjI0MTUgMTguNjVDNTYuNzAwMiAxOS4yMjg3IDU1Ljg4ODIgMTkuNTE4IDU0LjgwNTUgMTkuNTE4Wk01Mi44NDU1IDE4LjE3NEg1NC43OTE1QzU1LjkxMTUgMTguMTc0IDU2LjQ3MTUgMTcuNDkyNyA1Ni40NzE1IDE2LjEzQzU2LjQ3MTUgMTUuNDc2NyA1Ni4zMzYyIDE1LjAwMDcgNTYuMDY1NSAxNC43MDJDNTUuNzk0OSAxNC40MDMzIDU1LjM3MDIgMTQuMjU0IDU0Ljc5MTUgMTQuMjU0SDUyLjg0NTVWMTguMTc0Wk02NC45MzkgMjIuNUg1OS41NjNWMTIuOTFINjEuMTE3VjIxLjExNEg2NC45MzlWMjIuNVpNNjcuNzA5NSAyMC40N0M2OC4wMjY4IDIxLjAyMDcgNjguNjMzNSAyMS4yOTYgNjkuNTI5NSAyMS4yOTZDNzAuNDI1NSAyMS4yOTYgNzEuMDI3NSAyMS4wMjUzIDcxLjMzNTUgMjAuNDg0QzcxLjY1MjggMTkuOTQyNyA3MS44MTE1IDE5LjAzNzMgNzEuODExNSAxNy43NjhDNzEuODExNSAxNi40ODkzIDcxLjY0ODIgMTUuNTYwNyA3MS4zMjE1IDE0Ljk4MkM3MS4wMDQyIDE0LjQwMzMgNzAuNDA2OCAxNC4xMTQgNjkuNTI5NSAxNC4xMTRDNjguNjUyMiAxNC4xMTQgNjguMDUwMiAxNC40MDMzIDY3LjcyMzUgMTQuOTgyQzY3LjM5NjggMTUuNTYwNyA2Ny4yMzM1IDE2LjQ4NDcgNjcuMjMzNSAxNy43NTRDNjcuMjMzNSAxOS4wMTQgNjcuMzkyMiAxOS45MTkzIDY3LjcwOTUgMjAuNDdaTTcyLjU1MzUgMjEuNDc4QzcxLjk4NDIgMjIuMjYyIDcwLjk3NjIgMjIuNjU0IDY5LjUyOTUgMjIuNjU0QzY4LjA4MjggMjIuNjU0IDY3LjA3MDIgMjIuMjYyIDY2LjQ5MTUgMjEuNDc4QzY1LjkxMjggMjAuNjg0NyA2NS42MjM1IDE5LjQ0MzMgNjUuNjIzNSAxNy43NTRDNjUuNjIzNSAxNi4wNjQ3IDY1LjkxMjggMTQuODA5MyA2Ni40OTE1IDEzLjk4OEM2Ny4wNzk1IDEzLjE2NjcgNjguMDkyMiAxMi43NTYgNjkuNTI5NSAxMi43NTZDNzAuOTY2OCAxMi43NTYgNzEuOTc0OCAxMy4xNjY3IDcyLjU1MzUgMTMuOTg4QzczLjEzMjIgMTQuOCA3My40MjE1IDE2LjA1NTMgNzMuNDIxNSAxNy43NTRDNzMuNDIxNSAxOS40NTI3IDczLjEzMjIgMjAuNjk0IDcyLjU1MzUgMjEuNDc4Wk03OC4zNjI1IDIyLjVINzYuNzk0NVYxOC41NTJMNzMuNzg0NSAxMi45MUg3NS41MzQ1TDc3LjU2NDUgMTcuMDI2TDc5LjYwODUgMTIuOTFIODEuMzQ0NUw3OC4zNjI1IDE4LjU1MlYyMi41Wk04NC42NzAzIDE0LjI5NlYxMi45MUg5MS42NzAzVjE0LjI5Nkg4OC45NjgzVjIyLjVIODcuNDAwM1YxNC4yOTZIODQuNjcwM1pNOTQuNDY1NCAyMC40N0M5NC43ODI3IDIxLjAyMDcgOTUuMzg5NCAyMS4yOTYgOTYuMjg1NCAyMS4yOTZDOTcuMTgxNCAyMS4yOTYgOTcuNzgzNCAyMS4wMjUzIDk4LjA5MTQgMjAuNDg0Qzk4LjQwODcgMTkuOTQyNyA5OC41Njc0IDE5LjAzNzMgOTguNTY3NCAxNy43NjhDOTguNTY3NCAxNi40ODkzIDk4LjQwNCAxNS41NjA3IDk4LjA3NzQgMTQuOTgyQzk3Ljc2IDE0LjQwMzMgOTcuMTYyNyAxNC4xMTQgOTYuMjg1NCAxNC4xMTRDOTUuNDA4IDE0LjExNCA5NC44MDYgMTQuNDAzMyA5NC40Nzk0IDE0Ljk4MkM5NC4xNTI3IDE1LjU2MDcgOTMuOTg5NCAxNi40ODQ3IDkzLjk4OTQgMTcuNzU0QzkzLjk4OTQgMTkuMDE0IDk0LjE0OCAxOS45MTkzIDk0LjQ2NTQgMjAuNDdaTTk5LjMwOTQgMjEuNDc4Qzk4Ljc0IDIyLjI2MiA5Ny43MzIgMjIuNjU0IDk2LjI4NTQgMjIuNjU0Qzk0LjgzODcgMjIuNjU0IDkzLjgyNiAyMi4yNjIgOTMuMjQ3NCAyMS40NzhDOTIuNjY4NyAyMC42ODQ3IDkyLjM3OTQgMTkuNDQzMyA5Mi4zNzk0IDE3Ljc1NEM5Mi4zNzk0IDE2LjA2NDcgOTIuNjY4NyAxNC44MDkzIDkzLjI0NzQgMTMuOTg4QzkzLjgzNTQgMTMuMTY2NyA5NC44NDggMTIuNzU2IDk2LjI4NTQgMTIuNzU2Qzk3LjcyMjcgMTIuNzU2IDk4LjczMDcgMTMuMTY2NyA5OS4zMDk0IDEzLjk4OEM5OS44ODggMTQuOCAxMDAuMTc3IDE2LjA1NTMgMTAwLjE3NyAxNy43NTRDMTAwLjE3NyAxOS40NTI3IDk5Ljg4OCAyMC42OTQgOTkuMzA5NCAyMS40NzhaTTEwOC4yODMgMjIuNjU0QzEwNi44ODMgMjIuNjU0IDEwNS45MzEgMjIuMjY2NyAxMDUuNDI3IDIxLjQ5MkMxMDQuOTMyIDIwLjcxNzMgMTA0LjY4NSAxOS40NDMzIDEwNC42ODUgMTcuNjdDMTA0LjY4NSAxNS44OTY3IDEwNC45MzcgMTQuNjM2NyAxMDUuNDQxIDEzLjg5QzEwNS45NDUgMTMuMTM0IDEwNi44OTIgMTIuNzU2IDEwOC4yODMgMTIuNzU2QzEwOS4xMTQgMTIuNzU2IDExMC4wMjggMTIuODcyNyAxMTEuMDI3IDEzLjEwNkwxMTAuOTcxIDE0LjM2NkMxMTAuMTMxIDE0LjIxNjcgMTA5LjI5MSAxNC4xNDIgMTA4LjQ1MSAxNC4xNDJDMTA3LjYxMSAxNC4xNDIgMTA3LjA0MiAxNC4zOTQgMTA2Ljc0MyAxNC44OThDMTA2LjQ0NCAxNS4zOTI3IDEwNi4yOTUgMTYuMzMwNyAxMDYuMjk1IDE3LjcxMkMxMDYuMjk1IDE5LjA4NCAxMDYuNDQgMjAuMDIyIDEwNi43MjkgMjAuNTI2QzEwNy4wMTggMjEuMDIwNyAxMDcuNTgzIDIxLjI2OCAxMDguNDIzIDIxLjI2OEMxMDkuMjYzIDIxLjI2OCAxMTAuMTEyIDIxLjE5OCAxMTAuOTcxIDIxLjA1OEwxMTEuMDEzIDIyLjM0NkMxMTAuMDUyIDIyLjU1MTMgMTA5LjE0MiAyMi42NTQgMTA4LjI4MyAyMi42NTRaTTExNi4yMDYgMjIuNUgxMTQuNjM4VjE4LjU1MkwxMTEuNjI4IDEyLjkxSDExMy4zNzhMMTE1LjQwOCAxNy4wMjZMMTE3LjQ1MiAxMi45MUgxMTkuMTg4TDExNi4yMDYgMTguNTUyVjIyLjVaTTEyMy4yMTMgMjIuNjU0QzEyMS44MTMgMjIuNjU0IDEyMC44NjEgMjIuMjY2NyAxMjAuMzU3IDIxLjQ5MkMxMTkuODYyIDIwLjcxNzMgMTE5LjYxNSAxOS40NDMzIDExOS42MTUgMTcuNjdDMTE5LjYxNSAxNS44OTY3IDExOS44NjcgMTQuNjM2NyAxMjAuMzcxIDEzLjg5QzEyMC44NzUgMTMuMTM0IDEyMS44MjIgMTIuNzU2IDEyMy4yMTMgMTIuNzU2QzEyNC4wNDMgMTIuNzU2IDEyNC45NTggMTIuODcyNyAxMjUuOTU3IDEzLjEwNkwxMjUuOTAxIDE0LjM2NkMxMjUuMDYxIDE0LjIxNjcgMTI0LjIyMSAxNC4xNDIgMTIzLjM4MSAxNC4xNDJDMTIyLjU0MSAxNC4xNDIgMTIxLjk3MSAxNC4zOTQgMTIxLjY3MyAxNC44OThDMTIxLjM3NCAxNS4zOTI3IDEyMS4yMjUgMTYuMzMwNyAxMjEuMjI1IDE3LjcxMkMxMjEuMjI1IDE5LjA4NCAxMjEuMzY5IDIwLjAyMiAxMjEuNjU5IDIwLjUyNkMxMjEuOTQ4IDIxLjAyMDcgMTIyLjUxMyAyMS4yNjggMTIzLjM1MyAyMS4yNjhDMTI0LjE5MyAyMS4yNjggMTI1LjA0MiAyMS4xOTggMTI1LjkwMSAyMS4wNThMMTI1Ljk0MyAyMi4zNDZDMTI0Ljk4MSAyMi41NTEzIDEyNC4wNzEgMjIuNjU0IDEyMy4yMTMgMjIuNjU0Wk0xMzIuOTg0IDIyLjVIMTI3LjYwOFYxMi45MUgxMjkuMTYyVjIxLjExNEgxMzIuOTg0VjIyLjVaTTEzNC4yNTIgMjIuNVYxMi45MUgxMzUuODA2VjIyLjVIMTM0LjI1MlpNMTQxLjIzMiAyMi42NTRDMTM5LjgzMiAyMi42NTQgMTM4Ljg4IDIyLjI2NjcgMTM4LjM3NiAyMS40OTJDMTM3Ljg4MiAyMC43MTczIDEzNy42MzQgMTkuNDQzMyAxMzcuNjM0IDE3LjY3QzEzNy42MzQgMTUuODk2NyAxMzcuODg2IDE0LjYzNjcgMTM4LjM5IDEzLjg5QzEzOC44OTQgMTMuMTM0IDEzOS44NDIgMTIuNzU2IDE0MS4yMzIgMTIuNzU2QzE0Mi4wNjMgMTIuNzU2IDE0Mi45NzggMTIuODcyNyAxNDMuOTc2IDEzLjEwNkwxNDMuOTIgMTQuMzY2QzE0My4wOCAxNC4yMTY3IDE0Mi4yNCAxNC4xNDIgMTQxLjQgMTQuMTQyQzE0MC41NiAxNC4xNDIgMTM5Ljk5MSAxNC4zOTQgMTM5LjY5MiAxNC44OThDMTM5LjM5NCAxNS4zOTI3IDEzOS4yNDQgMTYuMzMwNyAxMzkuMjQ0IDE3LjcxMkMxMzkuMjQ0IDE5LjA4NCAxMzkuMzg5IDIwLjAyMiAxMzkuNjc4IDIwLjUyNkMxMzkuOTY4IDIxLjAyMDcgMTQwLjUzMiAyMS4yNjggMTQxLjM3MiAyMS4yNjhDMTQyLjIxMiAyMS4yNjggMTQzLjA2MiAyMS4xOTggMTQzLjkyIDIxLjA1OEwxNDMuOTYyIDIyLjM0NkMxNDMuMDAxIDIyLjU1MTMgMTQyLjA5MSAyMi42NTQgMTQxLjIzMiAyMi42NTRaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"}}]);