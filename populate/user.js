require('dotenv').config()
const db = require('../config/database')

const userPopulate = require("../models/User")

userPopulate.create({
    name:"Juan",
    lastName:"Perez",
    mail:"juanperez@gmail.com",
    password:"juan1234",
    photo:"acá va la foto",
    country:"Argentina"
},
{
    name:"Roberto",
    lastName:"Gomez",
    mail:"robertogomez@gmail.com",
    password:"roberto1234",
    photo:"acá va la foto",
    country:"Uruguay" 
},
{
    name:"Raul",
    lastName:"Fernandez",
    mail:"raulfernandez@gmail.com",
    password:"raul1234",
    photo:"acá va la foto",
    country:"Colombia"
},
{
    name:"Enrique",
    lastName:"Garcia",
    mail:"enriquegarcia@gmail.com",
    password:"enrique1234",
    photo:"acá va la foto",
    country:"Paraguay"
},
{
    name:"Jose",
    lastName:"Dominguez",
    mail:"josedominguez@gmail.com",
    password:"jose1234",
    photo:"acá va la foto",
    country:"Ecuador"
},
{
    name:"Riley",
    lastName:"Johnson",
    mail:"rileyohnson@gmail.com",
    password:"riley1234",
    photo:"acá va la foto",
    country:"Estados unidos"
},
{
    name:"Hunter",
    lastName:"Miller",
    mail:"huntermiller@gmail.com",
    password:"hunter1234",
    photo:"acá va la foto",
    country:"Canada"
},
{
    name:"Hans",
    lastName:"Wyss",
    mail:"hanswyss@gmail.com",
    password:"hans1234",
    photo:"acá va la foto",
    country:"Suiza" 
}
)