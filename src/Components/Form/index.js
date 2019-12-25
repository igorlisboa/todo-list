import React from 'react';

import './style.css';

export default function Form(props) {
    return (
        <div className="form">

            <div className="adicionar">
                <div style={{ textAlign: 'center', fontSize: '4vh' }} className="titulo">
                    <p>ToDO</p>
                </div>
                <div className="opcoes opcao-1">
                    <p>titulo</p>
                    <p>categoria</p>
                </div>
                <div className="opcoes opcao-2">
                    <p>data</p>
                    <p>anexo</p>
                </div>
                <div className="opcoes opcao-3">
                    <p>descriçao</p>
                </div>
                <div className="areaBotao">
                    <button className="botao">salvar</button>
                </div>

            </div>
        </div>
    );
}
