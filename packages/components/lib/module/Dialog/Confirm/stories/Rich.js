

import React from 'react';
import * as MaterialIcons from '@styled-icons/material';
import { Confirm } from '../../../Dialog';
import { Button } from '../../../Button';
import { Space, SpaceVertical } from '../../../Layout';
import { Paragraph } from '../../../Text/Paragraph';
import { Icon } from '../../../Icon';
import { Link } from '../../../Link';
export default function Critical() {
  const message = React.createElement(Space, null, React.createElement(Icon, {
    icon: React.createElement(MaterialIcons.Info, null),
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
}
//# sourceMappingURL=Rich.js.map