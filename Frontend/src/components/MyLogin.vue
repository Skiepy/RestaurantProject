<template>
    <div class="login">
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
            <button class="button is-success" @click="connection">Login</button>
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
            password: "",
            hash: "",
            items: [],
        };
    },
    methods: {
        // Connect to the website
        async connection() {
            if (this.password != "" && this.email != "") {
                try {
                    var testPassword = false;
                    const response = await axios.get(`http://localhost:5000/users/`);
                    this.items = response.data;
                    for (let index = 0; index < this.items.length; index++) {
                        if (this.email === this.items[index].email) {
                            testPassword = await axios.post("http://localhost:5000/users/login", {
                                password: this.password,
                                hashed: this.items[index].password
                            });
                        }
                    }
                    this.email = "";
                    this.password = "";
                    this.hash = "";
                    if (!testPassword.data) {
                        alert("Wrong email or password.");
                    } else {
                        this.$router.push("/");
                    }
                } catch (err) {
                    console.log(err);
                }
            } else {
                alert("Please verify your informations.");
            }
        },
    },
};
</script>