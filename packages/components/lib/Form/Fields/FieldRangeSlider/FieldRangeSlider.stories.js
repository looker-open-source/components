let _ = t => t,
    _t;

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { Button, ButtonGroup, ButtonItem } from '../../../Button';
import { Space } from '../../../Layout';
import { FieldRangeSlider } from './FieldRangeSlider';
export default {
  argTypes,
  component: FieldRangeSlider,
  title: 'FieldRangeSlider'
};

const Template = args => React.createElement(FieldRangeSlider, args);

export const Basic = Template.bind({});
Basic.args = {};
export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};
export const Steps = Template.bind({});
Steps.args = {
  max: 1000,
  min: 100,
  step: 50
};
Steps.parameters = {
  storyshots: {
    disable: true
  }
};
export const Floating = Template.bind({});
Floating.args = {
  max: 3.7,
  min: 0.1,
  step: 0.1
};
Floating.parameters = {
  storyshots: {
    disable: true
  }
};
export const ReadOnly = Template.bind({});
ReadOnly.args = {
  defaultValue: [3, 7],
  readOnly: true
};
ReadOnly.parameters = {
  storyshots: {
    disable: true
  }
};
export const Controlled = () => {
  const [controlledValue, setControlledValue] = useState([30, 40]);

  const handleChange = value => setControlledValue(value);

  return React.createElement(React.Fragment, null, React.createElement(FieldRangeSlider, {
    label: "Controlled Example",
    description: `${controlledValue[0]} – ${controlledValue[1]}`,
    min: 20,
    max: 50,
    value: controlledValue,
    onChange: handleChange
  }), React.createElement(Space, null, React.createElement(Button, {
    onClick: () => handleChange([25, 45])
  }, "25 \u2014 45"), React.createElement(Button, {
    onClick: () => handleChange([30, 37])
  }, "30 \u2014 37"), React.createElement(Button, {
    onClick: () => handleChange([39, 40])
  }, "39 \u2014 40")));
};
Controlled.parameters = {
  storyshots: {
    disable: true
  }
};
export const DashboardFilters = () => {
  const [renderSiblings, setRenderSiblings] = useState(false);
  const [buttonValue, setButtonValue] = useState(['CA']);
  useEffect(() => {
    const timeout = setTimeout(() => setRenderSiblings(true), 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return React.createElement(FilterGrid, null, renderSiblings && React.createElement(ButtonGroup, {
    value: buttonValue,
    onChange: setButtonValue
  }, React.createElement(ButtonItem, {
    value: "CA"
  }, "California"), React.createElement(ButtonItem, {
    value: "AK"
  }, "Alaska"), React.createElement(ButtonItem, {
    value: "UT"
  }, "Utah")), React.createElement(FieldRangeSlider, null));
};
DashboardFilters.parameters = {
  storyshots: {
    disable: true
  }
};
const FilterGrid = styled.div.withConfig({
  displayName: "FieldRangeSliderstories__FilterGrid",
  componentId: "sc-mhxgg8-0"
})(_t || (_t = _`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: 1fr 1fr;
  padding: 30px;
`));
//# sourceMappingURL=FieldRangeSlider.stories.js.map