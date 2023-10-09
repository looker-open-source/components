let _ = t => t,
  _t;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { useID } from '../../../utils';
import { RangeSlider } from '../../Inputs/RangeSlider';
import { Field, omitFieldProps, pickFieldProps } from '../Field';
const FieldRangeSliderComponent = forwardRef((props, ref) => {
  const id = useID(props.id);
  return React.createElement(Field, _extends({
    "data-testid": "FieldSliderId"
  }, pickFieldProps(props), {
    id: id,
    ariaLabelOnly: true
  }), React.createElement(RangeSlider, _extends({}, omitFieldProps(props), {
    "aria-describedby": `describedby-${id}`,
    "aria-labelledby": `labelledby-${id}`,
    id: id,
    ref: ref
  })));
});
FieldRangeSliderComponent.displayName = 'FieldRangeSliderComponent';
export const FieldRangeSlider = styled(FieldRangeSliderComponent).withConfig({
  displayName: "FieldRangeSlider",
  componentId: "sc-qtwi2i-0"
})(_t || (_t = _``));
//# sourceMappingURL=FieldRangeSlider.js.map