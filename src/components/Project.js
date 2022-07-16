import React from 'react';

export default function Project({ title, description, deployedURL, repoURL, imageURL }) {
  return (
    <div className="card-container">
      <div className="card">
        <div className="info">
          <h1>{title}</h1>
          <p>{description}</p>
          <a href={repoURL} rel="noopener noreferrer" target="_blank">
            <button>GitHub</button>
          </a>
          <a href={deployedURL} rel="noopener noreferrer" target="_blank">
            <button>Heroku</button>
          </a>
        </div>
        <a
          className="anchor-past-project"
          target="_blank"
          rel="noopener noreferrer"
          href="https://dark-crawler.herokuapp.com">
          <img className="content-image" src={imageURL} alt="Kiddle game" />
        </a>
      </div>
    </div>
  );
}
