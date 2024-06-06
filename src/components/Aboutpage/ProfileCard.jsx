import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const ProfileCard = () => {
  return (
    <div className="container">
      <div className="profile-card text-center">
        <div className="profile-img">
  
        </div>
        <h2 className="mt-3">Mash</h2>
        <p className="text-muted">Frontend Development</p>
        <p>Education: CSE, IIUC</p>
        <p>Goal: Become an excellent Frontend Developer</p>
        <div className="social-links mt-3">
          <a href="#" className="text-decoration-none"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href="#" className="text-decoration-none"><FontAwesomeIcon icon={faGithub} /></a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
