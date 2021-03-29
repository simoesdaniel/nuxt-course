import axios from "axios";

export default {
  setPosts(vuexContext, payload) {
    vuexContext.commit("setPosts", payload);
  },
  addPost(vuexContext, payload) {
    const postData = { ...payload, updatedDate: new Date() };
    return axios
      .post(
        "https://nuxt-course-ed535-default-rtdb.firebaseio.com/posts.json",
        postData
      )
      .then(result => {
        vuexContext.commit("addPost", { ...postData, id: result.data.name });
      })
      .catch(e => console.log(e));
  },
  editPost(vuexContext, payload) {
    return axios
      .put(
        "https://nuxt-course-ed535-default-rtdb.firebaseio.com/posts/" +
          payload.id +
          ".json",
        payload
      )
      .then(result => {
        vuexContext.commit("editPost", payload);
      })
      .catch(e => console.log(e));
  }
};
