import * as React from 'react'
import { palette, styled } from '../../../style'
import { Box, BoxProps } from '../../Box'
import { InputText, InputTextProps } from '../../Form/Inputs'
import { moveFocus } from '../moveFocus'
import { MenuSearchControls } from './MenuSearchControls'

export interface MenuSearchProps
  extends BoxProps<HTMLInputElement>,
    InputTextProps {
  /**
   * Specifies value of the input field.
   */
  value?: string
  /**
   *
   */
  hideControls?: boolean
  /**
   *
   */
  onClear?: () => void
  /**
   *
   */
  summary?: string
  /**
   *
   */
  menuRef?: React.RefObject<HTMLElement>
}

const InternalMenuSearch: React.FC<MenuSearchProps> = ({
  hideControls,
  menuRef,
  onClear,
  summary,
  value,
  ...props
}) => {
  const onKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!event.target) return

    switch (event.key) {
      case 'ArrowDown':
        moveFocus(1, 0, menuRef)
        break
      case 'ArrowUp':
        moveFocus(-1, -1, menuRef)
        break
    }
  }

  return (
    <Box position="relative">
      <SearchInput
        type="search"
        value={value}
        borderRadius={0}
        border="none"
        borderBottom="1px solid"
        borderColor={palette.charcoal200}
        width="100%"
        p="large"
        height="auto"
        onKeyUp={onKeyUp}
        {...props}
      />
      {!hideControls && (
        <MenuSearchControls
          onClear={onClear}
          summary={summary}
          hasValue={Boolean(value && value.length > 0)}
        />
      )}
    </Box>
  )
}

const MenuSearchFactory = React.forwardRef((props: MenuSearchProps, ref) => {
  return (
    <InternalMenuSearch
      innerRef={ref as React.RefObject<HTMLElement>}
      {...props}
    />
  )
})

export const MenuSearch = styled<InputTextProps>(MenuSearchFactory)``

const SearchInput = styled(InputText)`
  appearance: none;

  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    appearance: none;
  }
`
