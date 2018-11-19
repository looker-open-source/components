import * as React from 'react'
import * as AllIcons from '.'
import { Box } from '../../components/Box'
import { styled } from '../../style'
import { ICON_NAMES } from './ICON_NAMES'

export interface IconProps {
  name: ICON_NAMES
  size?: number | string
  color?: string
}

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'AddCircle': {
      return <AllIcons.IconAddCircle width="auto" height="auto" />
    }
    case 'ArrowDropDown': {
      return <AllIcons.IconArrowDropDown width="auto" height="auto" />
    }
    case 'ArrowDropUp': {
      return <AllIcons.IconArrowDropUp width="auto" height="auto" />
    }
    case 'CancelCircle': {
      return <AllIcons.IconCancelCircle width="auto" height="auto" />
    }
    case 'ChartBar': {
      return <AllIcons.IconChartBar width="auto" height="auto" />
    }
    case 'ChartBubble': {
      return <AllIcons.IconChartBubble width="auto" height="auto" />
    }
    case 'ChartLine': {
      return <AllIcons.IconChartLine width="auto" height="auto" />
    }
    case 'ChartMulti': {
      return <AllIcons.IconChartMulti width="auto" height="auto" />
    }
    case 'ChartPie': {
      return <AllIcons.IconChartPie width="auto" height="auto" />
    }
    case 'CheckCircle': {
      return <AllIcons.IconCheckCircle width="auto" height="auto" />
    }
    case 'CheckProgress': {
      return <AllIcons.IconCheckProgress width="auto" height="auto" />
    }
    case 'Close': {
      return <AllIcons.IconClose width="auto" height="auto" />
    }
    case 'Dashboard': {
      return <AllIcons.IconDashboard width="auto" height="auto" />
    }
    case 'DotsHorz': {
      return <AllIcons.IconDotsHorz width="auto" height="auto" />
    }
    case 'DotsVert': {
      return <AllIcons.IconDotsVert width="auto" height="auto" />
    }
    case 'DragHandle': {
      return <AllIcons.IconDragHandle width="auto" height="auto" />
    }
    case 'Edit': {
      return <AllIcons.IconEdit width="auto" height="auto" />
    }
    case 'ExpandMore': {
      return <AllIcons.IconExpandMore width="auto" height="auto" />
    }
    case 'ExploreCircle': {
      return <AllIcons.IconExploreCircle width="auto" height="auto" />
    }
    case 'External': {
      return <AllIcons.IconExternal width="auto" height="auto" />
    }
    case 'Favorite': {
      return <AllIcons.IconFavorite width="auto" height="auto" />
    }
    case 'FavoriteOutline': {
      return <AllIcons.IconFavoriteOutline width="auto" height="auto" />
    }
    case 'File': {
      return <AllIcons.IconFile width="auto" height="auto" />
    }
    case 'Filter': {
      return <AllIcons.IconFilter width="auto" height="auto" />
    }
    case 'Folder': {
      return <AllIcons.IconFolder width="auto" height="auto" />
    }
    case 'FolderShared': {
      return <AllIcons.IconFolderShared width="auto" height="auto" />
    }
    case 'Group': {
      return <AllIcons.IconGroup width="auto" height="auto" />
    }
    case 'Hamburger': {
      return <AllIcons.IconHamburger width="auto" height="auto" />
    }
    case 'Home': {
      return <AllIcons.IconHome width="auto" height="auto" />
    }
    case 'Info': {
      return <AllIcons.IconInfo width="auto" height="auto" />
    }
    case 'LiveHelp': {
      return <AllIcons.IconLiveHelp width="auto" height="auto" />
    }
    case 'LookerLogo': {
      return <AllIcons.IconLookerLogo width="auto" height="auto" />
    }
    case 'Note': {
      return <AllIcons.IconNote width="auto" height="auto" />
    }
    case 'Popular': {
      return <AllIcons.IconPopular width="auto" height="auto" />
    }
    case 'RecentActivity': {
      return <AllIcons.IconRecentActivity width="auto" height="auto" />
    }
    case 'Redo': {
      return <AllIcons.IconRedo width="auto" height="auto" />
    }
    case 'Refresh': {
      return <AllIcons.IconRefresh width="auto" height="auto" />
    }
    case 'RemoveCircle': {
      return <AllIcons.IconRemoveCircle width="auto" height="auto" />
    }
    case 'Search': {
      return <AllIcons.IconSearch width="auto" height="auto" />
    }
    case 'Settings': {
      return <AllIcons.IconSettings width="auto" height="auto" />
    }
    case 'TextFormat': {
      return <AllIcons.IconTextFormat width="auto" height="auto" />
    }
    case 'Trash': {
      return <AllIcons.IconTrash width="auto" height="auto" />
    }
    case 'TrashOutline': {
      return <AllIcons.IconTrashOutline width="auto" height="auto" />
    }
    case 'Undo': {
      return <AllIcons.IconUndo width="auto" height="auto" />
    }
    case 'UnusedContent': {
      return <AllIcons.IconUnusedContent width="auto" height="auto" />
    }
    case 'Warning': {
      return <AllIcons.IconWarning width="auto" height="auto" />
    }

    default: {
      return 'no icon with that name'
    }
  }
}

const InternalIcon: React.SFC<IconProps> = ({
  name,
  color,
  size = '1em',
  ...props
}) => (
  <Box color={color} width={size} height={size} alignItems="center" {...props}>
    {getIcon(name)}
  </Box>
)

export const Icon = styled<IconProps>(InternalIcon)`
  display: inline-flex;
  svg {
    fill: currentColor;
  }
`
