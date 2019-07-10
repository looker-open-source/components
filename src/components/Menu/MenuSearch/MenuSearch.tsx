import * as React from 'react'
import { HotKeys, ObserveKeys } from 'react-hotkeys'
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
  return (
    <Box position="relative">
      <HotKeys
        keyMap={{ MOVE_DOWN: 'down', MOVE_UP: 'up' }}
        handlers={{
          MOVE_DOWN: () => moveFocus(1, 0, menuRef),
          MOVE_UP: () => moveFocus(-1, -1, menuRef),
        }}
      >
        <ObserveKeys except={[]} only={['down', 'up']}>
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
            {...props}
          />
        </ObserveKeys>
      </HotKeys>
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
