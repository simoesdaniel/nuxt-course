<template>
  <div class="admin-page">
    <section class="new-post">
      <AppButton @click="$router.push('/admin/newpost')">Create Post</AppButton>
    </section>
    <section class="existing-posts">
      <h1>Existing Posts</h1>
      <PostList :is-admin="true" :posts="posts" />
    </section>
  </div>
</template>

<script>
import PostList from "@/components/Posts/PostList.vue";
import AppButton from "@/components/UI/AppButton";
import { mapGetters } from "vuex";
export default {
  layout: "admin",
  components: {
    PostList,
    AppButton
  },
  methods: {},
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
