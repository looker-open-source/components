let _ = t => t,
  _t,
  _t2,
  _t3,
  _t4,
  _t5,
  _t6,
  _t7;

import React, { useState } from 'react';
import { LegendOrdinal } from '@visx/legend';
import styled, { css, useTheme } from 'styled-components';
import { useMeasuredElement, useCallbackRef } from '@looker/components';
import pick from 'lodash/pick';
import { useTranslation } from '../utils';
import { PieLegendControls } from './PieLegendControls';
import { getLabelContent } from './getLabelContent';
const getLegendStyle = (scale, orientation, theme) => {
  const domain = scale.domain();
  const rows = domain.length > 3 ? 3 : 1;
  return orientation === 'horizontal' ? {
    display: `grid`,
    gridTemplateRows: `repeat(${rows}, auto )`,
    gridColumnGap: theme.space.small,
    gridAutoFlow: `column`
  } : {};
};
export const PieLegend = ({
  legendConfig,
  scale,
  data,
  measureTotal,
  height,
  width
}) => {
  const {
    t
  } = useTranslation('PieLegend');

  const [page, setPage] = useState(0);
  const theme = useTheme();
  const {
    position
  } = legendConfig || {};
  const ORIENTATION = position === 'top' || position === 'bottom' ? 'horizontal' : 'vertical';

  const [contentElement, contentRef] = useCallbackRef(null);
  const [{
    height: contentHeight,
    width: contentWidth
  }] = useMeasuredElement(contentElement);
  const [containerElement, containerRef] = useCallbackRef(null);
  const [containerElementRect] = useMeasuredElement(containerElement);

  const containerHeight = typeof DOMRect === 'function' ? containerElementRect.height : height;
  const containerWidth = typeof DOMRect === 'function' ? containerElementRect.width : width;
  const pageSize = ORIENTATION === 'horizontal' ? containerWidth * 0.9 : containerHeight * 0.9;
  const totalPages = ORIENTATION === 'horizontal' ? Math.floor(contentWidth / Math.max(pageSize, 1)) : Math.floor(contentHeight / Math.max(pageSize, 1));

  const handleNextPage = () => {
    setPage(Math.min(page + 1, totalPages));
  };
  const handlePrevPage = () => {
    setPage(Math.max(page - 1, 0));
  };
  const handleKeyDown = e => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      handleNextPage();
      e.preventDefault();
    }
    if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      handlePrevPage();
      e.preventDefault();
    }
  };
  return React.createElement(LegendWrapper, {
    maxHeight: height,
    maxWidth: width,
    orientation: ORIENTATION
  }, React.createElement(LegendContent, {
    ref: containerRef,
    tabIndex: 0,
    onKeyDown: handleKeyDown,
    role: "figure",
    "aria-label": t('Legend page {{page}} of {{totalPages}}', {
      page: page + 1,
      totalPages: totalPages + 1
    })
  }, React.createElement(ContentPositioner, {
    pageNumber: page,
    pageSize: pageSize,
    orientation: ORIENTATION,
    ref: contentRef
  }, React.createElement(LegendOrdinal, {
    labelFormat: label => {
      const datum = pick(data, label);
      return getLabelContent(measureTotal, datum, legendConfig);
    },
    scale: scale,
    shape: "circle",
    style: getLegendStyle(scale, ORIENTATION, theme)
  }))), React.createElement(PieLegendControls, {
    containerRect: {
      width: containerWidth,
      height: containerHeight
    },
    contentRect: {
      width: contentWidth,
      height: contentHeight
    },
    orientation: ORIENTATION,
    page: page,
    totalPages: totalPages,
    handleNextClick: handleNextPage,
    handlePrevClick: handlePrevPage
  }));
};
const LegendWrapper = styled.div.withConfig({
  displayName: "PieLegend__LegendWrapper",
  componentId: "sc-1dt2jge-0"
})(_t || (_t = _`
  border: 1px solid transparent;
  display: grid;
  max-height: ${0}px;
  max-width: ${0}px;
  overflow: hidden;
  position: relative;
  ${0}
  width: fit-content;
  &:focus {
    border-color: ${0};
  }
`), ({
  maxHeight
}) => maxHeight, ({
  maxWidth
}) => maxWidth, ({
  orientation,
  theme
}) => {
  if (orientation === 'horizontal') {
    return css(_t2 || (_t2 = _`
        align-items: center;
        grid-template-columns: 1fr auto;
      `));
  } else {
    return css(_t3 || (_t3 = _`
        grid-template-rows: 1fr auto;
        padding: ${0} 0;
      `), theme.space.medium);
  }
}, ({
  theme
}) => theme.colors.key);
const LegendContent = styled.figure.withConfig({
  displayName: "PieLegend__LegendContent",
  componentId: "sc-1dt2jge-1"
})(_t4 || (_t4 = _`
  margin: 0;
  overflow: hidden;
  padding: 0;
  position: relative;
  .visx-legend-label {
    width: max-content;
  }
`));
const ContentPositioner = styled.div.withConfig({
  displayName: "PieLegend__ContentPositioner",
  componentId: "sc-1dt2jge-2"
})(_t5 || (_t5 = _`
  overflow: visible;
  transition: transform 300ms;
  width: max-content;
  ${0}
`), ({
  orientation,
  pageNumber,
  pageSize
}) => {
  if (orientation === 'horizontal') {
    return css(_t6 || (_t6 = _`
        transform: translateX(${0}px);
      `), pageNumber * pageSize * -1);
  } else {
    return css(_t7 || (_t7 = _`
        transform: translateY(${0}px);
      `), pageNumber * pageSize * -1);
  }
});
//# sourceMappingURL=PieLegend.js.map