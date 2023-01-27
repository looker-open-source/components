
import { Button, Paragraph, FieldSelect, Space, ButtonOutline, SpaceVertical, Heading, FieldToggleSwitch, useToggle } from '@looker/components';
import React from 'react';
import { Popover, PopoverContent } from '..';
const options = [{
  label: 'Apples',
  value: '1'
}, {
  label: 'Bananas',
  value: '2'
}, {
  label: 'Oranges',
  value: '3'
}, {
  label: 'Pineapples',
  value: '4'
}, {
  label: 'Kiwis',
  value: '5'
}, {
  label: 'Apples2',
  value: '12'
}, {
  label: 'Bananas2',
  value: '22'
}, {
  label: 'Oranges2',
  value: '32'
}, {
  label: 'Pineapples2',
  value: '42'
}, {
  label: 'Kiwis3',
  value: '52'
}, {
  label: 'Apples3',
  value: '13'
}, {
  label: 'Bananas3',
  value: '23'
}, {
  label: 'Oranges3',
  value: '33'
}, {
  label: 'Pineapples3',
  value: '43'
}, {
  label: 'Kiwis3',
  value: '53'
}, {
  label: 'Apples4',
  value: '14'
}, {
  label: 'Bananas4',
  value: '24'
}, {
  label: 'Oranges4',
  value: '34'
}, {
  label: 'Pineapples4',
  value: '44'
}, {
  label: 'Kiwis4',
  value: '54'
}, {
  label: 'Apples5',
  value: '15'
}, {
  label: 'Bananas5',
  value: '25'
}, {
  label: 'Oranges5',
  value: '35'
}, {
  label: 'Pineapples5',
  value: '45'
}, {
  label: 'Kiwis5',
  value: '55'
}];
export default function PopoverFocusTrap() {
  const {
    value,
    toggle
  } = useToggle(false);
  function getButtonAlert(text) {
    return () => alert(text);
  }
  return React.createElement(SpaceVertical, {
    mt: "large"
  }, React.createElement(Heading, null, "Focus Trap Test"), React.createElement(FieldToggleSwitch, {
    on: value,
    onChange: () => toggle(),
    label: "Cancel Click Outside"
  }), React.createElement(Space, null, React.createElement(Popover, {
    cancelClickOutside: value,
    content: React.createElement(PopoverContent, {
      p: "u5",
      width: "360px"
    }, React.createElement(Paragraph, null, "Does tabbing focus only loop through these 3 buttons & Select?"), React.createElement(Paragraph, null, "Does clicking (or mousedown) each trigger an alert?"), React.createElement(Button, {
      mr: "small",
      onClick: getButtonAlert('First')
    }, "First"), React.createElement(Button, {
      mr: "small",
      onClick: getButtonAlert('Second')
    }, "Second"), React.createElement(Button, {
      mt: "small",
      mb: "medium",
      onMouseDown: getButtonAlert('Third')
    }, "Third (mousedown)"), React.createElement(FieldSelect, {
      label: "Default Value",
      width: 300,
      options: options,
      "aria-label": "Fruits",
      defaultValue: "1"
    }), React.createElement(Paragraph, null, "Does it scroll here when the Select is closed?"), React.createElement(Paragraph, null, "Long text"), React.createElement(Paragraph, null, "Long text"), React.createElement(Paragraph, null, "Long text"), React.createElement(Paragraph, null, "Long text"), React.createElement(Paragraph, null, "Long text"), React.createElement(Paragraph, null, "Long text"), React.createElement(Paragraph, null, "Long text"), React.createElement(Paragraph, null, "Long text"), React.createElement(Paragraph, null, "Long text"), React.createElement(Paragraph, null, "Long text"), React.createElement(Paragraph, null, "Long text"), React.createElement(Paragraph, null, "Long text"), React.createElement(Paragraph, null, "Long text"))
  }, React.createElement(Button, null, "Open Focus Trap Test Popover")), React.createElement(ButtonOutline, {
    onClick: () => alert(`You clicked the button!`)
  }, "Click me with the popover open")), React.createElement(Paragraph, null, "Does it scroll here when the Popover is closed?"), React.createElement(Paragraph, null, "Long text"), React.createElement(Paragraph, null, "Long text"), React.createElement(Paragraph, null, "Long text"), React.createElement(Paragraph, null, "Long text"), React.createElement(Paragraph, null, "Long text"), React.createElement(Paragraph, null, "Long text"), React.createElement(Paragraph, null, "Long text"), React.createElement(Paragraph, null, "Long text"), React.createElement(Paragraph, null, "Long text"), React.createElement(Paragraph, null, "Long text"), React.createElement(Paragraph, null, "Long text"), React.createElement(Paragraph, null, "Long text"), React.createElement(Paragraph, null, "Long text"), React.createElement(Paragraph, null, "Long text"), React.createElement(Paragraph, null, "Long text"), React.createElement(Paragraph, null, "Long text"), React.createElement(Paragraph, null, "Long text"), React.createElement(Paragraph, null, "Long text"), React.createElement(Paragraph, null, "Long text"), React.createElement(Paragraph, null, "Long text"), React.createElement(Paragraph, null, "Long text"), React.createElement(Paragraph, null, "Long text"), React.createElement(Paragraph, null, "Long text"), React.createElement(Paragraph, null, "Long text"), React.createElement(Paragraph, null, "Long text"), React.createElement(Paragraph, null, "Long text"), React.createElement(Paragraph, null, "Long text"), React.createElement(Paragraph, null, "Long text"));
}
//# sourceMappingURL=PopoverFocusTrap.js.map