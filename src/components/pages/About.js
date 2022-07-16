import React from 'react';
import umair from '../../assets/images/portfolio_pic.png';

export default function About() {
  return (
    <div className="container">
      <div className="content-headings">
        <h2 className="headings">Hi there 👋, I am Umair!</h2>
      </div>
      <div className="about-card-container">
        <img src={umair} className="mypic" alt="Umair"></img>
        <div className="p">
          <p>
            IT Professional and skilled Full Stack Developer with strong motivational drive to
            succeed in Information Technology industry. With over two years of experience in
            networks, troubleshooting and IT support as well as the sound experience in Mobile App,
            software and web front end development and design. A full list of technical skills are
            on my resume page.
          </p>
          <p>
            I previously completed an Internship as a UI/UX Designer with a young start-up, which
            has now been expanded globally. However, that opportunity gave me a glimpse into the
            endless possibilities in the existing tech industry. Currently, pursuing a coding
            bootcamp with Trilogy education to further strengthen my skills in Web development with
            various technologies and frameworks. This course also offers a more organised roadmap to
            become a confident developer/coder in widely used web development frameworks.
          </p>
        </div>
      </div>
    </div>
  );
}
