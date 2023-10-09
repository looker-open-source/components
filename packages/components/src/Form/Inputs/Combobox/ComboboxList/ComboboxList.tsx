/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

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

// Much of the following is pulled from https://github.com/reach/reach-ui
// because their work is fantastic (but is not in TypeScript)

import {
  layout,
  reset,
  space,
  shouldForwardProp,
  typography,
} from '@looker/design-tokens';
import type { Ref } from 'react';
import React, {
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useRef,
} from 'react';
import styled from 'styled-components';
import once from 'lodash/once';
import throttle from 'lodash/throttle';
import { Box } from '../../../../Layout';
import { usePopover } from '../../../../Popover';
import { listPadding } from '../../../../List/utils';
import { useResize } from '../../../../utils';
import { ComboboxContext, ComboboxMultiContext } from '../ComboboxContext';
import type { ComboboxListProps, ComboboxListInternalProps } from '../types';
import { useBlur } from '../utils/useBlur';
import { useKeyDown } from '../utils/useKeyDown';
import { useListWidths } from '../utils/useListWidths';
import { useUpdateListRefs } from '../utils/useUpdateListRefs';

const ComboboxListInternal = forwardRef(
  (
    {
      // passed to usePopover – when false, allows first outside click to be honored
      // generally should be false except for when closely mimicking native browser select
      cancelClickOutside = false,
      isMulti,

      minWidth,
      width,

      ...props
    }: ComboboxListInternalProps,
    ref: Ref<HTMLUListElement>
  ) => {
    const context = useContext(ComboboxContext);
    const contextMulti = useContext(ComboboxMultiContext);
    const contextToUse = isMulti ? contextMulti : context;
    const inlineContainerRef = useRef<HTMLDivElement>(null);
    const {
      wrapperElement,
      isVisible,
      listRef,
      setListScrollPosition,
      setListClientRect,
      isScrollingRef,
      id,
      shouldRenderListInline,
    } = contextToUse;

    useUpdateListRefs({ isMulti, ...props });

    const handleKeyDown = useKeyDown();
    const useBlurSingle = useBlur(ComboboxContext);
    const useBlurMulti = useBlur(ComboboxMultiContext);
    const handleBlur = isMulti ? useBlurMulti : useBlurSingle;

    // This hook minimizes the use of getBoundingClientRect for performance reasons
    const widthProps = useListWidths({
      isVisible,
      minWidth,
      width,
      wrapperElement,
    });

    const content = (
      <ComboboxUl
        {...props}
        {...widthProps}
        isMulti={isMulti}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        ref={ref}
        role="listbox"
        id={`listbox-${id}`}
        tabIndex={-1}
      />
    );

    const setOpen = (isOpen: boolean) => {
      if (!isOpen) {
        // Without passing an event, this just handles state change required when closing the list
        handleBlur();
      }
    };

    const { popover, contentContainer, popperInstanceRef } = usePopover({
      ariaLabel: props['aria-label'],
      cancelClickOutside,
      content,
      focusTrap: false,
      isOpen: isVisible,
      placement: 'bottom-start',
      setOpen,
      triggerElement: wrapperElement,
      triggerToggle: false,
    });
    if (popperInstanceRef.current && listRef) {
      // Using the outermost popover element ensures the check in useBlur
      // will not fail to detect a scroll-bar click-drag
      listRef.current = popperInstanceRef.current.state.elements.popper;
    }
    const containerToUse = shouldRenderListInline
      ? inlineContainerRef.current
      : contentContainer;

    // For isMulti, we update the popover position when values are added/removed
    // since it may affect the height of the field
    const valueLength = isMulti ? contextMulti.data.options.length : 1;
    useEffect(() => {
      popperInstanceRef.current && popperInstanceRef.current.update();
    }, [popperInstanceRef, valueLength]);

    const resizeListener = useCallback(() => {
      setListClientRect?.(containerToUse?.getBoundingClientRect());
    }, [setListClientRect, containerToUse]);

    useResize(containerToUse, resizeListener);

    useEffect(() => {
      // track scroll position and menu dom rectangle, and bubble up to context.
      // used in InputTimeSelect for managing very long lists

      const setListClientRectOnce = once((containerElement: Element) => {
        setListClientRect &&
          setListClientRect(containerElement.getBoundingClientRect());
      });

      const updateScrollState = (containerElement: Element) => {
        setListClientRectOnce(containerElement);
        setListScrollPosition?.(containerElement.scrollTop);
      };

      const timeoutValue = 50;
      let t: ReturnType<typeof setTimeout>;
      const scrollListener = throttle(() => {
        if (containerToUse) {
          updateScrollState(containerToUse);
          // Solves issue where scrolling (regular or due to keyboard navigating)
          // while the mouse is over the list triggers unintentional mouseenter
          // causing the wrong option to get highlighted, and, if windowing is on
          // and this option leaves the window, it gets pulled back in via
          // scrollIntoView()
          if (isScrollingRef) isScrollingRef.current = true;
          clearTimeout(t);
          t = setTimeout(() => {
            if (isScrollingRef) isScrollingRef.current = false;
          }, timeoutValue + 1);
        }
      }, timeoutValue);

      if (containerToUse) {
        containerToUse.addEventListener('scroll', scrollListener);
        updateScrollState(containerToUse);
      }

      return () => {
        containerToUse &&
          containerToUse.removeEventListener('scroll', scrollListener);

        setListScrollPosition && setListScrollPosition(0);
        setListClientRect && setListClientRect(undefined);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [containerToUse]);

    if (shouldRenderListInline) {
      return (
        <Box
          ref={inlineContainerRef}
          position="relative"
          overflowY="auto"
          maxHeight="100%"
          mt="small"
        >
          {content}
        </Box>
      );
    }

    return popover || null;
  }
);

export const ComboboxUl = styled.ul.withConfig({
  shouldForwardProp,
})<ComboboxListInternalProps>`
  ${reset}
  ${typography}
  ${space}
  list-style-type: none;
  margin: 0;
  max-height: 30rem;
  outline: none;
  position: relative;
  ${layout}

  ${listPadding}
`;

export const ComboboxList = (props: ComboboxListProps) => (
  <ComboboxListInternal {...props} isMulti={false} />
);

export const ComboboxMultiList = (props: ComboboxListProps) => (
  <ComboboxListInternal {...props} isMulti />
);
