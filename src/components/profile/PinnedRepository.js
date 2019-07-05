import React from 'react';
import './profile.css';

const PinnedRepository = param => {
  const repo = param.props;
  return (
    <div className='card'>
      <div className='card__side card__side--front'>
        <div className='card__description'>{repo.name}</div>
        <div className='repo-attr'>
          <h3>
            {repo.stars} <span className='fa fa-star' />
          </h3>
          <h3>
            {repo.watchers} <span className='fa fa-eye' />
          </h3>
        </div>
      </div>
      <div
        className={
          'card__side card__side--back card__side--back-' + (param.index % 3)
        }
      >
        <div className='card__content'>
          <p>{repo.description}</p>
        </div>
      </div>
    </div>
  );
};

export default PinnedRepository;
