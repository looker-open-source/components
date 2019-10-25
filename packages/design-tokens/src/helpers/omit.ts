import omit from 'lodash/omit'

export const typographyProps = [
  'fontFamily',
  'fontSize',
  'fontStyle',
  'fontWeight',
  'lineHeight',
  'letterSpacing',
  'textAlign',
]

const borderProps = [
  'BorderWidthProps',
  'BorderStyleProps',
  'BorderColorProps',
  'BorderRadiusProps',
  'BorderTopProps',
  'BorderRightProps',
  'BorderBottomProps',
  'BorderLeftProps',
]
const colorProps = ['backgroundColor', 'bg', 'color', 'opacity']
const flexProps = [
  'AlignItemsProps',
  'AlignContentProps',
  'JustifyItemsProps',
  'JustifyContentProps',
  'FlexWrapProps',
  'FlexDirectionProps',
  'FlexProps',
  'FlexGrowProps',
  'FlexShrinkProps',
  'FlexBasisProps',
  'JustifySelfProps',
  'AlignSelfProps',
  'OrderProps',
]
const positionProps = ['bottom', 'left', 'position', 'right', 'top', 'zIndex']
const layoutProps = [
  'display',
  'height',
  'maxHeight',
  'maxWidth',
  'minHeight',
  'minWidth',
  'overflow',
  'overflowX',
  'overFlowY',
  'size',
  'verticalAlign',
  'width',
]
const spaceProps = [
  'm',
  'mb',
  'mt',
  'mr',
  'mb',
  'mx',
  'my',
  'margin',
  'marginBottom',
  'marginLeft',
  'marginRight',
  'marginTop',
  'marginX',
  'marginY',
  'p',
  'pb',
  'pt',
  'pr',
  'pb',
  'px',
  'py',
  'padding',
  'paddingBottom',
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'paddingX',
  'paddingY',
]

const otherProps = ['animation', 'color']
const pseudoProps = ['activeStyle', 'focusStyle', 'hoverStyle', 'userSelect']

const styledSystemProps = [
  ...borderProps,
  'boxShaodw',
  ...colorProps,
  ...flexProps,
  ...positionProps,
  ...layoutProps,
  ...spaceProps,
  ...typographyProps,
  ...otherProps,
  ...pseudoProps,
]

export const omitStyledProps = (props: any) => {
  return omit(props, styledSystemProps)
}
