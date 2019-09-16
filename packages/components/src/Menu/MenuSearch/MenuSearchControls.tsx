import * as React from 'react'
import { palette } from '../../../style'
import { Box } from '../../Box'
import { IconButton } from '../../Button'
import { Text } from '../../Text'

export interface MenuSearchControlsProps {
  hasValue?: boolean
  summary?: string
  onClear?: () => void
}

export const MenuSearchControls: React.FC<MenuSearchControlsProps> = ({
  onClear,
  hasValue,
  summary,
}) => {
  const clear = onClear && hasValue && (
    <IconButton
      color="neutral"
      size="small"
      icon="Close"
      label="Clear Filter"
      onClick={onClear}
    />
  )

  const seperator = (
    <Box
      mr="small"
      ml="medium"
      style={{
        borderRight: `1px solid ${palette.charcoal200}`,
        pointerEvents: 'none',
      }}
      height="1.5rem"
    />
  )

  return (
    <Box
      position="absolute"
      top="0"
      right="0"
      mr="large"
      height="100%"
      display="flex"
      alignItems="center"
    >
      {summary && (
        <Text
          variant="subdued"
          fontSize="small"
          style={{ pointerEvents: 'none' }}
        >
          {summary}
        </Text>
      )}
      {summary && clear && seperator}
      {clear}
    </Box>
  )
}
