import { describeIsItem } from '../summary/describe_is_item';
export const describeUserAttribute = ({
  attributeValue
}) => attributeValue ? describeIsItem(true, attributeValue) : '';
//# sourceMappingURL=describe_user_attribute.js.map