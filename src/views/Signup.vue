<template>
    <div class="signup">
        <h1 class="heading title is-2" >Sign Up</h1>

        <div class="fields-container">
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
        </div>
        
        <button class="button is-dark" v-on:click="handleSignup"><strong>Sign Up</strong></button>

        <section class="secret-code-container">
            <b-collapse :open="false" aria-id="contentIdForA11y1">
            <button
                class="button is-warning"
                slot="trigger"
                aria-controls="contentIdForA11y1">
                Have a secret code?
            </button>
            <div class="notification">
                <div class="content">
                <h3>
                    Write your sign up code down below!
                    <br>
                    Don't have one?
                    <br>
                    Ask your instructor for your very own secret code
                </h3>
                <p>
                <b-field label="secret code here">
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
            console.log("handlesignup cancreateuser: ", canCreateUser)

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
                .then(response => {
                    if(!response.ok) {
                        throw new Error(response.json())
                    }
                    return response.json()
                })
                .then(data => {
                    console.log('data', data)
                    
                    this.$buefy.toast.open({
                    message: `User ${data.username} created successfully!`,
                    type: 'is-success'
                    })

                     this.$emit('loggedIn', data)
                })
                .catch(error => {
                    console.log('error caught', error)
                        // 400 error
                        this.secret_code = ''
                        this.username = ''
                        this.password = ''
                        this.first_name = ''
                        this.last_name = ''
                        this.email = ''
                        this.is_admin = false
                        this.alertCustomError('Seems like there was an error creating a user, try a different username, email, or password!')
                })
            }else {
                this.alertCustomError('Sorry! You have to be enrolled in the school to create an account. <br> <br> Use code <b>HIRALDOKAI</b> <br> on enrollment, for your first month free when you sign up for a year!')
            }

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

.signup {
    width: 70%;
    margin: 10px auto;
}

.secret-code-container {
    margin: 50px;
}

</style>