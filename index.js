require('express-async-errors');
const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./db')
const getAllCompanies = require("./Controllers/get_all")
const getCompany = require("./Controllers/get_by_id")
const Delete = require("./Controllers/delete")
const Add = require("./Controllers/add")
const Update = require("./Controllers/update")
const SignUp = require("./Controllers/sign_up")
const email = require("./Controllers/getEmail")
const password = require("./Controllers/getPassword")


//To check if our database connection is successful. Only of the connection is succssful our node.js server will start at port 3000
db.query("SELECT 1")
.then(() => {
    console.log("connection successful")
    app.listen(3000,
        () => console.log("Server started at 3000"))
})
.catch(error => console.log("Db connection failed \n"+error));

app.use(cors());                      //Enabling cross-origin-resource-enabling so that the api can be accessible from the frontend url also
app.use(express.json());            

//To get all the details of all the companies
app.use('/api/companies',getAllCompanies);

//To get a company by its id
app.use('/api/company',getCompany);

//To delete a company by its id
app.use('/api/company',Delete);

//To Add a company 
app.use('/api/company',Add);

//To update a company by its id
app.use('/api/company',Update);

//To sign_up
app.use('/api/signUp',SignUp);

//To get email of user
app.use('/api/getEmail',email);

//To get password of user
app.use('/api/getPassword',password);