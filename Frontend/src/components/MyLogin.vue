<template>
    <div class="login">
        <label class="labelTitle">LOGIN</label>      
        <div class="field">
            <label class="label">Email</label>
            <div class="control">
                <input class="input" type="text" placeholder="Email" v-model="email" />
            </div>
            <label class="label">Password</label>
            <div class="control">
                <input class="input" type="password" placeholder="Password" v-model="password" />
            </div>
        </div>
            <div>
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
    margin-bottom: 70px;
    padding-bottom: 60px;
    font-size: 25px;
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
    background-color:  #1E3551;
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

.login{
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
    margin-top: 15%;
}

.input{
    padding-top: 5px;
    padding-bottom: 3px;
}

.control{
    padding-top: 5px;
    padding-bottom: 3px;
}

</style>