const express = require('express');
const router = express.Router();
const db = require("../db")
const service = require("../Services/getAllCompanies")

//"http://localhost:3000/api/companies/""
router.get("/",async(req,res) => {
    try {
        const companies = await service();
        db.query("INSERT INTO logging (Message, Status) VALUES (?,?)",["fetched successfully","success"]);                            //Adding logging information to logging table
        res.send(companies);                                                                                                          //Sending response message
        
    } catch (error) {
        db.query("INSERT INTO logging (Message, Status) VALUES (?,?)",["error fetching an api","failure"]);                           //Adding logging information to logging table
        throw error;
        
    }
    
})

module.exports = router;