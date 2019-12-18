import React from 'react';
import './header.css';

export default function Header() {

    return (
        <div className="">
            <nav class="nav">
                <a class="nav-link active" href="#">Active</a>
                <a class="nav-link" href="#">Link</a>
                <a class="nav-link" href="#">Link</a>
                <a class="nav-link disabled" href="#">Disabled</a>
            </nav>
        </div>
    );
}