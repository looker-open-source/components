"use strict";(globalThis.webpackChunk_looker_storybook=globalThis.webpackChunk_looker_storybook||[]).push([[2835],{"./src/defaultArgTypes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>defaultArgTypes,q:()=>excludedProps});const defaultArgTypes={as:{table:{disable:!0}},forwardedAs:{table:{disable:!0}},ref:{table:{disable:!0}},theme:{table:{disable:!0}}},excludedProps=Object.keys(defaultArgTypes)},"../components/src/Spinner/stories/index.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>index_stories});__webpack_require__("../../node_modules/react/index.js");var esm=__webpack_require__("../../node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("../../node_modules/@storybook/addon-docs/dist/esm/index.js"),Spinner=__webpack_require__("../components/src/Spinner/Spinner.tsx"),Editor=__webpack_require__("./src/Editor/index.tsx"),defaultArgTypes=__webpack_require__("./src/defaultArgTypes.ts");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const layoutProps={};function MDXContent({components,...props}){return(0,esm.kt)("wrapper",_extends({},layoutProps,props,{components,mdxType:"MDXLayout"}),(0,esm.kt)(dist_esm.Meta,{component:Spinner.$,title:"Docs/Spinner",mdxType:"Meta"}),(0,esm.kt)("h1",{id:"spinner-default"},"Spinner Default"),(0,esm.kt)(Editor.Editor,{code:"/**\n * Copyright (c) 2023 Google LLC\n * SPDX-License-Identifier: MIT\n */\nimport React from 'react'\nimport { Spinner } from '../Spinner'\n\nexport default function Default() {\n  return <Spinner />\n}\n",mdxType:"Editor"}),(0,esm.kt)("h2",{id:"set-color"},"Set color"),(0,esm.kt)(Editor.Editor,{code:"/**\n * Copyright (c) 2023 Google LLC\n * SPDX-License-Identifier: MIT\n */\nimport React from 'react'\nimport { Spinner } from '../Spinner'\n\nexport default function Color() {\n  return <Spinner color=\"salmon\" />\n}\n",mdxType:"Editor"}),(0,esm.kt)("h2",{id:"set-size"},"Set size"),(0,esm.kt)(Editor.Editor,{code:"/**\n * Copyright (c) 2023 Google LLC\n * SPDX-License-Identifier: MIT\n */\nimport React from 'react'\nimport { Spinner } from '../Spinner'\n\nexport default function Size() {\n  return <Spinner size={80} />\n}\n",mdxType:"Editor"}),(0,esm.kt)("h2",{id:"set-speed"},"Set speed"),(0,esm.kt)(Editor.Editor,{code:"/**\n * Copyright (c) 2023 Google LLC\n * SPDX-License-Identifier: MIT\n */\nimport React from 'react'\nimport { Spinner } from '../Spinner'\n\nexport default function Speed() {\n  return <Spinner speed={2000} />\n}\n",mdxType:"Editor"}),(0,esm.kt)("h2",{id:"set-markers"},"Set markers"),(0,esm.kt)(Editor.Editor,{code:"/**\n * Copyright (c) 2023 Google LLC\n * SPDX-License-Identifier: MIT\n */\nimport React from 'react'\nimport { Spinner } from '../Spinner'\n\nexport default function Markers() {\n  return <Spinner markers={20} markerRadius={50} />\n}\n",mdxType:"Editor"}),(0,esm.kt)(dist_esm.ArgsTable,{of:Spinner.$,exclude:defaultArgTypes.q,mdxType:"ArgsTable"}))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Docs/Spinner",component:Spinner.$,includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>(0,esm.kt)(MDXContent,null)};const index_stories=componentMeta,__namedExportsOrder=["__page"]}}]);