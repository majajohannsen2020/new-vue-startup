<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Ønskeseddel</router-link> |
      <router-link to="/create">Tilføj ønske</router-link> 
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #c6a9a9;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #755454;
}

#logo {
  width: 10%;
  height: 10%;
}
</style>
