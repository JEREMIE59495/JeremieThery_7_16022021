<template>
  <div id="nav" v-if="navLink">
    <router-link to="/">Home</router-link> |
    <router-link to="/Connexion">Connexion</router-link> |
    <router-link to="/Inscription">Inscription</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/Dashboard" @click="dashDisplay">Dashboard</router-link> |
<Dashboard v-if="dashboardView" />
  </div>


 
</template>
<script>
import Dashboard from '@/views/Dashboard.vue'

export default{
  components: { Dashboard },
  el:'nav',
  data(){
    return{
      navLink:true,
      dashboardView: false,
    }
  },
  methods:{
    dashDisplay: function(){
     this.navLink = false;
     this.dashboardView= false;
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background:green;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
