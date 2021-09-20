import React from 'react';
import Nav from '../Nav';

function Header(props) {
    const {
        nav = [],
        currentNav,
        setCurrentNav
    } = props;
    return (
        <header className="flex-row px-1">
            <Nav
                nav={nav}
                currentNav={currentNav}
                setCurrentNav={setCurrentNav}
            />
        </header>
    )
}

export default Header;