<template>
    <div class="register">
        <label class="labelTitle">REGISTER</label>
        <button class="button register" @click="goToLogin">Login</button>

        <div class="field">
            <label class="label">Email</label>
            <div class="control">
                <input class="input" type="text" placeholder="Email" v-model="email" />
            </div>
        </div>

        <div class="field">
            <label class="label">Firstname</label>
            <div class="control">
                <input class="input" type="text" placeholder="firstname" v-model="firstname" />
            </div>
        </div>

        <div class="field">
            <label class="label">Lastname</label>
            <div class="control">
                <input class="input" type="text" placeholder="lastname" v-model="lastname" />
            </div>
        </div>

        <div class="field">
            <label class="label">Password</label>
            <div class="control">
                <input class="input" type="password" placeholder="Password" v-model="password" />
            </div>
        </div>

        <div class="field">
            <label class="label">Repeat Password</label>
            <div class="control">
                <input class="input" type="password" placeholder="Repeat Password" v-model="password2" />
            </div>
        </div>

        <div class="control">
            <button class="button is-success" @click="createUser">Register</button>
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
            firstname : "",
            lastname : "",
            password: "",
            password2: "",
            items: [],
        };
    },
    methods: {
        // Create New user
        async createUser() {
            if ((this.password === this.password2) && (this.password != "") && (this.email != "")) {
                var alreadyUsed = false;
                try {
                    const response = await axios.get(`http://localhost:5000/users/`);
                    this.items = response.data;
                    for (let index = 0; index < this.items.length; index++) {
                        if (this.email === this.items[index].email) {
                            alert("This email is already used.");
                            alreadyUsed = true;
                        }
                    }
                    if (!alreadyUsed) {
                        await axios.post("http://localhost:5000/users", {
                            email: this.email,
                            firstname : this.firstname,
                            lastname : this.lastname,
                            password: this.password
                        });
                        this.email = "";
                        this.firstname = "";
                        this.lastname = "";
                        this.password = "";
                        this.password2 = "";
                        this.$router.push("/login");
                    }
                } catch (error) {
                    console.log(error);
                }
            } else {
                alert("Please verify your informations.")
            }
        },

        goToLogin() {
            this.$router.push("/login");
        }
    },
};
</script>