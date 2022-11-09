// Import connection
import db from "../config/database.js";

// Get ALL products
export const getProducts = (result) => {
    db.query("SELECT * FROM dbresto.users", (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

// Get single product
export const getProductById = (id, result) => {
    db.query("SELECT * FROM dbresto.users WHERE users_id = ?", [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });
}

// Insert product in the database
export const insertProduct = (data, result) => {
    db.query("INSERT INTO dbresto.users SET ?", [data], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

// Update Product to Database
// A REFAIRE EN FONCTION DE LA TABLE
export const updateProductById = (data, id, result) => {
    db.query("UPDATE dbresto.users SET product_name = ?, product_price = ? WHERE users_id = ?", [data.product_name, data.product_price, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Delete Product to Database
export const deleteProductById = (id, result) => {
    db.query("DELETE FROM dbresto.users WHERE users_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}