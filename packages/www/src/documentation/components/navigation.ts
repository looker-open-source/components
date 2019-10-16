import { NavigationSection } from '../../components/Navigation'
import forms from './forms/navigation'

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
    { title: 'Icons', path: 'icons' },
    { title: 'Link', path: 'link' },
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
  children: [layout, text, modals, overlays, forms, content],
}

export default components
