import React from 'react';
import Logo from '../../assets/img/MaouFlix.png'
import './Menu.css';
//import ButtonLink from '../Buttons';
import Button from '../Button';
import { Link } from 'react-router-dom';


function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
            <img className="Logo" src={Logo} alt='MaouFlix' />
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;