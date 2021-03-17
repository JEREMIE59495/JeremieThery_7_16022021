<template v-on:showThispublication="reload">
    <section>

        <!--Titre du groupe -->
        <h1>Fil d'actualité </h1>
         <!-- Formulaire de publication-->
        <div class="addComment">
            <h3>Ajouter une publication</h3>
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
        <div class="bloc-commentaire" v-bind:key="index"  v-for="(publication,index) in publication" >
            <div class='title'>
                {{publication.title}}
                <button class="btn_admin"  v-if='btnCheck' @click="check">Autoriser</button>
                <span class="auteur_publication">{{publication.auteur}}</span>
            </div>
            <div class='commentaire' v-bind:key='index' v-show="noValidate">
                {{publication.comment}}
            </div> 
            <div class="bloc_admin" v-if='user.password >=1'>
                <button class="btn_admin" v-bind:key='index'  @click="nocheck(publication,index)">Supprimer</button>
                
            </div>
        </div>
    </section>
</template>

<script>
import axios from'axios'
import {mapState} from 'vuex'
export default {
    name:"mur",
    data(){
        return{
            //Etat actuel des input formulaire
            textOfComment:null,
            titleOfComment:null,
            publication:true,
            bouton_ajout:true, 
            noValidate :true ,
            btnCensure:true,
            btnCheck:false,
            index:true     
        }
    },

    computed: {
        ...mapState(['user']),
        infoUser(){
            return this.$store.state.user   
        },
    },

    methods:{

        nocheck(index){
        this.publication = this.publication.filter(i=> i != index)
        console.log(index)
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
                .catch(error => console.log(error));
        },   
    },
    
    mounted(){
        const clicGroup = localStorage.getItem('id_group')     
        axios
            .get ('http://localhost:8080/api/publication/'+ clicGroup)
            .then((response) => {
                this.publication = response.data;
                //console.log(this.publication)
            })
            .catch(error => console.log(error));
    } ,

    
}
</script>
<style scoped>
    .publication{
        width: 100%;
        height:40em;
        overflow-y:scroll;
    }

    h3{
        margin:0.2em;
        margin-bottom:1em;
    }

    input{
        width:100%;
        margin-bottom:1em;
        border:1px solid grey;
        border-radius:0.3em;
        float:left;
    }

    .add-comment{
        padding-top:0.5em;
        text-align:left;
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
        border:1px solid grey;
        height:12em;
        margin-left:0.6em;
        margin-right:0.6em;
        border-radius:0.5em;
        background: rgba(175, 175, 175, 0.301);
        box-shadow: 5px 3px 5px grey;
    }

    textarea{
        width:100%;
        height:3em;
        border-radius:0.5em;
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
        width:90%;
        margin-left:auto;
        margin-right: auto;
        margin-bottom: 0.5em ;
        margin-top:1em;
        border-radius:0.4em;
        background:white;
        box-shadow: 5px 3px 5px grey;
    }

    .commentaire{
        padding:0.5em;
        border-top:1px solid black;
    }

    .bloc_admin{
        width:100%;
        text-align:right; 
        border-top:1px solid black;
    }

    .btn_admin{
        
        margin:0.2em 1em 0.2em 1em;
    }

    @media  screen and (max-width:420px) {
        .publication{
            margin-top:0em;
            overflow-y: hidden;
            height: auto;
            width:100%;
        }

        .addComment{
            text-align: none;
            padding:0em 0.6em 0em 0.2em;
            margin-right: 0.5em;
        }

    }

    @media  screen and (max-width:600px) {
        .publication{
           margin-top:0em;
        }
    }

    @media  screen and (min-width:601px)and (max-width:750px) {
        .publication{
            height:39em;
        }
    }
    @media screen and (min-width:751px) and (max-width:950px){
        .publication{
            height:auto;
        }
  }
</style>