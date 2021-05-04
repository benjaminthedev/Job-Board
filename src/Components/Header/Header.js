import React from 'react';
import Leftbuttons from './Leftbuttons';
import Logo from '../Logo/Logo';
import RightButtons from './RightButtons';
import './Header.css';

function Header() {
    return (
        <div className="top__header">
            <Leftbuttons />
            <Logo />
            <RightButtons />    
        </div>
    )
}

export default Header
