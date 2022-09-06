const City = require('../models/Cities')

const CityController = {
    create: async(req,res)=>{
       
        try{
            await new City(req.body).save()
            res.status(201).json({
                messaje : "city created",
                success : true
            })
        }catch(error){
            console.log(error)
            res.status(401).json({
                messaje : error,
                success : false
            })
        }
    },


    read: async(req,res)=>{
        const {id} = req.params
        const {city,country,photo,population,fundation} = req.body
        try{
            let oneCity = await  City.findOne({_id:id}, req.body)
            if(oneCity){
                res.status(200).json({
                    messaje: " city finded",
                    response: oneCity,
                    success:true
                })

            }else{
                res.status(404).json({
                    messaje : "city not finded",
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
            let cityUpdate = await  City.findOneAndUpdate({_id:id}, req.body)
            if(cityUpdate){
                res.status(200).json({
                    messaje: " city finded",
                    response: cityUpdate,
                    success:true
                })

            }else{
                res.status(404).json({
                    messaje : "city not finded",
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

    deleteCity : async(req,res)=>{
        const {id} = req.params
        
        try{
            
           let deleteCity = await City.findOneAndDelete({_id : id})
            

                res.status(200).json({
                    messaje:"city deleted",
                    response: deleteCity,
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

        let cities;

        try{
            cities = await City.find(query)
            res.status(200)
            res.json(cities)
        }catch(err){
            console.log(err)
            res.status(500)
        }
    },


}


module.exports = CityController
