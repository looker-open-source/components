function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useState } from 'react';
import { Dialog, DialogLayout } from '../../Dialog';
import { Button, ButtonTransparent } from '../../Button';
export default function Controlled(props) {
  const [isOpen, setIsOpen] = useState(false);
  return React.createElement(React.Fragment, null, React.createElement(Dialog, _extends({}, props, {
    isOpen: isOpen,
    onClose: () => setIsOpen(false),
    content: React.createElement(DialogLayout, {
      header: "Simple header",
      footer: React.createElement(React.Fragment, null, React.createElement(Button, {
        onClick: () => setIsOpen(false)
      }, "Done Reading"), React.createElement(ButtonTransparent, {
        color: "neutral",
        onClick: () => setIsOpen(false)
      }, "Finish Later"))
    }, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\\' s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.")
  })), React.createElement(Button, {
    onClick: () => setIsOpen(true)
  }, "Open Dialog"));
}
//# sourceMappingURL=Controlled.js.map