import Vuex from "vuex";
import Vue from "vue";
import actions from "./auth/actions";
import getters from "./auth/getters";
import mutations from "./auth/mutations";
import auth0 from "auth0-js";
Vue.use(Vuex);

const state = () => ({
  userIsAuthorized: false,
  auth0: new auth0.WebAuth({
    domain: process.env.VUE_APP_AUTH0_CONFIG_DOMAIN,
    clientID: process.env.VUE_APP_AUTH0_CONFIG_CLIENTID,
    redirectUri: process.env.VUE_APP_DOMAINURL_REDIRECT,
    responseType: process.env.VUE_APP_AUTH0_CONFIG_RESPONSETYPE,
    scope: process.env.VUE_APP_AUTH0_CONFIG_SCOPE,
  }),
});

export default new Vuex.Store({
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
});
