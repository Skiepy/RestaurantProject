<template>
    <!-- Si j'ai le temps : penser à faire un check en loadant la page pour savoir si l'utilisateur est bien connecté (isLogged dans la DB) 
        pour éviter d'avoir accès à la page de profil en ayant juste l'id de l'utilisateur -->
    <div v-if="booking == 0">
        <h1>Profile</h1>
        <h2>Welcome back {{ firstname }}</h2>
        <h2>A refaire (schéma)</h2>
        <label>Firstname :</label>
        <p>{{ firstname }}</p>
        <label>Lastname :</label>
        <p>{{ lastname }}</p>
        <label>Phone Number :</label>
        <p>{{ phoneNumber }}</p>
        <label>Number of bookings :</label>
        <p>{{ nbBooking }}</p>
        <br>
        <button class="button booking" @click="goToBooking()">Make a booking</button>
        <button class="button logOut" @click="changeConnectionState(0)">Log Out</button>
        <div v-if="nbBooking > 0">
            <label v-if="nbBooking == 1">Your booking</label>
            <label v-if="nbBooking > 1">Your bookings</label>
            <!-- Avec un v-for faire apparaitre toutes les résas -->
            <tr v-for="item in myItems" :key="item.booking_id">
                <td>{{item.lastname}}</td>
                <td>{{item.nbPeople}}</td>
                <td>{{item.menu}}</td>
                <td>{{item.date}}</td>
                <td>
                    <button><RouterLink :to="{ name: 'updateProfile', params: { id: item.booking_id } }">Edit your booking</RouterLink></button>
                    <button>DELETE</button>
                </td>
            </tr>
        </div>
    </div>
    <div v-if="booking == 1">
        <MyBooking :id="this.id" @back="goToProfile()" @connected="changeConnectionState($event)"></MyBooking>
    </div>
</template>

<script>
import MyBooking from '@/components/MyBooking.vue';
import axios from 'axios';

export default {
    data() {
        return {
            // User table
            id: parseInt(this.$route.params.id),
            connected: "0",
            email: "",
            firstname: "",
            lastname: "",
            phoneNumber: "",
            nbBooking: "",
            // Booking table
            passport: "",
            age: "",
            occupation: "",
            citizenship: "",
            nbPeople: "",
            menu: "",
            date: "",
            allergies: "",
            diet: "",
            smokingArea: "",
            // Resto table
            smokingSeats: "",
            nonSmokingSeats: "",
            // Other
            booking: "0",
            modifProfile: "0",
            items : [],
            myItems: []
        };
    },
    methods: {
        async getId(newId) {
            this.id = newId;
            await this.getUser();
        },
        changeConnectionState(connectionState) {
            this.connected = connectionState;
            if (connectionState == 0) {
                this.id = "";
                this.email = "";
                this.firstname = "";
                this.lastname = "";
                this.phoneNumber = "";
                this.nbBooking = "";
                // Other
                this.booking = "0";
                this.modifProfile = "0";
                this.$router.push('/login');
            }
        },
        async getUser() {
            try {
                var response = await axios.get(`http://localhost:5000/users/${this.id}`);
                response = response.data;
                this.email = response.email;
                this.firstname = response.firstname;
                this.lastname = response.lastname;
                this.phoneNumber = response.phoneNumber;
                this.nbBooking = response.nbBooking;
                if (this.nbBooking > 0) {
                    this.getBooking();
                }
            } catch (error) {
                console.log(error);
            }
        },
        async getBooking() {
            try {
                var response = await axios.get(`http://localhost:5000/bookings/`);
                this.items = response.data;
                var cpt = 0;
                for (let index = 0; index < this.items.length; index++) {
                    if (this.items[index].users_id == this.id) {
                        this.myItems[cpt] = this.items[index];
                        cpt++;
                    }
                }
            } catch (error) {
                console.log(error);
            }
        },
        goToBooking() {
            this.booking = 1;
        },
        async goToProfile() {
            this.booking = 0;
            this.modifProfile = 0;
            this.getUser();
        },
        goToModifProfile() {
            this.modifProfile = 1;
        }
    },
    beforeMount() {
        this.getId(this.$route.params.id);
    },
    components: { MyBooking }
};
</script>