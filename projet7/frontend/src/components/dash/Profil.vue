
<template>	
	<div>
		<div class="photo"></div>
		<p class= "text">Bonjour THERY Jérémie</p>
		<button class="btn_profil" @click="displayProfil"> Voir profil</button>
	</div>
</template>

<script>
export default {
	name: 'Profil',
	el:'.profil',
    data(){
      return{
        haut:true,
        publicDisplay:true,
        profilDisplay:false,
      }
    },
 //fonction pour ouvrir le detail du profil
    methods:{
        displayProfil:function(){
            this.$emit('openProfil',)
        }, 
    },
    
}

</script>
<style scoped>
div{
	width: 14.8%;
	height: 14em;
	background: white; /*yellow;*/
	padding-top: 2em;
	border: 1px solid black;
	}
	.photo{
		width: 7em;
		height: 5em;
		background: grey;
		margin-left: auto;
		margin-right: auto;
		border-radius: 4em;	
	}
	
	.text{
		margin-top: 1em;
		text-align: center;
	}

	.btn_profil{
		margin-top: 1.5em;
	}
</style>
