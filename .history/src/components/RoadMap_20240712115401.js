import React, { useState } from 'react';

const Roadmap = () => {
    const [completedSteps, setCompletedSteps] = useState([]);

    const steps = [
        {
            id: 1,
            title: 'Create Foundational Board with 3 Members',
            description: 'Recruit three dedicated individuals to form the initial board of directors. These members will help shape the program strategy and provide governance.'
        },
        {
            id: 2,
            title: 'Invite Partners (Organizations & Businesses)',
            description: 'Reach out to potential partners, including local organizations and businesses, to collaborate on shared goals and initiatives.'
        },
        {
            id: 3,
            title: 'Form 501(c)(3)',
            description: 'Complete the necessary legal and administrative steps to register the nonprofit as a 501(c)(3) organization, securing tax-exempt status.'
        },
        {
            id: 4,
            title: 'Establish the First Initiative Program',
            description: 'Develop and launch the first program initiative focused on clean air and community gardening, incorporating home greenhouses and like-kind exchanges.'
        },
        {
            id: 5,
            title: 'Establish Partnership/Balanced Business Program with Current Partners',
            description: 'Develop a balanced business program with existing partners to ensure mutual benefits, sustainability, and community impact.'
        }
    ];

    const handleToggle = (id) => {
        alert(
            // input password
            prompt('Enter Password')
        );
        setCompletedSteps(prev =>
            prev.includes(id) ? prev.filter(stepId => stepId !== id) : [...prev, id]
        );
    };

    return (
        <div className="roadmap">
            <h1>Roadmap to Success</h1>
            <ul>
                {steps.map(step => (
                    <li key={step.id} className={completedSteps.includes(step.id) ? 'completed' : ''}>
                        <h2>{step.title}</h2>
                        <p>{step.description}</p>
                        <button onClick={() => handleToggle(step.id)}>
                            {completedSteps.includes(step.id) ? 'Mark as Incomplete' : 'Mark as Completed'}
                        </button>
                    </li>
                ))}
            </ul>
            <style jsx>{`
        .roadmap {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          font-family: Arial, sans-serif;
        }
        h1 {
          text-align: center;
          margin-bottom: 20px;
        }
        ul {
          list-style-type: none;
          padding: 0;
        }
        li {
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 15px;
          margin-bottom: 10px;
          background-color: #f9f9f9;
        }
        li.completed {
          background-color: #d4edda;
          border-color: #c3e6cb;
        }
        h2 {
          margin: 0 0 10px;
        }
        p {
          margin: 0 0 10px;
        }
        button {
          padding: 10px 15px;
          font-size: 16px;
          cursor: pointer;
        }
      `}</style>
        </div>
    );
};

export default Roadmap;
