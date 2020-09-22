<template>
  <div class="header">
    <b-navbar>
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <span class="logo">Hiraldo's Kai</span>
        </b-navbar-item>
        <b-navbar-item v-if="loggedIn">
          <span> Welcome, {{username}}</span>
        </b-navbar-item>

      </template>
      <!-- <template slot="start">
        <b-navbar-item href="#">
          <router-link to="/">Home</router-link>
        </b-navbar-item>
        <b-navbar-item href="#">
          <router-link to="/Page2">About</router-link>
        </b-navbar-item>
        <b-navbar-dropdown label="Info">
          <b-navbar-item href="#">
            About
          </b-navbar-item>
          <b-navbar-item href="#">
            Contact
          </b-navbar-item>
        </b-navbar-dropdown>
      </template> -->

      <template slot="end">
        <b-navbar-item tag="div">
          <div class="buttons">
              <router-link :to="{ name: 'AdminDashboard', query: {token:this.token, isAdmin:this.isAdmin}}" v-bind:token="token" v-bind:isAdmin="isAdmin">
                <button class="header-b button is-warning" v-if="isAdmin && loggedIn">
                  <strong>Admin Dashboard</strong>
                </button>
              </router-link>
              <router-link :to="{ name: 'UserDashboard', query: {token:this.token, isAdmin:this.isAdmin, loggedIn: this.loggedIn, username: this.username}}" v-bind:token="token" v-bind:isAdmin="isAdmin" v-bind:loggedIn="loggedIn" v-bind:username="this.username">
                <button class="header-b button is-warning" v-if="loggedIn">
                  <strong>User Dashboard</strong>
                </button>
              </router-link>
              <router-link to="/signup">
                <button class="header-b button is-dark" v-if="!loggedIn">
                  <strong>Sign up</strong>
                </button>
              </router-link>
              <router-link :to="{name: 'Login'}">
                <button class="header-b button is-light" v-if="!loggedIn">
                  <strong>Log in</strong>
                </button>
              </router-link>
              <router-link to="/" >
                <button class="header-b button is-light" v-if="loggedIn" @click="logout">
                  <strong>Log out</strong>
                </button>
              </router-link>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
  </div>
</template>


<script>
export default {
  name: "Header",
  props: ["URL","loggedIn", "isAdmin", "token", "username"],
  created: function() {
    console.log("header created isAdmin", this.isAdmin)
  },
  updated: function() {
    console.log("header updated isAdmin", this.isAdmin)
  },
  methods: {
    logout: function(){
      this.$emit('logout') 
    }
  }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Girassol&display=swap');

.header {
  /* border: 2px solid black; */
  width: 90%;
  margin: 10px auto;
}

span.logo {
  font-family: 'Girassol';
  font-size: 2em;
  color: #E02427;
}

.header-b {
  margin: 5px;
}

</style>
