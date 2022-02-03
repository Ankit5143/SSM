const req = require('express/lib/request');
const res = require('express/lib/response');
const client = require('../../database');
const queries = require("./queries");

const getSamrasta = (req, res) => {
    // console.log("getting samrasta")
    client.query(queries.getSamrasta, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getSamrastaById = (req, res) => {
    const id = parseInt(req.params.id);
    client.query(queries.getSamrastaById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
}

const addSamrasta = (req, res) => {
    const { name, email, age, dob } = req.body;
    //check if email exists
    client.query(queries.checkEmailExists, [email], (error, results) => {
        if (results) {
            res.send("Email already exists..");
        }

        // add samrasta to database
        client.query(queries.addSamrasta,
            [name, email, age, dob],
            (error, results) => {
                if(error) throw error;
                res.status(201).send("Samrasta Created Successfully!");
            }
        );
    });
};

const removeSamrasta = (req, res) => {
    const id = parseInt(req.params.id);

    client.query(queries.removeSamrasta, [id], (error, results) => {
        const noSamrastaFound = !results;
        if(noSamrastaFound) {
        res.send("Samrasta does not exist in the database");
        }
        
        client.query(queries.removeSamrasta, [id], (error, results) => {
        if(error) throw error;
                res.status(200).send("Samrasta removed Successfully");
        })
    });
};


const updateSamrasta = (req, res) => {
    const id = parseInt(req.params.id);
    const { name } = req.body;
    
    client.query(queries.getSamrastaById, [id], (error, results) => {
        const noSamrastaFound = !results.rows.length;
        if(noSamrastaFound) {
        res.send("Samrasta does not exist in the database");
        }
        
        client.query(queries.updateSamrasta, [name, id], (error, results) => {
        if(error) throw error;
                res.status(200).send("Samrasta updated Successfully");
        })
    });
};


module.exports = {
    getSamrasta,
    getSamrastaById,
    addSamrasta,
    removeSamrasta,
    updateSamrasta,
};