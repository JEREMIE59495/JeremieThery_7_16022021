<template>
    <div>
        <form class="inscription" action="/ma-page-de-traitement" method="post">
            <fieldset>
                <legend>Formulaire d'inscription</legend>
                <div class="name">
                    <label for="name">Nom :</label>
                    <input type="text" id="name" name="user_name">

                    <label for="surname">Prénom :</label>
                    <input type="text" id="surname" name="user_surname">
                </div>

                <div class=" mail">
                    <label for="mail">E-mail :</label>
                    <input type="email" id="mail" name="user_mail">

                </div>
                <div class="password">
                    <label for="password">Mot de passe :</label>
                    <input type="text" id="password" name="user_password">
                </div>
                
                <button @click="inscription" type="submit">S'inscrire</button>
            </fieldset>
        </form>
    <small>Déjà inscrit : <router-link to="/Connexion">Connectez-vous !</router-link></small>
    </div>
</template>
<style scoped lang="scss">
    fieldset{
        width: 40%;
        margin-left: auto;
        margin-right: auto;
        border-radius: 0.5em;
    }

    legend{
        width: 10.5em;
        margin-left: 0;
        text-align: left;
    }

    form{
    margin-top: 5em;
    }

    #name,#surname{
        width: 10em;
        margin: 1em 2em 1em 0.5em;
    }

    .name{
        text-align: left;
        margin-left: 15%;
    }

    select{
        width: 8em;
    }

    #mail{
        width: 12em;
        margin: 0.5em 2em 1em 0.5em;
    }

    .mail, .password{
        text-align: left;
        margin-left: 14%;
    }

    #password{
        margin: 0.5em 2em 1em 0.5em;
    }
</style>