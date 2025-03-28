/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */

import React, { Children, cloneElement, useRef, useState } from 'react';

export interface UseTabsProps {
  controlledIndex?: number;
  defaultIndex?: number;
  index?: number;
  isControlled?: boolean;
  onChange?: (index: number) => void;
}

export interface TabsProps extends UseTabsProps {
  children: JSX.Element[];
}

export function useTabs(props?: UseTabsProps) {
  const defaultIndex = (props && props.defaultIndex) || 0;
  const onChange = props && props.onChange;
  const isControlled = (props && props.isControlled) || false;

  const [selectedIndex, setSelectedIndex] = useState(defaultIndex);

  return {
    onSelectTab: (index: number) => {
      onChange && onChange(index);
      if (!isControlled) {
        setSelectedIndex(index);
      }
    },
    selectedIndex:
      isControlled && props ? props.controlledIndex : selectedIndex,
  };
}

export const Tabs = ({
  children,
  index: controlledIndex,
  defaultIndex,
  onChange,
}: TabsProps) => {
  const { current: isControlled } = useRef(controlledIndex !== undefined);

  /* eslint-disable no-console */
  if (!isControlled && controlledIndex !== undefined) {
    console.warn(
      'Tabs is changing from uncontrolled to controlled. Tabs should not switch from uncontrolled to controlled (or vice versa). Decide between using a controlled or uncontrolled Tabs for the lifetime of the component. Check the `index` prop being passed in.'
    );
  }

  if (isControlled && controlledIndex === undefined) {
    console.warn(
      'Tabs is changing from uncontrolled to controlled. Tabs should not switch from uncontrolled to controlled (or vice versa). Decide between using a controlled or uncontrolled Tabs for the lifetime of the component. Check the `index` prop being passed in.'
    );
  }
  /* eslint-enable no-console */

  const tabs = useTabs({
    controlledIndex,
    defaultIndex,
    isControlled,
    onChange,
  });

  const clonedChildren = Children.map(children, (child: JSX.Element) => {
    return cloneElement(child, tabs);
  });

  return <>{clonedChildren}</>;
};
