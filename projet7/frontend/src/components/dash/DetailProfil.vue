<template  id="profils">
    <div>
        <p>Nom :</p>
        <p>Prénom : </p>
        <p>E-mail : </p>
        <p>Fonction :</p>
        <button type="submit" @click="updateClose">Enregistré</button>
        <button>Supprimer le compte</button>
        
    </div>        
</template>

<script>
export default {
  name: 'DetailProfil',
    el:'#profils',
      data(){
        return{
    
        }
      },
      //click du bouton pour refermer la div
    methods:{
      updateClose(){
          this.$emit('closeProfil')
      }
    },
}
</script>
<style scoped>

div{
    height:12em;
    border: 3px solid black;
    width:50%;
    margin-top:5em;
    margin-left:auto;
    margin-right: auto;
    text-align:center;
}
</style>