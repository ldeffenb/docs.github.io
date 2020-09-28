(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{106:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,h=b["".concat(c,".").concat(d)]||b[d]||p[d]||i;return n?a.a.createElement(h,o(o({ref:t},s),{},{components:n})):a.a.createElement(h,o({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var s=2;s<i;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},72:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),i=(n(0),n(106)),c={title:"Quick Start",id:"quick-start"},o={unversionedId:"installation/quick-start",id:"installation/quick-start",isDocsHomePage:!1,title:"Quick Start",description:"Supported platforms",source:"@site/docs/installation/quick-start.md",permalink:"/docs/installation/quick-start",editUrl:"https://github.com/ethersphere/docs.github.io/docs/installation/quick-start.md",sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/docs/"},next:{title:"configuration",permalink:"/docs/installation/configuration"}},l=[{value:"Supported platforms",id:"supported-platforms",children:[{value:"Quick Install (Stable)",id:"quick-install-stable",children:[]},{value:"Run Bee",id:"run-bee",children:[]},{value:"Upgrading Bee",id:"upgrading-bee",children:[]},{value:"Edge (Unstable)",id:"edge-unstable",children:[]}]}],s={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"supported-platforms"},"Supported platforms"),Object(i.b)("p",null,"The Bee client will happily run on MacOS, Windows and various Linux flavors."),Object(i.b)("h3",{id:"quick-install-stable"},"Quick Install (Stable)"),Object(i.b)("p",null,"We provide a convenient ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ethersphere/bee/blob/637b67a8e0a2b15e707f510bb7f49aea4ef6c110/install.sh"}),"installation script"),", which automatically detects your execution environment and installs the latest stable version of the Bee client on your computer."),Object(i.b)("p",null,"Simply run either one of the following commands in your Terminal..."),Object(i.b)("h4",{id:"wget"},"wget"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"wget -q -O - https://raw.githubusercontent.com/ethersphere/bee/master/install.sh | TAG=v0.2.0 bash\n")),Object(i.b)("h4",{id:"curl"},"curl"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"curl -s https://raw.githubusercontent.com/ethersphere/bee/master/install.sh | TAG=v0.2.0 bash\n")),Object(i.b)("h3",{id:"run-bee"},"Run Bee"),Object(i.b)("p",null,"Once you have installed Bee, you can test that it has been successfully installed by running."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"bee version\n> 0.2.0\n")),Object(i.b)("h3",{id:"upgrading-bee"},"Upgrading Bee"),Object(i.b)("p",null,"To upgrade previous versions of Bee installed using the above method, simply re-run the installation command above."),Object(i.b)("h3",{id:"edge-unstable"},"Edge (Unstable)"),Object(i.b)("p",null,"To get a sneak preview of the latest features added to Bee, you may also install the Edge version, which tracks the master branch of the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/ethersphere/bee"}),"Github respository")),Object(i.b)("h4",{id:"wget-1"},"wget"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"wget -q -O - https://raw.githubusercontent.com/ethersphere/bee/master/install.sh | bash\n")),Object(i.b)("h4",{id:"curl-1"},"curl"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"curl -s https://raw.githubusercontent.com/ethersphere/bee/master/install.sh | bash\n")))}u.isMDXComponent=!0}}]);