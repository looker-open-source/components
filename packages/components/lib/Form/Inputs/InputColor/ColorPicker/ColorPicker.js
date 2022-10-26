let _ = t => t,
    _t;

import React from 'react';
import styled from 'styled-components';
import { SpaceVertical } from '../../../../Layout';
import { LightSaturationPreview, HueSlider } from '..';

const ColorPickerInternal = ({
  hsv,
  setHsv,
  width
}) => React.createElement(SpaceVertical, {
  gap: "u4",
  "data-testid": "color-picker"
}, React.createElement(LightSaturationPreview, {
  hsv: hsv,
  setHsv: setHsv,
  width: width
}), React.createElement(HueSlider, {
  hsv: hsv,
  setHsv: setHsv,
  width: width
}));

export const ColorPicker = styled(ColorPickerInternal).withConfig({
  displayName: "ColorPicker",
  componentId: "sc-1ss1d7c-0"
})(_t || (_t = _``));
//# sourceMappingURL=ColorPicker.js.map