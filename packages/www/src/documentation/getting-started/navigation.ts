import { NavigationSection } from '../../components/Navigation'

const navigation: NavigationSection = {
  title: 'Getting Started',
  path: 'getting-started',
  children: [
    {
      title: 'Overview',
      path: '',
    },
    {
      title: 'Writing Components the Lens Way',
      path: 'the-lens-way',
      detail: 'Coming Soon',
    },
    {
      title: 'Integrating Lens into Helltool',
      path: 'integrating',
    },
    {
      title: 'Code Quality & IDE Setup',
      path: 'tooling',
      detail: 'Coming Soon',
    },
    {
      title: 'Design Contribution',
      path: 'design-contribution',
      detail: 'Coming Soon',
    },
    {
      title: 'Styled Components',
      path: 'styled-components',
    },
  ],
}

export default navigation
