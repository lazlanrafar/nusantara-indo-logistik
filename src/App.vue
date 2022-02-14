<template>
  <div id="app">
    <Nav />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    Nav: () => import("@/components/App/Nav"),
  },
};
</script>

<style></style>
