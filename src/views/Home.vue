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
button {
    background-color: #c6a9a9;;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
   border-radius: 30px 30px ;
}
</style>
