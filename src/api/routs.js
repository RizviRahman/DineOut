// src/api/routes.js
// Allow overriding the base API URL via Vite env var VITE_API_BASE (useful for local proxy)
const DEFAULT_BASE = "https://dineout-backend-ihwh.onrender.com/api";
const BASE_URL = typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_API_BASE
  ? import.meta.env.VITE_API_BASE
  : DEFAULT_BASE;

export const API_ROUTES = {
  USERS: {
    GET_ALL: `${BASE_URL}/users`,                 // GET
    LOGIN:  `${BASE_URL}/users/login`,            // POST    requires { email, password }
    SIGNUP: `${BASE_URL}/users/signup`,           // POST    requires { name, email, password, role } here role and email are optional
    UPDATE: (id) => `${BASE_URL}/users/${id}`,    // PATCH   only updates user role[admin/moderator] { role: 'admin' }
    DELETE: (id) => `${BASE_URL}/users/${id}`,    // DELETE
  },
    ITEMS: {
    GET_ALL: `${BASE_URL}/items`,                 // GET
    CREATE: `${BASE_URL}/items`,                  // POST       requires { name, price, image } here image means image url
    UPDATE: (id) => `${BASE_URL}/items/${id}`,    // PATCH      requires { name, price, image } here image means image url
    DELETE: (id) => `${BASE_URL}/items/${id}`,    // DELETE
  },
  ORDERS: { 
    GET_ALL: `${BASE_URL}/orders`,                 // GET
    CREATE: `${BASE_URL}/orders`,                  // POST        requires { user, customerName, items, totalAmount }
    UPDATE: (id) => `${BASE_URL}/orders/${id}`,    // PATCH       requires { status: 'PENDING' | 'DELIVERED' }
    DELETE: (id) => `${BASE_URL}/orders/${id}`,    // DELETE
  },
};


// const mongoose = require('mongoose');

// const orderSchema = new mongoose.Schema({
//     user: {
//         type: String,
//         required: true
//     },
//     customerName: {
//         type: String,
//         required: true
//     },
//     items: [{
//         name: {
//             type: String,
//             required: true
//         },
//         quantity: {
//             type: Number,
//             required: true
//         },
//         price: {
//             type: Number,
//             required: true
//         }
//     }],
//     totalAmount: {
//         type: Number,
//         required: true
//     },
//     status: {
//         type: String,
//         enum: ['pending', 'delivered'],
//         default: 'pending'
//     }
// }, {
//     timestamps: true
// });

// module.exports = mongoose.model('Order', orderSchema);



// const bcrypt = require('bcrypt');

// const userSchema = new mongoose.Schema({    
//     name: { 
//         type: String, 
//         required: true 
//     },
//     email: { 
//         type: String, 
//         required: true, 
//         unique: true 
//     },
//     password: { 
//         type: String, 
//         required: true 
//     },
//     role: { 
//         type: String, 
//         enum: ['moderator', 'admin'], 
//         default: 'moderator' 
//     }
// },{
//     timestamps: true
// });

// // static signup method
// userSchema.statics.signup = async function(name, email, password, role) {   
//     const exists = await this.findOne({ email });
//     if (exists) {
//         throw Error('Email already in use');
//     }   
//     const salt = await bcrypt.genSalt(10);
//     const hash = await bcrypt.hash(password, salt);   
//     const user = await this.create({ name, email, password: hash, role });   
//     return user;
// }

// // static login method
// userSchema.statics.login = async function(email, password) {
//     const user = await this.findOne({ email });
//     if (!user) {
//         throw Error('Invalid email or password');
//     }   
//     const match = await bcrypt.compare(password, user.password);    
//     if (!match) {
//         throw Error('Invalid email or password');
//     }
//     return user;
// }


// module.exports = mongoose.model('User', userSchema);


// const itemSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     price: {
//         type: Number,
//         required: true
//     },
//     image: {
//         type: String,
//         required: true
//     }
// }, {
//     timestamps: true
// });

// module.exports = mongoose.model('Item', itemSchema);