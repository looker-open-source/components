"use strict";(globalThis.webpackChunk_looker_storybook=globalThis.webpackChunk_looker_storybook||[]).push([[1022],{"./src/defaultArgTypes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>defaultArgTypes,q:()=>excludedProps});const defaultArgTypes={as:{table:{disable:!0}},forwardedAs:{table:{disable:!0}},ref:{table:{disable:!0}},theme:{table:{disable:!0}}},excludedProps=Object.keys(defaultArgTypes)},"../components/src/Layout/Semantics/Aside/stories/index.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>index_stories});__webpack_require__("../../node_modules/react/index.js");var esm=__webpack_require__("../../node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("../../node_modules/@storybook/addon-docs/dist/esm/index.js"),Aside=__webpack_require__("../components/src/Layout/Semantics/Aside/Aside.tsx"),Editor=__webpack_require__("./src/Editor/index.tsx"),defaultArgTypes=__webpack_require__("./src/defaultArgTypes.ts");try{Collapse.displayName="Collapse",Collapse.__docgenInfo={description:"",displayName:"Collapse",props:{border:{defaultValue:null,description:"Border can be specified as a boolean or a key of the theme colors object.\n1px border is applied to all four sides.\n\n`true` - will use theme's `ui2` color\n`false` - will not apply any border\n`keyof Colors` - will use the color of the key",name:"border",required:!1,type:{name:"BorderProp"}},borderBottom:{defaultValue:null,description:"A 1px border is applied to the bottom.\nSee `border` property for specifics values that can be specified..",name:"borderBottom",required:!1,type:{name:"BorderProp"}},borderLeft:{defaultValue:null,description:"A 1px border is applied to the left.\nSee `border` property for specifics values that can be specified..",name:"borderLeft",required:!1,type:{name:"BorderProp"}},borderRight:{defaultValue:null,description:"A 1px border is applied to the right.\nSee `border` property for specifics values that can be specified..",name:"borderRight",required:!1,type:{name:"BorderProp"}},borderTop:{defaultValue:null,description:"A 1px border is applied to the top.\nSee `border` property for specifics values that can be specified..",name:"borderTop",required:!1,type:{name:"BorderProp"}},borderX:{defaultValue:null,description:"A 1px border is applied to the left & right.\nSee `border` property for specifics values that can be specified..",name:"borderX",required:!1,type:{name:"BorderProp"}},borderY:{defaultValue:null,description:"A 1px border is applied to the top & bottom.\nSee `border` property for specifics values that can be specified..",name:"borderY",required:!1,type:{name:"BorderProp"}},fontFamily:{defaultValue:null,description:"",name:"fontFamily",required:!1,type:{name:"ResponsiveValue<FontFamilies, Required<Theme<TLengthStyledSystem>>>"}},fontSize:{defaultValue:null,description:"Use a @looker/components FontSizes to set font size",name:"fontSize",required:!1,type:{name:"ResponsiveValue<FontSizes, Required<Theme<TLengthStyledSystem>>>"}},fontWeight:{defaultValue:null,description:"Use a @looker/components FontWeights to set weight\n  normal, medium, semiBold, bold",name:"fontWeight",required:!1,type:{name:"ResponsiveValue<FontWeights, Required<Theme<TLengthStyledSystem>>>"}},lineHeight:{defaultValue:null,description:"Use a @looker/components LineHeights (xxsmall - xxxxlarge) to set line height",name:"lineHeight",required:!1,type:{name:"ResponsiveValue<FontSizes, Required<Theme<TLengthStyledSystem>>>"}},collapse:{defaultValue:{value:"false"},description:"Prevent `Aside` from being rendered.",name:"collapse",required:!1,type:{name:"boolean"}},scrollWithin:{defaultValue:{value:"false"},description:"To be used within the context of `<Page fixed>` container.\nWhen true, this removes the inner overflow-y scrolling\nand allows content within a Layout group to scroll together.",name:"scrollWithin",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../components/src/Layout/Semantics/Aside/stories/Collapse.tsx#Collapse"]={docgenInfo:Collapse.__docgenInfo,name:"Collapse",path:"../components/src/Layout/Semantics/Aside/stories/Collapse.tsx#Collapse"})}catch(__react_docgen_typescript_loader_error){}function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const layoutProps={};function MDXContent({components,...props}){return(0,esm.kt)("wrapper",_extends({},layoutProps,props,{components,mdxType:"MDXLayout"}),(0,esm.kt)(dist_esm.Meta,{component:Aside.x,title:"Docs/Aside",mdxType:"Meta"}),(0,esm.kt)("h1",{id:"default-width-sidebar"},"Default Width Sidebar"),(0,esm.kt)(Editor.Editor,{code:"/**\n * Copyright (c) 2023 Google LLC\n * SPDX-License-Identifier: MIT\n */\nimport React from 'react'\nimport { Aside } from '../../../..'\n\nexport default function DefaultWidthSidebar() {\n  return <Aside width=\"sidebar\" />\n}\n",mdxType:"Editor"}),(0,esm.kt)("h1",{id:"width-navigation"},"Width Navigation"),(0,esm.kt)(Editor.Editor,{code:"/**\n * Copyright (c) 2023 Google LLC\n * SPDX-License-Identifier: MIT\n */\nimport React from 'react'\nimport { Aside } from '../../../..'\n\nexport default function WidthNavigation() {\n  return <Aside width=\"navigation\" />\n}\n",mdxType:"Editor"}),(0,esm.kt)("h1",{id:"width-rail"},"Width Rail"),(0,esm.kt)(Editor.Editor,{code:"/**\n * Copyright (c) 2023 Google LLC\n * SPDX-License-Identifier: MIT\n */\nimport React from 'react'\nimport { Aside } from '../../../..'\n\nexport default function AsideWidthRail() {\n  return <Aside width=\"rail\" />\n}\n",mdxType:"Editor"}),(0,esm.kt)("h1",{id:"collapse"},"Collapse"),(0,esm.kt)(Editor.Editor,{code:"/**\n * Copyright (c) 2023 Google LLC\n * SPDX-License-Identifier: MIT\n */\nimport React from 'react'\nimport { useToggle } from '../../../../utils'\nimport { Aside, FieldToggleSwitch, Space } from '../../../..'\nimport type { AsideProps } from '../../..'\n\nexport default function AsideCollapse(props: AsideProps) {\n  const { value, toggle } = useToggle(false)\n\n  return (\n    <Space>\n      <Aside collapse={!value} {...props}>\n        Aside content\n      </Aside>\n      <FieldToggleSwitch\n        m=\"small\"\n        label=\"Show Aside\"\n        onChange={toggle}\n        on={value}\n      />\n    </Space>\n  )\n}\n",mdxType:"Editor"}),(0,esm.kt)("h1",{id:"border"},"Border"),(0,esm.kt)(Editor.Editor,{code:'/**\n * Copyright (c) 2023 Google LLC\n * SPDX-License-Identifier: MIT\n */\nimport React from \'react\'\nimport { Aside } from \'../../../..\'\n\nexport default function BorderBottom() {\n  return (\n    <Aside p="u5" text-align="center" border borderBottom="key">\n      border-bottom\n    </Aside>\n  )\n}\n',mdxType:"Editor"}),(0,esm.kt)(Editor.Editor,{code:'/**\n * Copyright (c) 2023 Google LLC\n * SPDX-License-Identifier: MIT\n */\nimport React from \'react\'\nimport { Aside } from \'../../../..\'\n\nexport default function BorderLeft() {\n  return (\n    <Aside p="u5" text-align="center" border borderLeft="key">\n      border-left\n    </Aside>\n  )\n}\n',mdxType:"Editor"}),(0,esm.kt)(Editor.Editor,{code:'/**\n * Copyright (c) 2023 Google LLC\n * SPDX-License-Identifier: MIT\n */\nimport React from \'react\'\nimport { Aside } from \'../../../..\'\n\nexport default function BorderRight() {\n  return (\n    <Aside p="u5" text-align="center" border borderRight="key">\n      border-right\n    </Aside>\n  )\n}\n',mdxType:"Editor"}),(0,esm.kt)(Editor.Editor,{code:'/**\n * Copyright (c) 2023 Google LLC\n * SPDX-License-Identifier: MIT\n */\nimport React from \'react\'\nimport { Aside } from \'../../../..\'\n\nexport default function BorderTop() {\n  return (\n    <Aside p="u5" text-align="center" border borderTop="key">\n      border-top\n    </Aside>\n  )\n}\n',mdxType:"Editor"}),(0,esm.kt)(Editor.Editor,{code:'/**\n * Copyright (c) 2023 Google LLC\n * SPDX-License-Identifier: MIT\n */\nimport React from \'react\'\nimport { Aside } from \'../../../..\'\n\nexport default function BorderX() {\n  return (\n    <Aside p="u5" text-align="center" border borderX="key">\n      border-left and border-right\n    </Aside>\n  )\n}\n',mdxType:"Editor"}),(0,esm.kt)(Editor.Editor,{code:'/**\n * Copyright (c) 2023 Google LLC\n * SPDX-License-Identifier: MIT\n */\nimport React from \'react\'\nimport { Aside } from \'../../../..\'\n\nexport default function BorderY() {\n  return (\n    <Aside p="u5" text-align="center" border borderY="key">\n      border-bottom and border-top\n    </Aside>\n  )\n}\n',mdxType:"Editor"}),(0,esm.kt)("h2",{id:"props"},"Props"),(0,esm.kt)(dist_esm.ArgsTable,{of:Aside.x,exclude:defaultArgTypes.q,mdxType:"ArgsTable"}))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Docs/Aside",component:Aside.x,includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>(0,esm.kt)(MDXContent,null)};const index_stories=componentMeta,__namedExportsOrder=["__page"]}}]);