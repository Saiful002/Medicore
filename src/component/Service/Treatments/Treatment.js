import React from 'react';
import { useParams } from 'react-router-dom';

const Treatment = () => {
    const { id } = useParams()
    return (
        <div>
            <h1>Welcome For treatment :) no {id}</h1>
        </div>
    );
};

export default Treatment;