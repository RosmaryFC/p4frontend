<template>
  <div id="app">
    <div id="nav">
      <Header v-bind:URL="URL" v-bind:loggedIn="loggedIn" v-bind:username="username" v-bind:isAdmin="isAdmin" v-bind:token="token" @logout="logout"/>
    </div>
    <router-view v-bind:url="URL" @loggedIn="login"/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data:function(){
    return {
      isAdmin:false,
      loggedIn:false,
      token:'',
      username: '',
      URL:'http://127.0.0.1:8000/'
    }
  },
  created: function() {
    this.$router.push({
      // TODO: remove after debug!
      path:"/",
      query: {
        token: this.token,
        URL: this.URL,
        loggedIn: this.loggedIn
      }
    })
  },
  methods:{
    login: function (event){
      console.log("login function in app.vue")
      this.loggedIn = true
      this.isAdmin = event.is_admin
      this.token = event.token
      this.username = event.username
      if(this.isAdmin) {
      this.$router.push({
        path:"AdminDashboard",
        query: {
          token: this.token,
          loggedIn: this.loggedIn,
          username: this.username
        }
      })
      }else {
        this.$router.push({
        path:"/UserDashboard",
        query: {
          token: this.token,
          loggedIn: this.loggedIn,
          username: this.username
        }
      })
      }

    },
    logout: function (){
      console.log("logout function in app.vue")
      this.loggedIn = false
      this.token = ''
      this.isAdmin = false
      this.username = ''
      this.$router.push({
        path:"/",
        query: {
          token: '',
          loggedIn: false,
          username: ''
        }
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
