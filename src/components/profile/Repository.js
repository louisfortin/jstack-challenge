import React from 'react';
import './profile.css';

const Repository = param => {
  const repo = param.props;
  return (
    <div className='card'>
      <div className='card__side'>
        <div className='card__description'>{repo.name}</div>
        <div className='repo-attr'>
          <h3>
            {repo.stars} <span className='fa fa-star' />
          </h3>
          <h3>
            {repo.watchers} <span className='fa fa-eye' />
          </h3>
          <a href={repo.url} target='_blank' rel='noopener noreferrer'>
            <i className='fa fa-external-link' />
          </a>
        </div>
        <div className='card__content'>
          <p>{repo.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Repository;
