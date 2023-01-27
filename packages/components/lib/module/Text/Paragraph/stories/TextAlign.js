
import React from 'react';
import { Card, CardContent } from '../../../Card';
import { Paragraph } from '../Paragraph';
export default function TextAlign() {
  return React.createElement(React.Fragment, null, React.createElement(Card, null, React.createElement(CardContent, null, React.createElement(Paragraph, null, " I am aligned left by default"))), React.createElement(Card, null, React.createElement(CardContent, null, React.createElement(Paragraph, {
    textAlign: "center"
  }, "This is how you can center align Paragraph text"))), React.createElement(Card, null, React.createElement(CardContent, null, React.createElement(Paragraph, {
    textAlign: "right"
  }, "This is how you can right align Paragraph text"))));
}
//# sourceMappingURL=TextAlign.js.map