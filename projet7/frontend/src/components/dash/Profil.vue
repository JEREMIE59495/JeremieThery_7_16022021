
<template>	
	<nav>
		<div class="photo"></div>
		<p class= "text">Bonjour THERY Jérémie</p>
		<button @click="displayProfil"> Voir profil</button>
	</nav>
</template>

<script>
	export default {
		name: 'Profil',
		el:'.Dashboard',
    data(){
      return{
        haut:true,
        publicDisplay:true,
        profilDisplay:false,
      }
    },
    methods:{
      displayProfil: function(){ 
        this.publicDisplay = false; 
        this.profilDisplay = true;
      },
    }
	}

</script>
<style>
	nav{
	width: 14.8%;
	height: 14em;
	background: white; /*yellow;*/
	padding-top: 2em;
	border: 1px solid black;
	}

	.photo{
		width: 7em;
		height: 7em;
		background: grey;
		margin-left: auto;
		margin-right: auto;
		border-radius: 3.5em;	
	}

	.text{
		margin-top: 1em;
		text-align: center;
	}

	button{
		margin-top: 1.5em;
	}
</style>