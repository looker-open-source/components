import { useEffect, useState } from 'react';
export function useListWidths({
  isVisible,
  minWidth: propsMinWidth,
  width: propsWidth,
  wrapperElement
}) {
  const [width, setWidth] = useState('auto');
  const [minWidth, setMinWidth] = useState();
  useEffect(() => {
    function getWrapperWidth() {
      return wrapperElement && wrapperElement.getBoundingClientRect().width;
    }

    if (isVisible) {
      const newWidth = propsWidth || getWrapperWidth() || 'auto';
      const newMinWidth = propsMinWidth || (propsWidth === 'auto' ? getWrapperWidth() : undefined);
      setWidth(newWidth);
      setMinWidth(newMinWidth);
    }
  }, [propsMinWidth, propsWidth, wrapperElement, isVisible]);
  return {
    minWidth,
    width
  };
}
//# sourceMappingURL=useListWidths.js.map