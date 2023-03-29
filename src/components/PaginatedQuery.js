import axios from 'axios'
import React, { useState } from 'react'
import { useQuery } from 'react-query'


const fetchColors = (pageNumber) => {
    return axios.get(`http://localhost:5000/colors?_limit=2&&_page=${pageNumber}`)
}

const PaginatedQuery = () => {

    const [pageNumber, setPageNumber] = useState(1);

    const { data: colors, isLoading, isError, error } = useQuery(["colors", pageNumber], () => fetchColors(pageNumber));

    if (isLoading) {
        return <div> Loddding.... </div>
    }
    if (isError) {
        return <div> {error.message} </div>
    }

    return (
        <React.Fragment>
            <div className='pagination-title'> This are the color-layer pagination by recat-query</div>
            {
                colors?.data.map((data) => {
                    return <div key={data.id} style={{ color: 'purple', fontWeight: 'bold' }}>
                        {data.id} .--- {data.label}
                    </div>
                })
            }
            <div style={{ padding: '15px' }}>
                <button className='btn btn-primary m-2'
                    onClick={() => setPageNumber((page) => page - 1)}
                    disabled={pageNumber === 0}
                > prev Page</button>
                <button className='btn btn-primary'
                    onClick={() => setPageNumber((page) => page + 1)}
                    disabled={pageNumber === 5}
                > Next Page</button>
            </div>
        </React.Fragment>
    )
}

export default PaginatedQuery