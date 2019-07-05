import { profileService } from './profile.service';
import {
  GetProfile,
  GetProfileSuccess,
  GetProfileFail,
  GetRepositories,
  GetRepositoriesSuccess,
  GetRepositoriesFail
} from './profile.action';

export const getProfile = id => dispatch => {
  dispatch(GetProfile());
  profileService
    .getProfile(id)
    .then(rep => {
      if (rep.id) {
        dispatch(GetProfileSuccess(transformProfile(rep)));
        dispatch(getRepositories(id));
      } else {
        throw new Error('Profile not found');
      }
    })
    .catch(err => {
      dispatch(GetProfileFail(err));
      alert('get profil fail : ', err);
    });
};

const getRepositories = id => dispatch => {
  dispatch(GetRepositories());
  profileService
    .getRepos(id)
    .then(rep => {
      dispatch(GetRepositoriesSuccess(transformRepos(rep)));
    })
    .catch(err => {
      dispatch(GetRepositoriesFail(err));
    });
};

const transformProfile = profile => {
  return {
    id: profile.id,
    name: profile.name,
    login: profile.login,
    company: profile.company,
    location: profile.location,
    picture: profile.avatar_url
  };
};

const transformRepos = repos => {
  return repos.map(repo => {
    return {
      id: repo.id,
      name: repo.name,
      description: repo.description,
      url: repo.html_url,
      stars: repo.stargazers_count,
      watch: repo.watchers_count
    };
  });
};
