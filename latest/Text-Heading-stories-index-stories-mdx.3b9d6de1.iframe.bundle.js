"use strict";(globalThis.webpackChunk_looker_storybook=globalThis.webpackChunk_looker_storybook||[]).push([[589],{"./src/defaultArgTypes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>defaultArgTypes,q:()=>excludedProps});const defaultArgTypes={as:{table:{disable:!0}},forwardedAs:{table:{disable:!0}},ref:{table:{disable:!0}},theme:{table:{disable:!0}}},excludedProps=Object.keys(defaultArgTypes)},"../components/src/Text/Heading/stories/index.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>index_stories});__webpack_require__("../../node_modules/react/index.js");var esm=__webpack_require__("../../node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("../../node_modules/@storybook/addon-docs/dist/esm/index.js"),Heading=__webpack_require__("../components/src/Text/Heading/Heading.tsx"),Editor=__webpack_require__("./src/Editor/index.tsx"),defaultArgTypes=__webpack_require__("./src/defaultArgTypes.ts");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const layoutProps={};function MDXContent({components,...props}){return(0,esm.kt)("wrapper",_extends({},layoutProps,props,{components,mdxType:"MDXLayout"}),(0,esm.kt)(dist_esm.Meta,{component:Heading.X,title:"Docs/Heading",mdxType:"Meta"}),(0,esm.kt)("h1",{id:"heading"},"Heading"),(0,esm.kt)("p",null,"The ",(0,esm.kt)("inlineCode",{parentName:"p"},"<Heading />")," component is used to render a HTML ",(0,esm.kt)("inlineCode",{parentName:"p"},"<h1>")," - ",(0,esm.kt)("inlineCode",{parentName:"p"},"<h6>")," element, by default it will render a ",(0,esm.kt)("inlineCode",{parentName:"p"},"<h2>")," element"),(0,esm.kt)(Editor.Editor,{code:"/**\n * Copyright (c) 2023 Google LLC\n * SPDX-License-Identifier: MIT\n */\nimport React from 'react'\nimport { Heading } from '../Heading'\n\nexport default function Default() {\n  return <Heading>Heading Text</Heading>\n}\n",mdxType:"Editor"}),(0,esm.kt)("h2",{id:"heading-levels"},"Heading Levels"),(0,esm.kt)("p",null,"To use a different HTML heading element, the ",(0,esm.kt)("inlineCode",{parentName:"p"},"<Heading />")," component accepts a ",(0,esm.kt)("inlineCode",{parentName:"p"},"as")," attribute that corresponds to the ",(0,esm.kt)("inlineCode",{parentName:"p"},"<h1>")," - ",(0,esm.kt)("inlineCode",{parentName:"p"},"<h6>")," elements. The font-size of each heading element maps to the ",(0,esm.kt)("a",{parentName:"p",href:"/#!/Typography"},"type ramp")),(0,esm.kt)(Editor.Editor,{code:"/**\n * Copyright (c) 2023 Google LLC\n * SPDX-License-Identifier: MIT\n */\nimport React from 'react'\nimport { Heading } from '../Heading'\n\nexport default function Level() {\n  return <Heading as=\"h4\">Heading Text</Heading>\n}\n",mdxType:"Editor"}),(0,esm.kt)("h2",{id:"heading-sizes"},"Heading Sizes"),(0,esm.kt)("p",null,"When creating accessible pages it is important that headings create a ",(0,esm.kt)("a",{parentName:"p",href:"https://bitsofco.de/using-heading-elements-to-create-a-document-outline/",target:"_blank",rel:"nofollow noopener noreferrer"},"logical document outline"),", but sometimes the font-size of the heading element doesn't match to the needs of the design or layout. Composing the ",(0,esm.kt)("inlineCode",{parentName:"p"},"is")," and the ",(0,esm.kt)("inlineCode",{parentName:"p"},"fontSize")," attributes lets you choose the semantically correct level heading and the desired size. The available size values come from the ",(0,esm.kt)("a",{parentName:"p",href:"/#!/Typography"},"type ramp"),"."),(0,esm.kt)(Editor.Editor,{code:"/**\n * Copyright (c) 2023 Google LLC\n * SPDX-License-Identifier: MIT\n */\nimport React from 'react'\nimport { Heading } from '../Heading'\n\nexport default function FontSize() {\n  return <Heading fontSize=\"large\">Heading Text</Heading>\n}\n",mdxType:"Editor"}),(0,esm.kt)("hr",null),(0,esm.kt)("h2",{id:"weight-and-transform"},"Weight and Transform"),(0,esm.kt)("p",null,"Another common pattern for headings is to control the font-weight and the text-transform properties. The ",(0,esm.kt)("inlineCode",{parentName:"p"},"<Heading />")," component allows you to adjust those with the ",(0,esm.kt)("inlineCode",{parentName:"p"},"fontWeight")," and ",(0,esm.kt)("inlineCode",{parentName:"p"},"textTransform")," attributes."),(0,esm.kt)(Editor.Editor,{code:"/**\n * Copyright (c) 2023 Google LLC\n * SPDX-License-Identifier: MIT\n */\nimport React from 'react'\nimport { Heading } from '../Heading'\n\nexport default function FontWeight() {\n  return <Heading fontWeight=\"bold\">Heading Text</Heading>\n}\n",mdxType:"Editor"}),(0,esm.kt)(Editor.Editor,{code:"/**\n * Copyright (c) 2023 Google LLC\n * SPDX-License-Identifier: MIT\n */\nimport React from 'react'\nimport { Heading } from '../Heading'\n\nexport default function TextTransform() {\n  return <Heading textTransform=\"uppercase\">Heading Text</Heading>\n}\n",mdxType:"Editor"}),(0,esm.kt)("hr",null),(0,esm.kt)("h2",{id:"heading-alignment"},"Heading alignment"),(0,esm.kt)("p",null,"The ",(0,esm.kt)("inlineCode",{parentName:"p"},"align")," property allows you to adjust the ",(0,esm.kt)("inlineCode",{parentName:"p"},"text-align")," property of your ",(0,esm.kt)("inlineCode",{parentName:"p"},"<Heading />")," component. This is useful if you need to center or right align the text."),(0,esm.kt)(Editor.Editor,{code:'/**\n * Copyright (c) 2023 Google LLC\n * SPDX-License-Identifier: MIT\n */\nimport React from \'react\'\nimport { Heading } from \'../Heading\'\n\nexport default function TextAlign() {\n  return (\n    <>\n      <Heading textAlign="left">◀️ Align left (Default) </Heading>\n      <Heading textAlign="center">◀️ Align Center ▶️</Heading>\n      <Heading textAlign="right">Align Right ▶️</Heading>\n    </>\n  )\n}\n',mdxType:"Editor"}),(0,esm.kt)("h2",{id:"color"},"Color"),(0,esm.kt)("p",null,"Heading supports a ",(0,esm.kt)("inlineCode",{parentName:"p"},"color")," prop that supports the full theme color object. Common uses are shown in the example below:"),(0,esm.kt)(Editor.Editor,{code:"/**\n * Copyright (c) 2023 Google LLC\n * SPDX-License-Identifier: MIT\n */\nimport React from 'react'\nimport { Heading } from '../Heading'\n\nexport default function Color() {\n  return <Heading color=\"text1\">Heading Text</Heading>\n}\n",mdxType:"Editor"}),(0,esm.kt)(dist_esm.ArgsTable,{of:Heading.X,exclude:defaultArgTypes.q,mdxType:"ArgsTable"}))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Docs/Heading",component:Heading.X,includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>(0,esm.kt)(MDXContent,null)};const index_stories=componentMeta,__namedExportsOrder=["__page"]}}]);