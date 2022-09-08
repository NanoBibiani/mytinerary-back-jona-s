require('dotenv').config()
const db = require('../config/database')

const CommentsPopulate = require("../models/Comment")

CommentsPopulate.create({
    comment:"woooooow!",
    user:"Roberto Gomez",
    itinerary:"63190b97c33fd4942c703f0f"
},
{
    comment:"Amazing",
    user:"Raul Fernandez",
    itinerary:"63190b97c33fd4942c703f10"
},
{
    comment:"incredible experience...",
    user:"Enrique Garcia",
    itinerary:"63190b97c33fd4942c703f11"
},
{
    comment:"we will come back",
    user:"Juan Perez",
    itinerary:"63190b97c33fd4942c703f12"
},
{
    comment:"woooooow!",
    user:"Roberto Gomez",
    itinerary:"63190b97c33fd4942c703f0f"
},
{
    comment:"Amazing",
    user:"Raul Fernandez",
    itinerary:"63190b97c33fd4942c703f10"
},
{
    comment:"incredible experience...",
    user:"Enrique Garcia",
    itinerary:"63190b97c33fd4942c703f11"
},
{
    comment:"we will come back",
    user:"Juan Perez",
    itinerary:"63190b97c33fd4942c703f12"
},

)