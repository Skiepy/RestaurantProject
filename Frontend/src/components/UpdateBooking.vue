<template>
    <div class="updateBooking">
        <label class="labelTitle">Booking</label>
        <button class="button register" @click="back">Go Back</button>
        <div class="field">
            <label class="label">Update Firstname</label>
            <div class="control">
                <input class="input" type="text" placeholder="Update firstname" v-model="firstname" required />
            </div>
        </div>

        <div class="field">
            <label class="label">Update Lastname</label>
            <div class="control">
                <input class="input" type="text" placeholder="Update lastname" v-model="lastname" required />
            </div>
        </div>

        <div class="field">
            <label class="label">Update Age</label>
            <div class="control">
                <input class="input" type="number" placeholder="Update age" v-model="age" min="8" max="120" />
            </div>
        </div>

        <div class="field">
            <label class="label">Update Number of People</label>
            <div class="control">
                <input class="input" type="number" placeholder="Update number of people" v-model="nbPeople" min="1"
                    max="10" required />
            </div>
        </div>

        <div class="field">
            <label class="label">Update menu choice</label>
            <div class="control">
                <select v-model="menu" required>
                    <option value="">---Please select a menu---</option>
                    <option value="Starter + main course + dessert">Starter + main course + dessert</option>
                    <option value="Starter + Main course">Starter + Main course</option>
                    <option value="Main course + dessert">Main course + dessert</option>
                    <option value="menuKid">Menu Kid</option>
                </select>
            </div>
        </div>

        <div class="field">
            <label class="label">Any allergies ?</label>
            <div class="control">
                <input type="radio" v-model="specialAllergies" value="1">
                <label>yes</label><br>
                <input type="radio" v-model="specialAllergies" value="0">
                <label>no</label><br>
            </div>
        </div>

        <div class="field" v-if="specialAllergies == 1">
            <label class="label">Specify</label>
            <div class="control">
                <input class="input" type="text" placeholder="Specify" v-model="allergies" />
            </div>
        </div>

        <div class="field">
            <label class="label">Special diet ?</label>
            <div class="control">
                <input type="radio" v-model="specialDiet" value="1">
                <label>yes</label><br>
                <input type="radio" v-model="specialDiet" value="0">
                <label>no</label><br>
            </div>
        </div>

        <div class="field" v-if="specialDiet == 1">
            <label class="label">Specify</label>
            <div class="control">
                <select v-model="diet">
                    <option value="">---Please select a diet---</option>
                    <option value="vege">Vegetarian</option>
                    <option value="glutenFree">Gluten Free</option>
                </select>
            </div>
        </div>

        <div class="field">
            <label class="label">Would you like to be in the smoking area ?</label>
            <div class="control">
                <input type="radio" v-model="smoking" value="1">
                <label>yes</label><br>
                <input type="radio" v-model="smoking" value="0">
                <label>no</label><br>
            </div>
        </div>

        <div class="control">
            <button class="button is-success" @click="updateBooking()">Update Booking</button>
        </div>

        <div>
            <p>Please be advised that if you wish to change the day or time of your reservation, you will need to make a
                new reservation and then delete the old one. This can be done from your profile. <br>For all other
                specific requests, please do not hesitate to contact us by phone.<br>Thank you.</p>
        </div>
    </div>
</template>

<script>
// import axios
import axios from 'axios';

