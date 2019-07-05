const initialState = {
  profile: {
    name: 'John Doe',
    login: 'johndoex9',
    company: 'Awesome company',
    location: 'World',
    picture: 'https://pbs.twimg.com/profile_images/799995033/homer2ub5.jpg'
  },
  pinnedRepositories: [],
  repositories: [],
  loading: false,
  error: null
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'getProfile':
    case 'getPinnedRepositories':
    case 'getRepositories': {
      return {
        ...state,
        loading: true,
        error: null
      };
    }
    case 'getProfileSuccess':
      return {
        ...state,
        loading: false,
        profile: action.payload
      };
    case 'getPinnedRepositoriesSuccess':
      return {
        ...state,
        loading: false,
        pinnedRepositories: action.payload
      };
    case 'getRepositoriesSuccess':
      return {
        ...state,
        loading: false,
        repositories: action.payload
      };

    case 'getProfileFail':
    case 'getPinnedRepositoriesFail':
    case 'getRepositoriesFail': {
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    }
    default:
      return state;
  }
};

export default profileReducer;
