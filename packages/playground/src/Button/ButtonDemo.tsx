/*

 MIT License

 Copyright (c) 2020 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */

import React, { FC } from 'react'

import {
  Box,
  Button,
  ButtonOutline,
  ButtonTransparent,
  Confirm,
  Heading,
  Grid,
  Space,
  SpaceVertical,
} from '@looker/components'

import {
  SizeLarge,
  SizeMedium,
  SizeSmall,
  SizeXSmall,
  SizeXXSmall,
  SemanticColors,
} from '@looker/design-tokens'

type ButtonColors = keyof SemanticColors

type ButtonSizes = SizeXXSmall | SizeXSmall | SizeSmall | SizeMedium | SizeLarge

type ButtonStyles = 'default' | 'outline' | 'transparent'

const ButtonContainer: FC = ({ ...props }) => {
  return (
    <Box bg="#F9FAFB" p="xlarge">
      <SpaceVertical gap="xlarge">{props.children}</SpaceVertical>
    </Box>
  )
}

export const ButtonDemo: FC = () => {
  const ButtonComponents = {
    default: Button,
    outline: ButtonOutline,
    transparent: ButtonTransparent,
  }

  const buttonSizes: Array<ButtonSizes> = ['xsmall', 'small', 'medium', 'large']

  const renderButtons = (
    style: ButtonStyles,
    size: ButtonSizes,
    color: ButtonColors
  ) => {
    const ButtonTag = ButtonComponents[style]
    return (
      <Space gap="small">
        <ButtonTag size={size} color={color}>
          Button
        </ButtonTag>
        <ButtonTag size={size} iconBefore="Plus" color={color}>
          Button
        </ButtonTag>
        <ButtonTag size={size} iconAfter="Plus" color={color}>
          Button
        </ButtonTag>
      </Space>
    )
  }

  return (
    <Box p="xlarge">
      <SpaceVertical gap="small">
        <Heading>Primary</Heading>
        <Grid columns={3}>
          <ButtonContainer>
            <SpaceVertical gap="xlarge">
              {buttonSizes.map((size) => {
                return renderButtons('default', size, 'primary')
              })}
            </SpaceVertical>
          </ButtonContainer>

          <ButtonContainer>
            {buttonSizes.map((size) => {
              return renderButtons('outline', size, 'primary')
            })}
          </ButtonContainer>

          <ButtonContainer>
            {buttonSizes.map((size) => {
              return renderButtons('transparent', size, 'primary')
            })}
          </ButtonContainer>
        </Grid>

        <Heading>Neutral</Heading>
        <Grid>
          <ButtonContainer>
            {buttonSizes.map((size) => {
              return renderButtons('outline', size, 'neutral')
            })}
          </ButtonContainer>
          <ButtonContainer>
            {buttonSizes.map((size) => {
              return renderButtons('transparent', size, 'neutral')
            })}
          </ButtonContainer>
        </Grid>

        <Heading>Critical</Heading>
        <Grid columns={3}>
          <ButtonContainer>
            <SpaceVertical gap="xlarge">
              {buttonSizes.map((size) => {
                return renderButtons('default', size, 'danger')
              })}
            </SpaceVertical>
          </ButtonContainer>

          <ButtonContainer>
            {buttonSizes.map((size) => {
              return renderButtons('outline', size, 'danger')
            })}
          </ButtonContainer>

          <ButtonContainer>
            {buttonSizes.map((size) => {
              return renderButtons('transparent', size, 'danger')
            })}
          </ButtonContainer>
        </Grid>
      </SpaceVertical>

      <SpaceVertical gap="large">
        <Heading>Open this dialog</Heading>
        <Confirm
          title="Confirm Something"
          message="Is this what you want to do?"
          onConfirm={(close) => {
            alert('You did something')
            close()
          }}
        >
          {(open) => <Button onClick={open}>Default</Button>}
        </Confirm>
      </SpaceVertical>
    </Box>
  )
}
