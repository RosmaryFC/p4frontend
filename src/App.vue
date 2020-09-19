<template>
  <div id="app">
    <div id="nav">
      <Header v-bind:URL="URL" v-bind:loggedIn="loggedIn" v-bind:isAdmin="isAdmin" v-bind:token="token" @logout="logout"/>
    </div>
    <router-view @loggedIn="login"/>
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
      URL:'http://127.0.0.1:8000/'
    }
  },
  methods:{
    login: function (event){
      this.loggedIn = true
      this.isAdmin = event.is_admin
      this.token = event.token
      this.$router.push('/')
    },
    logout: function (){
      this.loggedIn = false
      this.token = ''
      this.isAdmin = false
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
