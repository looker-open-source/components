import { createContext } from 'react';
import noop from 'lodash/noop';
const dialogContext = {
  closeModal: () => noop,
  id: ''
};
export const DialogContext = createContext(dialogContext);
//# sourceMappingURL=DialogContext.js.map