import React from 'react';
import { Card } from '../../Card';
import { Paragraph } from '../../../Text/Paragraph';
export default (() => {
  return React.createElement(Card, {
    raised: true
  }, React.createElement(Paragraph, {
    color: "text1",
    fontSize: "xlarge"
  }, "Hello World!"));
});
//# sourceMappingURL=Example.js.map