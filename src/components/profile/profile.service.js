const myHeaders = new Headers({
  Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`
});

export const profileService = {
  getProfile: async id => {
    const rep = await fetch(`https://api.github.com/graphql`, {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify({
        query: `
        query { 
          user(login: "${id}") {
            avatarUrl
            url
            company
            id
            login
            name
            location
            pinnedRepositories(first: 100) {
              edges {
                node {
                  id
                  name
                  url
                  description
                  stargazers(first: 100) {
                    totalCount
                  }
                  watchers(first: 100) {
                    totalCount
                  }
                }
              }
            }
            repositories(first: 100) {
              edges {
                node {
                  id
                  name
                  url
                  description
                  stargazers(first: 100) {
                    totalCount
                  }
                  watchers(first: 100) {
                    totalCount
                  }
                }
              }
            }
          }
        }`
      })
    });
    return rep.json();
  }
};
