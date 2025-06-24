const request = require('supertest');
const { app, connectDB } = require('../../src/app');
const { disconnectDB } = require('../testHelpers');
const UserModel = require('../../src/models/userModel');

describe('Users API Tests', () => {
  beforeAll(async () => {
    await connectDB();
  });

  afterAll(async () => {
    await disconnectDB();
  });

  afterEach(async () => {
    await UserModel.deleteMany({});
  });

  describe('POST /users', () => {
    it('should create a new user', async () => {
      const response = await request(app)
        .post('/users')
        .send({
          name: 'API Test',
          email: 'api@test.com'
        })
        .expect(201);

      expect(response.body).toHaveProperty('_id');
      expect(response.body.name).toBe('API Test');
    });
  });

  describe('GET /users/:id', () => {
    it('should retrieve a user', async () => {
      const createResponse = await request(app)
        .post('/users')
        .send({
          name: 'Test User',
          email: 'test@example.com'
        });

      const getResponse = await request(app)
        .get(`/users/${createResponse.body._id}`)
        .expect(200);

      expect(getResponse.body.name).toBe('Test User');
    });
  });
});
