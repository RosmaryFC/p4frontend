<template>
    <section class="modal-form">
        <button class="button is-dark is-medium is-fullwidth"
            @click="isCardModalActive = true">
            <strong>{{btnname}}</strong>
        </button>
        <b-modal v-model="isCardModalActive" :width="640" scroll="keep">
            <div class="card">
                <div class="card-content">
                    <h1 class="title">{{btnname}}</h1>
                    <section>
                        <b-field label="Title">
                            <b-input value="Kevin Garvey" v-model="name"></b-input>
                        </b-field>
                        <b-field label="Type">
                            <b-input value="Kevin Garvey" v-model="type"></b-input>
                        </b-field>
                        <b-field label="Flyer">
                            <b-input value="Kevin Garvey" v-model="flyer"></b-input>
                        </b-field>
                        <b-field label="Date">
                            <b-input value="Kevin Garvey" v-model="date"></b-input>
                        </b-field>
                        <b-field label="Time">
                            <b-input value="Kevin Garvey" v-model="time"></b-input>
                        </b-field>
                        <b-field label="Price" >
                            <b-input value="Kevin Garvey" v-model="price"></b-input>
                        </b-field>
                        <b-field label="Address">
                            <b-input value="Kevin Garvey" v-model="address"></b-input>
                        </b-field>
                    </section>
                </div>
                <button class="button is-dark is-medium modalbtn"
                @click="saveModal">
                    <strong>Save</strong>
                </button>
                <button class="button is-light is-medium modalbtn"
                @click="closeModal">
                    <strong>Close</strong>
                </button>
            </div>

        </b-modal>

    </section>
</template>

<script>
    export default {
        name: 'ModalForm',
        props: ['token', 'request', 'btnname', 'event'],
        data() {
            return {
                isCardModalActive: false,
                date:'',
                name:'',
                time: '',
                price:0,
                address:'',
                type:'',
                flyer: '',
            }
        },
        created: function(){
            console.log("created")
            console.log("Modal created btnname",this.btnname)
            console.log("request", this.request)
            console.log("token", this.token)
            // console.log("eventID", this.event.id)
            // pre-fill the form if updating event
            if(this.request == "put"){
                this.date = this.event.date
                this.name = this.event.name
                this.time = this.event.time
                this.price = this.event.price
                this.address = this.event.address
                this.type = this.event.type
                this.flyer = this.event.flyer
            }
        },
        methods: {
            saveModal: function() {
                console.log(`save, request ${this.request}`)

                const event = {
                    name: this.name,
                    type: this.type,
                    date: this.date,
                    time: this.time,
                    price: Number(this.price),
                    address: this.address,
                    flyer: this.flyer,
                }

                console.log("event", event)
                console.log("token", this.token)
                

                if(this.request == 'post') {
                    //new event will be created
                    console.log("URL",`${this.$URL}api/events/`)

                    fetch(`${this.$URL}api/events/`, {
                    method: this.request,
                    headers: {
                        "Content-Type": "application/json",
                        "authorization": `JWT ${this.token}`
                    },
                    body: JSON.stringify(event),
                    })
                    .then(response => response.json())
                    .then(data => {
                        console.log('data', data)
                        this.isCardModalActive = false
                        this.$emit('createEvent', data)
                    })
                }

                if(this.request == 'put') {
                    //an existing event will be updated
                    console.log("URL", `${this.$URL}api/events/${this.event.id}/`)

                    fetch(`${this.$URL}api/events/${this.event.id}/`, {
                        method: this.request,
                        headers: {
                            "Content-Type": "application/json",
                            "authorization": `JWT ${this.token}`
                        },
                        body: JSON.stringify(event),
                    })
                    .then(response => response.json())
                    .then(data => {
                        console.log('data', data)
                        this.isCardModalActive = false
                        this.$emit('updateEvent', data)                        
                    })
                }
            },
            closeModal: function() {
                console.log("close")
                this.clearfields()
                this.isCardModalActive = false
            },
            clearfields: function() {
                this.date= ''
                this.name=''
                this.time= ''
                this.price= 0
                this.address= ''
                this.type= ''
                this.flyer= ''
            }
        }
    }
</script>

<style>
.modal-form {
    width: 70%;
    margin: 10px auto;
}

.modalbtn {
    margin: 5px;
}

</style>