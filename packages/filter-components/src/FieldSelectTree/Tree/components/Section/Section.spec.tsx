/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { Text } from '@looker/components'
import { fireEvent, screen } from '@testing-library/react'
import noop from 'lodash/noop'
import React from 'react'
import { renderWithTheme } from '@looker/test-utils'
import { Section } from './Section'

describe('Section tests', () => {
  it('should render a Section', async () => {
    const { container } = renderWithTheme(
      <Section
        id="1"
        title={<Text>Section Title</Text>}
        isOpen={true}
        detail="This is a detail"
        onClick={noop}
      />
    )

    expect(container).toBeVisible()
    expect(await screen.findByText('Section Title')).toBeVisible()
    expect(await screen.findByText('This is a detail')).toBeVisible()
  })

  it('should open the section', () => {
    const onClick = jest.fn()
    renderWithTheme(
      <Section
        id="1"
        title={<Text>Section Title</Text>}
        isOpen={false}
        detail="This is a detail"
        onClick={onClick}
      >
        <Text>Inside of Section</Text>
      </Section>
    )
    const section = screen.getByText('Section Title')
    fireEvent.click(section)

    expect(onClick).toHaveBeenCalledWith({
      isOpen: true,
      id: '1',
    })
  })

  it('should show the sections children if open', async () => {
    renderWithTheme(
      <Section
        id="1"
        title={<Text>Section Title</Text>}
        isOpen={true}
        detail="This is a detail"
        onClick={noop}
      >
        <Text>Inside of Section</Text>
      </Section>
    )

    expect(await screen.findByText('Inside of Section')).toBeVisible()
  })
})
