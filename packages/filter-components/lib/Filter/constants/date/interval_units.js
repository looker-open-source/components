import { useDateUnits, useFiscalDateUnits } from './date_units';
export const useFiscalIntervalUnits = () => {
  const dateUnits = useDateUnits();
  const fiscalDateUnits = useFiscalDateUnits();
  return [...dateUnits, ...fiscalDateUnits];
};
//# sourceMappingURL=interval_units.js.map