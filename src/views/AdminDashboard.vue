<template>
    <div>
        <h1>ADMIN DASHBOARD</h1>
        <Collapse />
        <ModalForm id="event-create" :token="token" request="post" btnname="Create Event" @createEvent="createEvent"/>

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
                <ModalForm id="event-update" :token="token" :event="event" request="put" btnname="Update"  @updateEvent="updateEvent"/>
                <DeleteModal id="event-delete" :token="token" :event="event" @deleteEvent="deleteEvent"/>
            </div>
        </div>
    </div>
</template>


<script>
import Collapse from '../components/Collapse.vue'
import ModalForm from '../components/ModalForm.vue'
import DeleteModal from '../components/DeleteModal.vue'

export default {
    name:"AdminDashboard",
    components: {
        Collapse,
        ModalForm,
        DeleteModal
    },
    data: function() {
        return {
            //key value pairs go here
            attendances: [],
            events: [],
            token: '',
            URL: '',
            eventinfo: {},
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
        readEvents: function() {
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
        createEvent: function(event) {
            console.log("create event", event)
            // pushing event created in create event modal to events list. 
            // this will cause the list to refresh
            this.events.push(event)
        },
        updateEvent: function(event) {
            console.log("update Event", event)
            // locate the index of the updated event in events[]
            const index = this.events.findIndex(eventobj => eventobj.id === event.id)
            // remove 1 event at index and replace with updated event
            this.events.splice(index, 1, event)
        },
        deleteEvent: function(event) {
            console.log("delete Event", event)
            // locate the index of the delete event in events[]
            const index = this.events.findIndex(eventobj => eventobj.id === event.id)
            // remove 1 event at index
            this.events.splice(index, 1)

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