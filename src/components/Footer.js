//import react
import React from 'react';

//import fontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

//export Footer function
export default function Footer() {
  return (
    <footer>
      <div role="navigation" aria-label="Contact links">
        <div className="nav-link" id="contact-nav">
          <a
            href="https://github.com/umairkhalid"
            aria-label="Visit Christi's GitHub profile"
          >
            <FontAwesomeIcon
              icon={faGithubSquare}
              size="2xl"
              alt="gitHub icon"
              className="contact-icons"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/umair-kha/"
            aria-label="Visit Umair's LinkedIn profile."
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              alt="LinekedIn icon"
              size="2xl"
              className="contact-icons"
            />
          </a>

          <a
            href="mailto:umairkhalid@fastmail.fm"
            aria-label="Send Umair an e-mail"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              size="2xl"
              alt="Email icon"
              className="contact-icons"
            />
          </a>
        </div>
      </div>
      <p>Umair Khalid 2022 &copy; </p>
    </footer>
  );
}