import xorWith from 'lodash/xorWith';
import { useContext } from 'react';
import { useWrapEvent } from '../../../../utils';
import { ComboboxActionType } from './state';
export function useOptionEvents(props, context) {
  const {
    label,
    value,
    onClick,
    onMouseEnter
  } = props;
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
    const option = {
      label,
      value
    };

    if (onChange) {
      if (options) {
        ;
        onChange(xorWith(options, [option], (o1, o2) => o1.value === o2.value));
      } else {
        ;
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
      const option = {
        label,
        value
      };
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