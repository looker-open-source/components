(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"+Sw5":function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},"0qAl":function(e,t){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}},"5WRv":function(e,t,n){var r=n("iNmH"),o=n("Qatm"),a=n("Zhxd"),c=n("kluZ");e.exports=function(e){return r(e)||o(e)||a(e)||c()}},"A2+M":function(e,t,n){var r=n("X8hv");e.exports={MDXRenderer:r}},HZWP:function(e,t,n){"use strict";n.r(t);var r=n("A2+M"),o=n("mXGw"),a=n.n(o),c=n("Hrl7"),i=n("UutA"),u=n("YwNm"),l=n("A5Kj"),s=n("w26e"),f=n("+N5b"),m=n("V78Q"),p=n("G2e+"),b=n("Syvb"),d=n("QtcS"),y=n("wu5M"),h=n("Zga9"),g=n("Nhdc"),v=n("tqj0"),w=n("5DaQ"),x=n("2Jbq"),E=n("lNEg"),O=n("FbDh"),j=n("Wbzz"),S=function(e){var t="iframe.html?id="+e.toLowerCase()+"-&viewMode=docs&parent=gatsby";return Object(j.withPrefix)("/storybook/"+t)},P=function(e){var t=e.component,n=Object(o.useState)("0"),r=n[0],c=n[1];return Object(o.useEffect)((function(){var e=function(e){"height"===e.data.key&&c(e.data.height+"px")};return window.addEventListener("message",e,!1),function(){window.removeEventListener("message",e,!1)}}),[]),a.a.createElement(a.a.Fragment,null,a.a.createElement(A,{height:r,src:S(t)}),"0"===r&&a.a.createElement(w.a,{alignItems:"center",justifyContent:"center",padding:"xlarge"},a.a.createElement(x.a,{"aria-label":"Loading"})))},A=Object(i.e)((function(e){return a.a.createElement("iframe",Object(E.a)(e))})).withConfig({displayName:"PropsExamples__Iframe",componentId:"sc-1kv84fi-0"})([""," border:none;width:100%;"],O.s),k=(i.e.iframe.withConfig({displayName:"Documentation__Iframe",componentId:"sc-1e8uluy-0"})(["border:none;height:120rem;width:100%;"]),Object(i.e)(l.a).withConfig({displayName:"Documentation__CustomTabs",componentId:"sc-1e8uluy-1"})(["border-bottom:1px solid ",";border-top:1px solid ",";display:flex;margin:",";min-height:",";","{margin-bottom:-1px;margin-top:",";}"],(function(e){return e.theme.colors.ui2}),(function(e){return e.theme.colors.ui2}),(function(e){var t=e.theme.space;return t.small+" 0 "+t.large}),(function(e){return e.theme.space.large}),f.a,(function(e){return e.theme.space.xsmall})));t.default=function(e){var t=e.data,n=t.mdx,o=t.site,i=n.frontmatter,w=i.github,x=i.status,E=void 0===x?"stable":x,O=i.storybook,j=i.storybookPath,S=i.title,A=w||S+"/"+S+".tsx",D=Object(u.b)(),I=a.a.createElement(r.MDXRenderer,null,n.body);return a.a.createElement(a.a.Fragment,null,a.a.createElement(c.a,{title:S+" - "+o.siteMetadata.title}),a.a.createElement(v.a,null,a.a.createElement(l.a,null,a.a.createElement(s.a,{as:"h1",fontSize:"xxxxxlarge"},S),a.a.createElement(g.b,{status:E})),a.a.createElement(k,null,O&&a.a.createElement(f.a,D,a.a.createElement(m.a,null,"Overview"),a.a.createElement(m.a,null,"Storybook"," ",a.a.createElement(p.a,{fontSize:"xsmall",variant:"subdued",fontWeight:"normal",lineHeight:"normal"},"Props & Examples"))),a.a.createElement(b.a,{content:"GitHub"},a.a.createElement(d.a,{ml:"auto",iconAfter:"External",onClick:function(){return window.open("https://github.com/looker-open-source/components/blob/main/packages/components/src/"+A)}},"View source"))),O?a.a.createElement(y.a,Object.assign({},D,{pt:"none"}),a.a.createElement(h.a,null,I),O&&a.a.createElement(h.a,null,a.a.createElement(P,{component:j||S}))):I))}},OvAC:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},Qatm:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},WI9V:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},X8hv:function(e,t,n){var r=n("uUj8"),o=n("5WRv"),a=n("OvAC"),c=n("PE9J");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l=n("mXGw"),s=n("/FXl").mdx,f=n("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,n=e.children,a=c(e,["scope","children"]),i=f(t),m=l.useMemo((function(){if(!n)return null;var e=u({React:l,mdx:s},i),t=Object.keys(e),a=t.map((function(t){return e[t]}));return r(Function,["_fn"].concat(o(t),[""+n])).apply(void 0,[{}].concat(o(a)))}),[n,t]);return l.createElement(m,u({},a))}},Zhxd:function(e,t,n){var r=n("+Sw5");e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},iNmH:function(e,t,n){var r=n("+Sw5");e.exports=function(e){if(Array.isArray(e))return r(e)}},kluZ:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},uUj8:function(e,t,n){var r=n("WI9V"),o=n("0qAl");function a(t,n,c){return o()?e.exports=a=Reflect.construct:e.exports=a=function(e,t,n){var o=[null];o.push.apply(o,t);var a=new(Function.bind.apply(e,o));return n&&r(a,n.prototype),a},a.apply(null,arguments)}e.exports=a}}]);
//# sourceMappingURL=component---src-layout-documentation-tsx-724ee2fa850039ea10c3.js.map