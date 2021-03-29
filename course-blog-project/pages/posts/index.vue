<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      loadedPosts: "posts/loadedPosts"
    })
  }
  // this method of calling a callback of asyncdata is deprecated

  // data() {
  //   return {
  //     clientSidePosts: [
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
  //     ]
  //   };
  // }
};
</script>

<style scoped>
.posts-page {
  display: flex;
  justify-content: content;
  align-items: center;
}
</style>
