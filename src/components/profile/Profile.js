import React from 'react';
import './profile.css';
import Repository from './Repository';

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

  const lorem =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut cursus purus dui, vitae sodales risus convallis in. Quisque sollicitudin nisi et nibh porta lobortis. Fusce placerat mollis dui, non egestas eros pharetra ut. Duis eget neque sit amet lectus tempor efficitur quis ut mi. Morbi ac eros ante. Duis porta ligula massa, nec molestie est consectetur et. Donec vitae odio enim. Curabitur eu sapien lorem. Phasellus blandit leo lobortis leo ultricies fermentum. Duis pulvinar tellus eros, in placerat orci sodales id. Vivamus eget lorem eget est rhoncus pellentesque. Vivamus nec arcu ut sem tincidunt elementum et vel purus. Ut sagittis imperdiet nisi, sed rhoncus neque lobortis at. Sed pharetra tincidunt nisi vitae bibendum. Donec quis ligula condimentum, facilisis ligula sit amet, finibus quam. Aenean sagittis venenatis velit, eu lobortis nisl accumsan nec. Donec lacinia ligula vel purus maximus tempus. Morbi pharetra tortor ac libero eleifend ornare. In imperdiet, est et tincidunt nullam.';

  const [values, setValues] = React.useState({
    githubId: 'Divinorumz'
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  React.useEffect(() => {
    console.log(props);
  }, [profile.login, repositories]);

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
      {/* Pinned repositories */}
      <h2>Pinned Repositories</h2>
      <div className='content'>
        <div className='cards'>
          <div className='card'>
            <div className='card__side card__side--front'>
              <div className='card__description'>First project</div>
            </div>
            <div
              className={
                'card__side card__side--back card__side--back-' + (1 % 3)
              }
            >
              <div className='card__content'>
                <p>{lorem}</p>
                <p>{lorem}</p>
              </div>
            </div>
          </div>
          <div className='card'>
            <div className='card__side card__side--front'>
              <div className='card__description'>Second project</div>
            </div>
            <div
              className={
                'card__side card__side--back card__side--back-' + (2 % 3)
              }
            >
              <div className='card__content'>
                <p>{lorem}</p>
                <p>{lorem}</p>
              </div>
            </div>
          </div>
          <div className='card'>
            <div className='card__side card__side--front'>
              <div className='card__description'>Third project</div>
            </div>
            <div
              className={
                'card__side card__side--back card__side--back-' + (3 % 3)
              }
            >
              <div className='card__content'>
                <p>{lorem}</p>
                <p>{lorem}</p>
              </div>
            </div>
          </div>
          <div className='card'>
            <div className='card__side card__side--front'>
              <div className='card__description'>Forth project</div>
            </div>
            <div
              className={
                'card__side card__side--back card__side--back-' + (4 % 3)
              }
            >
              <div className='card__content'>
                <p>{lorem}</p>
                <p>{lorem}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* repositories */}
      {!!repositories.length && (
        <div>
          <h2>Repositories</h2>
          <div className='content'>
            <div className='cards'>
              {props.repositories.map((repo, i) => (
                <Repository key={'repo' + i} props={repo} />
              ))}
            </div>
          </div>
        </div>
      )}
      {!repositories.length && <h2>No repositories found !</h2>}
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
