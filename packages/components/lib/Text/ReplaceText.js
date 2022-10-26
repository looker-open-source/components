import React, { Children, useMemo } from 'react';
import isRegExp from 'lodash/isRegExp';
import escapeRegExp from 'lodash/escapeRegExp';
import isString from 'lodash/isString';
import flatten from 'lodash/flatten';

function replaceString(str, match, replace) {
  let curCharStart = 0;
  let curCharLen = 0;
  let re = match;

  if (!isRegExp(re)) {
    re = new RegExp('(' + escapeRegExp(re) + ')', 'gi');
  }

  const stringArr = str.split(re);
  return stringArr.map((stringItem, i) => {
    if (i % 2 === 1) {
      curCharLen = stringItem.length;
      curCharStart += stringArr[i - 1].length;
      curCharStart += curCharLen;
      return replace(stringItem, i, curCharStart);
    }

    return stringItem;
  });
}

export const ReplaceText = ({
  children,
  match,
  replace
}) => {
  const content = useMemo(() => {
    return flatten(Children.map(children, child => {
      return isString(child) ? replaceString(child, match, replace) : child;
    }));
  }, [children, match, replace]);
  return React.createElement(React.Fragment, null, content);
};
//# sourceMappingURL=ReplaceText.js.map