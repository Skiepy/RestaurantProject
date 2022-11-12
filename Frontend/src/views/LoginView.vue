<template>
    <div class="about">
        <div class="field">
            <label class="label">Email</label>
            <div class="control">
                <input class="input" type="text" placeholder="Email" v-model="email" />
            </div>
        </div>

        <div class="field">
            <label class="label">Password</label>
            <div class="control">
                <input class="input" type="password" placeholder="Password" v-model="password" />
            </div>
        </div>

        <div class="control">
            <button class="button is-success" @click="connection">Register</button>
        </div>
    </div>
</template>

<script>
// import axios
import axios from "axios";

export default {
    name: "AddUser",
    data() {
        return {
            email: "",
            password: ""
        };
    },
    methods: {
        // Connect to the website
        async connection() {
            




            if (this.password == this.password2) {
                try {
                    await axios.post("http://localhost:5000/users", {
                        email: this.email,
                        password: this.password
                    });
                    this.email = "";
                    this.password = "";
                    this.password2 = "";
                    this.$router.push("/login");
                } catch (err) {
                    console.log(err);
                }
            } else {
                alert("Please verify your informations.")
            }
        },
    },
};
</script>