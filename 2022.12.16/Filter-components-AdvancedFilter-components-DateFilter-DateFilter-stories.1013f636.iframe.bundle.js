"use strict";(globalThis.webpackChunk_looker_storybook=globalThis.webpackChunk_looker_storybook||[]).push([[9187],{"../filter-components/src/Filter/components/AdvancedFilter/components/DateFilter/DateFilter.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Relative:()=>Relative,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../filter-components/src/utils/i18n.ts"),_DateFilter__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../filter-components/src/Filter/components/AdvancedFilter/components/DateFilter/DateFilter.tsx");(0,_utils__WEBPACK_IMPORTED_MODULE_1__.V)();const Template=args=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DateFilter__WEBPACK_IMPORTED_MODULE_2__.f,args),Basic=Template.bind({});Basic.args={filterType:"date",name:"filtername",item:{id:"1",type:"after",is:!1},showAdd:!1,showName:!0,showRemove:!1,showOperator:!1,showMatchesAdvanced:!1};const Relative=Template.bind({});Relative.args={...Basic.args,item:{id:"1",is:!1,endInterval:{type:"interval",value:3,unit:"week"},intervalType:"ago",startInterval:{type:"interval",value:3,unit:"month"},type:"relative"}};const __WEBPACK_DEFAULT_EXPORT__={title:"Filters/Stories/Date Filter",component:_DateFilter__WEBPACK_IMPORTED_MODULE_2__.f};Basic.parameters={storySource:{source:"(args) => (\n  <DateFilter {...args} />\n)"},...Basic.parameters},Relative.parameters={storySource:{source:"(args) => (\n  <DateFilter {...args} />\n)"},...Relative.parameters};const __namedExportsOrder=["Basic","Relative"]}}]);