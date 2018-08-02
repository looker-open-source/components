import * as React from 'react'
const classNames = require('classnames')
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
import * as styles from './Icon.scss'

import AddCirclez from '../../icons/AddCircle'

function f() {
  return <AddCirclez fill="blue" />
}

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
  glyph: IconSource
  accessibilityLabel?: string
  color?: string
  className?: string
}

interface PropertyBag {
  [key: string]: any
}

export const Icon: React.SFC<IconProps> = ({
  className,
  glyph,
  accessibilityLabel,
  ...args
}) => {
  const styleableProps: PropertyBag = {}

  const icon = ICON_BUNDLE[glyph]

  return (
    <span
      className={classNames(styles.lensIcon, className, styleableProps)}
      {...args}
      dangerouslySetInnerHTML={{ __html: icon }}
      aria-label={accessibilityLabel}
    />
  )
}
