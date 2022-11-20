<template>
    <div class="modifProfile">
        <button class="button register" @click="goToProfile()">Back to Profile</button>

        <div class="field">
            <label class="label">Modify your firstname</label>
            <div class="control">
                <input class="input" type="text" placeholder="Firstname" v-model="firstname" />
            </div>
        </div>

        <div class="field">
            <label class="label">Modify your lastname</label>
            <div class="control">
                <input class="input" type="text" placeholder="Lastname" v-model="lastname" />
            </div>
        </div>

        <div class="field">
            <label class="label">Add a phone number</label>
            <div class="control">
                <input class="input" type="text" placeholder="Phone Number" v-model="phoneNumber" />
            </div>
        </div>

        <div class="control">
            <button class="button is-success" @click="updateUser()">Update</button>
        </div>

        <div class="dangerZone">
            <label class="label dangerZone">DANGER ZONE</label>
            <button class="button delete" @click="deleteUser()">DELETE INFORMATIONS</button>
        </div>
    </div>
</template>

<script>
// import axios
import axios from "axios";

export default {
    data() {
        return {
            email: "",
            firstname: "",
            lastname: "",
            phoneNumber: "",
            items: [],
            myItems: []
        };
    },
    methods: {
        goToProfile() {
            this.$emit('back');
        },
        async updateUser() {
            if (this.firstname != "") {
                var res = await axios.get(`http://localhost:5000/users/${this.$route.params.id}`);
                res = res.data;
                await axios.put(`http://localhost:5000/users/${this.$route.params.id}`, {
                    email: res.email,
                    password: res.password,
                    firstname: this.firstname,
                    lastname: res.lastname,
                    phoneNumber: res.phoneNumber,
                    nbBooking: res.nbBooking,
                    isLogged: res.isLogged
                });
            }
            if (this.lastname != "") {
                var res1 = await axios.get(`http://localhost:5000/users/${this.$route.params.id}`);
                res1 = res1.data;
                await axios.put(`http://localhost:5000/users/${this.$route.params.id}`, {
                    email: res1.email,
                    password: res1.password,
                    firstname: res1.firstname,
                    lastname: this.lastname,
                    phoneNumber: res1.phoneNumber,
                    nbBooking: res1.nbBooking,
                    isLogged: res1.isLogged
                });
            }
            if (this.phoneNumber) {
                var res2 = await axios.get(`http://localhost:5000/users/${this.$route.params.id}`);
                res2 = res2.data;
                await axios.put(`http://localhost:5000/users/${this.$route.params.id}`, {
                    email: res2.email,
                    password: res2.password,
                    firstname: res2.firstname,
                    lastname: res2.lastname,
                    phoneNumber: this.phoneNumber,
                    nbBooking: res2.nbBooking,
                    isLogged: res2.isLogged
                });
            }
            alert("Your modifications has been successfully processed.");
            this.goToProfile();
        },
        async deleteUser() {
            this.deleteBooking();
            await axios.delete(`http://localhost:5000/users/${this.$route.params.id}`);
            this.$router.push("/");
        },
        async deleteBooking() {
            try {
                var response = await axios.get(`http://localhost:5000/bookings/`);
                this.items = response.data;
                var cpt = 0;
                for (let index = 0; index < this.items.length; index++) {
                    if (this.items[index].users_id == this.$route.params.id) {
                        this.myItems[cpt] = this.items[index];
                        cpt++;
                    }
                }
                console.log(this.myItems);
                for (let index = 0; index < this.myItems.length; index++) {
                    const res = await axios.get(`http://localhost:5000/dates/${this.myItems[index].date}`)
                    if (this.myItems[index].smoking == 1) {
                        await axios.put(`http://localhost:5000/dates/${this.myItems[index].date}`, {
                            resto_id: res.data.resto_id,
                            smokingSeats: (res.data.smokingSeats + parseInt(this.myItems[index].nbPeople)),
                            nonSmokingSeats: res.data.nonSmokingSeats
                        });
                    } else {
                        await axios.put(`http://localhost:5000/dates/${this.myItems[index].date}`, {
                            resto_id: res.data.resto_id,
                            smokingSeats: res.data.smokingSeats,
                            nonSmokingSeats: (res.data.nonSmokingSeats + parseInt(this.myItems[index].nbPeople))
                        });
                    }
                    await axios.delete(`http://localhost:5000/bookings/${this.myItems[index].booking_id}`)
                }
            } catch (error) {
                console.log(error);
            }
        }
    },
};
</script>