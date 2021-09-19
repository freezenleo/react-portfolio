import React from 'react';

function Modal({ onClose, project }) {
    const { name, description, repoLink, deployedLink, index } = project;

    return (
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">{name}</h3>
                <img src={require(`../../assets/large/${index}.png`).default}
                    alt="project" />
                <p>
                    {description}
                </p>
                <a href={repoLink}>GitHub Repo</a>
                <a href={deployedLink}>Deployed Application</a>
                <button onClick={onClose} type="button">
                    Close this modal
                </button>
            </div>
        </div>
    );
}

export default Modal;