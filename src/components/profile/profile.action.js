export const GetProfile = () => {
  return {
    type: 'getProfile'
  };
};
export const GetProfileSuccess = profile => {
  return {
    type: 'getProfileSuccess',
    payload: profile
  };
};
export const GetProfileFail = error => {
  return {
    type: 'getProfileFail',
    payload: error
  };
};

export const GetRepositories = () => {
  return {
    type: 'getRepositories'
  };
};
export const GetRepositoriesSuccess = repositories => {
  return {
    type: 'getRepositoriesSuccess',
    payload: repositories
  };
};
export const GetRepositoriesFail = error => {
  return {
    type: 'getRepositoriesFail',
    payload: error
  };
};
