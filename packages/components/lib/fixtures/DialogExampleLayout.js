import React, { useContext } from 'react';
import { DialogContext, DialogLayout, Button, ButtonTransparent } from '..';
export const DialogExampleLayout = ({
  header,
  children
}) => {
  const {
    closeModal
  } = useContext(DialogContext);
  return React.createElement(DialogLayout, {
    header: header,
    footer: React.createElement(React.Fragment, null, React.createElement(Button, {
      onClick: closeModal
    }, "Done Reading"), React.createElement(ButtonTransparent, {
      color: "neutral",
      onClick: closeModal
    }, "Finish Later"))
  }, children);
};
//# sourceMappingURL=DialogExampleLayout.js.map