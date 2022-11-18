<template>
    <div class="booking">
        <label class="labelTitle">Booking</label>
        <button class="button register" @click="logOut">Log Out</button>
        <div class="field">
            <label class="label">Name</label>
            <div class="control">
                <input class="input" type="text" placeholder="Name" v-model="name" />
            </div>
        </div>

        <div class="field">
            <label class="label">Surname</label>
            <div class="control">
                <input class="input" type="text" placeholder="Surname" v-model="surname" />
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
                <input class="input" type="number" placeholder="Number of People" v-model="nbPeople" min="1" max="10" />
            </div>
        </div>

        <div class="field">
            <label class="label">Menu choice</label>
            <div class="control">
                <select v-model="menu">
                    <option value="">---Please select a menu---</option>
                    <option value="menu1">{{ menu1 }}</option>
                    <option value="menu2">{{ menu2 }}</option>
                    <option value="menuKid">{{ menuKid }}</option>
                </select>
            </div>
        </div>

        <div class="field">
            <label class="label">Date of Reservation</label>
            <div class="control">
                <input class="input" type="date" placeholder="Date of Reservation" v-model="date" />
            </div>
        </div>

        <div class="field">
            <label class="label">Time of Reservation</label>
            <div class="control">
                <select v-model="menu">
                    <option value="">---Please select a time slot---</option>
                    <option value="firstServ">12h</option>
                    <option value="secondServ">13h30</option>
                </select>
            </div>
        </div>

        <div class="field">
            <label class="label">Any allergies ?</label>
            <div class="control">
                <input type="radio" name="allergies" value="true">
                <label for="true">yes</label><br>
                <input type="radio" name="allergies" value="false">
                <label for="false">no</label><br>
            </div>
        </div>

        <div class="field">
            <label class="label">Specify</label>
            <div class="control">
                <input class="input" type="text" placeholder="Specify" v-model="allergies" />
            </div>
        </div>

        <div class="field">
            <label class="label">Any specific diet ?</label>
            <div class="control">
                <input type="radio" name="allergies" value="true">
                <label for="true">yes</label><br>
                <input type="radio" name="allergies" value="false">
                <label for="false">no</label><br>
            </div>
        </div>

        <div class="field">
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
                <input type="radio" name="smoking" value="true">
                <label for="true">yes</label><br>
                <input type="radio" name="smoking" value="false">
                <label for="false">no</label><br>
            </div>
        </div>

        <div class="control">
            <button class="button is-success" @click="test">Book</button>
        </div>
    </div>
</template>

<script>
// import axios
// import axios from "axios";

export default {
    data() {
        return {
            menu1: "TestMenuOne",
            menu2: "TestMenuTwo",
            menuKid: "TestMenuKid"
        };
    },
    methods: {
        logOut(){
            this.$emit('connected', 0);
        }
    }
};
</script>