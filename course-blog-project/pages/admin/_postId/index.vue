<template>
  <div class="admin-new-post">
    <section class="edit-post-form">
      <PostForm :post="loadedPost" @submit="onSubmitted" />
    </section>
  </div>
</template>

<script>
import PostForm from "@/components/Admin/PostForm";
export default {
  middleware: "auth",
  layout: "admin",
  components: {
    PostForm
  },
  asyncData({ params, $axios }) {
    console.log(params, $axios);
    return $axios
      .$get("/posts/" + params.postId + ".json")
      .then(res => {
        return { loadedPost: { ...res, id: params.postId } };
      })
      .catch(e => context.error(e));
  },
  methods: {
    async onSubmitted(editedPost) {
      await this.$store
        .dispatch("posts/editPost", editedPost)
        .then(() => this.$router.push("/admin"));
    }
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
