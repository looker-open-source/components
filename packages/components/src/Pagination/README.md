# Pagination

The `<Pagination/>` component's primary use case is for handling navigation on a paginated item.

It displays the current page and the total number of pages, and includes four `<IconButton/>`s for traversal.

The callback passed into the `onChange` prop will be called whenever an `<IconButton/>` is clicked. Descriptions of how each `<IconButton/>` will call the `onChange` callback are listed below:

- **Double Left Arrow**: Will call `onChange(1)`
- **Single Left Arrow**: Will call `onChange(current - 1)`
- **Single Right Arrow**: Will call `onChange(current + 1)`
- **Double Right Arrow**: Will call `onChange(pages)`

```tsx
function Basic(props: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  return (
    <Pagination
      {...props}
      current={currentPage}
      pages={totalPages}
      onChange={setCurrentPage}
    />
  );
}
```

## Compose with a DataTable

One application of the `<Pagination/>` component is to paginate a data table, like a `<DataTable>`.
