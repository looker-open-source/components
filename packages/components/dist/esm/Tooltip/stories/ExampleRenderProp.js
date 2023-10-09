import React from 'react';
import { Tooltip } from '../Tooltip';
import { Button } from '../../Button';
export default function ExampleRenderProp() {
  return React.createElement(Tooltip, {
    content: "Example using render props exploded"
  }, props => React.createElement(Button, {
    "aria-describedby": props['aria-describedby'],
    className: props.className,
    onBlur: props.onBlur,
    onFocus: props.onFocus,
    onMouseOut: props.onMouseOut,
    onMouseOver: props.onMouseOver,
    ref: props.ref
  }, "Render Props Example"));
}
//# sourceMappingURL=ExampleRenderProp.js.map