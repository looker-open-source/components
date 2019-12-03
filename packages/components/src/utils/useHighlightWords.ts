import { findAll } from 'highlight-words-core'
import { useMemo } from 'react'

export interface UseHighlightWordsProps {
  textToHighlight: string
  searchText?: string
}

export interface UseHighlightWordsResult {
  start: number
  end: number
  highlight: boolean
}

export function useHighlightWords({
  textToHighlight,
  searchText = '',
}: UseHighlightWordsProps): UseHighlightWordsResult[] {
  return useMemo(
    () =>
      findAll({
        searchWords: searchText.split(/\s+/),
        textToHighlight,
      }),
    [searchText, textToHighlight]
  )
}
