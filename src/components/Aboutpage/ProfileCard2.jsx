import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
const ProfileCard2 = ({data}) => {
  return (
    <div className="card profile" style={{ width: '20rem' }}>
      <img className="card-img-top" src={data.image} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{data.name}</h5>
        <p className="card-text">{data.goal}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{data.expertise}</li>
        <li className="list-group-item">{data.education}</li>
      </ul>
      <div className="card-body">
        
        <span className='text-lg'>
      <a href="#" className="text-decoration-none"><FontAwesomeIcon icon={faLinkedin} /></a>
      </span>
      <span className='text-lg'>
          <a href="#" className="text-decoration-none"><FontAwesomeIcon icon={faGithub} /></a>
          </span>
      </div>
    </div>
  );
};

export default ProfileCard2;
