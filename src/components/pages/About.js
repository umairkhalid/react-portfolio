import React from 'react';
import umair from '../../assets/images/portfolio_pic.png';
import { AiFillHtml5 } from 'react-icons/ai';
import { IoLogoCss3, IoLogoJavascript, IoLogoNodejs } from 'react-icons/io';
import { FaReact, FaNpm } from 'react-icons/fa';
import { DiMongodb, DiJqueryLogo } from 'react-icons/di';
import { SiHandlebarsdotjs, SiGraphql, SiApollographql } from 'react-icons/si';
import Tooltip from '@mui/material/Tooltip';

export default function About() {
  return (
    <div>
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
              networks, troubleshooting and IT support as well as the sound experience in Mobile
              App, software and web front end development and design. A full list of technical
              skills are on my resume page.
            </p>
            <p>
              I previously completed an Internship as a UI/UX Designer with a young start-up, which
              has now been expanded globally. However, that opportunity gave me a glimpse into the
              endless possibilities in the existing tech industry. Currently, pursuing a coding
              bootcamp with Trilogy education to further strengthen my skills in Web development
              with various technologies and frameworks. This course also offers a more organised
              roadmap to become a confident developer/coder in widely used web development
              frameworks.
            </p>
          </div>
        </div>
      </div>
      <div style={{ marginBottom: '5%', marginLeft: '5%' }}>
        <h1 style={{ color: '#e76f51ff', fontWeight: 'bold', fontStyle: 'italic' }}>SKILLS</h1>
        <br></br>
        <br></br>
        <h2 style={{ color: '#083c52' }}>Programming Languages & Tools</h2>
        <br></br>
        <br></br>
        <Tooltip title="HTML">
          <i style={{ marginLeft: '2%' }}>
            <AiFillHtml5 size={50} />
          </i>
        </Tooltip>
        <Tooltip title="jQuery">
          <i style={{ marginLeft: '2%' }}>
            <DiJqueryLogo size={50} />
          </i>
        </Tooltip>
        <Tooltip title="MongoDB">
          <i style={{ marginLeft: '2%' }}>
            <DiMongodb size={50} />
          </i>
        </Tooltip>
        <Tooltip title="HandleBars">
          <i style={{ marginLeft: '2%' }}>
            <SiHandlebarsdotjs size={50} />
          </i>
        </Tooltip>
        <Tooltip title="React.js">
          <i style={{ marginLeft: '2%' }}>
            <FaReact size={50} />
          </i>
        </Tooltip>
        <Tooltip title="CSS">
          <i style={{ marginLeft: '2%' }}>
            <IoLogoCss3 size={50} />
          </i>
        </Tooltip>
        <Tooltip title="JavaScript">
          <i style={{ marginLeft: '2%' }}>
            <IoLogoJavascript size={50} />
          </i>
        </Tooltip>
        <Tooltip title="Node.js">
          <i style={{ marginLeft: '2%' }}>
            <IoLogoNodejs size={50} />
          </i>
        </Tooltip>
        <Tooltip title="Npm">
          <i style={{ marginLeft: '2%' }}>
            <FaNpm size={50} />
          </i>
        </Tooltip>
        <Tooltip title="GraphQL">
          <i style={{ marginLeft: '2%' }}>
            <SiGraphql size={50} />
          </i>
        </Tooltip>
        <Tooltip title="Apollo GraphQL">
          <i style={{ marginLeft: '2%' }}>
            <SiApollographql size={50} />
          </i>
        </Tooltip>
      </div>
      <div style={{ marginBottom: '8%' }} className="skills flex-wrap">
        <div className="container ">
          <div className="content-headings">
            <h2 className="headings"> Front end skills </h2>
          </div>
          <div className="p">
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>jQuery library</li>
              <li>Bootstrap CSS framework</li>
              <li>Skeleton CSS boilerplate</li>
              <li>Handlebars</li>
              <li>React</li>
            </ul>
          </div>
        </div>
        <div className="container">
          <div className="content-headings">
            <h2 className="headings"> Backend skills </h2>
          </div>
          <div className="p">
            <ul>
              <li>Node.js</li>
              <li>Express</li>
              <li>SQL databases, MySQL and the Sequelize ORM</li>
              <li>NoSQL databases such as MongoDB and the Mongoose ORM</li>
              <li>GraphQL</li>
              <li>Apollo</li>
              <li>Insomnia for API testing</li>
              <li>Heroku for deployment</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
