import React from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import { Icon } from '@looker/components'
import { iconNameList, IconNames } from '@looker/icons'
import { IconGrid, IconGridItem } from './IconList.styles'

export const IconList = () => {
  return (
    <IconGrid>
      {iconNameList.map(name => (
        <CopyToClipboard
          text={`<Icon name="${name}" />`}
          onCopy={() => alert(`Copied icon "${name}" to clipboard.`)}
          key={name}
        >
          <IconGridItem>
            <Icon name={name as IconNames} size={32} />
            <div>{name}</div>
          </IconGridItem>
        </CopyToClipboard>
      ))}
    </IconGrid>
  )
}
