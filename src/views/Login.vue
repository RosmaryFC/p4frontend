<template>
<div class="login">
    <h1 class="heading title is-2">Log In </h1>

    <div class="fields-container">
        <b-field label="Username">
            <b-input v-model="username"></b-input>
        </b-field>
        <b-field label="Password">
            <b-input type="password" v-model="password"></b-input>
        </b-field>
    </div>
    
    <button class="button is-dark" v-on:click="handleLogin"><strong>Log In</strong></button>
</div>
</template>

<script>

export default {
    name:"Login",
    data: function() {
        return {
            username:'',
            password:'',
        }
    },
    methods: {
        handleLogin: function(){
            if(this.username === '' || this.password === '') {
                this.alertCustomError('fields cannot be blank!')
            }

            fetch(`${this.$URL}auth/users/login/`, {
                method:'post',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: this.username,
                    password: this.password,
                }),
            })
            .then(response => {
                if(!response.ok) {
                    throw new Error(response.json())
                }
                return response.json()
            })            
            .then(data => {
                this.$emit('loggedIn', data)
            })
            .catch(error => {
                console.log("error caught", error)
                this.alertCustomError('Either username, or password is incorrect')
            })
        },
        alertCustomError(msg) {
                this.$buefy.dialog.alert({
                    title: 'Error',
                    message: msg,
                    type: 'is-danger',
                    hasIcon: true,
                    icon: 'times-circle',
                    iconPack: 'fa',
                    ariaRole: 'alertdialog',
                    ariaModal: true
                })
            }
    }
}

</script>

<style>
.login {
    width: 70%;
    margin: 10px auto;
}
.fields-container {
    margin: 50px 0;
}
</style>