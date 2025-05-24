import React, { useEffect } from "react";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from '../SearchBox/SearchBox';
import ContactList from "../ContactList/ContactList";
import s from "./App.module.css";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/contactsOps";


const App = () => {
    const dispatch = useDispatch();
   
    
    useEffect(() => {
            dispatch(fetchContacts());
    }, [dispatch]);

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