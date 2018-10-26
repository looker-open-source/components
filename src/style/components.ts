import { palette } from './palette'

export interface Components {
  Overlay: {
    zIndex: number
    backdrop: {
      backgroundColor: string
      opacity: number
    }
  }
  Popover: {
    backdrop: {
      backgroundColor?: string
      opacity?: number
    }
  }
}

export const components: Components = {
  Overlay: {
    backdrop: {
      backgroundColor: palette.charcoal200,
      opacity: 0.6,
    },
    zIndex: 0,
  },
  Popover: {
    backdrop: {},
  },
}
