const serverless = require("serverless-http");
const express = require("express")
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()
const User = require('./user.model.js')

app.use(express.json())

mongoose.connect(process.env.DATABASE)
.then(() => {
    console.log('Mongodb conectado com sucesso!')
}).catch((e) => {
    console.log(e)
})



//dados user =========================================================================

app.get("/", (req, res) => {
    res.send("Rodando o sistema  em: User")
})

app.get("/users", async(req, res) => {
    const user = await User.find()
    res.json(user)
})

app.get("/users/:id", async(req, res) => {

    try{
        const {id} = req.params
        const user = await User.findById(id)
        res.json(user)
    }catch(e){
        console.log(e)
    }
   
})

app.delete("/users/:id", async(req, res) => {
    try{

        //const _id = req.params.id
       // const response = await User.deleteOne({_id})
        const {id} = req.params
        const response = await User.deleteOne({_id: id})
        res.json(response)
    }catch(e){
        conosole.log(e)
    }
    
})

app.put("/users/:id", async (req, res) => {
    try{
        const _id = req.params.id
        const user = await User.updateOne({_id}, req.body)
        //res.status(201).json(response)
        res.json(user)

    }catch(e){
        console.log(e)
    }
    
})


//aula sexta feira
/*app.post("/users", async (req, res) => {
     const users = await User.find()
    res.json(users)
})*/

 //aula sexta feira
app.post("/users", async (req, res) => {
    try{
    const users = new User(req.body)
    const response = await users.save()
    res.json(response)
    }catch(e){
        console.log(e)
    }
   
})



//dados adress =========================================================================

const Adress = require('./adress.model.js')
app.use(express.json())


app.get("/", (req, res) => {
    res.send("Rodando o sistema  em: Adress")
})

app.get("/adress", async(req, res) => {
    const adress = await Adress.find()
    res.json(adress)
})


app.get("/adress/:id", async(req, res) => {

    try{
        const {id} = req.params
        const adress = await Adress.findById(id)
        res.json(adress)
    }catch(e){
        console.log(e)
    }
   
})

app.delete("/adress/:id", async(req, res) => {
    try{
        const {id} = req.params
        const response = await Adress.deleteOne({_id: id})
        res.json(response)
    }catch(e){
        conosole.log(e)
    }
    
})

app.put("/adress/:id", async (req, res) => {
    try{
        const _id = req.params.id
        const adress = await Adress.updateOne({_id}, req.body)
        //res.status(201).json(response)
        res.json(adress)

    }catch(e){
        console.log(e)
    }
    
})

app.post("/adress", async (req, res) => {
    try{
    const adress = new Adress(req.body)
    const response = await adress.save()
    res.json(response)
    }catch(e){
        console.log(e)
    }
   
})

//dados financeiros ===================================================================

const Finc = require('./finc.model.js')
app.use(express.json())


app.get("/finc/a", (req, res) => {
    res.send("Rodando o sistema  em: Financeiro")
})

app.get("/finc", async(req, res) => {
    const finc = await Finc.find()
    res.json(finc)
})


app.get("/finc/:id", async(req, res) => {

    try{
        const {id} = req.params
        const finc = await Finc.findById(id)
        res.json(finc)
    }catch(e){
        console.log(e)
    }
   
})

app.delete("/finc/:id", async(req, res) => {
    try{
        const {id} = req.params
        const response = await Finc.deleteOne({_id: id})        
        res.json(response)
        console.log("Coleção deletada com sucesso!")
    }catch(e){
        conosole.log(e)
        
    }
    
})

app.put("/finc/:id", async (req, res) => {
    try{
        const _id = req.params.id
        const finc = await Finc.updateOne({_id}, req.body)
        //res.status(201).json(response)
        res.json(finc)

    }catch(e){
        console.log(e)
    }
    
})

app.post("/finc", async (req, res) => {
    try{
    const finc = new Finc(req.body)
    const response = await finc.save()
    res.json(response)
    }catch(e){
        console.log(e)
    }
   
})



//dados profissionais ===================================================================

const Prof = require('./professional.model.js')
app.use(express.json()) 

app.get("/prof", async(req, res) => {
    const prof = await Prof.find()
    res.json(prof)
})


app.get("/prof/:id", async(req, res) => {

    try{
        const {id} = req.params
        const prof = await Prof.findById(id)
        res.json(prof)
    }catch(e){
        console.log(e)
    }
   
})

app.delete("/prof/:id", async(req, res) => {
    try{
        const {id} = req.params
        const response = await Prof.deleteOne({_id: id})        
        res.json(response)
        console.log("Coleção deletada com sucesso!")
    }catch(e){
        conosole.log(e)
        
    }
    
})

app.put("/prof/:id", async (req, res) => {
    try{
        const _id = req.params.id
        const prof = await Prof.updateOne({_id}, req.body)        
        res.json(prof)

    }catch(e){
        console.log(e)
    }
    
})

app.post("/prof", async (req, res) => {
    try{
    const prof = new Prof(req.body)
    const response = await prof.save()
    res.json(response)
    }catch(e){
        console.log(e)
    }
   
})





//process port===================================================================
app.listen(process.env.PORT, () => {
    console.log(`Serviço funcionando na porta: ${process.env.PORT}`)
})
//export module ===================================================================
module.exports.handler = serverless(app);
