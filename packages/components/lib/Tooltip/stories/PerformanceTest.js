import React, { useEffect, useRef, useState } from 'react';
import { Tooltip } from '../Tooltip';
export default function PerformanceTest() {
  const [value, setValue] = useState('');

  const handleChange = e => setValue(e.currentTarget.value);

  const lastRenderRef = useRef(Date.now());
  useEffect(() => {
    const now = Date.now();
    const diff = now - lastRenderRef.current;
    console.log(diff);
    lastRenderRef.current = now;
  });
  return React.createElement("div", null, React.createElement("p", null, "Type fast then hold down delete:"), React.createElement("input", {
    type: "text",
    value: value,
    onChange: handleChange
  }), React.createElement("p", null, "The text shouldn't freeze due to main thread being blocked."), React.createElement("div", null, Array.from(Array(1000), (_, i) => React.createElement(Tooltip, {
    key: i,
    content: "I'm a tooltip"
  }, React.createElement("button", null, "Hover me")))));
}
//# sourceMappingURL=PerformanceTest.js.map