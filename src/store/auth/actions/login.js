const login = ({state}) => {
    state.auth0.authorize()
   
}

export default login;