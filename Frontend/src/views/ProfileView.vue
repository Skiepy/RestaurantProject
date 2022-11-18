<template>
    <MyLogin v-if="connected == 0" @id="getId($event)" @connected="changeConnectionState($event)"></MyLogin>
    <div v-else>
        <h1>Profile</h1>
        <h2>Welcome back, {{ name }}</h2>
        <h2>A refaire (schéma)</h2>
        <label>Name :</label>
        <p>{{ name }}</p>
        <label>Id :</label>
        <p> {{ id }} </p>
        <div v-if="nbReservations > 0">
            <label v-if="nbReservations == 1">Your booking</label>
            <label v-if="nbReservations > 1">Your bookings</label>
            <!-- Avec un v-for faire apparaitre toutes les résas -->
        </div>
    </div>
</template>

<script>
import MyLogin from '@/components/MyLogin.vue';

export default {
    data() {
        return {
            id: "0",
            connected: "0",
            name: "Yanis",
            nbReservations : "0"
        };
    },
    methods: {
        getId(newId) {
            this.id = newId;
        },
        changeConnectionState(connectionState) {
            this.connected = connectionState;
        }
    },
    components: { MyLogin }
};
</script>