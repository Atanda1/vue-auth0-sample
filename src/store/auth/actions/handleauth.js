import router from '../../../router/index'
//import Store from "../../../store/index";

// function auth(context, callback) {
//   context.state.auth0.parseHash((err, authResult) => {
//     if (authResult && authResult.accessToken && authResult.idToken) {
//       let expiresAt = JSON.stringify(
//         authResult.expiresIn * 1000 + new Date().getTime()
//       );
//       // save the tokens locally
//       localStorage.setItem("access_token", authResult.accessToken);
//       localStorage.setItem("id_token", authResult.idToken);
//       localStorage.setItem("expires_at", expiresAt);
//     }
//     callback()
//   })
// }

const auth0HandleAuthentication = (context, callback) => {
  context.state.auth0.parseHash((err, authResult) => {
    if (authResult && authResult.accessToken && authResult.idToken) {
      let expiresAt = JSON.stringify(
        authResult.expiresIn * 1000 + new Date().getTime()
      );
      // save the tokens locally
      localStorage.setItem("access_token", authResult.accessToken);
      localStorage.setItem("id_token", authResult.idToken);
      localStorage.setItem("expires_at", expiresAt);
      router.push('./dashboard')
    }
    callback()
  })
};

export default auth0HandleAuthentication;
