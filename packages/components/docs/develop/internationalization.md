Looker Components uses [`i18next`](https://www.i18next.com/) to support Internationalization.
The `ComponentsProvider` initializes the `i18next` instance, or, if it is already initialized,
adds the strings used in components. To add more languages, or to override existing strings and
language default, use the `resources` and `language` props on `ComponentsProvider`.

```tsx
<ComponentsProvider
  resources={{ ...i18nResources, gd: { Chip: { Delete: 'Scrios' } } }}
  locale="gd"
>
  <Chip onDelete={() => alert('The delete button tooltip is in Gaelic!')}>
    sliseanna
  </Chip>
</ComponentsProvider>
```
