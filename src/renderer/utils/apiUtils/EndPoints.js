const defaults = {
  methods: {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    DELETE: "DELETE",
  },
  versions: {
    v1: {
      version: "/api",
    },
  },
};

const endPoints = {
  test: {
    method: "GET",
    ...defaults.versions.v1,
    uri: "/test",
    headerProps: {},
  },

  // auth endpoints
  me: {
    method: "GET",
    // ...defaults.versions.v1,
    uri: "/users/me",
    headerProps: {},
  },
  login: {
    method: "POST",
    // ...defaults.versions.v1,
    uri: "/auth/local",
    headerProps: {},
  },
  logout: {
    method: "DELETE",
    // ...defaults.versions.v1,
    uri: "/auth/logout",
    headerProps: {},
  },
  register: {
    method: "POST",
    // ...defaults.versions.v1,
    uri: "/auth/local/register",
    // headerProps: {},
  },
};

export default endPoints;
