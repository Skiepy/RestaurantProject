<template>
    <div class="register">
        <label class="labelTitle">REGISTER</label>
        <div class="field">
            <label class="label">Email</label>
            <div class="control">
                <input class="input" type="text" placeholder="Email" v-model="email" />
            </div>
        </div>

        <div class="field">
            <label class="label">Firstname</label>
            <div class="control">
                <input class="input" type="text" placeholder="Firstname" v-model="firstname" />
            </div>
        </div>

        <div class="field">
            <label class="label">Lastname</label>
            <div class="control">
                <input class="input" type="text" placeholder="Lastname" v-model="lastname" />
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
            <button class="button register" @click="goToLogin">Login</button>
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

<style scoped>
.field{
    padding-top: 20px;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    color:  #dbb172;;
    margin-bottom: 4px;
    align-items: center;
}
.register{
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
    margin-top: 5%;
    margin-bottom: 5%;
}
.button{
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    text-transform: uppercase;
    background-color:  #dbb172;
    width: 25%;
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
.button:hover {
  color:  #1E3551;
  text-decoration: none;
}
.labelTitle{
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    color:  #dbb172;
    margin-bottom: 70px;
    padding-bottom: 60px;
    font-size: 25px;
}
.input{
    padding-top: 5px;
    padding-bottom: 3px;
}
.input:hover {
  color:  #1E3551;
  text-decoration: none;
}
</style>