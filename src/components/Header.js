import React from 'react';
import Leftbuttons from './Leftbuttons';
import Logo from './Logo';
import RightButtons from './RightButtons';


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
