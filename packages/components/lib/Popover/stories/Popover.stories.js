import React, { useEffect, useContext } from 'react';
import { ScrollLockContext, FocusTrapContext } from '@looker/components-providers';
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { Box2, Button, ButtonOutline, CopyToClipboard, Dialog, FieldSelect, FieldToggleSwitch, Heading, Menu, MenuItem, DialogContent, Paragraph, Space, SpaceVertical, useToggle, PopoverLayout, FieldRadioGroup, DialogContext, FieldCheckbox, ComponentsProvider } from '../..';
import { Tooltip } from '../../Tooltip';
import { Popover } from '../Popover';
import { PopoverContent } from '../Layout/PopoverContent';
import { usePopover } from '../usePopover';
import { Constitution, ConstitutionShort } from '../../fixtures/Constitution';
export * from './OverflowExamples';
export default {
  argTypes,
  component: Popover,
  title: 'Popover'
};
export const Basic = () => React.createElement(Popover, {
  content: React.createElement(PopoverContent, null, "Some content")
}, React.createElement(Button, null, "Open"));
Basic.parameters = {
  storyshots: {
    disable: true
  }
};
export const PopoverWithLayout = () => React.createElement(Popover, {
  width: 640,
  content: React.createElement(PopoverLayout, {
    header: "Header text",
    footer: true
  }, React.createElement(Constitution, null))
}, React.createElement(Button, null, "Open"));
PopoverWithLayout.parameters = {
  storyshots: {
    disable: true
  }
};
export const PopoverWithLayoutBasic = () => React.createElement(Popover, {
  width: 640,
  content: React.createElement(PopoverLayout, {
    header: "Header text",
    footer: false
  }, React.createElement(ConstitutionShort, {
    fontSize: "small"
  }))
}, React.createElement(Button, null, "Open Popover"));
PopoverWithLayoutBasic.parameters = {
  storyshots: {
    disable: true
  }
};
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
export const PopoverFocusTrap = () => {
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
};
PopoverFocusTrap.parameters = {
  storyshots: {
    disable: true
  }
};
export const OverlayOpenDialog = () => {
  const {
    value,
    setOn,
    setOff
  } = useToggle();
  return React.createElement(SpaceVertical, {
    mt: "large",
    align: "start",
    width: 1000,
    mx: "auto"
  }, React.createElement(Paragraph, null, "Centered layout would be affected by the scrollbar \"jump\" bug on scroll lock."), React.createElement(Heading, null, "Popover Opening a Dialog"), React.createElement(Popover, {
    content: React.createElement(SpaceVertical, {
      p: "u5"
    }, React.createElement(Button, {
      onClick: setOn
    }, "Open Dialog"), React.createElement(Box2, {
      height: 500
    }))
  }, React.createElement(Button, null, "Open Popover")), React.createElement(Dialog, {
    isOpen: value,
    onClose: setOff
  }, React.createElement(DialogInner, null)), React.createElement(Heading, null, "Menu Opening a Dialog"), React.createElement(Menu, {
    content: React.createElement(MenuItem, {
      onClick: setOn
    }, "Open Dialog")
  }, React.createElement(Tooltip, {
    content: "Select your favorite kind"
  }, React.createElement(Button, {
    mt: "medium"
  }, "Open Menu"))), React.createElement(Heading, null, "Opening a Dialog Directly"), React.createElement(Button, {
    onClick: setOn
  }, "Open Dialog"), React.createElement(Box2, {
    height: 1000
  }));
};
OverlayOpenDialog.parameters = {
  storyshots: {
    disable: true
  }
};

const DialogInner = () => {
  const {
    activeTrapRef: activeLockRef,
    disableCurrentTrap: disableCurrentLock,
    enableCurrentTrap: enableCurrentLock
  } = useContext(ScrollLockContext);

  const toggleScrollLock = () => {
    if (activeLockRef && activeLockRef.current) {
      disableCurrentLock === null || disableCurrentLock === void 0 ? void 0 : disableCurrentLock();
    } else {
      enableCurrentLock === null || enableCurrentLock === void 0 ? void 0 : enableCurrentLock();
    }
  };

  const {
    activeTrapRef,
    disableCurrentTrap,
    enableCurrentTrap
  } = useContext(FocusTrapContext);

  const toggleFocusTrap = () => {
    if (activeTrapRef && activeTrapRef.current) {
      disableCurrentTrap === null || disableCurrentTrap === void 0 ? void 0 : disableCurrentTrap();
    } else {
      enableCurrentTrap === null || enableCurrentTrap === void 0 ? void 0 : enableCurrentTrap();
    }
  };

  function openAlert() {
    alert(`It's working!`);
  }

  return React.createElement(DialogContent, null, React.createElement(SpaceVertical, {
    align: "start"
  }, React.createElement(Paragraph, null, "Scroll lock can be disabled via ScrollLockContext but due to fixed positioning in Dialog, there will be a scrollbar jump."), React.createElement(Button, {
    onClick: toggleScrollLock
  }, "Toggle Scroll Lock"), React.createElement(Button, {
    onClick: toggleFocusTrap
  }, "Toggle Focus Trap"), React.createElement(Paragraph, null, "Try opening the Select and picking an option:"), React.createElement(FieldSelect, {
    label: "Default Value",
    width: 300,
    options: options,
    "aria-label": "Fruits",
    defaultValue: "1"
  }), React.createElement(Paragraph, null, "Try clicking the button:"), React.createElement(Button, {
    onClick: openAlert
  }, "Open Alert"), React.createElement(Box2, {
    height: 500
  })));
};

