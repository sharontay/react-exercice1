import React from 'react';
import { Contact } from '../../models/contact.class';
import BComponent from '../pure/b-component';


const AComponent = () => {

    const defaultContact = new Contact('Sharon', 'Marín', 'sharon@mail.com', false)

    return (
        <div>
            <BComponent contact={defaultContact} />
        </div>
    );
};

export default AComponent;