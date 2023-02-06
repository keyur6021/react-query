import React, { useState } from 'react'
import { useAddDeveloperData } from '../hooks/useDeveloper';

const Mutation = () => {

    const [name, setName] = useState('')
    const [position, setPosition] = useState('')


    const { mutate: newDeveloper } = useAddDeveloperData();

    const handleClickData = () => {
        console.log("test", { name, position })
        const newDeveloperData = { name, position }
        newDeveloper(newDeveloperData);
    }
    return (
        <React.Fragment>
            <div className='container'>
                <div style={{ padding: '10px' }}>
                    <input
                        name='name'
                        placeholder='name'
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div style={{ padding: '10px' }}>
                    <input
                        name='position'
                        placeholder='positions'
                        type='text'
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}
                    />
                </div>
                <button onClick={handleClickData} className='btn btn-info'>
                    Add New Data
                </button>
            </div>
        </React.Fragment >
    )
}

export default Mutation;