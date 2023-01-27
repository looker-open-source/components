

import React from 'react';
import { ConfirmLayout, Button, ButtonTransparent } from '../../..';
export default function Layout() {
  function handleConfirm() {
    alert('Changes discarded');
  }
  function handleCancel() {
    alert('Went back');
  }
  return React.createElement(ConfirmLayout, {
    title: "Discard Changes?",
    message: "Are you sure you want to close the dialog? Unsaved changes will be lost.",
    primaryButton: React.createElement(Button, {
      onClick: handleConfirm,
      color: "critical"
    }, "Discard changes"),
    secondaryButton: React.createElement(ButtonTransparent, {
      onClick: handleCancel,
      color: "neutral"
    }, "Go back")
  });
}
//# sourceMappingURL=Layout.js.map