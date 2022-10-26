import { useContext, useEffect, useState } from 'react';
import { useControlWarn } from '@looker/components';
import { FilterContext } from '../FilterCollection';
export const useExpressionState = ({
  expression: propsExpression,
  filter,
  onChange
}) => {
  const {
    updateExpression
  } = useContext(FilterContext);
  const isControlled = useControlWarn({
    controllingProps: ['expression'],
    isControlledCheck: () => propsExpression !== undefined,
    name: 'DashboardFilter'
  });
  const [uncontrolledExpression, setExpression] = useState(propsExpression || filter.default_value || '');

  const handleChange = value => {
    setExpression(value.expression);
    onChange(value.expression);
  };

  const expression = isControlled ? propsExpression : uncontrolledExpression;
  useEffect(() => {
    updateExpression(filter, expression);
  }, [filter, expression, updateExpression]);
  return {
    expression,
    onChange: handleChange
  };
};
//# sourceMappingURL=use_expression_state.js.map