# FilterCollection

`FilterCollection` provides context for a set of `DashboardFilter`s.
It can store a reference to your application's initialized Looker SDK instance,
used for fetching suggestions on applicable filters.
And it keeps track of the current filter values in case any of the filters are linked,
meaning the suggeestions of one are filtered by the current value of another.

```tsx
function Suggestions() {
  // From dashboard API
  const dashboardFilters = [
    {
      dimension: 'users.state',
      field: {
        suggestable: true,
        suggest_dimension: 'users.state',
        suggest_explore: 'users',
      },
      model: 'testmodel',
      name: 'State',
      title: 'State',
      type: 'field_filter',
      ui_config: { type: 'radio_buttons' },
    },
    {
      dimension: 'users.city',
      field: {
        suggestable: true,
        suggest_dimension: 'users.city',
        suggest_explore: 'users',
      },
      model: 'testmodel',
      name: 'City',
      title: 'City',
      type: 'field_filter',
      ui_config: { type: 'radio_buttons' },
      listens_to_filters: ['State'],
    },
  ];

  const states = ['Alaska', 'Hawaii'];
  const citiesAlaska = ['Anchorage', 'Juneau'];
  const citiesHawaii = ['Honolulu', 'Kona'];
  // Mock SDK instance for fetching suggested values
  const sdkMock = {
    ok: (value: any) => value,
    get: (uri: string, params: { [key: string]: any }) => {
      let suggestions: string[] = [];
      if (uri.includes('users.state')) {
        suggestions = states;
      } else {
        if (params.filters?.['users.state'] === 'Alaska') {
          suggestions = citiesAlaska;
        } else if (params.filters?.['users.state'] === 'Hawaii') {
          suggestions = citiesHawaii;
        } else {
          suggestions = [...citiesAlaska, ...citiesHawaii];
        }
      }
      return {
        suggestions,
      };
    },
  } as unknown as IAPIMethods;

  return (
    <FilterCollection sdk={sdkMock}>
      {dashboardFilters.map(filter => (
        <DashboardFilter
          filter={filter}
          key={filter.name}
          onChange={() => {
            // update filter state for your application
          }}
        />
      ))}
    </FilterCollection>
  );
}
```
