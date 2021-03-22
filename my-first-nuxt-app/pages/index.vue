<template>
  <div class="container">
    <button class="button--green" @click="toProducts">
      Show me products
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    toProducts() {
      this.$router.push("/products");
    }
  }
};
</script>

<style>
.btn {
  background-color: green;
  border: none;
  border-radius: 1rem;
  color: #fff;
  padding: 1.5rem;
  font-weight: 500;
  cursor: pointer;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
