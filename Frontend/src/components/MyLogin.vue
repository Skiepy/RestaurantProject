<template>
    <div class="login">
        <label class="labelTitle">LOGIN</label>      
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
            <button class="button register" @click="goToRegister">Register</button>
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
            id : ""
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
                            this.id =  this.items[index].users_id;
                        }
                    }
                    this.email = "";
                    this.password = "";
                    this.hash = "";
                    if (!testPassword.data) {
                        alert("Wrong email or password.");
                    } else {
                        const res = await axios.get(`http://localhost:5000/users/${this.id}`);
                        await axios.put(`http://localhost:5000/users/${this.id}`,{
                            email : res.data.email,
                            password : res.data.password,
                            firstname : res.data.firstname,
                            lastname : res.data.lastname,
                            phoneNumber : res.data.phoneNumber,
                            nbBooking : res.data.nbBooking,
                            isLogged : 1
                        });
                        this.$router.push(`/profile/${this.id}`);
                    }
                } catch (err) {
                    console.log(err);
                }
            } else {
                alert("Please verify your informations.");
            }
        },

        goToRegister() {
            this.$router.push("/register");
        }
    },
};
</script>

<style scoped>
.login{
    padding-top: 20%;
    padding-bottom: 20%;
    background-color: #f4f4f1;
}
.labelTitle{
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    color: #1E3551;
    margin-bottom: 40px;
    padding-bottom: 40px;
    font-size: medium;
}

.field{
    padding-top: 20px;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    color: #1E3551;
    margin-bottom: 40px;
    align-items: center;
}
.button{
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    text-transform: uppercase;
    /* outline: 0; */
    background-color: #dbb172;
    width: 7%;
    border: 0;
    padding: 15px;
    color:#f4f4f1;
    font-size: 14px;
    -webkit-transition: all 0.3 ease;
    transition: all 0.3 ease;
    cursor: pointer; 
    margin-right: 10px;  
    margin-left: 10px;  
}

</style>