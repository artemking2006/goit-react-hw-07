import React from "react";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { useSelector } from "react-redux";
import {
    selectError,
    selectFilteredContacts,
    selectLoading,
} from "../../redux/contactsSlice";

const ContactList = () => {
    const filteredContacts = useSelector(selectFilteredContacts);
    const isLoading = useSelector(selectLoading);
    const error = useSelector(selectError);
    return (
        <>
            {isLoading && !error && <b>Request in progress...</b>}
            <ul className={s.list}>
                {filteredContacts.map((contact) => (
                    <li className={s.item} key={contact.id}>
                        <Contact contact={contact} />
                    </li>
                ))}
            </ul>
        </>
    );
};

export default ContactList;