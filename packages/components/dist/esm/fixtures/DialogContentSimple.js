import React, { useContext } from 'react';
import { DialogContext } from '../Dialog/DialogContext';
export const SimpleContent = () => {
  const {
    closeModal
  } = useContext(DialogContext);
  return React.createElement(React.Fragment, null, "Dialog content", React.createElement("button", {
    onClick: closeModal
  }, "Done"));
};
//# sourceMappingURL=DialogContentSimple.js.map