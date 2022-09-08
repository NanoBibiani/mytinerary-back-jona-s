require('dotenv').config()
const db = require('../config/database')

const itinerariesPopulate = require("../models/Itinerary")

itinerariesPopulate.create({
    name:"Miami Beach", 
    user:"631900b906cc233a01f4004c",
    city:"631904a942acafeae08637e9",
    price:"0",
    likes:"[3]",
    tags:"[Miami,Beach,Party]",
    duration:"5"
},
{
    name:"Bordeaux Cathedral", 
    user:"631900b906cc233a01f4004c",
    city:"631904a942acafeae08637e9",
    price:"500",
    likes:"[2]",
    tags:"[Bordeaux,Cathedral,France]",
    duration:"2"
},
{
    name:"Big Buddha Phuket", 
    user:"631900b906cc233a01f4004c",
    city:"631904a942acafeae08637e9",
    price:"900",
    likes:"[5]",
    tags:"[Buddha,Phuket,Tahiland]",
    duration:"1"
},
{
    name:"Katmandu", 
    user:"631900b906cc233a01f4004d",
    city:"631904a942acafeae08637ea",
    price:"950",
    likes:"[3]",
    tags:"[Katmandu,Himalayas,Nepal]",
    duration:"1"
},
{
    name:"Climb The Himalayas", 
    user:"631900b906cc233a01f4004d",
    city:"631904a942acafeae08637ea",
    price:"1000",
    likes:"[2]",
    tags:"[Climb,Himalayas,Nepal]",
    duration:"8"
},
{
    name:"Rafting", 
    user:"631900b906cc233a01f4004d",
    city:"631904a942acafeae08637ea",
    price:"1200",
    likes:"[7]",
    tags:"[Rafting,Dolomites,Italy]",
    duration:"5"
},
{
    name:"Lake Braies", 
    user:"631900b906cc233a01f4004e",
    city:"631904a942acafeae08637eb",
    price:"700",
    likes:"[3]",
    tags:"[Lake,Dolomites,Italy,Bries]",
    duration:"3"
},
{
    name:"Swiss National Museum", 
    user:"631900b906cc233a01f4004e",
    city:"631904a942acafeae08637eb",
    price:"700",
    likes:"[5]",
    tags:"[Swiss,Museum,Switzerland]",
    duration:"4"
},
{
    name:"FIFA World Football Museum", 
    user:"631900b906cc233a01f4004e",
    city:"631904a942acafeae08637eb",
    price:"750",
    likes:"[8]",
    tags:"[Swiss,Museum,Switzerland,Fifa]",
    duration:"3"
},/////////////////////////////////////////////////////////////////////
{
    name:"Climb The Himalayas", 
    user:"631900b906cc233a01f4004e",
    city:"631904a942acafeae08637ec",
    price:"1000",
    likes:"[2]",
    tags:"[Climb,Himalayas,Nepal]",
    duration:"8"
},
{
    name:"Rafting", 
    user:"631900b906cc233a01f4004f",
    city:"631904a942acafeae08637ec",
    price:"1200",
    likes:"[7]",
    tags:"[Rafting,Dolomites,Italy]",
    duration:"5"
},//
{
    name:"Lake Braies", 
    user:"631900b906cc233a01f4004f",
    city:"631904a942acafeae08637e8",
    price:"700",
    likes:"[3]",
    tags:"[Lake,Dolomites,Italy,Bries]",
    duration:"3"
},
{
    name:"Swiss National Museum", 
    user:"631900b906cc233a01f4004f",
    city:"631904a942acafeae08637e8",
    price:"700",
    likes:"[5]",
    tags:"[Swiss,Museum,Switzerland]",
    duration:"4"
},///
{
    name:"FIFA World Football Museum", 
    user:"631900b906cc233a01f4004f",
    city:"631904a942acafeae08637e7",
    price:"750",
    likes:"[8]",
    tags:"[Swiss,Museum,Switzerland,Fifa]",
    duration:"3"
},
{
    name:"FIFA World Football Museum", 
    user:"631900b906cc233a01f4004b",
    city:"631904a942acafeae08637e7",
    price:"750",
    likes:"[8]",
    tags:"[Swiss,Museum,Switzerland,Fifa]",
    duration:"3"
},//////////////////////////////////////
{
    name:"Miami Beach", 
    user:"631900b906cc233a01f4004b",
    city:"631904a942acafeae08637ef",
    price:"0",
    likes:"[3]",
    tags:"[Miami,Beach,Party]",
    duration:"5"
},
{
    name:"Bordeaux Cathedral", 
    user:"631900b906cc233a01f4004b",
    city:"631904a942acafeae08637f0",
    price:"500",
    likes:"[2]",
    tags:"[Bordeaux,Cathedral,France]",
    duration:"2"
},
{
    name:"Big Buddha Phuket", 
    user:"631900b906cc233a01f4004b",
    city:"631904a942acafeae08637f1",
    price:"900",
    likes:"[5]",
    tags:"[Buddha,Phuket,Tahiland]",
    duration:"1"
},
)