"use strict";(self.webpackChunkmydocs=self.webpackChunkmydocs||[]).push([[2130],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var m=r.createContext({}),s=function(t){var e=r.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=s(t.components);return r.createElement(m.Provider,{value:e},t.children)},p="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,m=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),p=s(n),d=a,f=p["".concat(m,".").concat(d)]||p[d]||c[d]||o;return n?r.createElement(f,i(i({ref:e},u),{},{components:n})):r.createElement(f,i({ref:e},u))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var m in e)hasOwnProperty.call(e,m)&&(l[m]=e[m]);l.originalType=t,l[p]="string"==typeof t?t:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5888:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:2},i="Tmux session",l={unversionedId:"tmux/tmux-session",id:"tmux/tmux-session",title:"Tmux session",description:"| Command                       | Description                |",source:"@site/docs/tmux/tmux-session.mdx",sourceDirName:"tmux",slug:"/tmux/tmux-session",permalink:"/mydocs/tmux/tmux-session",draft:!1,editUrl:"https://github.com/coffmanjrp/mydocs/tree/main/docs/tmux/tmux-session.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Tmux settings",permalink:"/mydocs/tmux/tmux-settings"},next:{title:"Tmux pane",permalink:"/mydocs/tmux/tmux-pane"}},m={},s=[],u={toc:s};function p(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tmux-session"},"Tmux session"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Command"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Control + g d")),(0,a.kt)("td",{parentName:"tr",align:null},"Detach from tmux")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"tmux ls")),(0,a.kt)("td",{parentName:"tr",align:null},"List tmux sessions")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"tmux -a -t SESSION_NAME")),(0,a.kt)("td",{parentName:"tr",align:null},"Attach to tmux")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Control + g s")," => ",(0,a.kt)("inlineCode",{parentName:"td"},"0")," or ",(0,a.kt)("inlineCode",{parentName:"td"},"1")),(0,a.kt)("td",{parentName:"tr",align:null},"Select form tmux sessions")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"tmux kill-server")),(0,a.kt)("td",{parentName:"tr",align:null},"Shatdown tmux")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Control + g t")),(0,a.kt)("td",{parentName:"tr",align:null},"Display time")))))}p.isMDXComponent=!0}}]);