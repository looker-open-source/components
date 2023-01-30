(globalThis.webpackChunk_looker_storybook=globalThis.webpackChunk_looker_storybook||[]).push([[7470],{"../../node_modules/lodash/compact.js":module=>{module.exports=function compact(array){for(var index=-1,length=null==array?0:array.length,resIndex=0,result=[];++index<length;){var value=array[index];value&&(result[resIndex++]=value)}return result}},"../filter-components/src/DashboardFilter/DashboardFilter.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Suggestions:()=>Suggestions,Validation:()=>Validation,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("../../node_modules/core-js/modules/esnext.async-iterator.filter.js"),__webpack_require__("../../node_modules/core-js/modules/esnext.iterator.constructor.js"),__webpack_require__("../../node_modules/core-js/modules/esnext.iterator.filter.js"),__webpack_require__("../../node_modules/react/index.js")),_DashboardFilter__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../filter-components/src/DashboardFilter/DashboardFilter.tsx");const Template=args=>{const[expression,setExpression]=(0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(args.expression);return react__WEBPACK_IMPORTED_MODULE_3__.createElement(_DashboardFilter__WEBPACK_IMPORTED_MODULE_4__.a,(0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_5__.Z)({},args,{expression,onChange:newExpression=>{setExpression(newExpression),args.onChange?.(newExpression)}}))},Basic=Template.bind({});Basic.args={expression:"",filter:{field:{is_numeric:!0},name:"Cost",type:"field_filter",allow_multiple_values:!0}};const Suggestions=Template.bind({});Suggestions.args={...Basic.args,filter:{field:{suggestable:"undefined"==typeof jest},name:"Status",type:"field_filter",ui_config:{type:"button_group"},allow_multiple_values:!0},sdk:{ok:value=>value,get:()=>({suggestions:["complete","pending","cancelled"]})}};const Validation=Template.bind({});Validation.args={...Suggestions.args,filter:{...Suggestions.args.filter,required:!0,allow_multiple_values:!0}};const __WEBPACK_DEFAULT_EXPORT__={title:"Filters / DashboardFilter",component:_DashboardFilter__WEBPACK_IMPORTED_MODULE_4__.a};Basic.parameters={storySource:{source:"(args) => {\n  const [expression, setExpression] = useState(args.expression)\n  const handleChange = (newExpression: string) => {\n    setExpression(newExpression)\n    args.onChange?.(newExpression)\n  }\n  return (\n    <DashboardFilter\n      {...args}\n      expression={expression}\n      onChange={handleChange}\n    />\n  )\n}"},...Basic.parameters},Suggestions.parameters={storySource:{source:"(args) => {\n  const [expression, setExpression] = useState(args.expression)\n  const handleChange = (newExpression: string) => {\n    setExpression(newExpression)\n    args.onChange?.(newExpression)\n  }\n  return (\n    <DashboardFilter\n      {...args}\n      expression={expression}\n      onChange={handleChange}\n    />\n  )\n}"},...Suggestions.parameters},Validation.parameters={storySource:{source:"(args) => {\n  const [expression, setExpression] = useState(args.expression)\n  const handleChange = (newExpression: string) => {\n    setExpression(newExpression)\n    args.onChange?.(newExpression)\n  }\n  return (\n    <DashboardFilter\n      {...args}\n      expression={expression}\n      onChange={handleChange}\n    />\n  )\n}"},...Validation.parameters};const __namedExportsOrder=["Basic","Suggestions","Validation"]},"../filter-components/src/DashboardFilter/DashboardFilter.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>DashboardFilter});var esm_extends=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),react=(__webpack_require__("../../node_modules/core-js/modules/esnext.async-iterator.filter.js"),__webpack_require__("../../node_modules/core-js/modules/esnext.iterator.constructor.js"),__webpack_require__("../../node_modules/core-js/modules/esnext.iterator.filter.js"),__webpack_require__("../../node_modules/react/index.js")),src=__webpack_require__("../components/src/index.ts"),Status=__webpack_require__("../components/src/Status/Status.tsx"),Filter=__webpack_require__("../filter-components/src/Filter/Filter.tsx"),use_validation_message=__webpack_require__("../filter-components/src/Filter/utils/use_validation_message.ts"),use_suggestable=__webpack_require__("../filter-components/src/DashboardFilter/use_suggestable.ts"),useControlWarn=__webpack_require__("../components/src/utils/useControlWarn.ts"),FilterCollection=__webpack_require__("../filter-components/src/FilterCollection/FilterCollection.tsx");const DashboardFilter=({filter,sdk,...rest})=>{const{id,name,type,field,required,ui_config,allow_multiple_values}=filter,{removeFilter}=(0,react.useContext)(FilterCollection.f);(0,react.useEffect)((()=>()=>{removeFilter(filter)}),[removeFilter,filter]);const stateProps=(({expression:propsExpression,filter,onChange})=>{const{updateExpression}=(0,react.useContext)(FilterCollection.f),isControlled=(0,useControlWarn.i)({controllingProps:["expression"],isControlledCheck:()=>void 0!==propsExpression,name:"DashboardFilter"}),[uncontrolledExpression,setExpression]=(0,react.useState)(propsExpression||filter.default_value||""),expression=isControlled?propsExpression||"":uncontrolledExpression;return(0,react.useEffect)((()=>{updateExpression(filter,expression)}),[filter,expression,updateExpression]),{expression,onChange:value=>{setExpression(value.expression),onChange(value.expression)}}})({filter,...rest}),{errorMessage,suggestableProps}=(0,use_suggestable.d)({filter,sdk}),validationMessage=(0,use_validation_message.O)(stateProps.expression,required);return react.createElement(src.Field,{id:id||"",label:name||"",detail:errorMessage&&react.createElement(src.Tooltip,{content:errorMessage},react.createElement(Status.q,{intent:"critical","data-testid":"error-icon"})),validationMessage},react.createElement(Filter.w,(0,esm_extends.Z)({name:name||"",type:type||"",field,config:ui_config,isRequired:required},suggestableProps,stateProps,{allowMultipleValues:!!allow_multiple_values})))};try{DashboardFilter.displayName="DashboardFilter",DashboardFilter.__docgenInfo={description:"Renders a dashboard filter, including label and validation, and fetches suggestions\nif necessary. For rendering just the filter input control on its own, see `Filter`.",displayName:"DashboardFilter",props:{expression:{defaultValue:null,description:"The current value of the filter.\nSee {@link https://docs.looker.com/reference/filter-expressions Looker Filter Expressions}.",name:"expression",required:!1,type:{name:"string"}},filter:{defaultValue:null,description:"A dashboard filter as defined in @looker/sdk",name:"filter",required:!0,type:{name:"IDashboardFilter"}},onChange:{defaultValue:null,description:"Called when the filter expression is changed",name:"onChange",required:!0,type:{name:"(expression: string) => void"}},sdk:{defaultValue:null,description:"An initialized Looker SDK instance",name:"sdk",required:!1,type:{name:"IAPIMethods"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../filter-components/src/DashboardFilter/DashboardFilter.tsx#DashboardFilter"]={docgenInfo:DashboardFilter.__docgenInfo,name:"DashboardFilter",path:"../filter-components/src/DashboardFilter/DashboardFilter.tsx#DashboardFilter"})}catch(__react_docgen_typescript_loader_error){}},"../filter-components/src/DashboardFilter/use_suggestable.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{d:()=>useSuggestable});__webpack_require__("../../node_modules/core-js/modules/esnext.async-iterator.reduce.js"),__webpack_require__("../../node_modules/core-js/modules/esnext.iterator.constructor.js"),__webpack_require__("../../node_modules/core-js/modules/esnext.iterator.reduce.js"),__webpack_require__("../../node_modules/core-js/modules/esnext.async-iterator.filter.js"),__webpack_require__("../../node_modules/core-js/modules/esnext.iterator.filter.js");var _looker_sdk__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../filter-components/node_modules/@looker/sdk/lib/esm/4.0/funcs.js"),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/react/index.js"),_utils__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../filter-components/src/utils/useTranslation.ts"),_FilterCollection__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../filter-components/src/FilterCollection/FilterCollection.tsx");const shouldFetchSuggestions=field=>field?.suggestable&&!field?.enumerations&&!field?.suggestions,getOptionsProps=(field,fetchedSuggestions)=>{if(shouldFetchSuggestions(field))return{suggestions:fetchedSuggestions};const{enumerations,suggestions}=field||{};return enumerations?{enumerations}:suggestions?{suggestions}:{}},useSuggestable=({filter,sdk})=>{const{state}=(0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_FilterCollection__WEBPACK_IMPORTED_MODULE_6__.f),filterMap=state.filterMap,field=filter.field,[searchTerm,setSearchTerm]=(0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(""),[errorMessage,setErrorMessage]=(0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(""),[isLoading,setLoading]=(0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(!1),[fetchedSuggestions,setSuggestions]=(0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]),{t}=(0,_utils__WEBPACK_IMPORTED_MODULE_7__.$)("use_suggestable"),translatedErrorMessage=t("Error loading suggestions"),{listens_to_filters}=filter,linkedFilterMap=(0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)((()=>((filterMap,listensToFilters)=>{if(listensToFilters&&0!==listensToFilters.length)return listensToFilters.reduce(((acc,title)=>{if(filterMap[title]){const{filter,expression}=filterMap[title];filter.dimension&&expression&&(acc[filter.dimension]=expression)}return acc}),{})})(filterMap,listens_to_filters)),[filterMap,listens_to_filters]);return(0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)((()=>{(async()=>{if(sdk&&shouldFetchSuggestions(field)){setLoading(!0);const params={field_name:field?.suggest_dimension||"",model_name:filter.model||"",term:searchTerm,view_name:field?.suggest_explore||field?.view||"",filters:linkedFilterMap};try{const result=await sdk.ok((0,_looker_sdk__WEBPACK_IMPORTED_MODULE_8__.qoF)(sdk,params));setLoading(!1),setSuggestions(result.suggestions||[])}catch(error){setLoading(!1),setErrorMessage(translatedErrorMessage)}}})()}),[filter.model,field,searchTerm,sdk,linkedFilterMap,translatedErrorMessage]),{errorMessage,suggestableProps:{isLoading,onInputChange:setSearchTerm,...getOptionsProps(field,fetchedSuggestions)}}}},"../filter-components/src/FilterCollection/FilterCollection.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{f:()=>FilterContext});__webpack_require__("../../node_modules/core-js/modules/esnext.async-iterator.filter.js"),__webpack_require__("../../node_modules/core-js/modules/esnext.iterator.constructor.js"),__webpack_require__("../../node_modules/core-js/modules/esnext.iterator.filter.js");var react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/react/index.js");const getFilterMap=(filterMap,payload)=>{const{filter,expression}=payload;if(expression){const newKeyValue=filter.title?{[filter.title]:payload}:{};return{...filterMap,...newKeyValue}}if(filter.title){const{[filter.title]:filterToRemove,...rest}=filterMap;return rest}return filterMap},reducer=(state,action)=>{switch(action.type){case"UPDATE_EXPRESSION":case"REMOVE_FILTER":return{...state,filterMap:getFilterMap(state.filterMap,action.payload)};default:throw new Error}},noop=()=>{},initialState={filterMap:{}},initialContext={removeFilter:noop,state:initialState,updateExpression:noop},FilterContext=(0,react__WEBPACK_IMPORTED_MODULE_3__.createContext)(initialContext),FilterCollection=({children})=>{const[state,dispatch]=useReducer(reducer,initialState),updateExpression=useCallback(((filter,expression)=>{dispatch({type:"UPDATE_EXPRESSION",payload:{filter,expression}})}),[]),removeFilter=useCallback((filter=>{dispatch({type:"REMOVE_FILTER",payload:{filter}})}),[]);return React.createElement(FilterContext.Provider,{value:{removeFilter,state,updateExpression}},children)};try{FilterCollection.displayName="FilterCollection",FilterCollection.__docgenInfo={description:"FilterCollection's primary purpose is to manage a filter map\nobject, with filter metadata objects as keys and current\nselected expressions as values.\n\nThis allows filters with `listens_to_filters` to pull the relevant\nexpressions out when performing a linked filter suggestion query.",displayName:"FilterCollection",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../filter-components/src/FilterCollection/FilterCollection.tsx#FilterCollection"]={docgenInfo:FilterCollection.__docgenInfo,name:"FilterCollection",path:"../filter-components/src/FilterCollection/FilterCollection.tsx#FilterCollection"})}catch(__react_docgen_typescript_loader_error){}}}]);