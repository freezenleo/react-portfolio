import React from 'react';
import { BookmarkCheck } from "react-bootstrap-icons";

function Nav() {

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
                    <li className="mx-2">
                        About Me
                    </li>

                    <li className="mx-2">
                        Projects
                    </li>

                    <li className="mx-2">
                        <span >Contact</span>
                    </li>

                    <li className="mx-2">
                        <span >Resume</span>
                    </li>
                </ul>
            </nav>
        </div >
    );
}

export default Nav;