export default {
    props: {
        id: Number
    },
    data() {
        return {
            firstname: "",
            lastname: "",
            passport: "",
            age: "",
            occupation: "",
            citizenship: "",
            nbPeople: "",
            formerNbPeople: "",
            menu: "",
            date: "",
            specialAllergies: "",
            allergies: "",
            specialDiet: "",
            diet: "",
            smoking: "",
            formerSmoking: "",
            userID: "",
            response: "",
            placeDisp: "0",
            nbPeopleSmoking: "",
            nbPeopleNonSmoking: ""
        };
    },
    methods: {
        async getUserId() {
            this.response = await axios.get(`http://localhost:5000/bookings/${this.$route.params.id}`);
            this.userID = this.response.data.users_id;
            this.firstname = this.response.data.firstname;
            this.lastname = this.response.data.lastname;
            this.passport = this.response.data.passport;
            this.age = this.response.data.age;
            this.occupation = this.response.data.occupation;
            this.citizenship = this.response.data.citizenship;
            this.nbPeople = this.response.data.nbPeople;
            this.formerNbPeople = this.response.data.nbPeople;
            this.menu = this.response.data.menu;
            this.date = this.response.data.date;
            this.allergies = this.response.data.allergies;
            this.diet = this.response.data.diet;
            this.smoking = this.response.data.smoking;
            this.formerSmoking = this.response.data.smoking;
            if (this.diet == "None") {
                this.specialDiet = 0;
            } else {
                this.specialDiet = 1;
            }
            if (this.allergies == "None") {
                this.specialAllergies = 0;
            } else {
                this.specialAllergies = 1;
            }

        },
        back() {
            this.$router.push(`/profile/${this.userID}`)
        },
        async checkSeats() {
            const res = await axios.get(`http://localhost:5000/dates/${this.date}`);
            if (this.formerSmoking == 0) {
                switch (parseInt(this.smoking)) {
                    case 0:
                        if ((parseInt(res.data.nonSmokingSeats) + (parseInt(this.formerNbPeople) - parseInt(this.nbPeople))) >= 0) {
                            this.nbPeopleSmoking = res.data.smokingSeats;
                            this.nbPeopleNonSmoking = res.data.nonSmokingSeats + (parseInt(this.formerNbPeople) - parseInt(this.nbPeople));
                            this.placeDisp = 1;
                        } else {
                            this.placeDisp = 0;
                        }

                        break;

                    case 1:
                        if ((parseInt(res.data.smokingSeats) - parseInt(this.nbPeople)) >= 0) {
                            this.nbPeopleSmoking = parseInt(res.data.smokingSeats) - parseInt(this.nbPeople);
                            this.nbPeopleNonSmoking = res.data.nonSmokingSeats + parseInt(this.formerNbPeople);
                            this.placeDisp = 1;
                        } else {
                            this.placeDisp = 0;
                        }

                        break;
                }
            } else if (this.formerSmoking == 1) {
                switch (parseInt(this.smoking)) {
                    case 0:
                        if ((parseInt(res.data.nonSmokingSeats) - parseInt(this.nbPeople)) >= 0) {
                            this.nbPeopleSmoking = parseInt(res.data.smokingSeats) + parseInt(this.formerNbPeople);
                            this.nbPeopleNonSmoking = res.data.nonSmokingSeats - parseInt(this.nbPeople);
                            this.placeDisp = 1;
                        } else {
                            this.placeDisp = 0;
                        }

                        break;

                    case 1:
                        if ((parseInt(res.data.smokingSeats) + (parseInt(this.formerNbPeople) - parseInt(this.nbPeople))) >= 0) {
                            this.nbPeopleSmoking = res.data.smokingSeats + (parseInt(this.formerNbPeople) - parseInt(this.nbPeople));
                            this.nbPeopleNonSmoking = res.data.nonSmokingSeats;
                            this.placeDisp = 1;
                        } else {
                            this.placeDisp = 0;
                        }

                        break;
                }
            }
            if (this.placeDisp == 1) {
                await axios.put(`http://localhost:5000/dates/${this.date}`, {
                    resto_id: res.data.resto_id,
                    smokingSeats: this.nbPeopleSmoking,
                    nonSmokingSeats: this.nbPeopleNonSmoking
                });
            }

        },
        async updateBooking() {
            try {
                await this.checkSeats();

                if (this.placeDisp == 1) {
                    await axios.put(`http://localhost:5000/bookings/${this.$route.params.id}`, {
                        users_id: this.userID,
                        firstname: this.firstname,
                        lastname: this.lastname,
                        passport: this.passport,
                        age: this.age,
                        occupation: this.occupation,
                        citizenship: this.citizenship,
                        nbPeople: this.nbPeople,
                        menu: this.menu,
                        date: this.date,
                        allergies: this.allergies,
                        diet: this.diet,
                        smoking: this.smoking
                    });
                    this.back();
                } else {
                    alert("Not enough seats in the selected area.");
                }
            } catch (error) {
                console.log(error);
            }
        },
    },
    beforeMount() {
        this.getUserId();
    }
};
</script>