<template>
  <div class="header">
    <b-navbar>
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img
            src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
            alt="Lightweight UI components for Vue.js based on Bulma"
          />
        </b-navbar-item>
      </template>
      <template slot="start">
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
      </template>

      <template slot="end">
        <b-navbar-item tag="div">
          <div class="buttons">
              <router-link to="/signup">
                <button class="button is-primary" v-if="!loggedIn">
                  <strong>Sign up</strong>
                </button>
              </router-link>
              <router-link to="/login">
                <button class="button is-light" v-bind:URL="URL" v-if="!loggedIn">
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
  props: ["URL","loggedIn"],
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

</style>
