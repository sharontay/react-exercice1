import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';


const BComponent = ({ contact }) => {

    const [connected, setContact] = useState(contact.connected);

    const changeState = () => {
        setContact(!connected)
    }

    return (
        <div>
            <h1>{ contact.name } { contact.surname }</h1>
            <h2>{ contact.email }</h2>
            <p>Contacto { connected ? 'En Línea' : 'No Disponible'}</p>
            <button onClick={changeState}>Cambiar Estado</button>
        </div>
    );
};


BComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default BComponent;