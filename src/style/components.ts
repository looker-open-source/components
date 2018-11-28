import { OverlayBubbleStyleProps } from '../components/Overlay/OverlayBubble'
import {
  ResponsiveBorderRadiusValue,
  ResponsiveFontSizeValue,
  ResponsiveFontWeightValue,
  ResponsiveSpaceValue,
} from '../style/responsive'
import { shadows } from './elevation'
import { fontSizes } from './font_sizes'
import { fontWeights } from './font_weights'
import { palette } from './palette'
import { radii } from './radii'
import { SpacingSizes } from './theme'

export interface Components {
  Button: {
    borderRadius: ResponsiveBorderRadiusValue
  }
  Field: {
    labelMargin: SpacingSizes
    labelWidth: ResponsiveSpaceValue
  }
  InputText: {
    borderRadius: ResponsiveBorderRadiusValue
    fontSize: ResponsiveFontSizeValue
    height: string
    py: SpacingSizes
    px: SpacingSizes
  }
  Label: {
    color: string
    fontSize: ResponsiveFontSizeValue
    fontWeight: ResponsiveFontWeightValue
  }
  Legend: {
    bottomPadding: ResponsiveSpaceValue
    color: string
    fontSize: ResponsiveFontSizeValue
    fontWeight: ResponsiveFontWeightValue
  }
  ValidationMessage: {
    fontSize: ResponsiveFontSizeValue
  }
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
  Button: {
    borderRadius: 'medium',
  },
  Field: {
    labelMargin: 'small',
    labelWidth: '20%',
  },
  InputText: {
    borderRadius: '4px',
    fontSize: '5',
    height: '28px',
    px: 'small',
    py: 'none',
  },
  Label: {
    color: palette.charcoal800,
    fontSize: fontSizes[5],
    fontWeight: fontWeights.semiBold,
  },
  Legend: {
    bottomPadding: '10px',
    color: palette.charcoal800,
    fontSize: fontSizes.d3,
    fontWeight: fontWeights.light,
  },
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
  ValidationMessage: {
    fontSize: fontSizes[6],
  },
}
