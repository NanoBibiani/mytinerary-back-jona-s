require("dotenv").config()
const db = require('../config/database')

const Cities = require("../models/Cities")

 Cities.create({
    city:"Reikiavik",
    country:"Islandia",
    photo:"https://cdn.pixabay.com/photo/2014/08/08/21/02/iceland-413700_960_720.jpg",
    population:"69000",
    fundation:"1810"
})