
import { Text } from '@looker/components';
import { fireEvent, screen } from '@testing-library/react';
import noop from 'lodash/noop';
import React from 'react';
import { renderWithTheme } from '@looker/test-utils';
import { Section } from './Section';
describe('Section tests', () => {
  it('should render a Section', async () => {
    const {
      container
    } = renderWithTheme(React.createElement(Section, {
      id: "1",
      title: React.createElement(Text, null, "Section Title"),
      isOpen: true,
      detail: "This is a detail",
      onClick: noop
    }));
    expect(container).toBeVisible();
    expect(await screen.findByText('Section Title')).toBeVisible();
    expect(await screen.findByText('This is a detail')).toBeVisible();
  });
  it('should open the section', () => {
    const onClick = jest.fn();
    renderWithTheme(React.createElement(Section, {
      id: "1",
      title: React.createElement(Text, null, "Section Title"),
      isOpen: false,
      detail: "This is a detail",
      onClick: onClick
    }, React.createElement(Text, null, "Inside of Section")));
    const section = screen.getByText('Section Title');
    fireEvent.click(section);
    expect(onClick).toHaveBeenCalledWith({
      isOpen: true,
      id: '1'
    });
  });
  it('should show the sections children if open', async () => {
    renderWithTheme(React.createElement(Section, {
      id: "1",
      title: React.createElement(Text, null, "Section Title"),
      isOpen: true,
      detail: "This is a detail",
      onClick: noop
    }, React.createElement(Text, null, "Inside of Section")));
    expect(await screen.findByText('Inside of Section')).toBeVisible();
  });
});
//# sourceMappingURL=Section.spec.js.map