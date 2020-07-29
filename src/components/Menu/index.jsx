import React from 'react';
import Logo from '../../assets/img/MaouFlix.png'
import './Menu.css';
//import ButtonLink from '../Buttons';
import Button from '../Button';


function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
            <img className="Logo" src={Logo} alt='MaouFlix' />
            </a>

            <Button as='a' className="ButtonLink" href="/cadastro/video">
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;