export const state = () => ({});
export const actions = {
  async nuxtServerInit({ dispatch }, { $axios }) {
    return await $axios.$get("/posts.json").then(res => {
      const postArray = [];
      for (const key in res) {
        postArray.push({ ...res[key], id: key });
      }
      dispatch("posts/setPosts", postArray);
    });
    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     vuexContext.commit("posts/setPosts", [
    //       {
    //         id: 1,
    //         title: "First post",
    //         previewText: "This is my first post",
    //         thumbnailLink:
    //           "https://media-eng.dhakatribune.com/uploads/2019/08/bigstock-creating-software-and-website-295627450-1564745123094.jpg"
    //       },
    //       {
    //         id: 2,
    //         title: "Second post",
    //         previewText: "This is my second post",
    //         thumbnailLink:
    //           "https://media-eng.dhakatribune.com/uploads/2019/08/bigstock-creating-software-and-website-295627450-1564745123094.jpg"
    //       }
    //     ]);
    //     resolve();
    //   }, 2000);
    // });
  }
};

export const getters = {};
export const mutations = {};
