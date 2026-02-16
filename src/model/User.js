export default class User {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    isValid() {
        return this.name && this.email;
    }
}
