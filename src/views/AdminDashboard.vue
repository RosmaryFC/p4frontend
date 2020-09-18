<template>
    <div>
        <h1>ADMIN DASHBOARD</h1>
        <button>create event</button>
        <!-- <template>
            <b-tabs type="is-toggle" expanded>
                <b-tab-item label="Students"></b-tab-item>
                <b-tab-item label="Events"></b-tab-item>
            </b-tabs>
        </template> -->

        <div class="students">

        </div>

        <div class="events-container">
            <div class="event-item" v-for="event of events" v-bind:key="event.id">
                <p class="event-title">{{event.name}}</p>
                <div class="event-image">
                    <!-- TODO: add event.img here -->
                </div>
                <ul class="event-info">
                    <li>Date: {{event.date}}</li>
                    <li>Time: {{event.time}}</li>
                    <li>Price: {{event.price}}</li>
                    <li>Address: {{event.address}}</li>
                </ul>
                <button id="event-update">update</button>
                <button id="event-delete">delete</button>

            </div>
        </div>
    </div>
</template>




<script>

export default {
    name:"AdminDashboard",
    data: function() {
        return {
            //key value pairs go here
            attendances: [],
            events: [],
            token: '',
            URL: ''
        }
    },
    created: function(){
        const {token, URL} = this.$route.query
        this.token = token
        this.URL = URL
        console.log("token", token)
        console.log("URL", `${URL}api/events/`)

        //create fetch to get all events
        fetch(`${URL}api/events/`, {
            method:'get',
            headers: {
                authorization: `JWT ${this.token}`
            }
        })
        .then(response => response.json())
        .then(data => {
            this.events = data.results
            console.log('events', this.events)
        })
    },
    methods: {
        displayEvents: function() {

        },
        createEvent: function() {

        },
        updateEvent: function() {

        },
        deleteEvent: function() {

        },
        displayStudents: function() {

        },
    }
}
</script>


<style>

.events-container {
    border: 2px solid gold;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

}

.event-item {
    flex: 1 0 45%;
    margin: 10px;
    border: 2px solid blue;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
} 

.event-image {
    border: 2px solid red;
    width: 500px;
    height: 500px;
    background-position: center;
    background-size: cover;
    background-color: gray;
}



</style>