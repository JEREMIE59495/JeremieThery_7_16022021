
<template>	
	<div>
		<div class="photo"></div>
		<p class= "text">Bonjour THERY Jérémie</p>
		<button class="btn_profil" @click="displayProfil"> Voir profil</button>
	
	</div>
</template>

<script>
import jwt_decode from'jwt-decode'
import axios from 'axios'


export default {
	name: 'Profil',
	el:'.profil',
	//employee:null,
    data(){
      return{
        haut:true,
        publicDisplay:true,
        profilDisplay:false,
		employee:null,
		userId:null
      }  
    },
 //fonction pour ouvrir le detail du profil
    methods:{
        displayProfil:function(){
            this.$emit('openProfil',)
        }, 

    },
	mounted(){
		const toto = localStorage.getItem('userInfo')
		var decode = jwt_decode(toto)
		let userId= decode.id
		console.log ('jeton decodé :' ,userId)

        axios
        .get ('http://localhost:8080/api/employee/'+ userId)
        .then((response) => {	
            this.userId=userId
		console.log(response)
		console.log(userId)
        });
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
