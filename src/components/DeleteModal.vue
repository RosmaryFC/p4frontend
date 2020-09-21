<template>
    <section>
        <button class="button is-danger"
            @click="isCardModalActive = true">
            Delete
        </button>
        <b-modal v-model="isCardModalActive" :width="640">
            <div class="card">
                <div class="card-content">
                    <section>
                        <h2>Delete Eveent</h2>
                        <p>Are you sure you want to delete this event? It cannot be undone</p>
                    </section>
                    <div>
                        <button class="button is-danger is-medium"
                            @click="saveModal">
                            Delete
                        </button>
                        <button class="button is-primary is-medium"
                            @click="closeModal">
                                Close
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
</style>