const isFiscalFieldType = type => type ? ['date_fiscal_year', 'date_fiscal_quarter'].indexOf(type) > -1 : false;

export const showFiscalUnits = field => field && (field.fiscal_month_offset !== 0 || isFiscalFieldType(field.type));
//# sourceMappingURL=show_fiscal_units.js.map