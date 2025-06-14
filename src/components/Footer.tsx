import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LaunchIcon from '@mui/icons-material/Launch';
import TwitterIcon from '@mui/icons-material/Twitter';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/jun-uen0" target="_blank" rel="noreferrer"><GitHubIcon /></a>
        <a href="https://www.linkedin.com/in/jun-uen0/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
        <a href="https://jun-uen0.web.app" target="_blank" rel="noreferrer"><LaunchIcon /></a>
        <a href="https://x.com/jun_uen0" target="_blank" rel="noreferrer"><TwitterIcon /></a>
      </div>
      <p>Template designed & built by <a href="https://github.com/yujisatojr/react-portfolio-template" target="_blank" rel="noreferrer">Yuji Sato</a></p>
    </footer>
  );
}

export default Footer;