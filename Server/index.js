const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/model-user')
require('dotenv').config() // to use the .env file in our project

const app = express()
app.use(cors({
  origin: 'https://swift-manage.vercel.app',
  credentials: true
})); // cross origin to access the server side in our frontend
app.use(express.json()) // For whenever we pass data from frontend to the button so it will force that to JSON format if we don't do this it will give an error

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err))

// To write the api for server side, for get method
app.get('https://swift-manage.vercel.app',(req,res)=>{
    UserModel.find({})
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

app.get('https://swift-manage.vercel.app/getUser/:id', (req,res)=>{
    const id = req.params.id // it will get the id from the url
    UserModel.findById({_id:id})
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

// For updating the values in the database
app.put('https://swift-manage.vercel.app/updateUser/:id', (req,res)=>{
    const id = req.params.id
    UserModel.findByIdAndUpdate({_id:id}, {name: req.body.name, email:req.body.email, age:req.body.age})
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

// For deleting the recorrd
app.delete('https://swift-manage.vercel.app/deleteUser/:id', (req,res)=>{
  const id = req.params.id
  UserModel.findByIdAndDelete(id)
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

// Creating API for new record
// Parameters --- 1- Path, 2- Callback function
app.post('https://swift-manage.vercel.app/createUser', (req,res)=>{
    // The data sending from frontend will be attached to this body
    UserModel.create(req.body)
    .then(
        users=>{
            console.log('working');
            
            res.json((users))
        }
    )
    .catch((err)=>{res.json(err)})
})

app.listen(3000, ()=>{
    console.log('server is running');
})

