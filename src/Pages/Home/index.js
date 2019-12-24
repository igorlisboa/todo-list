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
        ])
    }, [])

    return (
        <>
            <Header name={"ToDo List"} />
            <div className="container">
                <div className="categorias">
                    {categorias?.map(e => (
                        <Card key={e.nome} title={e.nome} />
                    ))}
                </div>
                <Form />
            </div>
        </>
    );
}
