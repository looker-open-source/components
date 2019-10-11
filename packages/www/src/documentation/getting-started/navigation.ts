import { NavigationSection } from '../../components/Navigation'

const navigation: NavigationSection = {
  title: 'Getting Started',
  path: 'getting-started',
  noLink: true,
  children: [
    {
      title: 'Overview',
      path: '',
    },
    {
      title: 'Writing Components the Lens Way',
      path: 'the-lens-way',
      isMissing: true,
    },
    {
      title: 'Integrating Lens into Helltool',
      path: 'integrating',
    },
    {
      title: 'Code Quality & IDE Setup',
      path: 'tooling',
      isMissing: true,
    },
    {
      title: 'Design Contribution',
      path: 'design-contribution',
      isMissing: true,
    },
    {
      title: 'Styled Components',
      path: 'styled-components',
    },
  ],
}

export default navigation
