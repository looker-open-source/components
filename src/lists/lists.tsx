import * as React from 'react'
import * as classNames from 'classnames'
import {SFC} from "react";

export const ListItem: React.StatelessComponent<{}> = ({children}) => {
  return <li>{children}</li>
}

export const List: SFC = ({children}) => {
  const className = classNames()
  return <ul className={className}>{children}</ul>
}

export const OrderedList: SFC = ({children}) => {
  const className = classNames()
  return <ol className={className}>{children}</ol>
}
