<template >

  <section class="head">
      <router-link class="deconnexion" to="/">Déconnexion</router-link>
   
    <img alt="logo groupomania" src="../../assets/icon.png ">
    <h2>GROUPOMANIA</h2>

  </section> 
</template>

<script>
export default {
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.head{
  width:55%;
  float:right;
  height:4em;
  margin-right:22.5%;
  background: white;
}
img{
  width:4em;
  height:4em;
  float:left;
}


h2{
	width:25%;
	float:left;
	margin-top:0.7em;
  margin-left:0;
  color:black;
}

.deconnexion{
  float:right;
  margin-right:1em;
  margin-top:2em;
  text-decoration:none;
  font-weight: bold;
   color:black;
}
.deconnexion:hover{
  color:blue;
}
</style>
