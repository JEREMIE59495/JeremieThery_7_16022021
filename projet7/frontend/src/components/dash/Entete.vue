<template >

  <section class="head">
      <router-link class="deconnexion" to="/">Déconnexion</router-link>
   
    <img alt="logo groupomania" src="../../assets/icon.png "><!---->
    <h1>GROUPOMANIA</h1>

  </section> 
</template>

<script>
export default {
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.head{
  width:85%;
  float:right;
  height:6em;
  background: pink;
}
img{
  width:8%;
  background  :grey;
  height:6em;
  margin-left:25%;
}


h1{
	width:25%;
	float:right;
	margin-right:29%;
	margin-top:0.5em;
	font-size: 3em;
}

.deconnexion{
  float:right;
  margin-right:1em;
  margin-top:4em;
  text-decoration:none;
  font-weight: bold;
    color: #2c3e50;
}
.deconnexion:hover{
  color:blue;
}
</style>
