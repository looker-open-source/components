import _extends from "@babel/runtime/helpers/extends";

let _ = t => t,
    _t;

import React, { forwardRef } from 'react';
import styled from 'styled-components';
import omit from 'lodash/omit';
import { useID } from '../../../utils';
import { Slider } from '../../Inputs/Slider';
import { Field, omitFieldProps, pickFieldProps } from '../Field';
const FieldSliderComponent = forwardRef((props, ref) => {
  const id = useID(props.id);
  return React.createElement(Field, _extends({
    "data-testid": "FieldSliderId"
  }, pickFieldProps(omit(props, 'validationMessage')), {
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