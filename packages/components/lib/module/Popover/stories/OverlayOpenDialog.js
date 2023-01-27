

import { Button, Paragraph, SpaceVertical, Heading, useToggle, Dialog, DialogContent, Box, FieldSelect, Menu, MenuItem, Tooltip } from '@looker/components';
import { ScrollLockContext, FocusTrapContext } from '@looker/components-providers';
import React, { useContext } from 'react';
import { Popover } from '..';
export default function OverlayOpenDialog() {
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
    }, "Open Dialog"), React.createElement(Box, {
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
  }, "Open Dialog"), React.createElement(Box, {
    height: 1000
  }));
}
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
  }, "Open Alert"), React.createElement(Box, {
    height: 500
  })));
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
//# sourceMappingURL=OverlayOpenDialog.js.map