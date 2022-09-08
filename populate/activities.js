require('dotenv').config()
const db = require('../config/database')

const activitiesPopulate = require("../models/Activity")

activitiesPopulate.create({
        name:"Go to bike",
        photo:"aca va la foto",
        itinerary:"63190b97c33fd4942c703f0f"

},
{
    name:"Go to bike",
    photo:"aca va la foto",
    itinerary:"63190b97c33fd4942c703f10"

},
{
    name:"Go to train",
    photo:"aca va la foto",
    itinerary:"63190b97c33fd4942c703f10"

},
{
    name:"Go to walk",
    photo:"aca va la foto",
    itinerary:"63190b97c33fd4942c703f11"

},
{
    name:"Go to mountain",
    photo:"aca va la foto",
    itinerary:"63190b97c33fd4942c703f11"

},
{
    name:"wacht football",
    photo:"aca va la foto",
    itinerary:"63190b97c33fd4942c703f12"

},
{
    name:"look the sunset",
    photo:"aca va la foto",
    itinerary:"63190b97c33fd4942c703f12"

},
{
    name:"play basquetball",
    photo:"aca va la foto",
    itinerary:"63190b97c33fd4942c703f0e"

},
{
    name:"swim in the lake",
    photo:"aca va la foto",
    itinerary:"63190b97c33fd4942c703f0e"

}

)