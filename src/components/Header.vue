<template>
  <div class="header">
    <b-navbar>
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <span class="logo">Hiraldo's Kai</span>
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
              <router-link :to="{ name: 'AdminDashboard', query: {URL: this.URL, token:this.token, isAdmin:this.isAdmin}}" v-bind:URL="URL" v-bind:token="token" v-bind:isAdmin="isAdmin">
                <button class="button is-primary" v-if="isAdmin">
                  <strong>Admin Dashboard</strong>
                </button>
              </router-link>
              <router-link to="/signup">
                <button class="button is-primary" v-if="!loggedIn">
                  <strong>Sign up</strong>
                </button>
              </router-link>
              <router-link :to="{ name: 'Login', query: { URL: this.URL}}" v-bind:URL="URL">
                <button class="button is-light" v-if="!loggedIn">
                  <strong>Log in</strong>
                </button>
              </router-link>
              <router-link to="/" >
                <button class="button is-light" v-if="loggedIn" @click="logout">
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
  props: ["URL","loggedIn", "isAdmin", "token"],
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
    width: 90%;
    margin: 10px auto
}

span.logo {
    font-family: 'Girassol';
    font-size: 1.5em;
}


</style>
