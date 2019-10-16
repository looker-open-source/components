import React from 'react'

export interface TabPanelProps {
  selected?: boolean
}

export const TabPanel: React.FC<TabPanelProps> = ({ children, selected }) =>
  selected ? <>{children}</> : null
