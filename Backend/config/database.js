import mysql from "mysql2";
  
// create the connection to database
const db = mysql.createConnection({
  host: '192.168.0.120',
  user: 'skiep',
  password: 'Upapit25',
  database: 'dbresto'
});
 
export default db;