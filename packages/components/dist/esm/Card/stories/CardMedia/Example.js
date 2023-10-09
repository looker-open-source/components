import React from 'react';
import { Card } from '../../Card';
import { CardContent } from '../../CardContent';
import { Paragraph, Heading } from '../../../Text';
export default (() => {
  return React.createElement(Card, {
    raised: true
  }, React.createElement(CardContent, null, React.createElement(Heading, {
    fontSize: "xxxlarge"
  }, "\uD83C\uDF89 Looker Release Notes \uD83C\uDF89"), React.createElement(Heading, {
    as: "h4",
    fontSize: "small"
  }, "Read all about our latest features"), React.createElement(Paragraph, {
    fontSize: "xsmall",
    color: "text1"
  }, "Last updated 3 days ago")));
});
//# sourceMappingURL=Example.js.map