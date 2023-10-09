/**
 * Copyright (c) 2023 Google LLC
 * SPDX-License-Identifier: MIT
 */
import { useEffect, useContext, useState, useCallback } from 'react';
import { AppContext } from '../AppContext';

/*
 * Get and Set localstorage value to the provided key.
 * If value argument is provided, set the value. If value argument is undefined,
 * read from localstorage.
 */
export const useLocalStorage = <T>(
  key: string,
  value?: T
): [T | undefined, (newValue?: T) => void] => {
  const { localStorageSetItem, localStorageGetItem } = useContext(AppContext);

  const [stateValue, setStateValue] = useState<T | undefined>(value);

  useEffect(() => {
    const getValue = async () => {
      try {
        if (localStorageGetItem) {
          const localStorageValue = await localStorageGetItem(key);
          if (localStorageValue) {
            setStateValue(JSON.parse(localStorageValue));
          }
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
    };

    getValue();
  }, [key, localStorageGetItem]);

  const setValue = useCallback(
    (newValue?: T) => {
      if (localStorageSetItem) {
        localStorageSetItem(key, JSON.stringify(newValue));
      }
      setStateValue(newValue);
    },
    [key, localStorageSetItem]
  );

  return [stateValue, setValue];
};
