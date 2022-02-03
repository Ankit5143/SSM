const Client = require("pg").Client;

const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "mission",
    password: "postgres",
    port: 5432,
})
client.connect();

let query = `Select * from "samrasta"`;

client.query(query, (err, res)=>{
    if(!err){
        console.log(res.rows);
    } else{
        console.log(err.message)
    }
    client.end;
})
module.exports = client;