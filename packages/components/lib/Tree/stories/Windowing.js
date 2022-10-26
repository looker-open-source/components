import _defineProperty from "@babel/runtime/helpers/defineProperty";

let _2 = t => t,
    _t;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import { Button } from '../../Button';
import { InputText } from '../../Form';
import { Space, SpaceVertical } from '../../Layout';
import { useToggle } from '../../utils';
import { WindowedTreeCollection, Tree } from '..';
import { generateBorderRadius } from '../utils/generateBorderRadius';
import { FieldPickerItem, HighlightContext } from '../../LkFieldTree/stories/FieldPickerItem';
const BorderRadiusOverrideTree = styled(Tree).withConfig({
  displayName: "Windowing__BorderRadiusOverrideTree",
  componentId: "sc-ioe9ok-0"
})(_t || (_t = _2`
  ${0}
`), ({
  theme
}) => generateBorderRadius('medium', theme));

const getRandomInteger = limit => Math.floor(Math.random() * limit);

const preamble = `We the People of the United States, in Order to form a more perfect Union,
establish Justice, insure domestic Tranquility, provide for the common
defense, promote the general Welfare, and secure the Blessings of Liberty
to ourselves and our Posterity, do ordain and establish this Constitution
for the United States of America.`;

const getString = (lengthLimit = 30) => {
  const startLimit = preamble.length - 50;
  const length = getRandomInteger(lengthLimit);
  const startIndex = getRandomInteger(startLimit);
  return preamble.substr(startIndex, length);
};

const getItems = (prefix, labelLength, canNest = false) => {
  return Array.from(Array(10), (_, i) => {
    if (canNest && i % 3 === 2) {
      const labelText = labelLength ? `: ${getString()}` : '';
      return {
        content: React.createElement(BorderRadiusOverrideTree, {
          label: `${prefix}-${i}${labelText}`
        }),
        isOpen: true,
        items: getItems(`${prefix}-${i}`, labelLength)
      };
    }

    const itemText = labelLength ? `: ${getString(labelLength)}` : '';
    return {
      content: React.createElement(FieldPickerItem, null, prefix, "-", i, itemText)
    };
  });
};

const getTrees = labelLength => Array.from(Array(100), (_, i) => {
  const labelText = labelLength ? `: ${getString()}` : '';
  return {
    content: React.createElement(BorderRadiusOverrideTree, {
      label: `${i}${labelText}`
    }),
    isOpen: true,
    items: getItems(String(i), labelLength, true)
  };
});

const treesRandomText = getTrees(50);
const treesNoText = getTrees(0);

const getUpdater = isOpen => tree => {
  if (tree.items) {
    return _objectSpread(_objectSpread({}, tree), {}, {
      isOpen,
      items: tree.items.map(getUpdater(isOpen))
    });
  }

  return _objectSpread(_objectSpread({}, tree), {}, {
    isOpen
  });
};

export const Windowing = ({
  noText
}) => {
  const {
    value,
    toggle,
    setOn
  } = useToggle();
  const [term, setTerm] = useState('');

  const handleChange = e => {
    setTerm(e.currentTarget.value);

    if (term === '' && e.currentTarget.value !== '') {
      setOn();
    }
  };

  const treesUpdated = useMemo(() => {
    const trees = noText ? treesNoText : treesRandomText;
    return trees.map(getUpdater(value));
  }, [noText, value]);
  return React.createElement(SpaceVertical, {
    height: "100vh"
  }, React.createElement(Space, null, React.createElement(Button, {
    onClick: toggle
  }, "Toggle all ", value ? 'closed' : 'open'), React.createElement(InputText, {
    value: term,
    onChange: handleChange
  })), React.createElement(HighlightContext.Provider, {
    value: {
      term
    }
  }, React.createElement(WindowedTreeCollection, {
    density: -3,
    height: "100%",
    width: "450px",
    trees: treesUpdated
  })));
};
Windowing.parameters = {
  docs: {
    disable: true
  },
  storyshots: {
    disable: true
  }
};
//# sourceMappingURL=Windowing.js.map