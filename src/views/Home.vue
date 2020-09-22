<template>
  <div class="home">
    
    <!-- <div class="home-header">
      <h1>Hiraldo's Kai Shobukan Shotokan Karate-Do Association</h1>
    </div> -->

    <section class="box home-header-container ">
      <img class="home-header-container-child logo-img" alt="School logo" src="../assets/HiraldoKaiLogo.png">
      <p class ="home-header-container-child subtitle is-4 about">
        <em>Martial arts can mean many different things</em><br><br><br> depending on who you ask. <br>
        For some, it's exercise. <br>For others, it's learning to protect yourself. <br>
        <strong>For the team at Hiraldo's Kai,</strong> <br> it's a way of approaching the world with <br> clarity, self-confidence, and control of your own body
      </p>
    </section>

    <section>
      <h1 class="title is-2 heading upcoming-events">UPCOMING EVENTS</h1>
      <!-- events container inherits syle from admin dashboard due to same class names :O!-->
        <div class="events-container">
            <div class="box event-item" v-for="event of events" v-bind:key="event.id">
                <p class="event-title title is-5 ">{{event.name}}</p>
                <div class="event-image">
                    <img class="image" v-bind:src="event.flyer"/>
                </div>
                <ul class="event-info">
                    <li class="item subtitle is-6"><strong>Date:</strong> {{event.date}}</li>
                    <li class="item subtitle is-6"><strong>Time:</strong> {{event.time}}</li>
                    <li class="item subtitle is-6"><strong>Price:</strong> {{event.price}}</li>
                    <li class="item subtitle is-6"><strong>Address:</strong> {{event.address}}</li>
                </ul>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'Home',
  created : function () {
    //generate list of events on create
    this.getEvents()
  },
  data: function () {
    return {
      events: []
    }
  },
  methods: {
    getEvents: function() {
      console.log("home getevents")
      //create fetch to get all events
      fetch(`${this.$URL}api/eventspublic/`, {
          method:'get',
          headers: {
          }
      })
      .then(response => response.json())
      .then(data => {
          this.events = data.results
          console.log('home events', this.events)
      })
    },
  }
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Girassol&display=swap');

.home {
  width: 70%;
  margin: 10px auto;
}


.home-header-container {
  /* border: 2px solid blue; */
  margin: auto;
  width:90%;
  height:500px;
  /* display: flex;
  flex-direction: row; */
  position: relative;
}

.home-header-container-child {
  position: absolute;
}

.about {
  width: 700px;
  display: inline-block;
  right: 0px;
  margin-right: 50px;
  margin-top:5%;
  font-family: "Lobster";

}

.logo-img {
  /* border: 2px solid black; */
  max-width: 30%;
  opacity: 0.3;
  left: 0px;
  margin-left: 50px;
  margin-top:50px;

  /* margin: auto auto; */
}

em {
  font-size:1.5em;
}

.heading {
  font-family: 'Girassol';
  margin: 50px;
}

</style>