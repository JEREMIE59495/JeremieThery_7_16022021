<template>
    <div>
        <label for="createGroup">Nom du groupe :</label>
        <input type="text" class="createGroup" v-model="name_group" >
        <button  type="submit" @click="addGroup">Enregistrer</button>
    </div>
</template>

<script>
    import axios from 'axios'

    export default  {
        name:'createGroup',
       data(){
            return{    
               name_group :this.name_group
            }
        }, 

        methods:{
            addGroup(){
        /*      const newGroup = this.name_group
               
               //newGroup.append('content',this.name_group);
             console.log(newGroup) ;
             axios.post ('http://localhost:8080/api/groupe'),newGroup,{
                 headers:{
                     'Content-Type':' application/x-www-form-urlencoded',
                     method: 'post',
                url:'http://localhost:8081/api/groupe',
                data: newGroup
                 }
             }
            /* .then((response)=>{
                 console.log(response)
             })
            },*/
        //
        
              axios({
                   headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
                 method:'post' ,
                 url:'http://localhost:8080/api/groupe',
                 data:{
                     name_group:this.name_group
                     }
                  
             })  .then((response)=>{
                 console.log(response)
              }) 
            console.log(this.name_group)
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
