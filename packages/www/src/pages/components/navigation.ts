import { NavigationSection } from '../../Layout'

const components: NavigationSection = {
  title: 'Components',
  path: 'components',
  children: [
    {
      title: 'Layout',
      path: 'layout',
      children: [
        { title: 'Box', path: 'box' },
        { title: 'Flex', path: 'flex' },
      ],
    },
    {
      title: 'Text',
      path: 'text',
      children: [
        { title: 'Headings', path: 'headings' },
        { title: 'Paragraph', path: 'paragraph' },
        { title: 'Text', path: 'text' },
        { title: 'Code', path: 'code' },
      ],
    },
    {
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
    },
    {
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
          path: 'input-hidden',
        },
        {
          title: 'InputSearch',
          path: 'input-search',
        },
        {
          title: 'InputText',
          path: 'input-text',
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
    },
    {
      title: 'Modal',
      path: 'modals',
      children: [
        { title: 'Overview', path: '' },
        { title: 'Confirm', path: 'confirm' },
        { title: 'Dialog', path: 'dialog' },
        { title: 'Drawer', path: 'drawer' },
      ],
    },
    {
      title: 'Overlay',
      path: 'overlays',
      children: [
        { title: 'Menu', path: 'menu' },
        { title: 'Popover', path: 'popover' },
        { title: 'Tooltip', path: 'tooltip' },
      ],
    },
    {
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
    },
  ],
}

export default components
