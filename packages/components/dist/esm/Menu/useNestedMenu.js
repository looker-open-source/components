const _excluded = ["onClick"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import { transitions } from '@looker/design-tokens';
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
  const _usePopover = usePopover({
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
    }),
    {
      popover,
      popperInstanceRef,
      domProps: {
        onClick: _domPropsOnClick
      }
    } = _usePopover,
    restDomProps = _objectWithoutProperties(_usePopover.domProps, _excluded);
  useEffect(() => {
    if (isOpen && focusRef.current) {
      const button = focusRef.current.querySelector('a,button');
      button === null || button === void 0 ? void 0 : button.focus();
    }
  }, [isOpen]);
  const combinedDomProps = _objectSpread(_objectSpread({}, itemHandlers), nestedMenu ? restDomProps : {});
  return {
    domProps: combinedDomProps,
    popover
  };
};
//# sourceMappingURL=useNestedMenu.js.map