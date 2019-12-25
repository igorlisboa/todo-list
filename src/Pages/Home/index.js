import React, { useState, useEffect } from 'react';

import './styles.css';

import Header from '../../Components/Header';
import Card from '../../Components/Card';
import Form from '../../Components/Form';

export default function Home() {
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        setCategorias([
            {
                nome: 'Categoria A',
            },
            {
                nome: 'Categoria B'
            },
            {
                nome: 'Categoria C'
            },
            {
                nome: 'Categoria D',
            },
            {
                nome: 'Categoria E'
            },
            {
                nome: 'Categoria F'
            },
        ])
    }, [])

    return (
        <>
            <Header name={"ToDo List"} />
            <div className="container">
                {categorias?.map(e => (
                    <div className="categorias">
                        <Card className="card" key={e.nome} title={e.nome} />
                    </div>
                ))}
            </div>
            <Form />
        </>
    );
}
