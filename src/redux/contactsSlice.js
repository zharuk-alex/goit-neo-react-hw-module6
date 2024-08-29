import { createSlice } from "@reduxjs/toolkit";
import uniqid from "uniqid";
import initialContacts from "data/contacts.json";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: initialContacts,
  },
  reducers: {
    addContact: {
      prepare: (data) => {
        return {
          payload: {
            ...data,
            id: uniqid("contact"),
          },
        };
      },
      reducer: (state, { payload }) => {
        state.items.push(payload);
      },
    },
    deleteContact: (state, { payload }) => {
      state.items = state.items.filter(({ id }) => id !== payload);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;
