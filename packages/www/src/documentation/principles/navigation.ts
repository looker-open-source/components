import { NavigationSection } from '../../components/Navigation'

const navigation: NavigationSection = {
  title: 'Principles',
  path: 'principles',
  noLink: true,
  children: [
    {
      title: 'Accessibility',
      path: 'accessibility',
    },
    {
      title: 'Support Levels',
      path: 'support-levels',
    },
  ],
}

export default navigation
