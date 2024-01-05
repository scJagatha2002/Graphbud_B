const express = require('express');
const router = express.Router();
const db = require("../db")
const service = require("../Services/add")

//"http://localhost:3000/api/company/"
router.post("/",async(req,res) => {
    try {
        const {Id,Name,Location} = req.body;
        const [company] = await service(Id,Name,Location);
        
        console.log(company);
        db.query("INSERT INTO logging (Message, Status) VALUES (?,?)",["added successfully","success"]);          //Adding logging information to logging table
        res.send("Added Successfully");                                                                           //Sending response message 

        
    } catch (error) {
        db.query("INSERT INTO logging (Message, Status) VALUES (?,?)",["error fetching an api","failure"]);       //Adding logging information to logging table
        
        throw error;
        
    }
    
})

module.exports = router;