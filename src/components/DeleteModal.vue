<template>
    <section class="deletemodal">
        <button class="button is-danger is-medium is-fullwidth"
            @click="isCardModalActive = true">
            <strong>Delete</strong>
        </button>
        <b-modal v-model="isCardModalActive" :width="640">
            <div class="card">
                <div class="card-content">
                    <section>
                        <h2 class="title">Delete Event</h2>
                        <p>Are you sure you want to delete this event? It cannot be undone</p>
                        <br>
                    </section>
                    <div>
                        <button class="button is-danger is-medium modalbtn"
                            @click="saveModal">
                            <strong>Delete</strong>
                        </button>
                        <button class="button is-dark is-medium modalbtn"
                            @click="closeModal">
                                <strong>Close</strong>
                        </button>
                    </div>
                </div>
            </div>
        </b-modal>
    </section>
</template>

<script>
export default {
    name: 'DeleteModal',
    props: ['token', 'event'],
    data() {
        return {
            isCardModalActive: false,
        }
    },
    methods: {
        saveModal: function() {
            console.log("save/delete")
            console.log("token", this.token)
            console.log("event id", this.event.id)
            console.log("URL", `${this.$URL}api/events/${this.event.id}/`)

            fetch(`${this.$URL}api/events/${this.event.id}/`, {
                method: 'delete',
                headers: {
                    authorization: `JWT ${this.token}`
                }
            })
            .then(response => response.json())
            .then(data => {
                console.log('data', data)
                this.isCardModalActive = false
                this.$emit('deleteEvent', data)                        
            })
        },
        closeModal: function() {
            console.log("close")
            this.isCardModalActive = false
        }
    }
}
</script>

<style>
.deletemodal {
    width: 70%;
    margin: 10px auto;
}
</style>