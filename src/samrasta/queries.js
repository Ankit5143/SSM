const getSamrasta = "SELECT * FROM samrasta";
const getSamrastaById = "SELECT * FROM samrasta WHERE id = $1";
const checkEmailExists = "SELECT s FROM samrasta WHERE s.email = $1";
const addSamrasta = "INSERT INTO samrasta (name, email, age,dob) VALUES ($1, $2, $3, $4)";
const removeSamrasta = "DELETE FROM samrasta WHERE id = $1";
const updateSamrasta = "UPDATE samrasta SET name =$1 WHERE id = $2"; 

module.exports = {
    getSamrasta,
    getSamrastaById,
    checkEmailExists,
    addSamrasta,
    removeSamrasta,
    updateSamrasta,
    
}