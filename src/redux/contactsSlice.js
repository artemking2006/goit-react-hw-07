import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsOps";
import { selectFiltersQuery } from "./filtersSlice";

const handlePending = (state) => {
    state.loading = true;
}

const handleRejected = (state, action) => {
    state.loading = false;
    state.error = action.payload;
};

const slice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.pending, handlePending)
            .addCase(fetchContacts.rejected, handleRejected)
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.items = action.payload;
            })
        
            .addCase(addContact.pending, handlePending)
            .addCase(addContact.rejected, handleRejected)
            .addCase(addContact.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.items.push(action.payload);
            })
        
            .addCase(deleteContact.pending, handlePending)
            .addCase(deleteContact.rejected, handleRejected)
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                const index = state.items.findIndex(
                    (contact) => contact.id === action.payload.id
                );
                state.items.splice(index, 1);
            });
    },
});

export default slice.reducer;

export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;
export const selectFilteredContacts = createSelector(
    [selectContacts, selectFiltersQuery],
    (contacts, filterValue) => {
        if (filterValue !== "") {
            return contacts.filter(
                (contact) =>
                    contact.name.toLowerCase().includes(filterValue.toLowerCase()) ||
                    contact.number.includes(filterValue)
            );
        }
        return contacts;
    }
);