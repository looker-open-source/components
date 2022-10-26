import _extends from "@babel/runtime/helpers/extends";

let _ = t => t,
    _t;

import React, { forwardRef } from 'react';
import styled from 'styled-components';
import omit from 'lodash/omit';
import { useID } from '../../../utils';
import { RangeSlider } from '../../Inputs/RangeSlider';
import { Field, omitFieldProps, pickFieldProps } from '../Field';
const FieldRangeSliderComponent = forwardRef((props, ref) => {
  const id = useID(props.id);
  return React.createElement(Field, _extends({
    "data-testid": "FieldSliderId"
  }, pickFieldProps(omit(props, 'validationMessage')), {
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