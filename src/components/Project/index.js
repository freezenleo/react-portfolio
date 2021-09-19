import React, { useState } from 'react';
import Modal from '../Modal';

function Project() {
    const [projects] = useState([
        {
            name: 'Shake On It',
            description: `Shake On It. Bartering for the 21st century! Want a toaster? Paint my mailbox and it's yours.`,
            repoLink: 'https://github.com/freezenleo/shake-on-it-2',
            deployedLink: 'https://fast-earth-46141.herokuapp.com/'
        },
        {
            name: 'Developer Blog',
            description: 'Developer blog is one of the expert discussion blog for coding. Developers can discuss on the problem they have encouter during coding, or come up with some coding idea for people to discuss, or answering and questioning with other developers.',
            repoLink: 'https://github.com/freezenleo/developer-blog',
            deployedLink: 'https://powerful-anchorage-94267.herokuapp.com/'
        },
        {
            name: 'Photo Port',
            description: 'Here is a react app for a photographer to show off their works to clients to bring more clients to them.',
            repoLink: 'https://github.com/freezenleo/photo-port',
            deployedLink: 'https://freezenleo.github.io/photo-port/'
        },
        {
            name: 'Budget Tracker',
            description: 'Budget Tracker is a webpage to help people keep track of their daily money transactions. People always forget how much they spend each day or each month without worrying if they are in debt.',
            repoLink: 'https://github.com/freezenleo/budget-tracker',
            deployedLink: 'https://lit-eyrie-15547.herokuapp.com/'
        },
        {
            name: 'Note Taker',
            description: 'This is a web page that can help you to keep track of tasks you need to complete. Note Taker web allows the user to create new notes, and then save them. The user can delete it once tasks completed.',
            repoLink: 'https://github.com/freezenleo/note-taker-saver',
            deployedLink: 'https://stark-everglades-13657.herokuapp.com/'
        },
    ])

    //set state for current project for modal
    const [project, setProjects] = useState();

    //set state for modal open or close
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = (project, i) => {
        setProjects({ ...project, index: i });
        setIsModalOpen(!isModalOpen);
    }

    return (
        <div>
            <h3>Projects</h3>
            {isModalOpen &&
                <Modal project={project}
                    onClose={toggleModal}
                />}

            <div className="flex-row">
                {projects.map((project, i) => (
                    <img
                        src={require(`../../assets/large/${i}.png`).default}
                        alt={project.name}
                        className="img-thumbnail mx-1"
                        onClick={() => toggleModal(project, i)}
                        key={project.name}
                    />
                ))}
            </div>
        </div>
    )
}

export default Project;