const myHeaders = new Headers({
  Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`
});
const param = {
  method: 'GET',
  headers: myHeaders
};

export const profileService = {
  getProfile: async id => {
    const rep = await fetch(`https://api.github.com/users/${id}`, param);
    return await rep.json();
  },
  getRepos: async id => {
    const rep = await fetch(`https://api.github.com/users/${id}/repos`, param);
    return await rep.json();
  }
};
