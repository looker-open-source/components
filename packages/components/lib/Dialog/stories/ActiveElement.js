import React from 'react';
import { Button } from '../../Button';
import { Dialog } from '../Dialog';
import { DialogLayout } from '../Layout';
import { InputText } from '../../Form/Inputs/InputText/InputText';
import { Select } from '../../Form/Inputs/Select/Select';
import { SpaceVertical } from '../../Layout/Space/SpaceVertical';
export default (() => {
  return React.createElement(Dialog, {
    content: React.createElement(DialogLayout, null, React.createElement(SpaceVertical, null, React.createElement(InputText, null), React.createElement(Select, {
      options: [{
        label: '1',
        value: '1'
      }],
      placeholder: "Choose value"
    }), React.createElement("select", null, React.createElement("option", null, "1"))))
  }, React.createElement(Button, null, "Open Dialog"));
});
//# sourceMappingURL=ActiveElement.js.map