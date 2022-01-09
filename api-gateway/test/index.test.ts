import chai, { assert } from 'chai'
import chaiHttp from 'chai-http'
import { app } from '../src'

chai.use(chaiHttp)

suite('Functional Tests', () => {
  suite('Test request "/" with invalid query', () => {
    test('Expected status code 400 when pages query is invalid', async () => {
      const res = await chai.request(app).get('/api/trips?pages=dfasdf')
      assert.strictEqual(res.status, 400)
      assert.strictEqual(res.body.error, 'Pages query must be integer')
      return
    })

    test('Expected status code 400 when limit query is invalid', async () => {
      const res = await chai.request(app).get('/api/trips?limit=dsafsdf')
      assert.strictEqual(res.status, 400)
      assert.strictEqual(res.body.error, 'Limit query must be integer')
      return
    })

    test('Expected status code 400 when limit and pages query are invalid', async () => {
      const res = await chai
        .request(app)
        .get('/api/trips?limit=dsafsdf&&pages=dfasd')
      assert.strictEqual(res.status, 400)
      assert.strictEqual(
        res.body.error,
        'Limit and Pages query must be integer'
      )
      return
    })

    test('Expected status code 400 when limit is less than or equal zero', async () => {
      const res = await chai.request(app).get('/api/trips?limit=-1')
      assert.strictEqual(res.status, 400)
      assert.strictEqual(
        res.body.error,
        'Limit query cannot less than or equal zero'
      )
      return
    })
  })

  // Testing on mock data in json-server only

  suite('Test request "/" with limit query', async () => {
    test('Expected allPages to be 4 when limit is 3', async () => {
      const res = await chai.request(app).get('/api/trips?limit=3')
      assert.strictEqual(res.status, 200)
      assert.strictEqual(res.body.allPages, 4)
    })

    test('Expected allPages to be 1 when limit is 99', async () => {
      const res = await chai.request(app).get('/api/trips?limit=99')
      assert.strictEqual(res.status, 200)
      assert.strictEqual(res.body.allPages, 1)
    })
  })

  suite('Test request "/" with search query', async () => {
    test('Expected trips have only 1 result (with eid 8) when search is "ญี่ปุ่น"', async () => {
      const query = encodeURI('ญี่ปุ่น')
      const res = await chai.request(app).get(`/api/trips?search=${query}`)
      assert.strictEqual(res.status, 200)
      assert.strictEqual(res.body.trips.length, 1)
      assert.strictEqual(res.body.trips[0].eid, '8')
    })
  })

  suite('Test request "/" with search query', async () => {
    test('Expected trips have only 1 result (with eid 8) when search query is "ญี่ปุ่น"', async () => {
      const query = encodeURI('ญี่ปุ่น')
      const res = await chai.request(app).get(`/api/trips?search=${query}`)
      assert.strictEqual(res.status, 200)
      assert.strictEqual(res.body.trips.length, 1)
      assert.strictEqual(res.body.trips[0].eid, '8')
    })

    test('Expected trips have 4 results (with eid 1, 4, 6, 8) when search query is "ทะเล"', async () => {
      const query = encodeURI('ทะเล')
      const target = [1, 4, 6, 8]
      const res = await chai.request(app).get(`/api/trips?search=${query}`)
      const trips = res.body.trips as any[]

      assert.strictEqual(res.status, 200)
      assert.strictEqual(trips.length, 4)

      const eidTrips = trips.map((val) => +val.eid)
      assert.deepEqual(eidTrips, target)
    })
  })

  suite('Test request "/" with pages query', async () => {
    test('Expected trips have 5 results (with eid 1, 2, 3, 4, 5) when pages query is 1', async () => {
      const target = [1, 2, 3, 4, 5]
      const res = await chai.request(app).get(`/api/trips?pages=1`)
      const trips = res.body.trips as any[]
      assert.strictEqual(res.status, 200)
      assert.strictEqual(trips.length, 5)

      const eidTrips = trips.map((val) => +val.eid)
      assert.deepEqual(eidTrips, target)
    })

    test('Expected trips have 5 results (with eid 6, 7, 8, 9, 10) when pages query is 2', async () => {
      const target = [6, 7, 8, 9, 10]
      const res = await chai.request(app).get(`/api/trips?pages=2`)
      const trips = res.body.trips as any[]
      assert.strictEqual(res.status, 200)
      assert.strictEqual(trips.length, 5)

      const eidTrips = trips.map((val) => +val.eid)
      assert.deepEqual(eidTrips, target)
    })
  })
})
