import React from "react";
import AygaLogo from "../../assets/ayga-logo.png";
import './styles.css';

function Header() {
    return (
        <header className="Header">
            <img src={AygaLogo} className="logo"></img>
            <h3>Bem-vindo usuário</h3>
        </header>
    );
}

export default Header;