const popoverContent = React.createElement(PopoverContent, null, React.createElement(Paragraph, {
  width: 300,
  p: "u10"
}, "\uD83D\uDC4B Hello, I am a popover!"));
export const RenderProps = () => React.createElement(Popover, {
  content: popoverContent
}, props => React.createElement("button", props, "Test"));
RenderProps.parameters = {
  storyshots: {
    disable: true
  }
};
export const RenderPropsSpread = () => React.createElement(Popover, {
  content: popoverContent
}, props => React.createElement("button", props, "Test"));
RenderPropsSpread.parameters = {
  storyshots: {
    disable: true
  }
};
export const Placement = () => {
  const popoverContent = React.createElement(PopoverContent, null, React.createElement(Paragraph, {
    width: 300,
    p: "u10"
  }, "\uD83D\uDC4B Hello, I am a popover!"));
  return React.createElement(Box2, {
    mt: "large"
  }, React.createElement(Heading, null, "Placement"), React.createElement(Box2, {
    my: "medium"
  }, React.createElement(Popover, {
    content: popoverContent
  }, React.createElement(Button, null, "Default")), React.createElement(Popover, {
    content: popoverContent
  }, React.createElement(Button, null, "Default"))));
};
Placement.parameters = {
  storyshots: {
    disable: true
  }
};

const MovingTargetInner = () => {
  const {
    value,
    toggle
  } = useToggle();
  const {
    popover,
    popperInstanceRef,
    open,
    ref,
    isOpen
  } = usePopover({
    content: React.createElement(PopoverContent, {
      p: "u5",
      width: "360px"
    }, React.createElement(Paragraph, null, "The anchor is moving around so the Popover position must be updated via popperInstanceRef.current.update.")),
    placement: 'right-end'
  });
  useEffect(() => {
    popperInstanceRef.current && popperInstanceRef.current.update();
  }, [popperInstanceRef, value]);
  useEffect(() => {
    const int = setInterval(() => {
      toggle();
    }, 6000);
    return () => {
      clearInterval(int);
    };
  }, [toggle]);
  return React.createElement(Box2, {
    mt: "large"
  }, React.createElement(Heading, null, "Moving Target"), popover, React.createElement(Box2, {
    mt: value ? 'xxxlarge' : 'medium',
    border: true,
    width: 150,
    p: "u3",
    cursor: "pointer",
    height: value ? 80 : undefined,
    onClick: open,
    ref: ref,
    className: isOpen ? 'active' : ''
  }, "Open Popover"));
};

export const MovingTarget = () => React.createElement(MovingTargetInner, null);
MovingTarget.parameters = {
  storyshots: {
    disable: true
  }
};
export const MouseUp = () => {
  return React.createElement(SpaceVertical, null, React.createElement(Paragraph, null, "Test that the the 1st click outside is cancelled and that clicking the Popover's trigger a 2nd time closes the Popover"), React.createElement(Paragraph, null, "Previously, the useCapture = true on the mouseup listener caused the click outside behavior to break on any page that has a React onMouseUp on any element."), React.createElement(Space, null, React.createElement(Popover, {
    content: "Popover 1"
  }, React.createElement(Button, null, "Open 1st Popover")), React.createElement(Popover, {
    content: "Popover 2"
  }, React.createElement(Button, null, "Open 2nd Popover")), React.createElement(Button, {
    onClick: () => alert('I should be canceled if a Popover was open')
  }, "Click"), React.createElement(Button, {
    onMouseUp: () => alert('A simple onMouseUp')
  }, "onMouseUp")));
};
MouseUp.parameters = {
  storyshots: {
    disable: true
  }
};
export const MultiFunctionButton = () => {
  return React.createElement(Popover, {
    content: React.createElement(PopoverContent, null, React.createElement(CopyToClipboard, {
      success: "Copied",
      content: "Copy content"
    }, React.createElement(Button, null, "Copy")))
  }, React.createElement(Button, null, "Open Popover"));
};
MultiFunctionButton.parameters = {
  docs: {
    disable: true
  },
  storyshots: {
    disable: true
  }
};

const Wrapper = () => {
  const [value, setValue] = React.useState('');
  const {
    closeModal
  } = React.useContext(DialogContext);
  return React.createElement(Box2, {
    pt: "u3",
    width: "100%"
  }, React.createElement(FieldCheckbox, {
    label: "Checkbox",
    value: "checked"
  }), React.createElement(Box2, {
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

export const PopoverFieldRadioGroup = () => {
  return React.createElement(ComponentsProvider, null, React.createElement(Box2, {
    p: "ui1",
    className: "App"
  }, React.createElement(Popover, {
    "aria-haspopup": true,
    width: "300px",
    content: React.createElement(Wrapper, null)
  }, React.createElement(Button, null, "Open Popover"))));
};
PopoverFieldRadioGroup.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=Popover.stories.js.map