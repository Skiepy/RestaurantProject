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
                    <option value="12:00:00">12h</option>
                    <option value="13:30:00">13h30</option>
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
            this.$emit('connected');
        },
        back() {
            this.$emit('back');
        },
        async createBooking() {
            try {
                if (this.firstname != "" && this.lastname != "" && this.nbPeople != "" && this.menu != "" && this.date != "" && this.timeSlot != "" && this.smoking != "") {
                    const res = await axios.get(`http://localhost:5000/dates/${this.date + " " + this.timeSlot}`);
                    if (res.data != "") {
                        if (this.smoking == 1) {
                            if (this.nbPeople > res.data.smokingSeats) {
                                alert(`Not enough room in the smoking area. \nPlease be advised that we currently accept a maximum of ${res.data.smokingSeats} guests in the smoking area.`);
                            } else {
                                this.updateRestoSmoking(res.data);
                                this.newBooking();
                            }
                        } else {
                            if (this.nbPeople > res.data.nonSmokingSeats) {
                                alert(`Not enough room in the non-smoking area. \nPlease be advised that we currently accept a maximum of ${res.data.nonSmokingSeats} guests in the non-smoking area.`);
                            } else {
                                this.updateResto(res.data);
                                this.newBooking();
                            }
                        }
                    } else {
                        if (this.smoking == 1 && this.nbPeople <= 10) {
                            await axios.post("http://localhost:5000/dates/", {
                                date: this.date + " " + this.timeSlot,
                                smokingSeats: (10 - parseInt(this.nbPeople)),
                                nonSmokingSeats: 40
                            });
                            this.newBooking();
                        } else if (this.smoking == 0 && this.nbPeople <= 40) {
                            await axios.post("http://localhost:5000/dates/", {
                                date: this.date + " " + this.timeSlot,
                                smokingSeats: 10,
                                nonSmokingSeats: (40 - parseInt(this.nbPeople))
                            });
                            this.newBooking();
                        } else {
                            alert(`We apologize for the inconvenience. We only accept up to 10 guests in the smoking area and 40 in the non-smoking area.`);
                        }
                    }
                } else {
                    alert('Please fill in all the fields of the form.');
                }
            } catch (error) {
                console.log(error);
            }
        },
        async updateRestoSmoking(res){
            await axios.put(`http://localhost:5000/dates/${this.date + " " + this.timeSlot}`, {
                resto_id: res.resto_id,
                smokingSeats: (res.smokingSeats - parseInt(this.nbPeople)),
                nonSmokingSeats: res.nonSmokingSeats
            });
        },
        async updateResto(res){
            await axios.put(`http://localhost:5000/dates/${this.date + " " + this.timeSlot}`, {
                resto_id: res.resto_id,
                smokingSeats: res.smokingSeats,
                nonSmokingSeats: (res.nonSmokingSeats - parseInt(this.nbPeople))
            });
        },
        async newBooking() {
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
                date: this.date + " " + this.timeSlot,
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
                nbBooking: nbBooking + 1,
                isLogged : response.data.isLogged
            });
            alert("Your reservation has been successfully processed. We are looking forward to welcoming you.");
            this.back();
        }
    }
};
</script>