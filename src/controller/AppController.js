import User from '../model/User';

class AppController {
    static login(username, password) {
        // Simulate logic
        console.log(`Attempting login for ${username}`);
        return new User('123', username, `${username}@example.com`);
    }

    static validateInput(input) {
        return input.length > 0;
    }
}

export default AppController;
