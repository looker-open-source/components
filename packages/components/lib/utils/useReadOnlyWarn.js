import { useEffect, useRef } from 'react';
export function useReadOnlyWarn(name, value, onChange) {
  const unintentionalReadOnly = useRef(false);
  useEffect(() => {
    if (value && !onChange) {
      console.error(`Warning: Failed prop type: You provided a \`value\` prop to <${name} /> without an \`onChange\` handler. This will render a read-only field. If the field should be mutable use \`defaultValue\` instead. Otherwise, please provide an \`onChange\` callback.`);
      unintentionalReadOnly.current = true;
    }
  }, [value, onChange, name]);
  return unintentionalReadOnly.current;
}
//# sourceMappingURL=useReadOnlyWarn.js.map