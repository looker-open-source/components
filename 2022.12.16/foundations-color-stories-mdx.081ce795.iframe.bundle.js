(globalThis.webpackChunk_looker_storybook=globalThis.webpackChunk_looker_storybook||[]).push([[3073],{"../../node_modules/lodash/chunk.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseSlice=__webpack_require__("../../node_modules/lodash/_baseSlice.js"),isIterateeCall=__webpack_require__("../../node_modules/lodash/_isIterateeCall.js"),toInteger=__webpack_require__("../../node_modules/lodash/toInteger.js"),nativeCeil=Math.ceil,nativeMax=Math.max;module.exports=function chunk(array,size,guard){size=(guard?isIterateeCall(array,size,guard):void 0===size)?1:nativeMax(toInteger(size),0);var length=null==array?0:array.length;if(!length||size<1)return[];for(var index=0,resIndex=0,result=Array(nativeCeil(length/size));index<length;)result[resIndex++]=baseSlice(array,index,index+=size);return result}},"../components/docs/foundations/color.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>color_stories});var react=__webpack_require__("../../node_modules/react/index.js"),esm=__webpack_require__("../../node_modules/@mdx-js/react/dist/esm.js"),esm_extends=(__webpack_require__("../../node_modules/@storybook/addon-docs/dist/esm/index.js"),__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js")),styled_components_browser_esm=(__webpack_require__("../../node_modules/core-js/modules/esnext.async-iterator.map.js"),__webpack_require__("../../node_modules/core-js/modules/esnext.iterator.map.js"),__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js")),chunk=(__webpack_require__("../../node_modules/core-js/modules/esnext.async-iterator.for-each.js"),__webpack_require__("../../node_modules/core-js/modules/esnext.iterator.constructor.js"),__webpack_require__("../../node_modules/core-js/modules/esnext.iterator.for-each.js"),__webpack_require__("../../node_modules/lodash/chunk.js")),chunk_default=__webpack_require__.n(chunk);const coreColors=["key","background","pageBackground","text"],intentColors=["link","critical","warn","positive","inform","calculation","dimension","measure"],specifiableTextColors=["title","body"],derivativeColors=["field","inverse","inverseOn","neutral","linkInteractive","informAccent","positiveAccent","warnAccent"],uiColors=["ui1","ui2","ui3","ui4","ui5"],textColors=["text1","text2","text3","text4","text5"],colorBreakdown=colors=>{const divided={core:{},derivative:{},intent:{},specializedText:{},stateful:{},text:{},ui:{}};for(const[key,value]of Object.entries(colors))coreColors.includes(key)?"pageBackground"!==key&&(divided.core[key]=value):intentColors.includes(key)?divided.intent[key]=value:derivativeColors.includes(key)?divided.derivative[key]=value:textColors.includes(key)?divided.text[key]=value:uiColors.includes(key)?divided.ui[key]=value:specifiableTextColors.includes(key)?divided.specializedText[key]=value:divided.stateful[key]=value;const statefulColorGroups=chunk_default()(Object.entries(divided.stateful),7).map((chunk=>{const obj={};return chunk.forEach((([name,color])=>obj[name]=color)),obj}));return{divided,statefulColorGroups}};var theme=__webpack_require__("../design-tokens/src/theme/theme.ts"),Code=__webpack_require__("../components/src/Text/Code/Code.tsx"),Grid=__webpack_require__("../components/src/Layout/Grid/Grid.tsx");const ColorSwatch=(0,styled_components_browser_esm.ZP)((({name,color,...props})=>react.createElement(Code.E,(0,esm_extends.Z)({fontSize:"xsmall"},props),name))).withConfig({displayName:"ColorList__ColorSwatch",componentId:"sc-1h04uix-0"})(["&::before{background:",";border:1px solid ",";border-radius:",";content:'';display:block;height:4rem;margin-bottom:",";width:100%;}"],(({color})=>color),(({theme})=>theme.colors.ui3),(({theme})=>theme.radii.medium),(({theme})=>theme.space.u2)),ColorListGrid=(0,styled_components_browser_esm.ZP)(Grid.r).withConfig({displayName:"ColorList__ColorListGrid",componentId:"sc-1h04uix-1"})(["grid-template-columns:repeat(auto-fit,minmax(100px,1fr));"]),ColorList=({colorKey})=>{const colors=colorBreakdown(theme.r.colors).divided[colorKey]||{};return react.createElement(ColorListGrid,{gap:"u5",maxWidth:600,pt:"medium",pb:"xxlarge"},Object.entries(colors).map((([title,color],key)=>react.createElement(ColorSwatch,{name:title,color,key}))))};try{ColorList.displayName="ColorList",ColorList.__docgenInfo={description:"",displayName:"ColorList",props:{colorKey:{defaultValue:null,description:"",name:"colorKey",required:!0,type:{name:"enum",value:[{value:'"text"'},{value:'"intent"'},{value:'"core"'},{value:'"derivative"'},{value:'"specializedText"'},{value:'"stateful"'},{value:'"ui"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../components/docs/foundations/demos/ColorList.tsx#ColorList"]={docgenInfo:ColorList.__docgenInfo,name:"ColorList",path:"../components/docs/foundations/demos/ColorList.tsx#ColorList"})}catch(__react_docgen_typescript_loader_error){}const BlendColor=(0,styled_components_browser_esm.ZP)((({name,color,...props})=>react.createElement(Code.E,(0,esm_extends.Z)({fontSize:"xsmall"},props),name))).withConfig({displayName:"ColorBlendsGrid__BlendColor",componentId:"sc-13jz90-0"})(["align-items:center;display:flex;&::before{background:",";border:1px solid ",";border-bottom:none;content:' ';display:block;flex-shrink:0;height:2.5rem;margin-right:",";width:5rem;}"],(({color})=>color),(({theme})=>theme.colors.ui3),(({theme})=>theme.space.u4)),BlendList=(0,styled_components_browser_esm.ZP)((({colors,...props})=>react.createElement("div",props,Object.entries(colors).map((([name,color])=>react.createElement(BlendColor,{name,color,key:name})))))).withConfig({displayName:"ColorBlendsGrid__BlendList",componentId:"sc-13jz90-1"})(["display:flex;flex-direction:column;*:first-child::before{border-radius:4px 4px 0 0;}*:last-child::before{border-bottom:solid 1px ",";border-radius:0 0 4px 4px;}"],(({theme})=>theme.colors.ui3)),BlendGrid=(0,styled_components_browser_esm.ZP)(Grid.r).withConfig({displayName:"ColorBlendsGrid__BlendGrid",componentId:"sc-13jz90-2"})(["grid-template-columns:repeat(auto-fit,minmax(225px,1fr));"]),ColorBlendsGrid=()=>{const{statefulColorGroups}=colorBreakdown(theme.r.colors);return react.createElement(BlendGrid,{gap:"u5",maxWidth:1e3},statefulColorGroups.map(((group,index)=>react.createElement(BlendList,{colors:group,key:index}))))};function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const Meta=(name="Meta",function MDXDefaultShortcode(props){return console.warn("Component "+name+" was not imported, exported, or provided by MDXProvider as global scope"),(0,esm.kt)("div",props)});var name;const layoutProps={};function MDXContent({components,...props}){return(0,esm.kt)("wrapper",_extends({},layoutProps,props,{components,mdxType:"MDXLayout"}),(0,esm.kt)(Meta,{title:"Foundations/Color",mdxType:"Meta"}),(0,esm.kt)("h1",{id:"color"},"Color"),(0,esm.kt)("h2",{id:"core-colors"},"Core Colors"),(0,esm.kt)("p",null,"Core colors form the tonal foundation of the Looker Components color palette."),(0,esm.kt)(ColorList,{colorKey:"core",mdxType:"ColorList"}),(0,esm.kt)("h2",{id:"intent-colors"},"Intent Colors"),(0,esm.kt)("p",null,"Intent colors have a semantic meaning and are used to apply color to components that represent Looker specific ideas (dimension and measures) or components give the user additional context like a positive success message or indication of a critical destructive action."),(0,esm.kt)(ColorList,{colorKey:"intent",mdxType:"ColorList"}),(0,esm.kt)("h2",{id:"derivative-colors"},"Derivative colors"),(0,esm.kt)("p",null,"Derivative colors are generated from core and intent colors. They represent special color usages, like inverse for tooltips above the background color, or informAccent for message bar background. Overriding the default theme core or intent colors can affect these colors."),(0,esm.kt)(ColorList,{colorKey:"derivative",mdxType:"ColorList"}),(0,esm.kt)("h2",{id:"ui-colors"},"UI Colors"),(0,esm.kt)("p",null,"These colors are generated by tinting or shading the core background color. These are neutral colors that are applied to components in various ways, like borders and backgrounds."),(0,esm.kt)(ColorList,{colorKey:"ui",mdxType:"ColorList"}),(0,esm.kt)("h2",{id:"text-colors"},"Text Colors"),(0,esm.kt)("p",null,"These colors are generated by blending the core background and text color. Their purpose is to give a variety of colors for text hierarchy."),(0,esm.kt)(ColorList,{colorKey:"text",mdxType:"ColorList"}),(0,esm.kt)("h2",{id:"stateful-colors"},"Stateful Colors"),(0,esm.kt)("p",null,"Stateful colors are generated based on the core and intent colors. Their purpose is to create a set of colors that can be applied to interactive elements, like buttons, lists, and options."),(0,esm.kt)(ColorBlendsGrid,{mdxType:"ColorBlendsGrid"}))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Foundations/Color",includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>(0,esm.kt)(MDXContent,null)};const color_stories=componentMeta,__namedExportsOrder=["__page"]}}]);