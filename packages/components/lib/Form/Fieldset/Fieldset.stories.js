import React from 'react';
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { Button } from '../../Button';
import { Divider } from '../../Divider';
import { Link } from '../../Link';
import { Status } from '../../Status';
import { Tooltip } from '../../Tooltip';
import { FieldCheckbox, FieldCheckboxGroup, FieldRadioGroup, FieldText } from '../Fields';
import { Form } from '../Form';
import { Fieldset } from './Fieldset';
export default {
  argTypes,
  component: Fieldset,
  title: 'Fieldset'
};

const Fields = ({
  inline
}) => React.createElement(React.Fragment, null, React.createElement(FieldText, {
  inline: inline,
  placeholder: "First name",
  required: true,
  label: "First name",
  description: "This is a description"
}), React.createElement(FieldText, {
  inline: inline,
  label: "Middle",
  placeholder: "Middle"
}), React.createElement(FieldText, {
  inline: inline,
  required: true,
  label: "Last name",
  placeholder: "Last name"
}));

const Template = args => {
  return React.createElement(Form, {
    m: "xxlarge",
    maxWidth: "600px"
  }, React.createElement(Fieldset, args, React.createElement(Fields, null)));
};

export const Basic = Template.bind({});
export const Inline = Template.bind({});
Inline.args = {
  inline: true
};
export const Legend = Template.bind({});
Legend.args = {
  legend: 'Standard Legend, Standard FieldText'
};
export const InlineLegend = Template.bind({});
InlineLegend.args = {
  inline: true,
  legend: 'Inline w/ Legend'
};
export const LegendInlineFields = () => React.createElement(Fieldset, {
  legend: "Individual fields inline"
}, React.createElement(Fields, {
  inline: true
}));
export const Accordion = () => React.createElement(Fieldset, {
  legend: "This is the Legend",
  accordion: true,
  defaultOpen: true
}, React.createElement(FieldCheckbox, {
  name: "box1",
  label: "you can click here"
}), React.createElement(FieldCheckbox, {
  name: "box2",
  label: "here too"
}), React.createElement(FieldCheckbox, {
  name: "box3",
  label: "also here"
}));
export const AccordionAlt = () => {
  const options = [{
    detail: React.createElement(Tooltip, {
      content: "PNW > Wisconsin",
      placement: "right"
    }, React.createElement(Status, {
      size: "small",
      intent: "neutral"
    })),
    label: 'Cheddar',
    required: true,
    value: 'cheddar'
  }, {
    detail: React.createElement(Tooltip, {
      placement: "right",
      content: React.createElement(React.Fragment, null, "Some helpful explanatory text. ", React.createElement(Link, null, "Learn more"))
    }, React.createElement(Status, {
      size: "small",
      intent: "neutral"
    })),
    disabled: true,
    label: 'Green',
    value: 'blue'
  }, {
    label: 'Swiss',
    tooltip: 'Has holes',
    value: 'swiss'
  }];
  const value = 'blue';
  return React.createElement(React.Fragment, null, React.createElement(Fieldset, {
    width: "26rem",
    legend: "Advanced Cheese Options",
    accordion: true,
    defaultOpen: true
  }, React.createElement(FieldRadioGroup, {
    defaultValue: value,
    label: "Favorite",
    options: options
  }), React.createElement(FieldRadioGroup, {
    defaultValue: value,
    label: "Worst",
    options: options
  }), React.createElement(FieldCheckboxGroup, {
    defaultValue: [value],
    label: "Would Eat",
    options: options
  })), React.createElement(Divider, {
    my: "xxlarge"
  }), React.createElement(Fieldset, {
    legend: "Advanced Cheese Options",
    accordion: true,
    defaultOpen: true
  }, ' ', React.createElement(FieldRadioGroup, {
    defaultValue: value,
    label: "Favorite",
    options: options,
    inline: true
  }), React.createElement(FieldCheckboxGroup, {
    defaultValue: [value],
    label: "Edible",
    options: options,
    inline: true
  })));
};
AccordionAlt.parameters = {
  storyshots: {
    disable: true
  }
};
export const Nesting = () => React.createElement(Fieldset, {
  gap: "u10"
}, React.createElement(Button, {
  fullWidth: true
}, "Button A"), React.createElement(Button, {
  fullWidth: true
}, "Button B"), React.createElement(Button, {
  fullWidth: true
}, "Button C"), React.createElement(Fieldset, {
  gap: "none"
}, React.createElement(Button, {
  fullWidth: true
}, "Button A"), React.createElement(Button, {
  fullWidth: true
}, "Button B"), React.createElement(Button, {
  fullWidth: true
}, "Button C"), React.createElement(Fieldset, {
  gap: "u4"
}, React.createElement(Button, {
  fullWidth: true
}, "Button A"), React.createElement(Button, {
  fullWidth: true
}, "Button B"), React.createElement(Button, {
  fullWidth: true
}, "Button C"))));
Nesting.parameters = {
  storyshots: {
    disable: true
  }
};
export const FieldsHideLabel = () => React.createElement(Fieldset, {
  fieldsHideLabel: true,
  legend: "This is the Legend 1"
}, React.createElement(FieldText, {
  label: "First Label"
}), React.createElement(FieldText, {
  label: "Second Label"
}), React.createElement(FieldText, {
  label: "Third Label",
  hideLabel: false
}));
//# sourceMappingURL=Fieldset.stories.js.map