<template>
    <div class="signup">
        <b-field label="First Name">
        <b-input v-model="first_name"></b-input>
        </b-field>

        <b-field label="Last Name">
        <b-input v-model="last_name"></b-input>
        </b-field>

        <b-field label="Email">
        <b-input v-model="email"></b-input>
        </b-field>

        <b-field label="Username">
        <b-input v-model="username"></b-input>
        </b-field>

        <b-field label="Password">
            <b-input type="password" v-model="password"></b-input>
        </b-field>

        <button class="button is-danger" v-on:click="handleSignup">Sign Up</button>

        <section>
            <b-collapse :open="false" aria-id="contentIdForA11y1">
            <button
                class="button is-primary"
                slot="trigger"
                aria-controls="contentIdForA11y1">
                Have a secret code?
            </button>
            <div class="notification">
                <div class="content">
                <h3>
                    Write your sign up code here!
                </h3>
                <p>
                <b-field label="secret code">
                <b-input type="password" v-model="secret_code"></b-input>
                </b-field>
                </p>
                </div>
            </div>
            </b-collapse>
        </section>

    </div>
</template>

<script>

export default {
    name:"Signup",
    components: {
    },
    data: function() {
        return {
            secret_code: "",
            username: '',
            password: '',
            first_name: '',
            last_name: '',
            email: '',
            is_admin: false,
        }

    },
    methods: {
        handleSignup: function () {
            let canCreateUser = false
            if(this.secret_code === 'admin123') {
                this.is_admin = true
                canCreateUser = true
            }else if(this.secret_code === 'student123') {
                canCreateUser = true
            }else {
                canCreateUser = false
            }

            const userobj = {
                username : this.username,
                password : this.password,
                first_name : this.first_name,
                last_name : this.last_name,
                email : this.email,
                is_admin : this.is_admin
            }

            if(canCreateUser) {
                fetch(`${this.$URL}auth/users/register/`, {
                    method: 'post',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(userobj)
                })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    this.$emit('loggedIn', data)
                })
            }else {
                this.alertCustomError()
            }

        },
        alertCustomError() {
                this.$buefy.dialog.alert({
                    title: 'Error',
                    message: 'Sorry! You have to be enrolled in the school to create an account. <br> <br> Use code <b>HIRALDOKAI</b> <br> on enrollment, for your first month free when you sign up for a year!',
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

</style>