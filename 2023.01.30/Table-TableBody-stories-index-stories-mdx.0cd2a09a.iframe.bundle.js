"use strict";(globalThis.webpackChunk_looker_storybook=globalThis.webpackChunk_looker_storybook||[]).push([[2858],{"./src/defaultArgTypes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>defaultArgTypes,q:()=>excludedProps});const defaultArgTypes={as:{table:{disable:!0}},forwardedAs:{table:{disable:!0}},ref:{table:{disable:!0}},theme:{table:{disable:!0}}},excludedProps=Object.keys(defaultArgTypes)},"../components/src/Table/TableBody/stories/index.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>index_stories});__webpack_require__("../../node_modules/react/index.js");var esm=__webpack_require__("../../node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("../../node_modules/@storybook/addon-docs/dist/esm/index.js"),TableBody=__webpack_require__("../components/src/Table/TableBody/index.tsx");var defaultArgTypes=__webpack_require__("./src/defaultArgTypes.ts");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const makeShortcode=name=>function MDXDefaultShortcode(props){return console.warn("Component "+name+" was not imported, exported, or provided by MDXProvider as global scope"),(0,esm.kt)("div",props)},Editor=makeShortcode("Editor"),ArgsTable=makeShortcode("ArgsTable"),layoutProps={};function MDXContent({components,...props}){return(0,esm.kt)("wrapper",_extends({},layoutProps,props,{components,mdxType:"MDXLayout"}),(0,esm.kt)(dist_esm.Meta,{component:TableBody.R,title:"Docs/TableBody",mdxType:"Meta"}),(0,esm.kt)("h1",{id:"tablebody"},"TableBody"),(0,esm.kt)("p",null,"This component is used to define the body of the table and holds the data for the table. The ",(0,esm.kt)("inlineCode",{parentName:"p"},"<TableBody>")," can have multiple ",(0,esm.kt)("inlineCode",{parentName:"p"},"<TableRow>")," tags for each row of data, and a ",(0,esm.kt)("inlineCode",{parentName:"p"},"<TableDataCell>")," tag for each cell of data to be semantically correct."),(0,esm.kt)(Editor,{code:"/**\n * Copyright (c) 2023 Google LLC\n * SPDX-License-Identifier: MIT\n */\nimport React from 'react'\nimport { TableRow } from '../../TableRow'\nimport { TableBody } from '../../TableBody'\nimport { TableDataCell } from '../../TableDataCell'\n\nexport default function Basic() {\n  return (\n    <TableBody>\n      <TableRow>\n        <TableDataCell>Cell 1</TableDataCell>\n        <TableDataCell>Cell 2</TableDataCell>\n      </TableRow>\n    </TableBody>\n  )\n}\n",mdxType:"Editor"}),(0,esm.kt)(ArgsTable,{of:TableBody.R,exclude:defaultArgTypes.q,mdxType:"ArgsTable"}))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Docs/TableBody",component:TableBody.R,includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>(0,esm.kt)(MDXContent,null)};const index_stories=componentMeta,__namedExportsOrder=["__page"]}}]);