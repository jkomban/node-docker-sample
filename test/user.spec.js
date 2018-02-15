// const expect = require('chai').expect
// const request = require('request')
const chai = require('chai')
const chaiHttp = require('chai-http')
chai.use(chaiHttp)

var application = require('../app');
describe("This is first test feature", function () {
    describe("This is first scenario", function () {

        it("Check if User 1 exists ", function (done) {
            // console.log(chai.request)
            chai.request(application)
                .get('/user-management/users/1')
                .set('content-type', 'application/json')
                .end(() => {
                    // console.log(err.response)
                    // console.log(res.error);
                    // console.log("TEXT", res.text)
                    done()
                })

        })
    })

    after((done) => {
        process.exit(0)
        done()
    })

})