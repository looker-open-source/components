import * as React from 'react'
const classNames = require('classnames')
import * as styles from './Icon.scss'
import {
  AddCircle,
  ArrowDropDown,
  ArrowDropUp,
  CancelCircle,
  ChartBar,
  ChartBubble,
  ChartLine,
  ChartMulti,
  ChartPie,
  Close,
  DotsHorz,
  DotsVert,
  DragHandle,
  Edit,
  ExpandMore,
  ExploreCircle,
  External,
  Favorite,
  FavoriteOutline,
  File,
  Filter,
  Hamburger,
  Note,
  Redo,
  Refresh,
  RemoveCircle,
  Search,
  Settings,
  TextFormat,
  Trash,
  TrashOutline,
  Undo
} from '../../icons/IconList'

export const ICON_BUNDLE = {
  AddCircle,
  ArrowDropDown,
  ArrowDropUp,
  CancelCircle,
  ChartBar,
  ChartBubble,
  ChartLine,
  ChartMulti,
  ChartPie,
  Close,
  DotsHorz,
  DotsVert,
  DragHandle,
  Edit,
  ExpandMore,
  ExploreCircle,
  External,
  Favorite,
  FavoriteOutline,
  File,
  Filter,
  Hamburger,
  Note,
  Redo,
  Refresh,
  RemoveCircle,
  Search,
  Settings,
  TextFormat,
  Trash,
  TrashOutline,
  Undo
}

export type IconSource = keyof typeof ICON_BUNDLE

export interface IconProps {
  glyph: IconSource,
  accessibilityLabel?: string
  color?: string
  className?: string
}


type PropertyBag = {
  [key: string]: any
}

/**

*/

export const Icon: React.SFC<IconProps> = ({className, glyph ,accessibilityLabel,...args}) => {
  const styleableProps: PropertyBag = {

  }

  let icon = ICON_BUNDLE[glyph]

  return (
    <span className={classNames(styles.lensIcon, className, styleableProps)} {...args} dangerouslySetInnerHTML={{__html: icon}} aria-label={accessibilityLabel}></span>
  )
}
