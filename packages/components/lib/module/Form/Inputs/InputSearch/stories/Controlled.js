

import React, { useState } from 'react';
import { InputSearch } from '..';
export default function Controlled() {
  const [keyword, setKeyword] = useState('Default Value');
  return React.createElement(InputSearch, {
    placeholder: "Type your search",
    summary: keyword.length > 0 ? `You typed ${keyword.length} characters` : '',
    value: keyword,
    onChange: setKeyword
  });
}
//# sourceMappingURL=Controlled.js.map