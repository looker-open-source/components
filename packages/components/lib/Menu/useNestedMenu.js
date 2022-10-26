import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import { transitions } from '@looker/design-tokens';
import omit from 'lodash/omit';
import React, { useContext, useEffect, useRef } from 'react';
import { DialogContext } from '../Dialog';
import { usePopover } from '../Popover';
import { useWrapEvent } from '../utils';
import { ListItemContext } from '../ListItem';
import { NestedMenuContext } from './NestedMenuProvider';
import { NestedMenuSurface } from './NestedMenuSurface';
import { MenuList } from './';

const movingTowardPlacement = (newPos, prevPos, placement) => {
  if (!prevPos || !placement) return false;

  switch (placement) {
    case 'right-start':
      return newPos.x > prevPos.x && newPos.y > prevPos.y;

    case 'right-end':
      return newPos.x > prevPos.x && newPos.y < prevPos.y;

    case 'left-start':
      return newPos.x < prevPos.x && newPos.y > prevPos.y;

    case 'left-end':
      return newPos.x < prevPos.x && newPos.y < prevPos.y;

    default:
      return newPos.x > prevPos.x && newPos.y > prevPos.y;
  }
};

const noop = () => undefined;

export const useNestedMenu = ({
  id,
  onClick,
  onKeyDown,
  onMouseEnter,
  onMouseLeave,
  nestedMenu
}) => {
  const mousePosition = useRef();
  const focusRef = useRef(null);
  const {
    value,
    change,
    delayChange,
    waitChange
  } = useContext(NestedMenuContext);
  const {
    closeModal
  } = useContext(DialogContext);
  const {
    density
  } = useContext(ListItemContext);
  const isOpen = value === id;

  const openNestedMenu = () => change(id);

  const closeNestedMenu = () => change('');

  const itemHandlers = {
    onClick: useWrapEvent(e => {
      if (nestedMenu && !onClick) {
        openNestedMenu();
        e.preventDefault();
      }
    }, onClick),
    onKeyDown: useWrapEvent(nestedMenu ? e => {
      if (e.key === 'ArrowRight') {
        openNestedMenu();
        e.preventDefault();
      }
    } : noop, onKeyDown),
    onMouseEnter: useWrapEvent(nestedMenu ? e => {
      if (value === '') {
        delayChange(id, 100);
      } else {
        waitChange(id);
      }

      focusRef.current = e.currentTarget;
    } : noop, onMouseEnter),
    onMouseLeave: useWrapEvent(nestedMenu ? e => {
      if (isOpen) {
        var _popperInstanceRef$cu;

        if (movingTowardPlacement({
          x: e.screenX,
          y: e.screenY
        }, mousePosition.current, (_popperInstanceRef$cu = popperInstanceRef.current) === null || _popperInstanceRef$cu === void 0 ? void 0 : _popperInstanceRef$cu.state.placement)) {
          delayChange('', transitions.complex);
        } else {
          change('');
        }

        mousePosition.current = undefined;
      } else {
        change('');
      }
    } : noop, onMouseLeave),
    onMouseMove: e => {
      mousePosition.current = {
        x: e.screenX,
        y: e.screenY
      };
    }
  };
  const listHandlers = nestedMenu ? {
    onKeyDown: e => {
      switch (e.key) {
        case 'ArrowLeft':
          closeNestedMenu();
          e.preventDefault();
          break;

        case 'Escape':
          closeModal();
          break;
      }
    },
    onMouseEnter: openNestedMenu
  } : {};
  const {
    popover,
    popperInstanceRef,
    domProps
  } = usePopover({
    content: React.createElement(MenuList, _extends({
      "data-autofocus": "true",
      density: density
    }, listHandlers, {
      closeParentMenu: closeModal
    }), nestedMenu),
    disabled: nestedMenu === undefined,
    isOpen,
    placement: 'right-start',
    scrollLock: false,
    setOpen: closeNestedMenu,
    surface: NestedMenuSurface,
    triggerToggle: false
  });
  useEffect(() => {
    if (isOpen && focusRef.current) {
      const button = focusRef.current.querySelector('a,button');
      button === null || button === void 0 ? void 0 : button.focus();
    }
  }, [isOpen]);

  const combinedDomProps = _objectSpread(_objectSpread({}, itemHandlers), nestedMenu ? omit(domProps, 'onClick') : {});

  return {
    domProps: combinedDomProps,
    popover
  };
};
//# sourceMappingURL=useNestedMenu.js.map