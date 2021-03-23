<template>
  <div class="admin-new-post">
    <section class="edit-post-form">
      <PostForm :post="loadedPost" />
    </section>
  </div>
</template>

<script>
import PostForm from "@/components/Admin/PostForm";

export default {
  layout: "admin",
  components: {
    PostForm
  },
  data() {
    return {
      loadedPost: {
        author: "Luis Simoes",
        title: "A great post",
        thumbnailLink:
          "https://media-eng.dhakatribune.com/uploads/2019/08/bigstock-creating-software-and-website-295627450-1564745123094.jpg",
        content: "Its been a while since you have seen such great content!"
      }
    };
  }
};
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
