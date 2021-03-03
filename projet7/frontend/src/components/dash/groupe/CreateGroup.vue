<!--Pop up pour ajouter un nouveau groupe-->
<template>
    <div>
        <label for="createGroup">Nom du groupe : </label>
        <input type="text" id="createGroup" class="createGroup" v-model="name_group">
        <button  type="submit" @click="addGroup">Enregistrer</button><br>
        <button @click="closeGroup">Annuler</button>
    </div>
</template>

<script>
    import axios from 'axios'

    export default  {
        name:'createGroup',
       data(){
            return{             
                  name_group :null,        
            }
        }, 

        methods:{
            //fonction pour envoyer le nouveau groupe a la db
            addGroup(){  
                axios.post('http://localhost:8080/api/groupe', {
                    name_group: this.name_group
                }).then((response)=>{  
                    console.log(response)
                })  
                this.$emit('fermer-bloc')
            },
            closeGroup(){
                this.$emit('fermer-bloc')
            }
        }    
    }
</script>
<style scoped>
    div{
        height:6em;
        width:50%;
        padding-top:2em;
        margin-top:5em;
        margin-left:auto;
        margin-right: auto;
        text-align:center;
        border: 3px solid black;
    }
    button{
        margin: 1em;
       
    }
</style>
