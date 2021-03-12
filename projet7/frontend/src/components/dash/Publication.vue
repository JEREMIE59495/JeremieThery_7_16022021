<template v-on:showThispublication="reload">
    <section>

        <!--Titre du groupe -->
        <h1>Page général</h1>

        <!--Boutton d'ouverture du formualaire-->
        <button class="bloc_bouton_ajout" v-show="bouton_ajout" @click="openBlocComment">
        Ajouter une publication
        </button>

         <!-- Formulaire de publication-->
        <div class="addComment" v-show="showComment">
            <h3>Ajouter un commentaire</h3>
            <div class="add-title">
                <h4>Titre</h4>
                <input class="input_text" placeholder="Titre de votre publication" v-model="titleOfComment">
            </div>
            <div class=" add-comment">
                <h4>Votre commentaire</h4>
                <textarea placeholder="Tapez votre texte ici" v-model="textOfComment"></textarea>
            </div>
            <button class="bouton_bloc_ajout" @click="closeBlocComment">Annuler</button>        
            <button class="bouton_bloc_ajout" @click="PublieComment">Publier</button>
        </div>
      <!--Affichage des commentaires-->
        <div class='bloc-commentaire' v-bind:key="index" v-for="(publication, index) in publication">
            <div class='title'>
                {{publication.title}}
                <span class="auteur_publication">{{publication.auteur}}</span>
            </div>
            <div class='commentaire'>
                {{publication.comment}}
            </div> 
            <div class="bloc_admin" >
                <button class="btn_admin">Bloquer</button>
                <button class="btn_admin">Autoriser</button>
            </div>
        </div>
    </section>
</template>

<script>
import axios from'axios'
import { mapState } from 'vuex'
export default {
    name:"mur",
    data(){
        return{
            //Etat actuel des input formulaire
            textOfComment:null,
            titleOfComment:null,
            publication:null,
            bouton_ajout:true,
            showComment:false
        }
    },
    computed: {
        ...mapState(['user']),
        infoUser(){
            return this.$store.state.user   
        },
    },
    methods:{
        openBlocComment(){
            this.showComment= true,
            this.bouton_ajout= false
        },

        closeBlocComment(){
            this.showComment= false,
            this.bouton_ajout= true
        },

        PublieComment(){  
            const clicGroup = localStorage.getItem('id_group')     
            axios
                .post('http://localhost:8080/api/publication/',{
                    title:this.titleOfComment,
                    comment:this.textOfComment,
                    id_groupe:clicGroup,
                    auteur:this.$store.state.user.last_name
                })
                .then((response)=>{   
                    console.log(response)
                    this.showComment= false
                    document.location.reload();
                })
        },   
    },
    
    mounted(){
            const clicGroup = localStorage.getItem('id_group')     
        axios
            .get ('http://localhost:8080/api/publication/'+ clicGroup)
            .then((response) => {
                this.publication = response.data;
                console.log('voila' , this.publication)
                console.log(this.name_group)
                })
            } 
}
</script>
<style scoped>
.publication{
    width: 100%;
    height:38em;
     overflow-y:scroll;
    border: 1px solid black;
}

h3{
    margin:0.2em;
    margin-bottom:1em;
}

input{
    width:100%;
    margin-bottom:1em;
}

h4{
    margin:0em;
    text-align:left;
}

.bloc_bouton_ajout{
    width:100%;
    height:2em;
    background:lightseagreen
}

.bouton_ajout{
    float:left;
}

.addComment{
    padding:0em 4em 0em 4em;
    border:2px solid red;
    height:12em;
}

textarea{
    width:100%;
    height:3em;
    resize: none;
}

.bouton_bloc_ajout{
    float:right;
    margin-left:0.5em;
}

.title{
    text-align:left;
    padding:0.2em 1em 0.2em 1em ;
}

.auteur_publication{
    float:right;
}

.id_groupe_publication{
    margin-left:50%;
}
.bloc-commentaire{
    border: 1px solid grey;
    width:98%;
    margin:0.5em 0.5em 1em 0.5em ;
    border-radius:0.4em;
}
.commentaire{
    padding:0.5em;
    border-bottom:1px solid black;
    border-top:1px solid black;
}
.bloc_admin{
    width:100%;
  text-align:right; 
}
.btn_admin{
    
    margin:0.2em 1em 0.2em 1em;
}
</style>