/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

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
import { useEffect, useContext, useState, useCallback } from 'react'
import { AppContext } from '../AppContext'

/*
 * Get and Set localstorage value to the provided key.
 * If value argument is provided, set the value. If value argument is undefined,
 * read from localstorage.
 */
export const useLocalStorage = <T>(
  key: string,
  value?: T
): [T | undefined, (newValue?: T) => void] => {
  const { localStorageSetItem, localStorageGetItem } = useContext(AppContext)

  const [stateValue, setStateValue] = useState<T | undefined>(value)

  useEffect(() => {
    const getValue = async () => {
      try {
        if (localStorageGetItem) {
          const localStorageValue = await localStorageGetItem(key)
          if (localStorageValue) {
            setStateValue(JSON.parse(localStorageValue))
          }
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error)
      }
    }

    getValue()
  }, [key, localStorageGetItem])

  const setValue = useCallback(
    (newValue?: T) => {
      if (localStorageSetItem) {
        localStorageSetItem(key, JSON.stringify(newValue))
      }
      setStateValue(newValue)
    },
    [key, localStorageSetItem]
  )

  return [stateValue, setValue]
}
