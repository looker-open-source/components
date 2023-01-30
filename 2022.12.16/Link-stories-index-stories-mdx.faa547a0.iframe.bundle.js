"use strict";(globalThis.webpackChunk_looker_storybook=globalThis.webpackChunk_looker_storybook||[]).push([[4848],{"./src/defaultArgTypes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>defaultArgTypes,q:()=>excludedProps});const defaultArgTypes={as:{table:{disable:!0}},forwardedAs:{table:{disable:!0}},ref:{table:{disable:!0}},theme:{table:{disable:!0}}},excludedProps=Object.keys(defaultArgTypes)},"../components/src/Link/stories/index.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>index_stories});__webpack_require__("../../node_modules/react/index.js");var esm=__webpack_require__("../../node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("../../node_modules/@storybook/addon-docs/dist/esm/index.js"),Link=__webpack_require__("../components/src/Link/Link.tsx"),Editor=__webpack_require__("./src/Editor/index.tsx"),defaultArgTypes=__webpack_require__("./src/defaultArgTypes.ts");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const layoutProps={};function MDXContent({components,...props}){return(0,esm.kt)("wrapper",_extends({},layoutProps,props,{components,mdxType:"MDXLayout"}),(0,esm.kt)(dist_esm.Meta,{component:Link.r,title:"Docs/Link",mdxType:"Meta"}),(0,esm.kt)("h1",{id:"link"},"Link"),(0,esm.kt)("p",null,"The ",(0,esm.kt)("inlineCode",{parentName:"p"},"<Link />")," component renders an ",(0,esm.kt)("inlineCode",{parentName:"p"},"<a>")," tag that accepts and ",(0,esm.kt)("inlineCode",{parentName:"p"},"href")," property. You can also supply an optional ",(0,esm.kt)("inlineCode",{parentName:"p"},"id")," property if you want to give your anchor an id."),(0,esm.kt)(Editor.Editor,{code:'/*\n\n MIT License\n\n Copyright (c) 2022 Looker Data Sciences, Inc.\n\n Permission is hereby granted, free of charge, to any person obtaining a copy\n of this software and associated documentation files (the "Software"), to deal\n in the Software without restriction, including without limitation the rights\n to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n copies of the Software, and to permit persons to whom the Software is\n furnished to do so, subject to the following conditions:\n\n The above copyright notice and this permission notice shall be included in all\n copies or substantial portions of the Software.\n\n THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n SOFTWARE.\n\n */\n\nimport React from \'react\'\nimport { Link, Space } from \'../..\'\n\nexport default function Basic() {\n  return (\n    <Space around>\n      <Link href="https://google.com">👋 I am a link!</Link>\n      <Link href="https://google.com" id="thumbs-up">\n        👍 I am a link with an id\n      </Link>\n    </Space>\n  )\n}\n',mdxType:"Editor"}),(0,esm.kt)("h2",{id:"external"},"External"),(0,esm.kt)("p",null,"If you are linking to an external resource, we recommend setting ",(0,esm.kt)("inlineCode",{parentName:"p"},"external")," to true in order to render the icon indicating that you're about to leave the current website."),(0,esm.kt)(Editor.Editor,{code:'/*\n\n MIT License\n\n Copyright (c) 2022 Looker Data Sciences, Inc.\n\n Permission is hereby granted, free of charge, to any person obtaining a copy\n of this software and associated documentation files (the "Software"), to deal\n in the Software without restriction, including without limitation the rights\n to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n copies of the Software, and to permit persons to whom the Software is\n furnished to do so, subject to the following conditions:\n\n The above copyright notice and this permission notice shall be included in all\n copies or substantial portions of the Software.\n\n THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n SOFTWARE.\n\n */\n\nimport React from \'react\'\nimport { Link } from \'../..\'\n\nexport default function External() {\n  return (\n    <Link href="https://google.com" isExternal>\n      Leaving this domain\n    </Link>\n  )\n}\n',mdxType:"Editor"}),(0,esm.kt)("h2",{id:"underline"},"Underline"),(0,esm.kt)("p",null,"By default, the underline appears on hover, focus, active, and visited states. To always disable the underline, set the ",(0,esm.kt)("inlineCode",{parentName:"p"},"underline")," prop to ",(0,esm.kt)("inlineCode",{parentName:"p"},"false"),". To always enable it, set the prop to ",(0,esm.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,esm.kt)(Editor.Editor,{code:'/*\n\n MIT License\n\n Copyright (c) 2022 Looker Data Sciences, Inc.\n\n Permission is hereby granted, free of charge, to any person obtaining a copy\n of this software and associated documentation files (the "Software"), to deal\n in the Software without restriction, including without limitation the rights\n to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n copies of the Software, and to permit persons to whom the Software is\n furnished to do so, subject to the following conditions:\n\n The above copyright notice and this permission notice shall be included in all\n copies or substantial portions of the Software.\n\n THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n SOFTWARE.\n\n */\n\nimport React from \'react\'\nimport { Link, Space } from \'../..\'\n\nexport default function Underline() {\n  return (\n    <Space around>\n      <Link href="https://google.com">\n        By default, underline appears on hover\n      </Link>\n      <Link href="https://google.com" underline>\n        I always have an underline\n      </Link>\n      <Link href="https://google.com" underline={false}>\n        I never have an underline\n      </Link>\n    </Space>\n  )\n}\n',mdxType:"Editor"}),(0,esm.kt)("h2",{id:"keycolor"},"KeyColor"),(0,esm.kt)("p",null,"Set ",(0,esm.kt)("inlineCode",{parentName:"p"},"keyColor")," to true if you wish the link color to be branded as defined by your theme object."),(0,esm.kt)(Editor.Editor,{code:'/*\n\n MIT License\n\n Copyright (c) 2022 Looker Data Sciences, Inc.\n\n Permission is hereby granted, free of charge, to any person obtaining a copy\n of this software and associated documentation files (the "Software"), to deal\n in the Software without restriction, including without limitation the rights\n to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n copies of the Software, and to permit persons to whom the Software is\n furnished to do so, subject to the following conditions:\n\n The above copyright notice and this permission notice shall be included in all\n copies or substantial portions of the Software.\n\n THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n SOFTWARE.\n\n */\n\nimport React from \'react\'\nimport { Link } from \'../..\'\n\nexport default function KeyColor() {\n  return (\n    <>\n      <Link href="https://google.com" keyColor>\n        Rendered in the brand color\n      </Link>\n    </>\n  )\n}\n',mdxType:"Editor"}),(0,esm.kt)("h2",{id:"props"},"Props"),(0,esm.kt)(dist_esm.ArgsTable,{of:Link.r,exclude:defaultArgTypes.q,mdxType:"ArgsTable"}))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Docs/Link",component:Link.r,includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>(0,esm.kt)(MDXContent,null)};const index_stories=componentMeta,__namedExportsOrder=["__page"]}}]);