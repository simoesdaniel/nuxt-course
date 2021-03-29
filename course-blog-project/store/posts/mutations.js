export default {
  setPosts(state, posts) {
    state.loadedPosts = posts;
  },
  addPost(state, post) {
    state.loadedPosts.push(post);
  },
  editPost(state, payload) {
    const postIndex = state.loadedPosts.findIndex(
      entry => entry.id === payload.id
    );

    state.loadedPosts[postIndex] = payload;
  }
};
