import React from 'react';
import { renderWithTheme } from '@looker/components-test-utils';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '../Button';
import { Link } from '../Link';
import { InputText } from '../Form/Inputs/InputText';
import { Tree } from './Tree';
import { TreeCollection } from './TreeCollection';
import { TreeItem } from './TreeItem';
describe('TreeCollection', () => {
  const detail = {
    content: React.createElement(React.Fragment, null, React.createElement(Button, null, "Nested Button"), React.createElement(Link, {
      href: "https://google.com"
    }, "Nested Link"), React.createElement(InputText, null, "Nested InputText")),
    options: {
      accessory: true
    }
  };
  const treeCollection = React.createElement(TreeCollection, null, React.createElement(Tree, {
    defaultOpen: true,
    label: "Cheeses"
  }, React.createElement(TreeItem, {
    detail: detail
  }, "Cheddar"), React.createElement(TreeItem, null, "Gouda"), React.createElement(TreeItem, null, "Swiss")));
  test('renders children', () => {
    renderWithTheme(treeCollection);
    screen.getByText('Cheeses');
    screen.getByText('Cheddar');
    screen.getByText('Gouda');
    screen.getByText('Swiss');
  });
  describe('keyboard navigation', () => {
    test('starts focus at first item', () => {
      renderWithTheme(React.createElement(React.Fragment, null, React.createElement("button", null, "My Button"), treeCollection));
      const treeItems = screen.getAllByRole('treeitem');
      userEvent.click(screen.getByText('My Button'));
      expect(screen.getByText('My Button')).toHaveFocus();
      userEvent.tab();
      expect(treeItems[0]).toHaveFocus();
    });
    test('arrow up and down key presses move user from item to item', () => {
      renderWithTheme(React.createElement(React.Fragment, null, React.createElement("button", null, "My Button"), treeCollection));
      const treeItems = screen.getAllByRole('treeitem');
      const cheeses = treeItems[0];
      const cheddar = treeItems[1];
      const gouda = treeItems[2];
      const swiss = treeItems[3];
      userEvent.click(screen.getByText('My Button'));
      expect(screen.getByText('My Button')).toHaveFocus();
      userEvent.tab();
      expect(cheeses).toHaveFocus();
      userEvent.keyboard('{arrowdown}');
      expect(cheddar).toHaveFocus();
      userEvent.keyboard('{arrowdown}');
      expect(gouda).toHaveFocus();
      userEvent.keyboard('{arrowdown}');
      expect(swiss).toHaveFocus();
      userEvent.keyboard('{arrowup}');
      expect(gouda).toHaveFocus();
      userEvent.keyboard('{arrowup}');
      expect(cheddar).toHaveFocus();
      userEvent.keyboard('{arrowup}');
      expect(cheeses).toHaveFocus();
    });
    test('left and right arrow keys move user from accordion to buttons/links/inputs within accordion', () => {
      renderWithTheme(React.createElement(React.Fragment, null, React.createElement("button", null, "My Button"), React.createElement(TreeCollection, null, React.createElement(Tree, {
        defaultOpen: true,
        label: "Cheeses",
        detail: detail
      }, React.createElement(TreeItem, null, "Cheddar")))));
      const treeItems = screen.getAllByRole('treeitem');
      const cheeses = treeItems[0];
      const nestedButton = screen.getByText('Nested Button');
      const nestedLink = screen.getByText('Nested Link');
      userEvent.click(screen.getByText('My Button'));
      expect(screen.getByText('My Button')).toHaveFocus();
      userEvent.tab();
      expect(cheeses).toHaveFocus();
      userEvent.keyboard('{arrowright}');
      expect(nestedButton).toHaveFocus();
      userEvent.keyboard('{arrowright}');
      expect(nestedLink).toHaveFocus();
      userEvent.keyboard('{arrowright}');
      expect(screen.getByRole('textbox')).toHaveFocus();
      userEvent.keyboard('{arrowright}');
      expect(cheeses).toHaveFocus();
    });
    test('left and right arrow keys move user from item to buttons/links/inputs within item', () => {
      renderWithTheme(React.createElement(React.Fragment, null, React.createElement("button", null, "My Button"), treeCollection));
      const treeItems = screen.getAllByRole('treeitem');
      const cheeses = treeItems[0];
      const cheddar = treeItems[1];
      const nestedButton = screen.getByText('Nested Button');
      const nestedLink = screen.getByText('Nested Link');
      userEvent.click(screen.getByText('My Button'));
      expect(screen.getByText('My Button')).toHaveFocus();
      userEvent.tab();
      expect(cheeses).toHaveFocus();
      userEvent.keyboard('{arrowdown}');
      expect(cheddar).toHaveFocus();
      userEvent.keyboard('{arrowright}');
      expect(nestedButton).toHaveFocus();
      userEvent.keyboard('{arrowright}');
      expect(nestedLink).toHaveFocus();
      userEvent.keyboard('{arrowright}');
      expect(screen.getByRole('textbox')).toHaveFocus();
      userEvent.keyboard('{arrowright}');
      expect(cheddar).toHaveFocus();
    });
    test('pressing arrow down from a detail element moves user to next item', () => {
      renderWithTheme(React.createElement(React.Fragment, null, React.createElement("button", null, "My Button"), treeCollection));
      const treeItems = screen.getAllByRole('treeitem');
      const cheeses = treeItems[0];
      const cheddar = treeItems[1];
      const gouda = treeItems[2];
      const nestedButton = screen.getByText('Nested Button');
      userEvent.click(screen.getByText('My Button'));
      expect(screen.getByText('My Button')).toHaveFocus();
      userEvent.tab();
      expect(cheeses).toHaveFocus();
      userEvent.keyboard('{arrowdown}');
      expect(cheddar).toHaveFocus();
      userEvent.keyboard('{arrowright}');
      expect(nestedButton).toHaveFocus();
      userEvent.keyboard('{arrowdown}');
      expect(gouda).toHaveFocus();
    });
    test('pressing arrow down from a detail element with accessory enabled moves user to next item', () => {
      renderWithTheme(React.createElement(React.Fragment, null, React.createElement("button", null, "My Button"), React.createElement(TreeCollection, null, React.createElement(Tree, {
        defaultOpen: true,
        label: "Cheeses",
        detail: {
          content: React.createElement("button", null, "Accessory Button"),
          options: {
            accessory: true
          }
        }
      }, React.createElement(TreeItem, null, "Cheddar")))));
      const treeItems = screen.getAllByRole('treeitem');
      const cheeses = treeItems[0];
      const cheddar = treeItems[1];
      const accessoryButton = screen.getByText('Accessory Button');
      userEvent.click(screen.getByText('My Button'));
      expect(screen.getByText('My Button')).toHaveFocus();
      userEvent.tab();
      expect(cheeses).toHaveFocus();
      userEvent.keyboard('{arrowright}');
      expect(accessoryButton).toHaveFocus();
      userEvent.keyboard('{arrowdown}');
      expect(cheddar).toHaveFocus();
    });
    test('home button moves user to first treeitem element', () => {
      renderWithTheme(React.createElement(React.Fragment, null, React.createElement("button", null, "My Button"), treeCollection));
      const treeItems = screen.getAllByRole('treeitem');
      const cheeses = treeItems[0];
      const cheddar = treeItems[1];
      const swiss = treeItems[3];
      userEvent.click(screen.getByText('My Button'));
      expect(screen.getByText('My Button')).toHaveFocus();
      userEvent.tab();
      expect(cheeses).toHaveFocus();
      userEvent.keyboard('{arrowdown}');
      expect(cheddar).toHaveFocus();
      userEvent.keyboard('{arrowdown}');
      userEvent.keyboard('{arrowdown}');
      expect(swiss).toHaveFocus();
      userEvent.keyboard('{Home}');
      expect(cheeses).toHaveFocus();
    });
    test('end button moves user to last treeitem element', () => {
      renderWithTheme(React.createElement(React.Fragment, null, React.createElement("button", null, "My Button"), treeCollection));
      const treeItems = screen.getAllByRole('treeitem');
      const cheeses = treeItems[0];
      const swiss = treeItems[3];
      userEvent.click(screen.getByText('My Button'));
      expect(screen.getByText('My Button')).toHaveFocus();
      userEvent.tab();
      expect(cheeses).toHaveFocus();
      userEvent.keyboard('{End}');
      expect(swiss).toHaveFocus();
    });
  });
});
//# sourceMappingURL=TreeCollection.spec.js.map