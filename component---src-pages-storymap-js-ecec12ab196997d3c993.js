(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{FZFz:function(e,t,n){},FfTa:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var r=n("q1tI"),a=n.n(r),o=n("MKeS"),s=n("8k0H"),c=n("eFD+"),i=n("6d1X"),l=n("qhky"),u=n("kCIJ"),d=(n("bmse"),Object(o.a)((function(){return Promise.all([n.e(0),n.e(8),n.e(15),n.e(9),n.e(6),n.e(10),n.e(7),n.e(36)]).then(n.bind(null,"jPXZ"))})));function f(){var e=Object(u.useIntl)();return a.a.createElement(s.a,null,a.a.createElement(l.a,null,a.a.createElement("title",null,"Mercúrio - InfoAmazonia"),a.a.createElement("body",{className:"storymap-page"})),a.a.createElement(i.a,{title:e.formatMessage({id:"seo.storymap.title"}),description:e.formatMessage({id:"seo.storymap.description"})}),a.a.createElement("main",{id:"content"},a.a.createElement(d,null)),a.a.createElement(c.a,null))}},MKeS:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("zLVn"),s=n("wx14"),c=n("JX7q"),i=n("dI71"),l=n("TOwV"),u=n("2mql"),d=n.n(u);function f(e,t){if(!e){var n=new Error("loadable: "+t);throw n.framesToPop=1,n.name="Invariant Violation",n}}var h=a.a.createContext();var m={initialChunks:{}};var p=function(e){return e};function v(e){var t=e.defaultResolveComponent,n=void 0===t?p:t,r=e.render,u=e.onLoad;function v(e,t){void 0===t&&(t={});var p=function(e){return"function"==typeof e?{requireAsync:e,resolve:function(){},chunkName:function(){}}:e}(e),v={};function y(e){return t.cacheKey?t.cacheKey(e):p.resolve?p.resolve(e):null}function E(e,r,a){var o=t.resolveComponent?t.resolveComponent(e,r):n(e);if(t.resolveComponent&&!Object(l.isValidElementType)(o))throw new Error("resolveComponent returned something that is not a React component!");return d()(a,o,{preload:!0}),o}var g,b=function(e){function n(n){var r;return(r=e.call(this,n)||this).state={result:null,error:null,loading:!0,cacheKey:y(n)},f(!n.__chunkExtractor||p.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),n.__chunkExtractor?(!1===t.ssr||(p.requireAsync(n).catch((function(){return null})),r.loadSync(),n.__chunkExtractor.addChunk(p.chunkName(n))),Object(c.a)(r)):(!1!==t.ssr&&(p.isReady&&p.isReady(n)||p.chunkName&&m.initialChunks[p.chunkName(n)])&&r.loadSync(),r)}Object(i.a)(n,e),n.getDerivedStateFromProps=function(e,t){var n=y(e);return Object(s.a)({},t,{cacheKey:n,loading:t.loading||t.cacheKey!==n})};var a=n.prototype;return a.componentDidMount=function(){this.mounted=!0;var e=this.getCache();e&&"REJECTED"===e.status&&this.setCache(),this.state.loading&&this.loadAsync()},a.componentDidUpdate=function(e,t){t.cacheKey!==this.state.cacheKey&&this.loadAsync()},a.componentWillUnmount=function(){this.mounted=!1},a.safeSetState=function(e,t){this.mounted&&this.setState(e,t)},a.getCacheKey=function(){return y(this.props)||JSON.stringify(this.props)},a.getCache=function(){return v[this.getCacheKey()]},a.setCache=function(e){void 0===e&&(e=void 0),v[this.getCacheKey()]=e},a.triggerOnLoad=function(){var e=this;u&&setTimeout((function(){u(e.state.result,e.props)}))},a.loadSync=function(){if(this.state.loading)try{var e=E(p.requireSync(this.props),this.props,w);this.state.result=e,this.state.loading=!1}catch(t){console.error("loadable-components: failed to synchronously load component, which expected to be available",{fileName:p.resolve(this.props),chunkName:p.chunkName(this.props),error:t?t.message:t}),this.state.error=t}},a.loadAsync=function(){var e=this,t=this.resolveAsync();return t.then((function(t){var n=E(t,e.props,{Loadable:w});e.safeSetState({result:n,loading:!1},(function(){return e.triggerOnLoad()}))})).catch((function(t){return e.safeSetState({error:t,loading:!1})})),t},a.resolveAsync=function(){var e=this,t=this.props,n=(t.__chunkExtractor,t.forwardedRef,Object(o.a)(t,["__chunkExtractor","forwardedRef"])),r=this.getCache();return r||((r=p.requireAsync(n)).status="PENDING",this.setCache(r),r.then((function(){r.status="RESOLVED"}),(function(t){console.error("loadable-components: failed to asynchronously load component",{fileName:p.resolve(e.props),chunkName:p.chunkName(e.props),error:t?t.message:t}),r.status="REJECTED"}))),r},a.render=function(){var e=this.props,n=e.forwardedRef,a=e.fallback,c=(e.__chunkExtractor,Object(o.a)(e,["forwardedRef","fallback","__chunkExtractor"])),i=this.state,l=i.error,u=i.loading,d=i.result;if(t.suspense&&"PENDING"===(this.getCache()||this.loadAsync()).status)throw this.loadAsync();if(l)throw l;var f=a||t.fallback||null;return u?f:r({fallback:f,result:d,options:t,props:Object(s.a)({},c,{ref:n})})},n}(a.a.Component),k=(g=b,function(e){return a.a.createElement(h.Consumer,null,(function(t){return a.a.createElement(g,Object.assign({__chunkExtractor:t},e))}))}),w=a.a.forwardRef((function(e,t){return a.a.createElement(k,Object.assign({forwardedRef:t},e))}));return w.preload=function(e){p.requireAsync(e)},w.load=function(e){return p.requireAsync(e)},w}return{loadable:v,lazy:function(e,t){return v(e,Object(s.a)({},t,{suspense:!0}))}}}var y=v({defaultResolveComponent:function(e){return e.__esModule?e.default:e.default||e},render:function(e){var t=e.result,n=e.props;return a.a.createElement(t,n)}}),E=y.loadable,g=y.lazy,b=v({onLoad:function(e,t){e&&t.forwardedRef&&("function"==typeof t.forwardedRef?t.forwardedRef(e):t.forwardedRef.current=e)},render:function(e){var t=e.result,n=e.props;return n.children?n.children(t):null}}),k=b.loadable,w=b.lazy;var C=E;C.lib=k,g.lib=w;t.a=C},bmse:function(e,t,n){},"eFD+":function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n("q1tI"),a=n.n(r),o=n("kCIJ"),s=n("QRQV"),c=(n("FZFz"),n("VwXF")),i=n.n(c),l=n("3eni"),u=n.n(l),d=n("I3Fl"),f=n.n(d),h=n("fO6w"),m=n.n(h);function p(){var e={brazil:m.a,guyana:i.a,suriname:u.a,venezuela:f.a};return a.a.createElement("div",{className:"reports"},a.a.createElement("div",{className:"reports-header"},a.a.createElement("h2",{className:"container"},a.a.createElement(o.FormattedMessage,{id:"reports.title"}),a.a.createElement(s.a,{slug:"caret"}))),a.a.createElement("div",{className:"reports-grid"},["guyana","suriname","venezuela","brazil"].map((function(t){return a.a.createElement(o.Link,{to:"/"+t,className:"report report-"+t},a.a.createElement("img",{className:"report-image",src:e[t],alt:""}),a.a.createElement("div",{className:"report-text"},a.a.createElement("h3",{className:"report-title"},a.a.createElement(o.FormattedMessage,{id:"reports."+t+".title"})),a.a.createElement("p",{className:"report-description"},a.a.createElement(o.FormattedMessage,{id:"reports."+t+".description"}))))}))))}}}]);
//# sourceMappingURL=component---src-pages-storymap-js-ecec12ab196997d3c993.js.map