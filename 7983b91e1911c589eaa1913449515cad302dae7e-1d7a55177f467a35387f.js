"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[9606],{32532:function(e,t,a){a.d(t,{G:function(){return D},L:function(){return y},M:function(){return C},P:function(){return k},S:function(){return U},_:function(){return l},a:function(){return i},b:function(){return g},c:function(){return u},g:function(){return p},h:function(){return c},w:function(){return m}});var r=a(96540),s=(a(45147),a(5556)),n=a.n(s);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},i.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,r,s={},n=Object.keys(e);for(r=0;r<n.length;r++)t.indexOf(a=n[r])>=0||(s[a]=e[a]);return s}const o=["images","placeholder"],c=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;const u=e=>{var t;return(e=>{var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src)})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function d(e,t,a){const r={};let s="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(s="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:s,"data-gatsby-image-wrapper":"",style:r}}function g(e,t,a,r,s){return void 0===s&&(s={}),i({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:i({},s,{opacity:t?1:0})})}function p(e,t,a,r,s,n,l,o){const c={};n&&(c.backgroundColor=n,"fixed"===a?(c.width=r,c.height=s,c.backgroundColor=n,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),l&&(c.objectFit=l),o&&(c.objectPosition=o);const u=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}function m(e,t){const{images:a,placeholder:r}=e,s=i({},l(e,o),{images:i({},a,{sources:[]}),placeholder:r&&i({},r,{sources:[]})});var n;return t.forEach((t=>{let{media:a,image:r}=t;a&&(r.layout,e.layout,s.images.sources.push(...r.images.sources.map((e=>i({},e,{media:a}))),{media:a,srcSet:r.images.fallback.srcSet}),s.placeholder&&s.placeholder.sources.push({media:a,srcSet:r.placeholder.fallback}))})),s.images.sources.push(...a.sources),null!=r&&r.sources&&(null==(n=s.placeholder)||n.sources.push(...r.sources)),s}const h=["children"],f=function(e){let{layout:t,width:a,height:s}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:s/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:`data:image/svg+xml;charset=utf-8,%3Csvg%20height='${s}'%20width='${a}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E`,style:{maxWidth:"100%",display:"block",position:"static"}})):null},y=function(e){let{children:t}=e,a=l(e,h);return r.createElement(r.Fragment,null,r.createElement(f,i({},a)),t,null)},b=["src","srcSet","loading","alt","shouldLoad"],v=["fallback","sources","shouldLoad"],w=function(e){let{src:t,srcSet:a,loading:s,alt:n="",shouldLoad:o}=e,c=l(e,b);return r.createElement("img",i({},c,{decoding:"async",loading:s,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:n}))},E=function(e){let{fallback:t,sources:a=[],shouldLoad:s=!0}=e,n=l(e,v);const o=n.sizes||(null==t?void 0:t.sizes),c=r.createElement(w,i({},n,t,{sizes:o,shouldLoad:s}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:n}=e;return r.createElement("source",{key:`${t}-${n}-${a}`,type:n,media:t,srcSet:s?a:void 0,"data-srcset":s?void 0:a,sizes:o})})),c):c};var L;w.propTypes={src:s.string.isRequired,alt:s.string.isRequired,sizes:s.string,srcSet:s.string,shouldLoad:s.bool},E.displayName="Picture",E.propTypes={alt:s.string.isRequired,shouldLoad:s.bool,fallback:s.exact({src:s.string.isRequired,srcSet:s.string,sizes:s.string}),sources:s.arrayOf(s.oneOfType([s.exact({media:s.string.isRequired,type:s.string,sizes:s.string,srcSet:s.string.isRequired}),s.exact({media:s.string,type:s.string.isRequired,sizes:s.string,srcSet:s.string.isRequired})]))};const S=["fallback"],k=function(e){let{fallback:t}=e,a=l(e,S);return t?r.createElement(E,i({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",i({},a))};k.displayName="Placeholder",k.propTypes={fallback:s.string,sources:null==(L=E.propTypes)?void 0:L.sources,alt:function(e,t,a){return e[t]?new Error(`Invalid prop \`${t}\` supplied to \`${a}\`. Validation failed.`):null}};const C=function(e){return r.createElement(r.Fragment,null,r.createElement(E,i({},e)),r.createElement("noscript",null,r.createElement(E,i({},e,{shouldLoad:!0}))))};C.displayName="MainImage",C.propTypes=E.propTypes;const x=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],I=["style","className"],_=e=>e.replace(/\n/g,""),N=function(e,t,a){for(var r=arguments.length,s=new Array(r>3?r-3:0),i=3;i<r;i++)s[i-3]=arguments[i];return e.alt||""===e.alt?n().string(e,t,a,...s):new Error(`The "alt" prop is required in ${a}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`)},T={image:n().object.isRequired,alt:N},$=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],O=["style","className"],A=new Set;let j,R;const q=function(e){let{as:t="div",image:s,style:n,backgroundColor:o,className:u,class:g,onStartLoad:p,onLoad:m,onError:h}=e,f=l(e,$);const{width:y,height:b,layout:v}=s,w=d(y,b,v),{style:E,className:L}=w,S=l(w,O),k=(0,r.useRef)(),C=(0,r.useMemo)((()=>JSON.stringify(s.images)),[s.images]);g&&(u=g);const x=function(e,t,a){let r="";return"fullWidth"===e&&(r=`<div aria-hidden="true" style="padding-top: ${a/t*100}%;"></div>`),"constrained"===e&&(r=`<div style="max-width: ${t}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='${a}'%20width='${t}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`),r}(v,y,b);return(0,r.useEffect)((()=>{j||(j=a.e(1108).then(a.bind(a,81108)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return R=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=k.current.querySelector("[data-gatsby-image-ssr]");if(e&&c())return e.complete?(null==p||p({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void A.add(C);if(R&&A.has(C))return;let t,r;return j.then((e=>{let{renderImageToString:a,swapPlaceholderImage:l}=e;k.current&&(k.current.innerHTML=a(i({isLoading:!0,isLoaded:A.has(C),image:s},f)),A.has(C)||(t=requestAnimationFrame((()=>{k.current&&(r=l(k.current,C,A,n,p,m,h))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[s]),(0,r.useLayoutEffect)((()=>{A.has(C)&&R&&(k.current.innerHTML=R(i({isLoading:A.has(C),isLoaded:A.has(C),image:s},f)),null==p||p({wasCached:!0}),null==m||m({wasCached:!0}))}),[s]),(0,r.createElement)(t,i({},S,{style:i({},E,n,{backgroundColor:o}),className:`${L}${u?` ${u}`:""}`,ref:k,dangerouslySetInnerHTML:{__html:x},suppressHydrationWarning:!0}))},D=(0,r.memo)((function(e){return e.image?(0,r.createElement)(q,e):null}));D.propTypes=T,D.displayName="GatsbyImage";const P=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function z(e){return function(t){let{src:a,__imageData:s,__error:n}=t,o=l(t,P);return n&&console.warn(n),s?r.createElement(e,i({image:s},o)):(console.warn("Image not loaded",a),null)}}const W=z((function(e){let{as:t="div",className:a,class:s,style:n,image:o,loading:c="lazy",imgClassName:u,imgStyle:m,backgroundColor:h,objectFit:f,objectPosition:b}=e,v=l(e,x);if(!o)return console.warn("[gatsby-plugin-image] Missing image prop"),null;s&&(a=s),m=i({objectFit:f,objectPosition:b,backgroundColor:h},m);const{width:w,height:E,layout:L,images:S,placeholder:N,backgroundColor:T}=o,$=d(w,E,L),{style:O,className:A}=$,j=l($,I),R={fallback:void 0,sources:[]};return S.fallback&&(R.fallback=i({},S.fallback,{srcSet:S.fallback.srcSet?_(S.fallback.srcSet):void 0})),S.sources&&(R.sources=S.sources.map((e=>i({},e,{srcSet:_(e.srcSet)})))),r.createElement(t,i({},j,{style:i({},O,n,{backgroundColor:h}),className:`${A}${a?` ${a}`:""}`}),r.createElement(y,{layout:L,width:w,height:E},r.createElement(k,i({},p(N,!1,L,w,E,T,f,b))),r.createElement(C,i({"data-gatsby-image-ssr":"",className:u},v,g("eager"===c,!1,R,c,m)))))})),M=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),s=2;s<a;s++)r[s-2]=arguments[s];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?n().number(e,t,...r):new Error(`"${t}" ${e[t]} may not be passed when layout is fullWidth.`)},F=new Set(["fixed","fullWidth","constrained"]),H={src:n().string.isRequired,alt:N,width:M,height:M,sizes:n().string,layout:e=>{if(void 0!==e.layout&&!F.has(e.layout))return new Error(`Invalid value ${e.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`)}};W.displayName="StaticImage",W.propTypes=H;const U=z(D);U.displayName="StaticImage",U.propTypes=H},45147:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,s=/([\p{Alpha}\p{N}_]|$)/u,n=/[_.\- ]+/,i=new RegExp("^"+n.source),l=new RegExp(n.source+s.source,"gu"),o=new RegExp("\\d+"+s.source,"gu"),c=(e,s)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(s={pascalCase:!1,preserveConsecutiveUppercase:!1,...s},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const n=!1===s.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(s.locale),c=!1===s.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(s.locale);if(1===e.length)return s.pascalCase?c(e):n(e);return e!==n(e)&&(e=((e,r,s)=>{let n=!1,i=!1,l=!1;for(let o=0;o<e.length;o++){const c=e[o];n&&t.test(c)?(e=e.slice(0,o)+"-"+e.slice(o),n=!1,l=i,i=!0,o++):i&&l&&a.test(c)?(e=e.slice(0,o-1)+"-"+e.slice(o-1),l=i,i=!1,n=!0):(n=r(c)===c&&s(c)!==c,l=i,i=s(c)===c&&r(c)!==c)}return e})(e,n,c)),e=e.replace(i,""),e=s.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,n):n(e),s.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(l.lastIndex=0,o.lastIndex=0,e.replace(l,((e,a)=>t(a))).replace(o,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c}}]);