import { OverlayBubbleStyleProps } from '../components/Overlay/OverlayBubble'
import { shadows } from './elevation'
import { palette } from './palette'
import { radii } from './radii'

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
    bubble: OverlayBubbleStyleProps
  }
  RichTooltip: {
    bubble: OverlayBubbleStyleProps
  }
  Tooltip: {
    bubble: OverlayBubbleStyleProps
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
    bubble: {
      backgroundColor: palette.white,
      border: '1px solid',
      borderColor: palette.charcoal200,
      borderRadius: radii.medium,
      boxShadow: shadows[3],
      color: palette.charcoal900,
      padding: 'small',
    },
  },
  RichTooltip: {
    bubble: {
      backgroundColor: palette.white,
      border: '1px solid',
      borderColor: palette.charcoal200,
      borderRadius: radii.medium,
      boxShadow: shadows[3],
      color: palette.charcoal900,
      padding: 'small',
    },
  },
  Tooltip: {
    bubble: {
      backgroundColor: palette.charcoal900,
      border: 'none',
      borderColor: 'none',
      borderRadius: radii.medium,
      boxShadow: shadows[3],
      color: palette.charcoal000,
      padding: 'xsmall',
    },
  },
}
