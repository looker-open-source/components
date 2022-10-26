import findIndex from 'lodash/findIndex';
import React, { useContext, useEffect, useMemo, useRef } from 'react';
import { getWindowedListBoundaries } from '../../../../utils/getWindowedListBoundaries';
import { ComboboxContext, ComboboxMultiContext } from '../../Combobox';
export const optionHeight = 28;
export function useShouldWindowOptions(flatOptions, propsWindowedOptions) {
  return useMemo(() => {
    if (!flatOptions) return false;
    if (propsWindowedOptions === false) return false;
    if (flatOptions.length < 100 && !propsWindowedOptions) return false;
    return true;
  }, [flatOptions, propsWindowedOptions]);
}
export function useWindowedOptions(windowing, flatOptions, navigationOptions, isMulti) {
  const context = useContext(ComboboxContext);
  const contextMulti = useContext(ComboboxMultiContext);
  const contextToUse = isMulti ? contextMulti : context;
  const {
    data: {
      navigationOption
    },
    listClientRect,
    listScrollPosition,
    isScrollingRef,
    optionsRef
  } = contextToUse;
  useEffect(() => {
    if (navigationOptions !== null && navigationOptions !== void 0 && navigationOptions.length && optionsRef) {
      optionsRef.current = navigationOptions;
    }
  }, [navigationOptions, optionsRef]);
  const containerHeight = listClientRect && listClientRect.height;
  let {
    start,
    end
  } = useMemo(() => getWindowedListBoundaries({
    enabled: windowing,
    height: containerHeight,
    itemCount: flatOptions ? flatOptions.length : 0,
    itemHeight: optionHeight,
    scrollPosition: listScrollPosition
  }), [flatOptions, containerHeight, listScrollPosition, windowing]);
  const previouslyWindowedRef = useRef();

  if (windowing && !previouslyWindowedRef.current) {
    if (navigationOption) {
      const selectedIndex = findIndex(flatOptions, ['value', navigationOption.value]);

      if (selectedIndex > -1) {
        start = selectedIndex;
        end = selectedIndex;
      }
    }
  }

  previouslyWindowedRef.current = windowing;
  let scrollToFirst = false;
  let scrollToLast = false;

  if (flatOptions !== null && flatOptions !== void 0 && flatOptions.length && navigationOptions !== null && navigationOptions !== void 0 && navigationOptions.length && navigationOption) {
    scrollToFirst = !(isScrollingRef !== null && isScrollingRef !== void 0 && isScrollingRef.current) && start > 0 && navigationOption.value === navigationOptions[0].value;
    scrollToLast = end < flatOptions.length - 1 && navigationOption.value === navigationOptions[navigationOptions.length - 1].value;
  }

  const afterLength = flatOptions ? flatOptions.length - 1 - end : 0;
  return {
    after: afterLength > 0 ? React.createElement("li", {
      style: {
        height: `${afterLength * optionHeight}px`
      }
    }) : null,
    before: start > 0 ? React.createElement("li", {
      style: {
        height: `${start * optionHeight}px`
      }
    }) : null,
    end,
    scrollToFirst,
    scrollToLast,
    start
  };
}
//# sourceMappingURL=useWindowedOptions.js.map