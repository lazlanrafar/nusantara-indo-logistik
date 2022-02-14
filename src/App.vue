<template>
  <div id="app">
    <Nav />

    <router-view />

    <Footer />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    Nav: () => import("@/components/App/Nav"),
    Footer: () => import("@/components/App/Footer"),
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");
* {
  font-family: "Inter", sans-serif;
}
</style>
