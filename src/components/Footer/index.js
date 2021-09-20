import React from 'react';
//import font awesome icons library
import 'font-awesome/css/font-awesome.min.css';

function Footer() {
    return (
        <footer className="my-5">
            <a className="mx-2" href="https://bit.ly/3zlV3XT">

                <i className="fa fa-linkedin" style={{ fontSize: 100, color: 'white' }}></i>
            </a>
            <a className="mx-2" href="https://github.com/freezenleo">

                <i className="fa fa-github" style={{ fontSize: 100, color: 'white' }}></i>
            </a>
            <a className="mx-2" href="https://stackoverflow.com/users/15491548/clark-zhou?tab=profile">
                <i className="fa fa-stack-overflow" style={{ fontSize: 100, color: 'white' }}></i>
            </a>
        </footer>
    )
}

export default Footer;