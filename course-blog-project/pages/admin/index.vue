<template>
  <div class="admin-page">
    <section class="new-post">
      <AppButton @click="$router.push('/admin/newpost')">Create Post</AppButton>
      <AppButton @click="logout">Logout</AppButton>
    </section>
    <section class="existing-posts">
      <h1>Existing Posts</h1>
      <PostList :is-admin="true" :posts="posts" />
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  middleware: "auth",
  layout: "admin",
  methods: {
    logout() {
      this.$store.dispatch("auth/logout");
      this.$router.replace("/admin/auth");
    }
  },
  computed: {
    ...mapGetters({
      posts: "posts/loadedPosts"
    })
  }
};
</script>

<style scoped>
.admin-page {
  padding: 20px;
}

.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.existing-posts h1 {
  text-align: center;
}
</style>
