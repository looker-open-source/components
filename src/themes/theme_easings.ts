export interface ThemeEasings {
  ease: string
  easeIn: string
  easeInBack: string
  easeOut: string
  easeOutBack: string
}

export const themeEasings = {
  ease: 'cubic-bezier(0.86, 0, 0.07, 1)',
  easeIn: 'cubic-bezier(0.895, 0.03, 0.685, 0.22);',
  easeInBack: 'cubic-bezier(0.6, -0.28, 0.735, 0.045)',
  easeOut: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
  easeOutBack: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
}
