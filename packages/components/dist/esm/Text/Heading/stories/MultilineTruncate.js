import React from 'react';
import { Heading } from '../Heading';
export default function MultilineTruncate() {
  return React.createElement(Heading, {
    truncateLines: 2
  }, "This is a really long title that will need to truncate. It's gotta get real long so it hits the edge of the jest-dom virtual window size so I'm going to just keep typing and typing to make sure it triggers overflow as needed to prove that this is work properly. Are we there yet? Maybe? I sure hope so!");
}
//# sourceMappingURL=MultilineTruncate.js.map