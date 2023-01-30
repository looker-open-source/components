"use strict";(globalThis.webpackChunk_looker_storybook=globalThis.webpackChunk_looker_storybook||[]).push([[769],{"../components/src/Popover/stories/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Hover:()=>Hover,MouseUp:()=>MouseUp,MovingTarget:()=>MovingTarget,MultiFunctionButton:()=>MultiFunctionButton,OverflowExamples:()=>OverflowExamples,OverlayOpenDialog:()=>OverlayOpenDialog,Placement:()=>Placement,PopoverFieldRadioGroup:()=>PopoverFieldRadioGroup,PopoverFocusTrap:()=>PopoverFocusTrap,PopoverWithLayout:()=>PopoverWithLayout,PopoverWithLayoutNoFooter:()=>PopoverWithLayoutNoFooter,RenderProps:()=>RenderProps,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var defaultArgTypes=__webpack_require__("./src/defaultArgTypes.ts"),Popover=__webpack_require__("../components/src/Popover/Popover.tsx"),Button=__webpack_require__("../components/src/Button/Button.tsx"),react=__webpack_require__("../../node_modules/react/index.js"),PopoverContent=__webpack_require__("../components/src/Popover/Layout/PopoverContent/PopoverContent.tsx");function Basic(){return react.createElement(Popover.J,{content:react.createElement(PopoverContent.y,null,"Some content")},react.createElement(Button.z,null,"Open"))}var Card=__webpack_require__("../components/src/Card/Card.tsx"),CardContent=__webpack_require__("../components/src/Card/CardContent.tsx"),Space=__webpack_require__("../components/src/Layout/Space/Space/Space.tsx"),Paragraph=__webpack_require__("../components/src/Text/Paragraph/Paragraph.tsx"),PopoverLayout=__webpack_require__("../components/src/Popover/Layout/PopoverLayout.tsx");function Hover(){const hoverRef=react.useRef(null),content=react.createElement(PopoverLayout.L,null,"I'm in the popover");return react.createElement(Card.Z,{ref:hoverRef,raised:!0},react.createElement(CardContent.a,null,react.createElement(Space.T,{between:!0},react.createElement(Paragraph.n,null,"Hovering in this card will show the button that triggers the popover."),react.createElement(Popover.J,{content,hoverDisclosureRef:hoverRef},react.createElement(Button.z,null)))))}var SpaceVertical=__webpack_require__("../components/src/Layout/Space/SpaceVertical/SpaceVertical.tsx");function MouseUp(){return react.createElement(SpaceVertical.s,null,react.createElement(Paragraph.n,null,"Test that the the 1st click outside is cancelled and that clicking the Popover's trigger a 2nd time closes the Popover"),react.createElement(Paragraph.n,null,"Previously, the useCapture = true on the mouseup listener caused the click outside behavior to break on any page that has a React onMouseUp on any element."),react.createElement(Space.T,null,react.createElement(Popover.J,{content:"Popover 1"},react.createElement(Button.z,null,"Open 1st Popover")),react.createElement(Popover.J,{content:"Popover 2"},react.createElement(Button.z,null,"Open 2nd Popover")),react.createElement(Button.z,{onClick:()=>alert("I should be canceled if a Popover was open")},"Click"),react.createElement(Button.z,{onMouseUp:()=>alert("A simple onMouseUp")},"onMouseUp")))}var usePopover=__webpack_require__("../components/src/Popover/usePopover.tsx"),useToggle=__webpack_require__("../components/src/utils/useToggle.ts"),Box=__webpack_require__("../components/src/Layout/Box/Box.tsx"),Heading=__webpack_require__("../components/src/Text/Heading/Heading.tsx");const MovingTargetInner=()=>{const{value,toggle}=(0,useToggle.O)(),{popover,popperInstanceRef,open,ref,isOpen}=(0,usePopover.S)({content:react.createElement(PopoverContent.y,{p:"u5",width:"360px"},react.createElement(Paragraph.n,null,"The anchor is moving around so the Popover position must be updated via popperInstanceRef.current.update.")),placement:"right-end"});return(0,react.useEffect)((()=>{popperInstanceRef.current&&popperInstanceRef.current.update()}),[popperInstanceRef,value]),(0,react.useEffect)((()=>{const int=setInterval((()=>{toggle()}),6e3);return()=>{clearInterval(int)}}),[toggle]),react.createElement(Box.x,{mt:"large"},react.createElement(Heading.X,null,"Moving Target"),popover,react.createElement(Box.x,{mt:value?"xxxlarge":"medium",border:!0,width:150,p:"u3",cursor:"pointer",height:value?80:void 0,onClick:open,ref,className:isOpen?"active":""},"Open Popover"))};function MovingTarget(){return react.createElement(MovingTargetInner,null)}var CopyToClipboard=__webpack_require__("../components/src/CopyToClipboard/CopyToClipboard.tsx");function MultiFunctionButton(){return react.createElement(Popover.J,{content:react.createElement(PopoverContent.y,null,react.createElement(CopyToClipboard.h,{success:"Copied",content:"Copy content"},react.createElement(Button.z,null,"Copy")))},react.createElement(Button.z,null,"Open Popover"))}var ArrowDropDown_esm=__webpack_require__("../../node_modules/@styled-icons/material/ArrowDropDown/ArrowDropDown.esm.js"),ButtonOutline=__webpack_require__("../components/src/Button/ButtonOutline.tsx");const ContentOverflow=({children})=>react.createElement(Box.x,{position:"absolute",top:"40%",left:"40%"},react.createElement(Popover.J,{pin:!0,placement:"bottom",content:react.createElement(PopoverContent.y,{width:"18rem"},react.createElement(Paragraph.n,null,"Stuff above spacer"),react.createElement(Box.x,{height:"60vh",bg:"ui1"},"Spacer"),react.createElement(Paragraph.n,null,"Content below spacer"))},react.createElement(ButtonOutline.I,{iconAfter:react.createElement(ArrowDropDown_esm.D,null),m:"xxlarge"},children)));try{ContentOverflow.displayName="ContentOverflow",ContentOverflow.__docgenInfo={description:"",displayName:"ContentOverflow",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../components/src/Popover/stories/ContentOverflow.tsx#ContentOverflow"]={docgenInfo:ContentOverflow.__docgenInfo,name:"ContentOverflow",path:"../components/src/Popover/stories/ContentOverflow.tsx#ContentOverflow"})}catch(__react_docgen_typescript_loader_error){}const EdgeOverflow=({children,top,left,bottom,right})=>react.createElement(Box.x,{position:"absolute",top,left,bottom,right},react.createElement(Popover.J,{content:react.createElement(PopoverContent.y,{width:"18rem",height:"5rem"},"There's stuff here... it hits the edge"," ")},react.createElement(ButtonOutline.I,{iconAfter:react.createElement(ArrowDropDown_esm.D,null),m:"xxlarge"},children)));try{EdgeOverflow.displayName="EdgeOverflow",EdgeOverflow.__docgenInfo={description:"",displayName:"EdgeOverflow",props:{top:{defaultValue:null,description:"",name:"top",required:!1,type:{name:"number"}},left:{defaultValue:null,description:"",name:"left",required:!1,type:{name:"number"}},bottom:{defaultValue:null,description:"",name:"bottom",required:!1,type:{name:"number"}},right:{defaultValue:null,description:"",name:"right",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../components/src/Popover/stories/EdgeOverflow.tsx#EdgeOverflow"]={docgenInfo:EdgeOverflow.__docgenInfo,name:"EdgeOverflow",path:"../components/src/Popover/stories/EdgeOverflow.tsx#EdgeOverflow"})}catch(__react_docgen_typescript_loader_error){}function OverflowExamples(){return react.createElement(Box.x,{p:"u10",width:"100%",position:"relative",height:"100%"},react.createElement(EdgeOverflow,{top:0,left:0},"Top Left"),react.createElement(EdgeOverflow,{top:0,right:0},"Top Right"),react.createElement(EdgeOverflow,{bottom:0,left:0},"Bottom Left"),react.createElement(EdgeOverflow,{bottom:0,right:0},"Bottom Right"),react.createElement(ContentOverflow,null,"Long popover content (placement ignore too)"),react.createElement("p",null,"...."),react.createElement("p",null,"...."),react.createElement("p",null,"...."),react.createElement("p",null,"...."),react.createElement("p",null,"...."),react.createElement("p",null,"...."),react.createElement("p",null,"...."),react.createElement("p",null,"...."),react.createElement("p",null,"...."),react.createElement("p",null,"...."),react.createElement("p",null,"...."),react.createElement("p",null,"...."),react.createElement("p",null,"...."),react.createElement("p",null,"...."),react.createElement("p",null,"...."),react.createElement("p",null,"...."),react.createElement("p",null,"...."),react.createElement("p",null,"...."),react.createElement("p",null,"...."),react.createElement("p",null,"...."),react.createElement("p",null,"...."),react.createElement("p",null,"...."),react.createElement("p",null,"...."),react.createElement("p",null,"...."),react.createElement("p",null,"...."),react.createElement("p",null,"...."),react.createElement("p",null,"...."),react.createElement("p",null,"...."),react.createElement("p",null,"...."),react.createElement("p",null,"...."),react.createElement("p",null,"...."),react.createElement("p",null,"...."),react.createElement("p",null,"...."),react.createElement("p",null,"...."),react.createElement("p",null,"...."),react.createElement("p",null,"...."),react.createElement("p",null,"...."),react.createElement("p",null,"...."),react.createElement("p",null,"...."),react.createElement("p",null,"...."),react.createElement("p",null,"...."),react.createElement("p",null,"...."),react.createElement("p",null,"...."),react.createElement("p",null,"...."),react.createElement("p",null,"...."),react.createElement("p",null,"...."))}var Dialog=__webpack_require__("../components/src/Dialog/Dialog.tsx"),Menu=__webpack_require__("../components/src/Menu/Menu.tsx"),MenuItem=__webpack_require__("../components/src/Menu/MenuItem/MenuItem.tsx"),src=__webpack_require__("../components/src/index.ts"),DialogContent=__webpack_require__("../components/src/Dialog/Layout/DialogContent/DialogContent.tsx"),ScrollLockProvider=__webpack_require__("../components-providers/src/ScrollLock/ScrollLockProvider.tsx"),FocusTrapProvider=__webpack_require__("../components-providers/src/FocusTrap/FocusTrapProvider.tsx");function OverlayOpenDialog(){const{value,setOn,setOff}=(0,useToggle.O)();return react.createElement(SpaceVertical.s,{mt:"large",align:"start",width:1e3,mx:"auto"},react.createElement(Paragraph.n,null,'Centered layout would be affected by the scrollbar "jump" bug on scroll lock.'),react.createElement(Heading.X,null,"Popover Opening a Dialog"),react.createElement(Popover.J,{content:react.createElement(SpaceVertical.s,{p:"u5"},react.createElement(Button.z,{onClick:setOn},"Open Dialog"),react.createElement(Box.x,{height:500}))},react.createElement(Button.z,null,"Open Popover")),react.createElement(Dialog.V,{isOpen:value,onClose:setOff},react.createElement(DialogInner,null)),react.createElement(Heading.X,null,"Menu Opening a Dialog"),react.createElement(Menu.v,{content:react.createElement(MenuItem.s,{onClick:setOn},"Open Dialog")},react.createElement(src.Tooltip,{content:"Select your favorite kind"},react.createElement(Button.z,{mt:"medium"},"Open Menu"))),react.createElement(Heading.X,null,"Opening a Dialog Directly"),react.createElement(Button.z,{onClick:setOn},"Open Dialog"),react.createElement(Box.x,{height:1e3}))}const DialogInner=()=>{const{activeTrapRef:activeLockRef,disableCurrentTrap:disableCurrentLock,enableCurrentTrap:enableCurrentLock}=(0,react.useContext)(ScrollLockProvider.m),{activeTrapRef,disableCurrentTrap,enableCurrentTrap}=(0,react.useContext)(FocusTrapProvider.X);return react.createElement(DialogContent.c,null,react.createElement(SpaceVertical.s,{align:"start"},react.createElement(Paragraph.n,null,"Scroll lock can be disabled via ScrollLockContext but due to fixed positioning in Dialog, there will be a scrollbar jump."),react.createElement(Button.z,{onClick:()=>{activeLockRef&&activeLockRef.current?disableCurrentLock?.():enableCurrentLock?.()}},"Toggle Scroll Lock"),react.createElement(Button.z,{onClick:()=>{activeTrapRef&&activeTrapRef.current?disableCurrentTrap?.():enableCurrentTrap?.()}},"Toggle Focus Trap"),react.createElement(Paragraph.n,null,"Try opening the Select and picking an option:"),react.createElement(src.FieldSelect,{label:"Default Value",width:300,options,"aria-label":"Fruits",defaultValue:"1"}),react.createElement(Paragraph.n,null,"Try clicking the button:"),react.createElement(Button.z,{onClick:function openAlert(){alert("It's working!")}},"Open Alert"),react.createElement(Box.x,{height:500})))},options=[{label:"Apples",value:"1"},{label:"Bananas",value:"2"},{label:"Oranges",value:"3"},{label:"Pineapples",value:"4"},{label:"Kiwis",value:"5"},{label:"Apples2",value:"12"},{label:"Bananas2",value:"22"},{label:"Oranges2",value:"32"},{label:"Pineapples2",value:"42"},{label:"Kiwis3",value:"52"},{label:"Apples3",value:"13"},{label:"Bananas3",value:"23"},{label:"Oranges3",value:"33"},{label:"Pineapples3",value:"43"},{label:"Kiwis3",value:"53"},{label:"Apples4",value:"14"},{label:"Bananas4",value:"24"},{label:"Oranges4",value:"34"},{label:"Pineapples4",value:"44"},{label:"Kiwis4",value:"54"},{label:"Apples5",value:"15"},{label:"Bananas5",value:"25"},{label:"Oranges5",value:"35"},{label:"Pineapples5",value:"45"},{label:"Kiwis5",value:"55"}];function Placement(){const popoverContent=react.createElement(PopoverContent.y,null,react.createElement(Paragraph.n,{width:300,p:"u10"},"👋 Hello, I am a popover!"));return react.createElement(Box.x,{mt:"large"},react.createElement(Heading.X,null,"Placement"),react.createElement(Box.x,{my:"medium"},react.createElement(Popover.J,{content:popoverContent},react.createElement(Button.z,null,"Default")),react.createElement(Popover.J,{content:popoverContent},react.createElement(Button.z,null,"Default"))))}var DialogContext=__webpack_require__("../components/src/Dialog/DialogContext/index.ts"),ComponentsProvider=__webpack_require__("../components-providers/src/ComponentsProvider.tsx");function PopoverFieldRadioGroup(){const Wrapper=()=>{const[value,setValue]=react.useState(""),{closeModal}=react.useContext(DialogContext.M);return react.createElement(Box.x,{pt:"u3",width:"100%"},react.createElement(src.FieldCheckbox,{label:"Checkbox",value:"checked"}),react.createElement(Box.x,{pl:"u6",pt:"u2"},react.createElement(src.FieldRadioGroup,{options:[{label:"One",value:"1"},{label:"Two",value:"2"},{label:"Three",value:"3"}],value,onChange:setValue})),react.createElement(Button.z,{onClick:closeModal},"Done"))};return react.createElement(ComponentsProvider.t,null,react.createElement(Box.x,{p:"ui1",className:"App"},react.createElement(Popover.J,{"aria-haspopup":!0,width:"300px",content:react.createElement(Wrapper,null)},react.createElement(Button.z,null,"Open Popover"))))}const PopoverFocusTrap_options=[{label:"Apples",value:"1"},{label:"Bananas",value:"2"},{label:"Oranges",value:"3"},{label:"Pineapples",value:"4"},{label:"Kiwis",value:"5"},{label:"Apples2",value:"12"},{label:"Bananas2",value:"22"},{label:"Oranges2",value:"32"},{label:"Pineapples2",value:"42"},{label:"Kiwis3",value:"52"},{label:"Apples3",value:"13"},{label:"Bananas3",value:"23"},{label:"Oranges3",value:"33"},{label:"Pineapples3",value:"43"},{label:"Kiwis3",value:"53"},{label:"Apples4",value:"14"},{label:"Bananas4",value:"24"},{label:"Oranges4",value:"34"},{label:"Pineapples4",value:"44"},{label:"Kiwis4",value:"54"},{label:"Apples5",value:"15"},{label:"Bananas5",value:"25"},{label:"Oranges5",value:"35"},{label:"Pineapples5",value:"45"},{label:"Kiwis5",value:"55"}];function PopoverFocusTrap(){const{value,toggle}=(0,useToggle.O)(!1);function getButtonAlert(text){return()=>alert(text)}return react.createElement(SpaceVertical.s,{mt:"large"},react.createElement(Heading.X,null,"Focus Trap Test"),react.createElement(src.FieldToggleSwitch,{on:value,onChange:()=>toggle(),label:"Cancel Click Outside"}),react.createElement(Space.T,null,react.createElement(Popover.J,{cancelClickOutside:value,content:react.createElement(PopoverContent.y,{p:"u5",width:"360px"},react.createElement(Paragraph.n,null,"Does tabbing focus only loop through these 3 buttons & Select?"),react.createElement(Paragraph.n,null,"Does clicking (or mousedown) each trigger an alert?"),react.createElement(Button.z,{mr:"small",onClick:getButtonAlert("First")},"First"),react.createElement(Button.z,{mr:"small",onClick:getButtonAlert("Second")},"Second"),react.createElement(Button.z,{mt:"small",mb:"medium",onMouseDown:getButtonAlert("Third")},"Third (mousedown)"),react.createElement(src.FieldSelect,{label:"Default Value",width:300,options:PopoverFocusTrap_options,"aria-label":"Fruits",defaultValue:"1"}),react.createElement(Paragraph.n,null,"Does it scroll here when the Select is closed?"),react.createElement(Paragraph.n,null,"Long text"),react.createElement(Paragraph.n,null,"Long text"),react.createElement(Paragraph.n,null,"Long text"),react.createElement(Paragraph.n,null,"Long text"),react.createElement(Paragraph.n,null,"Long text"),react.createElement(Paragraph.n,null,"Long text"),react.createElement(Paragraph.n,null,"Long text"),react.createElement(Paragraph.n,null,"Long text"),react.createElement(Paragraph.n,null,"Long text"),react.createElement(Paragraph.n,null,"Long text"),react.createElement(Paragraph.n,null,"Long text"),react.createElement(Paragraph.n,null,"Long text"),react.createElement(Paragraph.n,null,"Long text"))},react.createElement(Button.z,null,"Open Focus Trap Test Popover")),react.createElement(ButtonOutline.I,{onClick:()=>alert("You clicked the button!")},"Click me with the popover open")),react.createElement(Paragraph.n,null,"Does it scroll here when the Popover is closed?"),react.createElement(Paragraph.n,null,"Long text"),react.createElement(Paragraph.n,null,"Long text"),react.createElement(Paragraph.n,null,"Long text"),react.createElement(Paragraph.n,null,"Long text"),react.createElement(Paragraph.n,null,"Long text"),react.createElement(Paragraph.n,null,"Long text"),react.createElement(Paragraph.n,null,"Long text"),react.createElement(Paragraph.n,null,"Long text"),react.createElement(Paragraph.n,null,"Long text"),react.createElement(Paragraph.n,null,"Long text"),react.createElement(Paragraph.n,null,"Long text"),react.createElement(Paragraph.n,null,"Long text"),react.createElement(Paragraph.n,null,"Long text"),react.createElement(Paragraph.n,null,"Long text"),react.createElement(Paragraph.n,null,"Long text"),react.createElement(Paragraph.n,null,"Long text"),react.createElement(Paragraph.n,null,"Long text"),react.createElement(Paragraph.n,null,"Long text"),react.createElement(Paragraph.n,null,"Long text"),react.createElement(Paragraph.n,null,"Long text"),react.createElement(Paragraph.n,null,"Long text"),react.createElement(Paragraph.n,null,"Long text"),react.createElement(Paragraph.n,null,"Long text"),react.createElement(Paragraph.n,null,"Long text"),react.createElement(Paragraph.n,null,"Long text"),react.createElement(Paragraph.n,null,"Long text"),react.createElement(Paragraph.n,null,"Long text"),react.createElement(Paragraph.n,null,"Long text"))}function PopoverWithLayout(){return react.createElement(Popover.J,{width:640,content:react.createElement(PopoverLayout.L,{header:"Header text",footer:!0},"We the People of the United States")},react.createElement(Button.z,null,"Open"))}function PopoverWithLayoutNoFooter(){return react.createElement(Popover.J,{width:640,content:react.createElement(PopoverLayout.L,{header:"Header text",footer:!1},"We the People of the United States")},react.createElement(Button.z,null,"Open"))}function RenderProps(){const popoverContent=react.createElement(PopoverContent.y,null,react.createElement(Paragraph.n,{width:300,p:"u10"},"👋 Hello, I am a popover!"));return react.createElement(Popover.J,{content:popoverContent},(props=>react.createElement("button",props,"Test")))}const index_stories={argTypes:defaultArgTypes.W,component:Popover.J,parameters:{storyshots:{disable:!0}},title:"Stories/Popover"},__namedExportsOrder=["Basic","Hover","MouseUp","MovingTarget","MultiFunctionButton","OverflowExamples","OverlayOpenDialog","Placement","PopoverFieldRadioGroup","PopoverFocusTrap","PopoverWithLayout","PopoverWithLayoutNoFooter","RenderProps"]},"./src/defaultArgTypes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>defaultArgTypes,q:()=>excludedProps});const defaultArgTypes={as:{table:{disable:!0}},forwardedAs:{table:{disable:!0}},ref:{table:{disable:!0}},theme:{table:{disable:!0}}},excludedProps=Object.keys(defaultArgTypes)}}]);