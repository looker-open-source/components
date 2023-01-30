"use strict";(globalThis.webpackChunk_looker_storybook=globalThis.webpackChunk_looker_storybook||[]).push([[8938],{"./src/defaultArgTypes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>defaultArgTypes,q:()=>excludedProps});const defaultArgTypes={as:{table:{disable:!0}},forwardedAs:{table:{disable:!0}},ref:{table:{disable:!0}},theme:{table:{disable:!0}}},excludedProps=Object.keys(defaultArgTypes)},"../components/src/Form/Fields/Field/stories/index.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>index_stories});__webpack_require__("../../node_modules/react/index.js");var esm=__webpack_require__("../../node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("../../node_modules/@storybook/addon-docs/dist/esm/index.js"),src=__webpack_require__("../components/src/index.ts"),Editor=__webpack_require__("./src/Editor/index.tsx"),defaultArgTypes=__webpack_require__("./src/defaultArgTypes.ts");try{Basic.displayName="Basic",Basic.__docgenInfo={description:"",displayName:"Basic",props:{id:{defaultValue:null,description:"Id of the input element to match a label to.",name:"id",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Defines the label for the field.\nI18n recommended: content that is user visible should be treated for i18n",name:"label",required:!1,type:{name:"ReactNode"}},required:{defaultValue:null,description:"Whether or not the field should display a `*` denoting it is required.",name:"required",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},autoResize:{defaultValue:null,description:"Allows Field to adjust to the width of the input (InputText and Select)",name:"autoResize",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},detail:{defaultValue:null,description:"notes and details added to the top right corner of the field\nI18n recommended: content that is user visible should be treated for i18n",name:"detail",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"notes and more info added to the bottom of the field\nI18n recommended: content that is user visible should be treated for i18n",name:"description",required:!1,type:{name:"ReactNode"}},inline:{defaultValue:{value:"false"},description:"Determines where to place the label in relation to the input.",name:"inline",required:!1,type:{name:"boolean"}},validationMessage:{defaultValue:null,description:"Holds the type of validation (error, warning, etc.) and corresponding message.",name:"validationMessage",required:!1,type:{name:"ValidationMessageProps"}},hideLabel:{defaultValue:{value:"false"},description:"Label will be visually hidden",name:"hideLabel",required:!1,type:{name:"boolean"}},ariaLabelOnly:{defaultValue:null,description:"Apply label using aria-label, there will be no visible label in the UI",name:"ariaLabelOnly",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../components/src/Form/Fields/Field/stories/Basic.tsx#Basic"]={docgenInfo:Basic.__docgenInfo,name:"Basic",path:"../components/src/Form/Fields/Field/stories/Basic.tsx#Basic"})}catch(__react_docgen_typescript_loader_error){}function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const layoutProps={};function MDXContent({components,...props}){return(0,esm.kt)("wrapper",_extends({},layoutProps,props,{components,mdxType:"MDXLayout"}),(0,esm.kt)(dist_esm.Meta,{component:src.Field,title:"Docs/Field",mdxType:"Meta"}),(0,esm.kt)("h1",{id:"field"},"Field"),(0,esm.kt)("p",null,(0,esm.kt)("inlineCode",{parentName:"p"},"Field")," is the container used in all ",(0,esm.kt)("inlineCode",{parentName:"p"},"Field"),"- components to provide information,\naccessibity, and consistent layout and design to all inputs."),(0,esm.kt)("p",null,"Below is an example of how you might compose your own field."),(0,esm.kt)(Editor.Editor,{code:"/**\n * Copyright (c) 2023 Google LLC\n * SPDX-License-Identifier: MIT\n */\n\nimport React from 'react'\nimport { Field } from '../../Field'\nimport { InputText } from '../../../Inputs'\nimport { Space } from '../../../../Layout'\nimport type { FieldProps } from '../../Field'\nexport default function Basic(props: FieldProps) {\n  const id = 'coolField'\n  return (\n    <Field\n      id={id}\n      label=\"A combo field\"\n      description=\"Please fill out both inputs\"\n      detail=\"with 2 inputs\"\n      validationMessage={{ message: 'An error message', type: 'error' }}\n      width={300}\n      {...props}\n    >\n      <Space gap=\"u3\">\n        <InputText id={id} aria-describedby={`${id}-describedby`} width={100} />\n        <InputText\n          id={id}\n          aria-describedby={`${id}-describedby`}\n          validationType={'error'}\n        />\n      </Space>\n    </Field>\n  )\n}\n",mdxType:"Editor"}),(0,esm.kt)("h2",{id:"props"},"Props"),(0,esm.kt)(dist_esm.ArgsTable,{of:src.Field,exclude:defaultArgTypes.q,mdxType:"ArgsTable"}))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Docs/Field",component:src.Field,includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>(0,esm.kt)(MDXContent,null)};const index_stories=componentMeta,__namedExportsOrder=["__page"]}}]);