import React from 'react';

import './style.css';

export default function Form(props) {
    return (
        <div className="adicionar">
            <form>
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
            </form>

        </div>
    );
}
