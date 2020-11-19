<template>
  <div class="grid-container">
    <article v-for="post in posts" :key="post.id">
      <img :src="post.image" />
      <h3>{{ post.description }}</h3>
     <p><b>Link:</b><a v-bind:href="post.link"> {{post.butik}}</a> </p>
      <router-link :to="{ name: 'Update', params: { post: post } }">
        <button>Update</button>
      </router-link>
      <button v-on:click="deletePost(post)">Delete</button>
    </article>
  </div>
</template>

<script>
import { postRef } from "../firebase-db";
export default {
  data() {
    return {
      posts: [],
    };
  },
  firestore: {
    posts: postRef,
  },
  methods: {
    deletePost(post) {
      postRef.doc(post.id).delete()
    }
  }
};
</script>

<style scoped>
/* ---------- Grid container ---------- */
.grid-container {
  display: grid;
  grid-template-columns: 100%;
  padding: 10px;
}
@media (min-width: 600px) {
  .grid-container {
    grid-template-columns: 50% 50%;
  }
}
@media (min-width: 992px) {
  .grid-container {
    grid-template-columns: 33.33% 33.33% 33.33%;
  }
}
.grid-container article {
  text-align: center;
  padding: 10px;
}
.grid-container img {
  max-width: 300px;
  width: 100%;
}
.grid-container h3 {
  font-weight: 200;
  margin: 0 0 1.5em;
}

.grid-container a {
  text-decoration: none;
  color: black;

}

button {

    background-color: #c6a9a9;;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 3%;
  cursor: pointer;

}

</style>