(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"0qAl":function(e,t){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},"5WRv":function(e,t,r){var n=r("iNmH"),o=r("Qatm"),a=r("Zhxd"),c=r("kluZ");e.exports=function(e){return n(e)||o(e)||a(e)||c()},e.exports.default=e.exports,e.exports.__esModule=!0},"8lrx":function(e,t,r){var n=r("uUj8"),o=r("5WRv"),a=r("OvAC"),c=r("PE9J"),u=["scope","children"];function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var s=r("mXGw"),p=r("/FXl").mdx,f=r("U+ow").useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,a=c(e,u),l=f(t),m=s.useMemo((function(){if(!r)return null;var e=i({React:s,mdx:p},l),t=Object.keys(e),a=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(o(t),[""+r])).apply(void 0,[{}].concat(o(a)))}),[r,t]);return s.createElement(m,i({},a))}},HZWP:function(e,t,r){"use strict";r.r(t);var n=r("jRwh"),o=r("mXGw"),a=r.n(o),c=r("Hrl7"),u=r("UutA"),l=r("tdfA"),i=r("YwNm"),s=r("A5Kj"),p=r("w26e"),f=r("+N5b"),m=r("V78Q"),d=r("G2e+"),b=r("Syvb"),x=r("QtcS"),h=r("wu5M"),y=r("Zga9"),w=r("Nhdc"),v=r("tqj0"),g=r("+I+c"),O=r("Wbzz"),E=["component"],j=function(e){var t="iframe.html?id="+e.toLowerCase()+"-&viewMode=docs&parent=gatsby";return Object(O.withPrefix)("/storybook/"+t)},_=Object(u.e)((function(e){var t=e.component,r=Object(g.a)(e,E);return a.a.createElement("iframe",Object.assign({},r,{src:j(t)}))})).withConfig({displayName:"PropsExamples",componentId:"sc-1kv84fi-0"})(["border:none;height:100%;width:100%;"]),M=(u.e.iframe.withConfig({displayName:"Documentation__Iframe",componentId:"sc-1e8uluy-0"})(["border:none;height:120rem;width:100%;"]),Object(u.e)(s.a).withConfig({displayName:"Documentation__CustomTabs",componentId:"sc-1e8uluy-1"})(["border-bottom:1px solid ",";border-top:1px solid ",";display:flex;margin:",";min-height:",";","{margin-bottom:-1px;margin-top:",";}"],(function(e){return e.theme.colors.ui2}),(function(e){return e.theme.colors.ui2}),(function(e){var t=e.theme.space;return t.u3+" 0 "+t.u5}),(function(e){return e.theme.space.u5}),f.a,(function(e){return e.theme.space.u2})));t.default=function(e){var t=e.data,r=t.mdx,o=t.site,u=r.frontmatter,g=u.github,O=u.status,E=void 0===O?"stable":O,j=u.storybook,P=u.storybookPath,k=u.title,R=g||"components/src/"+k+"/"+k+".tsx",S=Object(i.b)(),A=a.a.createElement(n.MDXRenderer,null,r.body);return a.a.createElement(a.a.Fragment,null,a.a.createElement(c.a,{title:k+" - "+o.siteMetadata.title}),a.a.createElement(v.a,null,a.a.createElement(s.a,null,a.a.createElement(p.a,{as:"h1",fontSize:"xxxxxlarge"},k),a.a.createElement(w.b,{status:E})),a.a.createElement(M,null,j&&a.a.createElement(f.a,S,a.a.createElement(m.a,null,"Overview"),a.a.createElement(m.a,null,"Storybook"," ",a.a.createElement(d.a,{fontSize:"xsmall",color:"text1",fontWeight:"normal",lineHeight:"normal"},"Props & Examples"))),a.a.createElement(b.a,{content:"GitHub"},a.a.createElement(x.a,{ml:"auto",iconAfter:a.a.createElement(l.a,null),onClick:function(){return window.open("https://github.com/looker-open-source/components/blob/main/packages/"+R)}},"View source"))),j?a.a.createElement(h.a,Object.assign({height:"100%"},S,{pt:"none"}),a.a.createElement(y.a,null,A),j&&a.a.createElement(y.a,null,a.a.createElement(_,{component:P||k}))):A))}},Qatm:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},iNmH:function(e,t,r){var n=r("+Sw5");e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.default=e.exports,e.exports.__esModule=!0},jRwh:function(e,t,r){var n=r("8lrx");e.exports={MDXRenderer:n}},kluZ:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},uUj8:function(e,t,r){var n=r("WI9V"),o=r("0qAl");function a(t,r,c){return o()?(e.exports=a=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=a=function(e,t,r){var o=[null];o.push.apply(o,t);var a=new(Function.bind.apply(e,o));return r&&n(a,r.prototype),a},e.exports.default=e.exports,e.exports.__esModule=!0),a.apply(null,arguments)}e.exports=a,e.exports.default=e.exports,e.exports.__esModule=!0}}]);
//# sourceMappingURL=component---src-layout-documentation-tsx-236db9b6f506a3d3ad6d.js.map