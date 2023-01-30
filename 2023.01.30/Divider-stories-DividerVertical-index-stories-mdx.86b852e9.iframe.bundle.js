"use strict";(globalThis.webpackChunk_looker_storybook=globalThis.webpackChunk_looker_storybook||[]).push([[7778],{"./src/defaultArgTypes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>defaultArgTypes,q:()=>excludedProps});const defaultArgTypes={as:{table:{disable:!0}},forwardedAs:{table:{disable:!0}},ref:{table:{disable:!0}},theme:{table:{disable:!0}}},excludedProps=Object.keys(defaultArgTypes)},"../components/src/Divider/stories/DividerVertical/index.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>index_stories});__webpack_require__("../../node_modules/react/index.js");var esm=__webpack_require__("../../node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("../../node_modules/@storybook/addon-docs/dist/esm/index.js"),DividerVertical=__webpack_require__("../components/src/Divider/DividerVertical.tsx"),Editor=__webpack_require__("./src/Editor/index.tsx"),defaultArgTypes=__webpack_require__("./src/defaultArgTypes.ts");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const layoutProps={};function MDXContent({components,...props}){return(0,esm.kt)("wrapper",_extends({},layoutProps,props,{components,mdxType:"MDXLayout"}),(0,esm.kt)(dist_esm.Meta,{component:DividerVertical.x,title:"Docs/DividerVertical",mdxType:"Meta"}),(0,esm.kt)("h1",{id:"dividervertical"},"DividerVertical"),(0,esm.kt)("p",null,(0,esm.kt)("inlineCode",{parentName:"p"},"<DividerVertical />")," has a default height of 1rem. That can be changed by using the prop ",(0,esm.kt)("inlineCode",{parentName:"p"},"height")," or ",(0,esm.kt)("inlineCode",{parentName:"p"},"stretch"),". Do not use both props."),(0,esm.kt)(Editor.Editor,{code:'/**\n * Copyright (c) 2023 Google LLC\n * SPDX-License-Identifier: MIT\n */\nimport React from \'react\'\nimport * as MaterialIcons from \'@styled-icons/material\'\nimport { AvatarIcon, DividerVertical, SpaceVertical, Span } from \'../../..\'\n\nexport default function Basic() {\n  return (\n    <>\n      <SpaceVertical align="center">\n        <AvatarIcon icon={<MaterialIcons.Schedule />} />\n        <DividerVertical />\n        <Span>2:45PM</Span>\n      </SpaceVertical>\n      <SpaceVertical align="center">\n        <AvatarIcon icon={<MaterialIcons.Schedule />} />\n        <DividerVertical height="3rem" />\n        <Span>2:45PM</Span>\n      </SpaceVertical>\n      <SpaceVertical align="center">\n        <AvatarIcon icon={<MaterialIcons.Schedule />} size="large" />\n        <DividerVertical height="100px" />\n        <Span pl="u5" fontSize="xxxxlarge">\n          2:45PM\n        </Span>\n      </SpaceVertical>\n    </>\n  )\n}\n',mdxType:"Editor"}),(0,esm.kt)("h2",{id:"props"},"Props"),(0,esm.kt)(dist_esm.ArgsTable,{of:DividerVertical.x,exclude:defaultArgTypes.q,mdxType:"ArgsTable"}))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Docs/DividerVertical",component:DividerVertical.x,includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>(0,esm.kt)(MDXContent,null)};const index_stories=componentMeta,__namedExportsOrder=["__page"]}}]);