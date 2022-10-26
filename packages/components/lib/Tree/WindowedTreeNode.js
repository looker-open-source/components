import _extends from "@babel/runtime/helpers/extends";
import React, { cloneElement, createContext, isValidElement, useCallback, useContext } from 'react';
import { TreeCollectionContext } from './TreeCollectionContext';
export const WindowedTreeContext = createContext({
  partialRender: false
});
export const WindowedTreeNode = ({
  content,
  firstIDinWindow,
  id,
  items
}) => {
  const context = useContext(TreeCollectionContext);
  const toggleNode = useCallback(isOpen => {
    var _context$toggleNode;

    (_context$toggleNode = context.toggleNode) === null || _context$toggleNode === void 0 ? void 0 : _context$toggleNode.call(context, id, isOpen);
  }, [context, id]);

  if (items && isValidElement(content)) {
    var _context$toggleStateM, _context$toggleStateM2;

    const props = {
      children: items.map(item => React.createElement(WindowedTreeNode, _extends({
        firstIDinWindow: firstIDinWindow
      }, item, {
        key: item.id
      })))
    };
    const isOpen = (_context$toggleStateM = context.toggleStateMap) === null || _context$toggleStateM === void 0 ? void 0 : (_context$toggleStateM2 = _context$toggleStateM[id]) === null || _context$toggleStateM2 === void 0 ? void 0 : _context$toggleStateM2.isOpen;
    return React.createElement(WindowedTreeContext.Provider, {
      value: {
        density: context.density,
        isOpen,
        partialRender: firstIDinWindow ? id < firstIDinWindow : false,
        toggleNode
      }
    }, cloneElement(content, props));
  }

  return content;
};
//# sourceMappingURL=WindowedTreeNode.js.map