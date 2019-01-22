import * as React from 'react'
import { HotKeys } from 'react-hotkeys'
import { styled } from '../../style'
import { Box, BoxProps } from '../Box'
import { MenuGroup, MenuGroupProps } from './MenuGroup'
import { MenuItemProps } from './MenuItem'

export type MenuChild = React.ReactElement<MenuItemProps | MenuGroupProps>

export interface MenuProps extends BoxProps<HTMLDivElement> {
  children: MenuChild[] | MenuChild
  focusOnMount?: boolean
}

export class Menu extends React.PureComponent<MenuProps> {
  private ref: React.RefObject<HTMLDivElement>

  constructor(props: MenuProps) {
    super(props)
    this.ref = React.createRef()
  }

  public componentDidMount() {
    if (this.props.focusOnMount && this.ref.current) {
      this.ref.current.focus({ preventScroll: true })
    }
  }

  public render() {
    const { children, focusOnMount, ...props } = this.props
    return (
      <HotKeys keyMap={this.keyMap()} handlers={this.keyHandlers()}>
        <MenuStyle
          innerRef={this.ref}
          tabIndex={-1}
          userSelect="none"
          {...props}
        >
          {children}
        </MenuStyle>
      </HotKeys>
    )
  }

  private keyMap() {
    return { moveDown: 'down', moveUp: 'up' }
  }

  private moveFocus(direction: number, initial: number) {
    if (!this.ref.current) return
    /* tslint:disable */
    const tabStops = Array.from(
      this.ref.current.querySelectorAll('a,button,[tabindex]')
    ) as HTMLElement[]
    /* tslint:enable */

    if (document.activeElement) {
      const next =
        tabStops.findIndex(f => f === document.activeElement) + direction

      if (next === tabStops.length) return
      if (!tabStops[next]) return
      tabStops[next].focus()
    } else {
      tabStops.slice(initial)[0].focus()
    }
    return false
  }

  private keyHandlers() {
    return {
      moveDown: () => this.moveFocus(1, 0),
      moveUp: () => this.moveFocus(-1, -1),
    }
  }
}

const MenuStyle = styled(Box)`
  ${MenuGroup} ~ ${MenuGroup} { /* stylelint-disable-line */
    margin-top: .5rem;
    padding-top: .25rem;
    border-top: 1px solid ${p => p.theme.colors.palette.charcoal200};
  }

  &:focus {
    outline: none;
  }
`
