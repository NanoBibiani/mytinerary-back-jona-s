const Itineraries = require('../models/Itinerary')


const ItinerariesController = {
    create: async(req,res)=>{
       
        try{
            await new Itineraries(req.body).save()
            res.status(201).json({
                messaje : "Itineraries created",
                success : true,
                id:req.body.id
            })
        }catch(error){
            console.log(error)
            res.status(400).json({
                messaje : error,
                success : false,
            })
        }
    },


    read: async(req,res)=>{
        const {id} = req.params
        const {city,country,photo,population,fundation} = req.body
        try{
            let oneItineraries = await  Itineraries.findOne({_id:id}, req.body)
            if(oneItineraries){
                res.status(200).json({
                    messaje: " Itineraries finded",
                    response: oneItineraries,
                    success:true
                })

            }else{
                res.status(404).json({
                    messaje : "Itineraries not finded",
                    success:false
                })
            }

        }catch(error){
            console.log(error)
            res.status(400).json({
                messaje:error,
                success:false
            })
        }

    },


    update: async(req,res)=>{
        const {id} = req.params
        const {city,country,photo,population,fundation} = req.body
        try{
            let ItinerariesUpdate = await  Itineraries.findOneAndUpdate({_id:id}, req.body)
            if(ItinerariesUpdate){
                res.status(200).json({
                    messaje: " Itineraries finded",
                    response: ItinerariesUpdate,
                    success:true
                })

            }else{
                res.status(404).json({
                    messaje : "Itineraries not finded",
                    success:false
                })
            }

        }catch(error){
            console.log(error)
            res.status(400).json({
                messaje:error,
                success:false
            })
        }

    },

    deleteItinery : async(req,res)=>{
        const {id} = req.params
        
        try{
            
           let deleteItineraries = await Itineraries.findOneAndDelete({_id : id})
            

                res.status(200).json({
                    messaje:"Itineraries deleted",
                    response: deleteItineraries,
                    success:true
                })
            
            
        }catch(error){
            res.status(400).json({
                messaje:error,
                success: false
            })
        }
    },


   all: async (req,res) =>{
        let query = {}

        if(req.query.country){
            query.country = req.query.country
        }

        if(req.query.city){
            query.city =  { $regex: '^' + req.query.city, $options: 'i' };
        }

        if(req.query.fundation){
            query.fundation = req.query.fundation
        }

        let ItinerariesAll;

        try{
            ItinerariesAll = await Itineraries.find(query)
            res.status(200)
            res.json(ItinerariesAll)
        }catch(err){
            console.log(err)
            res.status(500)
        }
    },


}


module.exports = ItinerariesController
