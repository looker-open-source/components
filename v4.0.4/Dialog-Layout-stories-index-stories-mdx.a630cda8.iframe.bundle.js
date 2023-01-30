"use strict";(globalThis.webpackChunk_looker_storybook=globalThis.webpackChunk_looker_storybook||[]).push([[1544],{"./src/defaultArgTypes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>defaultArgTypes,q:()=>excludedProps});const defaultArgTypes={as:{table:{disable:!0}},forwardedAs:{table:{disable:!0}},ref:{table:{disable:!0}},theme:{table:{disable:!0}}},excludedProps=Object.keys(defaultArgTypes)},"../components/src/Dialog/Layout/stories/index.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>index_stories});__webpack_require__("../../node_modules/react/index.js");var esm=__webpack_require__("../../node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("../../node_modules/@storybook/addon-docs/dist/esm/index.js"),DialogLayout=__webpack_require__("../components/src/Dialog/Layout/DialogLayout.tsx"),Editor=__webpack_require__("./src/Editor/index.tsx"),defaultArgTypes=__webpack_require__("./src/defaultArgTypes.ts");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const layoutProps={};function MDXContent({components,...props}){return(0,esm.kt)("wrapper",_extends({},layoutProps,props,{components,mdxType:"MDXLayout"}),(0,esm.kt)(dist_esm.Meta,{component:DialogLayout.w,title:"Docs/Dialog/Layout/DialogLayout",mdxType:"Meta"}),(0,esm.kt)("h1",{id:"dialoglayout"},"DialogLayout"),(0,esm.kt)("p",null,"The ",(0,esm.kt)("inlineCode",{parentName:"p"},"DialogLayout")," component manages the dialog layout components below to easily meet design-system expectations."),(0,esm.kt)("p",null,"This component composes ",(0,esm.kt)("inlineCode",{parentName:"p"},"DialogHeader"),", ",(0,esm.kt)("inlineCode",{parentName:"p"},"DialogContent")," and ",(0,esm.kt)("inlineCode",{parentName:"p"},"DialogFooter")," as needed."),(0,esm.kt)(Editor.Editor,{code:'/*\n\n MIT License\n\n Copyright (c) 2022 Looker Data Sciences, Inc.\n\n Permission is hereby granted, free of charge, to any person obtaining a copy\n of this software and associated documentation files (the "Software"), to deal\n in the Software without restriction, including without limitation the rights\n to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n copies of the Software, and to permit persons to whom the Software is\n furnished to do so, subject to the following conditions:\n\n The above copyright notice and this permission notice shall be included in all\n copies or substantial portions of the Software.\n\n THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n SOFTWARE.\n\n */\n\nimport React from \'react\'\nimport { Box, DialogLayout } from \'../../..\'\n\nexport default function Basic() {\n  return (\n    <Box bg="ui1">\n      <DialogLayout>\n        Lorem Ipsum is simply dummy text of the printing and typesetting\n        industry. Lorem Ipsum has been the industry\'s standard dummy text ever\n        since the 1500s, when an unknown printer took a galley of type and\n        scrambled it to make a type specimen book.\n      </DialogLayout>\n    </Box>\n  )\n}\n',mdxType:"Editor"}),(0,esm.kt)("p",null,"In cases where a ",(0,esm.kt)("inlineCode",{parentName:"p"},"footer")," or ",(0,esm.kt)("inlineCode",{parentName:"p"},"header")," is not specified the ",(0,esm.kt)("inlineCode",{parentName:"p"},"DialogLayout")," will automatically manage applying padding and close controls appropriately."),(0,esm.kt)(dist_esm.ArgsTable,{of:DialogLayout.w,exclude:defaultArgTypes.q,mdxType:"ArgsTable"}))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Docs/Dialog/Layout/DialogLayout",component:DialogLayout.w,includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>(0,esm.kt)(MDXContent,null)};const index_stories=componentMeta,__namedExportsOrder=["__page"]}}]);