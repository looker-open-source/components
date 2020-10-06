/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

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
  Accordion,
  AccordionContent,
  AccordionDisclosure,
  ActionList,
  ActionListFilters,
  ActionListItem,
  ActionListItemAction,
  ActionListItemColumn,
  ActionListManager,
  AvatarCombo,
  AvatarIcon,
  AvatarUser,
  Badge,
  Box,
  Button,
  ButtonGroup,
  ButtonItem,
  ButtonOutline,
  ButtonToggle,
  ButtonTransparent,
  Card,
  CardContent,
  CardMedia,
  Checkbox,
  CheckboxGroup,
  Chip,
  Code,
  CodeBlock,
  ColorWheel,
  ComponentsProvider,
  Confirm,
  ConfirmLayout,
  doDefaultActionListSort,
  Dialog,
  DialogContent,
  DialogContext,
  DialogFooter,
  DialogHeader,
  DialogManager,
  Divider,
  DividerVertical,
  Drawer,
  FieldCheckbox,
  FieldCheckboxGroup,
  FieldChips,
  FieldColor,
  FieldRadio,
  FieldRadioGroup,
  FieldRangeSlider,
  FieldSelect,
  FieldSelectMulti,
  FieldSlider,
  Fieldset,
  FieldText,
  FieldTextArea,
  FieldTime,
  FieldTimeSelect,
  FieldToggleSwitch,
  Flex,
  FlexItem,
  Form,
  Grid,
  Heading,
  Icon,
  IconButton,
  InlineInputText,
  InlineTextArea,
  InputChips,
  InputColor,
  InputFilters,
  InputHidden,
  InputSearch,
  InputText,
  InputTime,
  InputTimeSelect,
  Label,
  Link,
  List,
  ListItem,
  LuminositySlider,
  Menu,
  MenuContext,
  MenuDisclosure,
  MenuGroup,
  MenuItem,
  MenuList,
  MessageBar,
  PageSize,
  Pagination,
  Paragraph,
  Popover,
  PopoverContent,
  Prompt,
  Radio,
  RadioGroup,
  RangeSlider,
  Select,
  SelectMulti,
  Slider,
  Space,
  SpaceVertical,
  Spinner,
  Status,
  Swatch,
  Tab,
  Table,
  TableBody,
  TableDataCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  TextArea,
  Truncate,
  theme,
  ToggleSwitch,
  Tooltip,
  Tree,
  TreeGroup,
  TreeItem,
  useActionListSelectManager,
  useConfirm,
  useDrawer,
  usePreviousValue,
  useMixedStateCheckbox,
  useTabs,
  useToggle,
  VisuallyHidden,
} from '@looker/components'

import { Calendar } from '@looker/components/src/Calendar'

import { InputDate } from '@looker/components/src/InputDate'
import { InputDateRange } from '@looker/components/src/InputDateRange'
import { FieldDate } from '@looker/components/src/FieldDate'
import { FieldDateRange } from '@looker/components/src/FieldDateRange'

import { DateFormat } from '@looker/components/src/DateFormat'
import { DateTimeFormat } from '@looker/components/src/DateTimeFormat'
import { TimeFormat } from '@looker/components/src/TimeFormat'

import { Surface } from '@looker/components/src/Dialog/Surface'
import styled from 'styled-components'
import isEqual from 'lodash/isEqual'
import { useState } from 'react'
import { GridPlaceholder } from '../../helpers/GridPlaceholder'

const otherLibraries = {
  GridPlaceholder,
  isEqual,
  styled,
  theme,
  useState,
}

const hooks = {
  doDefaultActionListSort,
  useActionListSelectManager,
  useConfirm,
  useDrawer,
  useMixedStateCheckbox,
  usePreviousValue,
  useTabs,
  useToggle,
}

export const allComponents = {
  ...otherLibraries,
  ...hooks,
  Accordion,
  AccordionContent,
  AccordionDisclosure,
  ActionList,
  ActionListFilters,
  ActionListItem,
  ActionListItemAction,
  ActionListItemColumn,
  ActionListManager,
  AvatarCombo,
  AvatarIcon,
  AvatarUser,
  Badge,
  Box,
  Button,
  ButtonGroup,
  ButtonItem,
  ButtonOutline,
  ButtonToggle,
  ButtonTransparent,
  Calendar,
  Card,
  CardContent,
  CardMedia,
  Checkbox,
  CheckboxGroup,
  Chip,
  Code,
  CodeBlock,
  ColorWheel,
  ComponentsProvider,
  Confirm,
  ConfirmLayout,
  DateFormat,
  DateTimeFormat,
  Dialog,
  DialogContent,
  DialogContext,
  DialogFooter,
  DialogHeader,
  DialogManager,
  Divider,
  DividerVertical,
  Drawer,
  FieldCheckbox,
  FieldCheckboxGroup,
  FieldChips,
  FieldColor,
  FieldDate,
  FieldDateRange,
  FieldRadio,
  FieldRadioGroup,
  FieldRangeSlider,
  FieldSelect,
  FieldSelectMulti,
  FieldSlider,
  FieldText,
  FieldTextArea,
  FieldTime,
  FieldTimeSelect,
  FieldToggleSwitch,
  Fieldset,
  Flex,
  FlexItem,
  Form,
  Grid,
  Heading,
  Icon,
  IconButton,
  InlineInputText,
  InlineTextArea,
  InputChips,
  InputColor,
  InputDate,
  InputDateRange,
  InputFilters,
  InputHidden,
  InputSearch,
  InputText,
  InputTime,
  InputTimeSelect,
  Label,
  Link,
  List,
  ListItem,
  LuminositySlider,
  Menu,
  MenuContext,
  MenuDisclosure,
  MenuGroup,
  MenuItem,
  MenuList,
  MessageBar,
  PageSize,
  Pagination,
  Paragraph,
  Popover,
  PopoverContent,
  Prompt,
  Radio,
  RadioGroup,
  RangeSlider,
  Select,
  SelectMulti,
  Slider,
  Space,
  SpaceVertical,
  Spinner,
  Status,
  Surface,
  Swatch,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Table,
  TableBody,
  TableDataCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Tabs,
  Text,
  TextArea,
  TimeFormat,
  ToggleSwitch,
  Tooltip,
  Tree,
  TreeGroup,
  TreeItem,
  Truncate,
  VisuallyHidden,
}
