import React, { useState } from 'react';
import { InputDate } from '..';
export default (() => {
  const [value, setValue] = useState(new Date('June 30, 2022'));

  const onChange = date => setValue(date);

  return React.createElement(InputDate, {
    onChange: onChange,
    value: value
  });
});
//# sourceMappingURL=Controlled.js.map