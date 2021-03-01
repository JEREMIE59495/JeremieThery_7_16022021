<template >
    <form class="connexion" >
        <fieldset>
            <legend>Connexion</legend>
            
            <div class=" mail">
                <label for="mail">E-mail :</label>
                <input type="email" id="mail" name="user_mail">
            </div>
            <div class="password">
                <label for="password">Mot de passe :</label>
                <input type="text" id="password" name="user_password">
            </div>
            
            <button @click="connexion" type="submit">S'inscrire</button>
        </fieldset>
    </form>
</template>

<style scoped lang="scss">
    fieldset{
        width: 30%;
        margin-left: auto;
        margin-right: auto;
        border-radius: 0.5em;
    }
    legend{
        width: 5em;
        margin-left: 0;
        text-align: left;
    }

    form{
    margin-top: 10em;
    margin-bottom: 10em;
    }

    #mail{
        width: 12em;
        margin: 0.5em 2em 1em 0.5em;
        
    }

    .password{
        margin: 0.5em 2em 1em 6.5em;
        text-align: left;
    }
</style>