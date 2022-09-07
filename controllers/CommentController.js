const comment = require('../models/Comment')


const CommentController = {
    create: async(req,res)=>{
       
        try{
            await new comment(req.body).save()
            res.status(201).json({
                messaje : "comment created",
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
            let oneComment = await  comment.findOne({_id:id}, req.body)
            if(oneComment){
                res.status(200).json({
                    messaje: " comment finded",
                    response: oneComment,
                    success:true
                })

            }else{
                res.status(404).json({
                    messaje : "Comment not finded",
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
            let CommentUpdate = await  comment.findOneAndUpdate({_id:id}, req.body)
            if(CommentUpdate){
                res.status(200).json({
                    messaje: " comment finded",
                    response: CommentUpdate,
                    success:true
                })

            }else{
                res.status(404).json({
                    messaje : "Comment not finded",
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

    deleteComment : async(req,res)=>{
        const {id} = req.params
        
        try{
            
           let deleteComment = await comment.findOneAndDelete({_id : id})
           if(deleteComment){
            res.status(200).json({
                messaje:"activity deleted",
                response: deleteComment,
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

        let commented;

        try{
            commented = await comment.find(query)
            res.status(200)
            res.json(commented)
        }catch(err){
            console.log(err)
            res.status(500)
        }
    },


}
module.exports= CommentController