import { transitions } from '@looker/design-tokens';
import { useEffect, useRef, useState } from 'react';
const busyStates = ['entering', 'exiting'];
export const useAnimationState = ({
  enter: _enter = 'moderate',
  exit: _exit = 'moderate',
  isOpen,
  onAfterEntered,
  onAfterExited
}) => {
  const [state, setState] = useState('exited');
  const timingEnter = transitions[_enter];
  const timingExit = transitions[_exit];
  useEffect(() => {
    if (!isOpen && state === 'exited') return;
    if (isOpen && state === 'entered') return;
    let t;

    if (isOpen) {
      if (!timingEnter) {
        setState('entered');
      } else {
        setState('entering');
        t = setTimeout(() => setState('entered'), timingEnter);
      }
    } else {
      if (!timingExit) {
        setState('exited');
      } else {
        setState('exiting');
        t = setTimeout(() => setState('exited'), timingExit);
      }
    }

    return () => {
      t && clearTimeout(t);
    };
  }, [isOpen, timingEnter, timingExit, state]);
  const previousStateRef = useRef(state);
  useEffect(() => {
    if (state === 'entered' && previousStateRef.current !== 'entered') {
      onAfterEntered === null || onAfterEntered === void 0 ? void 0 : onAfterEntered();
    }

    if (state === 'exited' && previousStateRef.current !== 'exited') {
      onAfterExited === null || onAfterExited === void 0 ? void 0 : onAfterExited();
    }

    previousStateRef.current = state;
  }, [state, onAfterExited, onAfterEntered]);
  return {
    busy: busyStates.includes(state),
    className: state,
    renderDOM: state !== 'exited'
  };
};
//# sourceMappingURL=useAnimationState.js.map