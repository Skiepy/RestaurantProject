<template>
    <div v-if="booking == 0">
        <h1>Profile</h1>
        <h2>Welcome back {{ firstname }}</h2>
        <button class="button logOut" @click="logOutUser()">Home</button>
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
        <button class="button booking" @click="goToBooking">Make a booking</button>
        <button class="button modProfile" @click="goToModifProfile">Modify Profile</button>
        <button class="button logOut" @click="logOutUser()">Log Out</button>
        <div v-if="nbBooking > 0">
            <label v-if="nbBooking == 1">My booking</label>
            <label v-if="nbBooking > 1">My bookings</label>
            <tr v-for="item in myItems" :key="item.booking_id">
                <td>{{ item.lastname }}</td>
                <td>{{ item.nbPeople }}</td>
                <td>{{ item.menu }}</td>
                <td>{{ item.date }}</td>
                <td>
                    <button>
                        <RouterLink :to="{ name: 'updateBooking', params: { id: item.booking_id } }">Edit your booking
                        </RouterLink>
                    </button>
                    <button @click="deleteBooking(item.booking_id)">DELETE</button>
                </td>
            </tr>
        </div>
    </div>
    <div v-if="booking == 1">
        <MyBooking :id="this.id" @back="goToProfile()" @connected="logOutUser()"></MyBooking>
    </div>
    <div v-if="modifProfile == 1">
        <MyProfile :id="this.id" @back="goToProfile()"></MyProfile>
    </div>
</template>

<script>
import MyBooking from '@/components/MyBooking.vue';
import MyProfile from '@/components/MyProfile.vue';
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
            items: [],
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
                this.$router.push('/');
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
        goToProfile() {
            this.booking = 0;
            this.modifProfile = 0;
            this.getUser();
        },
        goToModifProfile() {
            this.booking = 2;
            this.modifProfile = 1;
        },
        async checkLogIn() {
            try {
                var response = await axios.get(`http://localhost:5000/users/${this.$route.params.id}`);
                response = response.data;
                if (response.isLogged == 0 || response == "") {
                    this.$router.push('/login');
                }
            } catch (error) {
                console.log(error);
            }
        },
        async logOutUser() {
            try {
                const res = await axios.get(`http://localhost:5000/users/${this.$route.params.id}`);
                await axios.put(`http://localhost:5000/users/${this.$route.params.id}`, {
                    email: res.data.email,
                    password: res.data.password,
                    firstname: res.data.firstname,
                    lastname: res.data.lastname,
                    phoneNumber: res.data.phoneNumber,
                    nbBooking: res.data.nbBooking,
                    isLogged: 0
                });
                this.changeConnectionState(0);
            } catch (error) {
                console.log(error);
            }
        },
        async deleteBooking(bookingId) {
            try {
                var resp = await axios.get(`http://localhost:5000/users/${this.$route.params.id}`);
                resp = resp.data;

                await axios.put(`http://localhost:5000/users/${this.$route.params.id}`, {
                    email : resp.email,
                    password : resp.password,
                    firstname : resp.firstname,
                    lastname : resp.lastname,
                    phoneNumber : resp.phoneNumber,
                    nbBooking : parseInt(resp.nbBooking)-1,
                    isLogged : resp.isLogged
                });

                console.log("aod " + bookingId)
                var response = await axios.get(`http://localhost:5000/bookings/${bookingId}`);
                response = response.data;

                const res = await axios.get(`http://localhost:5000/dates/${response.date}`)
                if (response.smoking == 1) {
                    await axios.put(`http://localhost:5000/dates/${response.date}`, {
                        resto_id: res.data.resto_id,
                        smokingSeats: (res.data.smokingSeats + parseInt(response.nbPeople)),
                        nonSmokingSeats: res.data.nonSmokingSeats
                    });
                } else {
                    await axios.put(`http://localhost:5000/dates/${response.date}`, {
                        resto_id: res.data.resto_id,
                        smokingSeats: res.data.smokingSeats,
                        nonSmokingSeats: (res.data.nonSmokingSeats + parseInt(response.nbPeople))
                    });
                }
                await axios.delete(`http://localhost:5000/bookings/${bookingId}`);
                location.reload();
            } catch (error) {
                console.log(error);
            }
        }
    },
    beforeMount() {
        this.checkLogIn();
        this.getId(this.$route.params.id);
    },
    components: { MyBooking, MyProfile }
};
</script>