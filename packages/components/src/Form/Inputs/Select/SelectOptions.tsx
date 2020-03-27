import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { Box } from '../../../Layout'
import { ListItem } from '../../../List'
import { Heading, Paragraph } from '../../../Text'
import {
  ComboboxMultiOption,
  ComboboxOption,
  comboboxOptionGrid,
  ComboboxOptionObject,
  ComboboxOptionText,
} from '../Combobox'

export interface SelectOptionObject extends ComboboxOptionObject {
  description?: string | ReactNode
}

export interface SelectOptionGroupProps {
  options: SelectOptionObject[]
  title: string | ReactNode
}

export type SelectOptionProps = SelectOptionObject | SelectOptionGroupProps

const renderOption = (option: SelectOptionObject, index: number) => {
  if (option.description) {
    return (
      <ComboboxOption {...option} key={index} py="xxsmall">
        <SelectOptionWithDescription {...option} />
      </ComboboxOption>
    )
  }
  return <ComboboxOption {...option} key={index} />
}

const renderMultiOption = (option: SelectOptionObject, index: number) => {
  if (option.description) {
    return (
      <ComboboxMultiOption {...option} key={index} py="xxsmall">
        <SelectOptionWithDescription {...option} />
      </ComboboxMultiOption>
    )
  }
  return <ComboboxMultiOption {...option} key={index} />
}

export function SelectOptionWithDescription({
  description,
}: SelectOptionObject) {
  return (
    <Box>
      <Heading fontSize="small" fontWeight="semiBold" pb="xxsmall">
        <ComboboxOptionText />
      </Heading>
      <Paragraph variant="subdued" fontSize="small">
        {description}
      </Paragraph>
    </Box>
  )
}

const SelectOptionGroupTitle = styled(Heading)<{ isMulti?: boolean }>`
  ${comboboxOptionGrid}
  ${({ isMulti, theme }) =>
    isMulti ? `grid-template-columns: ${theme.space.xlarge} 1fr;` : ''}
`

SelectOptionGroupTitle.defaultProps = {
  fontSize: 'xxsmall',
  fontWeight: 'semiBold',
  px: 'xsmall',
  py: 'xxsmall',
  variant: 'subdued',
}

export const SelectOptionGroup = ({
  options,
  title,
  isMulti,
}: SelectOptionGroupProps & { isMulti?: boolean }) => (
  <Box py="xxsmall">
    <SelectOptionGroupTitle isMulti={isMulti}>
      <span />
      {title}
    </SelectOptionGroupTitle>
    {options.map(isMulti ? renderMultiOption : renderOption)}
  </Box>
)

export interface SelectOptionsProps {
  options?: SelectOptionProps[]
  isMulti?: boolean
}

export function SelectOptions({ options, isMulti }: SelectOptionsProps) {
  return (
    <>
      {options && options.length > 0 ? (
        options.map((option: SelectOptionProps, index: number) => {
          const optionAsGroup = option as SelectOptionGroupProps
          return optionAsGroup.title ? (
            <SelectOptionGroup
              key={index}
              {...optionAsGroup}
              isMulti={isMulti}
            />
          ) : isMulti ? (
            renderMultiOption(option as SelectOptionObject, index)
          ) : (
            renderOption(option as SelectOptionObject, index)
          )
        })
      ) : (
        <ListItem fontSize="small" px="medium" py="xxsmall">
          No options
        </ListItem>
      )}
    </>
  )
}
