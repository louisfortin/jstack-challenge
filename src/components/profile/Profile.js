import React from 'react';
import './profile.css';
import Repository from './Repository';
import PinnedRepository from './PinnedRepository';

import { getProfile } from './profile.effects';

import { connect } from 'react-redux';

const Profile = props => {
  const {
    getProfile,
    profile,
    pinnedRepositories,
    repositories,
    loading
  } = props;

  const [values, setValues] = React.useState({
    githubId: 'Divinorumz'
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const fetchProfile = () => {
    getProfile(values.githubId);
  };

  return (
    <div>
      <link
        rel='stylesheet'
        href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
      />
      {/* Seach */}
      <div className='search'>
        <input
          className='search--input'
          type='text'
          name='user'
          onChange={handleChange('githubId')}
          value={values.githubId}
        />
        <button className='button' onClick={fetchProfile}>
          Search profile
        </button>
      </div>
      {/* Loader */}
      {!!loading && (
        <div className='search'>
          <div className='loader' />
        </div>
      )}
      {/* Profile */}
      <div className='profile-card'>
        <img src={profile.picture} alt='profile' className='img' />
        <div className='mb5 profile-items'>
          {profile.name && (
            <h1 className='mb5 fa fa-id-card'>{profile.name}</h1>
          )}
          {profile.login && (
            <p className='mb5 title fa fa-id-badge'>{profile.login}</p>
          )}
          {profile.company && (
            <p className='mb5 fa fa-briefcase'>{profile.company}</p>
          )}
          {profile.location && (
            <p className='mb5 fa fa-street-view'>{profile.location}</p>
          )}
          {profile.login && (
            <a href={'https://github.com/' + profile.login} target='_blank'>
              <i className='mb5 fa fa-github' />
            </a>
          )}
        </div>
      </div>
      {/* Pinned Repositories */}
      {!!pinnedRepositories.length && (
        <div>
          <h2>Pinned Repositories</h2>
          <div className='content'>
            <div className='cards'>
              {pinnedRepositories.map((repo, i) => (
                <PinnedRepository key={'repo' + i} index={i} props={repo} />
              ))}
            </div>
          </div>
        </div>
      )}
      {!pinnedRepositories.length && <h2>No pinned repository found !</h2>}
      {/* repositories */}
      {!!repositories.length && (
        <div>
          <h2>Repositories</h2>
          <div className='content'>
            <div className='cards'>
              {repositories.map((repo, i) => (
                <Repository key={'repo' + i} props={repo} />
              ))}
            </div>
          </div>
        </div>
      )}
      {!repositories.length && <h2>No repository found !</h2>}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    profile: state.profile,
    pinnedRepositories: state.pinnedRepositories,
    repositories: state.repositories,
    loading: state.loading,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProfile: id => dispatch(getProfile(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
