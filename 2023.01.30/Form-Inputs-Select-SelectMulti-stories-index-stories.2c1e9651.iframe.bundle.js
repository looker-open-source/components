"use strict";(globalThis.webpackChunk_looker_storybook=globalThis.webpackChunk_looker_storybook||[]).push([[687],{"../components/src/Form/Inputs/Select/SelectMulti/stories/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,ClearIconLabel:()=>ClearIconLabel,CloseOnSelect:()=>CloseOnSelect,FreeInput:()=>FreeInput_CloseOnSelect,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var defaultArgTypes=__webpack_require__("./src/defaultArgTypes.ts"),SelectMulti=__webpack_require__("../components/src/Form/Inputs/Select/SelectMulti/SelectMulti.tsx"),esm_extends=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("../../node_modules/react/index.js");function Basic(props){return react.createElement(SelectMulti._,(0,esm_extends.Z)({options:[{value:"Cheddar"},{value:"Gouda"},{value:"Swiss"},{value:"Feta"},{value:"Mascarpone"},{value:"Brie"},{value:"Mozzarella"},{value:"Cotija"},{value:"Pepperjack"}],placeholder:"Cheeses",flex:1},props))}try{Basic.displayName="Basic",Basic.__docgenInfo={description:"",displayName:"Basic",props:{closeOnSelect:{defaultValue:{value:"false"},description:"Should the list close after an option is selected",name:"closeOnSelect",required:!1,type:{name:"boolean"}},defaultValues:{defaultValue:null,description:"Value of the initial option",name:"defaultValues",required:!1,type:{name:"string[]"}},onChange:{defaultValue:null,description:"Handle an option being selected",name:"onChange",required:!1,type:{name:"((values?: string[]) => void)"}},values:{defaultValue:null,description:"Values of the current selected option (controlled)",name:"values",required:!1,type:{name:"string[]"}},fontFamily:{defaultValue:null,description:"",name:"fontFamily",required:!1,type:{name:"ResponsiveValue<FontFamilies, Required<Theme<TLengthStyledSystem>>>"}},fontSize:{defaultValue:null,description:"Use a @looker/components FontSizes to set font size",name:"fontSize",required:!1,type:{name:"ResponsiveValue<FontSizes, Required<Theme<TLengthStyledSystem>>>"}},fontWeight:{defaultValue:null,description:"Use a @looker/components FontWeights to set weight\n  normal, medium, semiBold, bold",name:"fontWeight",required:!1,type:{name:"ResponsiveValue<FontWeights, Required<Theme<TLengthStyledSystem>>>"}},lineHeight:{defaultValue:null,description:"Use a @looker/components LineHeights (xxsmall - xxxxlarge) to set line height",name:"lineHeight",required:!1,type:{name:"ResponsiveValue<FontSizes, Required<Theme<TLengthStyledSystem>>>"}},onClose:{defaultValue:null,description:"Called when the suggestion list closes, whether via blur, escape or selection",name:"onClose",required:!1,type:{name:"ComboboxMultiCallback"}},onOpen:{defaultValue:null,description:"Called when the suggestion list opens, whether via typing, click, or focus",name:"onOpen",required:!1,type:{name:"ComboboxMultiCallback"}},wrapperAriaLabel:{defaultValue:null,description:"The optional a11y aria label for combobox Wrapper element that has popup",name:"wrapperAriaLabel",required:!1,type:{name:"string"}},openOnFocus:{defaultValue:null,description:"If true, the popover opens when focus is on the text box.",name:"openOnFocus",required:!1,type:{name:"boolean"}},openOnClick:{defaultValue:{value:"true"},description:"If true, the popover opens when the text box is clicked.",name:"openOnClick",required:!1,type:{name:"boolean"}},options:{defaultValue:null,description:"Options may be flat or grouped, label is optional – without it the value is used",name:"options",required:!1,type:{name:"SelectOptionProps[]"}},isLoading:{defaultValue:{value:"false"},description:"Render a spinner in the list instead of any options",name:"isLoading",required:!1,type:{name:"boolean"}},windowing:{defaultValue:null,description:"Render only the options visible in the scroll window\ndefaults to false for <100 options, true for >=100 options",name:"windowing",required:!1,type:{name:"boolean"}},validationType:{defaultValue:null,description:"",name:"validationType",required:!1,type:{name:"enum",value:[{value:'"error"'}]}},noErrorIcon:{defaultValue:null,description:"Don't show the error icon when validationType is 'error'",name:"noErrorIcon",required:!1,type:{name:"boolean"}},indicator:{defaultValue:null,description:"Customize the area to the left of the label, which by default\nrenders a check mark for the selected option or a spacer\nUse a ReactNode, function component or render-prop-style function, or false to remove",name:"indicator",required:!1,type:{name:"ReactNode | ComboboxOptionIndicatorFunction"}},isFilterable:{defaultValue:null,description:"The user can type in the input (default false to mimic traditional select tag)",name:"isFilterable",required:!1,type:{name:"boolean"}},onFilter:{defaultValue:null,description:"Handle when the user types in the field,\nor the menu opens with a pre-populated value",name:"onFilter",required:!1,type:{name:"((term: string) => void)"}},noOptionsLabel:{defaultValue:null,description:"Text to show when there are no available options",name:"noOptionsLabel",required:!1,type:{name:"string"}},listLayout:{defaultValue:null,description:"Control the dimensions of the list\n(use this to untether the list width from the input width)",name:"listLayout",required:!1,type:{name:"LayoutProps<Required<Theme<TLengthStyledSystem>>>"}},showCreate:{defaultValue:null,description:"Add an on-the-fly option mirroring the typed text (use when isFilterable = true)\nWhen `true`, notInOptions is used to show/hide and can be included in a custom function",name:"showCreate",required:!1,type:{name:"boolean"}},formatCreateLabel:{defaultValue:null,description:"Format the label of the on-the-fly create option (use with canCreate)",name:"formatCreateLabel",required:!1,type:{name:"((inputText: string) => ReactNode)"}},chipIconLabel:{defaultValue:{value:"Delete"},description:"customize the tooltip on the closing icon",name:"chipIconLabel",required:!1,type:{name:"string"}},clearIconLabel:{defaultValue:null,description:"customize the tooltip on the closing icon",name:"clearIconLabel",required:!1,type:{name:"string"}},freeInput:{defaultValue:{value:"false"},description:"Allows inputting of values (whether found in options or not) via typing or pasting\nUse validate, onValidationFail, and onDuplicate for validation on typed or pasted values",name:"freeInput",required:!1,type:{name:"boolean"}},removeOnBackspace:{defaultValue:{value:"true"},description:"Set to false to disable the removal of the last value on backspace key",name:"removeOnBackspace",required:!1,type:{name:"boolean"}},validate:{defaultValue:null,description:"for checking each value before converting to a chip",name:"validate",required:!1,type:{name:"((value: string) => boolean)"}},formatInputValue:{defaultValue:null,description:"Callback to format each value entered, before validation.\nDefaults to `value.trim()`, set to `false` to avoid trimming whitespace.",name:"formatInputValue",required:!1,type:{name:"FormatInputValue"}},onValidationFail:{defaultValue:null,description:"callback when values fail validation",name:"onValidationFail",required:!1,type:{name:"((values: string[]) => void)"}},onDuplicate:{defaultValue:null,description:"callback when values are duplicates",name:"onDuplicate",required:!1,type:{name:"((values: string[]) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../components/src/Form/Inputs/Select/SelectMulti/stories/Basic.tsx#Basic"]={docgenInfo:Basic.__docgenInfo,name:"Basic",path:"../components/src/Form/Inputs/Select/SelectMulti/stories/Basic.tsx#Basic"})}catch(__react_docgen_typescript_loader_error){}function CloseOnSelect(){return react.createElement(SelectMulti._,{options:[{value:"Cheddar"},{value:"Gouda"},{value:"Swiss"},{value:"Feta"},{value:"Mascarpone"},{value:"Brie"},{value:"Mozzarella"},{value:"Cotija"},{value:"Pepperjack"}],defaultValues:["Swiss","Brie"],closeOnSelect:!0})}var SpaceVertical=__webpack_require__("../components/src/Layout/Space/SpaceVertical/SpaceVertical.tsx"),Paragraph=__webpack_require__("../components/src/Text/Paragraph/Paragraph.tsx");function FreeInput_CloseOnSelect(){const[message,setMessage]=(0,react.useState)("");return react.createElement(SpaceVertical.s,{align:"stretch"},react.createElement(SelectMulti._,{options:[{value:"Cheddar"},{value:"Gouda"},{value:"Swiss"},{value:"Feta"},{value:"Mascarpone"},{value:"Brie"},{value:"Mozzarella"},{value:"Cotija"},{value:"Pepperjack"}],isFilterable:!0,onFilter:function resetMessage(){setMessage("")},placeholder:"Type values or select from the list",freeInput:!0,validate:function validate(value){return value.charAt(0).toUpperCase()===value.charAt(0)},onValidationFail:function handleValidationFail(values){setMessage(`Please capitalize: ${values.join(", ")}`)}}),react.createElement(Paragraph.n,null,message))}var Space=__webpack_require__("../components/src/Layout/Space/Space/Space.tsx");function ClearIconLabel(){return react.createElement(Space.T,null,react.createElement(SelectMulti._,{clearIconLabel:"remove all chips",defaultValues:["Cheddar"],flex:1,options:[{value:"Cheddar"},{value:"Gouda"},{value:"Swiss"},{value:"Feta"}],placeholder:"Cheeses"}),react.createElement(SelectMulti._,{defaultValues:["Gouda","Feta"],chipIconLabel:"remove this chip",flex:1,options:[{value:"Cheddar"},{value:"Gouda"},{value:"Swiss"},{value:"Feta"}]}),react.createElement(SelectMulti._,{clearIconLabel:"remove all chips",defaultValues:["Cheddar","Swiss"],chipIconLabel:"remove this chip",flex:1,options:[{value:"Cheddar"},{value:"Gouda"},{value:"Swiss"},{value:"Feta"}]}))}const index_stories={argTypes:defaultArgTypes.W,component:SelectMulti._,parameters:{storyshots:{disable:!0}},title:"Stories/SelectMulti"},__namedExportsOrder=["Basic","CloseOnSelect","FreeInput","ClearIconLabel"];try{indexstories.displayName="indexstories",indexstories.__docgenInfo={description:"",displayName:"indexstories",props:{closeOnSelect:{defaultValue:{value:"false"},description:"Should the list close after an option is selected",name:"closeOnSelect",required:!1,type:{name:"boolean"}},defaultValues:{defaultValue:null,description:"Value of the initial option",name:"defaultValues",required:!1,type:{name:"string[]"}},onChange:{defaultValue:null,description:"Handle an option being selected",name:"onChange",required:!1,type:{name:"((values?: string[]) => void)"}},values:{defaultValue:null,description:"Values of the current selected option (controlled)",name:"values",required:!1,type:{name:"string[]"}},fontFamily:{defaultValue:null,description:"",name:"fontFamily",required:!1,type:{name:"ResponsiveValue<FontFamilies, Required<Theme<TLengthStyledSystem>>>"}},fontSize:{defaultValue:null,description:"Use a @looker/components FontSizes to set font size",name:"fontSize",required:!1,type:{name:"ResponsiveValue<FontSizes, Required<Theme<TLengthStyledSystem>>>"}},fontWeight:{defaultValue:null,description:"Use a @looker/components FontWeights to set weight\n  normal, medium, semiBold, bold",name:"fontWeight",required:!1,type:{name:"ResponsiveValue<FontWeights, Required<Theme<TLengthStyledSystem>>>"}},lineHeight:{defaultValue:null,description:"Use a @looker/components LineHeights (xxsmall - xxxxlarge) to set line height",name:"lineHeight",required:!1,type:{name:"ResponsiveValue<FontSizes, Required<Theme<TLengthStyledSystem>>>"}},onClose:{defaultValue:null,description:"Called when the suggestion list closes, whether via blur, escape or selection",name:"onClose",required:!1,type:{name:"ComboboxMultiCallback"}},onOpen:{defaultValue:null,description:"Called when the suggestion list opens, whether via typing, click, or focus",name:"onOpen",required:!1,type:{name:"ComboboxMultiCallback"}},wrapperAriaLabel:{defaultValue:null,description:"The optional a11y aria label for combobox Wrapper element that has popup",name:"wrapperAriaLabel",required:!1,type:{name:"string"}},openOnFocus:{defaultValue:null,description:"If true, the popover opens when focus is on the text box.",name:"openOnFocus",required:!1,type:{name:"boolean"}},openOnClick:{defaultValue:{value:"true"},description:"If true, the popover opens when the text box is clicked.",name:"openOnClick",required:!1,type:{name:"boolean"}},options:{defaultValue:null,description:"Options may be flat or grouped, label is optional – without it the value is used",name:"options",required:!1,type:{name:"SelectOptionProps[]"}},isLoading:{defaultValue:{value:"false"},description:"Render a spinner in the list instead of any options",name:"isLoading",required:!1,type:{name:"boolean"}},windowing:{defaultValue:null,description:"Render only the options visible in the scroll window\ndefaults to false for <100 options, true for >=100 options",name:"windowing",required:!1,type:{name:"boolean"}},validationType:{defaultValue:null,description:"",name:"validationType",required:!1,type:{name:"enum",value:[{value:'"error"'}]}},noErrorIcon:{defaultValue:null,description:"Don't show the error icon when validationType is 'error'",name:"noErrorIcon",required:!1,type:{name:"boolean"}},indicator:{defaultValue:null,description:"Customize the area to the left of the label, which by default\nrenders a check mark for the selected option or a spacer\nUse a ReactNode, function component or render-prop-style function, or false to remove",name:"indicator",required:!1,type:{name:"ReactNode | ComboboxOptionIndicatorFunction"}},isFilterable:{defaultValue:null,description:"The user can type in the input (default false to mimic traditional select tag)",name:"isFilterable",required:!1,type:{name:"boolean"}},onFilter:{defaultValue:null,description:"Handle when the user types in the field,\nor the menu opens with a pre-populated value",name:"onFilter",required:!1,type:{name:"((term: string) => void)"}},noOptionsLabel:{defaultValue:null,description:"Text to show when there are no available options",name:"noOptionsLabel",required:!1,type:{name:"string"}},listLayout:{defaultValue:null,description:"Control the dimensions of the list\n(use this to untether the list width from the input width)",name:"listLayout",required:!1,type:{name:"LayoutProps<Required<Theme<TLengthStyledSystem>>>"}},showCreate:{defaultValue:null,description:"Add an on-the-fly option mirroring the typed text (use when isFilterable = true)\nWhen `true`, notInOptions is used to show/hide and can be included in a custom function",name:"showCreate",required:!1,type:{name:"boolean"}},formatCreateLabel:{defaultValue:null,description:"Format the label of the on-the-fly create option (use with canCreate)",name:"formatCreateLabel",required:!1,type:{name:"((inputText: string) => ReactNode)"}},chipIconLabel:{defaultValue:{value:"Delete"},description:"customize the tooltip on the closing icon",name:"chipIconLabel",required:!1,type:{name:"string"}},clearIconLabel:{defaultValue:null,description:"customize the tooltip on the closing icon",name:"clearIconLabel",required:!1,type:{name:"string"}},freeInput:{defaultValue:{value:"false"},description:"Allows inputting of values (whether found in options or not) via typing or pasting\nUse validate, onValidationFail, and onDuplicate for validation on typed or pasted values",name:"freeInput",required:!1,type:{name:"boolean"}},removeOnBackspace:{defaultValue:{value:"true"},description:"Set to false to disable the removal of the last value on backspace key",name:"removeOnBackspace",required:!1,type:{name:"boolean"}},validate:{defaultValue:null,description:"for checking each value before converting to a chip",name:"validate",required:!1,type:{name:"((value: string) => boolean)"}},formatInputValue:{defaultValue:null,description:"Callback to format each value entered, before validation.\nDefaults to `value.trim()`, set to `false` to avoid trimming whitespace.",name:"formatInputValue",required:!1,type:{name:"FormatInputValue"}},onValidationFail:{defaultValue:null,description:"callback when values fail validation",name:"onValidationFail",required:!1,type:{name:"((values: string[]) => void)"}},onDuplicate:{defaultValue:null,description:"callback when values are duplicates",name:"onDuplicate",required:!1,type:{name:"((values: string[]) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../components/src/Form/Inputs/Select/SelectMulti/stories/index.stories.tsx#indexstories"]={docgenInfo:indexstories.__docgenInfo,name:"indexstories",path:"../components/src/Form/Inputs/Select/SelectMulti/stories/index.stories.tsx#indexstories"})}catch(__react_docgen_typescript_loader_error){}},"./src/defaultArgTypes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>defaultArgTypes,q:()=>excludedProps});const defaultArgTypes={as:{table:{disable:!0}},forwardedAs:{table:{disable:!0}},ref:{table:{disable:!0}},theme:{table:{disable:!0}}},excludedProps=Object.keys(defaultArgTypes)}}]);