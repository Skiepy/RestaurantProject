<template>
    <div v-if="booking == 0">
        <button class="button1 logOut" @click="logOutUser()">Home</button>
        <button class="button1 logOut" @click="logOutUser()">Log Out </button>
        <h2>Welcome back {{ firstname }} !</h2>
        <div class="details">
            <h1>PROFILE</h1>
        <label>Firstname :</label>
        <p>{{ firstname }}</p>
        <label>Lastname :</label>
        <p>{{ lastname }}</p>
        <label>Phone Number :</label>
        <p>{{ phoneNumber }}</p>
        <label>Number of bookings :</label>
        <p>{{ nbBooking }}</p>
        <button class="button booking" @click="goToBooking">Make a booking</button>
        <button class="button modProfile" @click="goToModifProfile">Modify Profile</button> 
    </div>
        <br>
        <div class="book" v-if="nbBooking > 0">
            <label class="bookt" v-if="nbBooking == 1">MY BOOKING: </label>
            <label class="bookt" v-if="nbBooking > 1">MY BOOKINGS: </label>
            <tr class="line" v-for="item in myItems" :key="item.booking_id">
                <td>{{ item.lastname }}</td>
                <td>{{ item.nbPeople }}</td>
                <td>{{ item.menu }}</td>
                <td>{{ item.date }}</td>
                <td>
                    <button>
                        <RouterLink class= "link" :to="{ name: 'updateBooking', params: { id: item.booking_id } }">Edit booking</RouterLink>
                    </button>
                    <button @click="deleteBooking(item.booking_id)">DELETE</button>
                </td>
            </tr>
        </div>
    </div>
    <div class="bottom">
    <div v-if="booking == 1">
        <MyBooking :id="this.id" @back="goToProfile()"></MyBooking>
    </div>
    <div v-if="modifProfile == 1">
        <MyProfile :id="this.id" @back="goToProfile()"></MyProfile>
    </div>
</div>
</template>

<style scoped>
.link{
    text-decoration: none;
    color: white
}
.link:hover{
    color:#1E3551;
}
.bookt{
    color: #1E3551;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    margin-right: 25%;
    font-size: 25px;
}
.line{
    margin-right: 40%;
    color: #1E3551;
}
.book{
    align-items: center;
    margin-left: 20%;
}

button{
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    text-transform: uppercase;
    background-color:#dbb172;
    width: 40%;
    border: 0;
    padding: 15px;
    color:white;
    font-size: 15px;
    -webkit-transition: all 0.3 ease;
    transition: all 0.3 ease;
    cursor: pointer; 
    margin-right: 80px;  
    margin-left: 10px;  
    border-radius : 10%;
    margin-top: 5px;
    margin-bottom: 5px;
    text-decoration: none;
}
h1{
    font-size: 25px;
    color: #1E3551;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    margin-bottom: 40px;
}

h2{
    font-size: 32px;
    color: #dbb172;
    font-family:'Times New Roman', Times, serif;
    font-style: italic;
    margin-bottom: 2%;
}

label{
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: #1E3551;
    margin-bottom: 4px;
    align-items: center;
    font-size: 18px;
}

p{
    font-family:Arial, Helvetica, sans-serif;
    color:#dbb172;
    margin-bottom: 4px;
    align-items: center;
    font-size: 18px;
}
.button1{
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    text-transform: uppercase;
    background-color:#dbb172;
    width: 7%;
    border: 0;
    padding: 15px;
    color:white;
    font-size: 12   px;
    -webkit-transition: all 0.3 ease;
    transition: all 0.3 ease;
    cursor: pointer; 
    margin-right: 10px;  
    margin-left: 10px;  
    margin-top: 1%;
    border-radius : 10%;
}
.button1:hover {
  color:#1E3551;
  text-decoration: none;
}
.button{
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    text-transform: uppercase;
    background-color: #1E3551;
    width: 25%;
    border: 0;
    padding: 15px;
    color:white;
    font-size: 14px;
    -webkit-transition: all 0.3 ease;
    transition: all 0.3 ease;
    cursor: pointer; 
    margin-right: 10px;  
    margin-left: 10px;  
    border-radius : 10%;
}
.button:hover {
  color: #dbb172;
  text-decoration: none;
}
button:hover{
    color:#1E3551;
}
.details{
    position: relative;
    z-index: 1;
    background:#f4f4f1;
    max-width: 360px;
    margin: 0 auto 100px;
    padding: 45px;
    text-align: center;
    border-radius : 2%;
    /* box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24); */
    box-shadow: rgba(30, 53, 81, 0.212) 0px 0px 0px 2px, rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
    margin-top: 1%;
    margin-bottom: 5%;
}


</style>

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