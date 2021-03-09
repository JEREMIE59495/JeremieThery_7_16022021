<!-- bloc Groupe pour voir ou ajouter un nouveau groupe-->
<template>
   <div class="groupe">
       <h3>Groupe de travail </h3>
       <button @click="group">nouveau groupe</button>
       <ul v-bind:key="index" v-for="(groupe, index) in groupe">
           <li>{{groupe.name_group}}</li>
       </ul>
   </div> 
</template>
<script>
import axios from 'axios'

export default {
    
    name:'Groupe',
    data(){
        return{
            groupe:null,   
        }  
    },
//fonction pour ouvrir l'ajout du nouveau groupe
    methods:{
        group:function(){
            this.$emit('openGroup',)
        }, 
    },
// Récupère tous les groupes sur la db
    mounted(){
        axios
        .get ('http://localhost:8080/api/groupe')
        .then((response) => {
            this.groupe = response.data;
     //   console.log(this.groupe)
        });
    },
}
</script>
<style scoped>
.groupe{
	width: 14.8%;
	background: white; 
	padding-top: 0em;
	border: 1px solid black;
    }

h3{
margin: 0;
margin-bottom:0.8em;
}
.new_group{
    padding: 0.5em 1.8em ;
    background:pink;
    text-decoration: none;
    color: black;
    font-weight: bold;
   
}
</style>