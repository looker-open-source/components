export interface NavigationPage {
  title: string
  path: string
  detail?: string
}

export interface NavigationSection {
  title: string
  path: string
  children: (NavigationPage | NavigationSection)[]
}
