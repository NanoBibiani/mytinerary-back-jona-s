const Itineraries = require('../models/Itinerary')



const itinerariesController = {

    createItinerary: async(req, res) => {
       
        const {name, user, city, price, likes, tags, duration} = req.body
        new Itineraries({
            name: name,
            user: user,
            city: city,
            price: price,
            likes: likes,
            tags: tags,
            duration: duration,
        }).save()
        .then((respuesta)=> res.json({respuesta}))
    },


    deleteItinerary: async (req, res)=> {
        const id = req.params.id
        console.log(req.params)
        await Itineraries.findOneAndDelete({_id: id})
    },


    modifyItinerary: async (req, res)=> {
        console.log(req.body)
        console.log(req.params)
        const id = req.params.id
        const itinerary = req.body

        let itineraryb = await Itineraries.findOneAndUpdate({_id: id}, itinerary, {new: true})
        console.log(itineraryb)
        
        res.json({respuesta: itineraryb})
    },

    itineraryOneCity: async (req, res) => {
        const id = req.params.city
        console.log(req.params)
        let itinerary
        let error = null

        try{
            itinerary = await Itineraries.findOne({_id:id}, itinerary)
            console.log(itinerary)
        }catch(err){
            error = err
            console.log(error)
        }
        res.json({
            response: error ? 'ERROR' : itinerary,
            success: error ? false : true,
            error : error
        })
    },


}


module.exports = itinerariesController
