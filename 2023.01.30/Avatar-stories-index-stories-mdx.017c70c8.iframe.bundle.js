"use strict";(globalThis.webpackChunk_looker_storybook=globalThis.webpackChunk_looker_storybook||[]).push([[9779],{"./src/defaultArgTypes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>defaultArgTypes,q:()=>excludedProps});const defaultArgTypes={as:{table:{disable:!0}},forwardedAs:{table:{disable:!0}},ref:{table:{disable:!0}},theme:{table:{disable:!0}}},excludedProps=Object.keys(defaultArgTypes)},"../components/src/Avatar/stories/index.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>index_stories});__webpack_require__("../../node_modules/react/index.js");var esm=__webpack_require__("../../node_modules/@mdx-js/react/dist/esm.js"),dist_esm=__webpack_require__("../../node_modules/@storybook/addon-docs/dist/esm/index.js"),src=__webpack_require__("../components/src/index.ts"),Editor=__webpack_require__("./src/Editor/index.tsx"),defaultArgTypes=__webpack_require__("./src/defaultArgTypes.ts");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const layoutProps={};function MDXContent({components,...props}){return(0,esm.kt)("wrapper",_extends({},layoutProps,props,{components,mdxType:"MDXLayout"}),(0,esm.kt)(dist_esm.Meta,{component:src.Avatar,title:"Docs/Avatar",mdxType:"Meta"}),(0,esm.kt)("h1",{id:"avatar"},"Avatar"),(0,esm.kt)("p",null,(0,esm.kt)("inlineCode",{parentName:"p"},"Avatar")," is most often used to identify individual users or groups. There are three variations on it:"),(0,esm.kt)("ul",null,(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("inlineCode",{parentName:"li"},"AvatarUser")," displays the profile image, if there is one available, or the user's initials."),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("inlineCode",{parentName:"li"},"AvatarIcon")," displays an icon as the avatar, which can be selected with the icon prop, and has the ",(0,esm.kt)("inlineCode",{parentName:"li"},"User")," icon as default."),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("inlineCode",{parentName:"li"},"AvatarCombo")," displayed ",(0,esm.kt)("inlineCode",{parentName:"li"},"AvatarUser")," or ",(0,esm.kt)("inlineCode",{parentName:"li"},"AvatarIcon")," with secondary ",(0,esm.kt)("inlineCode",{parentName:"li"},"AvatarIcon")," connected to it.")),(0,esm.kt)("h3",{id:"accessibility"},"Accessibility"),(0,esm.kt)("p",null,"If you want ",(0,esm.kt)("inlineCode",{parentName:"p"},"Avatar")," as a clickable-target use ",(0,esm.kt)("inlineCode",{parentName:"p"},'role="button"'),". This will help with usability and accessibility."),(0,esm.kt)(Editor.Editor,{code:"/**\n * Copyright (c) 2023 Google LLC\n * SPDX-License-Identifier: MIT\n */\n\nimport React from 'react'\nimport { AvatarIcon } from '../..'\n\nexport default function Accessible() {\n  return <AvatarIcon role=\"button\" />\n}\n",mdxType:"Editor"}),(0,esm.kt)("p",null,"Alternatively, the ",(0,esm.kt)("inlineCode",{parentName:"p"},"AvatarButton")," component can be used."),(0,esm.kt)(Editor.Editor,{code:"/**\n * Copyright (c) 2023 Google LLC\n * SPDX-License-Identifier: MIT\n */\n\nimport React from 'react'\nimport { AvatarButton } from '../..'\n\nexport default function Button() {\n  return (\n    <AvatarButton\n      imageUrl=\"https://github.com/looker-open-source/components/blob/1b708b472d974987e80c30bbbb286911a438542a/packages/components/test-assets/cheese.png?raw=true\"\n      label=\"Your Account\"\n    ></AvatarButton>\n  )\n}\n",mdxType:"Editor"}),(0,esm.kt)("h2",{id:"avataruser"},"AvatarUser"),(0,esm.kt)("p",null,"Takes a ",(0,esm.kt)("inlineCode",{parentName:"p"},"User")," object as specified by Looker's SDK and produces an ",(0,esm.kt)("inlineCode",{parentName:"p"},"Avatar"),". The minimum keys in object are ",(0,esm.kt)("inlineCode",{parentName:"p"},"avatar_url"),", ",(0,esm.kt)("inlineCode",{parentName:"p"},"first_name")," and ",(0,esm.kt)("inlineCode",{parentName:"p"},"last_name"),". If the user in question has a blank image (Gravatar's default if the user hasn't yet selected a profile picture) the user's initials will be used instead of the image."),(0,esm.kt)(Editor.Editor,{code:"/**\n * Copyright (c) 2023 Google LLC\n * SPDX-License-Identifier: MIT\n */\n\nimport React from 'react'\nimport { Box2, AvatarUser } from '../..'\n\nexport default function User() {\n  const data = {\n    avatar_url:\n      'https://github.com/looker-open-source/components/blob/1b708b472d974987e80c30bbbb286911a438542a/packages/components/test-assets/cheese.png?raw=true',\n    first_name: 'Cheddar',\n    last_name: 'Cheese',\n  }\n  const noImageData = { ...data, avatar_url: null }\n  return (\n    <Box2 display=\"flex\" justifyContent=\"space-around\" alignItems=\"center\">\n      <AvatarUser user={data}></AvatarUser>\n      <AvatarUser user={noImageData}></AvatarUser>\n    </Box2>\n  )\n}\n",mdxType:"Editor"}),(0,esm.kt)("h2",{id:"avataricon"},"AvatarIcon"),(0,esm.kt)("p",null,"Has a default icon value of ",(0,esm.kt)("inlineCode",{parentName:"p"},"User"),". That value can be specified by setting the ",(0,esm.kt)("inlineCode",{parentName:"p"},"icon")," property."),(0,esm.kt)(Editor.Editor,{code:"/**\n * Copyright (c) 2023 Google LLC\n * SPDX-License-Identifier: MIT\n */\n\nimport React from 'react'\nimport * as MaterialIcons from '@styled-icons/material'\nimport { Box2, AvatarIcon } from '../..'\n\nexport default function Icon() {\n  return (\n    <Box2 display=\"flex\" justifyContent=\"space-around\" alignItems=\"center\">\n      <AvatarIcon />\n      <AvatarIcon icon={<MaterialIcons.Code />} />\n    </Box2>\n  )\n}\n",mdxType:"Editor"}),(0,esm.kt)("h3",{id:"size"},"Size"),(0,esm.kt)("p",null,"Both ",(0,esm.kt)("inlineCode",{parentName:"p"},"AvatarIcon")," and ",(0,esm.kt)("inlineCode",{parentName:"p"},"AvatarUser")," can have a specify a size. Possible values are ",(0,esm.kt)("inlineCode",{parentName:"p"},"xxsmall"),", ",(0,esm.kt)("inlineCode",{parentName:"p"},"xsmall"),", ",(0,esm.kt)("inlineCode",{parentName:"p"},"small"),", ",(0,esm.kt)("inlineCode",{parentName:"p"},"medium")," or ",(0,esm.kt)("inlineCode",{parentName:"p"},"large")," and ",(0,esm.kt)("inlineCode",{parentName:"p"},"small")," is the default value. If you specify ",(0,esm.kt)("inlineCode",{parentName:"p"},"xxsmall")," for ",(0,esm.kt)("inlineCode",{parentName:"p"},"AvatarUser")," will only display the first initial."),(0,esm.kt)(Editor.Editor,{code:'/**\n * Copyright (c) 2023 Google LLC\n * SPDX-License-Identifier: MIT\n */\n\nimport React from \'react\'\nimport { Box2, AvatarIcon, AvatarUser } from \'../..\'\n\nexport default function Size() {\n  const data = {\n    avatar_url: \'https://www.fillmurray.com/150/150\',\n    first_name: \'Bill\',\n    last_name: \'Murray\',\n  }\n  return (\n    <Box2 display="flex" justifyContent="space-around" alignItems="center">\n      <AvatarIcon size="xxsmall" />\n      <AvatarIcon size="xsmall" />\n      <AvatarIcon />\n      <AvatarIcon size="medium" />\n      <AvatarIcon size="large" />\n      <AvatarUser user={data} size="xxsmall" />\n      <AvatarUser user={data} size="xsmall" />\n      <AvatarUser user={data} />\n      <AvatarUser user={data} size="medium" />\n      <AvatarUser user={data} size="large" />\n    </Box2>\n  )\n}\n',mdxType:"Editor"}),(0,esm.kt)("h3",{id:"color"},"Color"),(0,esm.kt)("p",null,"Avatars allow the developer to specify a color to use. Default Colors:"),(0,esm.kt)("ul",null,(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("inlineCode",{parentName:"li"},"AvatarIcon"),": ",(0,esm.kt)("inlineCode",{parentName:"li"},"keyFocus")),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("inlineCode",{parentName:"li"},"AvatarUser"),": ",(0,esm.kt)("inlineCode",{parentName:"li"},"key"),(0,esm.kt)(Editor.Editor,{code:'/**\n * Copyright (c) 2023 Google LLC\n * SPDX-License-Identifier: MIT\n */\n\nimport React from \'react\'\nimport { Box2, AvatarIcon, AvatarUser } from \'../..\'\n\nexport default function Color() {\n  const data = {\n    avatar_url: \'https://www.fillmurray.com/150/150\',\n    first_name: \'Bill\',\n    last_name: \'Murray\',\n  }\n  return (\n    <Box2 display="flex" justifyContent="space-around" alignItems="center">\n      <AvatarUser user={data} />\n      <AvatarIcon />\n      <AvatarUser color="inform" user={data} />\n      <AvatarIcon color="inform" />\n      <AvatarUser color="positive" user={data} />\n      <AvatarIcon color="positive" />\n      <AvatarIcon color="inverseOn" bg="positive" />\n    </Box2>\n  )\n}\n',mdxType:"Editor"}))),(0,esm.kt)("p",null,"A combination of ",(0,esm.kt)("inlineCode",{parentName:"p"},"AvatarUser")," and ",(0,esm.kt)("inlineCode",{parentName:"p"},"AvatarIcon"),"."),(0,esm.kt)("ul",null,(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("inlineCode",{parentName:"li"},"secondaryIcon")," - icon used for secondary avatar. Default: ",(0,esm.kt)("inlineCode",{parentName:"li"},"User")),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("inlineCode",{parentName:"li"},"secondaryColor")," - color to use for secondary avatar border & icon. Default: ",(0,esm.kt)("inlineCode",{parentName:"li"},"key")),(0,esm.kt)("li",{parentName:"ul"},(0,esm.kt)("inlineCode",{parentName:"li"},"secondaryBg")," - color to use for secondary avatar background. Default: ",(0,esm.kt)("inlineCode",{parentName:"li"},"inverseOn"),(0,esm.kt)(Editor.Editor,{code:"/**\n * Copyright (c) 2023 Google LLC\n * SPDX-License-Identifier: MIT\n */\n\nimport React from 'react'\nimport * as MaterialIcons from '@styled-icons/material'\nimport { Box2, AvatarCombo } from '../..'\n\nexport default function Combo() {\n  const data = {\n    avatar_url:\n      'https://github.com/looker-open-source/components/blob/1b708b472d974987e80c30bbbb286911a438542a/packages/components/test-assets/cheese.png?raw=true',\n    first_name: 'Cheddar',\n    last_name: 'Cheese',\n  }\n  const noImageData = { ...data, avatar_url: null }\n  return (\n    <Box2 display=\"flex\" justifyContent=\"space-around\" alignItems=\"center\">\n      <AvatarCombo\n        user={data}\n        secondaryIcon={<MaterialIcons.Person />}\n      ></AvatarCombo>\n      <AvatarCombo\n        user={noImageData}\n        secondaryIcon={<MaterialIcons.Person />}\n      ></AvatarCombo>\n    </Box2>\n  )\n}\n",mdxType:"Editor"}))),(0,esm.kt)("h2",{id:"props"},"Props"),(0,esm.kt)(dist_esm.ArgsTable,{of:src.Avatar,exclude:defaultArgTypes.q,mdxType:"ArgsTable"}))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Docs/Avatar",component:src.Avatar,includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>(0,esm.kt)(MDXContent,null)};const index_stories=componentMeta,__namedExportsOrder=["__page"]}}]);