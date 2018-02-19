const expect = require('chai').expect
// const request = require('request')
const chai = require('chai')
const chaiHttp = require('chai-http')
chai.use(chaiHttp)
let TEST_PORT = 8081

process.env.APP_PORT = TEST_PORT

var application
describe("User Service", function () {
    describe("User maintenance", function () {
        let createdUser = []
        before(async function () {
            application = await require('../app');
        })

        it("Should be able to create a new user ", function (done) {
            let newUser = {
                "name": "Kutti",
                "age": 30,
                "job": "Architect"
            }
            chai.request(application)
                .post('/users/')
                .set('content-type', 'application/json')
                .send(newUser)
                .end((err, res) => {
                    expect(res.statusCode).to.equal(200)
                    expect(res.body).to.be.an('array')
                    createdUser = res.body
                    done()
                })
        })

        it('Should be able to fetch all Users ', function (done) {
            chai.request(application)
                .get('/users/')
                .set('content-type', 'application/json')
                .end((err, res) => {
                    expect(res.statusCode).to.equal(200)
                    expect(res.body).to.be.an("array")
                    done()
                })

        })

        it("Should be able to fetch user details with Id ", function (done) {
            let userid = createdUser[0].id
            chai.request(application)
                .get(`/users/${userid}`)
                .set('content-type', 'application/json')
                .end((err, res) => {
                    expect(res.statusCode).to.equal(200)
                    expect(res.body.id).to.equal(createdUser[0].id)
                    done()
                })
        })

        it("Should be able to delete newly created user ", function (done) {
            let newUserId = createdUser[0].id
            chai.request(application)
                .del(`/users/${newUserId}`)
                .set('content-type', 'application/json')
                .end((err, res) => {
                    expect(res.statusCode).to.equal(200)
                    done()
                })
        })
    })

    after((done) => {
        process.exit(0)
        done()
    })

})