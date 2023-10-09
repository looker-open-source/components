import findIndex from 'lodash/findIndex';
import React, { useContext, useEffect, useMemo, useRef } from 'react';
import { Box } from '../../../../Layout';
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
const getSelectedIndex = (flatOptions, navigationOption) => {
  return findIndex(flatOptions, ['value', navigationOption.value]);
};
export function useWindowedOptions(windowing, flatOptions, navigationOptions, isMulti, itemHeight = optionHeight) {
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
    end,
    before,
    after
  } = useMemo(() => getWindowedListBoundaries({
    enabled: windowing,
    height: containerHeight,
    itemCount: flatOptions ? flatOptions.length : 0,
    itemHeight,
    scrollPosition: listScrollPosition,
    spacerTag: 'li'
  }), [flatOptions, containerHeight, listScrollPosition, windowing, itemHeight]);
  const previouslyWindowedRef = useRef();
  if (flatOptions && windowing && !previouslyWindowedRef.current) {
    if (navigationOption) {
      const selectedIndex = getSelectedIndex(flatOptions, navigationOption);
      if (selectedIndex > -1) {
        start = selectedIndex;
        end = selectedIndex;
      }
    }
  }
  previouslyWindowedRef.current = windowing;
  let scrollTo = null;
  if (flatOptions !== null && flatOptions !== void 0 && flatOptions.length && navigationOptions !== null && navigationOptions !== void 0 && navigationOptions.length && navigationOption) {
    const selectedIndex = getSelectedIndex(flatOptions, navigationOption);
    if (selectedIndex > -1 && (selectedIndex < start || selectedIndex > end)) {
      scrollTo = React.createElement(ScrollToMe, {
        isScrollingRef: isScrollingRef,
        top: selectedIndex * itemHeight
      });
    }
  }
  return {
    after,
    before,
    end,
    scrollTo,
    start
  };
}
export const ScrollToMe = ({
  top,
  isScrollingRef
}) => {
  const ref = useRef(null);
  useEffect(() => {
    if (!(isScrollingRef !== null && isScrollingRef !== void 0 && isScrollingRef.current)) {
      var _ref$current;
      (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.scrollIntoView();
    }
  }, [isScrollingRef]);
  return React.createElement(Box, {
    position: "absolute",
    top: top,
    ref: ref
  });
};
//# sourceMappingURL=useWindowedOptions.js.map