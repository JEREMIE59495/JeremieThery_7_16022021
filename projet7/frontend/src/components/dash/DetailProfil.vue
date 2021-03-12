<template  id="profils">
    <div class='formModifProfil'>
        <p>Nom :
        <span>  {{user.first_name}}</span>     
          <input type:text v-show='modifyFirstName' v-model="first_name">
          <button @click='modifyFN'><i class="fas fa-pen"></i></button>
        </p>
        
        <p  >Prénom :
          <span> {{user.last_name}} </span>
          <input type:text v-if='modifyLastName' v-model ='last_name'>
          <button @click='modifyLN'><i class="fas fa-pen"></i></button>
        </p>
          <p>E-mail :
            <span>{{user.email}}</span>
            <input type:email v-if='modifyEmail' v-model='email'>
            <button @click='modifyE'><i class="fas fa-pen"></i></button>
        </p>
        <p>Mot de passe :
            <span>*********</span>
            <input type:password v-if='modifypassword' v-model='password'>
            <button @click='modifyP'><i class="fas fa-pen"></i></button>
        </p>
      
        <button class='envoyer' type="submit" @click="updateClose">Enregistré</button>
        <button class='supprimer' type="submit" @click ="deleteAccount">Supprimer le compte</button>
        
    </div>        
</template>

<script>
import {mapState} from 'vuex'
import axios from 'axios'
import jwt_decode from'jwt-decode'

export default {
  name: 'DetailProfil',
    el:'#profils',
      data(){
        return{
          //Masquage des inputs a l'initialisation
          modifyFirstName: false,
          modifyLastName: false,
          modifyEmail: false,
          modifypassword:false,
          //valeur de l'input
          first_name: null,
          last_name: null,
          email: null,
          password:null
          
        }
        

        

        
      },
      computed:{
	...mapState(['user']),
   trucinfo(){
       return this.$store.state.user
      
   },
}, 
  

      //click du bouton pour refermer la div
    methods:{
      
      updateClose(){
        if(this.first_name == null){
         this.first_name=this.$store.state.user.first_name
      console.log(this.first_name)
      }
      if(this.last_name == null){
         this.last_name=this.$store.state.user.last_name
      console.log(this.last_name)
      }
      if(this.email == null){
         this.email=this.$store.state.user.email
      console.log(this.email)
      }
  if(this.password == null){
         this.password=this.$store.state.user.password
      console.log(this.password)
      }
          const token = localStorage.getItem('userInfo')
          var decode = jwt_decode(token)
          let userId= decode.id
      
      //modification du profil
     
     axios
    
        .put('http://localhost:8080/api/employee/'+ userId,   
       
       {

              first_name:this.first_name,
              last_name:this.last_name,
              email:this.email,
              password: this.password
        })
        .then(response => console.log(response))
          this.$emit('closeProfil')
          this.modifyFirstName=false
          this.modifyLastName=false
          this.modifyEmail=false
          this.modifypassword=false
      },

      deleteAccount() {
        const token = localStorage.getItem('userInfo')
          var decode = jwt_decode(token)
          let userId= decode.id
        axios
          .delete("http://localhost:8080/api/employee/"+ userId)
          
          .then(() => {
            localStorage.clear();
            location.replace(location.origin);
          })
          .catch(error => console.log(error));
      },
      //Affiche les inputs de modification
      modifyFN(){
        this.modifyFirstName=true
      },
       modifyLN(){
        this.modifyLastName=true
      },
       modifyE(){
        this.modifyEmail=true
      },
       modifyP(){
        this.modifypassword=true
      },
    // suppression du compte

    },
}
</script>
<style scoped>

div{
   /* height:12em;*/
    border: 3px solid black;
    width:50%;
    margin-top:5em;
    margin-left:auto;
    margin-right: auto;
    text-align:center;
}

.envoyer, .suprrimer{
  margin:1em;
}

button{
  margin-left:0.5em;
}

input{
  width:7em;
  margin-left:0.5em;
  border:0.2px solid grey;
  border-bottom: 1px solid black;
  outline: none;
}

p{
  margin-bottom: 0em;
}

</style>