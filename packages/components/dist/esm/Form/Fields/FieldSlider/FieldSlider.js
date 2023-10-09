let _ = t => t,
  _t;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { useID } from '../../../utils';
import { Slider } from '../../Inputs/Slider';
import { Field, omitFieldProps, pickFieldProps } from '../Field';
const FieldSliderComponent = forwardRef((props, ref) => {
  const id = useID(props.id);
  return React.createElement(Field, _extends({
    "data-testid": "FieldSliderId"
  }, pickFieldProps(props), {
    id: id
  }), React.createElement(Slider, _extends({}, omitFieldProps(props), {
    "aria-describedby": `describedby-${id}`,
    id: id,
    ref: ref
  })));
});
FieldSliderComponent.displayName = 'FieldSliderComponent';
export const FieldSlider = styled(FieldSliderComponent).withConfig({
  displayName: "FieldSlider",
  componentId: "sc-u2l8no-0"
})(_t || (_t = _``));
//# sourceMappingURL=FieldSlider.js.map