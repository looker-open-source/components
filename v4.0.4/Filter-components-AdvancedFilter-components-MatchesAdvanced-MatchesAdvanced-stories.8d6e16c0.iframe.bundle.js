"use strict";(globalThis.webpackChunk_looker_storybook=globalThis.webpackChunk_looker_storybook||[]).push([[5279],{"../filter-components/src/Filter/components/AdvancedFilter/components/MatchesAdvanced/MatchesAdvanced.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultStory:()=>DefaultStory,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_MatchesAdvanced__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../filter-components/src/Filter/components/AdvancedFilter/components/MatchesAdvanced/MatchesAdvanced.tsx");const DefaultStory=args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_MatchesAdvanced__WEBPACK_IMPORTED_MODULE_1__.i,args);DefaultStory.args={filterType:"string",item:{id:"1",type:"blank",is:!1},showAdd:!1,showName:!0,showRemove:!1,showOperator:!1,showMatchesAdvanced:!1};const __WEBPACK_DEFAULT_EXPORT__={title:"Filters / Matches Advanced",component:_MatchesAdvanced__WEBPACK_IMPORTED_MODULE_1__.i};DefaultStory.parameters={storySource:{source:"(args) => (\n  <MatchesAdvanced {...args} />\n)"},...DefaultStory.parameters};const __namedExportsOrder=["DefaultStory"]},"../filter-components/src/Filter/components/AdvancedFilter/components/GroupInput/GroupInput.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>GroupInput});var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),lodash_omit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/lodash/omit.js"),lodash_omit__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(lodash_omit__WEBPACK_IMPORTED_MODULE_0__),_looker_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../components/src/index.ts"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),_utils_filter_styles__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../filter-components/src/Filter/utils/filter_styles.ts");const InputLayout=({type="number",width="80px",...props})=>react__WEBPACK_IMPORTED_MODULE_1__.createElement(_looker_components__WEBPACK_IMPORTED_MODULE_2__.InputText,(0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__.Z)({autoResize:!0,onInput:evt=>{evt.target&&evt.currentTarget.value&&(evt.currentTarget.value=evt.currentTarget.value.toString().replace(/\D/g,""))},type},lodash_omit__WEBPACK_IMPORTED_MODULE_0___default()(props,"placement"))),GroupInput=(0,styled_components__WEBPACK_IMPORTED_MODULE_4__.ZP)(InputLayout).attrs((({placement="middle"})=>({placement}))).withConfig({displayName:"GroupInput",componentId:"sc-rdk5zh-0"})([""," input{text-align:right;}"],_utils_filter_styles__WEBPACK_IMPORTED_MODULE_5__.MK);try{GroupInput.displayName="GroupInput",GroupInput.__docgenInfo={description:"",displayName:"GroupInput",props:{type:{defaultValue:{value:"number"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"text"'},{value:'"search"'},{value:'"tel"'},{value:'"url"'},{value:'"email"'},{value:'"month"'},{value:'"password"'},{value:'"week"'}]}},after:{defaultValue:null,description:"Content to place after the input\nIf a string is used, formatting will be automatically applied\nIf JSX is used, it will displace the built-in validation icon",name:"after",required:!1,type:{name:"ReactNode"}},placement:{defaultValue:null,description:"Placement in a group of adjacent inputs",name:"placement",required:!1,type:{name:"enum",value:[{value:'"middle"'},{value:'"right"'},{value:'"left"'}]}},validationType:{defaultValue:null,description:"",name:"validationType",required:!1,type:{name:"enum",value:[{value:'"error"'}]}},"data-autofocus":{defaultValue:null,description:"",name:"data-autofocus",required:!1,type:{name:"string"}},"data-testid":{defaultValue:null,description:"",name:"data-testid",required:!1,type:{name:"string"}},noErrorIcon:{defaultValue:null,description:"Don't show the error icon when validationType is 'error'",name:"noErrorIcon",required:!1,type:{name:"boolean"}},autoResize:{defaultValue:null,description:"Allows the input width to resize with the value or placeholder\nStyles will default to `width: auto` and `display: inline-flex`\nDo not use with children",name:"autoResize",required:!1,type:{name:"boolean"}},iconAfter:{defaultValue:null,description:"",name:"iconAfter",required:!1,type:{name:"IconType"}},before:{defaultValue:null,description:"Content to place before the input\nIf a string is used, formatting will be automatically applied",name:"before",required:!1,type:{name:"ReactNode"}},iconBefore:{defaultValue:null,description:"",name:"iconBefore",required:!1,type:{name:"IconType"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../filter-components/src/Filter/components/AdvancedFilter/components/GroupInput/GroupInput.tsx#GroupInput"]={docgenInfo:GroupInput.__docgenInfo,name:"GroupInput",path:"../filter-components/src/Filter/components/AdvancedFilter/components/GroupInput/GroupInput.tsx#GroupInput"})}catch(__react_docgen_typescript_loader_error){}},"../filter-components/src/Filter/components/AdvancedFilter/components/MatchesAdvanced/MatchesAdvanced.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>MatchesAdvanced});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_looker_filter_expressions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../filter-expressions/src/utils/type_to_grammar.ts"),_GroupInput__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../filter-components/src/Filter/components/AdvancedFilter/components/GroupInput/GroupInput.tsx");const getFilterItemExpression=(item,type,field)=>{const{toString}=(0,_looker_filter_expressions__WEBPACK_IMPORTED_MODULE_1__.U)(type);return toString(item,type,field)},MatchesAdvanced=({item,item:{expression},onChange,field,filterType})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_GroupInput__WEBPACK_IMPORTED_MODULE_2__.w,{type:"text",minWidth:"120px",value:expression??getFilterItemExpression(item,filterType,field),onChange:event=>{const newExpression=event.currentTarget.value;onChange(item.id,{...item,type:"matchesAdvanced",expression:newExpression})},placement:"right"});try{MatchesAdvanced.displayName="MatchesAdvanced",MatchesAdvanced.__docgenInfo={description:"",displayName:"MatchesAdvanced",props:{item:{defaultValue:null,description:"",name:"item",required:!0,type:{name:"FilterModel<string>"}},showAdd:{defaultValue:null,description:"",name:"showAdd",required:!0,type:{name:"boolean"}},showName:{defaultValue:null,description:"",name:"showName",required:!0,type:{name:"boolean"}},showRemove:{defaultValue:null,description:"",name:"showRemove",required:!0,type:{name:"boolean"}},showOperator:{defaultValue:null,description:"true = render with text\nfalse = don't render\n'spacer' = render as empty space",name:"showOperator",required:!0,type:{name:'boolean | "spacer"'}},onAdd:{defaultValue:null,description:"",name:"onAdd",required:!0,type:{name:"(item: FilterModel<string>, keepValue?: boolean | undefined) => void"}},onRemove:{defaultValue:null,description:"",name:"onRemove",required:!0,type:{name:"(id: string) => void"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},filterType:{defaultValue:null,description:"",name:"filterType",required:!0,type:{name:"enum",value:[{value:'"string"'},{value:'"number"'},{value:'"location"'},{value:'"date"'},{value:'"date_time"'},{value:'"tier"'}]}},isLinked:{defaultValue:null,description:"",name:"isLinked",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}},inline:{defaultValue:null,description:"",name:"inline",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"any"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},suggestions:{defaultValue:null,description:"",name:"suggestions",required:!1,type:{name:"string[]"}},enumerations:{defaultValue:null,description:"",name:"enumerations",required:!1,type:{name:"Option[] | null"}},field:{defaultValue:null,description:"",name:"field",required:!1,type:{name:"ILookmlModelExploreField | null"}},userAttributes:{defaultValue:null,description:"",name:"userAttributes",required:!1,type:{name:"UserAttributeWithValue[]"}},validationMessage:{defaultValue:null,description:"",name:"validationMessage",required:!1,type:{name:"ValidationMessageProps"}},onInputChange:{defaultValue:null,description:"",name:"onInputChange",required:!1,type:{name:"((value: string) => void)"}},showMatchesAdvanced:{defaultValue:null,description:"",name:"showMatchesAdvanced",required:!0,type:{name:"boolean"}},anyOption:{defaultValue:null,description:"",name:"anyOption",required:!1,type:{name:"boolean"}},allowMultipleOptions:{defaultValue:null,description:"",name:"allowMultipleOptions",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../filter-components/src/Filter/components/AdvancedFilter/components/MatchesAdvanced/MatchesAdvanced.tsx#MatchesAdvanced"]={docgenInfo:MatchesAdvanced.__docgenInfo,name:"MatchesAdvanced",path:"../filter-components/src/Filter/components/AdvancedFilter/components/MatchesAdvanced/MatchesAdvanced.tsx#MatchesAdvanced"})}catch(__react_docgen_typescript_loader_error){}},"../filter-components/src/Filter/utils/filter_styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J0:()=>multiInputWidth,MK:()=>inputPlacementStyle,wP:()=>tokenStylePlaceholder});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js");const multiInputWidth=280,flatBorderRight=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["border-bottom-right-radius:0;border-top-right-radius:0;&:not(:focus-within){border-right-color:transparent;}"]),flatBorderLeft=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["border-bottom-left-radius:0;border-top-left-radius:0;"]),inputPlacementStyle=({placement})=>{switch(placement){case"left":return`\n      ${flatBorderRight}\n    `;case"right":return`\n      ${flatBorderLeft}\n    `;case"middle":return`\n      ${flatBorderLeft}\n      ${flatBorderRight}\n    `;default:return""}},tokenStylePlaceholder=props=>props.tokenStyle?(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["input::placeholder{color:",";}"],(({theme})=>theme.colors.text3)):""}}]);