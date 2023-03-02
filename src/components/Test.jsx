import React, { useState } from 'react';

function Test() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("test", firstName, lastName);
    }

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </label>
                <label>
                    Last Name:
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </React.Fragment>
    );
}

export default Test;
