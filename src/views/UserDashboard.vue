<template>
  <div class="userdashboard">
    <h1 class="heading title is-2">USER DASHBOARD</h1>
    <section>
      <h1 class="heading title is-3">EVENTS</h1>
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
          <div class="field" v-if="loggedIn" >
              <b-switch :value="checkAttendance(event)" v-on:click.native="updateAttendance(event)" type="is-success">
                attended
              </b-switch>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'UserDashboard',
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
  updated: function () {
    console.log("updated function in UserDashboard.vue")
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
    getAttendance: function() {
    },
    checkAttendance: function(event) {
      console.log("checkAttendance", event)

      const attendanceobj = event.attendances.find(attendance => attendance.owner === this.username)
      console.log("attendanceobj", attendanceobj)

      if(attendanceobj === undefined){
        return false
      }

      return true
    },
    updateAttendance: function(event) {
      console.log("updateAttendance", event)
      const attendanceobj = event.attendances.find(attendance => attendance.owner === this.username)
      console.log("attendanceobj", attendanceobj)

      if(attendanceobj == undefined) {
        // TODO: create user attendance for specific event
        console.log(`updating attendence for event ${event.id}`)
        const id = Number(event.id)
        fetch( `${this.$URL}api/attendances/`, {
          method: 'post',
          headers: {
            "Content-Type": "application/json",
            authorization: `JWT ${this.token}`
          },
          body: JSON.stringify({event: id})
        })
        .then(response => response.json())
        .then(data => {
          console.log(data)
          this.getEvents()
        })
        // return true
      }else {
        // TODO: delete user attendance for specific event
        let attendance_id = attendanceobj.id
        console.log(`deleting attendance id ${attendance_id} for event ${event.id}`)
        fetch(`${this.$URL}api/attendances/${attendance_id}/`, {
          method: 'delete',
          headers: {
            authorization: `JWT ${this.token}`
          }
        })
        .then(response => response.json())
        .then(data => {
          console.log("deleted user", data)
          this.getEvents()
        })
        // return false
      }
    }
  }
}

</script>

<style>
.userdashboard {
  width: 70%;
  margin: 10px auto;
}
</style>