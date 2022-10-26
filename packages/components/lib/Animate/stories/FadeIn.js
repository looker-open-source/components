import React from 'react';
import { FadeIn } from '../..';
import { useToggle } from '../../utils/useToggle';
export default (() => {
  const {
    value,
    toggle
  } = useToggle(false);
  return React.createElement(React.Fragment, null, React.createElement("button", {
    onClick: toggle
  }, "Toggle Content"), value && React.createElement(React.Fragment, null, React.createElement(FadeIn, null, "This fades in."), React.createElement(FadeIn, {
    delay: "complex",
    duration: "intricate"
  }, "This fades in more slowly.")));
});
//# sourceMappingURL=FadeIn.js.map