<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news!</h1>
    </section>
    <PostList :posts="posts" />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  // fetch(context) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve({
  //         posts: [
  //           {
  //             id: 1,
  //             title: "First post",
  //             previewText: "This is my first post",
  //             thumbnailLink:
  //               "https://media-eng.dhakatribune.com/uploads/2019/08/bigstock-creating-software-and-website-295627450-1564745123094.jpg"
  //           },
  //           {
  //             id: 2,
  //             title: "Second post",
  //             previewText: "This is my second post",
  //             thumbnailLink:
  //               "https://media-eng.dhakatribune.com/uploads/2019/08/bigstock-creating-software-and-website-295627450-1564745123094.jpg"
  //           }
  //         ]
  //       });
  //     }, 2000);
  //   }).then(data => {
  //     context.store.commit("posts/setPosts", data.posts);
  //   });
  // },
  computed: {
    ...mapGetters({
      posts: "posts/loadedPosts"
    })
  }
};
</script>
<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url("@/assets/images/main-page-background.jpg");
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

a {
  text-decoration: none;
  color: black;
}
</style>
