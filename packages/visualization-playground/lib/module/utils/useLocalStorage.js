
import { useEffect, useContext, useState, useCallback } from 'react';
import { AppContext } from '../AppContext';

export const useLocalStorage = (key, value) => {
  const {
    localStorageSetItem,
    localStorageGetItem
  } = useContext(AppContext);
  const [stateValue, setStateValue] = useState(value);
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
        console.error(error);
      }
    };
    getValue();
  }, [key, localStorageGetItem]);
  const setValue = useCallback(newValue => {
    if (localStorageSetItem) {
      localStorageSetItem(key, JSON.stringify(newValue));
    }
    setStateValue(newValue);
  }, [key, localStorageSetItem]);
  return [stateValue, setValue];
};
//# sourceMappingURL=useLocalStorage.js.map