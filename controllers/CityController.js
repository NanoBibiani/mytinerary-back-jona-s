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
        try{
            await new City.findOne({_id:id})
            if(City){
                res.status(200).json({
                    messaje: " city finded",
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
        try{
            await new City.findOneAndUpdate({_id:id}).save()
            if(City){
                res.status(200).json({
                    messaje: " city updated",
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
            
            await new City . findOneAndDelete({_id : id})
            if(City){

                res.status(200).json({
                    messaje:"city deleted",
                    success:true
                })
            }else{
                res.status(404).json({
                    messaje:"city not finded",
                    success:false
                })
            }
        }catch(error){
            res.status(400).json({
                messaje:error,
                success: false
            })
        }
    }
   

}


module.exports = CityController
