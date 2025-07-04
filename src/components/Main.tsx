import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LaunchIcon from '@mui/icons-material/Launch';
import TwitterIcon from '@mui/icons-material/Twitter';
import '../assets/styles/Main.scss';
import me from '../assets/images/me.png';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={me} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/jun-uen0" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/jun-uen0/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
            <a href="https://jun-uen0.web.app" target="_blank" rel="noreferrer"><LaunchIcon /></a>
            <a href="https://x.com/jun_uen0" target="_blank" rel="noreferrer"><TwitterIcon /></a>
          </div>
          <h1 className="text-gradient-blue">Jumpei Ueno</h1>
          <p>Site Reliability Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/jun-uen0" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/jun-uen0/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
            <a href="https://jun-uen0.web.app" target="_blank" rel="noreferrer"><LaunchIcon /></a>
            <a href="https://x.com/jun_uen0" target="_blank" rel="noreferrer"><TwitterIcon /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;