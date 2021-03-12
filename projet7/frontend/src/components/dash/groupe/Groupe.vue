<!-- bloc Groupe pour voir ou ajouter un nouveau groupe-->
<template>
    <div class="groupe">
        <h3>Groupe de travail </h3>
        <button @click="group">Nouveau groupe</button>
        <div class="listGroup">
            <ul>
                <button class="btn_groupe" v-bind:key="index" v-for="(groupe,index) in groupe" @click='showThisPublication(groupe.id_groupe)'>{{groupe.name_group}}</button>
            </ul>
       </div>
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
            this.$emit('openGroup')
            }, 

            showThisPublication(id_groupe){
                localStorage.setItem('id_group',id_groupe),
                this.$emit('showThispublication',id_groupe)
                document.location.reload();
            }
        },

     // Récupère tous les groupes sur la db
        mounted(){
            axios
            .get ('http://localhost:8080/api/groupe')
            .then((response) => {
                this.groupe = response.data;
                console.log(this.groupe)
            });
        },
    }
</script>

<style scoped>
    .groupe{
        width: 14.8%;
        height: 15.6em;
        background: white; 
        padding-top: 0em;
        border: 1px solid black;
    }

    .listGroup{
        height: 11.4em;
        overflow-y: scroll; 
        border-top: 1px solid grey;
        margin-top:0.5em;
    }

    h3{
        margin: 0;
        margin-bottom: 0.8em;
    }

    .new_group{
        padding: 0.5em 1.8em ;
        background:pink;
        text-decoration: none;
        color: black;
        font-weight: bold;
    }

    .btn_groupe{
        font-size:1em;
        border-radius:0.5em;
        width:10em;
        text-decoration: none;
        border:none;
        margin-bottom:0.5em;
    }

    ul{
        padding:0;
    }
</style>