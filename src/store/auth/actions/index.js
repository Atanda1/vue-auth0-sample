import login from './login'
import signup from './signup'
import auth0HandleAuthentication from './handleauth'
import logout from './logout'

const actions = {
    login,
    signup,
    logout,
    auth0HandleAuthentication
};

export default actions;