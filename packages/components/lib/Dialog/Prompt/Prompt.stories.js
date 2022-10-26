import React, { useState } from 'react';
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { Button } from '../../Button';
import { Prompt, usePrompt } from './Prompt';
export default {
  argTypes,
  component: Prompt,
  title: 'Prompt'
};
export const Basic = () => {
  return React.createElement(Prompt, {
    cancelColor: "neutral",
    cancelLabel: 'Not into cheese',
    title: 'Choose a cheese!',
    inputLabel: 'Name of Cheese',
    saveLabel: 'Save',
    onCancel: close => {
      alert('Prompt closed');
      close();
    },
    onSave: (value, close) => {
      alert(`You chose ${value}`);
      close();
    },
    secondary: React.createElement(Button, {
      onClick: () => alert('Secondary clicked')
    }, "Secondary Cheese")
  }, open => React.createElement(Button, {
    onClick: open
  }, "Prompt"));
};
Basic.parameters = {
  storyshots: {
    disable: true
  }
};
export const Hook = () => {
  const [tracking, setTracking] = useState('pizza');
  const [prompt, open] = usePrompt({
    clearOnCancel: true,
    defaultValue: tracking,
    inputLabel: 'Name of Cheese',
    onSave: (value, close) => {
      close();
      setTracking(`${value} saved`);
    },
    saveLabel: 'Save',
    title: 'Choose a cheese!'
  });
  return React.createElement(React.Fragment, null, React.createElement("p", null, "Value: ", tracking), prompt, React.createElement(Button, {
    onClick: open
  }, "usePrompt"));
};
Hook.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=Prompt.stories.js.map