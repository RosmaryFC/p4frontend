<template>
    <div class="admin-dashboard">
        <h1 class="heading title is-2" >Admin Dashboard</h1>

        <ModalForm id="event-create" :token="token" request="post" btnname="Create Event" @createEvent="createEvent"/>
       
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
                <div class="buttons-container">
                    <ModalForm id="event-update" :token="token" :event="event" request="put" btnname="Update"  @updateEvent="updateEvent"/>
                    <DeleteModal id="event-delete" :token="token" :event="event" @deleteEvent="deleteEvent"/>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import ModalForm from '../components/ModalForm.vue'
import DeleteModal from '../components/DeleteModal.vue'

export default {
    name:"AdminDashboard",
    components: {
        ModalForm,
        DeleteModal,
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
        const {token} = this.$route.query
        this.token = token
        this.URL = this.$URL
        console.log("token", token)
        console.log("URL", `${this.$URL}api/events/`)
        //create fetch to get all events
        fetch(`${this.$URL}api/events/`, {
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
            fetch(`${this.$URL}api/events/`, {
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

.admin-header {
    width: 90%;
    margin: 10px auto;
    padding: 10px 30px;
}

.events-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

}

.event-item {
    flex: 1 0 45%;
    margin: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
} 

.event-title {
    text-shadow: 1px 1px 2px gray;
    /* E02427   FFDD57 */
}

.event-image {
    border-bottom: 2px solid gray;
    /* border-radius: 10px; */
    width: 400px;
    height: 600px;
    background-position: center;
    background-size: cover;
    /* background-color: lightgray;
    background-image: url('../assets/noimage.png'); */
    margin: auto;
}

.image {
    max-width:100%;
    max-height: 100%;
    margin: auto;
}

.event-info {
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.admin-dashboard {
    width: 70%;
    margin: 10px auto;
}

.buttons-container {
    display: flex;
    flex-direction: row;
}

</style>