import postActions from "./actions";
import postGetters from "./getters";
import postMutations from "./mutations";

export const state = () => ({
  loadedPosts: []
});

export const actions = postActions;
export const getters = postGetters;
export const mutations = postMutations;
