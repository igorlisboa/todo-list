import React from 'react';
import './header.css';

export default function Header() {

    return (
        <div className="header">
            <nav class="nav">
                <a class="nav-link active" href="#">Active</a>
                <a class="nav-link" href="#">Link</a>
                <a class="nav-link" href="#">Link</a>
                <a class="nav-link disabled" href="#">Disabled</a>

                    <h2 className="titulo-header">Todo List</h2>
            </nav>
        </div>
    );
}