"use strict";(globalThis.webpackChunk_looker_storybook=globalThis.webpackChunk_looker_storybook||[]).push([[2181],{"./src/defaultArgTypes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>defaultArgTypes,q:()=>excludedProps});const defaultArgTypes={as:{table:{disable:!0}},forwardedAs:{table:{disable:!0}},ref:{table:{disable:!0}},theme:{table:{disable:!0}}},excludedProps=Object.keys(defaultArgTypes)},"../components/src/Popover/Layout/PopoverContent/stories/index.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>index_stories});__webpack_require__("../../node_modules/react/index.js");var esm=__webpack_require__("../../node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("../../node_modules/@storybook/addon-docs/dist/esm/index.js"),PopoverContent=__webpack_require__("../components/src/Popover/Layout/PopoverContent/PopoverContent.tsx"),MessageBar=__webpack_require__("../components/src/MessageBar/MessageBar.tsx"),Editor=__webpack_require__("./src/Editor/index.tsx"),defaultArgTypes=__webpack_require__("./src/defaultArgTypes.ts");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const layoutProps={};function MDXContent({components,...props}){return(0,esm.kt)("wrapper",_extends({},layoutProps,props,{components,mdxType:"MDXLayout"}),(0,esm.kt)(dist_esm.Meta,{component:PopoverContent.y,title:"Docs/PopoverContent",mdxType:"Meta"}),(0,esm.kt)("h1",{id:"popovercontent"},"PopoverContent"),(0,esm.kt)("p",null,"Using the ",(0,esm.kt)("inlineCode",{parentName:"p"},"PopoverContent")," component gives your content consistent spacing. It also manages overflow if the content is taller than the viewport."),(0,esm.kt)(MessageBar.c,{noActions:!0,intent:"warn",mdxType:"MessageBar"},"When possible, use `PopoverLayout` instead of using `PopoverContent` directly."),(0,esm.kt)(Editor.Editor,{code:"/**\n * Copyright (c) 2023 Google LLC\n * SPDX-License-Identifier: MIT\n */\n\nimport React from 'react'\nimport { PopoverContent } from '../..'\n\nexport default function Basic() {\n  return <PopoverContent>We the People of the United States, </PopoverContent>\n}\n",mdxType:"Editor"}),(0,esm.kt)("p",null,"If content overflows the component's height an visual indicator of content that extends\nbeyond the visible edges is added (border on top and shadow on the bottom)."),(0,esm.kt)(Editor.Editor,{code:'/**\n * Copyright (c) 2023 Google LLC\n * SPDX-License-Identifier: MIT\n */\n\nimport React from \'react\'\nimport { Box, Paragraph } from \'@looker/components\'\nimport { PopoverContent } from \'../..\'\n\nexport default function Scroll() {\n  return (\n    <Box height="10rem" display="flex" bg="white" p="u5">\n      <PopoverContent>\n        <Paragraph>Scroll down here...</Paragraph>\n        <Box height="6rem" bg="rebeccapurple" />\n      </PopoverContent>\n    </Box>\n  )\n}\n',mdxType:"Editor"}),(0,esm.kt)(dist_esm.ArgsTable,{of:PopoverContent.y,exclude:defaultArgTypes.q,mdxType:"ArgsTable"}))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Docs/PopoverContent",component:PopoverContent.y,includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>(0,esm.kt)(MDXContent,null)};const index_stories=componentMeta,__namedExportsOrder=["__page"]}}]);