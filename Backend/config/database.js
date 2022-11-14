import mysql from "mysql2";
  
// create the connection to database
const db = mysql.createConnection({
  host: '10.113.91.150',
  user: 'skiep',
  password: 'Upapit25',
  database: 'dbresto'
});
 
export default db;