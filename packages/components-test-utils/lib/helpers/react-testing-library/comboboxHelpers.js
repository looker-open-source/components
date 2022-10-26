import { fireEvent, getNodeText, screen } from '@testing-library/react';
export const openCombobox = placeholderText => fireEvent.mouseDown(screen.getByPlaceholderText(placeholderText));
export const closeCombobox = () => fireEvent.click(document);
export const getComboboxOptions = () => screen.getAllByRole('option');
export const getComboboxOptionText = el => getNodeText(el.children[1]);
export const getAllComboboxOptionText = () => getComboboxOptions().map(getComboboxOptionText);
//# sourceMappingURL=comboboxHelpers.js.map