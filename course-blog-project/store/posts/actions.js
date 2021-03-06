export default {
  setPosts({ commit }, payload) {
    commit("setPosts", payload);
  },
  addPost({ commit }, payload) {
    const postData = { ...payload, updatedDate: new Date() };
    return this.$axios
      .$post("/posts.json", postData)
      .then(result => {
        commit("addPost", { ...postData, id: result.data.name });
      })
      .catch(e => console.log(e));
  },
  editPost({ commit, rootGetters }, payload) {
    const authToken = rootGetters["auth/getToken"];
    return this.$axios
      .$put("/posts/" + payload.id + ".json?auth=" + authToken, payload)
      .then(result => {
        commit("editPost", payload);
      })
      .catch(e => console.log(e));
  }
};
