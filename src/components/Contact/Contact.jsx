import React from "react";
import s from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ contact: { name, number, id } }) => {
    const dispatch = useDispatch();

    const deleteUser = () => {
        dispatch(deleteContact(id));
    };
    return (
        <>
            <div className={s.inner}>
                <h3>{name}</h3>
                <a href={`tel:${number}`}>{number}</a>
            </div>
            <button className={s.button} type="button" onClick={deleteUser}>
                Delete
            </button>
        </>
    );
};

export default Contact;