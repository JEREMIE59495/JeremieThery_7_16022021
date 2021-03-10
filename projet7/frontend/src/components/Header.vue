<template v-show="titi">
  <div id="nav" >
    <router-link to="/Connexion">Connexion</router-link> |
    <router-link to="/Inscription">Inscription</router-link> 
  </div>
</template>
<script>
export default {
  el:'#nav',
   data(){
    return{
      deconnexion:true,
      titi:true
    }
   },
  methods:{
    toto(){
      this.deconnexion=false;
      this.titi=false
      this.$emit('tata')
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
  padding: 0.1em;
  background:white;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
