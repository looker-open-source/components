

import '@testing-library/jest-dom/extend-expect';
import { fireEvent, screen, waitFor, waitForElementToBeRemoved, within } from '@testing-library/react';
import 'jest-styled-components';
import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import CloseIconButton from '../Dialog/stories/CloseIconButton';
import OverlayOpenDialog from '../Popover/stories/OverlayOpenDialog';
describe('useGlobalHotkeys', () => {
  test('intersecting elements', async () => {
    renderWithTheme(React.createElement(CloseIconButton, null));
    fireEvent.click(screen.getByText('Open Dialog'));
    const dialog = screen.getByRole('dialog');
    expect(dialog).toBeVisible();

    await waitFor(() => {
      expect(dialog).not.toHaveAttribute('aria-busy');
    });
    fireEvent.mouseOver(within(dialog).getByRole('button'));
    const tooltip = await screen.findByRole('tooltip');
    const tooltipSurface = tooltip.closest('div');

    const spy = jest.spyOn(document, 'elementsFromPoint').mockReturnValue([tooltipSurface, dialog]);

    fireEvent.keyDown(document, {
      key: 'Escape'
    });
    expect(screen.getByRole('dialog')).toBeVisible();
    await waitFor(() => {
      expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
    });

    fireEvent.keyDown(document, {
      key: 'Escape'
    });
    await waitForElementToBeRemoved(() => screen.queryByRole('dialog'));
    spy.mockRestore();
  });
  test('non-intersecting elements', async () => {
    renderWithTheme(React.createElement(OverlayOpenDialog, null));
    const popoverButton = screen.getByText('Open Popover');
    fireEvent.click(popoverButton);
    const dialogButton = within(screen.getByRole('dialog')).getByText('Open Dialog');
    fireEvent.click(dialogButton);
    const dialogs = screen.getAllByRole('dialog');
    expect(dialogs).toHaveLength(2);

    await waitFor(() => {
      expect(screen.getByRole('textbox')).toHaveFocus();
    });

    const dialogRect = {
      bottom: 506,
      height: 466,
      left: 429,
      right: 1069,
      toJSON: jest.fn(),
      top: 40,
      width: 640,
      x: 429,
      y: 40
    };
    const popoverRect = {
      bottom: 528,
      height: 388,
      left: 227.5,
      right: 408.6171875,
      toJSON: jest.fn(),
      top: 140,
      width: 181.1171875,
      x: 227.5,
      y: 140
    };
    const rectSpy = jest.spyOn(Element.prototype, 'getBoundingClientRect').mockReturnValueOnce(dialogRect).mockReturnValueOnce(popoverRect).mockReturnValueOnce(popoverRect).mockReturnValueOnce(dialogRect);
    fireEvent.keyDown(document, {
      key: 'Escape'
    });
    rectSpy.mockRestore();
    await waitForElementToBeRemoved(() => screen.queryByText('Toggle Scroll Lock'));
    expect(screen.getByRole('dialog')).toBeVisible();
    fireEvent.click(document);
  });
});
//# sourceMappingURL=useGlobalHotkeys.spec.js.map