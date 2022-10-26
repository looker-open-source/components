import findIndex from 'lodash/findIndex';
import throttle from 'lodash/throttle';
import xorWith from 'lodash/xorWith';
import { useContext } from 'react';
import { ComboboxContext, ComboboxMultiContext } from '../ComboboxContext';
import { ComboboxActionType, ComboboxState } from './state';
export function useKeyDown() {
  const context = useContext(ComboboxContext);
  const contextMulti = useContext(ComboboxMultiContext);
  const contextToUse = context.transition ? context : contextMulti;
  const {
    data,
    onChange,
    optionsRef,
    state,
    transition,
    autoCompletePropRef,
    persistSelectionPropRef,
    inputReadOnlyPropRef,
    closeOnSelectPropRef
  } = contextToUse;
  const {
    navigationOption
  } = data;

  function checkOnChange() {
    if (onChange) {
      if (context.transition) {
        ;
        onChange(navigationOption);
      } else {
        const newOptions = xorWith(data.options, navigationOption ? [navigationOption] : [], (o1, o2) => o1.value === o2.value);
        onChange(newOptions);
      }
    }
  }

  function selectOption() {
    checkOnChange();
    transition && transition(ComboboxActionType.SELECT_WITH_KEYBOARD, {
      persistSelection: persistSelectionPropRef && persistSelectionPropRef.current
    });

    if (closeOnSelectPropRef && closeOnSelectPropRef.current) {
      transition && transition(ComboboxActionType.ESCAPE);
    }
  }

  return throttle(function handleKeyDown(event) {
    event.persist();
    const options = optionsRef ? optionsRef.current : [];

    switch (event.key) {
      case 'ArrowDown':
        {
          event.preventDefault();

          if (state === ComboboxState.IDLE) {
            transition && transition(ComboboxActionType.NAVIGATE, {
              persistSelection: persistSelectionPropRef && persistSelectionPropRef.current
            });
          } else {
            const index = navigationOption ? findIndex(options, ['value', navigationOption.value]) : -1;
            const atBottom = index === options.length - 1;

            if (atBottom) {
              if (autoCompletePropRef && autoCompletePropRef.current) {
                transition && transition(ComboboxActionType.NAVIGATE, {
                  option: undefined
                });
              } else {
                const firstOption = options[0];
                transition && transition(ComboboxActionType.NAVIGATE, {
                  option: firstOption
                });
              }
            } else {
              const nextOption = options[(index + 1) % options.length];
              transition && transition(ComboboxActionType.NAVIGATE, {
                option: nextOption
              });
            }
          }

          break;
        }

      case 'ArrowUp':
        {
          event.preventDefault();

          if (state === ComboboxState.IDLE) {
            transition && transition(ComboboxActionType.NAVIGATE, {
              persistSelection: persistSelectionPropRef && persistSelectionPropRef.current
            });
          } else {
            const index = navigationOption ? findIndex(options, ['value', navigationOption.value]) : -1;

            if (index === 0) {
              if (autoCompletePropRef && autoCompletePropRef.current) {
                transition && transition(ComboboxActionType.NAVIGATE, {
                  option: undefined
                });
              } else {
                const lastOption = options[options.length - 1];
                transition && transition(ComboboxActionType.NAVIGATE, {
                  option: lastOption
                });
              }
            } else if (index === -1) {
              const option = options[options.length - 1];
              transition && transition(ComboboxActionType.NAVIGATE, {
                option
              });
            } else {
              const nextOption = options[(index - 1 + options.length) % options.length];
              transition && transition && transition(ComboboxActionType.NAVIGATE, {
                option: nextOption
              });
            }
          }

          break;
        }

      case ' ':
      case 'Spacebar':
        {
          if (inputReadOnlyPropRef && inputReadOnlyPropRef.current && state === ComboboxState.NAVIGATING && navigationOption !== undefined) {
            selectOption();
          }

          break;
        }

      case 'Enter':
        {
          if (state === ComboboxState.NAVIGATING && navigationOption !== undefined) {
            event.preventDefault();
            selectOption();
          }

          break;
        }
    }
  }, 50);
}
//# sourceMappingURL=useKeyDown.js.map