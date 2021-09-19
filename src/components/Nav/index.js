import React, { useEffect } from 'react';
import { BookmarkCheck } from "react-bootstrap-icons";

function Nav(props) {
    const {
        nav = [],
        currentNav,
        setCurrentNav
    } = props;

    useEffect(() => {
        document.title = currentNav
    }, [currentNav])

    return (
        <div className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/">
                    <BookmarkCheck color="white" size={40} />
                    Jiaming Zhou (Clark)
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    {nav.map((navigation) => (
                        <li
                            className={`mx-2 ${currentNav === navigation && 'navActive'
                                }`}
                            key={navigation}
                        >
                            <span onClick={() => {
                                setCurrentNav(navigation)
                            }}>
                                {navigation}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </div >
    );
}

export default Nav;