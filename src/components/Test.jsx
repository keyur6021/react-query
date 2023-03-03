import React, { useRef, useState } from 'react';

function Test() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const formRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("test", firstName, lastName);
    }
    const executeScroll = () => formRef.current.scrollIntoView();

    return (
        <React.Fragment>
            <button className='new-Button'>scroll button </button>
            <div className='main-parent'>
                <div ref={formRef} className='parent-Form'>
                    <form onSubmit={handleSubmit}>
                        <div className='main-form'>
                            <div className='field'>
                                <label>
                                    First Name:
                                </label>
                                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                            </div>
                            <div className='field'>
                                <label>
                                    Last Name:
                                </label>
                                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                            </div>
                            <div className='parent-btn'>

                                <button className='submit-btn' type="submit">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div>

            </div>
        </React.Fragment>
    );
}

export default Test;
