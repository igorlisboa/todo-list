import React from 'react';

import './styles.css';

import Header from '../../Components/Header';
import Card from '../../Components/Card';

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
                <div className="adicionar">
                    <div style={{ textAlign: 'center', fontSize: '4vh' }}>
                        <p>ToDO</p>
                    </div>
                    <div>
                        <div className="opcoes">
                            <p>titulo</p>
                            <p>categoria</p>
                        </div>
                        <div className="opcoes">
                            <p>data</p>
                            <p>anexo</p>
                        </div>
                        <div className="opcoes">
                            <p>descriçao</p>
                        </div>
                    </div>
                    <div className="areaBotao">
                        <button className="botao">salvar</button>
                    </div>
                </div>
            </div>
        </>
    );
}
