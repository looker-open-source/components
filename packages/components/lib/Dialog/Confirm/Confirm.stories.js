import React from 'react';
import { Info } from '@styled-icons/material-outlined';
import { defaultArgTypes as argTypes } from '@looker/storybook';
import { Button, ButtonOutline } from '../../Button';
import { Icon } from '../../Icon';
import { Space, SpaceVertical } from '../../Layout';
import { Link } from '../../Link';
import { Paragraph } from '../../Text';
import { Confirm } from './Confirm';
export default {
  argTypes,
  component: Confirm,
  title: 'Confirm'
};
export const Basic = () => {
  return React.createElement(Confirm, {
    title: "Confirm Something",
    message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    onConfirm: close => {
      alert('You did something');
      close();
    },
    width: ['10rem', '20rem', '30rem', '40rem']
  }, open => React.createElement(ButtonOutline, {
    onClick: open
  }, "Do something"));
};
Basic.parameters = {
  storyshots: {
    disable: true
  }
};
export const Critical = () => {
  return React.createElement(Confirm, {
    title: "Confirm Something",
    message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    onConfirm: close => {
      alert('You did something');
      close();
    },
    buttonColor: "critical",
    width: ['10rem', '20rem', '30rem', '40rem']
  }, open => React.createElement(ButtonOutline, {
    color: "critical",
    onClick: open
  }, "Something Destructive"));
};
Critical.parameters = {
  storyshots: {
    disable: true
  }
};
export const Rich = () => {
  const message = React.createElement(Space, null, React.createElement(Icon, {
    icon: React.createElement(Info, null),
    size: "80px"
  }), React.createElement(SpaceVertical, null, React.createElement(Paragraph, null, "Canadians say \"sorry\" so often that", ' ', React.createElement("strong", null, "in 2009 a law was passed"), " declaring that an apology cannot be used as an admission of guilt."), React.createElement("cite", null, "SOURCE:", ' ', React.createElement(Link, {
    href: "https://www.theloop.ca/canadians-love-to-say-sorry-so-much-we-had-to-make-this-law/",
    target: "_blank"
  }, "the loop"))));
  return React.createElement(Confirm, {
    title: "Did you know?",
    message: message,
    onConfirm: close => {
      alert('Now you know.');
      close();
    },
    width: ['10rem', '20rem', '30rem', '40rem']
  }, open => React.createElement(Button, {
    onClick: open
  }, "Do something fancy"));
};
Rich.parameters = {
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=Confirm.stories.js.map