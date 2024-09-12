const mysql = require('mysql');
const config = require('../config.js');
const uuid = require('uuid');

const connection = mysql.createConnection(config.db);

class User {
    static create(name, email, password) {
        return new Promise((resolve, reject) => {

            function generateUniqueId() {
                const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
                let result = '';
                for (let i = 0; i < 8; i++) {
                  result += characters.charAt(Math.floor(Math.random() * characters.length));
                }
                return result;
              }

            const uniqueId = generateUniqueId();

            const query = `INSERT INTO token(username, email, password, uniqueId) VALUES (?, ?, ?, ?)`;
            connection.query(query, [name, email, password, uniqueId], (err, results) => {
                if(err) {
                    reject(err);
                    console.log("Error in creating user".err);
                } else {
                    resolve({id: results.insertId, uniqueId});
                    console.log("User successfully created");
                }
            });
        });
    }

    static findByCredentials(name, uniqueId) {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM token WHERE username = ? AND uniqueId = ?';
            connection.query(query, [name, uniqueId], (error, results) => {
                if (error) {
                    console.error('Database error:', error);
                    reject(error);
                } else {
                    console.log('Query results:', results);
                    resolve(results[0]);
                }
            });
        });
    }
    
}

module.exports = User;
