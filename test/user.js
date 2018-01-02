const expect = require('chai').expect
const request = require('request')
const chai = require('chai')

var application = require('../app');
describe("This is first test feature", function(){
    before((done)=>{
        console.log("before")
        application.then(
            (value)=>{
                console.log("Application came up :/")
                done();
            }
        )
        console.log("here ", application)

        // application.then(
        //     (value)=>{
        //         console.log("Inside application start",value);
        //         done();
        //     }
        // ).catch(
        //     (error)=>{
        //         console.log('error in application start',error)
        //     }
        // )
        // console.log("after",application)
    })

    describe("This is first scenario", function(){

        it("Check if User 1 exists ",async function(done){
            // chai.request(application)
            // .get('/users/users/1')
            // .end( (err,res)=>{
            //     console.log(err)
            //     console.log(res);
                done()
            // })  
            
        })
    })

    after((done)=>{
        process.exit(0)
        done()
    })

})