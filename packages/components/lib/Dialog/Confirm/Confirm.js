import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _extends from "@babel/runtime/helpers/extends";
const _excluded = ["children"];
import React from 'react';
import { useToggle } from '../../utils/useToggle';
import { ConfirmationDialog } from './ConfirmationDialog';
export function useConfirm(props) {
  const {
    value,
    setOn,
    setOff
  } = useToggle();
  const rendered = React.createElement(ConfirmationDialog, _extends({}, props, {
    isOpen: value,
    close: setOff
  }));
  return [rendered, setOn];
}
export const Confirm = _ref => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const [confirmation, confirm] = useConfirm(props);
  return React.createElement(React.Fragment, null, children(confirm), confirmation);
};
//# sourceMappingURL=Confirm.js.map