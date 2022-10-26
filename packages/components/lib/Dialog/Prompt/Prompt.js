import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _extends from "@babel/runtime/helpers/extends";
const _excluded = ["children"];
import React from 'react';
import { useToggle } from '../../utils';
import { PromptDialog } from './PromptDialog';
export function usePrompt(props) {
  const {
    value,
    setOn,
    setOff
  } = useToggle();
  const rendered = React.createElement(PromptDialog, _extends({}, props, {
    isOpen: value,
    close: setOff
  }));
  return [rendered, setOn];
}
export const Prompt = _ref => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const [dialog, open] = usePrompt(props);
  return React.createElement(React.Fragment, null, children(open), dialog);
};
//# sourceMappingURL=Prompt.js.map