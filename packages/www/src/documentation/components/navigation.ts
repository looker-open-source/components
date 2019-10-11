import { NavigationSection, NavigationPage } from '../../components/Navigation'
import forms from './forms/navigation'

const layout: NavigationSection = {
  title: 'Layout',
  path: 'layout',
  noLink: true,
  children: [{ title: 'Box', path: 'box' }, { title: 'Flex', path: 'flex' }],
}

const text: NavigationSection = {
  title: 'Text',
  path: 'text',
  noLink: true,
  children: [
    { title: 'Headings', path: 'headings' },
    { title: 'Paragraph', path: 'paragraph' },
    { title: 'Text', path: 'text' },
    { title: 'Code', path: 'code' },
  ],
}

const icons: NavigationPage = {
  title: 'Icons',
  path: 'icons',
}

const modals: NavigationSection = {
  title: 'Modal',
  path: 'modals',
  children: [
    { title: 'Confirm', path: 'confirm' },
    { title: 'Dialog', path: 'dialog' },
    { title: 'Drawer', path: 'drawer' },
  ],
}

const overlays: NavigationSection = {
  title: 'Overlay',
  path: 'overlays',
  noLink: true,
  children: [
    { title: 'Menu', path: 'menu' },
    { title: 'Popover', path: 'popover' },
    { title: 'Tooltip', path: 'tooltip' },
  ],
}

const content: NavigationSection = {
  title: 'Content',
  path: 'content',
  noLink: true,
  children: [
    { title: 'Banner', path: 'banner' },
    { title: 'Card', path: 'card' },
    { title: 'Divider', path: 'divider' },
    { title: 'Link', path: 'link' },
    { title: 'List', path: 'list' },
    { title: 'Spinner', path: 'spinner' },
    { title: 'Table', path: 'table' },
    { title: 'VisuallyHidden', path: 'visually-hidden' },
  ],
}

const components: NavigationSection = {
  title: 'Components',
  path: 'components',
  noLink: true,
  children: [layout, text, icons, modals, overlays, forms, content],
}

export default components
