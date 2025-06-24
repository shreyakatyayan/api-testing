const UserService = require('../../src/services/userService');
const UserModel = require('../../src/models/userModel');

jest.mock('../../src/models/userModel');

describe('UserService Unit Tests', () => {
  describe('createUser', () => {
    it('should create a new user', async () => {
      const mockUser = { _id: '1', name: 'Test User', email: 'test@example.com' };
      UserModel.prototype.save.mockResolvedValue(mockUser);
      
      const result = await UserService.createUser('Test User', 'test@example.com');
      
      expect(result).toEqual(mockUser);
    });

    it('should throw error when email is missing', async () => {
      await expect(UserService.createUser('Test User', ''))
        .rejects
        .toThrow('Email is required');
    });
  });

  describe('getUserById', () => {
    it('should return a user', async () => {
      const mockUser = { _id: '1', name: 'Test User', email: 'test@example.com' };
      UserModel.findById.mockResolvedValue(mockUser);
      
      const result = await UserService.getUserById('1');
      expect(result).toEqual(mockUser);
    });
  });
});
