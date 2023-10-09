/*

 MIT License

 Copyright (c) 2023 Google LLC

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */

import type { ValidationMessageProps } from '@looker/components';
import type { IRequestAllUsers, IUser, IWriteUser } from '@looker/sdk';
import type { ITransportSettings } from '@looker/sdk-rtl';
import { useValidation } from '@de-formed/react-validations';
import { is, required } from '@de-formed/base';
import { Box, Button, FieldText, Spinner } from '@looker/components';
import { createFetchHooks, Store } from '@looker/redux';
import {
  all_users,
  user,
  update_user,
  delete_user,
  create_user,
} from '@looker/sdk';
import { rest } from 'msw';
import React, { useEffect } from 'react';

// @ts-ignore Aliased in webpack config.
import { funSdk40 as sdk } from 'src/legacy/fun_sdk_40';

const emptyUserValues: IUser = {
  first_name: '',
  last_name: '',
  email: '',
  display_name: '',
};

const eventNameValue = (event: any) => {
  return event.target
    ? { [event.target.name]: event.target.value }
    : { [event.currentTarget.name]: event.currentTarget.value };
};

const transformError = (message: string): ValidationMessageProps => {
  return message ? { type: 'error', message } : {};
};

const { useSlice: useCreateUser } = createFetchHooks<
  IUser,
  {
    body: Partial<IWriteUser>;
    fields?: string;
    options?: Partial<ITransportSettings>;
  }
>({
  fetch: params =>
    sdk.ok(create_user(sdk, params.body, params.fields, params.options)),
  initialState: {},
  name: create_user.name,
});

const { useSlice: useUser } = createFetchHooks<
  IUser,
  {
    request: { fields?: string; user_id: string };
    options?: Record<string, unknown>;
  }
>({
  fetch: params =>
    sdk.ok(
      user(sdk, params.request.user_id, params.request.fields, params.options)
    ),
  initialState: {},
  name: user.name,
});

const { useSlice: useAllUsers } = createFetchHooks<
  IUser[],
  { request: IRequestAllUsers; options?: Record<string, unknown> }
>({
  fetch: (params = { request: {} }) => {
    return sdk.ok(all_users(sdk, params.request, params.options));
  },
  initialState: [],
  name: all_users.name,
});

const { useSlice: useUpdateUser } = createFetchHooks<
  IUser,
  {
    id: string;
    body: Partial<IWriteUser>;
    fields?: string;
    options?: Partial<ITransportSettings>;
  }
>({
  fetch: params =>
    sdk.ok(
      update_user(sdk, params.id, params.body, params.fields, params.options)
    ),
  initialState: {},
  name: update_user.name,
});

const { useSlice: useDeleteUser } = createFetchHooks<
  string,
  { id: string; options?: Partial<ITransportSettings> }
>({
  fetch: params => sdk.ok(delete_user(sdk, params.id, params?.options)),
  initialState: '',
  name: delete_user.name,
});

const useUserValidation = () => {
  return useValidation<IUser>({
    first_name: [required('First Name is required')],
    last_name: [required('Last Name is required')],
    email: [required('Email is required')],
    display_name: [
      required('Display Name is required'),
      is('Bob Ross', 'Display Name must be Bob Ross.'),
    ],
  });
};

