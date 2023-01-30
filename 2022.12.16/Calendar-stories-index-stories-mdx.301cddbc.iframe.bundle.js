"use strict";(globalThis.webpackChunk_looker_storybook=globalThis.webpackChunk_looker_storybook||[]).push([[9405],{"./src/defaultArgTypes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>defaultArgTypes,q:()=>excludedProps});const defaultArgTypes={as:{table:{disable:!0}},forwardedAs:{table:{disable:!0}},ref:{table:{disable:!0}},theme:{table:{disable:!0}}},excludedProps=Object.keys(defaultArgTypes)},"../components/src/Calendar/stories/index.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>index_stories});__webpack_require__("../../node_modules/react/index.js");var esm=__webpack_require__("../../node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("../../node_modules/@storybook/addon-docs/dist/esm/index.js"),src=__webpack_require__("../components/src/index.ts"),Editor=__webpack_require__("./src/Editor/index.tsx"),defaultArgTypes=__webpack_require__("./src/defaultArgTypes.ts");try{Basic.displayName="Basic",Basic.__docgenInfo={description:"",displayName:"Basic",props:{firstDayOfWeek:{defaultValue:null,description:"The day to use as first day of the week, starting from 0 (Sunday) to 6 (Saturday).\nUses the locale default (0 for en-US)",name:"firstDayOfWeek",required:!1,type:{name:"number"}},locale:{defaultValue:{value:"date-fns/locale/en-US"},description:"Locale object from date-fns\n@example import ko from 'date-fns/locale/ko'",name:"locale",required:!1,type:{name:"Locale"}},onMonthChange:{defaultValue:null,description:"",name:"onMonthChange",required:!1,type:{name:"NavCB"}},showNextButton:{defaultValue:null,description:"",name:"showNextButton",required:!1,type:{name:"boolean"}},showPreviousButton:{defaultValue:null,description:"",name:"showPreviousButton",required:!1,type:{name:"boolean"}},viewMonth:{defaultValue:null,description:"Set the month displayed. Defaults to the current month",name:"viewMonth",required:!1,type:{name:"Date"}},isRange:{defaultValue:null,description:"Set to true for range selection mode",name:"isRange",required:!1,type:{name:"boolean"}},selectedDate:{defaultValue:null,description:"Control the selected date for single date selection mode",name:"selectedDate",required:!1,type:{name:"Date"}},onSelectDate:{defaultValue:null,description:"Callback when the user selects a date (both single date and range selection mode)",name:"onSelectDate",required:!1,type:{name:"NavCB"}},selectedRange:{defaultValue:null,description:"Control the date range for range selection mode (use with isRange: true)",name:"selectedRange",required:!1,type:{name:"RangeModifier"}},onSelectRange:{defaultValue:null,description:"Callback for range selection mode (use with isRange: true)",name:"onSelectRange",required:!1,type:{name:"((range: RangeModifier) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../components/src/Calendar/stories/Basic.tsx#Basic"]={docgenInfo:Basic.__docgenInfo,name:"Basic",path:"../components/src/Calendar/stories/Basic.tsx#Basic"})}catch(__react_docgen_typescript_loader_error){}function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const layoutProps={};function MDXContent({components,...props}){return(0,esm.kt)("wrapper",_extends({},layoutProps,props,{components,mdxType:"MDXLayout"}),(0,esm.kt)(dist_esm.Meta,{component:src.Calendar,title:"Docs/Calendar",mdxType:"Meta"}),(0,esm.kt)("h1",{id:"calendar"},"Calendar"),(0,esm.kt)("p",null,(0,esm.kt)("inlineCode",{parentName:"p"},"Calendar")," is a stateless component which renders a standard calendar month. It accepts a limited amount of props, and is the foundation of our more useful ",(0,esm.kt)("a",{parentName:"p",href:"/components/forms/input-date"},(0,esm.kt)("inlineCode",{parentName:"a"},"InputDate"))," and ",(0,esm.kt)("inlineCode",{parentName:"p"},"InputDateRange")," components."),(0,esm.kt)(Editor.Editor,{code:"/*\n\n MIT License\n\n Copyright (c) 2022 Looker Data Sciences, Inc.\n\n Permission is hereby granted, free of charge, to any person obtaining a copy\n of this software and associated documentation files (the \"Software\"), to deal\n in the Software without restriction, including without limitation the rights\n to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n copies of the Software, and to permit persons to whom the Software is\n furnished to do so, subject to the following conditions:\n\n The above copyright notice and this permission notice shall be included in all\n copies or substantial portions of the Software.\n\n THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n SOFTWARE.\n\n */\n\nimport React, { useState } from 'react'\nimport { Calendar } from '../..'\nimport type { CalendarProps } from '../Calendar'\n\nexport default function Basic({\n  onSelectDate,\n  selectedDate,\n  viewMonth: viewMonthProp = new Date('Jul 1, 2021'),\n  ...args\n}: Partial<CalendarProps>) {\n  const [date, setDate] = useState(selectedDate)\n  const handleSelect = (newDate: Date) => {\n    onSelectDate?.(newDate)\n    setDate(newDate)\n  }\n  const [viewMonth, setViewMonth] = useState(viewMonthProp)\n  return (\n    <Calendar\n      {...args}\n      onSelectDate={handleSelect}\n      selectedDate={date}\n      viewMonth={viewMonth}\n      onMonthChange={setViewMonth}\n    />\n  )\n}\n",mdxType:"Editor"}),(0,esm.kt)("h2",{id:"i18n"},"I18n"),(0,esm.kt)("p",null,"Install the ",(0,esm.kt)("a",{parentName:"p",href:"https://date-fns.org/",target:"_blank",rel:"nofollow noopener noreferrer"},(0,esm.kt)("inlineCode",{parentName:"a"},"date-fns"))," package, import the necessary locale, and pass it to ",(0,esm.kt)("inlineCode",{parentName:"p"},"ComponentsProvider"),"."),(0,esm.kt)(Editor.Editor,{code:"/*\n\n MIT License\n\n Copyright (c) 2022 Looker Data Sciences, Inc.\n\n Permission is hereby granted, free of charge, to any person obtaining a copy\n of this software and associated documentation files (the \"Software\"), to deal\n in the Software without restriction, including without limitation the rights\n to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n copies of the Software, and to permit persons to whom the Software is\n furnished to do so, subject to the following conditions:\n\n The above copyright notice and this permission notice shall be included in all\n copies or substantial portions of the Software.\n\n THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n SOFTWARE.\n\n */\n\nimport React, { useState } from 'react'\nimport ko from 'date-fns/locale/ko'\nimport { Calendar, ComponentsProvider } from '../..'\n\nexport default function ProviderLocale() {\n  const initialDate = new Date('Jul 1, 2021')\n  const [date, setDate] = useState(initialDate)\n  const [viewMonth, setViewMonth] = useState(initialDate)\n\n  return (\n    <ComponentsProvider dateLocale={ko}>\n      <Calendar\n        onSelectDate={setDate}\n        selectedDate={date}\n        viewMonth={viewMonth}\n        onMonthChange={setViewMonth}\n      />\n    </ComponentsProvider>\n  )\n}\n",mdxType:"Editor"}),(0,esm.kt)("p",null,"The locale can also be passed directly to the ",(0,esm.kt)("inlineCode",{parentName:"p"},"Calendar")," component."),(0,esm.kt)(Editor.Editor,{code:"/*\n\n MIT License\n\n Copyright (c) 2022 Looker Data Sciences, Inc.\n\n Permission is hereby granted, free of charge, to any person obtaining a copy\n of this software and associated documentation files (the \"Software\"), to deal\n in the Software without restriction, including without limitation the rights\n to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n copies of the Software, and to permit persons to whom the Software is\n furnished to do so, subject to the following conditions:\n\n The above copyright notice and this permission notice shall be included in all\n copies or substantial portions of the Software.\n\n THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n SOFTWARE.\n\n */\n\nimport React, { useState } from 'react'\nimport ko from 'date-fns/locale/ko'\nimport { Calendar } from '../..'\n\nexport default function Locale() {\n  const initialDate = new Date('Jul 1, 2021')\n  const [date, setDate] = useState(initialDate)\n  const [viewMonth, setViewMonth] = useState(initialDate)\n\n  return (\n    <Calendar\n      onSelectDate={setDate}\n      selectedDate={date}\n      viewMonth={viewMonth}\n      onMonthChange={setViewMonth}\n      locale={ko}\n    />\n  )\n}\n",mdxType:"Editor"}),(0,esm.kt)("h2",{id:"props"},"Props"),(0,esm.kt)(dist_esm.ArgsTable,{of:src.Calendar,exclude:defaultArgTypes.q,mdxType:"ArgsTable"}))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Docs/Calendar",component:src.Calendar,includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>(0,esm.kt)(MDXContent,null)};const index_stories=componentMeta,__namedExportsOrder=["__page"]}}]);