"use strict";(globalThis.webpackChunk_looker_storybook=globalThis.webpackChunk_looker_storybook||[]).push([[7485],{"../components/src/Form/Fields/FieldSlider/stories/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Controlled:()=>Controlled,Disabled:()=>Disabled,FloatingSteps:()=>FloatingSteps,Steps:()=>Steps,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var defaultArgTypes=__webpack_require__("./src/defaultArgTypes.ts"),FieldSlider=__webpack_require__("../components/src/Form/Fields/FieldSlider/FieldSlider.tsx"),esm_extends=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("../../node_modules/react/index.js");function Basic(props){return react.createElement(FieldSlider.R,(0,esm_extends.Z)({label:"Basic",max:5,min:0},props))}try{Basic.displayName="Basic",Basic.__docgenInfo={description:"",displayName:"Basic",props:{"aria-labelledby":{defaultValue:null,description:"Identifies the element (or elements) that labels the current element.",name:"aria-labelledby",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:"Identifies the element (or elements) that describes the object.",name:"aria-describedby",required:!1,type:{name:"string"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"number"}},min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"number"}},step:{defaultValue:null,description:"",name:"step",required:!1,type:{name:"number"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | number"}},validationType:{defaultValue:null,description:"",name:"validationType",required:!1,type:{name:"enum",value:[{value:'"error"'}]}},"data-autofocus":{defaultValue:null,description:"",name:"data-autofocus",required:!1,type:{name:"string"}},"data-testid":{defaultValue:null,description:"",name:"data-testid",required:!1,type:{name:"string"}},fontFamily:{defaultValue:null,description:"",name:"fontFamily",required:!1,type:{name:"ResponsiveValue<FontFamilies, Required<Theme<TLengthStyledSystem>>>"}},fontSize:{defaultValue:null,description:"Use a @looker/components FontSizes to set font size",name:"fontSize",required:!1,type:{name:"ResponsiveValue<FontSizes, Required<Theme<TLengthStyledSystem>>>"}},fontWeight:{defaultValue:null,description:"Use a @looker/components FontWeights to set weight\n  normal, medium, semiBold, bold",name:"fontWeight",required:!1,type:{name:"ResponsiveValue<FontWeights, Required<Theme<TLengthStyledSystem>>>"}},lineHeight:{defaultValue:null,description:"Use a @looker/components LineHeights (xxsmall - xxxxlarge) to set line height",name:"lineHeight",required:!1,type:{name:"ResponsiveValue<FontSizes, Required<Theme<TLengthStyledSystem>>>"}},label:{defaultValue:null,description:"Defines the label for the field.\nI18n recommended: content that is user visible should be treated for i18n",name:"label",required:!1,type:{name:"ReactNode"}},inline:{defaultValue:{value:"false"},description:"Determines where to place the label in relation to the input.",name:"inline",required:!1,type:{name:"boolean"}},description:{defaultValue:null,description:"notes and more info added to the bottom of the field\nI18n recommended: content that is user visible should be treated for i18n",name:"description",required:!1,type:{name:"ReactNode"}},detail:{defaultValue:null,description:"notes and details added to the top right corner of the field\nI18n recommended: content that is user visible should be treated for i18n",name:"detail",required:!1,type:{name:"ReactNode"}},autoResize:{defaultValue:null,description:"Allows Field to adjust to the width of the input (InputText and Select)",name:"autoResize",required:!1,type:{name:"boolean"}},hideLabel:{defaultValue:{value:"false"},description:"Label will be visually hidden",name:"hideLabel",required:!1,type:{name:"boolean"}},ariaLabelOnly:{defaultValue:null,description:"Apply label using aria-label, there will be no visible label in the UI",name:"ariaLabelOnly",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../components/src/Form/Fields/FieldSlider/stories/Basic.tsx#Basic"]={docgenInfo:Basic.__docgenInfo,name:"Basic",path:"../components/src/Form/Fields/FieldSlider/stories/Basic.tsx#Basic"})}catch(__react_docgen_typescript_loader_error){}function Disabled(){return react.createElement(FieldSlider.R,{disabled:!0,label:"Disabled",max:5,min:0})}function Steps(){return react.createElement(FieldSlider.R,{label:"Step",max:1e3,min:0,step:100})}function FloatingSteps(){return react.createElement(FieldSlider.R,{label:"Floating step",max:3,min:0,step:.5,value:1.5})}function Controlled(){const[value,setValue]=(0,react.useState)(8),onChange=(cb=setValue,event=>{const target=event.target;cb(parseInt(target.value,10))});var cb;return react.createElement(FieldSlider.R,{label:"Controlled",description:"Min: 0, Max: 11",min:0,max:11,value,onChange})}const index_stories={argTypes:defaultArgTypes.W,component:FieldSlider.R,parameters:{storyshots:{disable:!0}},title:"Stories/FieldSlider"},__namedExportsOrder=["Basic","Disabled","Steps","FloatingSteps","Controlled"];try{indexstories.displayName="indexstories",indexstories.__docgenInfo={description:"",displayName:"indexstories",props:{"aria-labelledby":{defaultValue:null,description:"Identifies the element (or elements) that labels the current element.",name:"aria-labelledby",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:"Identifies the element (or elements) that describes the object.",name:"aria-describedby",required:!1,type:{name:"string"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"number"}},min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"number"}},step:{defaultValue:null,description:"",name:"step",required:!1,type:{name:"number"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | number"}},validationType:{defaultValue:null,description:"",name:"validationType",required:!1,type:{name:"enum",value:[{value:'"error"'}]}},"data-autofocus":{defaultValue:null,description:"",name:"data-autofocus",required:!1,type:{name:"string"}},"data-testid":{defaultValue:null,description:"",name:"data-testid",required:!1,type:{name:"string"}},fontFamily:{defaultValue:null,description:"",name:"fontFamily",required:!1,type:{name:"ResponsiveValue<FontFamilies, Required<Theme<TLengthStyledSystem>>>"}},fontSize:{defaultValue:null,description:"Use a @looker/components FontSizes to set font size",name:"fontSize",required:!1,type:{name:"ResponsiveValue<FontSizes, Required<Theme<TLengthStyledSystem>>>"}},fontWeight:{defaultValue:null,description:"Use a @looker/components FontWeights to set weight\n  normal, medium, semiBold, bold",name:"fontWeight",required:!1,type:{name:"ResponsiveValue<FontWeights, Required<Theme<TLengthStyledSystem>>>"}},lineHeight:{defaultValue:null,description:"Use a @looker/components LineHeights (xxsmall - xxxxlarge) to set line height",name:"lineHeight",required:!1,type:{name:"ResponsiveValue<FontSizes, Required<Theme<TLengthStyledSystem>>>"}},label:{defaultValue:null,description:"Defines the label for the field.\nI18n recommended: content that is user visible should be treated for i18n",name:"label",required:!1,type:{name:"ReactNode"}},inline:{defaultValue:{value:"false"},description:"Determines where to place the label in relation to the input.",name:"inline",required:!1,type:{name:"boolean"}},description:{defaultValue:null,description:"notes and more info added to the bottom of the field\nI18n recommended: content that is user visible should be treated for i18n",name:"description",required:!1,type:{name:"ReactNode"}},detail:{defaultValue:null,description:"notes and details added to the top right corner of the field\nI18n recommended: content that is user visible should be treated for i18n",name:"detail",required:!1,type:{name:"ReactNode"}},autoResize:{defaultValue:null,description:"Allows Field to adjust to the width of the input (InputText and Select)",name:"autoResize",required:!1,type:{name:"boolean"}},hideLabel:{defaultValue:{value:"false"},description:"Label will be visually hidden",name:"hideLabel",required:!1,type:{name:"boolean"}},ariaLabelOnly:{defaultValue:null,description:"Apply label using aria-label, there will be no visible label in the UI",name:"ariaLabelOnly",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../components/src/Form/Fields/FieldSlider/stories/index.stories.tsx#indexstories"]={docgenInfo:indexstories.__docgenInfo,name:"indexstories",path:"../components/src/Form/Fields/FieldSlider/stories/index.stories.tsx#indexstories"})}catch(__react_docgen_typescript_loader_error){}},"./src/defaultArgTypes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>defaultArgTypes,q:()=>excludedProps});const defaultArgTypes={as:{table:{disable:!0}},forwardedAs:{table:{disable:!0}},ref:{table:{disable:!0}},theme:{table:{disable:!0}}},excludedProps=Object.keys(defaultArgTypes)}}]);