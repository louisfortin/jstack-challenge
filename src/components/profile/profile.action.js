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
export const actionGetProfileFail = error => {
  return {
    type: 'getProfileFail',
    payload: error
  };
};
