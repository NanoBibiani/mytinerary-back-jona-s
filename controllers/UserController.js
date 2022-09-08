const user = require('../models/User')


const UserController = {
    create: async(req,res)=>{
       
        try{
            await new user(req.body).save()
            res.status(201).json({
                messaje : "user created",
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
            let oneUser = await  user.findOne({_id:id}, req.body)
            if(oneUser){
                res.status(200).json({
                    messaje: " comment finded",
                    response: oneUser,
                    success:true
                })

            }else{
                res.status(404).json({
                    messaje : "user not finded",
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
            let userUpdate = await  user.findOneAndUpdate({_id:id}, req.body)
            if(userUpdate){
                res.status(200).json({
                    messaje: " user finded",
                    response: userUpdate,
                    success:true
                })

            }else{
                res.status(404).json({
                    messaje : "user not finded",
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

    deleteUser : async(req,res)=>{
        const {id} = req.params
        
        try{
            
           let deleteuser = await user.findOneAndDelete({_id : id})
           if(deleteuser){
            res.status(200).json({
                messaje:"user deleted",
                response: deleteuser,
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

        let usered;

        try{
            usered = await user.find(query)
            res.status(200)
            res.json(usered)
        }catch(err){
            console.log(err)
            res.status(500)
        }
    },



}
module.exports= UserController