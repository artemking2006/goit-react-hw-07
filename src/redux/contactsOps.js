import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://6814d511225ff1af162a417f.mockapi.io/";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkApi) => {
        try {
            const response = await axios.get("/contacts");
            return response.data;
        } catch (e) {
            return thunkApi.rejectWithValue(e.message);
        }
    }
);

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (newContact, thunkApi) => {
        try {
            const response = await axios.post("/contacts", newContact);
            return response.data;
        } catch (e) {
            return thunkApi.rejectWithValue(e.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (contactId, thunkApi) => {
        try {
            const response = await axios.delete(`/contacts/${contactId}`);
            return response.data;
        } catch (e) {
            return thunkApi.rejectWithValue(e.message);
        }
    }
);