import React from 'react';
import './profile.css';

const Repository = param => {
  const repo = param.props;
  return (
    <div className='card'>
      <div className='card__side'>
        <div className='card__description'>{repo.name}</div>
        <div className='card__content'>
          <p>{repo.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Repository;
