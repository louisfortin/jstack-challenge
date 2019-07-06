export const actionGetProfile = () => {
  return {
    type: 'getProfile'
  };
};
export const actionGetProfileSuccess = payload => {
  return {
    type: 'getProfileSuccess',
    payload
  };
};
export const actionGetProfileFailure = error => {
  return {
    type: 'getProfileFailure',
    payload: error
  };
};
