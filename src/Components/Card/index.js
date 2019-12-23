import React from 'react';

import './styles.css';

export default function Card(props) {
    return (
        <div className="cards">
            <p className="title">{props.title}</p>
        </div>
    );
}
