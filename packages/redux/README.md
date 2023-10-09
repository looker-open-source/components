## @looker/redux

> Makes using Redux not so much like using Redux.

Redux requires significant boilerplate to adopt. Even with tools like `@reduxjs/toolkit`, there is still unnecessary boilerplate and using it in your components isn't any less cumbersome in practice. Furthermore, when you need to expose your data API to consumers, it exposes the fact that you're using Redux and that shouldn't be the case.

`@looker/redux` is designed to allow you to easily build your data layer with Redux and Redux Toolkit, but the resulting API that is exposed to components is just hooks, POJOs and functions. Consumers call a hook, and they get back a state object and actions that are just functions.

## Usage

```tsx
import { createSlice, createSliceHooks } from '@looker/redux';
import React from 'react';

interface State {
  count: number;
}

const initialState: State = {
  count: 0,
};

const slice = createSlice({
  // The name of the slice. Dot-notation creates nested state objects.
  // some.data = { some: { data: { count: 0 } } }
  name: 'some.data',

  // State is inferred as long as you cast your initial state.
  initialState,

  // Reducers create corresponding actions.
  reducers: {
    increment(state) {
      state.count++;
    },
  },
});

// This is all consumers of the data API need to know about.
export const { useSlice } = createSliceHooks({ slice });

export const MyComponent = () => {
  const [state, actions] = useSlice();
  return <button onClick={actions.increment}>Clicked: {state.count}</button>;
};
```

## API

### createFetchHooks(options)

> Like `createSliceHooks` but automates slice and saga creation around a single `fetch` function. It can be used for any `async` function, but is called `fetch` because a very common use case would be to call a REST API. It's like RTK query but much more streamlined.

```ts
import { createFetchHooks } from '@looker/redux';

export const { useSlice } = createFetchHooks({
  // The key used in the Redux store.
  name: 'my-fetch',

  // The fetch function used to return some data.
  fetch: () => fetch('/some/api'),

  // What the state will default to prior to calling the fetch function.
  initialState: [],
});
```

### createSliceHooks(options)

> Returns hooks that are automatically bound to your typed state, slices and sagas.

```ts
import { createSlice, createSliceHooks } from '@looker/redux';

export const { useSlice } = createSliceHooks({
  // Default: false. When set to true, it will remove any state and reducers
  // from the store, and cancel any sagas that have been registered.
  autoExpire: false,

  // The slice to create the hooks for. The reducers are automatically added
  // to the store when used for the first time. The slice's name is used as
  // the state key where it will be stored. Dot-notation will create nested
  // objects. For example, some.data will create { some: { data: {} }}.
  slice: createSlice({}),

  // The saga to register and run immediately. This is the main saga that
  // will register effects for all of the other sagas that perform
  // side-effects.
  saga: function* () {},
});
```

#### useSlice()

The `useSlice` hook returned from `createFetchHooks` and `createSliceHooks` will return a tuple of `[state, actions]` very similar to React's `useState` hook. Actions are automatically bound to the `dispatch` function for the store, so all you need to do is call them like functions and they will be dispatched accordingly.

### createStore(options)

> Creates a store that is enhanced to dynamically add reducers and sagas. It accepts all of the same options that `configureStore` from `@reduxjs/toolkit` accepts.

```ts
import { createStore } from '@looker/redux';

const store = createStore({
  // When you preload state, corresponding reducers are automatically created
  // so that Redux doesn't throw an error and you can retrieve the state if
  // necessary. When your reducers are dynamically added, they override the
  // initial reducers and will return any preloaded state that exists.
  preloadedState: {
    some: {
      data: {
        count: 1,
      },
    },
  },
});
```

### Store

> Ensures a store is provided to the descendant component tree.

The `Store` component does the following:

1. If a store is found, noop and render children.
2. If a store is not found, render a `<Provider />`, providing it a new store, and render children.

This is very useful for tests where you will always want a store for components that use Redux:

```tsx
import { Store } from '@looker/redux';
import { render } from '@testing-library/react';
import React from 'react';

const { useSlice } = createFetchHooks({
  name: 'test',
  fetch: Promise.resolve('test'),
  initialState: '',
});

const Component = () => {
  const [state, actions] = useSlice();
  useEffect(() => {
    actions.fetch();
  }, []);
  return <div>{state}</div>;
};

test('render', async () => {
  const r = render(
    <Store>
      <Component />
    </Store>
  );
  expect(await r.getByText('test')).toBeInTheDocument();
});
```

### useStore()

> Returns the nearest store from context.

This is essentially just an alias for `useStore` from `react-redux`. However, it will ensure the store that is provided was created using `createStore` from `@looker/redux` since it requires the store be enhanced with certain methods in order to be used.

## Testing

You [should](https://kentcdodds.com/blog/write-tests) be writing integration tests at your component level to get the most bang for your buck. However, it is still good to write unit tests. The next best thing is testing your reducers. Redux Toolkit makes this easy out of the box:

```ts
import { mySlice } from './mySlice';

// Using getInitialState has two purposes:
// 1. You use state as the first argument to the reducer.
// 2. It automatically infers the correct type.
const state = mySlice.getInitialState();

describe('mySlice', () => {
  // Testing the initial state isn't exactly necessary and is akin to snapshot
  // testing. However, changing initial state can unexpectedly change initial
  // UI state. Testing this can be useful for ensuring changes are intentional.
  // It also sets the state to make sure subsequent tests don't give false
  // positives (i.e. initial state is the same as the result of an action).
  it('initialState', () => {
    expect(state).toEqual({
      something: '',
    });
  });

  // Testing a reducer is done by calling the reducer function on the slice.
  // You pass it the state you got from getInitialState() and, because actions
  // are just functions, you call the action and the return value is the second
  // argument. The result is the new state, so you test to make sure it's what
  // you'd expect and that's it.
  it('setSomething', () => {
    expect(
      mySlice.reducer(state, mySlice.actions.setSomething('test'))
    ).toEqual({
      something: 'test',
    });
  });
});
```
