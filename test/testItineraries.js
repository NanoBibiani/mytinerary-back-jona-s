// const request = require('supertest')
// const app = require( '../app')
// const {assert}=require('chai')


// describe('POST /itineraries',function(){

//     it('Must rensponse with the id',function(done){
//         request(app)
//         .post('/itineraries')
//         .send({
//             name:'ontario',
//             user:'roman',
//             city:'seattle',
//             price:'4250',
//             duration:'254',
 //            tags:[a,b],
 //            likes:[a,x]
//         })
//        .then(response=>{
//         assert.isString(response.id)
//         done()
//        })

//     }),



//     it('Must rensponse with status code 201',function(done){
//         request(app)
//         .post('/itineraries')
//         .send({
//             name:'ontario',
//             user:'roman',
//             city:'seattle',
//             price:'4250',
//             duration:'254',
 //               tags:[a,b],
 //               likes:[a,x]
//         })
//         .expect(201)
//         .end(function(err,res){
//             if(err)return done(err);
//             return done()
//         })
//
//     }),
//     it('Must rensponse with status code 400',function(done){
//         request(app)
//         .post('/itineraries')
//         .send({ })
//         .expect(400,done)
 //     
//
//     })
// })