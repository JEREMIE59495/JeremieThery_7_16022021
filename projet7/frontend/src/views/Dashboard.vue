<template class="Dashboard">
  <div>
    <div class="header">
        <Entete />
        <CreateGroup />
        <Profil />
        <Groupe />
        <Users/>
        <Public class="public"/>
        
    </div>
 <!--   <div class ="navLeft">
      
      
    </div>
    <div class="public">
     <DetailProfil v-if="profilDisplay"/>
    </div>-->
  </div> 
</template>

<script>
  import Entete from '@/components/dash/Entete.vue'
  import Profil from '@/components/dash/Profil.vue'
  import Groupe from '@/components/dash/groupe/Groupe.vue'
  import Users from '@/components/dash/Users_connected.vue'
  import Public from '@/components/dash/Publication.vue'
  import CreateGroup from '@/components/dash/groupe/CreateGroup.vue'
 // import DetailProfil from '@/components/dash/DetailProfil.vue'
 
  export default {
   name: 'Dashboard',
    components: {
      Entete,
      Profil,
      Groupe,
      Users,
      Public,
      CreateGroup
    //  DetailProfil
   },
 
  /*  el:'.Dashboard',
    data(){
      return{
        haut:true,
        publicDisplay:true,
        profilDisplay:false,
      }
    },
    methods:{
      displayProfil: function(){ 
        this.publicDisplay = false; 
        this.profilDisplay = true;
      },
    }*/
  }

</script>
<style scoped>
.navLeft{
  width: 100%;
}
.public{
  width: 85%;
  float: right;
  margin-top:-46.2em;
}


</style>
