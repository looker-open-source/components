"use strict";(globalThis.webpackChunk_looker_storybook=globalThis.webpackChunk_looker_storybook||[]).push([[1183],{"./src/defaultArgTypes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>defaultArgTypes,q:()=>excludedProps});const defaultArgTypes={as:{table:{disable:!0}},forwardedAs:{table:{disable:!0}},ref:{table:{disable:!0}},theme:{table:{disable:!0}}},excludedProps=Object.keys(defaultArgTypes)},"../components/src/Form/Fields/FieldDate/stories/index.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>index_stories});__webpack_require__("../../node_modules/react/index.js");var esm=__webpack_require__("../../node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("../../node_modules/@storybook/addon-docs/dist/esm/index.js"),src=__webpack_require__("../components/src/index.ts"),Editor=__webpack_require__("./src/Editor/index.tsx"),defaultArgTypes=__webpack_require__("./src/defaultArgTypes.ts");try{Basic.displayName="Basic",Basic.__docgenInfo={description:"",displayName:"Basic",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../components/src/Form/Fields/FieldDate/stories/Basic.tsx#Basic"]={docgenInfo:Basic.__docgenInfo,name:"Basic",path:"../components/src/Form/Fields/FieldDate/stories/Basic.tsx#Basic"})}catch(__react_docgen_typescript_loader_error){}function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const layoutProps={};function MDXContent({components,...props}){return(0,esm.kt)("wrapper",_extends({},layoutProps,props,{components,mdxType:"MDXLayout"}),(0,esm.kt)(dist_esm.Meta,{component:src.FieldDate,title:"Docs/FieldDate",mdxType:"Meta"}),(0,esm.kt)("h1",{id:"fielddate"},"FieldDate"),(0,esm.kt)("p",null,"This component is composed of an ",(0,esm.kt)("inlineCode",{parentName:"p"},"InputDate")," and a ",(0,esm.kt)("inlineCode",{parentName:"p"},"Label"),"."),(0,esm.kt)(Editor.Editor,{code:"/**\n * Copyright (c) 2023 Google LLC\n * SPDX-License-Identifier: MIT\n */\n\nimport React from 'react'\nimport { ExtendComponentsThemeProvider } from '@looker/components-providers'\nimport { FieldDate } from '..'\n\nexport default function Basic(externalLabel = true) {\n  return (\n    <ExtendComponentsThemeProvider\n      themeCustomizations={{ defaults: { externalLabel } }}\n    >\n      <FieldDate defaultValue={new Date('July 25, 2020')} label={'Example'} />\n    </ExtendComponentsThemeProvider>\n  )\n}\n",mdxType:"Editor"}),(0,esm.kt)("h2",{id:"props"},"Props"),(0,esm.kt)(dist_esm.ArgsTable,{of:src.FieldDate,exclude:defaultArgTypes.q,mdxType:"ArgsTable"}))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Docs/FieldDate",component:src.FieldDate,includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>(0,esm.kt)(MDXContent,null)};const index_stories=componentMeta,__namedExportsOrder=["__page"]}}]);