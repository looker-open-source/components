import { useState } from 'react';
import { useTheme } from 'styled-components';
import { getPortalRoot } from '../../../Portal';
import { useSyncedState } from '../../../utils';

const defaultCheckValueOnBlur = e => {
  const target = e.currentTarget;
  const input = target.querySelector('input') || target.querySelector('textarea');
  return (input === null || input === void 0 ? void 0 : input.value) !== undefined && input.value !== '';
};

const getIsInSelectList = (nextFocusTarget, inputArea) => {
  const portalRoot = getPortalRoot();

  if (!portalRoot.contains(nextFocusTarget)) {
    return false;
  }

  if (portalRoot.contains(inputArea)) {
    return (nextFocusTarget === null || nextFocusTarget === void 0 ? void 0 : nextFocusTarget.closest('portal-child')) !== inputArea.closest('portal-child');
  }

  return true;
};

export const getHasValue = ({
  value,
  defaultValue
}) => {
  if (value !== undefined) return value !== '';
  if (defaultValue !== undefined) return defaultValue !== '';
  return false;
};
export const useFloatingLabel = ({
  checkValueOnBlur: _checkValueOnBlur = defaultCheckValueOnBlur,
  hasValue: propsHasValue,
  labelOffset: _labelOffset = '0rem'
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useSyncedState(propsHasValue);
  const theme = useTheme();
  const style = {
    '--label-translate': `${_labelOffset}, ${theme.space.u4}`
  };
  return {
    className: hasValue || isFocused ? 'label-up' : 'label-down',
    handlers: {
      onBlur: e => {
        if (_checkValueOnBlur) {
          setHasValue(_checkValueOnBlur(e));
        }

        const nextFocusTarget = e.relatedTarget;
        const isInSelectList = getIsInSelectList(nextFocusTarget, e.currentTarget);

        if (nextFocusTarget && !e.currentTarget.contains(nextFocusTarget) && !isInSelectList) {
          setIsFocused(false);
        }
      },
      onFocus: () => {
        setIsFocused(true);
      }
    },
    isFocused,
    style
  };
};
//# sourceMappingURL=useFloatingLabel.js.map