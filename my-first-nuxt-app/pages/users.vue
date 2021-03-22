<template>
  <div>
    <input type="text" name="userId" v-model="userId" />
    <button @click="onLoadUser">
      Load User
    </button>
    <!-- this enables displaying subroute views in the parent route 
    (something similar to router view but specific for this specific page) -->
    <nuxt-child />
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: ""
    };
  },
  methods: {
    onLoadUser() {
      this.$router.push("/users/" + this.userId);
    }
  },
  // Nuxt will look for layouts defined with this name and
  // will only apply that layout for the page where is be called
  layout: "users"
};
</script>

<style></style>
