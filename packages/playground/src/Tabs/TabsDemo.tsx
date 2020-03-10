import React, { FC } from 'react'
import {
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  Box,
} from '@looker/components'

export const TabsDemo: FC = () => (
  <Box height={400} display="flex" flexDirection="column">
    <Tabs>
      <TabList>
        <Tab>height: 100%</Tab>
        <Tab>height: 200px</Tab>
      </TabList>
      <TabPanels flex={1}>
        <TabPanel>
          <div
            style={{
              backgroundColor: 'lightblue',
              height: '100%',
            }}
          ></div>
        </TabPanel>
        <TabPanel>
          <div
            style={{
              backgroundColor: 'coral',
              height: '200px',
              width: '100%',
            }}
          ></div>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </Box>
)
