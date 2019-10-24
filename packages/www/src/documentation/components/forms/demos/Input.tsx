import React from 'react'
import { Divider, InputSearch } from 'looker-lens'

export interface InputSearchElementProps {
  value?: string
  hideControls?: boolean
}

const InputSearchElement: React.FC<InputSearchElementProps> = ({
  value = '',
  hideControls,
}) => {
  const [keywords, setKeywords] = React.useState(value)
  const onChange = (e: any) => {
    setKeywords(e.currentTarget.value)
  }

  const summary =
    keywords.length > 0 ? `You typed ${keywords.length} characters` : ''

  return (
    <InputSearch
      hideControls={hideControls}
      onChange={onChange}
      placeholder="Type your search"
      summary={summary}
      value={keywords}
    />
  )
}

export const ExampleInputSearch = () => (
  <>
    <InputSearchElement />
    <Divider my="medium" />
    <InputSearchElement value="test search 2" />
    <Divider my="medium" />
    <InputSearchElement value="test search 3" hideControls />
  </>
)
