

import React, { useRef, useMemo } from 'react';
import { getActiveTrap } from './utils';
export const TrapStackProvider = ({
  activate,
  context,
  children
}) => {
  const registeredTrapsRef = useRef({});
  const activeTrapRef = useRef();
  const deactivateRef = useRef();

  const value = useMemo(() => {
    const getTrap = id => {
      const registeredTraps = registeredTrapsRef.current;
      return id ? registeredTraps[id] : getActiveTrap(registeredTraps);
    };
    const enableCurrentTrap = () => {
      const newTrap = getTrap();
      if ((newTrap === null || newTrap === void 0 ? void 0 : newTrap.element) !== activeTrapRef.current) {
        var _deactivateRef$curren;
        activeTrapRef.current = newTrap === null || newTrap === void 0 ? void 0 : newTrap.element;
        (_deactivateRef$curren = deactivateRef.current) === null || _deactivateRef$curren === void 0 ? void 0 : _deactivateRef$curren.call(deactivateRef);
        deactivateRef.current = undefined;
        if (newTrap) {
          deactivateRef.current = activate(newTrap);
        }
      }
    };
    const disableCurrentTrap = () => {
      var _deactivateRef$curren2;
      (_deactivateRef$curren2 = deactivateRef.current) === null || _deactivateRef$curren2 === void 0 ? void 0 : _deactivateRef$curren2.call(deactivateRef);
      deactivateRef.current = undefined;
      activeTrapRef.current = undefined;
    };
    const addTrap = (id, trap) => {
      registeredTrapsRef.current[id] = trap;
      enableCurrentTrap();
    };
    const removeTrap = id => {
      const existingTrap = getTrap(id);
      if (existingTrap) {
        const registeredTraps = registeredTrapsRef.current;
        delete registeredTraps[id];
        enableCurrentTrap();
      }
    };
    return {
      activeTrapRef,
      addTrap,
      disableCurrentTrap,
      enableCurrentTrap,
      getTrap,
      removeTrap
    };
  }, [activate]);
  return React.createElement(context.Provider, {
    value: value
  }, children);
};
//# sourceMappingURL=TrapStackProvider.js.map