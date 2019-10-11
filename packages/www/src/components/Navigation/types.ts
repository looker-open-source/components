export interface NavigationPage {
  title: string
  path: string
  noLink?: boolean
  isMissing?: boolean
}

export interface NavigationSection extends NavigationPage {
  children: (NavigationPage | NavigationSection)[]
}
