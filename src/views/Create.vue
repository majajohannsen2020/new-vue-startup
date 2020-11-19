<template>
  <div class="create">
    <h1>Opret et ønske 🎁
    </h1>
    <form>
      <input
        type="text"
        v-model="post.description"
        placeholder="Produktets navn.."
        required
      />
      <input
        type="text"
        v-model="post.link"
        placeholder="Skriv link til ønske.."
        required
      />
      <input
        type="text"
        v-model="post.butik"
        placeholder="Skriv butikkens navn.."
        required
      />
      <input
        type="file"
        ref="fileInput"
        accept="image/*"
        v-on:change="previewImage"
      />
      <button class="choose-image" type="button" v-on:click="triggerChooseImg">
        Vælg ønske
      </button>
      <div>
        <img :src="post.image" class="image-preview" />
      </div>
      <button type="button" v-on:click="createPost">Tilføj nu..</button>
    </form>
  </div>
</template>

<script>
import { postRef } from "../firebase-db";
export default {
  name: "Create",
  data() {
    return {
      post: {
        description: "",
        image: null
      }
    };
  },
  methods: {
    triggerChooseImg() {
      this.$refs.fileInput.click();
    },
    previewImage() {
      const imageFile = this.$refs.fileInput.files[0];
      const fileReader = new FileReader();
      fileReader.onload = event => {
        this.post.image = event.target.result;
      };
      fileReader.readAsDataURL(imageFile);
    },
    createPost() {
      postRef.add(this.post);
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
form {
  padding: 2em 1em 2.5em;
}

button.choose-image {
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
}

/* article button {
  text-align: center;
  cursor: pointer;
  border: none;
  padding: 10px 8px;
  border-radius: 0;
  color: var(--text-color-light);
  background-color: var(--green);
  width: 40%;
} */
input {
  margin: 1em auto;
  width: 100%;
  max-width: 350px;
  padding: 12px 15px;
  box-sizing: border-box;
  display: block;
}

input[type="file"] {
  display: none;
}

.image-preview {
  max-width: 350px;
  width: 100%;
  padding: 1em 0;
}

 
</style>
