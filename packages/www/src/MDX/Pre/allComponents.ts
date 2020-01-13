/*

 MIT License

 Copyright (c) 2019 Looker Data Sciences, Inc.

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
  AvatarCombo,
  AvatarIcon,
  AvatarUser,
  Badge,
  Banner,
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
  Chip,
  Code,
  ColorWheel,
  Confirm,
  ConfirmationDialogContent,
  Dialog,
  DialogManager,
  Divider,
  Drawer,
  DrawerManager,
  FieldCheckbox,
  FieldColor,
  FieldRadio,
  FieldSelect,
  Fieldset,
  FieldText,
  FieldToggleSwitch,
  Flex,
  FlexItem,
  Form,
  Heading,
  Icon,
  IconButton,
  InputHidden,
  InputSearch,
  InputText,
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
  MenuSearch,
  ModalContent,
  ModalContext,
  ModalFooter,
  ModalHeader,
  ModalSurface,
  Paragraph,
  Popover,
  PopoverContent,
  Radio,
  Select,
  Slider,
  Spinner,
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
  theme,
  ToggleSwitch,
  Tooltip,
  useConfirm,
  useTabs,
  useToggle,
  VisuallyHidden,
} from '@looker/components'
import { palette } from '@looker/design-tokens'

import styled, { ThemeProvider } from 'styled-components'
import isEqual from 'lodash/isEqual'
import { useState } from 'react'

export const allComponents = {
  useState,

  styled,
  ThemeProvider,

  isEqual,

  palette,
  AvatarCombo,
  AvatarIcon,
  AvatarUser,
  Badge,
  Banner,
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
  Chip,
  Code,
  ColorWheel,
  Confirm,
  ConfirmationDialogContent,
  Dialog,
  DialogManager,
  Divider,
  Drawer,
  DrawerManager,
  FieldCheckbox,
  FieldColor,
  FieldRadio,
  FieldSelect,
  Fieldset,
  FieldText,
  FieldToggleSwitch,
  Flex,
  FlexItem,
  Form,
  Heading,
  Icon,
  IconButton,
  InputHidden,
  InputSearch,
  InputText,
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
  MenuSearch,
  ModalContent,
  ModalContext,
  ModalFooter,
  ModalHeader,
  ModalSurface,
  Paragraph,
  Popover,
  PopoverContent,
  Radio,
  Select,
  Slider,
  Spinner,
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
  theme,
  ToggleSwitch,
  Tooltip,
  useConfirm,
  useTabs,
  useToggle,
  VisuallyHidden,
}
