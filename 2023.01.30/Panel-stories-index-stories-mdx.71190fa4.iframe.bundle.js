"use strict";(globalThis.webpackChunk_looker_storybook=globalThis.webpackChunk_looker_storybook||[]).push([[4356],{"./src/defaultArgTypes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>defaultArgTypes,q:()=>excludedProps});const defaultArgTypes={as:{table:{disable:!0}},forwardedAs:{table:{disable:!0}},ref:{table:{disable:!0}},theme:{table:{disable:!0}}},excludedProps=Object.keys(defaultArgTypes)},"../components/src/Panel/stories/index.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>index_stories});__webpack_require__("../../node_modules/react/index.js");var esm=__webpack_require__("../../node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("../../node_modules/@storybook/addon-docs/dist/esm/index.js"),src=__webpack_require__("../components/src/index.ts"),Editor=__webpack_require__("./src/Editor/index.tsx"),defaultArgTypes=__webpack_require__("./src/defaultArgTypes.ts");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const layoutProps={};function MDXContent({components,...props}){return(0,esm.kt)("wrapper",_extends({},layoutProps,props,{components,mdxType:"MDXLayout"}),(0,esm.kt)(dist_esm.Meta,{component:src.Panel,title:"Docs/Panel",mdxType:"Meta"}),(0,esm.kt)("h1",{id:"panel"},"Panel"),(0,esm.kt)("p",null,"Use the ",(0,esm.kt)("inlineCode",{parentName:"p"},"Panel")," component to display content with a directional animation. All ",(0,esm.kt)("inlineCode",{parentName:"p"},"Panel"),"s need to be wrapped in the ",(0,esm.kt)("inlineCode",{parentName:"p"},"Panels")," component to ensure proper animation."),(0,esm.kt)(Editor.Editor,{code:"/*\n\n MIT License\n\n Copyright (c) 2022 Looker Data Sciences, Inc.\n\n Permission is hereby granted, free of charge, to any person obtaining a copy\n of this software and associated documentation files (the \"Software\"), to deal\n in the Software without restriction, including without limitation the rights\n to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n copies of the Software, and to permit persons to whom the Software is\n furnished to do so, subject to the following conditions:\n\n The above copyright notice and this permission notice shall be included in all\n copies or substantial portions of the Software.\n\n THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n SOFTWARE.\n\n */\nimport React from 'react'\nimport { List } from '../../List'\nimport { ListItem } from '../../ListItem'\nimport { Aside, Page, Section } from '../../Layout'\nimport { Panel, Panels } from '..'\n\nexport default function Direction() {\n  return (\n    <Page hasAside>\n      <Aside width=\"12rem\">\n        <Panels>\n          <List>\n            <Panel\n              content={'content from Right...'}\n              title={'Right'}\n              defaultOpen={true}\n              direction={'right'}\n            >\n              <ListItem>option A</ListItem>\n            </Panel>\n            <Panel\n              content={'content from Left...'}\n              direction={'left'}\n              defaultOpen={true}\n              title=\"Left\"\n            >\n              <ListItem>Left</ListItem>\n            </Panel>\n            <ListItem>option C</ListItem>\n            <ListItem>option D</ListItem>\n          </List>\n        </Panels>\n      </Aside>\n      <Section>Main stuff here...</Section>\n    </Page>\n  )\n}\n",mdxType:"Editor"}),(0,esm.kt)("h1",{id:"usepanel"},"usePanel"),(0,esm.kt)("p",null,"We provide a custom hook that returns the opener function and rendered panel.\nNote: ",(0,esm.kt)("inlineCode",{parentName:"p"},"panel")," needs to be placed before ",(0,esm.kt)("inlineCode",{parentName:"p"},"children"),". The order in which the ",(0,esm.kt)("inlineCode",{parentName:"p"},"panel")," will be render metters for the component to be rendered correctly."),(0,esm.kt)(Editor.Editor,{code:"/*\n\n MIT License\n\n Copyright (c) 2022 Looker Data Sciences, Inc.\n\n Permission is hereby granted, free of charge, to any person obtaining a copy\n of this software and associated documentation files (the \"Software\"), to deal\n in the Software without restriction, including without limitation the rights\n to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n copies of the Software, and to permit persons to whom the Software is\n furnished to do so, subject to the following conditions:\n\n The above copyright notice and this permission notice shall be included in all\n copies or substantial portions of the Software.\n\n THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n SOFTWARE.\n\n */\nimport React from 'react'\nimport { List } from '../../List'\nimport { ListItem } from '../../ListItem'\nimport { Panels, usePanel } from '..'\n\nconst HookInner = () => {\n  const { panel, setOpen } = usePanel({\n    content: 'Panel content',\n    title: 'Panel Hook',\n  })\n  return (\n    <>\n      <ListItem onClick={() => setOpen(true)}>Option A</ListItem>\n      {panel}\n    </>\n  )\n}\n\nexport default function Hook() {\n  return (\n    <Panels>\n      <List>\n        <HookInner />\n        <ListItem>Option B</ListItem>\n      </List>\n    </Panels>\n  )\n}\n",mdxType:"Editor"}),(0,esm.kt)(dist_esm.ArgsTable,{of:src.Panel,exclude:defaultArgTypes.q,mdxType:"ArgsTable"}))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Docs/Panel",component:src.Panel,includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>(0,esm.kt)(MDXContent,null)};const index_stories=componentMeta,__namedExportsOrder=["__page"]}}]);