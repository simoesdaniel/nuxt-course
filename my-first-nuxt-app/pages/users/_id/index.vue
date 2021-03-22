<template>
  <h1>This is the user with ID: {{ $route.params.id }}</h1>
</template>

<script>
export default {
  validate(data){
    return /^\d+$/.test(data.params.id);
  }
};
</script>

<style></style>
