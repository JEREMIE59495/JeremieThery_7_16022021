
<template>	
	<div class="bloc_profil">
		<div class= "profil">
			<div class="photo"></div>
			<p class= "first_name">{{user.first_name}}</p>
			<p> {{user.last_name}}</p>
			<i class="fas fa-pen"  @click="displayProfil"></i>
		</div>
		<div class="divers_profil">
			<a><i class="far fa-newspaper"></i>Fil d'actualité</a><br>
			<a><i class="far fa-calendar-alt"></i>Evenement</a><br>
			<a><i class="fas fa-address-book"></i>Annuaire</a>
		</div>
	</div>
</template>

<script>
//import axios from 'axios'
import {mapState} from 'vuex'


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
computed:{
	...mapState(['user'])
},
 //fonction pour ouvrir le detail du profil
    methods:{
        displayProfil:function(){
            this.$emit('openProfil',)
        }, 

    },
	mounted(){
		this.$store.dispatch('getInfoUser')
    }, 
}
</script>
<style scoped>
	.profil{
		height: 4em;
		padding-top: 2em;
		display:flex;
	}

	.photo{
		width: 2em;
		height: 2em;
		background: grey;
		margin-left: 1em;
		margin-right: 1em;
		border-radius: 4em;	
		margin-top:0.5em;
	}
	
	.first_name{
		text-transform: uppercase;
		font-weight:bold;
		text-align: center;
		margin-right: 0.5em;;
	}

	.btn_profil{
		height:2em;
	}

	.bloc_profil{
		width:22%;
		display:flex;
		flex-direction: column;
	}

	.divers_profil{
		padding-left:1em;
		text-align: left;
		width:100%;
	}

	.fa-address-book{
		background:white;
		color:rgb(37, 167, 11);
		font-size:1.3em;
		margin-right:0.5em;
		margin-bottom:0.5em;
	}

	.fa-pen{
		height:1em;
		width:1em;
		padding:0.2em;
		background:white;
		border-radius:0.3em;
		margin-left:1em;
		margin-top:0.8em;
	}

	.fa-calendar-alt{
		background:white;
		color:rgb(169, 27, 204);
		font-size:1.3em;
		margin-right:0.5em;
		margin-bottom:0.5em;
	}
	
	.fa-newspaper{
		background:white;
		color:blue;
		font-size:1.3em;
		margin-right:0.5em;
		margin-bottom:0.5em;
	}
	
</style>
