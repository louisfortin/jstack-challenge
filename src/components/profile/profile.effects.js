import { profileService } from './profile.service';
import {
  actionGetProfile,
  actionGetProfileSuccess,
  actionGetProfileFailure
} from './profile.action';

export const getProfile = id => dispatch => {
  dispatch(actionGetProfile());
  profileService
    .getProfile(id)
    .then(rep => {
      if (!rep.errors) {
        dispatch(
          actionGetProfileSuccess({
            profile: transformProfile(rep.data.user),
            repos: transformRepos(rep.data.user.repositories.edges),
            pinned: transformRepos(rep.data.user.pinnedRepositories.edges)
          })
        );
      } else {
        throw new Error('Profile not found');
      }
    })
    .catch(err => {
      dispatch(actionGetProfileFailure(err));
      alert('get profil fail : ', err);
    });
};

const transformProfile = profile => {
  return {
    id: profile.id,
    name: profile.name,
    login: profile.login,
    company: profile.company,
    location: profile.location,
    picture: profile.avatarUrl
  };
};

const transformRepos = repos => {
  return repos.map(repo => {
    return {
      id: repo.node.id,
      name: repo.node.name,
      description: repo.node.description,
      url: repo.node.url,
      stars: repo.node.stargazers.totalCount,
      watchers: repo.node.watchers.totalCount
    };
  });
};
