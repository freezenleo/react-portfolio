import React from 'react';
//set path to import the pdf file
import resume from '../../assets/file/clark-resume.pdf';
function Resume() {
    return (
        <section>
            <h1>
                <a href={resume} download="clark-resume">
                    A Copy of My Resume
                </a>
            </h1>
            <div>
                <h3>Full Stack Skills</h3>
                <p> Visual Studio Code, GIT, GIT Workflow, Heroku,
                    CLI, JQuery, MySQL, Flexbox, Node.js, Slack, Zoom,
                    HTML, CSS, JavaScript, Node.js, Bootstrap, OOP, TDD,
                    JQuery, DOM, Express.js, SQL, React, ES6, NPM, REST API,
                    IndexedDB, MongoDB, Handlebars</p>
            </div>
        </section>
    )
}

export default Resume;