function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
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
    var _context$toggleStateM;
    const props = {
      children: items.map(item => React.createElement(WindowedTreeNode, _extends({
        firstIDinWindow: firstIDinWindow
      }, item, {
        key: item.id
      })))
    };
    const isOpen = (_context$toggleStateM = context.toggleStateMap) === null || _context$toggleStateM === void 0 || (_context$toggleStateM = _context$toggleStateM[id]) === null || _context$toggleStateM === void 0 ? void 0 : _context$toggleStateM.isOpen;
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