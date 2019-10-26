import React, { FC } from 'react'

export interface TabPanelProps {
  selected?: boolean
}

export const TabPanel: FC<TabPanelProps> = ({ children, selected }) =>
  selected ? <>{children}</> : null
