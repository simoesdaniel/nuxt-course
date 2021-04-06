<template>
  <div class="admin-new-post">
    <section class="new-post-form">
      <PostForm @submit="onSubmitted" />
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
  methods: {
    async onSubmitted(postData) {
      await this.$store
        .dispatch("posts/addPost", postData)
        .then(() => this.$router.push("/admin"));
    }
  }
};
</script>

<style scoped></style>
