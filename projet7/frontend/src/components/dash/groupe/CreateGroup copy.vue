<template>
<div>
    <label for="createGroup">Nom du groupe :</label>
    <input type="text" class="createGroup" v-model="groupe.name_group">
    <button  type="submit" @click.prevent="addGroup">Enregistrer</button>
</div>
</template>
<script>


import axios from 'axios'

export default {
     name:'CreateGroup',
    data(){
        return{
            groupe:{
            name_group:"XXXXX"
            }
        }
    }, 

  methods:{
        

        addGroup(){
          /* axios
         // console.log(this.groupelist)
        //  console.log(typeof this.groupelist.name_group)
            .post("http://localhost:8080/api/groupe", 
                this.name_group
            )
            .then((result)=>{
              
            console.log(result)
            console.log(this.groupe.name_group)
            })
            */
//
var bodyFormData = new FormData();
bodyFormData.set('userName', 'Fred');
axios({
    method: 'post',
    url: 'http://localhost:8080/api/groupe',
    data: bodyFormData,
    headers: {'Content-Type': 'multipart/form-data' }
    })
    .then(function (response) {
        //handle success
        console.log(response);
    })
    .catch(function (response) {
        //handle error
        console.log(response);
    });

//
        }
}
 


   
        }
</script>
<style scoped>
div{
    float:right;
    width:85%;
    height:10em;
    background:yellow;
    margin-top:50em;
}
</style>
