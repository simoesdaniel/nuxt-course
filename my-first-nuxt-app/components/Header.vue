<template>
  <header>
    <ul>
      <li>
        <nuxt-link to="/">HOME</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/users">USERS</nuxt-link>
      </li>
    </ul>
  </header>
</template>
<style scoped>
header {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(81, 187, 81, 0.397);
  top: 0;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
}
a {
  color: #fff;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
}
a:hover{
    text-decoration: underline;
}
</style>