const UserRow = ({
  setEditUser,
  setOpenForm,
  userId,
}: {
  setEditUser: any;
  setOpenForm: any;
  userId: IUser['id'];
}) => {
  const [user, userActions] = useUser();
  const [state, actions] = useDeleteUser();

  useEffect(() => {
    if (userId) {
      userActions.fetch({
        request: { user_id: userId },
      });
    }
  }, [userId, state.data]);

  return (
    <Box display="flex" justifyContent="space-between">
      {user.error ?? (
        <>
          <p>{user.data.first_name}</p>
          <p>{user.data.last_name}</p>
          <p>{user.data.email}</p>
          <p>{user.data.display_name}</p>
          <Box>
            <Button
              ml="1rem"
              onClick={() => {
                setEditUser(user);
                setOpenForm(true);
              }}
            >
              Edit
            </Button>
            <Button
              ml="1rem"
              onClick={() => actions.fetch({ id: user.data.id ?? '' })}
            >
              {state.loading ? <Spinner /> : <span>Delete</span>}
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

const UserFormController = ({
  cancel,
  initialState,
  isCreate,
}: {
  cancel: any;
  initialState: IUser | undefined;
  isCreate: boolean;
}) => {
  // API hooks
  const [createState, createActions] = useCreateUser();
  const [updateState, updateActions] = useUpdateUser();

  // Form Values
  const [state, setState] = React.useState<IUser>(() =>
    isCreate ? emptyUserValues : { ...emptyUserValues, ...initialState }
  );

  // Validation State
  const [submitFailed, setSubmitFailed] = React.useState(false);
  const v = useUserValidation();

  const handleOnChange = (data: Partial<IUser>) =>
    setState(prev => ({ ...prev, ...data }));

  const handleSave = () => {
    if (createState.loading) return;
    if (v.validateAll(state)) {
      if (isCreate) {
        createActions.fetch({ body: state });
      } else {
        updateActions.fetch({ id: state.id ?? '', body: state });
      }
    } else {
      setSubmitFailed(true);
    }
  };

  return (
    <>
      <Box mt="1rem">
        {updateState.loading && (
          <Box p="1rem">
            <Spinner />
            <Box p="1rem">Updating User</Box>
          </Box>
        )}
        {createState.loading && (
          <Box p="1rem">
            <Spinner />
            <Box p="1rem">Saving User</Box>
          </Box>
        )}
        <h2>{isCreate ? 'Create User' : 'Edit User'}</h2>
        <UserForm
          data={state}
          onChange={handleOnChange}
          submitFailed={submitFailed}
        />
        {createState.error && (
          <Box padding="1rem" backgroundColor="pink">
            {createState.error}
          </Box>
        )}
        <Box mt="2rem" display="flex">
          <Button onClick={() => cancel()}>Cancel</Button>
          <Button onClick={() => handleSave()}>Save</Button>
        </Box>
      </Box>
    </>
  );
};

const UserForm = ({
  data,
  onChange,
  submitFailed,
}: {
  data: IUser;
  onChange: any;
  submitFailed: boolean;
}) => {
  const v = useUserValidation();
  const handleOnChange = (event: any) => onChange(eventNameValue(event));

  React.useEffect(() => {
    if (submitFailed) v.validateAll(data);
  }, [submitFailed]);

  return (
    <>
      <FieldText
        name="first_name"
        label="First Name"
        onBlur={v.validateOnBlur(data)}
        onChange={v.validateOnChange(handleOnChange, data)}
        required
        validationMessage={transformError(v.getError('first_name'))}
        value={data.first_name ?? ''}
      />
      <FieldText
        name="last_name"
        label="Last Name"
        onBlur={v.validateOnBlur(data)}
        onChange={v.validateOnChange(handleOnChange, data)}
        required
        validationMessage={transformError(v.getError('last_name'))}
        value={data.last_name ?? ''}
      />
      <FieldText
        name="email"
        label="Email"
        onBlur={v.validateOnBlur(data)}
        onChange={v.validateOnChange(handleOnChange, data)}
        required
        validationMessage={transformError(v.getError('email'))}
        value={data.email ?? ''}
      />
      <FieldText
        name="display_name"
        label="Display Name"
        onBlur={v.validateOnBlur(data)}
        onChange={v.validateOnChange(handleOnChange, data)}
        required
        validationMessage={transformError(v.getError('display_name'))}
        value={data.display_name ?? ''}
      />
    </>
  );
};

const UserCount = () => {
  const [state] = useAllUsers();
  return <>{state.loading ? '' : `(${state.data.length})`}</>;
};

const UserCrud = () => {
  const [createState] = useCreateUser();
  const [deleteState] = useDeleteUser();
  const [users, actions] = useAllUsers();
  const [openForm, setOpenForm] = React.useState(false);
  const [editUser, setEditUser] = React.useState<IUser | undefined>();
  const isCreate = !editUser;

  React.useEffect(() => {
    actions.fetch();
  }, []);

  return (
    <>
      <h1>
        Users <UserCount />
      </h1>
      {deleteState.error && (
        <Box padding="1rem" backgroundColor="pink">
          {deleteState.error}
        </Box>
      )}
      {createState.error && (
        <Box padding="1rem" backgroundColor="pink">
          {createState.error}
        </Box>
      )}
      <Box mb="1rem">
        <Button onClick={() => setOpenForm(true)}>Create New User</Button>
        <Button ml="1rem" onClick={() => actions.fetch()}>
          Reload Users
        </Button>
      </Box>
      {users.loading && <Spinner />}
      {!users.loading &&
        users.data?.map(user => (
          <UserRow
            key={user.id}
            setEditUser={setEditUser}
            setOpenForm={setOpenForm}
            userId={user.id}
          />
        ))}
      {openForm && (
        <UserFormController
          initialState={editUser}
          isCreate={isCreate}
          cancel={() => setOpenForm(false)}
        />
      )}
    </>
  );
};

export const Example = () => (
  <Store>
    <UserCrud />
  </Store>
);

export default {
  component: Example,
};

let mockUsers: IUser[] = [
  {
    id: '1',
    first_name: 'Bob',
    last_name: 'Ross',
    display_name: 'Bob Ross',
    email: 'bob@ross.com',
  },
  {
    id: '2',
    first_name: 'Robert',
    last_name: 'Rosserson',
    display_name: 'Robert Rosserson',
    email: 'bobert@rosserson.com',
  },
];

Example.parameters = {
  msw: {
    handlers: [
      rest.get('/api/internal/core/4.0/users', (_, response, context) => {
        return response(context.json(mockUsers));
      }),
      rest.get(
        '/api/internal/core/4.0/users/:id',
        (request, response, context) => {
          const foundUser = mockUsers.find(u => u.id === request.params.id);
          if (foundUser) {
            return response(context.json(foundUser));
          }
          throw new Error(
            `Could not find user with id of : ${request.params.id}`
          );
        }
      ),
      rest.delete(
        '/api/internal/core/4.0/users/:id',
        (request, response, context) => {
          const foundUser = mockUsers.find(u => u.id === request.params.id);
          if (foundUser) {
            mockUsers = mockUsers.filter(u => u.id !== foundUser.id);
            return response(context.json(foundUser));
          }
          throw new Error(
            `Could not find user with id of: ${request.params.id}`
          );
        }
      ),
    ],
  },
};
