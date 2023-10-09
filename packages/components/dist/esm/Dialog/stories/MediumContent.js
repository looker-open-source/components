function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useContext } from 'react';
import { Dialog, DialogContext, DialogLayout } from '../../Dialog';
import { Button, ButtonTransparent, ButtonOutline } from '../../Button';
export default function MediumContent(props) {
  return React.createElement(Dialog, _extends({}, props, {
    content: React.createElement(DialogExampleLayout, null)
  }), React.createElement(ButtonOutline, null, "Open Dialog"));
}
const DialogExampleLayout = () => {
  const {
    closeModal
  } = useContext(DialogContext);
  return React.createElement(DialogLayout, {
    header: "Simple header",
    footer: React.createElement(React.Fragment, null, React.createElement(Button, {
      onClick: closeModal
    }, "Done Reading"), React.createElement(ButtonTransparent, {
      color: "neutral",
      onClick: closeModal
    }, "Finish Later"))
  }, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\\' s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.");
};
//# sourceMappingURL=MediumContent.js.map