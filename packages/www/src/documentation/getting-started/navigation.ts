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
    },
    {
      title: 'Integrating Lens into Helltool',
      path: 'integrating',
    },
    {
      title: 'Code Quality & IDE Setup',
      path: 'tooling',
    },
    {
      title: 'Design Contribution',
      path: 'design-contribution',
    },
    {
      title: 'Styled Components',
      path: 'styled-components',
    },
  ],
}

export default navigation
