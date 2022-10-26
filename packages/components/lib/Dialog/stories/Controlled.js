import React, { useState } from 'react';
import { Dialog } from '..';
import { DialogMediumContent } from '../../fixtures/DialogMediumContent';
export const Controlled = () => {
  const [isOpen, setOpen] = useState(false);
  return React.createElement(Dialog, {
    content: React.createElement(DialogMediumContent, null),
    isOpen: isOpen,
    setOpen: setOpen
  }, React.createElement("button", null, "Open Dialog"));
};
Controlled.parameters = {
  storyshots: {
    disable: true
  }
};
export const ControlledNoChildren = () => {
  const [isOpen, setOpen] = useState(false);
  return React.createElement(React.Fragment, null, React.createElement(Dialog, {
    content: React.createElement(DialogMediumContent, null),
    isOpen: isOpen,
    setOpen: setOpen
  }), React.createElement("button", {
    onClick: () => setOpen(true)
  }, "Open Dialog"));
};
ControlledNoChildren.parameters = {
  storyshots: {
    disable: true
  }
};
export const ControlledLegacy = () => {
  const [isOpen, setOpen] = useState(false);
  return React.createElement(React.Fragment, null, React.createElement(Dialog, {
    content: React.createElement(DialogMediumContent, null),
    isOpen: isOpen,
    onClose: () => setOpen(false)
  }), React.createElement("button", {
    onClick: () => setOpen(true)
  }, "Open Dialog"));
};
ControlledLegacy.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=Controlled.js.map