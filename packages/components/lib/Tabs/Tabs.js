import React, { Children, cloneElement, useRef, useState } from 'react';
export function useTabs(props) {
  const defaultIndex = props && props.defaultIndex || 0;
  const onChange = props && props.onChange;
  const isControlled = props && props.isControlled || false;
  const [selectedIndex, setSelectedIndex] = useState(defaultIndex);
  return {
    onSelectTab: index => {
      onChange && onChange(index);

      if (!isControlled) {
        setSelectedIndex(index);
      }
    },
    selectedIndex: isControlled && props ? props.controlledIndex : selectedIndex
  };
}
export const Tabs = ({
  children,
  index: controlledIndex,
  defaultIndex,
  onChange
}) => {
  const {
    current: isControlled
  } = useRef(controlledIndex !== undefined);

  if (!isControlled && controlledIndex !== undefined) {
    console.warn('Tabs is changing from uncontrolled to controlled. Tabs should not switch from uncontrolled to controlled (or vice versa). Decide between using a controlled or uncontrolled Tabs for the lifetime of the component. Check the `index` prop being passed in.');
  }

  if (isControlled && controlledIndex === undefined) {
    console.warn('Tabs is changing from uncontrolled to controlled. Tabs should not switch from uncontrolled to controlled (or vice versa). Decide between using a controlled or uncontrolled Tabs for the lifetime of the component. Check the `index` prop being passed in.');
  }

  const tabs = useTabs({
    controlledIndex,
    defaultIndex,
    isControlled,
    onChange
  });
  const clonedChildren = Children.map(children, child => {
    return cloneElement(child, tabs);
  });
  return React.createElement(React.Fragment, null, clonedChildren);
};
//# sourceMappingURL=Tabs.js.map