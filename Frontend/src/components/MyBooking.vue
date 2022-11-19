<template>
    <div class="booking">
        <label class="labelTitle">Booking</label>
        <button class="button register" @click="logOut">Log Out</button>
        <button class="button register" @click="back">Go Back</button>
        <div class="field">
            <label class="label">Firstname</label>
            <div class="control">
                <input class="input" type="text" placeholder="Firstname" v-model="firstname" required />
            </div>
        </div>

        <div class="field">
            <label class="label">Lastname</label>
            <div class="control">
                <input class="input" type="text" placeholder="Lastname" v-model="lastname" required />
            </div>
        </div>

        <div class="field">
            <label class="label">Passport Number</label>
            <div class="control">
                <input class="input" type="text" placeholder="Passport Number" v-model="passport" />
            </div>
        </div>

        <div class="field">
            <label class="label">Age</label>
            <div class="control">
                <input class="input" type="number" placeholder="Age" v-model="age" min="8" max="120" />
            </div>
        </div>

        <div class="field">
            <label class="label">Occupation</label>
            <div class="control">
                <input class="input" type="text" placeholder="Occupation" v-model="occupation" />
            </div>
        </div>

        <div class="field">
            <label class="label">Citizenship</label>
            <div class="control">
                <input class="input" type="text" placeholder="Citizenship" v-model="citizenship" />
            </div>
        </div>

        <div class="field">
            <label class="label">Number of People</label>
            <div class="control">
                <input class="input" type="number" placeholder="Number of People" v-model="nbPeople" min="1" max="10"
                    required />
            </div>
        </div>

        <div class="field">
            <label class="label">Menu choice</label>
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
            <label class="label">Date of Reservation</label>
            <div class="control">
                <input class="input" type="date" placeholder="Date of Reservation" v-model="date" required />
            </div>
        </div>

        <div class="field">
            <label class="label">Time of Reservation</label>
            <div class="control">
                <select v-model="timeSlot" required>
                    <option value="">---Please select a time slot---</option>
                    <option value="12h">12h</option>
                    <option value="13h30">13h30</option>
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
            <label class="label">Any specific diet ?</label>
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
            <button class="button is-success" @click="createBooking()">Book</button>
        </div>
    </div>
</template>

<script>
// import axios
// import axios from "axios";

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
            menu: "",
            date: "",
            timeSlot: "",
            specialAllergies: "",
            allergies: "None",
            specialDiet: "",
            diet: "None",
            smoking: "",
        };
    },
    methods: {
        logOut() {
            this.$emit('connected', 0);
        },
        back() {
            this.$emit('back');
        },
        async createBooking() {
            try {
                if (this.firstname != "" && this.lastname != "" && this.nbPeople != "" && this.menu != "" && this.date != "" && this.timeSlot != "" && this.smoking != "") {
                    await axios.post('http://localhost:5000/bookings', {
                        users_id: this.id,
                        firstname: this.firstname,
                        lastname: this.lastname,
                        passport: this.passport,
                        age: this.age,
                        occupation: this.occupation,
                        citizenship: this.citizenship,
                        nbPeople: this.nbPeople,
                        menu: this.menu,
                        date: this.date,
                        timeSlot: this.timeSlot,
                        allergies: this.allergies,
                        diet: this.diet,
                        smoking: this.smoking
                    });
                    const response = await axios.get(`http://localhost:5000/users/${this.id}`);
                    const email = response.data.email;
                    const password = response.data.password;
                    const firstname = response.data.firstname;
                    const lastname = response.data.lastname;
                    const phoneNumber = response.data.phoneNumber;
                    const nbBooking = response.data.nbBooking;
                    await axios.put(`http://localhost:5000/users/${this.id}`, {
                        email: email,
                        password: password,
                        firstname: firstname,
                        lastname: lastname,
                        phoneNumber: phoneNumber,
                        nbBooking: nbBooking+1
                    });
                    this.back();
                } else {
                    alert('Please fill in all the fields of the form.');
                }
            } catch (error) {
                console.log(error);
            }
        }
    }
};
</script>