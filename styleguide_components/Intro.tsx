import * as React from 'react'
import { Box, Code, Heading, IconExploreCircle, IconUndo, Text } from '../src'

export const Intro = () => {
  return (
    <Box>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box my="large">
          <svg
            width="49"
            height="49"
            viewBox="0 0 49 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="35.4822"
              cy="13.5172"
              rx="13.5178"
              ry="13.5172"
              fill="#4C33AA"
            />
            <ellipse
              cx="21.9662"
              cy="27.0345"
              rx="21.9664"
              ry="21.9654"
              fill="#7E64E0"
              fillOpacity="0.8"
            />
          </svg>
        </Box>
        <Heading size="d1">LENS</Heading>
        <Box my="large" maxWidth="600px">
          <Text size="2">
            A collections of assets for anyone making Looker software, providing
            Looker services, or telling Looker stories.
          </Text>
        </Box>
      </Box>
      <Box my="xlarge">
        <Box height="8px" bg="#F4F6F7" />
      </Box>
      <Box>
        <Box display="flex" justifyContent="space-between">
          <Box
            maxWidth="215px"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Box mb="large">
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                width="44px"
                height="44px"
                bg="rgba(152, 131, 230, 0.2)"
                borderRadius="50%"
              >
                <svg
                  width="11"
                  height="21"
                  viewBox="0 0 11 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.79199 15.6797L6.79199 0.166748L4.20866 0.166748L4.20866 15.6797L0.333658 15.6797L5.50032 20.8334L10.667 15.6797L6.79199 15.6797Z"
                    fill="#6C43E0"
                  />
                </svg>
              </Box>
            </Box>
            <Heading level="4" size="3" weight="semiBold">
              Install
            </Heading>
            <Box mt="small">
              <Text size="5">
                Lens packages are served by Looker's private package server,
                Nexus, and can be installed through npm or yarn.
              </Text>
              <Code size="5">yarn add looker-lens</Code>
            </Box>
          </Box>
          <Box
            maxWidth="215px"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Box mb="large">
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                width="44px"
                height="44px"
                bg="rgba(0, 135, 225, 0.1)"
                borderRadius="50%"
              >
                <IconExploreCircle width="24" height="24" fill="#0087E1" />
              </Box>
            </Box>
            <Heading level="4" size="3" weight="semiBold">
              Explore
            </Heading>
            <Box mt="small">
              <Text size="5">
                Search or browse through the component listing on this site. You
                can use the interactive prompts to compose whole components
                right in Lens.
              </Text>
            </Box>
          </Box>
          <Box
            maxWidth="215px"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Box mb="large">
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                width="44px"
                height="44px"
                bg="rgba(255, 202, 98, 0.2)"
                borderRadius="50%"
              >
                <IconUndo width="24" height="24" fill="#FFA800" />
              </Box>
            </Box>
            <Heading level="4" size="3" weight="semiBold">
              Contribute
            </Heading>
            <Box mt="small">
              <Text size="5">
                Want something in Lens you don't see here? Follow the
                contribution guidelines and best practices, then open a Pull
                Request on the Lens repository.
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
