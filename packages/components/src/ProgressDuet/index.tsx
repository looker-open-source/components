/*

 MIT License

 Copyright (c) 2023 Google LLC

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */

import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useTranslation, useSafeSetState } from '../utils';
import { ANIMATION_DURATION, MAX_ROWS } from './utils/constants';
import { renderLoadingRow } from './utils/renderLoadingRow';
import { getRandomInt } from './utils/getRandomInt';

/**
 * An array of rows to be rendered invisibly, to prevent the component height from changing
 * every time an animation appends another visible loading bar.
 */
const placeholderRows = Array.from(Array(MAX_ROWS)).map((_, i) => {
  return renderLoadingRow({ columns: ['1fr'], rowNumber: i + 1 });
});

export const ProgressDuet = () => {
  const [rowCount, setRowCount] = useSafeSetState(1);
  const [renderedRows, setRenderedRows] = useSafeSetState<JSX.Element[]>([]);
  const { t } = useTranslation('ProgressDuet');

  /**
   * randomize the amount of columns (from zero to three) and randomize each column's relative
   * width so as to create an impression of paragraph text.
   */
  const columns = Array.from(Array(getRandomInt(3))).map(
    () => `${getRandomInt(20)}fr`
  );

  useEffect(() => {
    /**
     * render a new row every time rowCount is incremented
     */
    if (renderedRows.length < rowCount) {
      setRenderedRows([
        ...renderedRows,
        renderLoadingRow({ columns, rowNumber: rowCount }),
      ]);
    }
  }, [rowCount, renderedRows, columns, setRenderedRows]);

  useEffect(() => {
    // add a slight animation pause at "paragraph breaks"
    const animationBuffer = !(rowCount % 2) ? 0.25 : 0;

    let timer: NodeJS.Timeout;
    const incrementRowMS =
      rowCount === 0
        ? 0
        : (ANIMATION_DURATION * columns.length + animationBuffer) * 1000;

    if (rowCount < MAX_ROWS) {
      timer = setTimeout(() => {
        // append next row to the animation
        setRowCount(rowCount + 1);
      }, incrementRowMS);
    } else {
      timer = setTimeout(() => {
        // max row length reached. restart animation cycle
        setRowCount(0);
        setRenderedRows([]);
      }, 3000);
    }

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rowCount]);

  return (
    <LoadingWrapper role="progressbar" aria-label={t('Processing request')}>
      <AnimationPlaceholder data-testid="animation-placeholder">
        <ProgressRowGrid>{placeholderRows}</ProgressRowGrid>
      </AnimationPlaceholder>
      <VisibleAnimation data-testid="visible-animation">
        <ProgressRowGrid>{renderedRows}</ProgressRowGrid>
      </VisibleAnimation>
    </LoadingWrapper>
  );
};

const ProgressRowGrid = styled.div`
  display: grid;
  grid-gap: ${({ theme }) => theme.space.xsmall};
`;

const LoadingWrapper = styled.div`
  position: relative;
`;

const VisibleAnimation = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

const AnimationPlaceholder = styled.div`
  visibility: hidden;
`;
