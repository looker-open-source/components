/*

 MIT License

 Copyright (c) 2024 Google LLC

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

import React, { createContext, useContext, useMemo, useState } from 'react';
import type { ChangeEvent, ReactNode } from 'react';
import styled from 'styled-components';
import { Check as IconCheck } from '@styled-icons/material/Check';
import { Filter as IconFilter } from '@styled-icons/material/Filter';
import { FilterList as IconFilterList } from '@styled-icons/material/FilterList';
import { MoreVert as IconMoreVert } from '@styled-icons/material/MoreVert';
import { Place as IconPlace } from '@styled-icons/material/Place';
import { SubdirectoryArrowLeft as IconSubdirectoryArrowLeft } from '@styled-icons/material/SubdirectoryArrowLeft';
import { Tag as IconTag } from '@styled-icons/material/Tag';
import { Info as IconInfo } from '@styled-icons/material-outlined/Info';
import type { ToggleColor } from '../..';
import {
  FieldToggleSwitch,
  generateBorderRadius,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Flex,
  TreeItem,
  Truncate,
} from '../..';
import { listItemDimensions } from '../ListItem';
import { ReplaceText } from '../ReplaceText';
import { LkFieldItem } from '../LkFieldTree/LkFieldItem';
import { Button } from '../Button';
import { InputText } from '../Form';
import { Space, SpaceVertical } from '../Layout';
import { HoverDisclosure, useToggle } from '../utils';
import type { WindowedTreeNodeProps } from '..';
import { WindowedTreeCollection, Tree } from '..';

const HighlightContext = createContext({ term: '' });

type FieldPickerItemProps = {
  color?: ToggleColor;
  filter?: boolean;
  pivot?: boolean;
  selected?: boolean;
  children?: ReactNode;
};

export const FieldPickerItem = ({
  children = 'Cost',
  color = 'dimension',
  filter = false,
  pivot = false,
  selected = false,
}: FieldPickerItemProps) => {
  const [isFieldMenuOpen, setIsFieldMenuOpen] = useState<boolean>(false);
  const { term } = useContext(HighlightContext);

  const [isFilter, setIsFilter] = useState(filter);
  const [isPivot, setIsPivot] = useState(pivot);
  const [isSelected, setIsSelected] = useState(selected);

  const toggleMenu = () =>
    isFieldMenuOpen ? setIsFieldMenuOpen(false) : setIsFieldMenuOpen(true);

  const detailContent = (
    <>
      <Tooltip placement="top" content="Some exciting info or something">
        <IconButton shape="square" icon={<IconInfo />} label="Info" />
      </Tooltip>
      <Menu
        isOpen={isFieldMenuOpen}
        setOpen={toggleMenu}
        density={-1}
        content={
          <>
            <MenuItem>Brie</MenuItem>
            <MenuItem>Cheddar</MenuItem>
            <MenuItem>Gouda</MenuItem>
          </>
        }
      >
        <IconButton
          shape="square"
          icon={<IconMoreVert />}
          label="Options"
          tooltipPlacement="top"
        />
      </Menu>
    </>
  );

  const toggleField = () => setIsSelected(!isSelected);

  const { height } = listItemDimensions(-3);

  return (
    <LkFieldItem
      color={color}
      selected={isSelected}
      detail={{
        content: detailContent,
        options: {
          accessory: true,
          hoverDisclosure: !isFieldMenuOpen,
          width: 48,
        },
      }}
      onKeyDown={event => {
        if (event.key === 'Enter' && event.metaKey) {
          alert(`CMD + Enter'ed on ${children}!`);
        } else if (
          event.key === 'Enter' &&
          event.currentTarget === event.target
        ) {
          toggleField();
        }
      }}
    >
      <Flex>
        <Flex
          onClick={toggleField}
          height={height}
          alignItems="center"
          overflow="hidden"
          width="100%"
        >
          <Truncate>
            <ReplaceText match={term}>{children}</ReplaceText>
          </Truncate>
        </Flex>
        <HoverDisclosure visible={isPivot}>
          <IconButton
            icon={<IconSubdirectoryArrowLeft />}
            onClick={() => setIsPivot(!isPivot)}
            shape="square"
            toggle={isPivot}
            toggleBackground
            toggleColor={color}
            label="Pivot"
            tooltipPlacement="top"
          />
        </HoverDisclosure>
        <HoverDisclosure visible={isFilter} width={isPivot ? 24 : undefined}>
          <IconButton
            onClick={() => setIsFilter(!isFilter)}
            shape="square"
            toggle={isFilter}
            toggleBackground
            toggleColor={color}
            icon={<IconFilterList />}
            label="Filter"
            tooltipPlacement="top"
          />
        </HoverDisclosure>
      </Flex>
    </LkFieldItem>
  );
};

const BorderRadiusOverrideTree = styled(Tree)`
  ${({ theme }) => generateBorderRadius('medium', theme)}
`;

const getRandomInteger = (limit: number) => Math.floor(Math.random() * limit);

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

const getItems = (
  prefix: string,
  labelLength: number,
  canNest = false
): WindowedTreeNodeProps[] => {
  return Array.from(Array(10), (_, i) => {
    if (canNest && i % 3 === 2) {
      const labelText = labelLength ? `: ${getString()}` : '';
      return {
        content: (
          <BorderRadiusOverrideTree label={`${prefix}-${i}${labelText}`} />
        ),
        isOpen: true,
        items: getItems(`${prefix}-${i}`, labelLength),
      };
    }
    const itemText = labelLength ? `: ${getString(labelLength)}` : '';
    return {
      content: (
        <FieldPickerItem>
          {prefix}-{i}
          {itemText}
        </FieldPickerItem>
      ),
    };
  });
};

const getTrees = (labelLength: number): WindowedTreeNodeProps[] =>
  Array.from(Array(100), (_, i) => {
    const labelText = labelLength ? `: ${getString()}` : '';
    return {
      content: <BorderRadiusOverrideTree label={`${i}${labelText}`} />,
      isOpen: true,
      items: getItems(String(i), labelLength, true),
    };
  });

const treesRandomText = getTrees(50);
const treesNoText = getTrees(0);

const getUpdater =
  (isOpen: boolean) =>
  (tree: WindowedTreeNodeProps): WindowedTreeNodeProps => {
    if (tree.items) {
      return { ...tree, isOpen, items: tree.items.map(getUpdater(isOpen)) };
    }
    return { ...tree, isOpen };
  };

export function Windowing({ noText }: { noText?: boolean }) {
  const { value, toggle, setOn } = useToggle();
  const [term, setTerm] = useState('');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
    if (term === '' && e.target.value !== '') {
      setOn();
    }
  };
  const treesUpdated = useMemo(() => {
    const trees = noText ? treesNoText : treesRandomText;
    return trees.map(getUpdater(value));
  }, [noText, value]);

  return (
    <SpaceVertical height="100vh">
      <Space>
        <Button onClick={toggle}>Toggle all {value ? 'closed' : 'open'}</Button>
        <InputText value={term} onChange={handleChange} />
      </Space>
      <HighlightContext.Provider value={{ term }}>
        <WindowedTreeCollection
          density={-3}
          height="100%"
          width="450px"
          trees={treesUpdated}
        />
      </HighlightContext.Provider>
    </SpaceVertical>
  );
}

export function Controlled() {
  const { value, change, toggle } = useToggle(true);
  return (
    <>
      <FieldToggleSwitch on={value} onChange={toggle} label="Toggle" />
      <Tree isOpen={value} toggleOpen={change} label="Controlled Tree">
        <TreeItem icon={<IconTag />}>Cost</TreeItem>
        <TreeItem icon={<IconPlace />}>Location</TreeItem>
        <TreeItem icon={<IconFilter />}>Tier</TreeItem>
        <TreeItem icon={<IconCheck />}>Oui ou Non</TreeItem>
      </Tree>
    </>
  );
}
