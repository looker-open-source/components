
import { Box, Button, ComponentsProvider, DialogContext, FieldCheckbox, FieldRadioGroup } from '@looker/components';
import React from 'react';
import { Popover } from '..';
export default function PopoverFieldRadioGroup() {
  const Wrapper = () => {
    const [value, setValue] = React.useState('');
    const {
      closeModal
    } = React.useContext(DialogContext);
    return React.createElement(Box, {
      pt: "u3",
      width: "100%"
    }, React.createElement(FieldCheckbox, {
      label: "Checkbox",
      value: "checked"
    }), React.createElement(Box, {
      pl: "u6",
      pt: "u2"
    }, React.createElement(FieldRadioGroup, {
      options: [{
        label: 'One',
        value: '1'
      }, {
        label: 'Two',
        value: '2'
      }, {
        label: 'Three',
        value: '3'
      }],
      value: value,
      onChange: setValue
    })), React.createElement(Button, {
      onClick: closeModal
    }, "Done"));
  };
  return React.createElement(ComponentsProvider, null, React.createElement(Box, {
    p: "ui1",
    className: "App"
  }, React.createElement(Popover, {
    "aria-haspopup": true,
    width: "300px",
    content: React.createElement(Wrapper, null)
  }, React.createElement(Button, null, "Open Popover"))));
}
//# sourceMappingURL=PopoverFieldRadioGroup.js.map