const logout = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("id_token");
  localStorage.removeItem("expires_at");

  window.location.href =
    process.env.VUE_APP_AUTH0_CONFIG_DOMAINURL +
    "/v2/logout?returnTo=" +
    process.env.VUE_APP_DOMAINURL +
    "/&client_id=" +
    process.env.VUE_APP_AUTH0_CONFIG_CLIENTID;
};

export default logout;
