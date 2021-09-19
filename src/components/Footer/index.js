import React from 'react';
import { Linkedin, Github } from "react-bootstrap-icons";

function Footer() {
    return (
        <footer className="my-5">
            <a data-testid="linkedin" className="mx-2" href="https://bit.ly/3zlV3XT">
                <Linkedin color="white" size={96} />
            </a>
            <a data-testid="github" className="mx-2" href="https://github.com/freezenleo">
                <Github color="white" size={96} />
            </a>
        </footer>
    )
}

export default Footer;