import mysql from "mysql2";
  
// create the connection to database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'skiep',
  password: 'Upapit25',
  database: 'dbresto'
});
 
export default db;