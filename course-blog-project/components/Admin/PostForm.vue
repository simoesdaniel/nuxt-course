<template>
  <section class="post-form">
    <form @submit.prevent="onSave">
      <AppControlInput v-model="editedPost.author">Author Name</AppControlInput>

      <AppControlInput v-model="editedPost.title">Title</AppControlInput>

      <AppControlInput v-model="editedPost.thumbnailLink"
        >Thumbnail Link</AppControlInput
      >
      <AppControlInput control-type="textarea" v-model="editedPost.previewText"
        >Preview Text</AppControlInput
      >
      <AppControlInput control-type="textarea" v-model="editedPost.content"
        >Content</AppControlInput
      >

      <AppButton type="submit">Save</AppButton>

      <AppButton
        type="button"
        style="margin-left: 10px"
        btn-style="cancel"
        @click="onCancel"
        >Cancel</AppButton
      >
    </form>
  </section>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      editedPost: this.post
        ? { ...this.post }
        : {
            author: "",
            title: "",
            thumbnailLink: "",
            content: ""
          }
    };
  },
  methods: {
    onSave() {
      this.$emit("submit", this.editedPost);
    },
    onCancel() {
      this.$router.push("/admin");
    }
  }
};
</script>

<style scoped>
.post-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .post-form {
    width: 500px;
  }
}
</style>
