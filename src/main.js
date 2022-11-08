import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')

const mysql = require('mysql2');

const db_test = mysql.createConnection({
    host: "localhost",
    user: "skiep",
    password: "Upapit25",
    database: "db_test"
});

try {
    db_test.connect(function (err) {
        if (err) throw err;
        console.log("Successfully connected to the DB !");
    });
} catch (error) {
    console.log(error);
}
