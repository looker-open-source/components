(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"0qAl":function(e,t){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}},"5WRv":function(e,t,n){var r=n("iNmH"),a=n("Qatm"),o=n("Zhxd"),c=n("kluZ");e.exports=function(e){return r(e)||a(e)||o(e)||c()}},"A2+M":function(e,t,n){var r=n("X8hv");e.exports={MDXRenderer:r}},HZWP:function(e,t,n){"use strict";n.r(t);var r=n("A2+M"),a=n("mXGw"),o=n.n(a),c=n("Hrl7"),i=n("UutA"),l=n("8VmE"),u=n.n(l),s=n("76Le"),m=a.forwardRef((function(e,t){return a.createElement(s.a,u()({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 24 24"},e,{ref:t}),a.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),a.createElement("path",{d:"M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"}))}));m.displayName="Launch";var f=n("YwNm"),p=n("A5Kj"),d=n("w26e"),b=n("+N5b"),h=n("V78Q"),y=n("G2e+"),v=n("Syvb"),w=n("QtcS"),g=n("wu5M"),E=n("Zga9"),x=n("Nhdc"),O=n("tqj0"),j=n("5DaQ"),P=n("2Jbq"),k=n("lNEg"),S=n("FbDh"),A=n("Wbzz"),D=function(e){var t="iframe.html?id="+e.toLowerCase()+"-&viewMode=docs&parent=gatsby";return Object(A.withPrefix)("/storybook/"+t)},M=function(e){var t=e.component,n=Object(a.useState)("0"),r=n[0],c=n[1];return Object(a.useEffect)((function(){var e=function(e){"height"===e.data.key&&c(e.data.height+"px")};return window.addEventListener("message",e,!1),function(){window.removeEventListener("message",e,!1)}}),[]),o.a.createElement(o.a.Fragment,null,o.a.createElement(R,{height:r,src:D(t)}),"0"===r&&o.a.createElement(j.a,{alignItems:"center",justifyContent:"center",padding:"xlarge"},o.a.createElement(P.a,{"aria-label":"Loading"})))},R=Object(i.e)((function(e){return o.a.createElement("iframe",Object(k.a)(e))})).withConfig({displayName:"PropsExamples__Iframe",componentId:"sc-1kv84fi-0"})([""," border:none;width:100%;"],S.s),V=(i.e.iframe.withConfig({displayName:"Documentation__Iframe",componentId:"sc-1e8uluy-0"})(["border:none;height:120rem;width:100%;"]),Object(i.e)(p.a).withConfig({displayName:"Documentation__CustomTabs",componentId:"sc-1e8uluy-1"})(["border-bottom:1px solid ",";border-top:1px solid ",";display:flex;margin:",";min-height:",";","{margin-bottom:-1px;margin-top:",";}"],(function(e){return e.theme.colors.ui2}),(function(e){return e.theme.colors.ui2}),(function(e){var t=e.theme.space;return t.small+" 0 "+t.large}),(function(e){return e.theme.space.large}),b.a,(function(e){return e.theme.space.xsmall})));t.default=function(e){var t=e.data,n=t.mdx,a=t.site,i=n.frontmatter,l=i.github,u=i.status,s=void 0===u?"stable":u,j=i.storybook,P=i.storybookPath,k=i.title,S=l||k+"/"+k+".tsx",A=Object(f.b)(),D=o.a.createElement(r.MDXRenderer,null,n.body);return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,{title:k+" - "+a.siteMetadata.title}),o.a.createElement(O.a,null,o.a.createElement(p.a,null,o.a.createElement(d.a,{as:"h1",fontSize:"xxxxxlarge"},k),o.a.createElement(x.b,{status:s})),o.a.createElement(V,null,j&&o.a.createElement(b.a,A,o.a.createElement(h.a,null,"Overview"),o.a.createElement(h.a,null,"Storybook"," ",o.a.createElement(y.a,{fontSize:"xsmall",variant:"subdued",fontWeight:"normal",lineHeight:"normal"},"Props & Examples"))),o.a.createElement(v.a,{content:"GitHub"},o.a.createElement(w.a,{ml:"auto",iconAfter:o.a.createElement(m,null),onClick:function(){return window.open("https://github.com/looker-open-source/components/blob/main/packages/components/src/"+S)}},"View source"))),j?o.a.createElement(g.a,Object.assign({},A,{pt:"none"}),o.a.createElement(E.a,null,D),j&&o.a.createElement(E.a,null,o.a.createElement(M,{component:P||k}))):D))}},Qatm:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},WI9V:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},X8hv:function(e,t,n){var r=n("uUj8"),a=n("5WRv"),o=n("OvAC"),c=n("PE9J");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u=n("mXGw"),s=n("/FXl").mdx,m=n("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,n=e.children,o=c(e,["scope","children"]),i=m(t),f=u.useMemo((function(){if(!n)return null;var e=l({React:u,mdx:s},i),t=Object.keys(e),o=t.map((function(t){return e[t]}));return r(Function,["_fn"].concat(a(t),[""+n])).apply(void 0,[{}].concat(a(o)))}),[n,t]);return u.createElement(f,l({},o))}},iNmH:function(e,t,n){var r=n("+Sw5");e.exports=function(e){if(Array.isArray(e))return r(e)}},kluZ:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},uUj8:function(e,t,n){var r=n("WI9V"),a=n("0qAl");function o(t,n,c){return a()?e.exports=o=Reflect.construct:e.exports=o=function(e,t,n){var a=[null];a.push.apply(a,t);var o=new(Function.bind.apply(e,a));return n&&r(o,n.prototype),o},o.apply(null,arguments)}e.exports=o}}]);
//# sourceMappingURL=component---src-layout-documentation-tsx-0a263f75b0d9169decd4.js.map