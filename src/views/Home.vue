<template>
  <div class="home">
    <img id="logo" src="../assets/logogif.gif" />
    <h1>Ønskeseddel 📝</h1>
    <post-list></post-list>
  </div>
</template>

<script>
import PostList from "../components/PostList.vue";
// @ is an alias to /src

export default {
  name: "Home",
  components: { PostList }
};
</script>

<style>
#emilImg {
  max-width: 20%;
  border-radius: 100%;
}
</style>
