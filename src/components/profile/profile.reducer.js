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
    case 'getProfile': {
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
        profile: action.payload.profile,
        pinnedRepositories: action.payload.pinned,
        repositories: action.payload.repos
      };

    case 'getProfileFail': {
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
