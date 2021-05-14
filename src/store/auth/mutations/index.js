const setUserIsAuthenticated = (state, replacement) => {
    state.userIsAuthorized = replacement;
}

const mutations = {
    setUserIsAuthenticated,
}

export default mutations;