import { NavigationSection } from '../../components/Navigation'

const navigation: NavigationSection = {
  title: 'Design System',
  path: 'system',
  noLink: true,
  children: [
    {
      title: 'Borders & Dividers',
      path: 'borders',
    },
    {
      title: 'Breakpoints',
      path: 'breakpoints',
    },
    {
      title: 'Color',
      path: 'color',
    },
    {
      title: 'Spacing',
      path: 'spacing',
    },
    {
      title: 'Typography',
      path: 'typography',
    },
  ],
}

export default navigation
