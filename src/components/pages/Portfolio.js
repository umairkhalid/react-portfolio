import React from 'react';
import Project from '../Project';
import dark from '../../assets/images/dark-crawler.png';
import blog from '../../assets/images/tech-blog.png';
import movie from '../../assets/images/moovee.png';
import note from '../../assets/images/express-note.png';
import weather from '../../assets/images/weather.png';
import code from '../../assets/images/code_quiz.png';

function Work() {
  return (
    <div class="content-headings">
        <h2 class="headings">Work</h2>
        <p className="p">
          A curated selection of some of the projects I've worked on. A full
          collection of my work is available on GitHub. There, you can also
          find the links to the deployed applications.
        </p>
        <p className="p">
          Click on the title of the project to visit the deployed application
          and click on the gitHub icon to visit the repo.
        </p>
    </div>
  );
};

export default function Portfolio() {
  const projects = [
    {
      title: 'Dark Crawler',
      description: 'Dark Crawler is a full stack application that offers a fully functioning board game, with randomized encounters and rewards.',
      deployedURL: 'https://dark-crawler.herokuapp.com',
      repoURL: 'https://github.com/umairkhalid/dark-crawler',
      imageURL: dark
    },
    {
      title: 'TransBit-Tech-Blog-2022',
      description: 'This is a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.',
      deployedURL: 'https://secret-brook-70569.herokuapp.com/',
      repoURL: 'https://github.com/umairkhalid/TransBit-Tech-Blog-2022',
      imageURL: blog
    },
    {
      title: 'Movie Planner',
      description: 'MOOVEE - Movie database search utilizing OMDB and Google YouTube V3 APIs.',
      deployedURL: 'https://umairkhalid.github.io/movie-planner/',
      repoURL: 'https://github.com/umairkhalid/movie-planner',
      imageURL: movie
    },
    {
      title: 'Note Taker',
      description: 'Note taker application uses an Express.js back end and allow a user to save, retrieve and delete notes from a JSON file.',
      deployedURL: 'https://fast-ravine-08494.herokuapp.com/notes',
      repoURL: 'https://github.com/umairkhalid/express-note-taker',
      imageURL: note
    },
    {
      title: 'Weather Dashboard',
      description: 'Weather dashboard allows travellers to search a weather in a specific city before making travel arrangements.',
      deployedURL: 'https://umairkhalid.github.io/weather-dashboard/',
      repoURL: 'https://github.com/umairkhalid/weather-dashboard',
      imageURL: weather
    },
    {
      title: 'Code Quiz',
      description: 'An interactive, timed coding quiz with multiple-choice questions that stores a high score leaderboard in local storage.',
      deployedURL: 'https://umairkhalid.github.io/code-quiz/',
      repoURL: 'https://github.com/umairkhalid/code-quiz',
      imageURL: code
    },
  ];

  return (
    <div>
      <Work />
      {projects.map((p) => {
        return <Project key={p.title} title={p.title} description={p.description} deployedURL={p.deployedURL} repoURL={p.repoURL} imageURL={p.imageURL} />;
      })}
    </div>
  );
}