export const convertTypeToMatchesAdvancedOption = ({
  type
}) => type === 'day' || type === 'thisRange' || type === 'pastAgo' || type !== null && type !== void 0 && type.startsWith('before_') || type !== null && type !== void 0 && type.startsWith('after_') ? 'matchesAdvanced' : type;
//# sourceMappingURL=convert_type_to_matches_advanced_option.js.map