"use strict";(globalThis.webpackChunk_looker_storybook=globalThis.webpackChunk_looker_storybook||[]).push([[5482],{"../components/src/DataTable/stories/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,ControlBar:()=>ControlBar,Indicator:()=>Indicator,NoResults:()=>State,SelectManager:()=>SelectManager,SelectRow:()=>SelectRow,Sorting:()=>Sorting,Truncate:()=>Truncate_Basic,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var react=__webpack_require__("../../node_modules/react/index.js"),src=__webpack_require__("../components/src/index.ts");function Basic(){const items=[{id:1,name:"Gorgonzola"},{id:2,name:"Cheddar"},{id:3,name:"Blue"}].map((({id,name})=>{const actions=react.createElement(react.Fragment,null,react.createElement(src.DataTableAction,{onClick:()=>alert(`${name} selected!`)},"Select Cheese"));return react.createElement(src.DataTableItem,{key:id,id:`${id}`,onClick:()=>alert("Row clicked"),actions},react.createElement(src.DataTableCell,null,id),react.createElement(src.DataTableCell,null,name))}));return react.createElement(src.DataTable,{caption:"Cheeses example",columns:[{id:"id",title:"ID",type:"number"},{id:"name",title:"Name",type:"string"}]},items)}var Person_esm=__webpack_require__("../../node_modules/@styled-icons/material/Person/Person.esm.js"),Link=__webpack_require__("../components/src/Link/Link.tsx"),Icon=__webpack_require__("../components/src/Icon/Icon.tsx");function Indicator(){const link=react.createElement(Link.r,{onClick:event=>event.stopPropagation(),href:"https://en.wikipedia.org/wiki/Cheddar_cheese"},"Wikipedia"),indicator=react.createElement(Icon.J,{icon:react.createElement(Person_esm.F,null),color:"key",size:24,marginRight:"small"});return react.createElement(src.DataTable,{caption:"Cheeses example",columns:[{id:"name",title:"Name",type:"string"}]},react.createElement(src.DataTableItem,{id:"cheddar",onClick:()=>alert("Row clicked")},react.createElement(src.DataTableCell,{description:link,indicator},"Cheddar")))}function State(){return react.createElement(src.DataTable,{caption:"Cheeses example",columns:[{id:"name",title:"Name",type:"string"}],state:"noResults"},react.createElement(src.DataTableItem,{id:"cheddar",onClick:()=>alert("Row clicked")},react.createElement(src.DataTableCell,null,"Cheddar")))}__webpack_require__("../../node_modules/core-js/modules/esnext.async-iterator.map.js"),__webpack_require__("../../node_modules/core-js/modules/esnext.iterator.map.js");function Sorting(){const[data,setData]=(0,react.useState)([{createdDate:new Date("11/11/2001"),id:1,name:"Gorgonzola"},{createdDate:new Date("03/15/2001"),id:2,name:"Cheddar"},{createdDate:new Date("07/20/2001"),id:3,name:"Blue"}]),[columns,setColumns]=(0,react.useState)([{canSort:!0,id:"id",title:"ID",type:"number"},{canSort:!0,id:"name",title:"Name",type:"string"},{canSort:!0,id:"createdDate",size:"nowrap",title:"Created Date",type:"date"}]),items=data.map((({id,name,createdDate})=>{const actions=react.createElement(react.Fragment,null,react.createElement(src.DataTableAction,{onClick:()=>alert(`${name} selected!`)},"Select Cheese"));return react.createElement(src.DataTableItem,{id:`${id}`,key:id,onClick:()=>alert("Row clicked"),actions},react.createElement(src.DataTableCell,null,id),react.createElement(src.DataTableCell,null,name),react.createElement(src.DataTableCell,null,react.createElement(src.DateFormat,null,createdDate)))}));return react.createElement(src.DataTable,{caption:"Cheeses example",onSort:(id,sortDirection)=>{const{columns:sortedColumns,data:sortedData}=(0,src.doDataTableSort)(data,columns,id,sortDirection);setData(sortedData),setColumns(sortedColumns)},columns},items)}__webpack_require__("../../node_modules/core-js/modules/esnext.async-iterator.filter.js"),__webpack_require__("../../node_modules/core-js/modules/esnext.iterator.constructor.js"),__webpack_require__("../../node_modules/core-js/modules/esnext.iterator.filter.js");function SelectRow(){const data=[{id:1,name:"Gorgonzola"},{id:2,name:"Cheddar"},{id:3,name:"Blue"}],[selections,setSelections]=(0,react.useState)([]),allSelectableItems=data.map((({id})=>String(id))),items=data.map((({id,name})=>react.createElement(src.DataTableItem,{id:String(id),key:id,onClick:()=>alert(`${name} clicked`),actions:react.createElement(react.Fragment,null,react.createElement(src.DataTableAction,{onClick:()=>alert(`${name} deleted`)},"Delete"))},react.createElement(src.DataTableCell,null,id),react.createElement(src.DataTableCell,null,name))));return react.createElement(react.Fragment,null,react.createElement(src.DataTable,{caption:"Cheeses example",columns:[{id:"id",size:20,title:"ID",type:"number"},{id:"name",size:80,title:"Name",type:"string"}],select:{onSelect:selection=>{setSelections(selections.includes(selection)?selections.filter((item=>item!==selection)):[...selections,selection])},onSelectAll:()=>{setSelections(selections.length?[]:allSelectableItems)},pageItems:allSelectableItems,selectedItems:selections}},items))}function SelectManager(){const data=[{id:1,name:"Gorgonzola"},{id:2,name:"Cheddar"},{id:3,name:"Blue"}],allSelectableItems=data.map((({id})=>String(id))),{onSelect,onSelectAll,selections}=(0,src.useSelectManager)(allSelectableItems),items=data.map((({id,name})=>react.createElement(src.DataTableItem,{id:String(id),key:id,onClick:()=>alert(`${name} clicked`),actions:react.createElement(react.Fragment,null,react.createElement(src.DataTableAction,{onClick:()=>alert(`${name} deleted`)},"Delete"))},react.createElement(src.DataTableCell,null,id),react.createElement(src.DataTableCell,null,name))));return react.createElement(src.DataTable,{caption:"Cheeses example",columns:[{id:"id",size:20,title:"ID",type:"number"},{id:"name",size:80,title:"Name",type:"string"}],select:{onSelect,onSelectAll,pageItems:allSelectableItems,selectedItems:selections}},items)}var Flex=__webpack_require__("../components/src/Layout/Flex/Flex.tsx"),Box=__webpack_require__("../components/src/Layout/Box/Box.tsx"),Pagination=__webpack_require__("../components/src/Pagination/Pagination.tsx");function ControlBar(){const data=[{id:1,name:"Gorgonzola"},{id:2,name:"Cheddar"},{id:3,name:"Blue"},{id:4,name:"American"},{id:5,name:"Cheddar"},{id:6,name:"Pepper Jack"}],[page,setPage]=(0,react.useState)(1),pageItemData=data.filter((({id})=>id>3*(page-1)&&id<=3*page)),pageItemIds=pageItemData.map((({id})=>String(id))),pageItems=pageItemData.map((({id,name})=>react.createElement(src.DataTableItem,{id:String(id),key:id,onClick:()=>alert(`${name} clicked`),actions:react.createElement(react.Fragment,null,react.createElement(src.DataTableAction,{onClick:()=>alert(`${name} deleted`)},"Delete"))},react.createElement(src.DataTableCell,null,id),react.createElement(src.DataTableCell,null,name)))),{onSelect,onSelectAll,selections,setSelections}=(0,src.useSelectManager)(pageItemIds),allItems=[...data].map((({id})=>String(id))),bulkActionsConfig={actions:react.createElement(src.DataTableAction,{onClick:()=>alert(`Selected Items: ${selections}`)},"View Selected Item IDs"),onTotalClearAll:()=>setSelections([]),onTotalSelectAll:()=>setSelections(allItems),pageCount:pageItems.length,totalCount:allItems.length};return react.createElement(Flex.k,{flexDirection:"column",alignItems:"center"},react.createElement(Box.x,{width:"100%",mb:"u3"},react.createElement(src.DataTable,{bulk:bulkActionsConfig,caption:"Cheeses example",select:{onSelect,onSelectAll,pageItems:pageItemIds,selectedItems:selections},columns:[{id:"id",size:20,title:"ID",type:"number"},{id:"name",size:80,title:"Name",type:"string"}]},pageItems)),react.createElement(Pagination.t,{current:page,pages:data.length/3,onChange:nextPage=>{setSelections([]),setPage(nextPage)}}))}var Truncate=__webpack_require__("../components/src/Truncate/Truncate.tsx");function Truncate_Basic(){return react.createElement(src.DataTable,{caption:"Cheeses example",columns:[{id:"title",size:50,title:"Title",type:"string"},{id:"description",size:50,title:"Description",type:"string"}]},react.createElement(src.DataTableItem,{key:"cheddar",id:"cheddar"},react.createElement(src.DataTableCell,null,"Cheddar"),react.createElement(src.DataTableCell,null,react.createElement(Truncate.k,null,"Cheddar cheese is a relatively hard, off-white (or orange if colourings such as annatto are added), sometimes sharp-tasting, natural cheese. Originating in the English village of Cheddar in Somerset, cheeses of this style are now produced beyond the region and in several countries around the world."))),react.createElement(src.DataTableItem,{key:"parm",id:"parm"},react.createElement(src.DataTableCell,null,"Parmesan"),react.createElement(src.DataTableCell,null,react.createElement(Truncate.k,null,"Parmigiano-Reggiano or Parmesan is an Italian hard, granular cheese that is produced from cow's milk and has aged 12–36 months. It is named after the producing areas, the provinces of Parma, Reggio Emilia, the part of Bologna west of the Reno, and Modena (all in Emilia-Romagna); and the part of Mantua (Lombardy) south of the Po. Parmigiano is the Italian adjective for Parma and Reggiano that for Reggio Emilia."))))}const index_stories={parameters:{previewTabs:{"storybook/docs/panel":{hidden:!0}},storyshots:{disable:!0}},title:"Stories/DataTable"},__namedExportsOrder=["Basic","Indicator","NoResults","Sorting","SelectRow","SelectManager","ControlBar","Truncate"]}}]);