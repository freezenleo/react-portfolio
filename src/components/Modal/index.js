import React from 'react';

function Modal({ onClose, project }) {
    const { name, description, repoLink, deployedLink, index } = project;

    return (
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h2 className="modalTitle">{name}</h2>
                <img src={require(`../../assets/large/${index}.png`).default}
                    alt="project" />
                <p>
                    {description}
                </p>
                <ul className="siteLink">
                    <li>
                        <a href={repoLink}>GitHub Repo</a>
                    </li>
                    <li>
                        <a href={deployedLink}>Deployed Application</a>
                    </li>
                </ul>
                <button onClick={onClose} type="button">
                    Close this modal
                </button>
            </div>
        </div>
    );
}

export default Modal;