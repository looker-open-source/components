import { NavigationSection } from '../../components/Navigation'

const layout: NavigationSection = {
  title: 'Layout',
  path: 'layout',
  children: [{ title: 'Box', path: 'box' }, { title: 'Flex', path: 'flex' }],
}

const text: NavigationSection = {
  title: 'Text',
  path: 'text',
  children: [
    { title: 'Headings', path: 'headings' },
    { title: 'Paragraph', path: 'paragraph' },
    { title: 'Text', path: 'text' },
    { title: 'Code', path: 'code' },
  ],
}

const actions: NavigationSection = {
  title: 'Actions',
  path: 'actions',
  children: [
    { title: 'Button', path: 'button' },
    {
      title: 'ButtonGroup & ButtonToggle',
      path: 'button-group',
    },
    { title: 'IconButton', path: 'icon-button' },
    { title: 'Link', path: 'link' },
  ],
}

const forms: NavigationSection = {
  title: 'Forms',
  path: 'forms',
  children: [
    { title: 'Checkbox', path: 'checkbox' },
    {
      title: 'Form',
      path: 'form',
    },
    {
      title: 'Fieldset',
      path: 'fieldset',
    },
    {
      title: 'Fields',
      path: 'fields',
    },
    {
      title: 'InputHidden',
      path: 'hidden',
    },
    {
      title: 'InputSearch',
      path: 'search',
    },
    {
      title: 'InputText',
      path: 'text',
    },
    {
      title: 'Label',
      path: 'label',
    },
    {
      title: 'Radio',
      path: 'radio',
    },
    {
      title: 'Select',
      path: 'select',
    },
    {
      title: 'Slider',
      path: 'slider',
    },
    {
      title: 'ToggleSwitch',
      path: 'toggle-switch',
    },
  ],
}

const modals: NavigationSection = {
  title: 'Modal',
  path: 'modals',
  children: [
    { title: 'Overview', path: '' },
    { title: 'Confirm', path: 'confirm' },
    { title: 'Dialog', path: 'dialog' },
    { title: 'Drawer', path: 'drawer' },
  ],
}

const overlays: NavigationSection = {
  title: 'Overlay',
  path: 'overlays',
  children: [
    { title: 'Menu', path: 'menu' },
    { title: 'Popover', path: 'popover' },
    { title: 'Tooltip', path: 'tooltip' },
  ],
}

const content: NavigationSection = {
  title: 'Content',
  path: 'content',
  children: [
    { title: 'Banner', path: 'banner' },
    { title: 'Card', path: 'card' },
    { title: 'Divider', path: 'divider' },
    { title: 'Icon', path: 'icon' },
    { title: 'List', path: 'list' },
    { title: 'Spinner', path: 'spinner' },
    { title: 'Table', path: 'table' },
    { title: 'Tabs', path: 'tabs' },
    { title: 'VisuallyHidden', path: 'visually-hidden' },
  ],
}

const components: NavigationSection = {
  title: 'Components',
  path: 'components',
  children: [layout, text, actions, modals, overlays, forms, content],
}

export default components
