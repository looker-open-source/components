import React from 'react';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import { renderWithTheme } from '@looker/components-test-utils';
import { mockSDK } from '@looker/visualizations-adapters';
import { DataProvider } from '@looker/components-data';
import { EmbedEditor } from './';
describe('EmbedEditor', () => {
  it('modifies chart type', async () => {
    const handleChange = jest.fn();
    const config = {
      type: 'bar'
    };
    renderWithTheme(React.createElement(DataProvider, {
      sdk: mockSDK
    }, React.createElement(EmbedEditor, {
      onConfigChange: handleChange,
      config: config,
      setHeight: jest.fn(),
      setWidth: jest.fn()
    })));
    fireEvent.click(screen.getByLabelText('Chart Type'));
    fireEvent.click(screen.getByText('table').closest('li'));
    await waitFor(() => {
      expect(handleChange).toHaveBeenLastCalledWith(expect.objectContaining({
        type: 'table'
      }));
    });
  });
  it('modifies stacking property when chart type is area', async () => {
    const handleChange = jest.fn();
    const config = {
      type: 'area',
      positioning: 'overlay'
    };
    renderWithTheme(React.createElement(DataProvider, {
      sdk: mockSDK
    }, React.createElement(EmbedEditor, {
      onConfigChange: handleChange,
      config: config,
      setHeight: jest.fn(),
      setWidth: jest.fn()
    })));
    fireEvent.click(screen.getByLabelText('Positioning'));
    fireEvent.click(screen.getByText('stacked').closest('li'));
    await waitFor(() => {
      expect(handleChange).toHaveBeenLastCalledWith(expect.objectContaining({
        positioning: 'stacked'
      }));
    });
    fireEvent.click(document);
  });
  it('toggles render_null_values when type is sparkline', async () => {
    const handleChange = jest.fn();
    const config = {
      type: 'sparkline'
    };
    renderWithTheme(React.createElement(DataProvider, {
      sdk: mockSDK
    }, React.createElement(EmbedEditor, {
      onConfigChange: handleChange,
      config: config,
      setHeight: jest.fn(),
      setWidth: jest.fn()
    })));
    fireEvent.click(screen.getByLabelText('Render Null Values'));
    await waitFor(() => {
      expect(handleChange).toHaveBeenLastCalledWith(expect.objectContaining({
        render_null_values: true
      }));
    });
  });
  it('sets value of width field in embed editor', async () => {
    const handleChange = jest.fn();
    const config = {
      type: 'bar'
    };
    const mockSetHeight = jest.fn();
    const mockSetWidth = jest.fn();
    renderWithTheme(React.createElement(DataProvider, {
      sdk: mockSDK
    }, React.createElement(EmbedEditor, {
      onConfigChange: handleChange,
      config: config,
      setHeight: mockSetHeight,
      setWidth: mockSetWidth
    })));
    fireEvent.change(screen.getByLabelText('Width'), {
      target: {
        value: '100'
      }
    });
    await waitFor(() => {
      expect(mockSetWidth).toHaveBeenCalledWith('100');
    });
  });
  it('sets value of height field in embed editor', async () => {
    const handleChange = jest.fn();
    const config = {
      type: 'bar'
    };
    const mockSetHeight = jest.fn();
    const mockSetWidth = jest.fn();
    renderWithTheme(React.createElement(DataProvider, {
      sdk: mockSDK
    }, React.createElement(EmbedEditor, {
      onConfigChange: handleChange,
      config: config,
      setHeight: mockSetHeight,
      setWidth: mockSetWidth
    })));
    fireEvent.change(screen.getByLabelText('Height'), {
      target: {
        value: '90'
      }
    });
    await waitFor(() => {
      expect(mockSetHeight).toHaveBeenCalledWith('90');
    });
  });
});
//# sourceMappingURL=EmbedEditor.spec.js.map