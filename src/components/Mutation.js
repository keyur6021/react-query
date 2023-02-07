import React, { useState } from 'react'
import { useAddDeveloperData } from '../hooks/useDeveloper';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Mutation = () => {

    const [name, setName] = useState('')
    const [position, setPosition] = useState('')

    //! use the props mutate for the POST,UPDATE and DELETE methods :
    const { mutate: newDeveloper } = useAddDeveloperData();

    const handleClickData = () => {
        const newDeveloperData = { name, position }
        newDeveloper(newDeveloperData);
    }

    return (
        <React.Fragment>
            <div className='parent-card'>
                {/* <div className='container'>
                    <div style={{ padding: '10px' }}>
                        <label> Name: </label>
                        <input
                            name='name'
                            placeholder='name'
                            type='text'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div style={{ padding: '10px' }}>
                        <label > Position: </label>
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
                </div> */}
                <Form>
                    <div className='container'>
                        <div className='title'> ADD DEVELOPER DETAILS </div>
                        <Form.Group className="mb-4 d-flex align-items-center" controlId="formBasicEmail">
                            <Form.Label className='name-header'> Name:</Form.Label>
                            <Form.Control type="text"
                                placeholder="Enter Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3 d-flex align-items-center" controlId="formBasicPassword">
                            <Form.Label className='position-header'> Positions: </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Position"
                                value={position}
                                onChange={(e) => setPosition(e.target.value)} />
                        </Form.Group>

                        <Button variant="primary" onClick={handleClickData} className='btn btn-light w-100 mt-3'>
                            Submit
                        </Button>
                    </div>
                </Form>
            </div>
        </React.Fragment >
    )
}

export default Mutation;