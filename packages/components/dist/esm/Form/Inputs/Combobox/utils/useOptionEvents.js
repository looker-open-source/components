import xorWith from 'lodash/xorWith';
import { useContext } from 'react';
import { useWrapEvent } from '../../../../utils';
import { ComboboxActionType } from './state';
export function useOptionEvents(props, context) {
  const {
    label,
    payload,
    value,
    onClick,
    onMouseEnter
  } = props;
  const option = {
    label,
    payload,
    value
  };
  const {
    data,
    onChange,
    transition,
    closeOnSelectPropRef,
    isScrollingRef
  } = useContext(context);
  const {
    options
  } = data;
  function handleClick() {
    if (onChange) {
      if (options) {
        onChange(xorWith(options, [option], (o1, o2) => o1.value === o2.value));
      } else {
        onChange(option);
      }
    }
    transition && transition(ComboboxActionType.SELECT_WITH_CLICK, {
      option
    });
    if (closeOnSelectPropRef && closeOnSelectPropRef.current) {
      transition && transition(ComboboxActionType.ESCAPE);
    }
  }
  const handleMouseEnter = () => {
    requestAnimationFrame(() => {
      if (isScrollingRef !== null && isScrollingRef !== void 0 && isScrollingRef.current) return;
      transition && transition(ComboboxActionType.NAVIGATE, {
        option
      });
    });
  };
  return {
    onClick: useWrapEvent(handleClick, onClick),
    onMouseEnter: useWrapEvent(handleMouseEnter, onMouseEnter)
  };
}
//# sourceMappingURL=useOptionEvents.js.map