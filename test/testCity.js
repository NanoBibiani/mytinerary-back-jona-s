// const request = require('supertest')
// const app = require( '../app')
// const {assert}=require('chai')


// describe('POST /cities',function(){

//     it('Must rensponse with the id',function(done){
//         request(app)
//         .post('/cities')
//         .send({
//             city:'ontario',
//             country:'canada',
//             photo:'http://localhost:3001/images',
//             population:'4250',
//             fundation:'254',
//         })
//        .then(response=>{
//         assert.isString(response.id)
//         done()
//        })

//     }),



//     it('Must rensponse with status code 201',function(done){
//         request(app)
//         .post('/cities')
//         .send({
//             city:'ontario',
//             country:'canada',
//             photo:'http://localhost:3001/images',
//             population:'4250',
//             fundation:'254'
//         })
//         .expect(201)
//         .end(function(err,res){
//             if(err)return done(err);
//             return done()
//         })

//     }),
//     it('Must rensponse with status code 400',function(done){
//         request(app)
//         .post('/cities')
//         .send({ })
//         .expect(400,done)
      

//     })
// })