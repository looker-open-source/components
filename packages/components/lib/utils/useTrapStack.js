import { useContext, useEffect } from 'react';
import { useID } from './useID';
import { useCallbackRef } from './useCallbackRef';
export const useTrapStack = ({
  context,
  disabled: _disabled = false,
  ref,
  options
}) => {
  const id = useID();
  const [element, callbackRef] = useCallbackRef(ref);
  const {
    addTrap,
    removeTrap,
    disableCurrentTrap,
    enableCurrentTrap
  } = useContext(context);
  useEffect(() => {
    if (!addTrap) {
      console.warn(`${context.displayName} is missing. Please wrap all @looker/components in a ComponentsProvider.`);
    }
  }, [addTrap, context]);
  useEffect(() => {
    if (element) {
      if (_disabled) {
        disableCurrentTrap === null || disableCurrentTrap === void 0 ? void 0 : disableCurrentTrap();
      } else {
        addTrap === null || addTrap === void 0 ? void 0 : addTrap(id, {
          element,
          options
        });
      }
    }

    return () => {
      if (_disabled) {
        enableCurrentTrap === null || enableCurrentTrap === void 0 ? void 0 : enableCurrentTrap();
      } else {
        removeTrap === null || removeTrap === void 0 ? void 0 : removeTrap(id);
      }
    };
  }, [_disabled, id, element, options, addTrap, removeTrap, disableCurrentTrap, enableCurrentTrap]);
  return [element, callbackRef];
};
//# sourceMappingURL=useTrapStack.js.map