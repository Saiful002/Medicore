import React from 'react';
import { Link } from 'react-router-dom';
import "./Card.css"

const Card = (props) => {
    const { img, name, text, id } = props.service
    return (
        <div>
            <div className="col">
                <div className="card">
                    <img src={img} className="card-img-top" height="300px" alt="..." />
                    <div className="card-body">
                        <h1 className="card-title">{name}</h1>
                        <p className="card-text">{text}</p>
                    </div>
                    <div className='d-flex justify-content-center mb-3'>
                        <Link to={`/treatment/${id}`}><button className='btn btn-primary'>Get Treatment</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;