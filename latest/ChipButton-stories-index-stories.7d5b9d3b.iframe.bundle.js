"use strict";(globalThis.webpackChunk_looker_storybook=globalThis.webpackChunk_looker_storybook||[]).push([[1579],{"../components/src/ChipButton/stories/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,DeSelected:()=>DeSelected,Deletable:()=>Deletable,Disabled:()=>Disabled,MaxWidth:()=>MaxWidth,Prefix:()=>Prefix,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var react=__webpack_require__("../../node_modules/react/index.js"),ChipButton=__webpack_require__("../components/src/ChipButton/ChipButton.tsx");function Basic(){return react.createElement(ChipButton.m,null,"Basic")}function Deletable(){return react.createElement(ChipButton.m,{onDelete:()=>alert("Deletable")},"Deletable")}function DeSelected(){return react.createElement(ChipButton.m,{"aria-selected":!1},"DeSelected")}function Disabled(){return react.createElement(ChipButton.m,{disabled:!0},"Disabled")}var Space=__webpack_require__("../components/src/Layout/Space/Space/Space.tsx");function MaxWidth(){return react.createElement(Space.T,{gap:"u1"},react.createElement(ChipButton.m,{maxWidth:150},"short"),react.createElement(ChipButton.m,{maxWidth:150},"Very long text inside the chip will be truncated"))}function Prefix(){return react.createElement(ChipButton.m,{prefix:"role"},"admin")}const index_stories={parameters:{previewTabs:{"storybook/docs/panel":{hidden:!0}}},title:"Stories/ChipButton"},__namedExportsOrder=["Basic","Deletable","DeSelected","Disabled","MaxWidth","Prefix"]}}]);