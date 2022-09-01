require('dotenv').config()
const db = require('../config/database')

const Cities = require("../models/Cities")

Cities.create({
    city:"Reikiavik",
    country:"Iceland",
    photo:"https://cdn.pixabay.com/photo/2014/08/08/21/02/iceland-413700_960_720.jpg",
    population:"2669600",
    fundation:"1715"
},
{
    city:"Seattle",
    country:"United States",
    photo:"https://cdn.pixabay.com/photo/2016/11/23/15/32/pedestrians-1853552_960_720.jpg",
    population:"4669600",
    fundation:"1515" 
},
{
    city:"Auckland",
    country:"New Zeland",
    photo:"https://cdn.pixabay.com/photo/2017/06/15/18/57/journey-2406354_960_720.jpg",
    population:"669600",
    fundation:"1715"  
},
{
    city:"Alberta",
    country:"Canada",
    photo:"https://cdn.pixabay.com/photo/2016/10/30/20/40/snowy-peaks-1784279_960_720.jpg",
    population:"5669600",
    fundation:"1887" 
},
{
    city:"Zurich",
    country:"Switzerland",
    photo:"https://cdn.pixabay.com/photo/2018/10/02/23/13/autumn-3720160_960_720.jpg",
    population:"969600",
    fundation:"1787"
},
{
    city:"Pristina",
    country:"Kosovo",
    photo:"https://cdn.pixabay.com/photo/2018/05/26/09/27/prizren-3430989_960_720.jpg",
    population:"569600",
    fundation:"1987"
},
{
    city:"Dolomites",
    country:"Italy",
    photo:"https://cdn.pixabay.com/photo/2017/08/11/10/20/dolomites-2630272_960_720.jpg",
    population:"569600",
    fundation:"1987" 
},
{
    city:"Himalayas",
    country:"Nepal",
    photo:"https://cdn.pixabay.com/photo/2016/02/10/17/45/village-1192158_960_720.jpg",
    population:"9549600",
    fundation:"1927"
},
{
    city:"Phuket",
    country:"Tahiland",
    photo:"https://cdn.pixabay.com/photo/2017/02/21/00/54/beach-2084350_960_720.jpg",
    population:"9548600",
    fundation:"1927" 
},
{
    city:"Bordeaux",
    country:"France",
    photo:"https://cdn.pixabay.com/photo/2018/12/15/14/44/bordeaux-3876995_960_720.jpg",
    population:"9948600",
    fundation:"1627" 
},
{
    city:"Miami",
    country:"United States",
    photo:"https://cdn.pixabay.com/photo/2016/01/30/02/22/people-1169019_960_720.jpg",
    population:"9948600",
    fundation:"1627" 
}
)

console.log(Cities)