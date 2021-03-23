<template>
  <section class="post-list">
    <PostPreview
      id="1"
      :is-admin="isAdmin"
      thumbnail="https://media-eng.dhakatribune.com/uploads/2019/08/bigstock-creating-software-and-website-295627450-1564745123094.jpg"
      title="Post One"
      previewText="This is the first post i wrote about tech"
    />
    <PostPreview
      id="2"
      :is-admin="isAdmin"
      thumbnail="https://media-eng.dhakatribune.com/uploads/2019/08/bigstock-creating-software-and-website-295627450-1564745123094.jpg"
      title="Post Two"
      previewText="This is the second post i wrote about tech"
    />
    <PostPreview
      id="3"
      :is-admin="isAdmin"
      thumbnail="https://media-eng.dhakatribune.com/uploads/2019/08/bigstock-creating-software-and-website-295627450-1564745123094.jpg"
      title="Post Three"
      previewText="This is the third post i wrote about tech"
    />
  </section>
</template>

<script>
import PostPreview from "@/components/Posts/PostPreview";
export default {
  components: {
    PostPreview
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
