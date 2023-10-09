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
import {
  ComboboxContext,
  ComboboxInput,
  Field,
  Span,
} from '@looker/components';
import get from 'lodash/get';
import { Search } from '@styled-icons/material-outlined/Search';
import React, { useContext, useEffect, useRef } from 'react';
import type { KeyboardEvent } from 'react';
import styled from 'styled-components';
import { TreeSelectContext } from './TreeSelectContext';

interface FieldSearchProps {
  className?: string;
  disabled?: boolean;
  placeholder?: string;
  label?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  selectedSection?: string;
  disabledText?: React.ReactNode;
}

export const FieldSearch = styled(
  ({
    className,
    disabled,
    label,
    onChange,
    placeholder,
    selectedSection,
    disabledText,
  }: FieldSearchProps) => {
    const {
      data: { navigationOption },
      id,
      isVisible,
    } = useContext(ComboboxContext);
    const { setNodeToToggle, withDropdown } = useContext(TreeSelectContext);

    // If someone toggles a node twice without moving from it,
    // navigationOption.payload.isOpen will be out of date
    // so we need to track the value with a ref
    const isOpenRef = useRef(!!get(navigationOption?.payload, 'isOpen'));
    useEffect(() => {
      isOpenRef.current = !!get(navigationOption?.payload, 'isOpen');
    }, [isOpenRef, navigationOption]);

    // For keyboard interaction we need to replace option selection
    // with tree toggle when children are present
    const handleKeyDown = (event: KeyboardEvent) => {
      if (['Enter', 'Spacebar'].includes(event.key)) {
        if (navigationOption) {
          const { payload = {} } = navigationOption;
          const children = get(payload, 'children');
          if (children) {
            const id = String(get(payload, 'id'));
            const isOpen = !isOpenRef.current;
            setNodeToToggle?.({ id, isOpen });
            isOpenRef.current = isOpen;
            event.preventDefault();
          }
        }
      }
    };

    const showSection =
      !isVisible && withDropdown && !disabledText && selectedSection;

    return (
      <Field className={className} id={`listbox-input-${id}`} label={label}>
        <ComboboxInput
          disabled={disabled}
          iconBefore={<Search />}
          onChange={onChange}
          onKeyDown={handleKeyDown}
          placeholder={disabledText ? '' : placeholder}
          autoComplete={false}
          freeInput={!withDropdown}
        >
          {disabledText}
          {showSection && (
            <Span className="section-name">{selectedSection} &bull;</Span>
          )}
        </ComboboxInput>
      </Field>
    );
  }
)`
  /* Give room for elements in the same row (Advanced toggle) */
  flex: 1;
  .inner {
    align-items: center;
    display: flex;
    width: 100%;
  }
  .section-name + input {
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
    padding-left: ${({ theme }) => theme.space.u1};
  }
`;
