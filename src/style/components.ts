import { palette } from './palette'

export interface Components {
  Overlay: {
    zIndex: number
  }
  Popover: {
    backdrop: {
      backgroundColor: string
      opacity: number
    }
  }
}

export const components: Components = {
  Overlay: {
    zIndex: 0,
  },
  Popover: {
    backdrop: {
      backgroundColor: palette.charcoal200,
      opacity: 0.6,
    },
  },
}
