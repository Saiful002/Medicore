import React from 'react';
import "./Card.css"

const Card = (props) => {
    const { img, name, text } = props.service
    return (
        <div>
            <div className="col">
                <div className="card">
                    <img src={img} className="card-img-top" height="300px" alt="..." />
                    <div className="card-body">
                        <h1 className="card-title">{name}</h1>
                        <p className="card-text">{text}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;