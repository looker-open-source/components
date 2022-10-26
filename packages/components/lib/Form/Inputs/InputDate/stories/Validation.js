import React from 'react';
import { InputDate } from '..';
export default (() => {
  const [isValid, setIsValid] = React.useState(true);

  const handleChange = () => setIsValid(true);

  const handleValidationFail = () => setIsValid(false);

  return React.createElement(InputDate, {
    onChange: handleChange,
    onValidationFail: handleValidationFail,
    validationType: isValid ? undefined : 'error'
  });
});
//# sourceMappingURL=Validation.js.map