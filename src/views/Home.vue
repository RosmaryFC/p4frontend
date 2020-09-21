<template>
  <div class="home">
    <h1>HOME</h1>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Another Page changed to Welcome to your Vue.js App"/>
    <Collapse/>

    <!-- TODO upload carousel images -->
    <Carousel />
    <!-- TODO: create ABOUT ME -->
    <h1>ABOUT HIRALDO KAI</h1>
    <section>
      <h1>UPCOMING EVENTS</h1>
      <!-- events container inherits syle from admin dashboard due to same class names :O!-->
      <div class="events-container">
        <div class="event-item" v-for="event of events" v-bind:key="event.id">
          <p class="event-title">{{event.name}}</p>
          <div class="event-image">
            <img class="image" v-bind:src="event.flyer"/>
          </div>
          <ul class="event-info">
            <li>Date: {{event.date}}</li>
            <li>Time: {{event.time}}</li>
            <li>Price: {{event.price}}</li>
            <li>Address: {{event.address}}</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '../components/HelloWorld.vue'
import Collapse from '../components/Collapse.vue'
import Carousel from '@/components/Carousel.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Carousel,
    Collapse
  },
  data: function () {
    return {
      loggedIn: false,
      token:'',
      events:[],
      username: ''
    }
  },
  created : function () {
    //TODO: generate list of events
    const {token,loggedIn, username} = this.$route.query

    this.token = token
    this.loggedIn = JSON.parse(loggedIn)
    this.username = username

    console.log("home $URL:", this.$URL)
    console.log("home username: ", this.username)
    console.log("home token: ", this.token)
    console.log("home loggedIn: ", this.loggedIn)

    this.getEvents()
  },
  methods: {
    getEvents: function() {
      //create fetch to get all events
      fetch(`${this.$URL}api/eventspublic/`, {
          method:'get',
          headers: {
          }
      })
      .then(response => response.json())
      .then(data => {
          this.events = data.results
          console.log('events', this.events)
      })
    },
  }
}

</script>
