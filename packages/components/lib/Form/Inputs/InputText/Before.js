import React, { useCallback, useContext } from 'react';
import { Span } from '../../../Text';
import { measureElement } from '../../../utils';
import { InputTextContext } from './InputTextContext';
import { InputTextContent } from './InputTextContent';

const Measure = ({
  children
}) => {
  const {
    setBeforeWidth
  } = useContext(InputTextContext);
  const ref = useCallback(element => {
    const {
      width
    } = measureElement(element);
    setBeforeWidth(width);
  }, [setBeforeWidth]);
  return React.createElement("span", {
    ref: ref
  }, children);
};

export const Before = ({
  iconBefore,
  before
}) => {
  const iconBeforeWrapped = iconBefore && React.createElement(InputTextContent, {
    pl: "u2"
  }, iconBefore);
  const beforeStringWrapped = typeof before === 'string' && React.createElement(Measure, null, React.createElement(InputTextContent, {
    pl: "u2"
  }, React.createElement(Span, {
    fontSize: "small"
  }, before)));
  const beforeWrapped = before && typeof before !== 'string' && React.createElement(Measure, null, before);
  return iconBeforeWrapped || beforeStringWrapped || beforeWrapped || null;
};
//# sourceMappingURL=Before.js.map