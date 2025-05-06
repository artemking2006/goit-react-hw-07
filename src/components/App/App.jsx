import React, { useEffect } from "react";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from '../SearchBox/SearchBox';
import ContactList from "../ContactList/ContactList";
import s from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contactsOps";
import { selectContacts } from "../../redux/contactsSlice";

const App = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);
    
    useEffect(() => {
        if (contacts.length === 0) dispatch(fetchContacts());
    }, [dispatch, contacts]);

    return (
        <ul className={s.list}>
            <li className={s.itemSide}>
                <h1 className={s.title}>Phonebook</h1>
                <ContactForm />
                <SearchBox />
            </li>
            <li className={s.itemCenter}>
                <ContactList />
            </li>
        </ul>
    );
};

export default App;