import { createEvent, fireEvent } from '@testing-library/react';
export function firePasteEvent(element, value) {
  const eventProperties = {
    clipboardData: {
      getData: () => value
    }
  };
  const pasteEvent = createEvent.paste(element, eventProperties);
  fireEvent(element, pasteEvent);
}
//# sourceMappingURL=firePasteEvent.js.map