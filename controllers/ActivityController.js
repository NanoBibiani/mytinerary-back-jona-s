const activity = require('../models/Activity')


const ActivityController = {
    create: async(req,res)=>{
       
        try{
            await new activity(req.body).save()
            res.status(201).json({
                messaje : "activity created",
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
            let oneActivity = await  activity.findOne({_id:id}, req.body)
            if(oneCity){
                res.status(200).json({
                    messaje: " Activity finded",
                    response: oneActivity,
                    success:true
                })

            }else{
                res.status(404).json({
                    messaje : "Activity not finded",
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
            let activityUpdate = await  activity.findOneAndUpdate({_id:id}, req.body)
            if(activityUpdate){
                res.status(200).json({
                    messaje: " city finded",
                    response: activityUpdate,
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

    deleteActivity : async(req,res)=>{
        const {id} = req.params
        
        try{
            
           let deleteActivity = await activity.findOneAndDelete({_id : id})
           if(deleteActivity){
            res.status(200).json({
                messaje:"activity deleted",
                response: deleteActivity,
                success:true
            })
           }else{
            res.status(404).json({
                messaje : "activity not finded",
                success:false
            })
           }
            
            
            
        }catch(error){
            res.status(400).json({
                messaje:error,
                success: false
            })
        }
    },

    all : async (req,res)=>{

        let query = {}

        if(req.query.itinerary){
            query.itinerary = req.query.itinerary
        }

        if(req.query.name){
            query.name =  { $regex: '^' + req.query.name.trim(), $options: 'i' };
        }


        let activiesAll;

        try{
            activiesAll = await activity.find(query)
            res.status(200)
            res.json(activiesAll)
        }catch(err){
            console.log(err)
            res.status(500)
        }
    },

}
export default ActivityController