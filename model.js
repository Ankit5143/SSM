const { stringify } = require('nodemon/lib/utils');
const postgres = require('pg');

var schema = new postgres.Schema({


// About Us

    id : Number,
    title : String,
    sub_title : String,
    description : String,

// Mission

    id : Number,
    title : String,
    sub_title : String,
    description : String,
    status : Boolean,
    image : String,

// Events

    title : String,
    sub_title : String,
    description : String,
    status : Boolean,
    image : String,

    
// Contact Us(Sign-up)

    id : Number,
    name : {type : String,required: true},
    email : {type: String, unique: true},
    mobile : Number,
    address : String,
    age : String,
    dob : Date,
    image : String,


// Header

    id : Number,
    title : String,
    sub_title : String,
    description : String,
    short_description : String,
    Banner_image : String,
    quotation : String,
    status : Boolean,
    createdAt : Date,
    updatedAt : Date,


// Sub-Header

    id : Number,
    header_id : Number,
    title : String,
    description : String,
    multi_image : String,
    status : Boolean,
    order_by : String,
    date : Date,
    quotation : String,
    createdAt : Date,
    updatedAt : Date,
    eventsDate : Date,
    views : Number,
    share_count : Number,


// FAQ

    title : String,
    description : String,
    status : Boolean


})



const Userdb = postgres.model('userdb', schema);

module.exports = Userdb;