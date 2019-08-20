import * as React from 'react'
import { palette } from '../../../../style'
import { Box } from '../../../Box'
import { IconButton } from '../../../Button'
import { Text } from '../../../Text'

export interface InputSearchControlsProps {
  summary?: string
  onClear: () => void
}

export const InputSearchControls: React.FC<InputSearchControlsProps> = ({
  onClear,
  summary,
}) => {
  const clear = (
    <IconButton
      color="neutral"
      size="xsmall"
      icon="Close"
      pr="xsmall"
      label="Clear Filter"
      onClick={onClear}
    />
  )

  const seperator = (
    <Box
      style={{
        borderRight: `1px solid ${palette.charcoal200}`,
        pointerEvents: 'none',
      }}
      height="1.5rem"
    />
  )

  return (
    <Box mx="xxsmall" height="100%" display="flex" alignItems="center">
      {summary && (
        <Text
          pr="xsmall"
          variant="subdued"
          fontSize="small"
          style={{ whiteSpace: 'nowrap', pointerEvents: 'none' }}
        >
          {summary}
        </Text>
      )}
      {summary && clear && seperator}
      {clear}
    </Box>
  )
}
