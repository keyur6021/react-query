import React, { useId } from 'react'

const NewHook = () => {

    const id = useId();
    console.log("--->  test123", id)
    return (
        <React.Fragment>
            <div>
                <label htmlFor={id + "fname"}> First Name</label>
                <div>
                    <input type={id + "text"} id='fname' />
                </div>
                <label htmlFor={id + "lname"}> Last Name</label>
                <div>
                    <input type={id + "text"} id='lname' />
                </div>
            </div>
        </React.Fragment>
    )
}

export default NewHook;