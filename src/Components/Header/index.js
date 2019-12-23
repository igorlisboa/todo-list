import React from 'react';
import './header.css';

import { IoMdMenu } from "react-icons/io";

export default function Header(props) {

    return (
        <div className="header">
            <div className="titulo-header">
                <IoMdMenu size={66} />
                <div>{props.name}</div>
                <div></div>
            </div>
        </div>
    );
}