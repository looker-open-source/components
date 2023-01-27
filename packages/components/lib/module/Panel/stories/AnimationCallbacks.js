
import React, { useCallback, useRef, useState } from 'react';
import { Aside, Box, Page, Section } from '../../Layout';
import { Panel, Panels } from '..';
import { Button } from '../../Button';
import { FieldText } from '../../Form';
import { Paragraph } from '../../Text';
export default function AnimationCallbacks() {
  const inputRef = useRef(null);
  const focusInput = useCallback(() => {
    var _inputRef$current;
    (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.focus();
  }, []);
  const [message, setMessage] = useState('');
  const showMessage = () => {
    setMessage('Panel closed');
  };
  return React.createElement(Page, {
    hasAside: true
  }, React.createElement(Aside, {
    width: "20rem"
  }, React.createElement(Panels, null, React.createElement(Box, {
    p: "medium",
    height: 300
  }, React.createElement(Panel, {
    title: "Animation Callbacks",
    onAfterOpen: focusInput,
    onAfterClose: showMessage,
    content: React.createElement(Box, {
      px: "medium"
    }, React.createElement(FieldText, {
      label: "Focus onAfterOpen",
      ref: inputRef
    }))
  }, React.createElement(Button, null, "Open Panel"))))), React.createElement(Section, null, React.createElement(Paragraph, null, "Main stuff here..."), React.createElement(Paragraph, null, message)));
}
//# sourceMappingURL=AnimationCallbacks.js.map