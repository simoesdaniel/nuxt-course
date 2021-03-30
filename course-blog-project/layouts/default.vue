<template>
  <div>
    <TheHeader @sidenavToggle="displaySideNav = !displaySideNav" />
    <TheSideNav :show="displaySideNav" @close="displaySideNav = false" />
    <Nuxt />
  </div>
</template>
<script>
import TheHeader from "@/components/Navigation/TheHeader";
import TheSideNav from "@/components/Navigation/TheSidenav";
export default {
  // middleware: "log",
  components: {
    TheHeader,
    TheSideNav
  },
  data() {
    return {
      displaySideNav: false
    };
  }
};
</script>
<style>
html {
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  word-spacing: 1px;
}
body {
  margin: 0;
}
</style>
