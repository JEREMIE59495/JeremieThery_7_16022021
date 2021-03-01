<template>
    <div class='users_connected'>
		<h3>Utilisateur connectés</h3>
        <ul v-bind:key="index" v-for="(userConnected, index) in userConnected">
           <li>{{userConnected.first_name}} {{userConnected.last_name}}</li>
       </ul>
    </div>
</template>
<script>
import axios from'axios'

export default {
    name:'User_connected',
    data(){
        return{
            userConnected:null,
        }
    },
    mounted(){
        axios
        .get ('http://localhost:8080/api/employee')
        .then((response) => {
            this.userConnected = response.data;
        console.log(this.userConnected)
        });
    },
}
</script>
<style scoped>
.users_connected{
	width: 14.8%;
	background: white; 
	border: 1px solid black;
	}
h3{
	margin: 0;
	}
li{
	text-align: left;
	width:100%;
	list-style:none;
	font-size:0.8em;
	margin:0;
	padding:0;
}
</style>