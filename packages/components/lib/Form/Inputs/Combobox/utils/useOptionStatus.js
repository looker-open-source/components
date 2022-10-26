import { useContext } from 'react';
export function useOptionStatus(context, value) {
  const {
    data
  } = useContext(context);
  const {
    navigationOption
  } = data;
  const isActive = navigationOption ? navigationOption.value === value : false;
  const contextOption = data.option;
  const contextOptions = data.options;
  const options = contextOption ? [contextOption] : contextOptions || [];
  const isSelected = options.find(option => option.value === value) !== undefined;
  return {
    isActive,
    isSelected
  };
}
//# sourceMappingURL=useOptionStatus.js.map