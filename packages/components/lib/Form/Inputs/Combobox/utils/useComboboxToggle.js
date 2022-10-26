import { useRef, useEffect } from 'react';
import { ComboboxState } from '../utils/state';
const visibleStates = [ComboboxState.SUGGESTING, ComboboxState.NAVIGATING, ComboboxState.INTERACTING];
export const getIsVisible = state => visibleStates.includes(state);
export function useComboboxToggle(state, option, onOpen, onClose) {
  const isVisible = getIsVisible(state);
  const isVisibleRef = useRef(isVisible);
  useEffect(() => {
    if (isVisible && !isVisibleRef.current) {
      onOpen && onOpen(option);
      isVisibleRef.current = true;
    } else if (!isVisible && isVisibleRef.current) {
      onClose && onClose(option);
      isVisibleRef.current = false;
    }
  }, [isVisible, isVisibleRef, onOpen, onClose, option]);
  return isVisible;
}
//# sourceMappingURL=useComboboxToggle.js.map