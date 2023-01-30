"use strict";(globalThis.webpackChunk_looker_storybook=globalThis.webpackChunk_looker_storybook||[]).push([[5872],{"../components/src/Menu/MenuItem/stories/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Artwork:()=>Artwork,Basic:()=>Basic,Description:()=>Description,Detail:()=>Detail,Disabled:()=>Disabled,Icon:()=>Icon,Link:()=>Link,Selected:()=>Selected,WithTooltip:()=>WithTooltip,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var defaultArgTypes=__webpack_require__("./src/defaultArgTypes.ts"),MenuItem=__webpack_require__("../components/src/Menu/MenuItem/MenuItem.tsx"),react=__webpack_require__("../../node_modules/react/index.js");function Basic(props){return react.createElement(MenuItem.s,props,"Menu Item")}try{Basic.displayName="Basic",Basic.__docgenInfo={description:"",displayName:"Basic",props:{density:{defaultValue:null,description:"Determines the sizing and spacing of the item\nNotes:\n- This prop is intended for internal components usage (density should be set on a parent List component for external use cases).\n- If you choose to use this prop on a ListItem directly, it must be consistent across all items for windowing purposes.\n@private",name:"density",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"-3"},{value:"-2"},{value:"-1"}]}},description:{defaultValue:null,description:"optional extra description\nI18n recommended: content that is user visible should be treated for i18n",name:"description",required:!1,type:{name:"ReactNode"}},detail:{defaultValue:null,description:"Detail element placed right of the item children. Prop value can take one of two forms:\n1. ReactNode\n2. Object with content and options properties\n\nI18n recommended: content that is user visible should be treated for i18n",name:"detail",required:!1,type:{name:"ListItemDetailConfig"}},hovered:{defaultValue:{value:"false"},description:"Present ListItem in it's hovered state. Only for use in testing / image-snapshots.\n\nNOTE: This will only change the _initial_ hover state. If a hover event triggers a change\nof hover state the ListItem will return to it's default state.\n@private Test use only. May be deprecated and removed without notice.",name:"hovered",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"Optional icon placed left of the item children",name:"icon",required:!1,type:{name:"IconType"}},truncate:{defaultValue:null,description:"If true, text children and description will be truncated if text overflows\nSpecifying `description` will cause the truncation tooltip for label to _always_ be presented\n\nText specified in `description` property will be displayed below `label` in the tooltip",name:"truncate",required:!1,type:{name:"TruncateConfigProp"}},itemRole:{defaultValue:{value:"button"},description:"Sets the correct accessible role for the ListItem:\n- Use **'link'** for items that navigation to another page\n- Use **'button'** for items that trigger in page interactions, like displaying a dialog\n- Use **'none'** when including buttons as children in the label container (i.e. the label container will be a `<div>`).\n    - Height when using an item with a description and role='none' does not auto abide the @looker/components\n    density scale. Use 'button' or 'link' whenever possible to avoid space inconsistencies.\n    - If supporting keyboard navigation, make sure to add key handlers to items",name:"itemRole",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"link"'},{value:'"none"'}]}},ripple:{defaultValue:{value:"true"},description:"The ripple animation",name:"ripple",required:!1,type:{name:"boolean"}},nestedMenu:{defaultValue:null,description:"A list of menu items that will open to the right when the user hovers\nor hits the right arrow key. Only supports one level of nesting.",name:"nestedMenu",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../components/src/Menu/MenuItem/stories/Basic.tsx#Basic"]={docgenInfo:Basic.__docgenInfo,name:"Basic",path:"../components/src/Menu/MenuItem/stories/Basic.tsx#Basic"})}catch(__react_docgen_typescript_loader_error){}function Detail(){return react.createElement(MenuItem.s,{detail:"A Detail"},"Menu Item")}function Description(){return react.createElement(MenuItem.s,{description:"A Description"},"Menu Item")}var Person_esm=__webpack_require__("../../node_modules/@styled-icons/material/Person/Person.esm.js");function Icon(){return react.createElement(MenuItem.s,{icon:react.createElement(Person_esm.F,null)},"Menu Item")}var MenuList=__webpack_require__("../components/src/Menu/MenuList/MenuList.tsx"),src=__webpack_require__("../components/src/index.ts");function WithTooltip(){return react.createElement(MenuList.q,null,react.createElement(src.Tooltip,{content:"It is gouda!",placement:"left"},react.createElement(MenuItem.s,null,"Gouda")))}function Artwork(){return react.createElement(MenuItem.s,{icon:react.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},react.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z",fill:"#7FFFD4"}))},"Artwork")}function Disabled(){return react.createElement(MenuItem.s,{disabled:!0},"Menu Item")}function Selected(){return react.createElement(MenuItem.s,{selected:!0},"Menu Item")}function Link(){return react.createElement(MenuItem.s,{itemRole:"link",href:"https://google.com",target:"_blank"},"MenuItem that links to Google")}const index_stories={argTypes:defaultArgTypes.W,component:MenuItem.s,parameters:{storyshots:{disable:!0}},title:"Stories/MenuItem"},__namedExportsOrder=["Basic","Detail","Description","Icon","WithTooltip","Artwork","Disabled","Selected","Link"];try{indexstories.displayName="indexstories",indexstories.__docgenInfo={description:"",displayName:"indexstories",props:{density:{defaultValue:null,description:"Determines the sizing and spacing of the item\nNotes:\n- This prop is intended for internal components usage (density should be set on a parent List component for external use cases).\n- If you choose to use this prop on a ListItem directly, it must be consistent across all items for windowing purposes.\n@private",name:"density",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"-3"},{value:"-2"},{value:"-1"}]}},description:{defaultValue:null,description:"optional extra description\nI18n recommended: content that is user visible should be treated for i18n",name:"description",required:!1,type:{name:"ReactNode"}},detail:{defaultValue:null,description:"Detail element placed right of the item children. Prop value can take one of two forms:\n1. ReactNode\n2. Object with content and options properties\n\nI18n recommended: content that is user visible should be treated for i18n",name:"detail",required:!1,type:{name:"ListItemDetailConfig"}},hovered:{defaultValue:{value:"false"},description:"Present ListItem in it's hovered state. Only for use in testing / image-snapshots.\n\nNOTE: This will only change the _initial_ hover state. If a hover event triggers a change\nof hover state the ListItem will return to it's default state.\n@private Test use only. May be deprecated and removed without notice.",name:"hovered",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"Optional icon placed left of the item children",name:"icon",required:!1,type:{name:"IconType"}},truncate:{defaultValue:null,description:"If true, text children and description will be truncated if text overflows\nSpecifying `description` will cause the truncation tooltip for label to _always_ be presented\n\nText specified in `description` property will be displayed below `label` in the tooltip",name:"truncate",required:!1,type:{name:"TruncateConfigProp"}},itemRole:{defaultValue:{value:"button"},description:"Sets the correct accessible role for the ListItem:\n- Use **'link'** for items that navigation to another page\n- Use **'button'** for items that trigger in page interactions, like displaying a dialog\n- Use **'none'** when including buttons as children in the label container (i.e. the label container will be a `<div>`).\n    - Height when using an item with a description and role='none' does not auto abide the @looker/components\n    density scale. Use 'button' or 'link' whenever possible to avoid space inconsistencies.\n    - If supporting keyboard navigation, make sure to add key handlers to items",name:"itemRole",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"link"'},{value:'"none"'}]}},ripple:{defaultValue:{value:"true"},description:"The ripple animation",name:"ripple",required:!1,type:{name:"boolean"}},nestedMenu:{defaultValue:null,description:"A list of menu items that will open to the right when the user hovers\nor hits the right arrow key. Only supports one level of nesting.",name:"nestedMenu",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../components/src/Menu/MenuItem/stories/index.stories.tsx#indexstories"]={docgenInfo:indexstories.__docgenInfo,name:"indexstories",path:"../components/src/Menu/MenuItem/stories/index.stories.tsx#indexstories"})}catch(__react_docgen_typescript_loader_error){}},"./src/defaultArgTypes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>defaultArgTypes,q:()=>excludedProps});const defaultArgTypes={as:{table:{disable:!0}},forwardedAs:{table:{disable:!0}},ref:{table:{disable:!0}},theme:{table:{disable:!0}}},excludedProps=Object.keys(defaultArgTypes)}}]);