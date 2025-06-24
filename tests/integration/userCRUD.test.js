const { connectDB, disconnectDB } = require('../testHelpers');
const UserService = require('../../src/services/userService');
const UserModel = require('../../src/models/userModel');

describe('User Service Integration Tests', () => {
  beforeAll(async () => {
    await connectDB();
  });

  afterAll(async () => {
    await disconnectDB();
  });

  afterEach(async () => {
    await UserModel.deleteMany({});
  });

  it('should create and retrieve a user', async () => {
    const user = await UserService.createUser('Integration Test', 'integration@test.com');
    const foundUser = await UserService.getUserById(user._id);
    
    expect(foundUser.name).toBe('Integration Test');
    expect(foundUser.email).toBe('integration@test.com');
  });

  it('should update a user', async () => {
    const user = await UserService.createUser('Test User', 'test@example.com');
    const updatedUser = await UserService.updateUser(user._id, { name: 'Updated Name' });
    
    expect(updatedUser.name).toBe('Updated Name');
  });
});
