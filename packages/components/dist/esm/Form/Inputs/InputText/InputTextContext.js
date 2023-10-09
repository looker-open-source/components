import noop from 'lodash/noop';
import { createContext } from 'react';
const defaultContext = {
  beforeWidth: 0,
  setBeforeWidth: noop
};
export const InputTextContext = createContext(defaultContext);
//# sourceMappingURL=InputTextContext.js.map