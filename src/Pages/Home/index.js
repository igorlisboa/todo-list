import React from 'react';

import './styles.css';

import Header from '../../Components/Header';
import Card from '../../Components/Card';
import Form from '../../Components/Form';

export default function Home() {
    return (
        <>
            <Header name={"ToDo List"} />
            <div className="container">
                <div className="categorias">
                    <Card title={"Categoria A"} />
                    <Card title={"Categoria B"} />
                    <Card title={"Categoria C"} />
                </div>
                <div className="categorias">
                    <Card title={"Categoria A"} />
                    <Card title={"Categoria B"} />
                    <Card title={"Categoria C"} />
                </div>
                <Form />
            </div>
        </>
    );
}
