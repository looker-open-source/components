import { render } from '@testing-library/react';
import React from 'react';
import { DateFormat } from '../DateFormat';
const date = new Date('January 25, 1988 11:58:03');
test('DateFormat renders only date', () => {
  const {
    container
  } = render(React.createElement(DateFormat, null, date));
  expect(container).toMatchInlineSnapshot(`
    <div>
      Jan 25, 1988
    </div>
  `);
});
//# sourceMappingURL=DateFormat.spec.js.map