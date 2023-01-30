"use strict";(globalThis.webpackChunk_looker_storybook=globalThis.webpackChunk_looker_storybook||[]).push([[6627],{"./src/defaultArgTypes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>defaultArgTypes,q:()=>excludedProps});const defaultArgTypes={as:{table:{disable:!0}},forwardedAs:{table:{disable:!0}},ref:{table:{disable:!0}},theme:{table:{disable:!0}}},excludedProps=Object.keys(defaultArgTypes)},"../components/src/Text/Text/stories/index.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>index_stories});__webpack_require__("../../node_modules/react/index.js");var esm=__webpack_require__("../../node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("../../node_modules/@storybook/addon-docs/dist/esm/index.js"),Text=__webpack_require__("../components/src/Text/Text/Text.tsx"),Editor=__webpack_require__("./src/Editor/index.tsx"),defaultArgTypes=__webpack_require__("./src/defaultArgTypes.ts"),MessageBar=__webpack_require__("../components/src/MessageBar/MessageBar.tsx");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const layoutProps={};function MDXContent({components,...props}){return(0,esm.kt)("wrapper",_extends({},layoutProps,props,{components,mdxType:"MDXLayout"}),(0,esm.kt)(dist_esm.Meta,{component:Text.x,title:"Docs/Text",mdxType:"Meta"}),(0,esm.kt)(MessageBar.c,{intent:"warn",noActions:!0,mdxType:"MessageBar"},"NOTE: This component has been deprecated. Use `Span` component instead for a more predictable behavior"),(0,esm.kt)("p",null,"The Text component outputs a ",(0,esm.kt)("inlineCode",{parentName:"p"},"span")," HTML element with specified props."),(0,esm.kt)(Editor.Editor,{code:"/**\n * Copyright (c) 2023 Google LLC\n * SPDX-License-Identifier: MIT\n */\nimport React from 'react'\nimport { Text } from '../Text'\n\nexport default function Basic() {\n  return <Text>Basic Text Example</Text>\n}\n",mdxType:"Editor"}),(0,esm.kt)("p",null,'This component has a historic "quirk" where the ',(0,esm.kt)("inlineCode",{parentName:"p"},"font-size"),' defaults to medium rather\nthan simply inheriting it\'s size from the parent DOM element (what one might expect of a\n"normal" inline element. ',(0,esm.kt)("inlineCode",{parentName:"p"},"line-height")," will match the ",(0,esm.kt)("inlineCode",{parentName:"p"},"font-size")," (",(0,esm.kt)("inlineCode",{parentName:"p"},"medium")," unless otherwise specified) as well."),(0,esm.kt)(dist_esm.ArgsTable,{of:Text.x,exclude:defaultArgTypes.q,mdxType:"ArgsTable"}))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Docs/Text",component:Text.x,includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>(0,esm.kt)(MDXContent,null)};const index_stories=componentMeta,__namedExportsOrder=["__page"]}}]);