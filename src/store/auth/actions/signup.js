const signup = ({state}) => {
    state.auth0.authorize({
        screen_hint: "signup",
    }) 
}

export default signup;