(()=>{var e,r,t={},o={};function n(e){var r=o[e];if(void 0!==r)return r.exports;var i=o[e]={exports:{}};return t[e].call(i.exports,i,i.exports,n),i.exports}n.m=t,e=[],n.O=(r,t,o,i)=>{if(!t){var a=1/0;for(u=0;u<e.length;u++){for(var[t,o,i]=e[u],l=!0,c=0;c<t.length;c++)(!1&i||a>=i)&&Object.keys(n.O).every((e=>n.O[e](t[c])))?t.splice(c--,1):(l=!1,i<a&&(a=i));if(l){e.splice(u--,1);var s=o();void 0!==s&&(r=s)}}return r}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[t,o,i]},n.F={},n.E=e=>{Object.keys(n.F).map((r=>{n.F[r](e)}))},n.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return n.d(r,{a:r}),r},n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((r,t)=>(n.f[t](e,r),r)),[])),n.u=e=>"js/"+(43===e?"test":e)+"."+{43:"f7b1e33a5b",660:"3bb2a299c2"}[e]+".js",n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),r={},n.l=(e,t,o,i)=>{if(r[e])r[e].push(t);else{var a,l;if(void 0!==o)for(var c=document.getElementsByTagName("script"),s=0;s<c.length;s++){var u=c[s];if(u.getAttribute("src")==e){a=u;break}}a||(l=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.src=e),r[e]=[t];var d=(t,o)=>{a.onerror=a.onload=null,clearTimeout(p);var n=r[e];if(delete r[e],a.parentNode&&a.parentNode.removeChild(a),n&&n.forEach((e=>e(o))),t)return t(o)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),l&&document.head.appendChild(a)}},n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var r=n.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e+"../"})(),(()=>{var e={179:0};n.f.j=(r,t)=>{var o=n.o(e,r)?e[r]:void 0;if(0!==o)if(o)t.push(o[2]);else{var i=new Promise(((t,n)=>o=e[r]=[t,n]));t.push(o[2]=i);var a=n.p+n.u(r),l=new Error;n.l(a,(t=>{if(n.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var i=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+r+" failed.\n("+i+": "+a+")",l.name="ChunkLoadError",l.type=i,l.request=a,o[1](l)}}),"chunk-"+r,r)}},n.F.j=r=>{if(!n.o(e,r)||void 0===e[r]){e[r]=null;var t=document.createElement("link");n.nc&&t.setAttribute("nonce",n.nc),t.rel="prefetch",t.as="script",t.href=n.p+n.u(r),document.head.appendChild(t)}},n.O.j=r=>0===e[r];var r=(r,t)=>{var o,i,[a,l,c]=t,s=0;if(a.some((r=>0!==e[r]))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(c)var u=c(n)}for(r&&r(t);s<a.length;s++)i=a[s],n.o(e,i)&&e[i]&&e[i][0](),e[a[s]]=0;return n.O(u)},t=globalThis.webpackChunk=globalThis.webpackChunk||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),n.O(0,[179],(()=>{n.E(660),n.E(43)}),5);var i={};const a=(e,r)=>e+r;console.log("add: ",a(1,2)),console.log("index文件被加载了: ",a),document.getElementById("btn").onclick=function(){Promise.all([n.e(660),n.e(43)]).then(n.bind(n,411)).then((({hello:e})=>{console.log("res: ",e())})).catch((e=>{}))},"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/service-worker.js").then((()=>{console.log("serviceWorker注册成功了")})).catch((()=>{console.log("serviceWorker注册失败了")}))})),i=n.O(i)})();