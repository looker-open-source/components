"use strict";(globalThis.webpackChunk_looker_storybook=globalThis.webpackChunk_looker_storybook||[]).push([[3710],{"../components/docs/foundations/demos/DocTable.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>DocTable});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),_src__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../components/src/Table/Table.tsx"),_src__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../components/src/Text/Code/Code.tsx");const DocTable=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP)(_src__WEBPACK_IMPORTED_MODULE_1__.i).withConfig({displayName:"DocTable",componentId:"sc-139mrvg-0"})(["font-size:",";margin-bottom:",";","{color:",";}"],(({theme})=>theme.fontSizes.small),(({theme})=>theme.space.u8),_src__WEBPACK_IMPORTED_MODULE_2__.E,(({theme})=>theme.colors.key));try{DocTable.displayName="DocTable",DocTable.__docgenInfo={description:"",displayName:"DocTable",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLTableElement | null) => void) | RefObject<HTMLTableElement> | null"}},border:{defaultValue:null,description:"Border can be specified as a boolean or a key of the theme colors object.\n1px border is applied to all four sides.\n\n`true` - will use theme's `ui2` color\n`false` - will not apply any border\n`keyof Colors` - will use the color of the key",name:"border",required:!1,type:{name:"BorderProp"}},borderBottom:{defaultValue:null,description:"A 1px border is applied to the bottom.\nSee `border` property for specifics values that can be specified..",name:"borderBottom",required:!1,type:{name:"BorderProp"}},borderLeft:{defaultValue:null,description:"A 1px border is applied to the left.\nSee `border` property for specifics values that can be specified..",name:"borderLeft",required:!1,type:{name:"BorderProp"}},borderRight:{defaultValue:null,description:"A 1px border is applied to the right.\nSee `border` property for specifics values that can be specified..",name:"borderRight",required:!1,type:{name:"BorderProp"}},borderTop:{defaultValue:null,description:"A 1px border is applied to the top.\nSee `border` property for specifics values that can be specified..",name:"borderTop",required:!1,type:{name:"BorderProp"}},borderX:{defaultValue:null,description:"A 1px border is applied to the left & right.\nSee `border` property for specifics values that can be specified..",name:"borderX",required:!1,type:{name:"BorderProp"}},borderY:{defaultValue:null,description:"A 1px border is applied to the top & bottom.\nSee `border` property for specifics values that can be specified..",name:"borderY",required:!1,type:{name:"BorderProp"}},borderColor:{defaultValue:null,description:"@deprecated - not used by borderHelper which is exported as `border` and can be deleted. Once all usage has been deleted then this prop can be removed from here.",name:"borderColor",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../components/docs/foundations/demos/DocTable.tsx#DocTable"]={docgenInfo:DocTable.__docgenInfo,name:"DocTable",path:"../components/docs/foundations/demos/DocTable.tsx#DocTable"})}catch(__react_docgen_typescript_loader_error){}},"../components/docs/foundations/spacing.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>spacing_stories});var react=__webpack_require__("../../node_modules/react/index.js"),esm=__webpack_require__("../../node_modules/@mdx-js/react/dist/esm.js"),convertRemToPx=(__webpack_require__("../../node_modules/@storybook/addon-docs/dist/esm/index.js"),__webpack_require__("../../node_modules/core-js/modules/esnext.async-iterator.filter.js"),__webpack_require__("../../node_modules/core-js/modules/esnext.iterator.constructor.js"),__webpack_require__("../../node_modules/core-js/modules/esnext.iterator.filter.js"),__webpack_require__("../../node_modules/core-js/modules/esnext.async-iterator.map.js"),__webpack_require__("../../node_modules/core-js/modules/esnext.iterator.map.js"),__webpack_require__("../design-tokens/src/utils/convertRemToPx.ts")),theme=__webpack_require__("../design-tokens/src/theme/theme.ts"),Code=__webpack_require__("../components/src/Text/Code/Code.tsx"),Text=__webpack_require__("../components/src/Text/Text/Text.tsx"),TableHeaderCell=__webpack_require__("../components/src/Table/TableHeaderCell/index.tsx"),TableRow=__webpack_require__("../components/src/Table/TableRow/index.tsx"),TableDataCell=__webpack_require__("../components/src/Table/TableDataCell/index.tsx"),TableHead=__webpack_require__("../components/src/Table/TableHead/index.tsx"),TableBody=__webpack_require__("../components/src/Table/TableBody/index.tsx"),DocTable=__webpack_require__("../components/docs/foundations/demos/DocTable.tsx");const spacingExamples=[{label:"xxxsmall",px:"2",rem:"0.125rem"},{label:"xxsmall",px:"4",rem:"0.25rem"},{label:"xsmall",px:"8",rem:"0.5rem"},{label:"small",px:"12",rem:"0.75rem"},{label:"medium",px:"16",rem:"1rem"},{label:"large",px:"20",rem:"1.25rem"},{label:"xlarge",px:"32",rem:"2rem"},{label:"xxlarge",px:"40",rem:"2.5rem"},{label:"xxxlarge",px:"60",rem:"3.75rem"},{label:"xxxxlarge",px:"80",rem:"5rem"}],spacingLabels=["Size","Theme Value","PX Value","Rem Value"],unitValues=Object.entries(theme.r.space).filter((([key])=>key.startsWith("u"))),SpacingOptionsTable=()=>react.createElement(DocTable.L,null,react.createElement(TableHead.s,null,react.createElement(TableRow.S,null,spacingLabels.map(((label,i)=>((label,key)=>react.createElement(TableHeaderCell.x,{key},react.createElement(Text.x,null,label)))(label,i))))),react.createElement(TableBody.R,null,unitValues.map(((size,index)=>((px,rem,key,label)=>{const divStyle={background:"#fd5ac9",height:`${px}px`,opacity:.5,width:`${px}px`};return react.createElement(TableRow.S,{key,style:{verticalAlign:"middle"}},react.createElement(TableDataCell.e,null,react.createElement("div",{style:divStyle})),react.createElement(TableDataCell.e,null,react.createElement(Code.E,{fontSize:"xsmall"},"theme.space.",label)),react.createElement(TableDataCell.e,null,px,"px"),react.createElement(TableDataCell.e,null,rem))})((0,convertRemToPx.f)(parseFloat(size[1])),size[1],index,size[0]))))),LegacySpaceTable=()=>react.createElement(DocTable.L,null,react.createElement(TableHead.s,null,react.createElement(TableRow.S,null,react.createElement(TableHeaderCell.x,null,"New Value"),react.createElement(TableHeaderCell.x,null,"Legacy name"))),react.createElement(TableBody.R,null,unitValues.map((size=>react.createElement(TableRow.S,{key:`${size[0]}-legacy`},react.createElement(TableDataCell.e,null,react.createElement(Code.E,{fontSize:"small"},size[0])),react.createElement(TableDataCell.e,null,(remValue=>{const validSpace=spacingExamples.find((item=>item.rem===remValue));return validSpace?react.createElement(Code.E,{fontSize:"small"},validSpace.label):react.createElement(Text.x,{fontSize:"small",color:"text2"},"---")})(size[1])))))));function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const Meta=(name="Meta",function MDXDefaultShortcode(props){return console.warn("Component "+name+" was not imported, exported, or provided by MDXProvider as global scope"),(0,esm.kt)("div",props)});var name;const layoutProps={};function MDXContent({components,...props}){return(0,esm.kt)("wrapper",_extends({},layoutProps,props,{components,mdxType:"MDXLayout"}),(0,esm.kt)(Meta,{title:"Docs/Foundations/Spacing",mdxType:"Meta"}),(0,esm.kt)("h1",{id:"spacing"},"Spacing"),(0,esm.kt)("p",null,"Consistent spacing is the foundation for a well structured user interface. We provide a set of spacing rules that takes the guess work out of spacing UI elements."),(0,esm.kt)("h2",{id:"spacing-values"},"Spacing Values"),(0,esm.kt)("p",null,"Our spacing values are based on a 4px unit, each step up in the spacing scale increases the size by 1 unit, or 4px. The steps of our spacing scale are named for the amount of spacing units they represent and follow the naming pattern ",(0,esm.kt)("inlineCode",{parentName:"p"},"u{number * spacingUnit}"),"."),(0,esm.kt)("p",null,"To calculate the size you can multiply the number of units by 4 to get the pixel value of a given step, so ",(0,esm.kt)("inlineCode",{parentName:"p"},"u2")," is ",(0,esm.kt)("inlineCode",{parentName:"p"},"2 * 4")," which is ",(0,esm.kt)("inlineCode",{parentName:"p"},"8px")," of spacing."),(0,esm.kt)(SpacingOptionsTable,{mdxType:"SpacingOptionsTable"}),(0,esm.kt)("h2",{id:"legacy-values"},"Legacy Values"),(0,esm.kt)("p",null,"Previously we used t-shirt sizing for our spacing scale names. This worked decently for a small set of values, but as our system has matured we needed a more flexible naming system to allow for more values and an easier way to quickly understand what size the named mapped to."),(0,esm.kt)("p",null,"As an example, in our legacy naming scheme ",(0,esm.kt)("inlineCode",{parentName:"p"},"medium")," represented ",(0,esm.kt)("inlineCode",{parentName:"p"},"16px")," and ",(0,esm.kt)("inlineCode",{parentName:"p"},"large")," represented ",(0,esm.kt)("inlineCode",{parentName:"p"},"20px"),", but you had to memorize that. In our new naming pattern all you need to memorize is that we use a ",(0,esm.kt)("inlineCode",{parentName:"p"},"4px")," unit of spacing and you can quickly calculate the size you are applying, so in our new pattern we have ",(0,esm.kt)("inlineCode",{parentName:"p"},"u4")," for ",(0,esm.kt)("inlineCode",{parentName:"p"},"16px")," (4 ","*"," 4) and ",(0,esm.kt)("inlineCode",{parentName:"p"},"u5")," for ",(0,esm.kt)("inlineCode",{parentName:"p"},"20px")," (4 ","*"," 5)."),(0,esm.kt)("p",null,"Below is a table of the legacy names mapped to our new naming pattern."),(0,esm.kt)(LegacySpaceTable,{mdxType:"LegacySpaceTable"}))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Docs/Foundations/Spacing",includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>(0,esm.kt)(MDXContent,null)};const spacing_stories=componentMeta,__namedExportsOrder=["__page"]}}]);