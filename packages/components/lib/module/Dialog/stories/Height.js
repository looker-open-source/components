

import React, { useContext } from 'react';
import { Dialog, DialogContext, DialogLayout } from '../../Dialog';
import { Button, ButtonTransparent, ButtonOutline } from '../../Button';
export default function MediumContent() {
  const {
    closeModal
  } = useContext(DialogContext);
  return React.createElement(Dialog, {
    height: "1000rem",
    content: React.createElement(DialogLayout, {
      header: "Simple header",
      footer: React.createElement(React.Fragment, null, React.createElement(Button, {
        onClick: closeModal
      }, "Done Reading"), React.createElement(ButtonTransparent, {
        color: "neutral",
        onClick: closeModal
      }, "Finish Later"))
    }, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\\' s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.")
  }, React.createElement(ButtonOutline, null, "Open Dialog"));
}
//# sourceMappingURL=Height.js.map