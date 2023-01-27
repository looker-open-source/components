

import React from 'react';
import { Space } from '../../../../Layout';
import { Heading, Paragraph } from '../../../../Text';
import { InlineInputText } from '../InlineInputText';
export default function HeadingParagraph() {
  return React.createElement(Space, {
    around: true
  }, React.createElement(Heading, null, React.createElement(InlineInputText, {
    value: "Type here..."
  })), React.createElement(Paragraph, {
    color: "text1"
  }, React.createElement(InlineInputText, {
    placeholder: "Type here..."
  })));
}
//# sourceMappingURL=HeadingParagraph.js.map