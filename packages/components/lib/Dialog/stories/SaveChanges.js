import React, { useState } from 'react';
import { useConfirm, Dialog, DialogLayout } from '..';
import { Button, Form, FieldText, ButtonTransparent } from '../..';
export const SaveChanges = () => {
  const [name, setName] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const hasUnsavedChanges = () => name !== '';

  const handleConfirm = close => {
    setName('');
    close();
  };

  const [confirm, openConfirmation] = useConfirm({
    buttonColor: 'critical',
    cancelLabel: 'Go Back',
    confirmLabel: 'Discard Changes',
    message: 'Are you sure you want to close the dialog? Unsaved changes will be lost.',
    onCancel: close => {
      close();
    },
    onConfirm: handleConfirm,
    title: 'Discard Changes?',
    width: '500px'
  });

  const handleSave = () => {
    setName('');
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);

    if (hasUnsavedChanges()) {
      openConfirmation();
    }
  };

  const handleChange = event => setName(event.currentTarget.value);

  const footer = React.createElement(React.Fragment, null, React.createElement(Button, {
    onClick: handleSave
  }, "Save"), React.createElement(ButtonTransparent, {
    onClick: handleCancel
  }, "Cancel"));
  return React.createElement(React.Fragment, null, React.createElement(Dialog, {
    isOpen: isOpen,
    onClose: handleCancel,
    content: React.createElement(DialogLayout, {
      footer: footer,
      header: "Edit Name"
    }, React.createElement(Form, {
      onSubmit: handleSave
    }, React.createElement(FieldText, {
      label: "Name",
      onChange: handleChange,
      value: name,
      description: "Enter name, then click \"Cancel\" to trigger confirmation"
    })))
  }), React.createElement("button", {
    onClick: () => setIsOpen(true)
  }, "Tell us your name..."), confirm);
};
SaveChanges.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=SaveChanges.js.map