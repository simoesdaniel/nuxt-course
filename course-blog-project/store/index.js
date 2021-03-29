import axios from "axios";
export const state = () => ({});
export const actions = {
  async nuxtServerInit({ dispatch }) {
    return await axios
      .get("https://nuxt-course-ed535-default-rtdb.firebaseio.com/posts.json")
      .then(res => {
        const postArray = [];
        for (const key in res.data) {
          postArray.push({ ...res.data[key], id: key });
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
