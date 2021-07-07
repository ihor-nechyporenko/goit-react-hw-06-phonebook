import { createAction } from '@reduxjs/toolkit';
// import types from './types';

const addContact = createAction('contact/add');

// const addContact = data => ({
//   type: types.ADD,
//   payload: data,
// });

const deleteContact = createAction('contact/delete');

// const deleteContact = id => ({
//   type: types.DELETE,
//   payload: id,
// });

const changeFilter = createAction('contact/changeFilter');

// const changeFilter = value => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });

export default { addContact, deleteContact, changeFilter };
