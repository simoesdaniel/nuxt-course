import Cookie from "js-cookie";
export default {
  authenticateUser({ commit, dispatch }, payload) {
    return this.$axios
      .$post(
        "https://identitytoolkit.googleapis.com/v1/accounts:" +
          payload.authAction +
          "?key=" +
          process.env.firebaseAPIKey,
        {
          email: payload.email,
          password: payload.password,
          returnSecureToken: true
        }
      )
      .then(res => {
        commit("authenticateUser", res.idToken);
        // dispatch("setLogoutTimer", res.expiresIn * 1000);
        localStorage.setItem(
          "auth",
          JSON.stringify({
            token: res.idToken,
            tokenExpiration: new Date().getTime() + +res.expiresIn * 1000
          })
        );
        Cookie.set("jwt", res.idToken);
        Cookie.set(
          "expirationDate",
          new Date().getTime() + +res.expiresIn * 1000
        );
        this.$axios.$post("http://localhost:3000/api/track-data", {
          data: "Authenticated"
        });
      })
      .catch(e => console.log(e));
  },
  initAuth({ commit, dispatch }, req) {
    let token = null;
    let expirationDate = null;
    if (req) {
      if (!req.headers.cookie) {
        return;
      } else {
        const jwtCookie = req.headers.cookie
          .split(";")
          .find(c => c.trim().startsWith("jwt="));
        if (!jwtCookie) {
          return;
        } else {
          // console.log(jwtCookie.split("=")[1]);
          token = jwtCookie.split("=")[1];
          expirationDate = req.headers.cookie
            .split(";")
            .find(c => c.trim().startsWith("expirationDate="))
            .split("=")[1];
        }
      }
    } else {
      const auth = JSON.parse(localStorage.getItem("auth"));
      token = auth.token;
      expirationDate = auth.tokenExpiration;
    }

    if (!token || +expirationDate < new Date().getTime()) {
      console.log("No token or invalid token");
      dispatch("logout");
      return;
    } else {
      // dispatch("setLogoutTimer", expirationDate - new Date().getTime());
      commit("authenticateUser", token);
    }
  },
  logout({ commit }) {
    commit("invalidateToken");
    Cookie.remove("jwt");
    Cookie.remove("expirationDate");
    // important to check if it is on the client side,
    // otherwise localStorage will fire an internal server error
    // because it only exists on the client
    if (process.client) {
      localStorage.removeItem("auth");
    }
  }
};
